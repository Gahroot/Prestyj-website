import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  CONTENT_LOG_FILE,
  OPPORTUNITIES_FILE,
  contentLogEntrySchema,
  opportunitySchema,
  type ContentLogEntry,
  type Opportunity,
} from "../shared/contracts";

function readJsonArray<T>(root: string, rel: string, parse: (value: unknown) => T[]): T[] {
  const file = path.join(root, rel);
  if (!existsSync(file)) return [];
  return parse(JSON.parse(readFileSync(file, "utf8")));
}

function writeJson(root: string, rel: string, value: unknown): void {
  const file = path.join(root, rel);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

export const readOpportunities = (root: string): Opportunity[] =>
  readJsonArray(root, OPPORTUNITIES_FILE, (v) => opportunitySchema.array().parse(v));
export const writeOpportunities = (root: string, items: Opportunity[]): void =>
  writeJson(root, OPPORTUNITIES_FILE, items);
export const readContentLog = (root: string): ContentLogEntry[] =>
  readJsonArray(root, CONTENT_LOG_FILE, (v) => contentLogEntrySchema.array().parse(v));
export const appendContentLog = (root: string, entries: ContentLogEntry[]): void =>
  writeJson(root, CONTENT_LOG_FILE, [...readContentLog(root), ...entries]);

export function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9$% ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Adds items whose normalized first query is new; existing items and statuses are kept. */
export function mergeOpportunities(
  existing: Opportunity[],
  incoming: Opportunity[],
): Opportunity[] {
  const seen = new Set(existing.flatMap((item) => item.queries.map(normalizeQuery)));
  const ids = new Set(existing.map((item) => item.id));
  const merged = [...existing];
  for (const item of incoming) {
    const keys = item.queries.map(normalizeQuery);
    if (ids.has(item.id) || keys.some((key) => seen.has(key))) continue;
    keys.forEach((key) => seen.add(key));
    ids.add(item.id);
    merged.push(item);
  }
  return merged;
}

export type CapUsage = { newThisWeek: number; refreshThisWeek: number };

export function capUsage(log: ContentLogEntry[], now: Date): CapUsage {
  const since = now.getTime() - 7 * 24 * 60 * 60 * 1000;
  const recent = log.filter((entry) => {
    const at = Date.parse(entry.at);
    return Number.isFinite(at) && at > since && at <= now.getTime();
  });
  return {
    newThisWeek: recent.filter((entry) => entry.action === "publish").length,
    refreshThisWeek: recent.filter((entry) => entry.action === "refresh").length,
  };
}
