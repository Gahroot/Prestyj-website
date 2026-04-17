import { promises as fs } from "fs";
import path from "path";
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

const INDEXNOW_ENDPOINT = "https://yandex.com/indexnow";
const WINDOW_MS = 24 * 60 * 60 * 1000;

// Mirror the mapping specified by the task brief.
const URL_PREFIX: Record<ShippedItem["type"], string | null> = {
  "geo-page": "/best-for",
  "niche-page": "/solutions",
  comparison: "/compare",
  "blog-post": "/blog",
  "title-rewrite": null,
};

interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

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

function buildUrl(baseUrl: string, item: ShippedItem): string | null {
  const prefix = URL_PREFIX[item.type];
  if (!prefix) return null;
  const trimmed = baseUrl.replace(/\/$/, "");
  return `${trimmed}${prefix}/${item.slug}`;
}

function hostFromBaseUrl(baseUrl: string): string {
  try {
    return new URL(baseUrl).host;
  } catch {
    return baseUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  }
}

export async function submitIndexNow(
  input: OptimizationTaskInput
): Promise<TaskExecutionResult> {
  const start = Date.now();
  const manifest = await loadShippedManifest(input.config);

  const cutoff = Date.now() - WINDOW_MS;
  const recent = manifest.items.filter((item) => {
    const t = Date.parse(item.shippedAt);
    return Number.isFinite(t) && t >= cutoff && URL_PREFIX[item.type] !== null;
  });

  const urls = recent
    .map((item) => buildUrl(input.config.baseUrl, item))
    .filter((u): u is string => Boolean(u));

  // Dedupe — same page may legitimately have multiple shipped records within 24h.
  const uniqueUrls = Array.from(new Set(urls));

  // Note: TaskName has no dedicated "indexnow" entry. We reuse "socialCopy" as
  // the nearest semantic match (URL broadcast / distribution). The orchestrator
  // labels this task by its own key so the value here is informational only.
  if (uniqueUrls.length === 0) {
    return {
      task: "socialCopy",
      success: true,
      costUSD: 0,
      latencyMs: Date.now() - start,
      error: "No URLs shipped in the last 24h to submit.",
    };
  }

  const apiKey = process.env.INDEXNOW_API_KEY;
  if (!apiKey) {
    console.warn(
      "[submit-indexnow] INDEXNOW_API_KEY not set — skipping submission. Would have submitted " +
        `${uniqueUrls.length} url(s).`
    );
    return {
      task: "socialCopy",
      success: true,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }

  const host = hostFromBaseUrl(input.config.baseUrl);
  const payload: IndexNowSubmission = {
    host,
    key: apiKey,
    keyLocation: `${input.config.baseUrl.replace(/\/$/, "")}/${apiKey}.txt`,
    urlList: uniqueUrls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (!response.ok && response.status !== 202) {
      return {
        task: "socialCopy",
        success: false,
        error: `IndexNow submission failed: HTTP ${response.status} ${response.statusText}`,
        costUSD: 0,
        latencyMs: Date.now() - start,
      };
    }

    console.log(
      `[submit-indexnow] Submitted ${uniqueUrls.length} URL(s) to IndexNow (status ${response.status}).`
    );
    return {
      task: "socialCopy",
      success: true,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  } catch (err) {
    return {
      task: "socialCopy",
      success: false,
      error: `IndexNow fetch failed: ${err instanceof Error ? err.message : String(err)}`,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }
}
