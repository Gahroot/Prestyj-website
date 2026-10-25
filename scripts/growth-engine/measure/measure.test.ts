import { generateKeyPairSync } from "node:crypto";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  performanceSnapshotSchema,
  type Opportunity,
  type PerformanceSnapshot,
} from "../shared/contracts";
import { parseCsv, readBingAiImports } from "./bing";
import { collectPerformance } from "./index";
import { buildOpportunities, expectedCtr, mergeOpportunities } from "./opportunities";
import { toPath, trailingWindow } from "./util";

const NOW = new Date("2026-10-25T06:00:00Z");
const ENV_KEYS = [
  "GSC_SERVICE_ACCOUNT_JSON",
  "GA4_PROPERTY_ID",
  "BING_WEBMASTER_API_KEY",
  "CAL_API_KEY",
  "RESEND_API_KEY",
];
const LIVE = "/blog/ai-assisted-quarter-end-close";

function tmpRoot(): string {
  return mkdtempSync(path.join(tmpdir(), "growth-measure-"));
}
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

function serviceAccount(): string {
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
  return JSON.stringify({
    type: "service_account",
    client_email: "test@example.iam.gserviceaccount.com",
    private_key: privateKey.export({ type: "pkcs8", format: "pem" }).toString(),
    token_uri: "https://oauth2.googleapis.com/token",
  });
}

function mockFetch(): ReturnType<typeof vi.fn> {
  const fn = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const url = String(input);
    if (url.startsWith("https://oauth2.googleapis.com/token")) return json({ access_token: "tok" });
    if (url.endsWith("/webmasters/v3/sites"))
      return json({ siteEntry: [{ siteUrl: "sc-domain:prestyj.com" }] });
    if (url.includes("searchAnalytics/query")) {
      const dims = (JSON.parse(String(init?.body)) as { dimensions: string[] }).dimensions;
      if (dims.length === 1)
        return json({
          rows: [
            {
              keys: [`https://prestyj.com${LIVE}`],
              clicks: 2,
              impressions: 400,
              ctr: 0.005,
              position: 8,
            },
            {
              keys: [`https://www.prestyj.com${LIVE}/`],
              clicks: 1,
              impressions: 100,
              ctr: 0.01,
              position: 8,
            },
            {
              keys: ["https://prestyj.com/free-ads/hvac"],
              clicks: 50,
              impressions: 900,
              ctr: 0.05,
              position: 3,
            },
          ],
        });
      return json({
        rows: [
          {
            keys: ["quarter end close real estate fund", `https://prestyj.com${LIVE}`],
            clicks: 1,
            impressions: 300,
            ctr: 0.003,
            position: 8,
          },
          {
            keys: ["lp reporting real estate fund ai", "https://prestyj.com/blog/old-smb-post"],
            clicks: 0,
            impressions: 80,
            ctr: 0,
            position: 25,
          },
        ],
      });
    }
    if (url.includes("analyticsdata.googleapis.com")) {
      const body = JSON.parse(String(init?.body)) as { dimensions: Array<{ name: string }> };
      if (body.dimensions[0]?.name === "landingPagePlusQueryString")
        return json({
          rows: [
            {
              dimensionValues: [
                { value: `${LIVE}?utm=x` },
                { value: "google" },
                { value: "organic" },
              ],
              metricValues: [{ value: "40" }],
            },
            {
              dimensionValues: [{ value: LIVE }, { value: "chatgpt.com" }, { value: "referral" }],
              metricValues: [{ value: "5" }],
            },
            {
              dimensionValues: [{ value: LIVE }, { value: "(direct)" }, { value: "(none)" }],
              metricValues: [{ value: "99" }],
            },
          ],
        });
      return json({
        rows: [
          {
            dimensionValues: [{ value: "cta_view" }, { value: "article-end" }, { value: "a" }],
            metricValues: [{ value: "120" }],
          },
        ],
      });
    }
    if (url.includes("ssl.bing.com")) {
      const d = `/Date(${Date.parse("2026-10-10T00:00:00Z")}-0700)/`;
      const old = `/Date(${Date.parse("2026-01-10T00:00:00Z")}-0700)/`;
      if (url.includes("GetPageStats"))
        return json({
          d: [
            {
              Query: `https://prestyj.com${LIVE}`,
              Clicks: 3,
              Impressions: 30,
              AvgImpressionPosition: 6,
              Date: d,
            },
            { Query: `https://prestyj.com${LIVE}`, Clicks: 99, Impressions: 999, Date: old },
          ],
        });
      if (url.includes("GetQueryStats"))
        return json({
          d: [
            {
              Query: "cre brokerage ai agents",
              Clicks: 1,
              Impressions: 40,
              AvgImpressionPosition: 14,
              Date: d,
            },
          ],
        });
      return json({
        d: [
          {
            Query: `https://prestyj.com${LIVE}`,
            Clicks: 1,
            Impressions: 10,
            AvgImpressionPosition: 14,
            Date: d,
          },
        ],
      });
    }
    if (url.startsWith("https://api.cal.com/v2/bookings")) {
      expect(new Headers(init?.headers).get("cal-api-version")).toBe("2026-05-01");
      if (!url.includes("cursor="))
        return json({
          status: "success",
          data: [
            {
              status: "accepted",
              createdAt: "2026-10-01T10:00:00Z",
              metadata: {
                pj_landing: LIVE,
                pj_channel: "organic",
                pj_qualified: "yes",
                pj_cta: "article-end:x",
                pj_cta_variant: "a",
              },
              attendees: [{ name: "Secret Person", email: "secret@example.com" }],
            },
            {
              status: "cancelled",
              createdAt: "2026-10-02T10:00:00Z",
              metadata: { pj_landing: LIVE, pj_channel: "organic", pj_qualified: "yes" },
            },
          ],
          pagination: { hasMore: true, nextCursor: "c2" },
        });
      return json({
        status: "success",
        data: [
          {
            status: "accepted",
            createdAt: "2026-10-03T10:00:00Z",
            metadata: { pj_landing: "/platform", pj_channel: "direct", pj_qualified: "yes" },
          },
          { status: "accepted", createdAt: "2026-08-01T10:00:00Z", metadata: {} },
        ],
        pagination: { hasMore: false, nextCursor: null },
      });
    }
    return json({ error: "unexpected" }, 404);
  });
  vi.stubGlobal("fetch", fn);
  return fn;
}

describe("util", () => {
  it("normalizes paths and windows", () => {
    expect(toPath("https://www.prestyj.com/Blog/X/?a=1")).toBe("/blog/x");
    expect(toPath("https://example.com/x")).toBeNull();
    expect(toPath("https://prestyj.com")).toBe("/");
    expect(trailingWindow(NOW, 28)).toEqual({ start: "2026-09-27", end: "2026-10-24" });
  });
  it("parses Bing AI CSV exports", () => {
    expect(parseCsv('\uFEFF"a","b"\n"x, ""y""","2"\n')).toEqual([
      ["a", "b"],
      ['x, "y"', "2"],
    ]);
    const root = tmpRoot();
    const dir = path.join(root, "data/growth/imports/bing-ai");
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      path.join(dir, "prestyj.com_AISearchQueriesReport_6_13_2026.csv"),
      '"Grounding Query","Citations"\n"old","1"\n',
    );
    writeFileSync(
      path.join(dir, "prestyj.com_AISearchQueriesReport_10_1_2026.csv"),
      '"Grounding Query","Citations"\n"real estate fund ai","12"\n',
    );
    writeFileSync(
      path.join(dir, "prestyj.com_AIPageStatsReport_10_1_2026.csv"),
      `"Page","Citations"\n"https://www.prestyj.com${LIVE}","7"\n`,
    );
    const r = readBingAiImports(root);
    expect(r?.queries).toEqual([{ query: "real estate fund ai", citations: 12 }]);
    expect(r?.pages).toEqual([{ path: LIVE, citations: 7 }]);
  });
});

describe("collectPerformance", () => {
  const saved: Record<string, string | undefined> = {};
  beforeEach(() => {
    for (const k of ENV_KEYS) {
      saved[k] = process.env[k];
      delete process.env[k];
    }
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    for (const k of ENV_KEYS) {
      if (saved[k] === undefined) delete process.env[k];
      else process.env[k] = saved[k];
    }
  });

  it("marks every source missing-credentials without crashing or zeroing GA4", async () => {
    const root = tmpRoot();
    const fetchFn = mockFetch();
    const s = await collectPerformance({ root, dryRun: false, now: NOW });
    expect(fetchFn).not.toHaveBeenCalled();
    expect(s.sources).toEqual({
      gsc: "missing-credentials",
      ga4: "missing-credentials",
      bing: "missing-credentials",
      "bing-ai": "missing-credentials",
      cal: "missing-credentials",
    });
    expect(s.totals.organicSessions).toBeNull();
    expect(s.pages.every((p) => p.organicSessions === null && p.bingClicks === null)).toBe(true);
    const exc = JSON.parse(
      readFileSync(path.join(root, "data/growth/exceptions.json"), "utf8"),
    ) as Array<{ component: string; severity: string }>;
    expect(exc.map((e) => e.component).sort()).toEqual([
      "measure.bing",
      "measure.bing-ai",
      "measure.cal",
      "measure.ga4",
      "measure.gsc",
    ]);
    expect(exc.every((e) => e.severity === "warning")).toBe(true);
  });

  it("reads all sources, aggregates, and writes files without personal data", async () => {
    const root = tmpRoot();
    process.env.GSC_SERVICE_ACCOUNT_JSON = serviceAccount();
    process.env.GA4_PROPERTY_ID = "123";
    process.env.BING_WEBMASTER_API_KEY = "bk";
    process.env.CAL_API_KEY = "ck";
    mockFetch();
    mkdirSync(path.join(root, "data/growth"), { recursive: true });
    const existing: Opportunity[] = [
      {
        id: "new-topic:research-x",
        kind: "new-topic",
        path: null,
        queries: ["x"],
        evidence: "content",
        score: 9,
        createdAt: "2026-10-01",
        status: "in-progress",
      },
      {
        id: `refresh-ctr:${LIVE}`,
        kind: "refresh-ctr",
        path: LIVE,
        queries: [],
        evidence: "old",
        score: 1,
        createdAt: "2026-10-01",
        status: "done",
      },
    ];
    writeFileSync(path.join(root, "data/growth/opportunities.json"), JSON.stringify(existing));

    const s = await collectPerformance({ root, dryRun: false, now: NOW });
    performanceSnapshotSchema.parse(s);
    expect(s.sources).toMatchObject({ gsc: "ok", ga4: "ok", bing: "ok", cal: "ok" });
    const page = s.pages.find((p) => p.path === LIVE);
    expect(page).toMatchObject({
      gscClicks: 3,
      gscImpressions: 500,
      gscPosition: 8,
      organicSessions: 40,
      aiReferralSessions: 5,
      bingClicks: 3,
      bingImpressions: 30,
      demosBooked: 1,
      qualifiedDemos: 1,
    });
    expect(s.pages.some((p) => p.path.startsWith("/free-ads"))).toBe(false);
    expect(s.totals).toEqual({
      organicSessions: 40,
      aiReferralSessions: 5,
      demosBooked: 2,
      qualifiedDemos: 2,
      qualifiedDemosFromOrganicOrAi: 1,
    });
    expect(s.queries.filter((q) => q.source === "bing").length).toBe(2);

    const written = readFileSync(path.join(root, "data/growth/performance.json"), "utf8");
    expect(written).not.toMatch(/secret/i);
    expect(existsSync(path.join(root, "data/growth/history/2026-10-25.json"))).toBe(true);
    const cta = JSON.parse(readFileSync(path.join(root, "data/growth/cta-stats.json"), "utf8")) as {
      cal: unknown[];
      ga4: unknown[];
    };
    expect(cta.cal).toEqual([{ cta: "article-end:x", variant: "a", bookings: 1 }]);
    const opps = JSON.parse(
      readFileSync(path.join(root, "data/growth/opportunities.json"), "utf8"),
    ) as Opportunity[];
    expect(opps.find((o) => o.id === "new-topic:research-x")?.status).toBe("in-progress");
    expect(opps.find((o) => o.id === `refresh-ctr:${LIVE}`)).toMatchObject({
      status: "done",
      evidence: "old",
    });
    expect(opps.some((o) => o.kind === "refresh-position" && o.path === LIVE)).toBe(true);
    expect(opps.some((o) => o.id === "new-topic:lp-reporting-real-estate-fund-ai")).toBe(true);
    expect(opps.every((o) => o.path === null || !o.path.startsWith("/free-ads"))).toBe(true);
  });

  it("records API errors as error + exception, other sources unaffected", async () => {
    const root = tmpRoot();
    process.env.CAL_API_KEY = "ck";
    process.env.BING_WEBMASTER_API_KEY = "bk";
    vi.stubGlobal(
      "fetch",
      vi.fn(async (u: string) =>
        String(u).includes("bing")
          ? json({}, 500)
          : json({ data: [], pagination: { hasMore: false, nextCursor: null } }),
      ),
    );
    const s = await collectPerformance({ root, dryRun: false, now: NOW });
    expect(s.sources.bing).toBe("error");
    expect(s.sources.cal).toBe("ok");
    const exc = readFileSync(path.join(root, "data/growth/exceptions.json"), "utf8");
    expect(exc).toContain("HTTP 500");
    expect(exc).not.toContain("bk");
  });

  it("dry run writes nothing", async () => {
    const root = tmpRoot();
    mockFetch();
    await collectPerformance({ root, dryRun: true, now: NOW });
    expect(existsSync(path.join(root, "data"))).toBe(false);
  });
});

describe("opportunity scoring", () => {
  const base = (
    over: Partial<PerformanceSnapshot["pages"][number]>,
  ): PerformanceSnapshot["pages"][number] => ({
    path: LIVE,
    gscClicks: 0,
    gscImpressions: 0,
    gscCtr: 0,
    gscPosition: null,
    bingClicks: null,
    bingImpressions: null,
    organicSessions: null,
    aiReferralSessions: null,
    demosBooked: 0,
    qualifiedDemos: 0,
    ...over,
  });
  const snap = (
    pages: PerformanceSnapshot["pages"],
    cal: "ok" | "missing-credentials" = "ok",
  ): PerformanceSnapshot => ({
    version: 1,
    generatedAt: NOW.toISOString(),
    window: { start: "a", end: "b" },
    sources: { cal },
    totals: {
      organicSessions: null,
      aiReferralSessions: null,
      demosBooked: 0,
      qualifiedDemos: 0,
      qualifiedDemosFromOrganicOrAi: 0,
    },
    pages,
    queries: [],
  });
  const live = new Set([LIVE]);

  it("expected CTR curve", () => {
    expect(expectedCtr(1)).toBe(0.28);
    expect(expectedCtr(15)).toBe(0.01);
    expect(expectedCtr(40)).toBe(0.003);
  });
  it("refresh-ctr score = impressions × (expected − ctr) × prior × 1000", () => {
    const o = buildOpportunities({
      snapshot: snap([base({ gscImpressions: 1000, gscCtr: 0.01, gscPosition: 2 })]),
      livePaths: live,
      articles: [],
      now: NOW,
    });
    const ctr = o.find((x) => x.kind === "refresh-ctr");
    expect(ctr?.score).toBeCloseTo(1000 * (0.15 - 0.01) * 0.005 * 1000);
    expect(o.some((x) => x.kind === "refresh-position")).toBe(false);
  });
  it("stale, conversion, and Cal-gated conversion", () => {
    const pages = [base({ gscImpressions: 10, gscClicks: 40, gscPosition: 30 })];
    const o = buildOpportunities({
      snapshot: snap(pages),
      livePaths: live,
      articles: [
        { path: LIVE, lastUpdated: "2026-05-01" },
        { path: "/blog/legacy", lastUpdated: "2020-01-01" },
      ],
      now: NOW,
    });
    expect(o.map((x) => x.kind).sort()).toEqual(["conversion", "refresh-stale"]);
    expect(
      buildOpportunities({
        snapshot: snap(pages, "missing-credentials"),
        livePaths: live,
        articles: [],
        now: NOW,
      }),
    ).toEqual([]);
  });
  it("new-topic skips off-lane and well-covered queries", () => {
    const s = snap([]);
    s.queries = [
      {
        query: "hvac answering service",
        page: null,
        clicks: 0,
        impressions: 500,
        ctr: 0,
        position: 9,
        source: "gsc",
      },
      {
        query: "real estate fund lp reporting",
        page: LIVE,
        clicks: 5,
        impressions: 300,
        ctr: 0.02,
        position: 4,
        source: "gsc",
      },
      {
        query: "cre owner-operator ai",
        page: null,
        clicks: 0,
        impressions: 8,
        ctr: 0,
        position: 0,
        source: "bing-ai",
      },
    ];
    expect(
      buildOpportunities({ snapshot: s, livePaths: live, articles: [], now: NOW }).map((o) => o.id),
    ).toEqual(["new-topic:cre-owner-operator-ai"]);
  });
  it("merge keeps unknown items and non-open status", () => {
    const ex: Opportunity[] = [
      {
        id: "a",
        kind: "conversion",
        path: LIVE,
        queries: [],
        evidence: "e",
        score: 1,
        createdAt: "t",
        status: "open",
      },
    ];
    const m = mergeOpportunities(
      ex,
      [
        { id: "a", kind: "conversion", path: LIVE, queries: ["q"], evidence: "new", score: 5 },
        { id: "b", kind: "new-topic", path: null, queries: ["q"], evidence: "x", score: 2 },
      ],
      NOW,
    );
    expect(m).toHaveLength(2);
    expect(m[0]).toMatchObject({ id: "a", evidence: "new", score: 5, createdAt: "t" });
    expect(m[1]).toMatchObject({ id: "b", status: "open", createdAt: NOW.toISOString() });
  });
});
