/**
 * Shared data contracts for the Prestyj growth engine.
 *
 * - The measurement side (scripts/growth-engine/measure) WRITES `data/growth/performance.json`.
 * - The content side (scripts/growth-engine/content) READS it to pick refreshes and gaps.
 * - The site (src/lib/attribution) WRITES booking metadata with the keys below;
 *   the measurement side READS them back from Cal.com bookings.
 *
 * Change these only together with every reader/writer.
 */
import { z } from "zod";

export const GROWTH_DATA_DIR = "data/growth";
export const PERFORMANCE_FILE = `${GROWTH_DATA_DIR}/performance.json`;
export const CONTENT_LOG_FILE = `${GROWTH_DATA_DIR}/content-log.json`;
export const EXCEPTIONS_FILE = `${GROWTH_DATA_DIR}/exceptions.json`;
export const REPORTS_DIR = `${GROWTH_DATA_DIR}/reports`;

/** Where a visit came from, classified once on the site and again from referrer data. */
export const trafficChannelSchema = z.enum([
  "organic", // Google, Bing, DuckDuckGo, etc. search results
  "ai", // ChatGPT, Perplexity, Copilot, Gemini, Claude, other AI assistants
  "referral",
  "social",
  "paid",
  "email",
  "direct",
]);
export type TrafficChannel = z.infer<typeof trafficChannelSchema>;

/**
 * Keys the site attaches to every Cal.com booking (Cal embed `config` → booking metadata)
 * and to GA4 `generate_lead` / `book_demo` events as event params.
 * All values are short strings; absent values are omitted, never "undefined".
 */
export const ATTRIBUTION_KEYS = {
  landingPath: "pj_landing", // first-touch landing path, e.g. "/blog/ai-assisted-quarter-end-close"
  channel: "pj_channel", // TrafficChannel of the first touch
  referrerHost: "pj_ref", // first-touch referrer host, e.g. "chatgpt.com"
  utmSource: "pj_utm_source",
  utmMedium: "pj_utm_medium",
  utmCampaign: "pj_utm_campaign",
  ctaId: "pj_cta", // id of the CTA clicked before reaching /book-demo, e.g. "article-inline:quarter-end-close"
  ctaVariant: "pj_cta_variant", // A/B variant id shown, e.g. "a" | "b"
  firmType: "pj_firm_type", // from the qualification form
  aumBand: "pj_aum_band", // from the qualification form
  qualified: "pj_qualified", // "yes" | "no" — form's ICP rule (fund >= $500M AUM, CRE brokerage, CRE owner-operator)
} as const;
export type AttributionKey = (typeof ATTRIBUTION_KEYS)[keyof typeof ATTRIBUTION_KEYS];

export const pagePerformanceSchema = z.object({
  path: z.string().startsWith("/"),
  // Google Search Console, trailing 28 days
  gscClicks: z.number().nonnegative(),
  gscImpressions: z.number().nonnegative(),
  gscCtr: z.number().nonnegative(),
  gscPosition: z.number().nonnegative().nullable(),
  // Bing Webmaster (incl. Copilot/AI where available), trailing 28 days
  bingClicks: z.number().nonnegative().nullable(),
  bingImpressions: z.number().nonnegative().nullable(),
  // GA4, trailing 28 days, sessions landing on this path
  organicSessions: z.number().nonnegative().nullable(),
  aiReferralSessions: z.number().nonnegative().nullable(),
  // Cal.com bookings whose first-touch landing path is this page, trailing 28 days
  demosBooked: z.number().nonnegative(),
  qualifiedDemos: z.number().nonnegative(),
});
export type PagePerformance = z.infer<typeof pagePerformanceSchema>;

export const queryPerformanceSchema = z.object({
  query: z.string(),
  page: z.string().nullable(),
  clicks: z.number().nonnegative(),
  impressions: z.number().nonnegative(),
  ctr: z.number().nonnegative(),
  position: z.number().nonnegative(),
  source: z.enum(["gsc", "bing", "bing-ai"]),
});
export type QueryPerformance = z.infer<typeof queryPerformanceSchema>;

export const performanceSnapshotSchema = z.object({
  version: z.literal(1),
  generatedAt: z.string(), // ISO timestamp
  window: z.object({ start: z.string(), end: z.string() }), // YYYY-MM-DD inclusive
  /** Which sources returned data this run; missing sources are listed, never silently zeroed. */
  sources: z.record(z.string(), z.enum(["ok", "missing-credentials", "error"])),
  totals: z.object({
    organicSessions: z.number().nullable(),
    aiReferralSessions: z.number().nullable(),
    demosBooked: z.number(),
    qualifiedDemos: z.number(),
    qualifiedDemosFromOrganicOrAi: z.number(), // north-star KPI
  }),
  pages: z.array(pagePerformanceSchema),
  queries: z.array(queryPerformanceSchema),
});
export type PerformanceSnapshot = z.infer<typeof performanceSnapshotSchema>;

export const OPPORTUNITIES_FILE = `${GROWTH_DATA_DIR}/opportunities.json`;

/**
 * Written by measurement (from real performance data), read by content to decide
 * what to refresh or write next. Content also adds its own research-sourced items.
 */
export const opportunitySchema = z.object({
  id: z.string(),
  kind: z.enum([
    "refresh-ctr", // high impressions, low CTR → rewrite title/meta/answer block
    "refresh-position", // position ~5-20 → deepen/update content, add FAQ, internal links
    "refresh-stale", // not updated in 120+ days or facts out of date
    "new-topic", // queries/prompts with demand and no matching page
    "conversion", // traffic but no demos → CTA/related-proof change
  ]),
  path: z.string().nullable(), // existing page, if any
  queries: z.array(z.string()),
  evidence: z.string(), // human-readable numbers that justify it
  score: z.number(), // higher = do sooner; expected qualified-demo impact
  createdAt: z.string(),
  status: z.enum(["open", "in-progress", "done", "rejected"]),
});
export type Opportunity = z.infer<typeof opportunitySchema>;

/** Appended by content for every publish/refresh/reject; read by the weekly report. */
export const contentLogEntrySchema = z.object({
  at: z.string(), // ISO timestamp
  action: z.enum(["publish", "refresh", "reject", "skip"]),
  slug: z.string(),
  path: z.string().nullable(), // public URL path if live
  title: z.string(),
  opportunityId: z.string().nullable(),
  reasons: z.array(z.string()), // gate failures for reject/skip; change summary for publish/refresh
  sourcesChecked: z.number().nonnegative(),
  costUsd: z.number().nonnegative(),
});
export type ContentLogEntry = z.infer<typeof contentLogEntrySchema>;

export const exceptionSchema = z.object({
  id: z.string(),
  raisedAt: z.string(),
  severity: z.enum(["info", "warning", "critical"]),
  component: z.string(), // e.g. "content.factcheck", "measure.gsc", "publish.git"
  message: z.string(),
  resolvedAt: z.string().nullable(),
});
export type GrowthException = z.infer<typeof exceptionSchema>;
