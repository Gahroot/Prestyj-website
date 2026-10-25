/** Bing Webmaster Tools JSON API (read-only GET methods) + Bing AI Performance CSV imports. */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { BING_AI_IMPORT_DIR, fetchJson, toPath } from "./util";

const API = "https://ssl.bing.com/webmaster/api.svc/json";
export const BING_SITE = "https://prestyj.com/";
/** GetQueryPageStats is per-query; limit calls to the top queries. */
const QUERY_PAGE_LOOKUPS = 25;

const statSchema = z.object({
  Query: z.string(),
  Clicks: z.number(),
  Impressions: z.number(),
  AvgImpressionPosition: z.number().optional(),
  Date: z.string(),
});
type Stat = z.infer<typeof statSchema>;

export type BingData = {
  pages: Map<string, { clicks: number; impressions: number }>;
  queries: Array<{
    query: string;
    page: string | null;
    clicks: number;
    impressions: number;
    position: number;
  }>;
};

/** "/Date(1718000000000-0700)/" → epoch ms. */
export function parseBingDate(value: string): number | null {
  const m = /\/Date\((-?\d+)/.exec(value);
  return m?.[1] ? Number(m[1]) : null;
}

function inWindow(stat: Stat, window: { start: string; end: string }): boolean {
  const ms = parseBingDate(stat.Date);
  if (ms === null) return false;
  const day = new Date(ms).toISOString().slice(0, 10);
  return day >= window.start && day <= window.end;
}

function aggregate(stats: Stat[]) {
  const map = new Map<string, { clicks: number; impressions: number; posWeighted: number }>();
  for (const s of stats) {
    const a = map.get(s.Query) ?? { clicks: 0, impressions: 0, posWeighted: 0 };
    a.clicks += Math.max(0, s.Clicks);
    a.impressions += Math.max(0, s.Impressions);
    a.posWeighted += Math.max(0, s.AvgImpressionPosition ?? 0) * Math.max(0, s.Impressions);
    map.set(s.Query, a);
  }
  return map;
}

export async function fetchBing(
  apiKey: string,
  window: { start: string; end: string },
): Promise<BingData> {
  const call = async (method: string, extra: Record<string, string> = {}): Promise<Stat[]> => {
    const qs = new URLSearchParams({ siteUrl: BING_SITE, apikey: apiKey, ...extra });
    const body = await fetchJson(`${API}/${method}?${qs.toString()}`, { label: `Bing ${method}` });
    return (
      z
        .object({ d: z.array(statSchema).nullable() })
        .parse(body)
        .d?.filter((s) => inWindow(s, window)) ?? []
    );
  };
  const pageStats = aggregate(await call("GetPageStats"));
  const queryStats = aggregate(await call("GetQueryStats"));

  const pages = new Map<string, { clicks: number; impressions: number }>();
  for (const [url, a] of pageStats) {
    const p = toPath(url);
    if (!p) continue;
    const cur = pages.get(p) ?? { clicks: 0, impressions: 0 };
    pages.set(p, { clicks: cur.clicks + a.clicks, impressions: cur.impressions + a.impressions });
  }

  const queries: BingData["queries"] = [];
  const top = [...queryStats.entries()].sort(
    (x, y) => y[1].impressions - x[1].impressions || x[0].localeCompare(y[0]),
  );
  for (const [query, a] of top) {
    queries.push({
      query,
      page: null,
      clicks: a.clicks,
      impressions: a.impressions,
      position: a.impressions ? a.posWeighted / a.impressions : 0,
    });
  }
  for (const [query] of top.slice(0, QUERY_PAGE_LOOKUPS)) {
    for (const [url, a] of aggregate(await call("GetQueryPageStats", { query }))) {
      const p = toPath(url);
      if (!p) continue;
      queries.push({
        query,
        page: p,
        clicks: a.clicks,
        impressions: a.impressions,
        position: a.impressions ? a.posWeighted / a.impressions : 0,
      });
    }
  }
  return { pages, queries };
}

/** Minimal RFC4180 CSV parser (quoted fields, doubled quotes, BOM). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  const src = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"' && src[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && src[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.some((v) => v !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((v) => v !== "")) rows.push(row);
  return rows;
}

export type BingAiData = {
  files: string[];
  queries: Array<{ query: string; citations: number }>;
  pages: Array<{ path: string; citations: number }>;
};

/** Reads the newest AISearchQueriesReport / AIPageStatsReport CSV (by mtime-independent name sort). Null if none. */
export function readBingAiImports(root: string): BingAiData | null {
  const dir = path.join(root, BING_AI_IMPORT_DIR);
  if (!existsSync(dir)) return null;
  const csvs = readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".csv"))
    .sort();
  const pick = (needle: string) =>
    csvs
      .filter((f) => f.includes(needle))
      .sort(byReportDate)
      .at(-1);
  const qFile = pick("AISearchQueriesReport");
  const pFile = pick("AIPageStatsReport");
  if (!qFile && !pFile) return null;
  const load = (f: string | undefined) =>
    f ? parseCsv(readFileSync(path.join(dir, f), "utf8")).slice(1) : [];
  const queries = load(qFile).flatMap(([q, c]) =>
    q && Number(c) > 0 ? [{ query: q, citations: Number(c) }] : [],
  );
  const pageAgg = new Map<string, number>();
  for (const [url, c] of load(pFile)) {
    const p = url ? toPath(url) : null;
    if (p && Number(c) > 0) pageAgg.set(p, (pageAgg.get(p) ?? 0) + Number(c));
  }
  return {
    files: [qFile, pFile].filter((f): f is string => Boolean(f)),
    queries,
    pages: [...pageAgg.entries()].map(([p, citations]) => ({ path: p, citations })),
  };
}

/** Sort "…_M_D_YYYY.csv" names chronologically. */
function byReportDate(a: string, b: string): number {
  const key = (f: string) => {
    const m = /_(\d{1,2})_(\d{1,2})_(\d{4})\.csv$/i.exec(f);
    return m ? `${m[3]}-${m[1]?.padStart(2, "0")}-${m[2]?.padStart(2, "0")}` : f;
  };
  return key(a).localeCompare(key(b));
}
