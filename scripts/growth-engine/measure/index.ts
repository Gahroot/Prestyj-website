/**
 * Daily measurement: trailing 28-day window ending yesterday (UTC).
 * Writes data/growth/performance.json, data/growth/history/YYYY-MM-DD.json,
 * data/growth/cta-stats.json, and merges data/growth/opportunities.json.
 * Each source is independent; failures mark `sources[x]` and raise a warning, never zero data.
 */
import path from "node:path";
import {
  institutionalBlogSlugs,
  institutionalPublicPaths,
} from "../../../src/lib/institutional/site-map";
import {
  OPPORTUNITIES_FILE,
  PERFORMANCE_FILE,
  opportunitySchema,
  performanceSnapshotSchema,
  type PagePerformance,
  type PerformanceSnapshot,
  type QueryPerformance,
} from "../shared/contracts";
import { fetchBing, readBingAiImports, type BingAiData, type BingData } from "./bing";
import { fetchCal, type CalData } from "./cal";
import { fetchGa4, type Ga4Data } from "./ga4";
import { loadServiceAccount, type ServiceAccount } from "./google-auth";
import { fetchGsc, type GscData } from "./gsc";
import { buildOpportunities, mergeOpportunities, readArticleDates } from "./opportunities";
import {
  CTA_STATS_FILE,
  HISTORY_DIR,
  isoDate,
  loadEnv,
  readJson,
  round,
  trailingWindow,
  warn,
  writeJson,
  type SourceStatus,
} from "./util";

export type { PerformanceSnapshot };
export const WINDOW_DAYS = 28;
const MAX_QUERIES = 1500;

export type CtaStats = {
  generatedAt: string;
  window: { start: string; end: string };
  ga4: Ga4Data["ctaEvents"] | null;
  cal: CalData["byCta"] | null;
};

type Outcome<T> = { status: SourceStatus; data: T | null };

async function runSource<T>(
  name: string,
  ctx: { root: string; dryRun: boolean },
  missing: string | null,
  fn: () => Promise<T>,
): Promise<Outcome<T>> {
  if (missing) {
    await warn(
      ctx.root,
      ctx.dryRun,
      `measure.${name}`,
      `Missing credentials (${missing}); ${name} shown as not connected.`,
    );
    return { status: "missing-credentials", data: null };
  }
  try {
    return { status: "ok", data: await fn() };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown error";
    await warn(ctx.root, ctx.dryRun, `measure.${name}`, `${name} read failed: ${msg}`);
    return { status: "error", data: null };
  }
}

export async function collectPerformance(opts: {
  root: string;
  dryRun: boolean;
  now?: Date;
}): Promise<PerformanceSnapshot> {
  const { root, dryRun } = opts;
  const now = opts.now ?? new Date();
  loadEnv(root);
  const window = trailingWindow(now, WINDOW_DAYS);
  const ctx = { root, dryRun };

  let key: ServiceAccount | null = null;
  let keyError: string | null = null;
  try {
    key = loadServiceAccount(root);
  } catch (e) {
    keyError = e instanceof Error ? e.message : "invalid key";
  }
  const keyMissing = key
    ? null
    : (keyError ?? "GSC_SERVICE_ACCOUNT_JSON or .secrets/gsc-service-account.json");
  const ga4Id = process.env.GA4_PROPERTY_ID?.trim();
  const bingKey = process.env.BING_WEBMASTER_API_KEY?.trim();
  const calKey = process.env.CAL_API_KEY?.trim();

  const gsc = await runSource<GscData>("gsc", ctx, keyMissing, () =>
    fetchGsc(key as ServiceAccount, window, now),
  );
  const ga4 = await runSource<Ga4Data>(
    "ga4",
    ctx,
    keyMissing ?? (ga4Id ? null : "GA4_PROPERTY_ID"),
    () => fetchGa4(key as ServiceAccount, ga4Id ?? "", window, now),
  );
  const bing = await runSource<BingData>(
    "bing",
    ctx,
    bingKey ? null : "BING_WEBMASTER_API_KEY",
    () => fetchBing(bingKey ?? "", window),
  );
  const cal = await runSource<CalData>("cal", ctx, calKey ? null : "CAL_API_KEY", () =>
    fetchCal(calKey ?? "", window),
  );
  let bingAi: Outcome<BingAiData>;
  try {
    const data = readBingAiImports(root);
    bingAi = { status: data ? "ok" : "missing-credentials", data };
    if (!data)
      await warn(
        root,
        dryRun,
        "measure.bing-ai",
        "No Bing AI Performance CSV in data/growth/imports/bing-ai/; AI citations not connected.",
      );
  } catch (e) {
    await warn(
      root,
      dryRun,
      "measure.bing-ai",
      `Bing AI CSV import failed: ${e instanceof Error ? e.message : "unknown"}`,
    );
    bingAi = { status: "error", data: null };
  }

  const snapshot = buildSnapshot({ now, window, gsc, ga4, bing, bingAi, cal });
  performanceSnapshotSchema.parse(snapshot);

  if (!dryRun) {
    writeJson(path.join(root, PERFORMANCE_FILE), snapshot);
    writeJson(path.join(root, HISTORY_DIR, `${isoDate(now)}.json`), snapshot);
    const cta: CtaStats = {
      generatedAt: snapshot.generatedAt,
      window,
      ga4: ga4.data?.ctaEvents ?? null,
      cal: cal.data?.byCta ?? null,
    };
    writeJson(path.join(root, CTA_STATS_FILE), cta);
    const oppFile = path.join(root, OPPORTUNITIES_FILE);
    const existing = opportunitySchema.array().parse(readJson<unknown>(oppFile, []));
    const fresh = buildOpportunities({
      snapshot,
      livePaths: new Set(institutionalPublicPaths),
      articles: readArticleDates(root, institutionalBlogSlugs),
      now,
    });
    writeJson(oppFile, mergeOpportunities(existing, fresh, now));
  }
  return snapshot;
}

export function buildSnapshot(input: {
  now: Date;
  window: { start: string; end: string };
  gsc: Outcome<GscData>;
  ga4: Outcome<Ga4Data>;
  bing: Outcome<BingData>;
  bingAi: Outcome<BingAiData>;
  cal: Outcome<CalData>;
}): PerformanceSnapshot {
  const { gsc, ga4, bing, bingAi, cal } = input;
  const gscPages = new Map((gsc.data?.pages ?? []).map((p) => [p.path, p]));
  const pages: PagePerformance[] = [...new Set(institutionalPublicPaths)].sort().map((p) => {
    const g = gscPages.get(p);
    const b = bing.data?.pages.get(p);
    const a = ga4.data?.pages.get(p);
    const c = cal.data?.byPath.get(p);
    return {
      path: p,
      gscClicks: g?.clicks ?? 0,
      gscImpressions: g?.impressions ?? 0,
      gscCtr: round(g?.ctr ?? 0),
      gscPosition: g && g.impressions > 0 ? round(g.position, 2) : null,
      bingClicks: bing.data ? (b?.clicks ?? 0) : null,
      bingImpressions: bing.data ? (b?.impressions ?? 0) : null,
      organicSessions: ga4.data ? (a?.organic ?? 0) : null,
      aiReferralSessions: ga4.data ? (a?.ai ?? 0) : null,
      demosBooked: c?.demos ?? 0,
      qualifiedDemos: c?.qualified ?? 0,
    };
  });
  const queries: QueryPerformance[] = [
    ...(gsc.data?.queries ?? []).map((q) => ({
      query: q.query,
      page: q.path,
      clicks: q.clicks,
      impressions: q.impressions,
      ctr: round(q.ctr),
      position: round(q.position, 2),
      source: "gsc" as const,
    })),
    ...(bing.data?.queries ?? []).map((q) => ({
      query: q.query,
      page: q.page,
      clicks: q.clicks,
      impressions: q.impressions,
      ctr: round(q.impressions ? q.clicks / q.impressions : 0),
      position: round(q.position, 2),
      source: "bing" as const,
    })),
    // Bing AI CSV: "impressions" = AI citations; no clicks/position available.
    ...(bingAi.data?.queries ?? []).map((q) => ({
      query: q.query,
      page: null,
      clicks: 0,
      impressions: q.citations,
      ctr: 0,
      position: 0,
      source: "bing-ai" as const,
    })),
  ]
    .sort(
      (a, b) =>
        b.impressions - a.impressions ||
        a.source.localeCompare(b.source) ||
        a.query.localeCompare(b.query) ||
        (a.page ?? "").localeCompare(b.page ?? ""),
    )
    .slice(0, MAX_QUERIES);
  return {
    version: 1,
    generatedAt: input.now.toISOString(),
    window: input.window,
    sources: {
      gsc: gsc.status,
      ga4: ga4.status,
      bing: bing.status,
      "bing-ai": bingAi.status,
      cal: cal.status,
    },
    totals: {
      organicSessions: ga4.data ? ga4.data.totals.organic : null,
      aiReferralSessions: ga4.data ? ga4.data.totals.ai : null,
      demosBooked: cal.data?.demosBooked ?? 0,
      qualifiedDemos: cal.data?.qualifiedDemos ?? 0,
      qualifiedDemosFromOrganicOrAi: cal.data?.qualifiedDemosFromOrganicOrAi ?? 0,
    },
    pages,
    queries,
  };
}
