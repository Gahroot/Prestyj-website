#!/usr/bin/env npx tsx
/**
 * Growth-engine orchestrator. Runs as Railway cron jobs (no GitHub Actions).
 *
 *   tsx scripts/growth-engine/run.ts daily  [--dry-run]   measure → content → gates → build → commit → push → IndexNow
 *   tsx scripts/growth-engine/run.ts weekly [--dry-run]   measure → CTA winner promotion → weekly report email → commit → push
 *
 * Safety:
 * - Only paths in COMMIT_ALLOWLIST are ever staged; anything else that changed aborts the publish.
 * - Refuses to publish from a dirty working tree (owner changes) unless it is a fresh clone (Railway).
 * - Every failure is recorded via raiseException; critical ones email nolan@prestyj.com.
 * - Pushing requires GROWTH_PUBLISH=1 (set on Railway only), so local runs never push by accident.
 */
import { execFileSync, spawnSync } from "node:child_process";
import { config as loadEnv } from "dotenv";
import { raiseException } from "./shared/alert";

loadEnv({ path: ".env.local", quiet: true });
loadEnv({ quiet: true });

const ROOT = process.cwd();
const COMMIT_ALLOWLIST = [
  "content/blog/",
  "src/lib/institutional/research.ts",
  "src/lib/conversion/cta-experiments.json",
  "data/growth/",
  "data/seo/",
  "data/indexnow/submitted-urls.json",
  "scripts/seo-bot/state/",
];
const SITE = "https://prestyj.com";

type Step = { name: string; ok: boolean; detail: string };

function sh(cmd: string, args: string[], opts: { allowFail?: boolean } = {}): { ok: boolean; out: string } {
  const res = spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, env: process.env });
  const out = `${res.stdout ?? ""}${res.stderr ?? ""}`;
  const ok = res.status === 0;
  if (!ok && !opts.allowFail) console.error(`[run] ${cmd} ${args.join(" ")} failed:\n${out.slice(-4000)}`);
  return { ok, out };
}

function git(...args: string[]): string {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();
}

function changedPaths(): string[] {
  // NUL-separated and untrimmed: the leading status column must survive for slice(3).
  const out = execFileSync("git", ["status", "--porcelain", "-z", "--untracked-files=all"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  const entries = out.split("\0");
  const paths: string[] = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i] ?? "";
    if (entry.length < 4) continue;
    paths.push(entry.slice(3));
    // Renames/copies list the original path as the next entry; skip it.
    if (entry[0] === "R" || entry[0] === "C") i++;
  }
  return paths;
}

export function isAllowed(file: string): boolean {
  return COMMIT_ALLOWLIST.some((prefix) => (prefix.endsWith("/") ? file.startsWith(prefix) : file === prefix));
}

function slugToUrl(file: string): string | null {
  const m = /^content\/blog\/([a-z0-9-]+)\.mdx$/.exec(file);
  return m ? `${SITE}/blog/${m[1]}` : null;
}

async function verifyGates(steps: Step[]): Promise<boolean> {
  for (const [name, cmd, args] of [
    ["typecheck", "npm", ["run", "typecheck"]],
    ["lint", "npm", ["run", "lint"]],
    ["tests", "npm", ["test"]],
    ["institutional-content", "npm", ["run", "seo:check-institutional"]],
    ["build", "npm", ["run", "build"]],
  ] as const) {
    const r = sh(cmd, [...args]);
    steps.push({ name, ok: r.ok, detail: r.ok ? "passed" : r.out.slice(-1500) });
    if (!r.ok) return false;
  }
  return true;
}

function commitAndPush(message: string, files: string[], steps: Step[]): boolean {
  if (process.env.GROWTH_PUBLISH !== "1") {
    steps.push({ name: "push", ok: true, detail: "skipped (GROWTH_PUBLISH!=1); files left in working tree" });
    return false;
  }
  git("config", "user.name", process.env.GIT_AUTHOR_NAME ?? "Prestyj Growth Engine");
  git("config", "user.email", process.env.GIT_AUTHOR_EMAIL ?? "growth@prestyj.com");
  execFileSync("git", ["add", "--", ...files], { cwd: ROOT });
  execFileSync("git", ["commit", "-m", message], { cwd: ROOT });
  for (let attempt = 1; attempt <= 3; attempt++) {
    const pull = sh("git", ["pull", "--rebase", "origin", "main"], { allowFail: true });
    if (!pull.ok) {
      sh("git", ["rebase", "--abort"], { allowFail: true });
      steps.push({ name: "push", ok: false, detail: `rebase conflict: ${pull.out.slice(-800)}` });
      return false;
    }
    const push = sh("git", ["push", "origin", "HEAD:main"], { allowFail: true });
    if (push.ok) {
      steps.push({ name: "push", ok: true, detail: git("rev-parse", "--short", "HEAD") });
      return true;
    }
  }
  steps.push({ name: "push", ok: false, detail: "push failed after 3 attempts" });
  return false;
}

async function indexNow(refreshed: string[], steps: Step[]): Promise<void> {
  const diff = sh("npx", ["tsx", "scripts/indexnow-diff.ts"], { allowFail: true });
  steps.push({ name: "indexnow-new", ok: diff.ok, detail: diff.out.split("\n").slice(-3).join(" ") });
  for (const url of refreshed) {
    const r = sh("npx", ["tsx", "scripts/submit-indexnow.ts", "--url", url], { allowFail: true });
    steps.push({ name: `indexnow-refresh ${url}`, ok: r.ok, detail: r.ok ? "accepted" : r.out.slice(-300) });
  }
}

/** Wait until the deploy serves the new page (site auto-deploys from main). */
async function waitForLive(urls: string[], timeoutMs = 20 * 60_000): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const results = await Promise.all(
      urls.map((u) => fetch(u, { redirect: "manual" }).then((r) => r.status === 200).catch(() => false)),
    );
    if (results.every(Boolean)) return true;
    await new Promise((r) => setTimeout(r, 60_000));
  }
  return false;
}

async function daily(dryRun: boolean): Promise<Step[]> {
  const steps: Step[] = [];
  const dirtyAtStart = changedPaths().filter((f) => !isAllowed(f));
  if (dirtyAtStart.length && !dryRun && process.env.GROWTH_PUBLISH === "1") {
    throw new Error(`Working tree has non-engine changes; refusing to publish: ${dirtyAtStart.slice(0, 5).join(", ")}`);
  }

  const { collectPerformance } = await import("./measure/index");
  const snap = await collectPerformance({ root: ROOT, dryRun });
  steps.push({ name: "measure", ok: true, detail: JSON.stringify(snap.sources) });

  const { runContentCycle } = await import("./content/index");
  const result = await runContentCycle({ root: ROOT, dryRun });
  steps.push({
    name: "content",
    ok: true,
    detail: `published ${result.publishedPaths.length}, refreshed ${result.refreshedPaths.length}, log ${result.log.length}`,
  });
  if (dryRun) return steps;

  const changed = changedPaths().filter((f) => !dirtyAtStart.includes(f));
  const outside = changed.filter((f) => !isAllowed(f));
  if (outside.length) {
    await raiseException({ severity: "critical", component: "run.allowlist", message: `Content cycle changed files outside the allowlist; nothing published: ${outside.join(", ")}` });
    return steps;
  }
  const siteChanged = changed.some((f) => !f.startsWith("data/") && !f.startsWith("scripts/"));
  if (siteChanged && !(await verifyGates(steps))) {
    await raiseException({ severity: "critical", component: "run.gates", message: `Pre-publish gate failed (${steps.at(-1)?.name}); nothing pushed. ${steps.at(-1)?.detail.slice(0, 600) ?? ""}` });
    return steps;
  }
  if (!changed.length) return steps;
  const summary = [
    ...result.publishedPaths.map((p) => `publish ${p}`),
    ...result.refreshedPaths.map((p) => `refresh ${p}`),
  ].join("; ");
  const pushed = commitAndPush(`growth: ${summary || "update performance data"}`, changed, steps);
  if (!pushed || !siteChanged) return steps;

  const urls = [...result.publishedPaths, ...result.refreshedPaths].map((p) => `${SITE}${p}`);
  const fallback = changed.map(slugToUrl).filter((u): u is string => !!u);
  const live = await waitForLive(urls.length ? urls : fallback);
  steps.push({ name: "live-check", ok: live, detail: live ? "all URLs return 200" : "timeout waiting for deploy" });
  if (!live) {
    await raiseException({ severity: "critical", component: "run.deploy", message: `Pushed but pages not live after 20 minutes: ${urls.join(", ")}` });
    return steps;
  }
  await indexNow(result.refreshedPaths.map((p) => `${SITE}${p}`), steps);
  const snapshotChanged = changedPaths().filter(isAllowed);
  if (snapshotChanged.length) commitAndPush("growth: update IndexNow snapshot", snapshotChanged, steps);
  return steps;
}

async function weekly(dryRun: boolean): Promise<Step[]> {
  const steps: Step[] = [];
  const { collectPerformance } = await import("./measure/index");
  const snap = await collectPerformance({ root: ROOT, dryRun });
  steps.push({ name: "measure", ok: true, detail: JSON.stringify(snap.sources) });
  const { promoteCtaWinners, sendWeeklyReport } = await import("./report/index");
  const promo = await promoteCtaWinners({ root: ROOT, dryRun });
  steps.push({ name: "cta-promotion", ok: true, detail: promo.changedFiles.join(", ") || "no change" });
  if (promo.changedFiles.length && !dryRun && !(await verifyGates(steps))) {
    await raiseException({ severity: "critical", component: "run.gates", message: "CTA promotion broke a gate; not pushed." });
    return steps;
  }
  const report = await sendWeeklyReport({ root: ROOT, dryRun });
  steps.push({ name: "report", ok: true, detail: `${report.markdownPath} emailed=${report.emailed}` });
  if (!dryRun) {
    const changed = changedPaths().filter(isAllowed);
    if (changed.length) commitAndPush("growth: weekly report and CTA results", changed, steps);
  }
  return steps;
}

async function main(): Promise<void> {
  const [job = "daily", ...rest] = process.argv.slice(2);
  const dryRun = rest.includes("--dry-run");
  const started = Date.now();
  console.log(`[run] ${job}${dryRun ? " (dry-run)" : ""} started ${new Date().toISOString()}`);
  try {
    if (job !== "daily" && job !== "weekly") throw new Error(`Unknown job ${job}`);
    const steps = job === "daily" ? await daily(dryRun) : await weekly(dryRun);
    for (const s of steps) console.log(`[run] ${s.ok ? "ok  " : "FAIL"} ${s.name}: ${s.detail.split("\n")[0]}`);
    console.log(`[run] finished in ${Math.round((Date.now() - started) / 1000)}s`);
    if (steps.some((s) => !s.ok)) process.exitCode = 1;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    await raiseException({ severity: "critical", component: `run.${job}`, message });
    process.exitCode = 1;
  }
}

if (process.argv[1]?.endsWith("run.ts")) void main();
