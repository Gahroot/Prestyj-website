/** Weekly report: markdown to data/growth/reports/YYYY-MM-DD.md, emailed as HTML. */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { openExceptions, sendEmail } from "../shared/alert";
import {
  CONTENT_LOG_FILE,
  OPPORTUNITIES_FILE,
  PERFORMANCE_FILE,
  REPORTS_DIR,
  contentLogEntrySchema,
  opportunitySchema,
  performanceSnapshotSchema,
  type PerformanceSnapshot,
} from "../shared/contracts";
import type { CtaStats } from "../measure/index";
import { CTA_STATS_FILE, HISTORY_DIR, addDays, isoDate, loadEnv, readJson } from "../measure/util";
import { CTA_EXPERIMENTS_FILE, experimentsFileSchema } from "./cta";
import { markdownToHtml, renderMarkdown, type ReportInput } from "./render";

export { promoteCtaWinners } from "./cta";

/** Latest history snapshot dated on/before `target` and no more than `toleranceDays` older. */
export function historyAt(
  root: string,
  target: string,
  toleranceDays = 3,
): PerformanceSnapshot | null {
  const dir = path.join(root, HISTORY_DIR);
  if (!existsSync(dir)) return null;
  const floor = isoDate(addDays(new Date(`${target}T00:00:00Z`), -toleranceDays));
  const pick = readdirSync(dir)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .map((f) => f.slice(0, 10))
    .filter((d) => d <= target && d >= floor)
    .sort()
    .at(-1);
  if (!pick) return null;
  const parsed = performanceSnapshotSchema.safeParse(
    JSON.parse(readFileSync(path.join(dir, `${pick}.json`), "utf8")),
  );
  return parsed.success ? parsed.data : null;
}

export function loadReportInput(root: string, now: Date): ReportInput {
  const date = isoDate(now);
  const perf = path.join(root, PERFORMANCE_FILE);
  const current =
    historyAt(root, date, 2) ??
    (existsSync(perf)
      ? performanceSnapshotSchema.parse(JSON.parse(readFileSync(perf, "utf8")))
      : null);
  const expFile = path.join(root, CTA_EXPERIMENTS_FILE);
  return {
    date,
    current,
    weekAgo: historyAt(root, isoDate(addDays(now, -7))),
    periodAgo: historyAt(root, isoDate(addDays(now, -28))),
    contentLog: contentLogEntrySchema
      .array()
      .parse(readJson<unknown>(path.join(root, CONTENT_LOG_FILE), [])),
    exceptions: openExceptions(root),
    opportunities: opportunitySchema
      .array()
      .parse(readJson<unknown>(path.join(root, OPPORTUNITIES_FILE), [])),
    ctaStats: readJson<CtaStats | null>(path.join(root, CTA_STATS_FILE), null),
    experiments: existsSync(expFile)
      ? experimentsFileSchema.parse(JSON.parse(readFileSync(expFile, "utf8"))).experiments
      : null,
  };
}

export async function sendWeeklyReport(opts: {
  root: string;
  dryRun: boolean;
  now?: Date;
}): Promise<{ markdownPath: string; emailed: boolean }> {
  const now = opts.now ?? new Date();
  loadEnv(opts.root);
  const input = loadReportInput(opts.root, now);
  const md = renderMarkdown(input);
  const markdownPath = path.join(opts.root, REPORTS_DIR, `${input.date}.md`);
  if (opts.dryRun) {
    console.log(md);
    return { markdownPath, emailed: false };
  }
  mkdirSync(path.dirname(markdownPath), { recursive: true });
  writeFileSync(markdownPath, md);
  const ns =
    input.current && input.current.sources.cal === "ok"
      ? String(input.current.totals.qualifiedDemosFromOrganicOrAi)
      : "not connected";
  const emailed = await sendEmail(
    `Prestyj growth — ${input.date} — qualified organic/AI demos: ${ns}`,
    markdownToHtml(md),
    md,
  );
  return { markdownPath, emailed };
}
