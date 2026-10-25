/** Google Search Console Search Analytics (read-only scope). */
import { z } from "zod";
import { getAccessToken, type ServiceAccount } from "./google-auth";
import { fetchJson, toPath } from "./util";

export const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
export const GSC_PROPERTIES = [
  "sc-domain:prestyj.com",
  "https://prestyj.com/",
  "https://www.prestyj.com/",
];
const ENDPOINT = "https://www.googleapis.com/webmasters/v3";
const ROW_LIMIT = 25_000;
const MAX_ROWS = 100_000;

const rowSchema = z.object({
  keys: z.array(z.string()),
  clicks: z.number().nonnegative(),
  impressions: z.number().nonnegative(),
  ctr: z.number().nonnegative(),
  position: z.number().nonnegative(),
});
export type GscRow = z.infer<typeof rowSchema>;

export type GscData = {
  property: string;
  pages: Array<{
    path: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }>;
  queries: Array<{
    query: string;
    path: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }>;
};

export async function fetchGsc(
  key: ServiceAccount,
  window: { start: string; end: string },
  now: Date,
): Promise<GscData> {
  const token = await getAccessToken(key, GSC_SCOPE, now);
  const headers = { authorization: `Bearer ${token}`, "content-type": "application/json" };
  const sites = z
    .object({ siteEntry: z.array(z.object({ siteUrl: z.string() })).optional() })
    .parse(await fetchJson(`${ENDPOINT}/sites`, { label: "GSC sites", headers }));
  const available = new Set((sites.siteEntry ?? []).map((s) => s.siteUrl));
  const property = GSC_PROPERTIES.find((p) => available.has(p));
  if (!property) throw new Error("Service account has no access to a Prestyj GSC property");

  async function query(dimensions: string[]): Promise<GscRow[]> {
    const rows: GscRow[] = [];
    for (let startRow = 0; startRow < MAX_ROWS; startRow += ROW_LIMIT) {
      const body = await fetchJson(
        `${ENDPOINT}/sites/${encodeURIComponent(property ?? "")}/searchAnalytics/query`,
        {
          label: "GSC searchAnalytics",
          method: "POST",
          headers,
          body: JSON.stringify({
            startDate: window.start,
            endDate: window.end,
            dimensions,
            type: "web",
            rowLimit: ROW_LIMIT,
            startRow,
          }),
        },
      );
      const batch = z.object({ rows: z.array(rowSchema).optional() }).parse(body).rows ?? [];
      rows.push(...batch);
      if (batch.length < ROW_LIMIT) break;
    }
    return rows;
  }

  const [pageRows, queryRows] = [await query(["page"]), await query(["query", "page"])];
  // Merge www/non-www/trailing-slash variants of the same path.
  const pageAgg = new Map<string, { clicks: number; impressions: number; posWeighted: number }>();
  for (const row of pageRows) {
    const p = toPath(row.keys[0] ?? "");
    if (!p) continue;
    const a = pageAgg.get(p) ?? { clicks: 0, impressions: 0, posWeighted: 0 };
    a.clicks += row.clicks;
    a.impressions += row.impressions;
    a.posWeighted += row.position * row.impressions;
    pageAgg.set(p, a);
  }
  const qAgg = new Map<
    string,
    { query: string; path: string; clicks: number; impressions: number; posWeighted: number }
  >();
  for (const row of queryRows) {
    const q = row.keys[0];
    const p = toPath(row.keys[1] ?? "");
    if (!q || !p) continue;
    const k = `${q}\u0000${p}`;
    const a = qAgg.get(k) ?? { query: q, path: p, clicks: 0, impressions: 0, posWeighted: 0 };
    a.clicks += row.clicks;
    a.impressions += row.impressions;
    a.posWeighted += row.position * row.impressions;
    qAgg.set(k, a);
  }
  const fin = (a: { clicks: number; impressions: number; posWeighted: number }) => ({
    clicks: a.clicks,
    impressions: a.impressions,
    ctr: a.impressions ? a.clicks / a.impressions : 0,
    position: a.impressions ? a.posWeighted / a.impressions : 0,
  });
  return {
    property,
    pages: [...pageAgg.entries()].map(([path, a]) => ({ path, ...fin(a) })),
    queries: [...qAgg.values()].map((a) => ({ query: a.query, path: a.path, ...fin(a) })),
  };
}
