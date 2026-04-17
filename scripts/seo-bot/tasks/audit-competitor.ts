import { promises as fs } from "fs";
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

const ReportSchema = z.object({
  pricing: z.string(),
  positioning: z.string(),
  recentFeatures: z
    .union([z.array(z.string()), z.string()])
    .transform((v) => (Array.isArray(v) ? v : [v])),
  gapsForPrestyj: z
    .union([z.array(z.string()), z.string()])
    .transform((v) => (Array.isArray(v) ? v : [v])),
});

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
  const fenceMatch = trimmed.match(/^```(?:json)?\s*\n([\s\S]*?)\n```$/);
  const body = fenceMatch ? fenceMatch[1] : trimmed;
  return JSON.parse(body);
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
