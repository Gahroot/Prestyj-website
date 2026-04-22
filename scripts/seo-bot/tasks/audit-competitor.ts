import { promises as fs, writeFileSync } from "fs";
import path from "path";
import { z } from "zod";
import type {
  AppConfig,
  BacklogItem,
  DedupContext,
  LLMProvider,
  TaskExecutionResult,
} from "../types";

export interface OptimizationTaskInput {
  config: AppConfig;
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  taskPrompt: string;
  payload?: BacklogItem["payload"];
  dedupContext: DedupContext;
}

const FETCH_TIMEOUT_MS = 10_000;
const MAX_TEXT_CHARS = 6000;

const PayloadSchema = z.object({
  name: z.string().min(1),
  url: z.string().url(),
});

function flattenToString(v: unknown): string {
  if (typeof v === "string") return v;
  if (v === null || v === undefined) return "";
  if (Array.isArray(v)) return v.map(flattenToString).filter(Boolean).join("\n");
  if (typeof v === "object") {
    const obj = v as Record<string, unknown>;
    const lines: string[] = [];
    for (const [key, val] of Object.entries(obj)) {
      const rendered = flattenToString(val);
      if (rendered.length === 0) continue;
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (c) => c.toUpperCase())
        .trim();
      lines.push(`**${label}:** ${rendered}`);
    }
    return lines.join("\n");
  }
  return String(v);
}

function flattenToStringArray(v: unknown): string[] {
  if (Array.isArray(v)) {
    return v.map(flattenToString).filter((s) => s.length > 0);
  }
  const flat = flattenToString(v);
  return flat.length > 0 ? [flat] : [];
}

const AnyValue = z.unknown();

const ReportSchema = z
  .object({
    pricing: AnyValue.optional(),
    positioning: AnyValue.optional(),
    recentFeatures: AnyValue.optional(),
    gapsForPrestyj: AnyValue.optional(),
    // Tolerate alternative keys from the richer prompt structure
    recentFeatureAdditions: AnyValue.optional(),
    gaps: AnyValue.optional(),
  })
  .passthrough()
  .transform((obj) => ({
    pricing: flattenToString(obj.pricing) || "Pricing not stated.",
    positioning: flattenToString(obj.positioning) || "Positioning not stated.",
    recentFeatures: flattenToStringArray(
      obj.recentFeatures ?? obj.recentFeatureAdditions
    ),
    gapsForPrestyj: flattenToStringArray(obj.gapsForPrestyj ?? obj.gaps),
  }));

const AuditJsonSchema = {
  type: "object",
  properties: {
    pricing: { type: "string", description: "Pricing summary as text." },
    positioning: {
      type: "string",
      description: "How the competitor positions itself.",
    },
    recentFeatures: {
      type: "array",
      items: { type: "string" },
      description: "Notable recent features or updates.",
    },
    gapsForPrestyj: {
      type: "array",
      items: { type: "string" },
      description: "Opportunities / gaps Prestyj could exploit.",
    },
  },
  required: ["pricing", "positioning", "recentFeatures", "gapsForPrestyj"],
  additionalProperties: false,
} as const;

async function fetchWithTimeout(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; PrestyjSeoBot/1.0; +https://prestyj.com)",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      redirect: "follow",
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function stripHtml(html: string): string {
  // Drop script/style/noscript blocks wholesale before the generic tag strip.
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ");
  // decode a handful of common entities; anything else we leave literal.
  const decoded = stripped
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'");
  return decoded.replace(/\s+/g, " ").trim();
}

function parseJsonLoose(raw: string): unknown {
  const trimmed = raw.trim();
  // Try fenced first
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  let body = fenceMatch && fenceMatch[1] ? fenceMatch[1].trim() : trimmed;

  // Extract the largest valid-looking JSON block by first { to last }
  const firstBrace = body.indexOf("{");
  const lastBrace = body.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    body = body.slice(firstBrace, lastBrace + 1);
  }

  // Normalize smart quotes and trailing commas that LLMs sometimes emit
  body = body
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/,(\s*[}\]])/g, "$1");

  try {
    return JSON.parse(body);
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    const posMatch = errMsg.match(/position (\d+)/);
    const pos = posMatch ? parseInt(posMatch[1], 10) : 0;
    // Dump raw response for debugging
    try {
      writeFileSync("/tmp/seo-bot-raw.json", raw);
    } catch {
      /* ignore */
    }
    const contextStart = Math.max(0, pos - 30);
    const contextEnd = Math.min(body.length, pos + 30);
    const snippet = body.slice(contextStart, contextEnd);
    const hex = Array.from(snippet)
      .map((c) => {
        const code = c.charCodeAt(0);
        return code >= 0x20 && code < 0x7f
          ? c
          : `\\u${code.toString(16).padStart(4, "0")}`;
      })
      .join("");
    console.error(
      `[audit-competitor] parse failed: ${errMsg}\n  raw dumped to /tmp/seo-bot-raw.json\n  hex-escaped snippet: ${hex}`
    );
    throw err;
  }
}

function todayYMD(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function safeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "competitor";
}

function renderMarkdown(
  name: string,
  url: string,
  report: z.infer<typeof ReportSchema>
): string {
  const bullets = (items: string[]) =>
    items.length ? items.map((i) => `- ${i}`).join("\n") : "- (none reported)";
  return [
    `# Competitor Audit: ${name}`,
    ``,
    `**URL:** ${url}`,
    `**Date:** ${todayYMD()}`,
    ``,
    `## Pricing`,
    ``,
    report.pricing,
    ``,
    `## Positioning`,
    ``,
    report.positioning,
    ``,
    `## Recent Features`,
    ``,
    bullets(report.recentFeatures),
    ``,
    `## Gaps for Prestyj`,
    ``,
    bullets(report.gapsForPrestyj),
    ``,
  ].join("\n");
}

export async function auditCompetitor(
  input: OptimizationTaskInput
): Promise<TaskExecutionResult> {
  const start = Date.now();

  // Validate payload
  let competitor: { name: string; url: string };
  try {
    competitor = PayloadSchema.parse(input.payload ?? {});
  } catch (err) {
    return {
      task: "competitorAudit",
      success: false,
      error: `Invalid payload: ${err instanceof Error ? err.message : String(err)}`,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }

  // Fetch HTML
  let html: string;
  try {
    html = await fetchWithTimeout(competitor.url);
  } catch (err) {
    return {
      task: "competitorAudit",
      success: false,
      error: `Fetch failed for ${competitor.url}: ${err instanceof Error ? err.message : String(err)}`,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }

  const stripped = stripHtml(html).slice(0, MAX_TEXT_CHARS);

  // Call LLM
  let rawContent = "";
  let costUSD = 0;
  try {
    const response = await input.provider.generate({
      system: input.systemPrompt,
      user: [
        input.taskPrompt,
        "",
        `Competitor name: ${competitor.name}`,
        `Competitor URL: ${competitor.url}`,
        "",
        "Extracted page text (truncated):",
        stripped,
      ].join("\n"),
      model: input.model,
      maxTokens: 1200,
      temperature: 0.4,
      responseFormat: "json",
      jsonSchema: AuditJsonSchema as unknown as Record<string, unknown>,
    });
    rawContent = response.content;
    costUSD = response.costUSD;
  } catch (err) {
    return {
      task: "competitorAudit",
      success: false,
      error: `LLM call failed: ${err instanceof Error ? err.message : String(err)}`,
      costUSD,
      latencyMs: Date.now() - start,
    };
  }

  let report: z.infer<typeof ReportSchema>;
  try {
    report = ReportSchema.parse(parseJsonLoose(rawContent));
  } catch (err) {
    return {
      task: "competitorAudit",
      success: false,
      error: `Failed to parse LLM JSON: ${err instanceof Error ? err.message : String(err)}`,
      costUSD,
      latencyMs: Date.now() - start,
    };
  }

  // Write the markdown report
  const reportDir = path.resolve(process.cwd(), input.config.output.reportDir);
  const outPath = path.join(
    reportDir,
    `competitor-${safeName(competitor.name)}-${todayYMD()}.md`
  );
  try {
    await fs.mkdir(reportDir, { recursive: true });
    await fs.writeFile(
      outPath,
      renderMarkdown(competitor.name, competitor.url, report),
      "utf-8"
    );
  } catch (err) {
    return {
      task: "competitorAudit",
      success: false,
      error: `Failed to write report: ${err instanceof Error ? err.message : String(err)}`,
      costUSD,
      latencyMs: Date.now() - start,
    };
  }

  return {
    task: "competitorAudit",
    success: true,
    costUSD,
    latencyMs: Date.now() - start,
  };
}
