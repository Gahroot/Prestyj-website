/** GA4 Data API (read-only): landing-page sessions by channel + CTA/lead events. */
import { z } from "zod";
import { classifyChannel } from "../../../src/lib/attribution/channels";
import { getAccessToken, type ServiceAccount } from "./google-auth";
import { fetchJson, toPath } from "./util";

export const GA4_SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
export const CTA_EVENTS = ["cta_view", "cta_click", "generate_lead", "book_demo"] as const;

const reportSchema = z.object({
  rows: z
    .array(
      z.object({
        dimensionValues: z.array(z.object({ value: z.string() })),
        metricValues: z.array(z.object({ value: z.string() })),
      }),
    )
    .optional(),
});

export type CtaEventCount = { event: string; cta: string; variant: string; count: number };
export type Ga4Data = {
  pages: Map<string, { organic: number; ai: number }>;
  totals: { organic: number; ai: number };
  ctaEvents: CtaEventCount[];
};

export async function fetchGa4(
  key: ServiceAccount,
  propertyId: string,
  window: { start: string; end: string },
  now: Date,
): Promise<Ga4Data> {
  const token = await getAccessToken(key, GA4_SCOPE, now);
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${encodeURIComponent(propertyId)}:runReport`;
  const run = async (body: object) =>
    reportSchema.parse(
      await fetchJson(url, {
        label: "GA4 runReport",
        method: "POST",
        headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
        body: JSON.stringify({
          dateRanges: [{ startDate: window.start, endDate: window.end }],
          limit: 100000,
          ...body,
        }),
      }),
    ).rows ?? [];

  const sessionRows = await run({
    dimensions: [
      { name: "landingPagePlusQueryString" },
      { name: "sessionSource" },
      { name: "sessionMedium" },
    ],
    metrics: [{ name: "sessions" }],
  });
  const pages = new Map<string, { organic: number; ai: number }>();
  const totals = { organic: 0, ai: 0 };
  for (const row of sessionRows) {
    const [landing, source, medium] = row.dimensionValues.map((d) => d.value);
    const sessions = Number(row.metricValues[0]?.value ?? 0);
    const channel = classifyChannel({ utmSource: source ?? null, utmMedium: medium ?? null });
    if (channel !== "organic" && channel !== "ai") continue;
    const p = toPath(landing ?? "");
    totals[channel] += sessions;
    if (!p) continue;
    const agg = pages.get(p) ?? { organic: 0, ai: 0 };
    agg[channel] += sessions;
    pages.set(p, agg);
  }

  const eventRows = await run({
    dimensions: [
      { name: "eventName" },
      { name: "customEvent:pj_cta" },
      { name: "customEvent:pj_cta_variant" },
    ],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: { fieldName: "eventName", inListFilter: { values: [...CTA_EVENTS] } },
    },
  });
  const ctaEvents = eventRows.map((row) => {
    const [event, cta, variant] = row.dimensionValues.map((d) => d.value);
    return {
      event: event ?? "",
      cta: cta ?? "",
      variant: variant ?? "",
      count: Number(row.metricValues[0]?.value ?? 0),
    };
  });
  return { pages, totals, ctaEvents };
}
