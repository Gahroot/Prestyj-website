import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import type {
  AppConfig,
  BacklogItem,
  DedupContext,
  LLMProvider,
  ShippedItem,
  ShippedManifest,
  TaskExecutionResult,
} from "../types";
import { ShippedManifestSchema } from "../types";

export interface OptimizationTaskInput {
  config: AppConfig;
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  taskPrompt: string;
  payload?: BacklogItem["payload"];
  dedupContext: DedupContext;
}

const LOOKBACK_DAYS = 7;
const MAX_ITEMS = 10;

const TypeToUrlPrefix: Record<ShippedItem["type"], string | null> = {
  "geo-page": "/best-for",
  "niche-page": "/solutions",
  comparison: "/compare",
  "blog-post": "/blog",
  "title-rewrite": null,
};

const SocialSchema = z.object({
  linkedin: z.string().min(1),
  x: z.array(z.string().min(1)).length(2),
  reddit: z.string().min(1),
});

const SocialJsonSchema = {
  type: "object",
  properties: {
    linkedin: {
      type: "string",
      description: "LinkedIn post copy (200-400 words).",
    },
    x: {
      type: "array",
      items: { type: "string" },
      minItems: 2,
      maxItems: 2,
      description: "Two distinct X (Twitter) posts, each ≤280 chars.",
    },
    reddit: {
      type: "string",
      description:
        "Reddit post body — genuine, conversational, self-promotion-aware.",
    },
  },
  required: ["linkedin", "x", "reddit"],
  additionalProperties: false,
} as const;

async function loadShippedManifest(
  config: AppConfig
): Promise<ShippedManifest> {
  const filePath = path.resolve(process.cwd(), config.state.shippedFile);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return ShippedManifestSchema.parse(JSON.parse(raw));
  } catch {
    return { items: [], lastUpdated: new Date().toISOString() };
  }
}

function recentShippedItems(manifest: ShippedManifest): ShippedItem[] {
  const cutoff = Date.now() - LOOKBACK_DAYS * 24 * 60 * 60 * 1000;
  return manifest.items
    .filter((item) => {
      if (item.type === "title-rewrite") return false; // no new URL, skip
      const t = Date.parse(item.shippedAt);
      return Number.isFinite(t) && t >= cutoff;
    })
    .sort((a, b) => Date.parse(b.shippedAt) - Date.parse(a.shippedAt))
    .slice(0, MAX_ITEMS);
}

function buildUrl(baseUrl: string, item: ShippedItem): string | null {
  const prefix = TypeToUrlPrefix[item.type];
  if (!prefix) return null;
  const trimmedBase = baseUrl.replace(/\/$/, "");
  return `${trimmedBase}${prefix}/${item.slug}`;
}

function todayYMD(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseJsonLoose(raw: string): unknown {
  const trimmed = raw.trim();
  const fenceMatch = trimmed.match(/^```(?:json)?\s*\n([\s\S]*?)\n```$/);
  const body = fenceMatch ? fenceMatch[1] : trimmed;
  return JSON.parse(body);
}

function renderMarkdown(
  items: Array<{ item: ShippedItem; url: string }>,
  social: z.infer<typeof SocialSchema>
): string {
  const lines: string[] = [];
  lines.push(`# Social Copy — ${todayYMD()}`);
  lines.push("");
  lines.push(
    `Generated from ${items.length} page${items.length === 1 ? "" : "s"} shipped in the last ${LOOKBACK_DAYS} days.`
  );
  lines.push("");
  lines.push("## Pages Referenced");
  lines.push("");
  for (const { item, url } of items) {
    lines.push(`- [${item.title}](${url}) — \`${item.slug}\` (${item.type})`);
  }
  lines.push("");
  lines.push("## LinkedIn");
  lines.push("");
  lines.push(social.linkedin);
  lines.push("");
  lines.push("## X (Twitter)");
  lines.push("");
  social.x.forEach((post, i) => {
    lines.push(`### Variant ${i + 1}`);
    lines.push("");
    lines.push(post);
    lines.push("");
  });
  lines.push("## Reddit");
  lines.push("");
  lines.push(social.reddit);
  lines.push("");
  return lines.join("\n");
}

export async function generateSocial(
  input: OptimizationTaskInput
): Promise<TaskExecutionResult> {
  const start = Date.now();

  const manifest = await loadShippedManifest(input.config);
  const recent = recentShippedItems(manifest);

  if (recent.length === 0) {
    return {
      task: "socialCopy",
      success: false,
      error: `No eligible shipped items in the last ${LOOKBACK_DAYS} days.`,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }

  const withUrls = recent
    .map((item) => ({ item, url: buildUrl(input.config.baseUrl, item) }))
    .filter((x): x is { item: ShippedItem; url: string } => Boolean(x.url));

  if (withUrls.length === 0) {
    return {
      task: "socialCopy",
      success: false,
      error: "No shipped items had URL-producing types.",
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }

  const pageSummaries = withUrls
    .map(
      ({ item, url }, i) =>
        `${i + 1}. [${item.type}] ${item.title}\n   Slug: ${item.slug}\n   URL: ${url}\n   Description: ${item.description}`
    )
    .join("\n\n");

  let response: Awaited<ReturnType<LLMProvider["generate"]>>;
  try {
    response = await input.provider.generate({
      system: input.systemPrompt,
      user: [
        input.taskPrompt,
        "",
        `Pages shipped in the last ${LOOKBACK_DAYS} days:`,
        "",
        pageSummaries,
        "",
        "Produce one LinkedIn post, exactly two X posts, and one Reddit post.",
        "Each piece should reference at least one of the page URLs above.",
        "Return strict JSON: { linkedin, x: [string, string], reddit }.",
      ].join("\n"),
      model: input.model,
      maxTokens: 1500,
      temperature: 0.8,
      responseFormat: "json",
      jsonSchema: SocialJsonSchema as unknown as Record<string, unknown>,
    });
  } catch (err) {
    return {
      task: "socialCopy",
      success: false,
      error: `LLM call failed: ${err instanceof Error ? err.message : String(err)}`,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }

  let social: z.infer<typeof SocialSchema>;
  try {
    social = SocialSchema.parse(parseJsonLoose(response.content));
  } catch (err) {
    return {
      task: "socialCopy",
      success: false,
      error: `Failed to parse LLM JSON: ${err instanceof Error ? err.message : String(err)}`,
      costUSD: response.costUSD,
      latencyMs: Date.now() - start,
    };
  }

  const socialDir = path.resolve(process.cwd(), input.config.output.socialDir);
  const outPath = path.join(socialDir, `${todayYMD()}.md`);
  try {
    await fs.mkdir(socialDir, { recursive: true });
    await fs.writeFile(
      outPath,
      renderMarkdown(withUrls, social),
      "utf-8"
    );
  } catch (err) {
    return {
      task: "socialCopy",
      success: false,
      error: `Failed to write social markdown: ${err instanceof Error ? err.message : String(err)}`,
      costUSD: response.costUSD,
      latencyMs: Date.now() - start,
    };
  }

  return {
    task: "socialCopy",
    success: true,
    costUSD: response.costUSD,
    latencyMs: Date.now() - start,
  };
}
