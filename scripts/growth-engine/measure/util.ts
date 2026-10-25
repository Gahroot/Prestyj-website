/** Small shared helpers for the measurement side (dates, paths, env, IO). */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { config as loadDotenv } from "dotenv";
import { raiseException } from "../shared/alert";
import { institutionalPublicPaths } from "../../../src/lib/institutional/site-map";

export const SITE_HOSTS = ["prestyj.com", "www.prestyj.com"];
export const HISTORY_DIR = "data/growth/history";
export const CTA_STATS_FILE = "data/growth/cta-stats.json";
export const BING_AI_IMPORT_DIR = "data/growth/imports/bing-ai";

export type SourceStatus = "ok" | "missing-credentials" | "error";
export type SourceResult<T> = { status: SourceStatus; data: T | null; message?: string };

/** Load .env.local / .env from the repo root without overriding real env (Railway). */
export function loadEnv(root: string): void {
  for (const file of [".env.local", ".env"]) {
    const full = path.join(root, file);
    if (existsSync(full)) loadDotenv({ path: full, override: false, quiet: true });
  }
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function addDays(d: Date, days: number): Date {
  return new Date(d.getTime() + days * 86_400_000);
}

/** Trailing window of `days` ending yesterday (UTC), inclusive. */
export function trailingWindow(now: Date, days: number): { start: string; end: string } {
  const end = addDays(new Date(`${isoDate(now)}T00:00:00Z`), -1);
  return { start: isoDate(addDays(end, -(days - 1))), end: isoDate(end) };
}

/** URL or path → normalized site path ("/blog/x"), or null if off-site. */
export function toPath(value: string): string | null {
  let pathname = value.trim();
  if (/^https?:\/\//i.test(pathname)) {
    try {
      const url = new URL(pathname);
      if (!SITE_HOSTS.includes(url.hostname.toLowerCase())) return null;
      pathname = url.pathname;
    } catch {
      return null;
    }
  }
  pathname = pathname.split(/[?#]/)[0] ?? "";
  if (!pathname.startsWith("/")) return null;
  pathname = pathname.toLowerCase().replace(/\/+$/, "");
  return pathname === "" ? "/" : pathname;
}

const LIVE = new Set(institutionalPublicPaths);
export function isLivePath(p: string | null): p is string {
  return p !== null && LIVE.has(p);
}

export function readJson<T>(file: string, fallback: T): T {
  if (!existsSync(file)) return fallback;
  return JSON.parse(readFileSync(file, "utf8")) as T;
}

export function writeJson(file: string, value: unknown): void {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

export async function warn(
  root: string,
  dryRun: boolean,
  component: string,
  message: string,
): Promise<void> {
  if (dryRun) {
    console.warn(`[dry-run exception:warning] ${component}: ${message}`);
    return;
  }
  await raiseException({ severity: "warning", component, message }, root);
}

/** fetch with timeout; throws on non-2xx without echoing response bodies (may hold secrets). */
export async function fetchJson(
  url: string,
  init: RequestInit & { label: string },
): Promise<unknown> {
  const { label, ...rest } = init;
  const res = await fetch(url, { ...rest, signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`${label} returned HTTP ${res.status}`);
  return res.json();
}

export function round(n: number, digits = 4): number {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}
