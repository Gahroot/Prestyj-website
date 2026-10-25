/**
 * Opportunity rules. Score = expected incremental qualified demos per 28 days × 1000
 * (so 1.0 ≈ one extra qualified demo every ~3 years; compare scores relatively).
 *
 *   incrementalClicks × QUALIFIED_DEMO_PER_CLICK × 1000
 *
 * QUALIFIED_DEMO_PER_CLICK = observed site rate (qualified demos ÷ GSC clicks on live pages)
 * when ≥ 3 qualified demos exist, else a prior of 0.005 (1 qualified demo per 200 visits).
 *
 * - refresh-ctr:      impressions ≥ 100, CTR < 50% of EXPECTED_CTR(position), position ≤ 20.
 *                     incremental = impressions × (expected − actual CTR).
 * - refresh-position: position 5–20, impressions ≥ 50.
 *                     incremental = impressions × (EXPECTED_CTR(3) − actual CTR) × 0.3 (odds of reaching top 3).
 * - refresh-stale:    institutional article with updated/date frontmatter > 120 days old.
 *                     incremental = max(clicks, 5) × 0.2 (decay prevented).
 * - new-topic:        query (GSC/Bing/Bing-AI) with ≥ 20 impressions (or ≥ 5 AI citations), on-lane wording,
 *                     and no live page ranking ≤ 10 for it. incremental = impressions × EXPECTED_CTR(5) × 0.5.
 *                     Bing AI citations count as impressions × 0.5.
 * - conversion:       live page with ≥ 30 organic+AI sessions (GSC clicks if GA4 missing) and 0 demos;
 *                     only when Cal.com data is available. incremental = traffic × 0.5 (assume half the
 *                     traffic would convert at the site rate after a CTA/proof change).
 */
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Opportunity, PerformanceSnapshot } from "../shared/contracts";
import { round } from "./util";

const EXPECTED_CTR = [0.28, 0.15, 0.1, 0.07, 0.05, 0.04, 0.03, 0.025, 0.02, 0.018];
export function expectedCtr(position: number): number {
  if (position <= 0) return 0;
  const idx = Math.max(0, Math.round(position) - 1);
  return EXPECTED_CTR[idx] ?? (position <= 20 ? 0.01 : 0.003);
}

export const PRIOR_QUALIFIED_PER_CLICK = 0.005;
export const STALE_DAYS = 120;
/** On-lane wording for new topics (institutional RE + connectors lane). SMB legacy queries never qualify. */
export const ON_LANE =
  /\b(real estate|cre|commercial|fund|funds|brokerage|broker|lp|limited partner|investor|reit|property|properties|portfolio|asset management|underwriting|diligence|waterfall|capital call|quarter[- ]end|rent roll|lease|owner[- ]operator|acquisition|mcp|claude connector|chatgpt plugin|connector)\b/i;
export const OFF_LANE =
  /\b(hvac|plumb|roof|dentist|dental|realtor|auto dealer|youtube|video ad|contractor|facebook ad|physical therap|lawn|salon|med spa|solar|conversica|structurely|ylopo|follow up boss|kvcore|isa|lead response|speed to lead|appointment sett(?:er|ing)|answering service|receptionist|cold call|real estate agents?|home ?buyers?|homeowners?|listing agent|mortgage|zillow)\b/i;

export type StaleArticle = { path: string; lastUpdated: string };

/** Reads updated/date frontmatter for each institutional blog slug. */
export function readArticleDates(root: string, slugs: readonly string[]): StaleArticle[] {
  const out: StaleArticle[] = [];
  for (const slug of slugs) {
    const file = path.join(root, "content/blog", `${slug}.mdx`);
    if (!existsSync(file)) continue;
    const fm = /^---\n([\s\S]*?)\n---/.exec(readFileSync(file, "utf8"))?.[1] ?? "";
    const get = (k: string) =>
      new RegExp(`^${k}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, "m").exec(fm)?.[1];
    const d = get("updated") ?? get("date");
    if (d) out.push({ path: `/blog/${slug}`, lastUpdated: d });
  }
  return out;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export function buildOpportunities(input: {
  snapshot: PerformanceSnapshot;
  livePaths: ReadonlySet<string>;
  articles: StaleArticle[];
  now: Date;
}): Omit<Opportunity, "createdAt" | "status">[] {
  const { snapshot, livePaths, now } = input;
  const live = snapshot.pages.filter((p) => livePaths.has(p.path));
  const clicks = live.reduce((s, p) => s + p.gscClicks, 0);
  const rate =
    snapshot.totals.qualifiedDemos >= 3 && clicks > 0
      ? snapshot.totals.qualifiedDemos / clicks
      : PRIOR_QUALIFIED_PER_CLICK;
  const score = (incrementalClicks: number) =>
    round(Math.max(0, incrementalClicks) * rate * 1000, 3);
  const gscQueries = snapshot.queries.filter((q) => q.source === "gsc");
  const topQueries = (p: string) =>
    gscQueries
      .filter((q) => q.page === p)
      .sort((a, b) => b.impressions - a.impressions || a.query.localeCompare(b.query))
      .slice(0, 5)
      .map((q) => q.query);
  const out: Omit<Opportunity, "createdAt" | "status">[] = [];
  const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

  for (const p of live) {
    const pos = p.gscPosition ?? 0;
    const exp = expectedCtr(pos);
    if (p.gscImpressions >= 100 && pos > 0 && pos <= 20 && p.gscCtr < exp * 0.5) {
      out.push({
        id: `refresh-ctr:${p.path}`,
        kind: "refresh-ctr",
        path: p.path,
        queries: topQueries(p.path),
        evidence: `${p.gscImpressions} impressions, CTR ${pct(p.gscCtr)} vs ~${pct(exp)} expected at position ${pos.toFixed(1)} (28d)`,
        score: score(p.gscImpressions * (exp - p.gscCtr)),
      });
    }
    if (p.gscImpressions >= 50 && pos >= 5 && pos <= 20) {
      out.push({
        id: `refresh-position:${p.path}`,
        kind: "refresh-position",
        path: p.path,
        queries: topQueries(p.path),
        evidence: `avg position ${pos.toFixed(1)} on ${p.gscImpressions} impressions, ${p.gscClicks} clicks (28d)`,
        score: score(p.gscImpressions * (expectedCtr(3) - p.gscCtr) * 0.3),
      });
    }
  }

  const byPath = new Map(snapshot.pages.map((p) => [p.path, p]));
  for (const a of input.articles) {
    if (!livePaths.has(a.path)) continue;
    const age = Math.floor((now.getTime() - Date.parse(`${a.lastUpdated}T00:00:00Z`)) / 86_400_000);
    if (age <= STALE_DAYS) continue;
    const c = byPath.get(a.path)?.gscClicks ?? 0;
    out.push({
      id: `refresh-stale:${a.path}`,
      kind: "refresh-stale",
      path: a.path,
      queries: topQueries(a.path),
      evidence: `last updated ${a.lastUpdated} (${age} days ago); ${c} GSC clicks in 28d`,
      score: score(Math.max(c, 5) * 0.2),
    });
  }

  // new-topic: aggregate demand per query, then check whether a live page already ranks ≤ 10.
  const demand = new Map<
    string,
    { impressions: number; sources: Set<string>; bestLivePos: number | null }
  >();
  for (const q of snapshot.queries) {
    const key = q.query.trim().toLowerCase();
    if (!key || !ON_LANE.test(key) || OFF_LANE.test(key)) continue;
    const d = demand.get(key) ?? { impressions: 0, sources: new Set<string>(), bestLivePos: null };
    d.impressions += q.source === "bing-ai" ? q.impressions * 0.5 : q.impressions;
    d.sources.add(q.source);
    if (q.page && livePaths.has(q.page) && q.position > 0)
      d.bestLivePos = Math.min(d.bestLivePos ?? Infinity, q.position);
    demand.set(key, d);
  }
  for (const [query, d] of [...demand.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const aiOnly = d.sources.size === 1 && d.sources.has("bing-ai");
    if (d.impressions < (aiOnly ? 2.5 : 20)) continue;
    if (d.bestLivePos !== null && d.bestLivePos <= 10) continue;
    out.push({
      id: `new-topic:${slugify(query)}`,
      kind: "new-topic",
      path: null,
      queries: [query],
      evidence: `~${Math.round(d.impressions)} weighted impressions/citations (${[...d.sources].sort().join(", ")}); best live page position ${d.bestLivePos === null ? "none" : d.bestLivePos.toFixed(1)}`,
      score: score(d.impressions * expectedCtr(5) * 0.5),
    });
  }

  if (snapshot.sources.cal === "ok") {
    for (const p of live) {
      const ga = p.organicSessions !== null || p.aiReferralSessions !== null;
      const traffic = ga ? (p.organicSessions ?? 0) + (p.aiReferralSessions ?? 0) : p.gscClicks;
      if (traffic < 30 || p.demosBooked > 0 || p.path === "/book-demo") continue;
      out.push({
        id: `conversion:${p.path}`,
        kind: "conversion",
        path: p.path,
        queries: topQueries(p.path),
        evidence: `${traffic} ${ga ? "organic+AI sessions" : "GSC clicks"} and 0 demos booked (28d)`,
        score: score(traffic * 0.5),
      });
    }
  }
  return out.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

/** Preserves every existing item and its status; refreshes evidence/score only on open items. */
export function mergeOpportunities(
  existing: Opportunity[],
  fresh: Omit<Opportunity, "createdAt" | "status">[],
  now: Date,
): Opportunity[] {
  const byId = new Map(existing.map((o) => [o.id, o]));
  const result = existing.map((o) => o);
  for (const f of fresh) {
    const cur = byId.get(f.id);
    if (!cur) {
      result.push({ ...f, createdAt: now.toISOString(), status: "open" });
    } else if (cur.status === "open") {
      const i = result.indexOf(cur);
      result[i] = {
        ...cur,
        evidence: f.evidence,
        score: f.score,
        queries: f.queries.length ? f.queries : cur.queries,
      };
    }
  }
  return result;
}
