#!/usr/bin/env npx tsx
/**
 * Earned-authority tracker.
 *
 * Distinguishes REAL earned referring domains from self-made links. A referring
 * domain only counts as "earned" when it is neither:
 *   - an owned property (owned_domains in referring-domains-history.json), nor
 *   - a self-made placement we created ourselves (every hostname that appears in
 *     data/backlinks/inventory.json — directories, GitHub, gists, Wikidata, etc.)
 *
 * Workflow:
 *   1. Export unique referring domains from Ahrefs/Semrush (free tier) OR the
 *      GSC Links report → data/backlinks/<tool>-export-YYYY-MM-DD.csv
 *   2. Normalize it:   npm run backlinks:snapshot data/backlinks/<tool>-export-YYYY-MM-DD.csv
 *   3. Record a trend point:   npm run backlinks:track
 *
 * Reads:
 *   - data/backlinks/snapshot-latest.csv            (referring-domain snapshot)
 *   - data/backlinks/inventory.json                 (self-made placements)
 *   - data/backlinks/referring-domains-history.json (committed trend history)
 *
 * Writes (unless --dry-run):
 *   - data/backlinks/referring-domains-history.json (appends/replaces today's snapshot)
 *
 * Flags:
 *   --dry-run   Print the classification and trend without writing history.
 *   --csv=PATH  Read a specific snapshot CSV instead of snapshot-latest.csv.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface HistorySnapshot {
  date: string;
  source: string;
  all_referring_count: number;
  self_made_count: number;
  earned_count: number;
  earned_domains: string[];
  note?: string;
}

interface History {
  _comment?: string;
  owned_domains: string[];
  snapshots: HistorySnapshot[];
}

interface InventoryItem {
  target_url?: string;
  live_url?: string;
  status?: string;
}

interface Inventory {
  items: InventoryItem[];
}

/** Goal (2026-06-04): grow REAL independent referring domains, not self-made footprint. */
const TARGET_MIN_PER_MONTH = 5;
const TARGET_MAX_PER_MONTH = 15;

const DATA_DIR = join(process.cwd(), "data", "backlinks");
const HISTORY_PATH = join(DATA_DIR, "referring-domains-history.json");
const INVENTORY_PATH = join(DATA_DIR, "inventory.json");
const DEFAULT_SNAPSHOT = join(DATA_DIR, "snapshot-latest.csv");

function normalizeDomain(raw: string): string {
  let s = raw.trim().toLowerCase();
  s = s.replace(/^https?:\/\//, "");
  s = s.replace(/^www\./, "");
  s = s.split("/")[0] ?? s;
  s = s.split(":")[0] ?? s;
  return s;
}

function loadHistory(): History {
  if (!existsSync(HISTORY_PATH)) {
    return { owned_domains: [], snapshots: [] };
  }
  const parsed = JSON.parse(readFileSync(HISTORY_PATH, "utf8")) as History;
  parsed.owned_domains ??= [];
  parsed.snapshots ??= [];
  return parsed;
}

/** Every hostname we have ever placed a link on ourselves = self-made, never earned. */
function loadSelfMadeDomains(): Set<string> {
  const out = new Set<string>();
  if (!existsSync(INVENTORY_PATH)) return out;
  let inv: Inventory;
  try {
    inv = JSON.parse(readFileSync(INVENTORY_PATH, "utf8")) as Inventory;
  } catch {
    return out;
  }
  for (const item of inv.items ?? []) {
    for (const url of [item.target_url, item.live_url]) {
      if (!url) continue;
      try {
        out.add(normalizeDomain(new URL(url).hostname));
      } catch {
        // ignore unparseable URLs
      }
    }
  }
  return out;
}

/** Read referring domains from a canonical snapshot CSV (domain is the first column). */
function loadReferringDomains(csvPath: string): { domains: string[]; source: string } {
  const text = readFileSync(csvPath, "utf8").replace(/^\uFEFF/, "");
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length <= 1) return { domains: [], source: "unknown" };
  const header = (lines[0] ?? "").split(",").map((h) => h.trim());
  const domainIdx = header.findIndex((h) => /^(domain|site)$/i.test(h));
  const sourceIdx = header.findIndex((h) => /^source$/i.test(h));
  const dI = domainIdx === -1 ? 0 : domainIdx;

  const domains = new Set<string>();
  let source = "unknown";
  for (let i = 1; i < lines.length; i++) {
    const cells = (lines[i] ?? "").split(",");
    const raw = cells[dI];
    if (!raw) continue;
    const domain = normalizeDomain(raw);
    if (domain) domains.add(domain);
    if (sourceIdx >= 0 && cells[sourceIdx]?.trim()) source = cells[sourceIdx].trim();
  }
  return { domains: Array.from(domains).sort(), source };
}

function arg(flag: string): string | undefined {
  const hit = process.argv.find((a) => a.startsWith(`${flag}=`));
  return hit?.slice(flag.length + 1);
}

function sparkline(values: number[]): string {
  if (values.length === 0) return "";
  const bars = "▁▂▃▄▅▆▇█";
  const max = Math.max(...values, 1);
  return values
    .map((v) => bars[Math.min(bars.length - 1, Math.round((v / max) * (bars.length - 1)))])
    .join("");
}

function main(): void {
  const dryRun = process.argv.includes("--dry-run");
  const csvPath = arg("--csv") ?? DEFAULT_SNAPSHOT;

  if (!existsSync(csvPath)) {
    console.error(`Snapshot CSV not found: ${csvPath}`);
    console.error(
      "Export referring domains (Ahrefs/Semrush free tier or GSC Links report), then run:",
    );
    console.error("  npm run backlinks:snapshot data/backlinks/<tool>-export-YYYY-MM-DD.csv");
    process.exit(1);
  }

  const history = loadHistory();
  const owned = new Set(history.owned_domains.map(normalizeDomain));
  const selfMade = loadSelfMadeDomains();
  const { domains, source } = loadReferringDomains(csvPath);

  const earned: string[] = [];
  const excludedOwned: string[] = [];
  const excludedSelfMade: string[] = [];
  for (const d of domains) {
    if (owned.has(d)) excludedOwned.push(d);
    else if (selfMade.has(d)) excludedSelfMade.push(d);
    else earned.push(d);
  }
  earned.sort();

  const today = new Date().toISOString().slice(0, 10);
  const prev = history.snapshots[history.snapshots.length - 1];
  const prevEarnedSet = new Set(prev?.earned_domains ?? []);
  const newlyEarned = earned.filter((d) => !prevEarnedSet.has(d));
  const lost = (prev?.earned_domains ?? []).filter((d) => !earned.includes(d));

  const snapshot: HistorySnapshot = {
    date: today,
    source,
    all_referring_count: domains.length,
    self_made_count: excludedSelfMade.length,
    earned_count: earned.length,
    earned_domains: earned,
  };

  // Report ----------------------------------------------------------------
  console.log(`\n${"━".repeat(64)}`);
  console.log("Earned referring-domain tracker");
  console.log("━".repeat(64));
  console.log(`  Snapshot CSV     : ${csvPath}`);
  console.log(`  Export source    : ${source}`);
  console.log(`  All referring    : ${domains.length}`);
  console.log(`  Owned (excluded) : ${excludedOwned.length}  [${excludedOwned.join(", ") || "—"}]`);
  console.log(
    `  Self-made (excl.): ${excludedSelfMade.length}  [${excludedSelfMade.join(", ") || "—"}]`,
  );
  console.log(`  EARNED           : ${earned.length}  [${earned.join(", ") || "—"}]`);
  if (prev) {
    const delta = earned.length - prev.earned_count;
    const sign = delta > 0 ? `+${delta}` : String(delta);
    console.log(`  Δ vs ${prev.date} : ${sign} earned domain(s)`);
  }
  if (newlyEarned.length > 0) console.log(`  ✅ New earned    : ${newlyEarned.join(", ")}`);
  if (lost.length > 0) console.log(`  ⚠️  Lost          : ${lost.join(", ")}`);
  console.log("━".repeat(64));

  // Monthly target ----------------------------------------------------------
  // Only EARNED (independent) referring domains count toward the goal. Self-made
  // placements in inventory.json are explicitly NOT wins.
  if (excludedSelfMade.length > 0) {
    console.log(
      `  ℹ️  ${excludedSelfMade.length} self-made placement domain(s) ignored — not counted as wins.`,
    );
  }
  if (prev) {
    const prevDate = new Date(prev.date);
    const nowDate = new Date(today);
    const days = Math.max(1, (nowDate.getTime() - prevDate.getTime()) / 86_400_000);
    const netNew = newlyEarned.length;
    const perMonth = (netNew / days) * 30;
    const status =
      perMonth >= TARGET_MIN_PER_MONTH
        ? perMonth <= TARGET_MAX_PER_MONTH
          ? "🟢 on target"
          : "🟢 above target"
        : "🔴 below target";
    console.log(
      `  🎯 Target ${TARGET_MIN_PER_MONTH}–${TARGET_MAX_PER_MONTH} earned ref-domains/month: ` +
        `+${netNew} new over ${days.toFixed(0)}d ≈ ${perMonth.toFixed(1)}/mo  ${status}`,
    );
  } else {
    console.log(
      `  🎯 Target: ${TARGET_MIN_PER_MONTH}–${TARGET_MAX_PER_MONTH} earned (independent) referring domains/month.`,
    );
  }
  console.log("━".repeat(64));

  // Trend over time -------------------------------------------------------
  const merged = [...history.snapshots];
  const existingIdx = merged.findIndex((s) => s.date === today);
  if (existingIdx >= 0) merged[existingIdx] = snapshot;
  else merged.push(snapshot);
  merged.sort((a, b) => a.date.localeCompare(b.date));

  console.log("Earned referring domains over time:");
  for (const s of merged) {
    console.log(`  ${s.date}  ${String(s.earned_count).padStart(4)}  (${s.source})`);
  }
  console.log(`  trend ${sparkline(merged.map((s) => s.earned_count))}`);
  console.log("━".repeat(64));

  if (dryRun) {
    console.log("--dry-run: history not written.");
    return;
  }

  history.snapshots = merged;
  writeFileSync(HISTORY_PATH, `${JSON.stringify(history, null, 2)}\n`);
  console.log(`Wrote ${HISTORY_PATH}`);
  console.log("Commit referring-domains-history.json to preserve the trend.");
}

main();
