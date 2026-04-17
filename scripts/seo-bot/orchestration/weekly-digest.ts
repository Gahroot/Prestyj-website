import { promises as fs } from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type {
  AppConfig,
  Backlog,
  DailyMetrics,
  ShippedItem,
  ShippedManifest,
} from "../types";
import {
  BacklogSchema,
  DailyMetricsSchema,
  ShippedManifestSchema,
} from "../types";

interface MetricsHistoryFile {
  days: DailyMetrics[];
}

async function readJSONSafe<T>(filePath: string): Promise<T | null> {
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

function isoWeekKey(date: Date): string {
  // ISO week year-week (YYYY-Www)
  const target = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
  const dayNum = (target.getUTCDay() + 6) % 7; // Monday=0..Sunday=6
  target.setUTCDate(target.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const diff =
    (target.getTime() - firstThursday.getTime()) / (24 * 3600 * 1000);
  const week = 1 + Math.round((diff - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7);
  const y = target.getUTCFullYear();
  return `${y}-W${String(week).padStart(2, "0")}`;
}

function last7DaysWindow(date: Date): { start: string; end: string } {
  const end = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
  const start = new Date(end);
  start.setUTCDate(end.getUTCDate() - 6);
  const toISO = (d: Date): string =>
    `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getUTCDate()).padStart(2, "0")}`;
  return { start: toISO(start), end: toISO(end) };
}

async function loadMetricsHistory(
  metricsFile: string
): Promise<DailyMetrics[]> {
  const data = await readJSONSafe<MetricsHistoryFile>(metricsFile);
  if (!data || !Array.isArray(data.days)) return [];
  const valid: DailyMetrics[] = [];
  for (const entry of data.days) {
    const parsed = DailyMetricsSchema.safeParse(entry);
    if (parsed.success) valid.push(parsed.data);
  }
  return valid;
}

async function loadShippedManifest(
  shippedFile: string
): Promise<ShippedManifest> {
  const parsed = await readJSONSafe<unknown>(shippedFile);
  if (!parsed) return { items: [], lastUpdated: new Date().toISOString() };
  const result = ShippedManifestSchema.safeParse(parsed);
  if (!result.success) return { items: [], lastUpdated: new Date().toISOString() };
  return result.data;
}

async function loadBacklog(backlogFile: string): Promise<Backlog | null> {
  const raw = await readTextSafe(backlogFile);
  if (!raw) return null;
  let parsed: unknown;
  try {
    parsed = yaml.load(raw);
  } catch {
    return null;
  }
  const result = BacklogSchema.safeParse(parsed);
  return result.success ? result.data : null;
}

function withinWindow(dateISO: string, start: string, end: string): boolean {
  return dateISO >= start && dateISO <= end;
}

function shipWithinWindow(
  shippedAt: string,
  start: string,
  end: string
): boolean {
  const dateOnly = shippedAt.slice(0, 10);
  return withinWindow(dateOnly, start, end);
}

function aggregateTaskBreakdown(
  days: DailyMetrics[]
): Record<string, { count: number; costUSD: number; latencyMs: number }> {
  const agg: Record<
    string,
    { count: number; costUSD: number; latencyMs: number }
  > = {};
  for (const day of days) {
    for (const [task, data] of Object.entries(day.taskBreakdown)) {
      const existing = agg[task] ?? { count: 0, costUSD: 0, latencyMs: 0 };
      existing.count += data.count;
      existing.costUSD += data.costUSD;
      existing.latencyMs += data.latencyMs;
      agg[task] = existing;
    }
  }
  return agg;
}

function aggregateProviderCost(
  items: ShippedItem[]
): Record<string, { count: number; costUSD: number }> {
  const agg: Record<string, { count: number; costUSD: number }> = {};
  for (const item of items) {
    const key = `${item.provider}/${item.model}`;
    const existing = agg[key] ?? { count: 0, costUSD: 0 };
    existing.count += 1;
    existing.costUSD += item.costUSD;
    agg[key] = existing;
  }
  return agg;
}

function countBacklogRemaining(backlog: Backlog | null): Record<string, number> {
  if (!backlog) return {};
  return {
    geoPages: backlog.geoPages.length,
    nichePages: backlog.nichePages.length,
    comparisons: backlog.comparisons.length,
    blogPosts: backlog.blogPosts.length,
    competitors: backlog.competitors.length,
  };
}

export async function runWeeklyDigest(
  config: AppConfig,
  date: Date
): Promise<void> {
  const cwd = process.cwd();
  const { start, end } = last7DaysWindow(date);

  const [history, manifest, backlog] = await Promise.all([
    loadMetricsHistory(path.resolve(cwd, config.state.metricsFile)),
    loadShippedManifest(path.resolve(cwd, config.state.shippedFile)),
    loadBacklog(path.resolve(cwd, config.state.backlogFile)),
  ]);

  const windowDays = history.filter((d) => withinWindow(d.date, start, end));
  const windowShipped = manifest.items.filter((i) =>
    shipWithinWindow(i.shippedAt, start, end)
  );

  const totalPages = windowDays.reduce((n, d) => n + d.pagesShipped, 0);
  const totalBlogs = windowDays.reduce((n, d) => n + d.blogsShipped, 0);
  const totalTitles = windowDays.reduce((n, d) => n + d.titlesRewritten, 0);
  const totalCost = windowDays.reduce((n, d) => n + d.costUSD, 0);
  const totalApiCalls = windowDays.reduce((n, d) => n + d.apiCalls, 0);
  const errors = windowDays.flatMap((d) => d.errors);

  const taskBreakdown = aggregateTaskBreakdown(windowDays);
  const providerCost = aggregateProviderCost(windowShipped);
  const backlogCounts = countBacklogRemaining(backlog);

  const topTasks = Object.entries(taskBreakdown)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5);

  const weekKey = isoWeekKey(date);
  const reportDir = path.resolve(cwd, config.output.reportDir);
  await fs.mkdir(reportDir, { recursive: true });
  const reportFile = path.join(reportDir, `digest-${weekKey}.md`);

  const lines: string[] = [];
  lines.push(`# SEO Bot Weekly Digest — ${weekKey}`);
  lines.push("");
  lines.push(`Window: ${start} → ${end}`);
  lines.push("");
  lines.push("## Totals");
  lines.push("");
  lines.push(`- Pages shipped: ${totalPages}`);
  lines.push(`- Blogs shipped: ${totalBlogs}`);
  lines.push(`- Titles rewritten: ${totalTitles}`);
  lines.push(`- API calls: ${totalApiCalls}`);
  lines.push(`- Total cost: $${totalCost.toFixed(4)}`);
  lines.push(`- Errors encountered: ${errors.length}`);
  lines.push("");

  lines.push("## Cost by provider/model");
  lines.push("");
  const providerEntries = Object.entries(providerCost).sort(
    (a, b) => b[1].costUSD - a[1].costUSD
  );
  if (providerEntries.length === 0) {
    lines.push("_No shipped items this week._");
  } else {
    lines.push("| Provider/Model | Shipped | Cost |");
    lines.push("|----------------|---------|------|");
    for (const [key, data] of providerEntries) {
      lines.push(`| ${key} | ${data.count} | $${data.costUSD.toFixed(4)} |`);
    }
  }
  lines.push("");

  lines.push("## Top 5 most-shipped task types");
  lines.push("");
  if (topTasks.length === 0) {
    lines.push("_No tasks run this week._");
  } else {
    lines.push("| Task | Count | Cost | Avg latency (ms) |");
    lines.push("|------|-------|------|------------------|");
    for (const [task, data] of topTasks) {
      const avg = data.count > 0 ? Math.round(data.latencyMs / data.count) : 0;
      lines.push(
        `| ${task} | ${data.count} | $${data.costUSD.toFixed(4)} | ${avg} |`
      );
    }
  }
  lines.push("");

  lines.push("## Errors");
  lines.push("");
  if (errors.length === 0) {
    lines.push("_No errors recorded._");
  } else {
    for (const err of errors.slice(0, 50)) lines.push(`- ${err}`);
    if (errors.length > 50) {
      lines.push(`- …and ${errors.length - 50} more.`);
    }
  }
  lines.push("");

  lines.push("## Backlog status");
  lines.push("");
  const backlogEntries = Object.entries(backlogCounts);
  if (backlogEntries.length === 0) {
    lines.push("_Backlog not loaded._");
  } else {
    for (const [bucket, remaining] of backlogEntries) {
      lines.push(`- ${bucket}: ${remaining} remaining`);
    }
  }
  lines.push("");

  await fs.writeFile(reportFile, lines.join("\n"), "utf8");
  console.log(`[seo-bot] Weekly digest: ${reportFile}`);
}
