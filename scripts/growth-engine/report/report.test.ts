import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { PerformanceSnapshot } from "../shared/contracts";
import type { CtaStats } from "../measure/index";
import { applyWinners, pickWinner, promoteCtaWinners, twoProportionPValue } from "./cta";
import { sendWeeklyReport } from "./index";
import { markdownToHtml, renderMarkdown, type ReportInput } from "./render";

const sendEmail = vi.hoisted(() => vi.fn(async () => true));
vi.mock("../shared/alert", async (orig) => ({
  ...(await orig<typeof import("../shared/alert")>()),
  sendEmail,
}));

const NOW = new Date("2026-10-25T06:00:00Z");
const snap = (over: {
  gsc?: boolean;
  cal?: boolean;
  ga4?: boolean;
  clicks?: number;
  nsk?: number;
  pos?: number;
}): PerformanceSnapshot => ({
  version: 1,
  generatedAt: NOW.toISOString(),
  window: { start: "2026-09-27", end: "2026-10-24" },
  sources: {
    gsc: over.gsc === false ? "missing-credentials" : "ok",
    cal: over.cal === false ? "missing-credentials" : "ok",
    ga4: over.ga4 ? "ok" : "missing-credentials",
  },
  totals: {
    organicSessions: over.ga4 ? 50 : null,
    aiReferralSessions: over.ga4 ? 4 : null,
    demosBooked: 3,
    qualifiedDemos: 2,
    qualifiedDemosFromOrganicOrAi: over.nsk ?? 1,
  },
  pages: [
    {
      path: "/platform",
      gscClicks: over.clicks ?? 10,
      gscImpressions: 200,
      gscCtr: 0.05,
      gscPosition: over.pos ?? 6,
      bingClicks: null,
      bingImpressions: null,
      organicSessions: null,
      aiReferralSessions: null,
      demosBooked: 3,
      qualifiedDemos: 2,
    },
  ],
  queries: [
    {
      query: "fund ops ai",
      page: "/platform",
      clicks: 3,
      impressions: 50,
      ctr: 0.06,
      position: over.pos ?? 6,
      source: "gsc",
    },
  ],
});
const input = (over: Partial<ReportInput> = {}): ReportInput => ({
  date: "2026-10-25",
  current: snap({ ga4: false }),
  weekAgo: snap({ clicks: 6, nsk: 0, pos: 9 }),
  periodAgo: null,
  contentLog: [
    {
      at: "2026-10-22T00:00:00Z",
      action: "publish",
      slug: "x",
      path: "/blog/x",
      title: "X",
      opportunityId: null,
      reasons: [],
      sourcesChecked: 3,
      costUsd: 1,
    },
    {
      at: "2026-10-23T00:00:00Z",
      action: "reject",
      slug: "y",
      path: null,
      title: "Y",
      opportunityId: null,
      reasons: ["fact check failed"],
      sourcesChecked: 2,
      costUsd: 1,
    },
    {
      at: "2026-09-01T00:00:00Z",
      action: "refresh",
      slug: "old",
      path: "/blog/old",
      title: "Old",
      opportunityId: null,
      reasons: [],
      sourcesChecked: 1,
      costUsd: 0,
    },
  ],
  exceptions: [
    {
      id: "1",
      raisedAt: "t",
      severity: "warning",
      component: "measure.ga4",
      message: "Missing credentials",
      resolvedAt: null,
    },
  ],
  opportunities: [
    {
      id: "a",
      kind: "refresh-ctr",
      path: "/platform",
      queries: [],
      evidence: "ev-a",
      score: 3,
      createdAt: "t",
      status: "open",
    },
    {
      id: "b",
      kind: "new-topic",
      path: null,
      queries: ["lp reporting"],
      evidence: "ev-b",
      score: 9,
      createdAt: "t",
      status: "open",
    },
    {
      id: "c",
      kind: "conversion",
      path: "/x",
      queries: [],
      evidence: "ev-c",
      score: 99,
      createdAt: "t",
      status: "done",
    },
  ],
  ctaStats: null,
  experiments: null,
  ...over,
});

describe("renderMarkdown", () => {
  it("puts the north star first and shows missing data as not connected", () => {
    const md = renderMarkdown(input());
    const ns = md.indexOf("Qualified demos from organic + AI");
    expect(ns).toBeGreaterThan(0);
    expect(ns).toBeLessThan(md.indexOf("Demos booked"));
    expect(md).toContain("Qualified demos from organic + AI:** 1 · vs a week ago (▲ +1)");
    expect(md).toMatch(/Organic sessions:\*\* not connected/);
    expect(md).toMatch(/GSC avg position \(live pages\):\*\* 6\.0 · vs a week ago \(▲ -3\.0\)/);
    expect(md).toContain('▲ "fund ops ai"');
    expect(md).toContain("**Published (1):** /blog/x");
    expect(md).toContain("**Rejected (1):** Y — fact check failed");
    expect(md).toContain("**Refreshed (0):** none");
    expect(md).toContain("- ga4: not connected");
    expect(md.indexOf("new-topic")).toBeLessThan(md.indexOf("refresh-ctr** /platform"));
    expect(md).not.toContain("ev-c");
  });
  it("never shows 0 for a disconnected Cal source", () => {
    const md = renderMarkdown(input({ current: snap({ cal: false }), weekAgo: null }));
    expect(md).toContain("Qualified demos from organic + AI:** not connected");
    expect(md).toContain("Demos booked:** not connected");
  });
  it("renders HTML safely", () => {
    const html = markdownToHtml("# T\n- **a** <b>\n1. x");
    expect(html).toContain("<h1>T</h1>");
    expect(html).toContain("<li><strong>a</strong> &lt;b&gt;</li>");
    expect(html).toContain("<ol>");
  });
});

describe("sendWeeklyReport", () => {
  afterEach(() => sendEmail.mockClear());
  it("writes markdown from history and emails it", async () => {
    const root = mkdtempSync(path.join(tmpdir(), "growth-report-"));
    mkdirSync(path.join(root, "data/growth/history"), { recursive: true });
    writeFileSync(
      path.join(root, "data/growth/history/2026-10-25.json"),
      JSON.stringify(snap({ nsk: 4 })),
    );
    writeFileSync(
      path.join(root, "data/growth/history/2026-10-18.json"),
      JSON.stringify(snap({ nsk: 2 })),
    );
    const res = await sendWeeklyReport({ root, dryRun: false, now: NOW });
    expect(res.emailed).toBe(true);
    expect(res.markdownPath).toBe(path.join(root, "data/growth/reports/2026-10-25.md"));
    expect(readFileSync(res.markdownPath, "utf8")).toContain(
      "organic + AI:** 4 · vs a week ago (▲ +2)",
    );
    expect(sendEmail).toHaveBeenCalledWith(
      expect.stringContaining("qualified organic/AI demos: 4"),
      expect.stringContaining("<h1>"),
      expect.any(String),
    );
  });
});

describe("CTA winners", () => {
  const stats = (views: [number, number], demos: [number, number]): CtaStats => ({
    generatedAt: "t",
    window: { start: "a", end: "b" },
    ga4: [
      { event: "cta_view", cta: "article-end:post-1", variant: "a", count: views[0] },
      { event: "cta_view", cta: "article-end:post-2", variant: "b", count: views[1] },
      { event: "book_demo", cta: "article-end:post-1", variant: "a", count: demos[0] },
      { event: "cta_view", cta: "page-end", variant: "a", count: 9999 },
    ],
    cal: [{ cta: "article-end:post-2", variant: "b", bookings: demos[1] }],
  });
  const file = () => ({
    experiments: [
      {
        id: "article-end",
        placement: "article-end",
        variants: [
          {
            id: "a",
            headline: "H-a",
            body: "B-a",
            buttonLabel: "L",
            weight: 50,
            status: "testing" as const,
          },
          {
            id: "b",
            headline: "H-b",
            body: "B-b",
            buttonLabel: "L",
            weight: 50,
            status: "testing" as const,
          },
        ],
      },
    ],
  });

  it("p-value sanity", () => {
    expect(twoProportionPValue(30, 200, 10, 200)).toBeLessThan(0.01);
    expect(twoProportionPValue(12, 200, 10, 200)).toBeGreaterThan(0.5);
  });
  it("requires sample size and significance", () => {
    expect(
      pickWinner([
        { variant: "a", exposures: 99, conversions: 50 },
        { variant: "b", exposures: 500, conversions: 1 },
      ]),
    ).toBeNull();
    expect(
      pickWinner([
        { variant: "a", exposures: 200, conversions: 12 },
        { variant: "b", exposures: 200, conversions: 10 },
      ]),
    ).toBeNull();
    expect(
      pickWinner([
        { variant: "a", exposures: 200, conversions: 30 },
        { variant: "b", exposures: 200, conversions: 10 },
      ])?.winner,
    ).toBe("a");
  });
  it("promotes winner, retires losers, never edits copy", () => {
    const { next, promoted } = applyWinners(file(), stats([200, 200], [2, 25]));
    expect(promoted).toEqual([{ experiment: "article-end", variant: "b" }]);
    expect(next.experiments[0]?.variants).toEqual([
      { id: "a", headline: "H-a", body: "B-a", buttonLabel: "L", weight: 0, status: "retired" },
      { id: "b", headline: "H-b", body: "B-b", buttonLabel: "L", weight: 100, status: "winner" },
    ]);
  });
  it("no-ops without the experiments file or stats; writes when a winner exists", async () => {
    const root = mkdtempSync(path.join(tmpdir(), "growth-cta-"));
    expect(await promoteCtaWinners({ root, dryRun: false })).toEqual({ changedFiles: [] });
    mkdirSync(path.join(root, "src/lib/conversion"), { recursive: true });
    mkdirSync(path.join(root, "data/growth"), { recursive: true });
    const f = path.join(root, "src/lib/conversion/cta-experiments.json");
    writeFileSync(f, JSON.stringify(file()));
    expect(await promoteCtaWinners({ root, dryRun: false })).toEqual({ changedFiles: [] });
    writeFileSync(
      path.join(root, "data/growth/cta-stats.json"),
      JSON.stringify(stats([300, 300], [40, 5])),
    );
    expect(await promoteCtaWinners({ root, dryRun: true })).toEqual({ changedFiles: [] });
    expect(await promoteCtaWinners({ root, dryRun: false })).toEqual({
      changedFiles: ["src/lib/conversion/cta-experiments.json"],
    });
    expect(readFileSync(f, "utf8")).toContain('"status": "winner"');
  });
});
