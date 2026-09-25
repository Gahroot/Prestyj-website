#!/usr/bin/env npx tsx
/**
 * SEO Bot CLI
 *
 * Subcommands:
 *   npx tsx scripts/seo-bot/cli.ts daily
 *   npx tsx scripts/seo-bot/cli.ts daily --dry-run
 *   npx tsx scripts/seo-bot/cli.ts daily --tasks blogPost
 *   npx tsx scripts/seo-bot/cli.ts task <taskName>
 *   npx tsx scripts/seo-bot/cli.ts dry-run
 *   npx tsx scripts/seo-bot/cli.ts digest
 */

import { config as loadDotenv } from "dotenv";
import path from "node:path";
import { existsSync } from "node:fs";

const envLocal = path.resolve(process.cwd(), ".env.local");
if (existsSync(envLocal)) loadDotenv({ path: envLocal });
const envDefault = path.resolve(process.cwd(), ".env");
if (existsSync(envDefault)) loadDotenv({ path: envDefault });

import { loadConfig } from "./load-config";
import { runDaily } from "./orchestration/daily-run";
import { runWeeklyDigest } from "./orchestration/weekly-digest";
import type { TaskName } from "./types";

const VALID_TASKS: readonly TaskName[] = ["blogPost"];

function isTaskName(value: string): value is TaskName {
  return (VALID_TASKS as readonly string[]).includes(value);
}

function parseFlagValue(args: string[], flag: string): string | undefined {
  const eqForm = args.find((a) => a.startsWith(`${flag}=`));
  if (eqForm) return eqForm.slice(flag.length + 1);
  const idx = args.indexOf(flag);
  if (idx >= 0 && idx + 1 < args.length) {
    const next = args[idx + 1];
    if (next && !next.startsWith("--")) return next;
  }
  return undefined;
}

function hasFlag(args: string[], flag: string): boolean {
  return args.includes(flag);
}

function parseTaskList(raw: string | undefined): TaskName[] | undefined {
  if (!raw) return undefined;
  const items = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  const invalid = items.filter((t) => !isTaskName(t));
  if (invalid.length > 0) {
    throw new Error(`Invalid task names: ${invalid.join(", ")}. Valid: ${VALID_TASKS.join(", ")}`);
  }
  return items.filter(isTaskName);
}

function printUsage(): void {
  console.log(`Usage:
  npx tsx scripts/seo-bot/cli.ts daily [--dry-run] [--tasks <list>] [--config <path>]
  npx tsx scripts/seo-bot/cli.ts task <taskName> [--dry-run] [--config <path>]
  npx tsx scripts/seo-bot/cli.ts dry-run [--config <path>]
  npx tsx scripts/seo-bot/cli.ts digest [--config <path>]

Generated content is inert Markdown, outside the public collection.
Publishing is disabled. No commit, push, IndexNow or destructive rollback.
Follow docs/seo/institutional-growth-runbook.md for reviewed promotion.

Valid task names: ${VALID_TASKS.join(", ")}
`);
}

async function runDailyCommand(args: string[]): Promise<void> {
  const configPath = parseFlagValue(args, "--config");
  const dryRun = hasFlag(args, "--dry-run");
  // A legacy --publish request is explicitly rejected by the runner.
  const noCommit = !hasFlag(args, "--publish");
  const taskOverride = parseTaskList(parseFlagValue(args, "--tasks"));
  const config = loadConfig(configPath);
  const metrics = await runDaily({
    config,
    date: new Date(),
    dryRun,
    noCommit,
    ...(taskOverride !== undefined && { taskOverride }),
  });
  if (metrics.errors.length > 0) process.exitCode = 1;
  console.log(
    `[seo-bot] daily complete — pages=${metrics.pagesShipped} drafts=${metrics.blogsDrafted} cost=$${metrics.costUSD.toFixed(4)} errors=${metrics.errors.length}`,
  );
}

async function runTaskCommand(args: string[]): Promise<void> {
  const taskName = args[0];
  if (!taskName) {
    throw new Error("Missing task name. Usage: cli.ts task <taskName>");
  }
  if (!isTaskName(taskName)) {
    throw new Error(`Invalid task name "${taskName}". Valid: ${VALID_TASKS.join(", ")}`);
  }
  const rest = args.slice(1);
  const configPath = parseFlagValue(rest, "--config");
  const dryRun = hasFlag(rest, "--dry-run");
  const noCommit = !hasFlag(rest, "--publish");
  const config = loadConfig(configPath);
  const metrics = await runDaily({
    config,
    date: new Date(),
    dryRun,
    noCommit,
    taskOverride: [taskName],
  });
  if (metrics.errors.length > 0) process.exitCode = 1;
  console.log(
    `[seo-bot] task "${taskName}" complete — shipped_pages=${metrics.pagesShipped} drafts=${metrics.blogsDrafted} cost=$${metrics.costUSD.toFixed(4)} errors=${metrics.errors.length}`,
  );
}

async function runDryRunCommand(args: string[]): Promise<void> {
  const configPath = parseFlagValue(args, "--config");
  const config = loadConfig(configPath);
  const metrics = await runDaily({
    config,
    date: new Date(),
    dryRun: true,
  });
  console.log(
    `[seo-bot] dry-run complete — no publication; pages=${metrics.pagesShipped} drafts=${metrics.blogsDrafted} cost=$${metrics.costUSD.toFixed(4)}`,
  );
}

async function runDigestCommand(args: string[]): Promise<void> {
  const configPath = parseFlagValue(args, "--config");
  const config = loadConfig(configPath);
  await runWeeklyDigest(config, new Date());
  console.log("[seo-bot] digest complete");
}

async function main(): Promise<void> {
  const [, , subcommand, ...rest] = process.argv;

  if (!subcommand || subcommand === "--help" || subcommand === "-h") {
    printUsage();
    return;
  }

  switch (subcommand) {
    case "daily":
      await runDailyCommand(rest);
      return;
    case "task":
      await runTaskCommand(rest);
      return;
    case "dry-run":
      await runDryRunCommand(rest);
      return;
    case "digest":
      await runWeeklyDigestWrapper(rest);
      return;
    default:
      console.error(`Unknown subcommand: ${subcommand}`);
      printUsage();
      process.exit(1);
  }
}

async function runWeeklyDigestWrapper(args: string[]): Promise<void> {
  await runDigestCommand(args);
}

main().catch((err) => {
  const reason = err instanceof Error ? err.message : String(err);
  console.error(`[seo-bot] FATAL: ${reason}`);
  if (err instanceof Error && err.stack) {
    console.error(err.stack);
  }
  process.exit(1);
});
