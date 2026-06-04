#!/usr/bin/env npx tsx
/**
 * Monthly Google Search Console progress recorder — judged against Phase 0.
 *
 * Records the FOUR metrics that actually prove SEO progress and judges them with
 * REALISTIC LAG: backlinks take ~6-10 weeks to move rankings, so a flat ranking
 * or branded-search line inside that window is EXPECTED, not failure.
 *
 *   1. indexed_pages            — GSC > Indexing > Pages > "Indexed" count (manual flag).
 *   2. referring_domains_earned — auto-derived from referring-domains-history.json.
 *   3. branded_impressions_28d  — GSC > Performance, Query regex (?i)prestyj (manual flag).
 *   4. target_keywords          — auto-derived from latest data/keyword-rankings/<date>/ CSV.
 *
 * Auto-derived metrics need no flags; pass flags only for the GSC-only numbers
 * you read off the Search Console UI (or to override an auto-derived value).
 *
 * Usage:
 *   npm run seo:gsc-progress -- --indexed=120 --branded-impressions=540 \
 *     --branded-clicks=180 --branded-position=1.2
 *   npm run seo:gsc-progress:dry -- --indexed=120     # preview, write nothing
 *
 * Flags:
 *   --indexed=N             GSC "Indexed" page count.
 *   --branded-impressions=N (?i)prestyj impressions, last 28 days.
 *   --branded-clicks=N      (?i)prestyj clicks, last 28 days.
 *   --branded-position=N    (?i)prestyj average position (e.g. 1.2).
 *   --branded-window=28d    Window label for the branded numbers (default 28d).
 *   --referring=N           Override earned referring domains (default: auto).
 *   --keywords-top10=N      Override keywords-in-top-10 (default: auto).
 *   --date=YYYY-MM-DD       Snapshot date (default: today).
 *   --note="…"              Free-text note for this snapshot.
 *   --dry-run               Print the report and judgment without writing history.
 *
 * Reads:
 *   - data/gsc/progress-history.json                 (committed trend history)
 *   - data/backlinks/referring-domains-history.json  (earned referring domains)
 *   - data/keyword-rankings/<latest>/*.csv           (target-keyword positions)
 *
 * Writes (unless --dry-run):
 *   - data/gsc/progress-history.json                 (appends/replaces this date)
 */

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface Snapshot {
  date: string;
  phase?: string;
  source: string;
  indexed_pages: number | null;
  sitemap_submitted_urls: number | null;
  referring_domains_earned: number | null;
  branded_impressions_28d: number | null;
  branded_clicks_28d: number | null;
  branded_avg_position: number | null;
  branded_window?: string;
  target_keywords_total: number | null;
  target_keywords_top10: number | null;
  target_keywords_found: number | null;
  target_keywords_avg_position_found: number | null;
  note?: string;
}

interface History {
  _comment?: string;
  lag_model?: {
    backlinks_to_rankings_weeks_min?: number;
    backlinks_to_rankings_weeks_max?: number;
  };
  sitemap_submitted_urls?: number;
  phase0_baseline_date?: string;
  snapshots: Snapshot[];
}

const ROOT = process.cwd();
const HISTORY_PATH = join(ROOT, "data", "gsc", "progress-history.json");
const BACKLINKS_HISTORY = join(ROOT, "data", "backlinks", "referring-domains-history.json");
const KEYWORDS_DIR = join(ROOT, "data", "keyword-rankings");

const LAG_MIN_WEEKS = 6;
const LAG_MAX_WEEKS = 10;

function arg(flag: string): string | undefined {
  const hit = process.argv.find((a) => a.startsWith(`${flag}=`));
  return hit?.slice(flag.length + 1);
}

function numArg(flag: string): number | undefined {
  const raw = arg(flag);
  if (raw === undefined) return undefined;
  const n = Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

function loadHistory(): History {
  if (!existsSync(HISTORY_PATH)) {
    return { snapshots: [] };
  }
  const parsed = JSON.parse(readFileSync(HISTORY_PATH, "utf8")) as History;
  parsed.snapshots ??= [];
  return parsed;
}

/** Latest earned referring-domain count from the backlinks tracker history. */
function deriveEarnedReferringDomains(): number | null {
  if (!existsSync(BACKLINKS_HISTORY)) return null;
  try {
    const h = JSON.parse(readFileSync(BACKLINKS_HISTORY, "utf8")) as {
      snapshots?: { earned_count?: number }[];
    };
    const last = h.snapshots?.[h.snapshots.length - 1];
    return typeof last?.earned_count === "number" ? last.earned_count : null;
  } catch {
    return null;
  }
}

/** Most recent dated folder under data/keyword-rankings/ (lexical = chronological). */
function latestKeywordCsv(): string | null {
  if (!existsSync(KEYWORDS_DIR)) return null;
  const dirs = readdirSync(KEYWORDS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(d.name))
    .map((d) => d.name)
    .sort();
  const latest = dirs[dirs.length - 1];
  if (!latest) return null;
  const folder = join(KEYWORDS_DIR, latest);
  const files = readdirSync(folder)
    .filter((f) => f.endsWith(".csv"))
    .sort();
  // Prefer a copied-forward file over baseline.csv if both exist; else baseline.
  const chosen = files.find((f) => f !== "baseline.csv") ?? files[0];
  return chosen ? join(folder, chosen) : null;
}

interface KeywordStats {
  total: number;
  top10: number;
  found: number;
  avgPositionFound: number | null;
  csv: string;
}

/** Parse the keyword-rankings CSV to count top-10 coverage + average found position. */
function deriveKeywordStats(): KeywordStats | null {
  const csv = latestKeywordCsv();
  if (!csv || !existsSync(csv)) return null;
  const text = readFileSync(csv, "utf8").replace(/^\uFEFF/, "");
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length <= 1) return null;
  const header = (lines[0] ?? "").split(",").map((h) =>
    h
      .replace(/(^"|"$)/g, "")
      .trim()
      .toLowerCase(),
  );
  const posIdx = header.findIndex((h) => /position/.test(h));
  const statusIdx = header.findIndex((h) => h === "status");

  let total = 0;
  let top10 = 0;
  const positions: number[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = (lines[i] ?? "").split(",").map((c) => c.replace(/(^"|"$)/g, "").trim());
    if (cells.length < 2) continue;
    total++;
    const status = statusIdx >= 0 ? (cells[statusIdx] ?? "") : "";
    const posRaw = posIdx >= 0 ? (cells[posIdx] ?? "") : "";
    const posNum = Number(posRaw.replace(/[~≈]/g, ""));
    const inTop10Status = /^in[_-]?top10$/i.test(status);
    if (Number.isFinite(posNum) && posNum > 0) {
      positions.push(posNum);
      if (posNum <= 10) top10++;
    } else if (inTop10Status) {
      top10++;
    }
  }
  const avg = positions.length > 0 ? positions.reduce((a, b) => a + b, 0) / positions.length : null;
  return {
    total,
    top10,
    found: positions.length,
    avgPositionFound: avg === null ? null : Math.round(avg * 10) / 10,
    csv,
  };
}

function fmt(v: number | null | undefined): string {
  return v === null || v === undefined ? "—" : String(v);
}

function delta(curr: number | null, base: number | null): string {
  if (curr === null || base === null) return "—";
  const d = Math.round((curr - base) * 10) / 10;
  return d > 0 ? `+${d}` : String(d);
}

function weeksBetween(a: string, b: string): number {
  return (new Date(b).getTime() - new Date(a).getTime()) / (7 * 86_400_000);
}

function main(): void {
  const dryRun = process.argv.includes("--dry-run");
  const history = loadHistory();
  const today = arg("--date") ?? new Date().toISOString().slice(0, 10);

  const phase0 = history.snapshots[0] ?? null;
  const prev = history.snapshots[history.snapshots.length - 1] ?? null;
  const isPhase0 = history.snapshots.length === 0;

  // Auto-derive where the repo already knows the answer; allow flag overrides.
  const earnedRef = numArg("--referring") ?? deriveEarnedReferringDomains();
  const kw = deriveKeywordStats();
  const keywordsTop10 = numArg("--keywords-top10") ?? kw?.top10 ?? null;

  const snapshot: Snapshot = {
    date: today,
    source: "gsc + repo-derived",
    indexed_pages: numArg("--indexed") ?? null,
    sitemap_submitted_urls:
      history.sitemap_submitted_urls ?? phase0?.sitemap_submitted_urls ?? null,
    referring_domains_earned: earnedRef,
    branded_impressions_28d: numArg("--branded-impressions") ?? null,
    branded_clicks_28d: numArg("--branded-clicks") ?? null,
    branded_avg_position: numArg("--branded-position") ?? null,
    branded_window: arg("--branded-window") ?? "28d",
    target_keywords_total: kw?.total ?? phase0?.target_keywords_total ?? null,
    target_keywords_top10: keywordsTop10,
    target_keywords_found: kw?.found ?? null,
    target_keywords_avg_position_found: kw?.avgPositionFound ?? null,
  };
  if (isPhase0) snapshot.phase = "Phase 0";
  const note = arg("--note");
  if (note) snapshot.note = note;

  // Report ------------------------------------------------------------------
  const line = "━".repeat(70);
  console.log(`\n${line}`);
  console.log(`GSC progress vs Phase 0 baseline  —  snapshot ${today}`);
  console.log(line);
  if (kw) console.log(`  keywords source : ${kw.csv}`);
  console.log(`  earned ref src  : ${existsSync(BACKLINKS_HISTORY) ? BACKLINKS_HISTORY : "—"}`);
  console.log(line);

  const baseLabel = phase0 ? `Phase 0 (${phase0.date})` : "Phase 0 (this run)";
  const rows: [string, number | null, number | null][] = [
    ["Indexed pages", snapshot.indexed_pages, phase0?.indexed_pages ?? null],
    [
      "Referring domains (earned)",
      snapshot.referring_domains_earned,
      phase0?.referring_domains_earned ?? null,
    ],
    [
      `Branded impressions (${snapshot.branded_window})`,
      snapshot.branded_impressions_28d,
      phase0?.branded_impressions_28d ?? null,
    ],
    [
      "Target keywords in top 10",
      snapshot.target_keywords_top10,
      phase0?.target_keywords_top10 ?? null,
    ],
  ];
  console.log(`  Metric                          now     ${baseLabel.padEnd(18)} Δ vs Phase 0`);
  for (const [label, now, base] of rows) {
    console.log(
      `  ${label.padEnd(30)} ${fmt(now).padStart(6)}   ${fmt(base).padStart(16)}   ${delta(now, base)}`,
    );
  }
  if (snapshot.indexed_pages !== null && snapshot.sitemap_submitted_urls) {
    const pct = Math.round((snapshot.indexed_pages / snapshot.sitemap_submitted_urls) * 100);
    console.log(
      `  → ${snapshot.indexed_pages}/${snapshot.sitemap_submitted_urls} sitemap URLs indexed (${pct}%)`,
    );
  }
  if (snapshot.target_keywords_avg_position_found !== null) {
    console.log(
      `  → avg position of ${fmt(snapshot.target_keywords_found)} found keyword(s): ` +
        `${snapshot.target_keywords_avg_position_found}`,
    );
  }
  console.log(line);

  // Missing GSC-only inputs reminder ---------------------------------------
  const missing: string[] = [];
  if (snapshot.indexed_pages === null) missing.push("--indexed (GSC > Indexing > Pages)");
  if (snapshot.branded_impressions_28d === null)
    missing.push("--branded-impressions (GSC > Performance, regex (?i)prestyj)");
  if (missing.length > 0) {
    console.log("  ⚠️  GSC-only inputs not provided this run (recorded as —):");
    for (const m of missing) console.log(`       • ${m}`);
    console.log(line);
  }

  // Lag-aware judgment ------------------------------------------------------
  const minW = history.lag_model?.backlinks_to_rankings_weeks_min ?? LAG_MIN_WEEKS;
  const maxW = history.lag_model?.backlinks_to_rankings_weeks_max ?? LAG_MAX_WEEKS;
  const baselineDate = history.phase0_baseline_date ?? phase0?.date ?? today;
  const weeks = weeksBetween(baselineDate, today);

  console.log("Realistic-lag judgment:");
  console.log(`  Backlinks take ~${minW}-${maxW} weeks to move rankings.`);
  if (isPhase0) {
    console.log("  This IS Phase 0 — nothing to judge yet. Re-run monthly to build the trend.");
  } else {
    console.log(`  ${weeks.toFixed(1)} weeks since Phase 0 (${baselineDate}).`);
    if (weeks < minW) {
      console.log(
        `  🟡 Inside the lag window (<${minW}w). Flat rankings/branded impressions are EXPECTED — judge`,
      );
      console.log(
        "     indexing + earned referring domains now; do NOT call ranking work a failure yet.",
      );
    } else if (weeks <= maxW) {
      console.log(
        `  🟢 Entering the lag payoff window (${minW}-${maxW}w). Early ranking + branded movement should`,
      );
      console.log(
        "     begin to appear. Watch the Δ on keywords-in-top-10 and branded impressions.",
      );
    } else {
      console.log(
        `  🔵 Past the lag window (>${maxW}w). Ranking + branded movement is now expected. If keywords`,
      );
      console.log(
        "     are still flat vs Phase 0, treat stuck terms as content-quality tasks (see keyword-ranking-baseline.md).",
      );
    }
  }
  // Per-metric movement note vs previous snapshot.
  if (prev && !isPhase0) {
    const refΔ = delta(snapshot.referring_domains_earned, prev.referring_domains_earned);
    console.log(`  Δ earned referring domains vs ${prev.date}: ${refΔ}`);
  }
  console.log(line);

  // Trend -------------------------------------------------------------------
  const merged = [...history.snapshots];
  const idx = merged.findIndex((s) => s.date === today);
  if (idx >= 0) merged[idx] = { ...merged[idx], ...snapshot };
  else merged.push(snapshot);
  merged.sort((a, b) => a.date.localeCompare(b.date));

  console.log("Trend (date  indexed  ref  branded  kw-top10):");
  for (const s of merged) {
    console.log(
      `  ${s.date}  ${fmt(s.indexed_pages).padStart(7)}  ${fmt(s.referring_domains_earned).padStart(3)}  ` +
        `${fmt(s.branded_impressions_28d).padStart(7)}  ${fmt(s.target_keywords_top10).padStart(7)}`,
    );
  }
  console.log(line);

  if (dryRun) {
    console.log("--dry-run: history not written.");
    return;
  }

  history.snapshots = merged;
  writeFileSync(HISTORY_PATH, `${JSON.stringify(history, null, 2)}\n`);
  console.log(`Wrote ${HISTORY_PATH}`);
  console.log("Commit progress-history.json to preserve the trend.");
}

main();
