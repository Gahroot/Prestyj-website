#!/usr/bin/env npx tsx
/**
 * Analyze weekly AI citation reports from Google Search Console.
 *
 * Reads dated snapshots from `data/ai-citations/<YYYY-MM-DD>/` (each containing
 * `queries.csv` and `pages.csv`) and emits a markdown summary at
 * `data/ai-citations/latest-analysis.md` covering:
 *   - Total citations + WoW delta
 *   - Top queries / pages
 *   - New / surging / decaying queries
 *   - Citations per offer category
 *   - Content recommendations
 *
 * Usage:
 *   npm run analyze:citations
 */

import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface QueryRow {
  query: string;
  citations: number;
}

interface PageRow {
  page: string;
  citations: number;
}

interface Snapshot {
  date: string; // YYYY-MM-DD (folder name)
  queries: QueryRow[];
  pages: PageRow[];
}

type OfferCategory =
  | "voice agent"
  | "lead response"
  | "receptionist"
  | "social"
  | "video ads"
  | "creative testing"
  | "custom agent"
  | "ai consulting"
  | "branded calling"
  | "lead reactivation"
  | "uncategorized";

type PriorityOffer =
  | "batch video ads"
  | "ai voice agents"
  | "ai content department"
  | "lead reactivation"
  | "ai lead response"
  | "custom ai agents"
  | "ai consulting"
  | "branded calling";

interface CategoryStats {
  category: OfferCategory;
  queryCitations: number;
  pageCitations: number;
  total: number;
}

interface PriorityOfferStats {
  offer: PriorityOffer;
  queryCitations: number;
  pageCitations: number;
  total: number;
  topQueries: QueryRow[];
  topPages: PageRow[];
}

// ---------------------------------------------------------------------------
// CSV parser (handles BOM + quoted fields; sufficient for Search Console exports)
// ---------------------------------------------------------------------------

function parseCsv(raw: string): string[][] {
  const text = raw.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim().length > 0));
}

function parseQueryCsv(path: string): QueryRow[] {
  const rows = parseCsv(readFileSync(path, "utf8"));
  return rows
    .slice(1)
    .map((r): QueryRow | null => {
      const query = (r[0] ?? "").trim();
      const citations = Number((r[1] ?? "0").trim());
      if (!query || !Number.isFinite(citations)) return null;
      return { query, citations };
    })
    .filter((r): r is QueryRow => r !== null);
}

function parsePageCsv(path: string): PageRow[] {
  const rows = parseCsv(readFileSync(path, "utf8"));
  return rows
    .slice(1)
    .map((r): PageRow | null => {
      const page = (r[0] ?? "").trim();
      const citations = Number((r[1] ?? "0").trim());
      if (!page || !Number.isFinite(citations)) return null;
      return { page, citations };
    })
    .filter((r): r is PageRow => r !== null);
}

// ---------------------------------------------------------------------------
// Snapshot discovery
// ---------------------------------------------------------------------------

const SNAPSHOT_DIR_RE = /^\d{4}-\d{2}-\d{2}$/;

function loadSnapshots(root: string): Snapshot[] {
  if (!existsSync(root)) return [];
  const dirs = readdirSync(root)
    .filter((name) => SNAPSHOT_DIR_RE.test(name))
    .filter((name) => statSync(join(root, name)).isDirectory())
    .sort();

  const snapshots: Snapshot[] = [];
  for (const date of dirs) {
    const dir = join(root, date);
    const queriesPath = findCsv(dir, ["queries.csv", "AISearchQueriesReport"]);
    const pagesPath = findCsv(dir, ["pages.csv", "AIPageStatsReport"]);
    if (!queriesPath || !pagesPath) {
      console.warn(`⚠ Skipping ${date}: missing queries or pages CSV`);
      continue;
    }
    snapshots.push({
      date,
      queries: parseQueryCsv(queriesPath),
      pages: parsePageCsv(pagesPath),
    });
  }
  return snapshots;
}

function findCsv(dir: string, candidates: string[]): string | null {
  const files = readdirSync(dir);
  for (const candidate of candidates) {
    const exact = files.find((f) => f === candidate);
    if (exact) return join(dir, exact);
    const fuzzy = files.find(
      (f) => f.toLowerCase().includes(candidate.toLowerCase()) && f.endsWith(".csv"),
    );
    if (fuzzy) return join(dir, fuzzy);
  }
  return null;
}

// ---------------------------------------------------------------------------
// Offer category mapping
// ---------------------------------------------------------------------------

// Order matters: first matching rule wins. Put more specific categories first.
const CATEGORY_RULES: { category: OfferCategory; patterns: RegExp[] }[] = [
  {
    category: "branded calling",
    patterns: [
      /branded calling/i,
      /branded-calling/i,
      /branded caller/i,
      /branded-caller/i,
      /caller id reputation/i,
      /verified caller id/i,
      /first orion/i,
      /hiya/i,
      /netnumber/i,
      /stir.?shaken/i,
    ],
  },
  {
    category: "ai consulting",
    patterns: [
      /ai consultant/i,
      /ai-consultant/i,
      /ai consulting/i,
      /ai-consulting/i,
      /consultant pay/i,
      /project based ai/i,
      /project-based ai/i,
      /ai pilot program/i,
      /ai rollout/i,
      /ai-rollout/i,
      /ai adoption/i,
      /ai implementation/i,
      /done-for-you ai customer support/i,
      /done for you ai customer support/i,
    ],
  },
  {
    category: "lead reactivation",
    patterns: [
      /reactivat/i,
      /dormant lead/i,
      /database reactivation/i,
      /off-season revenue/i,
      /customer database/i,
    ],
  },
  {
    category: "creative testing",
    patterns: [
      /ad fatigue/i,
      /ad creative/i,
      /ad creative testing/i,
      /creative testing/i,
      /creative-testing/i,
      /media testing/i,
      /media-testing/i,
      /youtube media testing/i,
      /youtube-media-testing/i,
      /video ad testing/i,
      /video-ad-testing/i,
      /tested ad angle/i,
      /tested-ad-angle/i,
      /refresh.*creative/i,
      /how many.*creative/i,
      /how often.*creative/i,
      /why.*facebook ads.*stop/i,
    ],
  },
  {
    category: "video ads",
    patterns: [
      /video ad/i,
      /youtube ad/i,
      /youtube creative/i,
      /ugc/i,
      /avatar ad/i,
      /heygen/i,
      /arcads/i,
      /creatify/i,
      /synthesia/i,
      /batch video/i,
      /bulk video/i,
      /\/samples/i,
      /\/get-ads/i,
      /\/free-ads/i,
    ],
  },
  {
    category: "social",
    patterns: [
      /social media/i,
      /content engine/i,
      /content department/i,
      /1000 posts/i,
      /posts per month/i,
      /buffer/i,
      /hootsuite/i,
      /sprout social/i,
      /later\b/i,
      /opus clip/i,
      /capcut/i,
      /canva/i,
    ],
  },
  {
    category: "voice agent",
    patterns: [
      /voice agent/i,
      /voice-agent/i,
      /ai voice/i,
      /ai-voice/i,
      /voice ai/i,
      /voice-ai/i,
      /call automation/i,
      /call-automation/i,
      /cost per minute/i,
      /per minute rate/i,
      /multilingual.*voice/i,
      /voice scripts/i,
      /vapi/i,
      /retell/i,
      /bland/i,
      /synthflow/i,
      /air\.ai/i,
      /superdial/i,
      /payer calls/i,
      /\/ai-voice/i,
    ],
  },
  {
    category: "receptionist",
    patterns: [
      /receptionist/i,
      /answering service/i,
      /answering-service/i,
      /answering services/i,
      /answering-services/i,
      /call handling/i,
      /call-handling/i,
      /call center/i,
      /call-center/i,
    ],
  },
  {
    category: "lead response",
    patterns: [
      /lead response/i,
      /lead-response/i,
      /instant.*lead/i,
      /respond.*lead/i,
      /roofing lead/i,
      /borrower communication/i,
      /customer response/i,
      /response time/i,
      /customer communication/i,
      /speed to lead/i,
      /appointment scheduling/i,
      /follow.?up/i,
      /cold outreach/i,
      /cold-outreach/i,
      /sdr/i,
      /inside sales rep/i,
      /sales rep/i,
      /sales agent/i,
      /sales-agent/i,
      /sales ai agent/i,
      /sales-ai-agent/i,
      /sales automation/i,
      /sales-automation/i,
      /objection handling/i,
      /isa\b/i,
      /conversica/i,
      /structurely/i,
      /drift/i,
      /ylopo/i,
      /follow.?up.?boss/i,
    ],
  },
  {
    category: "custom agent",
    patterns: [
      /ai agency/i,
      /custom agent/i,
      /custom-agent/i,
      /custom ai agent/i,
      /custom-ai-agent/i,
      /total cost of ownership/i,
      /\btco\b/i,
      /in-house vs platform/i,
      /in-house-vs-platform/i,
      /builder platforms/i,
      /builder-platforms/i,
      /hiring developers/i,
      /fractional ai/i,
      /big4/i,
      /freelancer/i,
    ],
  },
];

function categorize(text: string): OfferCategory {
  for (const rule of CATEGORY_RULES) {
    if (rule.patterns.some((p) => p.test(text))) return rule.category;
  }
  return "uncategorized";
}

const PRIORITY_OFFER_RULES: { offer: PriorityOffer; patterns: RegExp[] }[] = [
  {
    offer: "branded calling",
    patterns: [
      /branded calling/i,
      /branded-calling/i,
      /branded caller/i,
      /branded-caller/i,
      /caller id reputation/i,
      /verified caller id/i,
      /first orion/i,
      /hiya/i,
      /netnumber/i,
      /stir.?shaken/i,
      /\/branded-calling/i,
    ],
  },
  {
    offer: "ai consulting",
    patterns: [
      /ai consultant/i,
      /ai-consultant/i,
      /ai consulting/i,
      /ai-consulting/i,
      /consultant pay/i,
      /project based ai/i,
      /project-based ai/i,
      /ai pilot program/i,
      /ai rollout/i,
      /ai-rollout/i,
      /ai adoption/i,
      /ai-adoption/i,
      /done-for-you ai customer support/i,
      /done for you ai customer support/i,
      /\/ai-consultant/i,
      /\/ai-consulting/i,
    ],
  },
  {
    offer: "batch video ads",
    patterns: [
      /batch video/i,
      /bulk video/i,
      /100 video ads/i,
      /500 video ads/i,
      /1000 video ads/i,
      /creative fatigue/i,
      /creative volume/i,
      /media testing/i,
      /media-testing/i,
      /youtube media testing/i,
      /youtube-media-testing/i,
      /youtube-media-testing-services/i,
      /video ad testing/i,
      /video-ad-testing/i,
      /video-ad-testing-pricing/i,
      /cost per tested/i,
      /cost-per-tested/i,
      /tested ad angle/i,
      /tested-ad-angle/i,
      /winning ad rate/i,
      /ad creative testing/i,
      /ad-creative-testing/i,
      /\/batch-video-ads/i,
      /\/batch-video-ad/i,
      /\/cost-per-tested-ad-angle/i,
    ],
  },
  {
    offer: "ai voice agents",
    patterns: [
      /voice agent/i,
      /voice-agent/i,
      /ai voice/i,
      /ai-voice/i,
      /voice ai/i,
      /voice-ai/i,
      /call automation/i,
      /call-automation/i,
      /cost per minute/i,
      /per minute rate/i,
      /multilingual.*voice/i,
      /voice scripts/i,
      /vapi/i,
      /retell/i,
      /bland/i,
      /synthflow/i,
      /air\.ai/i,
      /superdial/i,
      /payer calls/i,
      /\/solutions\/ai-voice-agent/i,
      /\/ai-voice/i,
    ],
  },
  {
    offer: "ai content department",
    patterns: [
      /ai content department/i,
      /done-for-you social/i,
      /done for you social/i,
      /managed social media/i,
      /social media on autopilot/i,
      /posts per month/i,
      /posting frequency/i,
      /\/ai-content-department/i,
      /\/done-for-you-social-media/i,
    ],
  },
  {
    offer: "lead reactivation",
    patterns: [
      /lead reactivation/i,
      /lead-reactivation/i,
      /reactivat/i,
      /dormant lead/i,
      /dormant-lead/i,
      /dead lead/i,
      /database reactivation/i,
      /database-reactivation/i,
      /old quote/i,
      /old-quote/i,
      /off-season revenue/i,
      /customer database/i,
      /\/solutions\/lead-reactivation/i,
      /\/lead-reactivation/i,
    ],
  },
  {
    offer: "ai lead response",
    patterns: [
      /ai lead response/i,
      /instant.*lead/i,
      /speed to lead/i,
      /lead response system/i,
      /missed call text/i,
      /response time/i,
      /respond.*lead/i,
      /roofing lead/i,
      /borrower communication/i,
      /customer response/i,
      /customer communication/i,
      /qualified lead/i,
      /inside sales rep/i,
      /sales rep/i,
      /sales ai agent/i,
      /sales-ai-agent/i,
      /ai-sales-agents/i,
      /sdr/i,
      /objection handling/i,
      /go-to-market agents/i,
      /contact rate/i,
      /follow.?up/i,
      /\/solutions\/ai-lead-response/i,
      /\/ai-lead-response/i,
    ],
  },
  {
    offer: "custom ai agents",
    patterns: [
      /custom agent/i,
      /custom-agent/i,
      /custom ai agent/i,
      /custom-ai-agent/i,
      /total cost of ownership/i,
      /\btco\b/i,
      /in-house vs platform/i,
      /in-house-vs-platform/i,
      /builder platforms/i,
      /builder-platforms/i,
      /hiring developers/i,
      /ai implementation/i,
      /done-for-you-ai-agents/i,
      /done for you ai/i,
      /done-for-you ai/i,
      /turnkey ai/i,
      /managed ai agent/i,
      /ai agent builder/i,
      /ai-agent-builder/i,
    ],
  },
];

function priorityOfferFor(text: string): PriorityOffer | null {
  for (const rule of PRIORITY_OFFER_RULES) {
    if (rule.patterns.some((p) => p.test(text))) return rule.offer;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Analysis
// ---------------------------------------------------------------------------

interface QueryDelta {
  query: string;
  current: number;
  previous: number;
  delta: number;
  pctChange: number; // 0..Infinity ; Infinity for new
}

function buildQueryDeltas(current: QueryRow[], previous: QueryRow[] | null): QueryDelta[] {
  const prevMap = new Map<string, number>();
  if (previous) for (const q of previous) prevMap.set(q.query.toLowerCase(), q.citations);

  return current.map((q) => {
    const prev = prevMap.get(q.query.toLowerCase()) ?? 0;
    const delta = q.citations - prev;
    const pctChange = prev === 0 ? (q.citations > 0 ? Infinity : 0) : delta / prev;
    return { query: q.query, current: q.citations, previous: prev, delta, pctChange };
  });
}

function sum(arr: { citations: number }[]): number {
  return arr.reduce((s, r) => s + r.citations, 0);
}

function categoryStats(snapshot: Snapshot): CategoryStats[] {
  const map = new Map<OfferCategory, CategoryStats>();
  const ensure = (cat: OfferCategory): CategoryStats => {
    const existing = map.get(cat);
    if (existing) return existing;
    const fresh: CategoryStats = { category: cat, queryCitations: 0, pageCitations: 0, total: 0 };
    map.set(cat, fresh);
    return fresh;
  };

  for (const q of snapshot.queries) {
    const stats = ensure(categorize(q.query));
    stats.queryCitations += q.citations;
    stats.total += q.citations;
  }
  for (const p of snapshot.pages) {
    const stats = ensure(categorize(p.page));
    stats.pageCitations += p.citations;
    stats.total += p.citations;
  }
  return [...map.values()].sort((a, b) => b.total - a.total);
}

function priorityOfferStats(snapshot: Snapshot): PriorityOfferStats[] {
  const map = new Map<PriorityOffer, PriorityOfferStats>();
  const ensure = (offer: PriorityOffer): PriorityOfferStats => {
    const existing = map.get(offer);
    if (existing) return existing;
    const fresh: PriorityOfferStats = {
      offer,
      queryCitations: 0,
      pageCitations: 0,
      total: 0,
      topQueries: [],
      topPages: [],
    };
    map.set(offer, fresh);
    return fresh;
  };

  for (const q of snapshot.queries) {
    const offer = priorityOfferFor(q.query);
    if (!offer) continue;
    const stats = ensure(offer);
    stats.queryCitations += q.citations;
    stats.total += q.citations;
    stats.topQueries.push(q);
  }

  for (const p of snapshot.pages) {
    const offer = priorityOfferFor(p.page);
    if (!offer) continue;
    const stats = ensure(offer);
    stats.pageCitations += p.citations;
    stats.total += p.citations;
    stats.topPages.push(p);
  }

  return [...map.values()]
    .map((stats) => ({
      ...stats,
      topQueries: [...stats.topQueries].sort((a, b) => b.citations - a.citations).slice(0, 5),
      topPages: [...stats.topPages].sort((a, b) => b.citations - a.citations).slice(0, 5),
    }))
    .sort((a, b) => b.total - a.total);
}

// ---------------------------------------------------------------------------
// Markdown rendering
// ---------------------------------------------------------------------------

function fmtPct(pct: number): string {
  if (!Number.isFinite(pct)) return "NEW";
  return `${pct >= 0 ? "+" : ""}${(pct * 100).toFixed(0)}%`;
}

function fmtDelta(delta: number): string {
  if (delta === 0) return "±0";
  return `${delta > 0 ? "+" : ""}${delta}`;
}

function shortPath(url: string): string {
  return url.replace(/^https?:\/\/[^/]+/, "") || url;
}

function renderReport(snapshots: Snapshot[]): string {
  const current = snapshots[snapshots.length - 1];
  const previous = snapshots.length >= 2 ? (snapshots[snapshots.length - 2] ?? null) : null;
  if (!current) {
    return `# AI Citation Analysis\n\n_No snapshots found in \`data/ai-citations/\`._\n`;
  }

  const totalQueryCitations = sum(current.queries);
  const totalPageCitations = sum(current.pages);
  const prevQueryCitations = previous ? sum(previous.queries) : 0;
  const prevPageCitations = previous ? sum(previous.pages) : 0;

  const queryWoW = previous ? totalQueryCitations - prevQueryCitations : 0;
  const pageWoW = previous ? totalPageCitations - prevPageCitations : 0;
  const queryWoWPct = previous && prevQueryCitations > 0 ? queryWoW / prevQueryCitations : null;
  const pageWoWPct = previous && prevPageCitations > 0 ? pageWoW / prevPageCitations : null;

  const deltas = buildQueryDeltas(current.queries, previous?.queries ?? null);

  const newQueries = deltas
    .filter((d) => d.previous === 0 && d.current > 0)
    .sort((a, b) => b.current - a.current);

  const surging = deltas
    .filter((d) => d.previous > 0 && d.pctChange > 0.5)
    .sort((a, b) => b.pctChange - a.pctChange);

  const decaying = deltas
    .filter((d) => d.previous > 0 && d.pctChange < -0.5)
    .sort((a, b) => a.pctChange - b.pctChange);

  const topQueries = [...current.queries].sort((a, b) => b.citations - a.citations).slice(0, 10);
  const topPages = [...current.pages].sort((a, b) => b.citations - a.citations).slice(0, 10);
  const categories = categoryStats(current);
  const priorityOffers = priorityOfferStats(current);
  const totalCitations = totalQueryCitations + totalPageCitations;
  const gapToThousand = Math.max(0, 1000 - totalCitations);

  const recommendations = buildRecommendations(current, deltas, previous);

  const lines: string[] = [];
  lines.push("# AI Citation Analysis");
  lines.push("");
  lines.push(`_Generated: ${new Date().toISOString()}_`);
  lines.push(`_Snapshot: **${current.date}**${previous ? ` (vs ${previous.date})` : ""}_`);
  lines.push("");
  lines.push("## Headline numbers");
  lines.push("");
  lines.push("| Metric | This snapshot | Previous | WoW Δ | WoW % |");
  lines.push("| --- | ---: | ---: | ---: | ---: |");
  lines.push(
    `| Query citations | ${totalQueryCitations} | ${previous ? prevQueryCitations : "—"} | ${
      previous ? fmtDelta(queryWoW) : "—"
    } | ${queryWoWPct === null ? "—" : fmtPct(queryWoWPct)} |`,
  );
  lines.push(
    `| Page citations | ${totalPageCitations} | ${previous ? prevPageCitations : "—"} | ${
      previous ? fmtDelta(pageWoW) : "—"
    } | ${pageWoWPct === null ? "—" : fmtPct(pageWoWPct)} |`,
  );
  lines.push(
    `| Distinct queries | ${current.queries.length} | ${previous ? previous.queries.length : "—"} | — | — |`,
  );
  lines.push(
    `| Distinct pages | ${current.pages.length} | ${previous ? previous.pages.length : "—"} | — | — |`,
  );
  lines.push("");

  lines.push("## Top 10 queries by citations");
  lines.push("");
  lines.push("| # | Query | Citations | Prev | Δ | Category |");
  lines.push("| ---: | --- | ---: | ---: | ---: | --- |");
  topQueries.forEach((q, i) => {
    const d = deltas.find((x) => x.query === q.query);
    const prev = d ? d.previous : 0;
    const delta = d ? d.delta : 0;
    lines.push(
      `| ${i + 1} | ${q.query} | ${q.citations} | ${previous ? prev : "—"} | ${
        previous ? fmtDelta(delta) : "—"
      } | ${categorize(q.query)} |`,
    );
  });
  lines.push("");

  lines.push("## Top 10 pages by citations");
  lines.push("");
  lines.push("| # | Page | Citations | Category |");
  lines.push("| ---: | --- | ---: | --- |");
  topPages.forEach((p, i) => {
    lines.push(`| ${i + 1} | \`${shortPath(p.page)}\` | ${p.citations} | ${categorize(p.page)} |`);
  });
  lines.push("");

  lines.push("## New queries this period");
  lines.push("");
  if (!previous) {
    lines.push("_No prior snapshot — every query is technically new._");
  } else if (newQueries.length === 0) {
    lines.push("_None._");
  } else {
    lines.push("| Query | Citations | Category |");
    lines.push("| --- | ---: | --- |");
    for (const q of newQueries.slice(0, 25)) {
      lines.push(`| ${q.query} | ${q.current} | ${categorize(q.query)} |`);
    }
  }
  lines.push("");

  lines.push("## Surging queries (>50% WoW growth)");
  lines.push("");
  if (!previous) {
    lines.push("_Need a prior snapshot to compute WoW growth._");
  } else if (surging.length === 0) {
    lines.push("_None._");
  } else {
    lines.push("| Query | Prev | Now | Δ | % | Category |");
    lines.push("| --- | ---: | ---: | ---: | ---: | --- |");
    for (const q of surging.slice(0, 25)) {
      lines.push(
        `| ${q.query} | ${q.previous} | ${q.current} | ${fmtDelta(q.delta)} | ${fmtPct(q.pctChange)} | ${categorize(q.query)} |`,
      );
    }
  }
  lines.push("");

  lines.push("## Decaying queries (>50% WoW drop)");
  lines.push("");
  if (!previous) {
    lines.push("_Need a prior snapshot to compute WoW decay._");
  } else if (decaying.length === 0) {
    lines.push("_None._");
  } else {
    lines.push("| Query | Prev | Now | Δ | % | Category |");
    lines.push("| --- | ---: | ---: | ---: | ---: | --- |");
    for (const q of decaying.slice(0, 25)) {
      lines.push(
        `| ${q.query} | ${q.previous} | ${q.current} | ${fmtDelta(q.delta)} | ${fmtPct(q.pctChange)} | ${categorize(q.query)} |`,
      );
    }
  }
  lines.push("");

  lines.push("## Citations per offer category");
  lines.push("");
  lines.push("| Category | Query citations | Page citations | Total |");
  lines.push("| --- | ---: | ---: | ---: |");
  for (const c of categories) {
    lines.push(`| ${c.category} | ${c.queryCitations} | ${c.pageCitations} | ${c.total} |`);
  }
  lines.push("");

  lines.push("## Priority offer citation totals");
  lines.push("");
  lines.push(
    `Current combined query + page citations: **${totalCitations}**. Gap to 1,000/day target: **${gapToThousand}**.`,
  );
  lines.push("");
  if (priorityOffers.length === 0) {
    lines.push("_No priority offer citations matched this snapshot._");
  } else {
    lines.push(
      "| Priority offer | Query citations | Page citations | Total | Share of all citations | Top matched query | Top matched page |",
    );
    lines.push("| --- | ---: | ---: | ---: | ---: | --- | --- |");
    for (const offer of priorityOffers) {
      const share =
        totalCitations > 0 ? `${((offer.total / totalCitations) * 100).toFixed(1)}%` : "0.0%";
      const topQuery = offer.topQueries[0]?.query ?? "—";
      const topPage = offer.topPages[0] ? shortPath(offer.topPages[0].page) : "—";
      lines.push(
        `| ${offer.offer} | ${offer.queryCitations} | ${offer.pageCitations} | ${offer.total} | ${share} | ${topQuery} | \`${topPage}\` |`,
      );
    }
  }
  lines.push("");

  lines.push("## Surging queries by priority offer");
  lines.push("");
  if (!previous) {
    lines.push("_Need a prior snapshot to compute priority-offer surges._");
  } else {
    const prioritySurges = deltas
      .map((d) => ({ ...d, offer: priorityOfferFor(d.query) }))
      .filter((d): d is QueryDelta & { offer: PriorityOffer } => d.offer !== null)
      .filter((d) => d.delta > 0 || d.previous === 0)
      .sort((a, b) => b.delta - a.delta || b.current - a.current);

    if (prioritySurges.length === 0) {
      lines.push("_No priority-offer surges found._");
    } else {
      lines.push("| Offer | Query | Prev | Now | Δ | % |");
      lines.push("| --- | --- | ---: | ---: | ---: | ---: |");
      for (const surge of prioritySurges.slice(0, 20)) {
        lines.push(
          `| ${surge.offer} | ${surge.query} | ${surge.previous} | ${surge.current} | ${fmtDelta(surge.delta)} | ${fmtPct(surge.pctChange)} |`,
        );
      }
    }
  }
  lines.push("");

  lines.push("## Priority content gaps");
  lines.push("");
  const missingPriorityOffers = PRIORITY_OFFER_RULES.map((rule) => rule.offer).filter(
    (offer) => !priorityOffers.some((stats) => stats.offer === offer),
  );
  if (missingPriorityOffers.length === 0) {
    lines.push("_All priority offers have at least one matched citation signal in this snapshot._");
  } else {
    for (const offer of missingPriorityOffers) {
      lines.push(
        `- **${offer}:** No matched citation signal. Add or refresh direct-answer assets with pricing, ROI, hidden-cost, benchmark, and statistics framing.`,
      );
    }
  }
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  if (recommendations.length === 0) {
    lines.push("_No automated recommendations triggered this period._");
  } else {
    for (const r of recommendations) lines.push(`- ${r}`);
  }
  lines.push("");

  lines.push("## Snapshots on file");
  lines.push("");
  for (const s of snapshots) {
    lines.push(
      `- \`${s.date}\` — ${sum(s.queries)} query citations, ${sum(s.pages)} page citations`,
    );
  }
  lines.push("");

  return lines.join("\n");
}

function buildRecommendations(
  current: Snapshot,
  deltas: QueryDelta[],
  previous: Snapshot | null,
): string[] {
  const recs: string[] = [];

  // Rule 1: any query at 30+ citations → satellite content
  const breakouts = current.queries.filter((q) => q.citations >= 30);
  for (const q of breakouts) {
    recs.push(
      `**Satellite cluster:** \`"${q.query}"\` crossed **${q.citations} citations** — write 3–4 satellite posts targeting long-tail variants (e.g., per-vertical, per-price-tier, "hidden costs of…" angle).`,
    );
  }

  // Rule 2: surging queries with no obvious matching page → new post
  if (previous) {
    const surging = deltas
      .filter((d) => d.previous > 0 && d.pctChange > 0.5 && d.current >= 5)
      .sort((a, b) => b.pctChange - a.pctChange);
    for (const s of surging.slice(0, 5)) {
      recs.push(
        `**Surging (${fmtPct(s.pctChange)}):** \`"${s.query}"\` jumped ${s.previous} → ${s.current}. Ship a dedicated post or expand the closest existing one (category: ${categorize(s.query)}).`,
      );
    }
  }

  // Rule 3: net-new queries with non-trivial volume
  if (previous) {
    const newQueries = deltas
      .filter((d) => d.previous === 0 && d.current >= 3)
      .sort((a, b) => b.current - a.current);
    for (const n of newQueries.slice(0, 5)) {
      recs.push(
        `**Net-new query:** \`"${n.query}"\` (${n.current} citations) — claim before competitors do. Category: ${categorize(n.query)}.`,
      );
    }
  }

  // Rule 4: decaying high-volume queries → refresh
  if (previous) {
    const decaying = deltas
      .filter((d) => d.previous >= 10 && d.pctChange < -0.5)
      .sort((a, b) => a.pctChange - b.pctChange);
    for (const d of decaying.slice(0, 5)) {
      recs.push(
        `**Decay alert:** \`"${d.query}"\` dropped ${d.previous} → ${d.current} (${fmtPct(d.pctChange)}). Refresh the supporting post — update year, prices, comparison tables.`,
      );
    }
  }

  // Rule 5: under-represented offer categories
  const stats = categoryStats(current);
  const total = stats.reduce((s, c) => s + c.total, 0) || 1;
  const tracked = stats.filter((s) => s.category !== "uncategorized");
  const weak = tracked.filter((s) => s.total / total < 0.05);
  for (const w of weak) {
    recs.push(
      `**Coverage gap:** \`${w.category}\` is under 5% of total citations (${w.total}/${total}). Audit landing pages and blog posts in this category — add comparison tables, real numbers, and "hidden cost" framing.`,
    );
  }

  // Rule 6: priority offers with no matched citations
  const priorityStats = priorityOfferStats(current);
  const missingPriorityOffers = PRIORITY_OFFER_RULES.map((rule) => rule.offer).filter(
    (offer) => !priorityStats.some((stats) => stats.offer === offer),
  );
  for (const offer of missingPriorityOffers) {
    recs.push(
      `**Priority offer gap:** \`${offer}\` has no matched citation signal. Add direct-answer statistics, pricing, ROI, and hidden-cost blocks that link to the canonical offer page and /stat permalinks.`,
    );
  }

  return recs;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  const root = join(process.cwd(), "data", "ai-citations");
  const snapshots = loadSnapshots(root);

  if (snapshots.length === 0) {
    console.error(`No snapshots found in ${root}.`);
    console.error("Drop weekly exports into data/ai-citations/YYYY-MM-DD/{queries,pages}.csv");
    process.exit(1);
  }

  const md = renderReport(snapshots);
  const outPath = join(root, "latest-analysis.md");
  writeFileSync(outPath, md, "utf8");

  const current = snapshots[snapshots.length - 1]!;
  console.log(`AI Citation Analysis`);
  console.log(`====================`);
  console.log(`Snapshots:        ${snapshots.length} (${snapshots.map((s) => s.date).join(", ")})`);
  console.log(`Current snapshot: ${current.date}`);
  console.log(`Query citations:  ${sum(current.queries)}`);
  console.log(`Page citations:   ${sum(current.pages)}`);
  console.log(`\n✓ Report written to ${outPath}`);
}

main();
