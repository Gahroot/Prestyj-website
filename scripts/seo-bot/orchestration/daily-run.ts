import { promises as fs } from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type {
  AppConfig,
  DailyMetrics,
  DedupContext,
  ResearchBrief,
  ShippedItem,
  ShippedManifest,
  TaskExecutionResult,
  TaskName,
} from "../types";
import {
  DailyMetricsSchema,
  ShippedManifestSchema,
} from "../types";
import { CircuitBreaker } from "./circuit-breaker";
import type { CircuitState } from "./circuit-breaker";

const execFileAsync = promisify(execFile);

interface MetricsHistoryFile {
  days: DailyMetrics[];
}

const TASK_MODULE_MAP: Record<TaskName, string> = {
  geoPage: "../tasks/ship-geo-page",
  nichePage: "../tasks/ship-niche-page",
  comparison: "../tasks/ship-comparison",
  blogPost: "../tasks/write-blog-post",
  titleRewrite: "../tasks/rewrite-titles",
  socialCopy: "../tasks/generate-social",
  competitorAudit: "../tasks/audit-competitor",
  dailyResearch: "../tasks/daily-research",
};

const TASK_EXPORT_MAP: Record<TaskName, string> = {
  geoPage: "shipGeoPage",
  nichePage: "shipNichePage",
  comparison: "shipComparison",
  blogPost: "writeBlogPost",
  titleRewrite: "rewriteTitles",
  socialCopy: "generateSocial",
  competitorAudit: "auditCompetitor",
  dailyResearch: "runDailyResearch",
};

const SYSTEM_PROMPT_FILES = [
  "prompts/system/brand.md",
  "prompts/system/real-estate.md",
  "prompts/system/seo.md",
];

const TASK_PROMPT_FILES: Record<TaskName, string> = {
  geoPage: "prompts/task/geo-page.md",
  nichePage: "prompts/task/niche-page.md",
  comparison: "prompts/task/comparison.md",
  blogPost: "prompts/task/blog-post.md",
  titleRewrite: "prompts/task/title-rewrite.md",
  socialCopy: "prompts/task/social.md",
  competitorAudit: "prompts/task/competitor-audit.md",
  dailyResearch: "prompts/task/daily-research.md",
};

const BACKLOG_SLICE_BY_TASK: Partial<
  Record<TaskName, keyof import("../types").Backlog>
> = {
  geoPage: "geoPages",
  nichePage: "nichePages",
  comparison: "comparisons",
  blogPost: "blogPosts",
  competitorAudit: "competitors",
};

const ROTATION_BY_DAY_INDEX = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

type RotationDay = (typeof ROTATION_BY_DAY_INDEX)[number];

function isTaskName(value: string): value is TaskName {
  return Object.prototype.hasOwnProperty.call(TASK_MODULE_MAP, value);
}

function classifyShipType(
  item: ShippedItem
): "page" | "blog" | "other" {
  if (item.type === "blog-post") return "blog";
  if (
    item.type === "geo-page" ||
    item.type === "niche-page" ||
    item.type === "comparison"
  ) {
    return "page";
  }
  return "other";
}

async function readJSONSafe<T>(
  filePath: string
): Promise<T | null> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

async function readTextSafe(filePath: string): Promise<string | null> {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

async function writeJSON(filePath: string, data: unknown): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function todayISODate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function rotationDayFromDate(date: Date): RotationDay {
  const dayIndex = date.getUTCDay();
  return ROTATION_BY_DAY_INDEX[dayIndex];
}

function emptyMetrics(dateISO: string): DailyMetrics {
  return {
    date: dateISO,
    pagesShipped: 0,
    blogsShipped: 0,
    titlesRewritten: 0,
    costUSD: 0,
    apiCalls: 0,
    errors: [],
    taskBreakdown: {},
  };
}

async function loadMetricsHistory(
  metricsFile: string
): Promise<MetricsHistoryFile> {
  const data = await readJSONSafe<MetricsHistoryFile>(metricsFile);
  if (!data || !Array.isArray(data.days)) {
    return { days: [] };
  }
  const days: DailyMetrics[] = [];
  for (const entry of data.days) {
    const parsed = DailyMetricsSchema.safeParse(entry);
    if (parsed.success) days.push(parsed.data);
  }
  return { days };
}

async function loadTodaysCircuitState(
  metricsFile: string,
  dateISO: string
): Promise<CircuitState> {
  const history = await loadMetricsHistory(metricsFile);
  const today = history.days.find((d) => d.date === dateISO);
  if (!today) {
    return {
      todaysShipped: { pages: 0, blogs: 0 },
      todaysCost: 0,
      todaysErrors: 0,
    };
  }
  return {
    todaysShipped: {
      pages: today.pagesShipped,
      blogs: today.blogsShipped,
    },
    todaysCost: today.costUSD,
    todaysErrors: today.errors.length,
  };
}

async function saveMetricsHistory(
  metricsFile: string,
  dateISO: string,
  metrics: DailyMetrics
): Promise<void> {
  const history = await loadMetricsHistory(metricsFile);
  const idx = history.days.findIndex((d) => d.date === dateISO);
  if (idx >= 0) {
    history.days[idx] = metrics;
  } else {
    history.days.push(metrics);
  }
  history.days.sort((a, b) => a.date.localeCompare(b.date));
  await writeJSON(metricsFile, history);
}

async function loadShippedManifest(
  shippedFile: string
): Promise<ShippedManifest> {
  const parsed = await readJSONSafe<unknown>(shippedFile);
  if (!parsed) {
    return { items: [], lastUpdated: new Date().toISOString() };
  }
  const result = ShippedManifestSchema.safeParse(parsed);
  if (!result.success) {
    return { items: [], lastUpdated: new Date().toISOString() };
  }
  return result.data;
}

async function appendToShippedManifest(
  shippedFile: string,
  newItems: ShippedItem[]
): Promise<void> {
  if (newItems.length === 0) return;
  const manifest = await loadShippedManifest(shippedFile);
  manifest.items.push(...newItems);
  manifest.lastUpdated = new Date().toISOString();
  await writeJSON(shippedFile, manifest);
}

async function loadSystemPrompt(cwd: string): Promise<string> {
  const parts: string[] = [];
  for (const rel of SYSTEM_PROMPT_FILES) {
    const full = path.resolve(cwd, "scripts/seo-bot", rel);
    const text = await readTextSafe(full);
    if (text) parts.push(text.trim());
  }
  return parts.join("\n\n---\n\n");
}

async function loadTaskPrompt(
  cwd: string,
  taskName: TaskName
): Promise<string | null> {
  const full = path.resolve(
    cwd,
    "scripts/seo-bot",
    TASK_PROMPT_FILES[taskName]
  );
  return await readTextSafe(full);
}

async function popBacklogItem(
  cwd: string,
  config: AppConfig,
  taskName: TaskName,
  dryRun: boolean
): Promise<import("../types").BacklogItem | null> {
  const sliceKey = BACKLOG_SLICE_BY_TASK[taskName];
  if (!sliceKey) return null;

  const backlogPath = path.resolve(cwd, config.state.backlogFile);
  const raw = await readTextSafe(backlogPath);
  if (!raw) return null;

  let yamlMod: { load: (s: string) => unknown; dump: (o: unknown, opts?: unknown) => string };
  try {
    const imported = (await import("js-yaml")) as unknown as {
      default?: {
        load: (s: string) => unknown;
        dump: (o: unknown, opts?: unknown) => string;
      };
      load?: (s: string) => unknown;
      dump?: (o: unknown, opts?: unknown) => string;
    };
    if (imported.default && typeof imported.default.load === "function") {
      yamlMod = imported.default;
    } else if (typeof imported.load === "function" && typeof imported.dump === "function") {
      yamlMod = {
        load: imported.load,
        dump: imported.dump,
      };
    } else {
      return null;
    }
  } catch {
    return null;
  }

  let parsed: unknown;
  try {
    parsed = yamlMod.load(raw);
  } catch {
    return null;
  }

  const { BacklogSchema } = await import("../types");
  const check = BacklogSchema.safeParse(parsed);
  if (!check.success) return null;
  const backlog = check.data;
  const slice = backlog[sliceKey];
  if (!Array.isArray(slice) || slice.length === 0) return null;

  slice.sort((a, b) => b.priority - a.priority);
  const item = slice.shift();
  if (!item) return null;

  if (!dryRun) {
    const dumped = yamlMod.dump(backlog, { lineWidth: 120 });
    await fs.writeFile(backlogPath, dumped, "utf8");
  }

  return item;
}

type TaskModule = Record<string, unknown>;

function pickTaskFunction(
  mod: TaskModule,
  taskName: TaskName
): ((input: unknown) => Promise<TaskExecutionResult>) | null {
  const preferred = TASK_EXPORT_MAP[taskName];
  const candidate = mod[preferred] ?? mod.default ?? mod.run;
  if (typeof candidate === "function") {
    return candidate as (input: unknown) => Promise<TaskExecutionResult>;
  }
  return null;
}

async function loadResearchIfInList(
  tasksToday: TaskName[],
  args: {
    config: AppConfig;
    dedup: DedupContext;
    systemPrompt: string;
    dryRun: boolean;
    date: Date;
  }
): Promise<{
  brief: ResearchBrief | null;
  result: TaskExecutionResult | null;
  remainingTasks: TaskName[];
}> {
  const firstResearchIdx = tasksToday.indexOf("dailyResearch");
  if (firstResearchIdx < 0) {
    return { brief: null, result: null, remainingTasks: tasksToday };
  }

  const remaining = tasksToday.filter((t) => t !== "dailyResearch");

  const routing = args.config.tasks.dailyResearch;
  if (!routing) {
    return {
      brief: null,
      result: {
        task: "dailyResearch",
        success: false,
        error: "No routing configured for dailyResearch",
        costUSD: 0,
        latencyMs: 0,
      },
      remainingTasks: remaining,
    };
  }

  const providerCfg = args.config.providers[routing.provider];
  if (!providerCfg) {
    return {
      brief: null,
      result: {
        task: "dailyResearch",
        success: false,
        error: `Provider "${routing.provider}" missing in config`,
        costUSD: 0,
        latencyMs: 0,
      },
      remainingTasks: remaining,
    };
  }

  const envVar = providerCfg.apiKeyEnv;
  if (!process.env[envVar]) {
    console.warn(
      `[seo-bot] Skipping dailyResearch: ${envVar} not set`
    );
    return { brief: null, result: null, remainingTasks: remaining };
  }

  try {
    const { getProvider } = await import("../llm");
    const providerInstance = getProvider(args.config, routing.provider);

    const mod: TaskModule = await import(TASK_MODULE_MAP.dailyResearch);
    const fn = pickTaskFunction(mod, "dailyResearch");
    if (!fn) {
      return {
        brief: null,
        result: {
          task: "dailyResearch",
          success: false,
          error: "dailyResearch export not found",
          costUSD: 0,
          latencyMs: 0,
        },
        remainingTasks: remaining,
      };
    }

    const taskPrompt = (await loadTaskPrompt(process.cwd(), "dailyResearch")) ?? "";
    const input = {
      config: args.config,
      provider: providerInstance,
      model: routing.model,
      systemPrompt: args.systemPrompt,
      taskPrompt,
      dedupContext: args.dedup,
      date: args.date,
    };

    const result = await fn(input);
    const brief = extractBriefFromResult(result) ?? null;
    return { brief, result, remainingTasks: remaining };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    return {
      brief: null,
      result: {
        task: "dailyResearch",
        success: false,
        error: `dailyResearch failed: ${reason}`,
        costUSD: 0,
        latencyMs: 0,
      },
      remainingTasks: remaining,
    };
  }
}

function extractBriefFromResult(
  result: TaskExecutionResult
): ResearchBrief | null {
  const maybe = result as unknown as { brief?: ResearchBrief };
  if (maybe && typeof maybe === "object" && maybe.brief) {
    return maybe.brief;
  }
  return null;
}

function updateMetricsForResult(
  metrics: DailyMetrics,
  result: TaskExecutionResult
): void {
  metrics.apiCalls += 1;
  metrics.costUSD += Number.isFinite(result.costUSD) ? result.costUSD : 0;

  const breakdown =
    metrics.taskBreakdown[result.task] ?? {
      count: 0,
      costUSD: 0,
      latencyMs: 0,
    };
  breakdown.count += 1;
  breakdown.costUSD += Number.isFinite(result.costUSD) ? result.costUSD : 0;
  breakdown.latencyMs += Number.isFinite(result.latencyMs)
    ? result.latencyMs
    : 0;
  metrics.taskBreakdown[result.task] = breakdown;

  if (!result.success) {
    const msg = result.error ?? `${result.task} failed`;
    metrics.errors.push(`[${result.task}] ${msg}`);
  }

  if (result.shipped) {
    const shipType = classifyShipType(result.shipped);
    if (shipType === "page") metrics.pagesShipped += 1;
    if (shipType === "blog") metrics.blogsShipped += 1;
    if (result.task === "titleRewrite") metrics.titlesRewritten += 1;
  }
}

async function runTypecheck(cwd: string): Promise<{
  success: boolean;
  stdout: string;
  stderr: string;
}> {
  try {
    const { stdout, stderr } = await execFileAsync("npm", ["run", "typecheck"], {
      cwd,
      maxBuffer: 10 * 1024 * 1024,
    });
    return { success: true, stdout, stderr };
  } catch (err) {
    const e = err as {
      stdout?: string;
      stderr?: string;
      message?: string;
    };
    return {
      success: false,
      stdout: e.stdout ?? "",
      stderr: e.stderr ?? e.message ?? "Unknown typecheck failure",
    };
  }
}

async function rollbackShippedFiles(
  cwd: string,
  newShipped: ShippedItem[]
): Promise<string[]> {
  const removed: string[] = [];
  for (const item of newShipped) {
    const filePath = path.resolve(cwd, item.filePath);
    try {
      await fs.unlink(filePath);
      removed.push(item.filePath);
    } catch {
      // best effort
    }
  }

  // Restore index files and state via git checkout so any auto-registered
  // indexes revert to the pre-run state.
  try {
    await execFileAsync(
      "git",
      [
        "checkout",
        "--",
        "src/lib/",
        "content/blog/",
        "scripts/seo-bot/state/",
        "scripts/submit-indexnow.ts",
      ],
      { cwd }
    );
  } catch {
    // best effort
  }

  return removed;
}

async function commitAndPush(
  cwd: string,
  summary: string
): Promise<{ success: boolean; message: string }> {
  try {
    await execFileAsync(
      "git",
      [
        "add",
        "-A",
        "scripts/seo-bot/state/",
        "src/lib/",
        "content/blog/",
        "scripts/submit-indexnow.ts",
      ],
      { cwd }
    );

    const { stdout: statusOut } = await execFileAsync(
      "git",
      ["status", "--porcelain"],
      { cwd }
    );
    if (!statusOut.trim()) {
      return { success: true, message: "Nothing to commit." };
    }

    await execFileAsync(
      "git",
      ["commit", "-m", `seo-bot: ${summary}`],
      { cwd }
    );
    await execFileAsync("git", ["push"], { cwd });
    return { success: true, message: "Committed and pushed." };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    return { success: false, message: `git commit/push failed: ${reason}` };
  }
}

async function runIndexNow(cwd: string): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    await execFileAsync("npm", ["run", "indexnow"], {
      cwd,
      maxBuffer: 10 * 1024 * 1024,
    });
    return { success: true, message: "IndexNow submission complete." };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    return { success: false, message: `indexnow failed: ${reason}` };
  }
}

async function writeDailyReport(
  cwd: string,
  config: AppConfig,
  dateISO: string,
  sections: {
    metrics: DailyMetrics;
    results: TaskExecutionResult[];
    haltReason?: string;
    typecheckFailure?: string;
    commitMessage?: string;
    indexnowMessage?: string;
    dryRun: boolean;
  }
): Promise<string> {
  const dir = path.resolve(cwd, config.output.reportDir);
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, `${dateISO}.md`);

  const lines: string[] = [];
  lines.push(`# SEO Bot Daily Report — ${dateISO}`);
  lines.push("");
  if (sections.dryRun) lines.push("> **Dry run** — no files written, no commit.");
  if (sections.haltReason) {
    lines.push(`> **Halted**: ${sections.haltReason}`);
  }
  if (sections.typecheckFailure) {
    lines.push(`> **Typecheck failed** — rollback performed.`);
  }
  lines.push("");
  lines.push("## Metrics");
  lines.push("");
  lines.push(`- Pages shipped: ${sections.metrics.pagesShipped}`);
  lines.push(`- Blogs shipped: ${sections.metrics.blogsShipped}`);
  lines.push(`- Titles rewritten: ${sections.metrics.titlesRewritten}`);
  lines.push(`- API calls: ${sections.metrics.apiCalls}`);
  lines.push(`- Cost: $${sections.metrics.costUSD.toFixed(4)}`);
  lines.push(`- Errors: ${sections.metrics.errors.length}`);
  lines.push("");

  lines.push("## Task breakdown");
  lines.push("");
  const entries = Object.entries(sections.metrics.taskBreakdown);
  if (entries.length === 0) {
    lines.push("_No tasks run._");
  } else {
    lines.push("| Task | Count | Cost | Latency (ms) |");
    lines.push("|------|-------|------|--------------|");
    for (const [task, data] of entries) {
      lines.push(
        `| ${task} | ${data.count} | $${data.costUSD.toFixed(4)} | ${data.latencyMs} |`
      );
    }
  }
  lines.push("");

  lines.push("## Task results");
  lines.push("");
  if (sections.results.length === 0) {
    lines.push("_No task results._");
  } else {
    for (const r of sections.results) {
      const status = r.success ? "OK" : "FAIL";
      const ship = r.shipped ? ` shipped=${r.shipped.slug}` : "";
      const err = r.error ? ` — ${r.error}` : "";
      lines.push(
        `- **${r.task}** [${status}] cost=$${r.costUSD.toFixed(4)} latency=${r.latencyMs}ms${ship}${err}`
      );
    }
  }
  lines.push("");

  if (sections.metrics.errors.length > 0) {
    lines.push("## Errors");
    lines.push("");
    for (const e of sections.metrics.errors) lines.push(`- ${e}`);
    lines.push("");
  }

  if (sections.typecheckFailure) {
    lines.push("## Typecheck failure");
    lines.push("");
    lines.push("```");
    lines.push(sections.typecheckFailure.slice(0, 8000));
    lines.push("```");
    lines.push("");
  }

  if (sections.commitMessage) {
    lines.push("## Commit");
    lines.push("");
    lines.push(sections.commitMessage);
    lines.push("");
  }

  if (sections.indexnowMessage) {
    lines.push("## IndexNow");
    lines.push("");
    lines.push(sections.indexnowMessage);
    lines.push("");
  }

  await fs.writeFile(file, lines.join("\n"), "utf8");
  return file;
}

export interface RunDailyArgs {
  config: AppConfig;
  date: Date;
  dryRun?: boolean;
  taskOverride?: TaskName[];
}

export async function runDaily(args: RunDailyArgs): Promise<DailyMetrics> {
  const cwd = process.cwd();
  const dryRun = args.dryRun === true;
  const dateISO = todayISODate(args.date);
  const metrics = emptyMetrics(dateISO);

  const { buildDedupContext } = await import("../research/dedup-context");
  const dedup: DedupContext = await buildDedupContext(args.config);

  const tasksToday: TaskName[] = args.taskOverride
    ? args.taskOverride.filter(isTaskName)
    : ((): TaskName[] => {
        const key = rotationDayFromDate(args.date);
        const list = args.config.rotation[key] ?? [];
        return list.filter(isTaskName);
      })();

  // Circuit breaker pre-checks
  const state = await loadTodaysCircuitState(
    path.resolve(cwd, args.config.state.metricsFile),
    dateISO
  );
  const breaker = new CircuitBreaker(args.config.circuitBreaker, state);
  const pre = breaker.preRunChecks();

  const allResults: TaskExecutionResult[] = [];
  const newShipped: ShippedItem[] = [];

  if (!pre.allowed) {
    console.warn(`[seo-bot] Pre-run halted: ${pre.reason}`);
    const reportPath = await writeDailyReport(cwd, args.config, dateISO, {
      metrics,
      results: allResults,
      haltReason: pre.reason,
      dryRun,
    });
    if (!dryRun) {
      await saveMetricsHistory(
        path.resolve(cwd, args.config.state.metricsFile),
        dateISO,
        metrics
      );
    }
    console.log(`[seo-bot] Report: ${reportPath}`);
    return metrics;
  }

  const systemPrompt = await loadSystemPrompt(cwd);

  // Run dailyResearch FIRST if present
  const { brief, result: researchResult, remainingTasks } =
    await loadResearchIfInList(tasksToday, {
      config: args.config,
      dedup,
      systemPrompt,
      dryRun,
      date: args.date,
    });
  if (researchResult) {
    allResults.push(researchResult);
    updateMetricsForResult(metrics, researchResult);
    breaker.recordCost(researchResult.costUSD);
    if (!researchResult.success) breaker.recordError();
    if (researchResult.shipped) {
      newShipped.push(researchResult.shipped);
      const kind = classifyShipType(researchResult.shipped);
      if (kind === "page") breaker.recordShip("page");
      if (kind === "blog") breaker.recordShip("blog");
    }
  }

  // Iterate remaining tasks
  for (const taskName of remainingTasks) {
    if (breaker.isHalted()) {
      console.warn(
        `[seo-bot] Halted — skipping remaining tasks: ${breaker.getHaltReason()}`
      );
      break;
    }

    const routing = args.config.tasks[taskName];
    if (!routing) {
      const msg = `No routing configured for task "${taskName}"`;
      console.warn(`[seo-bot] ${msg}`);
      metrics.errors.push(msg);
      continue;
    }

    const providerCfg = args.config.providers[routing.provider];
    if (!providerCfg) {
      const msg = `Provider "${routing.provider}" missing for task "${taskName}"`;
      console.warn(`[seo-bot] ${msg}`);
      metrics.errors.push(msg);
      continue;
    }

    const envVar = providerCfg.apiKeyEnv;
    const hasKey = typeof process.env[envVar] === "string" && process.env[envVar]!.length > 0;
    if (!hasKey) {
      const msg = `Skipping "${taskName}": provider "${routing.provider}" not configured (${envVar} missing)`;
      console.warn(`[seo-bot] ${msg}`);
      continue;
    }

    // Ship-type gating
    if (
      taskName === "blogPost" &&
      !breaker.canShipBlog().allowed
    ) {
      console.warn(
        `[seo-bot] Skipping ${taskName}: ${breaker.canShipBlog().reason}`
      );
      continue;
    }
    if (
      (taskName === "geoPage" ||
        taskName === "nichePage" ||
        taskName === "comparison") &&
      !breaker.canShipPage().allowed
    ) {
      console.warn(
        `[seo-bot] Skipping ${taskName}: ${breaker.canShipPage().reason}`
      );
      continue;
    }

    // Load task prompt (may be missing while other agents wire them up)
    const taskPrompt = (await loadTaskPrompt(cwd, taskName)) ?? "";

    // Pop backlog item if task needs one
    const backlogItem = await popBacklogItem(
      cwd,
      args.config,
      taskName,
      dryRun
    );

    // Resolve LLM provider instance
    let providerInstance;
    try {
      const { getProvider } = await import("../llm");
      providerInstance = getProvider(args.config, routing.provider);
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      const errResult: TaskExecutionResult = {
        task: taskName,
        success: false,
        error: `Provider resolution failed: ${reason}`,
        costUSD: 0,
        latencyMs: 0,
      };
      allResults.push(errResult);
      updateMetricsForResult(metrics, errResult);
      continue;
    }

    const input: unknown = {
      config: args.config,
      provider: providerInstance,
      model: routing.model,
      systemPrompt,
      taskPrompt,
      payload: backlogItem?.payload ?? {},
      dedupContext: dedup,
      researchBrief: brief ?? undefined,
    };

    let rawResult: unknown;
    try {
      const mod: TaskModule = await import(TASK_MODULE_MAP[taskName]);
      const fn = pickTaskFunction(mod, taskName);
      if (!fn) {
        throw new Error(
          `Task module for "${taskName}" missing expected export "${TASK_EXPORT_MAP[taskName]}"`
        );
      }
      rawResult = await fn(input);
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      rawResult = {
        task: taskName,
        success: false,
        error: reason,
        costUSD: 0,
        latencyMs: 0,
      } satisfies TaskExecutionResult;
    }

    // Normalize: rewriteTitles returns TaskExecutionResult[]; others return single.
    const resultsList: TaskExecutionResult[] = Array.isArray(rawResult)
      ? (rawResult as TaskExecutionResult[])
      : [rawResult as TaskExecutionResult];

    for (const result of resultsList) {
      allResults.push(result);
      updateMetricsForResult(metrics, result);
      breaker.recordCost(result.costUSD);
      if (!result.success) {
        const { halted } = breaker.recordError();
        if (halted) {
          console.warn(
            `[seo-bot] Halting further tasks after error: ${breaker.getHaltReason()}`
          );
          break;
        }
      }
      if (result.shipped) {
        newShipped.push(result.shipped);
        const kind = classifyShipType(result.shipped);
        if (kind === "page") breaker.recordShip("page");
        if (kind === "blog") breaker.recordShip("blog");
      }
    }
  }

  // Post-run: typecheck, commit, indexnow
  let typecheckFailure: string | undefined;
  let commitMessage: string | undefined;
  let indexnowMessage: string | undefined;

  const hasShippedContent = newShipped.length > 0;
  if (!dryRun && hasShippedContent) {
    // Append to shipped manifest BEFORE typecheck so rollback knows what to delete
    await appendToShippedManifest(
      path.resolve(cwd, args.config.state.shippedFile),
      newShipped
    );

    const tc = await runTypecheck(cwd);
    if (!tc.success) {
      typecheckFailure = [tc.stdout, tc.stderr].filter(Boolean).join("\n");
      console.error("[seo-bot] Typecheck failed. Rolling back shipped files.");
      const removed = await rollbackShippedFiles(cwd, newShipped);
      console.error(
        `[seo-bot] Rolled back ${removed.length} file(s): ${removed.join(", ")}`
      );
      // Drop shipped records from metrics since we rolled back
      metrics.errors.push(
        `Typecheck failed — rolled back ${removed.length} file(s). Details in report.`
      );
    } else {
      const summary = summarizeShipped(newShipped);
      const commitResult = await commitAndPush(cwd, summary);
      commitMessage = commitResult.message;
      if (!commitResult.success) {
        metrics.errors.push(commitResult.message);
      } else {
        const idx = await runIndexNow(cwd);
        indexnowMessage = idx.message;
        if (!idx.success) metrics.errors.push(idx.message);
      }
    }
  } else if (dryRun && hasShippedContent) {
    commitMessage = "Dry run: commit skipped.";
    indexnowMessage = "Dry run: indexnow skipped.";
  }

  const reportPath = await writeDailyReport(cwd, args.config, dateISO, {
    metrics,
    results: allResults,
    haltReason: breaker.isHalted() ? breaker.getHaltReason() : undefined,
    typecheckFailure,
    commitMessage,
    indexnowMessage,
    dryRun,
  });
  console.log(`[seo-bot] Report: ${reportPath}`);

  if (!dryRun) {
    await saveMetricsHistory(
      path.resolve(cwd, args.config.state.metricsFile),
      dateISO,
      metrics
    );
  }

  return metrics;
}

function summarizeShipped(items: ShippedItem[]): string {
  if (items.length === 0) return "no-op";
  const counts: Record<string, number> = {};
  for (const item of items) {
    counts[item.type] = (counts[item.type] ?? 0) + 1;
  }
  const parts = Object.entries(counts).map(
    ([type, n]) => `${n} ${type}${n > 1 ? "s" : ""}`
  );
  return parts.join(", ");
}
