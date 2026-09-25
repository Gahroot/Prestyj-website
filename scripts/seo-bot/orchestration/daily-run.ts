import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { load, JSON_SCHEMA } from "js-yaml";
import { z } from "zod";
import type { AppConfig, DailyMetrics, LLMProvider, TaskName } from "../types";
import { BacklogSchema, DailyMetricsSchema } from "../types";
import { writeBlogPost } from "../tasks/write-blog-post";
import { ensureDraftDirectory } from "../tasks/draft-store";
import { researchArticles } from "../../../src/lib/institutional/research";

export interface RunDailyArgs {
  config: AppConfig;
  date: Date;
  dryRun?: boolean;
  taskOverride?: TaskName[];
  /** Retained for callers. Explicit publishing is now rejected, not executed. */
  noCommit?: boolean;
}

/** Active manual runner: inert blog drafts only. No shell, git, deployment or rollback surface. */
export async function runDaily(
  args: RunDailyArgs,
  dependencies: { root?: string; provider?: LLMProvider } = {},
): Promise<DailyMetrics> {
  const root = dependencies.root ?? process.cwd();
  const date = args.date.toISOString().slice(0, 10);
  const metrics = DailyMetricsSchema.parse({
    date,
    pagesShipped: 0,
    blogsShipped: 0,
    blogsDrafted: 0,
    titlesRewritten: 0,
    costUSD: 0,
    apiCalls: 0,
    errors: [],
    taskBreakdown: {},
  });
  if (args.noCommit === false) {
    metrics.errors.push("Publishing is disabled. Follow the reviewed manual release process.");
    return metrics;
  }
  const day = args.date
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" })
    .toLowerCase();
  const rotation = Object.entries(args.config.rotation).find(([key]) => key === day)?.[1] ?? [];
  const tasks: readonly string[] = args.taskOverride ?? rotation;
  if (tasks.some((task) => task !== "blogPost")) {
    metrics.errors.push(
      "Only explicit blog draft assignments are active; bulk generation and automated public edits are disabled.",
    );
    return metrics;
  }
  if (!tasks.includes("blogPost")) return metrics;
  const backlog = BacklogSchema.parse(
    load(await fs.readFile(path.join(root, "scripts/seo-bot/state/backlog.yml"), "utf8"), {
      schema: JSON_SCHEMA,
    }),
  );
  // Never pop or rewrite the human queue. Existing draft files provide deduplication.
  const assignment = [...backlog.blogPosts].sort((a, b) => b.priority - a.priority)[0];
  if (!assignment) return metrics;
  let spent = 0;
  let failedCalls = 0;
  const reportDirectory = path.join(root, "scripts/seo-bot/output/reports");
  let reports: string[] = [];
  try {
    reports = await fs.readdir(reportDirectory);
  } catch (error) {
    if (!(error instanceof Error && "code" in error && error.code === "ENOENT")) throw error;
  }
  for (const report of reports
    .filter((name) => name.startsWith(`draft-${date}-`) && name.endsWith(".json"))
    .sort()) {
    const file = path.join(reportDirectory, report);
    const stat = await fs.lstat(file);
    if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 150_000)
      throw new Error("Invalid draft run record");
    const previous = z
      .object({ mode: z.literal("draft-only"), metrics: DailyMetricsSchema })
      .parse(JSON.parse(await fs.readFile(file, "utf8"))).metrics;
    if (!Number.isFinite(previous.costUSD) || previous.costUSD < 0)
      throw new Error("Invalid recorded cost");
    spent += previous.costUSD;
    if (previous.apiCalls > 0 && previous.errors.length > 0) failedCalls += 1;
  }
  if (
    spent >= args.config.circuitBreaker.maxCostPerDayUSD ||
    failedCalls >= args.config.circuitBreaker.maxApiErrorsBeforeHalt
  ) {
    metrics.errors.push("Daily cost or API error cap reached; no generation attempted.");
    return metrics;
  }
  const promptRoot = path.join(root, "scripts/seo-bot/prompts");
  const systemPrompt = (
    await Promise.all(
      ["brand", "real-estate", "seo"].map((name) =>
        fs.readFile(path.join(promptRoot, "system", `${name}.md`), "utf8"),
      ),
    )
  ).join("\n\n");
  const taskPrompt = await fs.readFile(path.join(promptRoot, "task/blog-post.md"), "utf8");
  const routing = args.config.tasks.blogPost;
  let provider = dependencies.provider;
  if (!provider && !args.dryRun) {
    const { getProvider } = await import("../llm");
    provider = getProvider(args.config, routing.provider);
  }
  // Dry runs must not call or even initialize a network provider.
  const offline: LLMProvider = {
    name: "anthropic",
    isConfigured: () => false,
    estimateCostUSD: () => 0,
    generate: async () => {
      throw new Error("Dry run cannot generate");
    },
  };
  const result = await writeBlogPost({
    config: {
      ...args.config,
      circuitBreaker: {
        ...args.config.circuitBreaker,
        maxCostPerDayUSD: args.config.circuitBreaker.maxCostPerDayUSD - spent,
      },
    },
    provider: provider ?? offline,
    model: routing.model,
    systemPrompt,
    taskPrompt,
    payload: assignment.payload,
    dedupContext: {
      shippedSlugs: new Set(researchArticles.map((article) => article.slug)),
      shippedTitles: researchArticles.map((article) => article.title),
      recentlyShippedSummaries: [],
    },
    cwd: root,
    now: args.date,
    dryRun: args.dryRun === true,
  });
  metrics.costUSD = result.costUSD;
  metrics.apiCalls = result.apiCalls ?? 0;
  metrics.blogsDrafted = result.draft ? 1 : 0;
  metrics.taskBreakdown.blogPost = {
    count: result.success ? 1 : 0,
    costUSD: result.costUSD,
    latencyMs: result.latencyMs,
  };
  if (result.error) metrics.errors.push(result.error);
  if (!args.dryRun) {
    // Append-only run record, separate from the historical shipped/metrics series.
    const draftDirectory = await ensureDraftDirectory(root);
    const output = path.join(path.dirname(draftDirectory), "reports");
    await fs.mkdir(output, { recursive: true });
    if ((await fs.lstat(output)).isSymbolicLink())
      throw new Error("Report output cannot be a symlink");
    await fs.writeFile(
      path.join(output, `draft-${date}-${randomUUID()}.json`),
      `${JSON.stringify({ mode: "draft-only", metrics, result }, null, 2)}\n`,
      { flag: "wx", mode: 0o600 },
    );
  }
  return metrics;
}
