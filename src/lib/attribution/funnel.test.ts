/**
 * End-to-end funnel proof without GA4: search/AI visit → first touch → CTA click →
 * qualification form → pj_* params → Cal.com booking metadata → growth-engine aggregation.
 */
import { describe, expect, it } from "vitest";

import { aggregateBookings } from "../../../scripts/growth-engine/measure/cal";
import { calBookingUrl } from "@/components/booking/cal-link";
import { classifyChannel } from "@/lib/attribution/channels";
import { isBookDemoHref } from "@/lib/attribution/cta";
import {
  buildAttributionParams,
  buildFirstTouch,
  captureFirstTouch,
  readFirstTouch,
  readLastCta,
  recordCtaClick,
  toCalMetadataConfig,
} from "@/lib/attribution/first-touch";
import { ATTRIBUTION_KEYS } from "@/lib/attribution/keys";
import { getBookableService, laneForPath } from "@/lib/attribution/services";
import { qualificationFormSchema } from "@/lib/validations/form-schemas";

function memoryStorage(): Pick<Storage, "getItem" | "setItem"> {
  const data = new Map<string, string>();
  return { getItem: (k) => data.get(k) ?? null, setItem: (k, v) => void data.set(k, v) };
}

/** What Cal.com stores: every `metadata[key]=value` booking-page query param → metadata.key. */
function calMetadataFromQuery(url: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of new URL(url).searchParams) {
    const m = /^metadata\[([^\]]+)\]$/.exec(k);
    if (m?.[1]) out[m[1]] = v;
  }
  return out;
}

describe("channel classifier coverage", () => {
  it.each([
    ["https://www.google.com/", "organic"],
    ["https://www.google.co.uk/", "organic"],
    ["https://www.bing.com/search?q=x", "organic"],
    ["https://duckduckgo.com/", "organic"],
    ["https://chatgpt.com/", "ai"],
    ["https://chat.openai.com/", "ai"],
    ["https://www.perplexity.ai/search", "ai"],
    ["https://claude.ai/chat/1", "ai"],
    ["https://gemini.google.com/app", "ai"],
    ["https://copilot.microsoft.com/", "ai"],
  ])("referrer %s → %s", (referrer, channel) => {
    expect(classifyChannel({ referrer, ownHost: "prestyj.com" })).toBe(channel);
  });
  it.each([
    ["chatgpt.com", null, "ai"],
    ["chatgpt", null, "ai"],
    ["openai", null, "ai"],
    ["perplexity", null, "ai"],
    ["claude.ai", null, "ai"],
    ["gemini", null, "ai"],
    ["copilot", null, "ai"],
    ["google", "organic", "organic"],
    ["google", null, "organic"],
    ["bing", null, "organic"],
    ["duckduckgo", null, "organic"],
    ["google", "cpc", "paid"],
  ])("utm_source=%s utm_medium=%s → %s", (utmSource, utmMedium, channel) => {
    expect(classifyChannel({ utmSource, utmMedium })).toBe(channel);
  });
});

describe("organic and AI visits reach the north-star count", () => {
  const cases = [
    {
      name: "google organic → real estate page",
      referrer: "https://www.google.com/",
      landing: "https://prestyj.com/blog/ai-assisted-quarter-end-close?x=1",
      channel: "organic",
      service: null,
      form: { firmType: "fund", aumBand: "1b-5b" },
      lane: "real-estate",
    },
    {
      name: "bing organic → MCP server page",
      referrer: "https://www.bing.com/search?q=custom+mcp+server",
      landing: "https://prestyj.com/custom-mcp-servers",
      channel: "organic",
      service: "custom-mcp-servers",
      form: { firmType: "other", companySize: "10-49" },
      lane: "connectors",
    },
    {
      name: "chatgpt.com → custom AI agents page",
      referrer: "https://chatgpt.com/",
      landing: "https://prestyj.com/custom-ai-agents?utm_source=chatgpt.com",
      channel: "ai",
      service: "custom-ai-agents",
      form: { firmType: "other", companySize: "50-249" },
      lane: "custom-builds",
    },
    {
      name: "perplexity → Claude connectors page",
      referrer: "https://www.perplexity.ai/",
      landing: "https://prestyj.com/custom-claude-connectors",
      channel: "ai",
      service: "custom-claude-connectors",
      form: { firmType: "other", companySize: "250-plus" },
      lane: "connectors",
    },
  ] as const;

  it.each(cases)("$name", (c) => {
    const storage = memoryStorage();
    // 1. Landing visit (AttributionTracker).
    captureFirstTouch(
      storage,
      buildFirstTouch({
        url: c.landing,
        referrer: c.referrer,
        now: new Date("2026-11-02T10:00:00Z"),
      }),
    );
    // A later internal page view never overwrites the first touch.
    captureFirstTouch(
      storage,
      buildFirstTouch({ url: "https://prestyj.com/", referrer: c.landing, now: new Date() }),
    );
    const landingPath = new URL(c.landing).pathname;
    expect(readFirstTouch(storage)?.channel).toBe(c.channel);
    expect(readFirstTouch(storage)?.landingPath).toBe(landingPath);

    // 2. CTA click to /book-demo?service=… (AttributionTracker click handler).
    const href = c.service ? `/book-demo?service=${c.service}` : "/book-demo";
    expect(isBookDemoHref(href, "https://prestyj.com")).toBe(true);
    recordCtaClick(storage, { id: `hero:${landingPath}`, variant: "a" });

    // 3. Form completion.
    const data = qualificationFormSchema.parse({
      firstName: "Jane Smith",
      email: "jane@firm.com",
      workflow: "",
      ...c.form,
    });

    // 4. pj_* params (BookDemoClient.attributionFor).
    const service = getBookableService(c.service)?.slug ?? null;
    const params = buildAttributionParams({
      firstTouch: readFirstTouch(storage),
      lastCta: readLastCta(storage),
      qualification: {
        firmType: data.firmType,
        aumBand: data.aumBand ?? null,
        companySize: data.companySize ?? null,
      },
      service,
    });
    expect(params[ATTRIBUTION_KEYS.channel]).toBe(c.channel);
    expect(params[ATTRIBUTION_KEYS.landingPath]).toBe(landingPath);
    expect(params[ATTRIBUTION_KEYS.qualified]).toBe("yes");
    expect(params[ATTRIBUTION_KEYS.service]).toBe(service ?? undefined);
    for (const key of Object.keys(params)) expect(key).toMatch(/^pj_[a-z_]+$/); // /api/demo-request

    // 5. Cal.com: embed config keys become booking-page query params verbatim (embed-core
    //    appends config entries to the iframe URL); the direct fallback link sends the same.
    const config = toCalMetadataConfig(params);
    const embedUrl = new URL("https://app.cal.com/nolan-grout-x0fgn8/30min/embed");
    for (const [k, v] of Object.entries(config)) embedUrl.searchParams.append(k, v);
    const metadata = calMetadataFromQuery(embedUrl.toString());
    expect(metadata).toEqual(params);
    expect(calMetadataFromQuery(calBookingUrl({ name: "Jane" }, params))).toEqual(params);

    // 6. Growth engine reads the booking back.
    const agg = aggregateBookings(
      [
        { status: "accepted", createdAt: "2026-11-02T10:05:00.000Z", metadata },
        { status: "cancelled", createdAt: "2026-11-02T11:00:00.000Z", metadata },
      ],
      { start: "2026-10-06", end: "2026-11-02" },
    );
    expect(agg.qualifiedDemosFromOrganicOrAi).toBe(1);
    expect(agg.byPath.get(landingPath)).toEqual({ demos: 1, qualified: 1 });
    expect(agg.byLane.get(c.lane)).toEqual({ demos: 1, qualified: 1, qualifiedOrganicOrAi: 1 });
    expect(laneForPath(landingPath)).toBe(c.lane);
  });

  it("small non-real-estate businesses and paid traffic do not count", () => {
    const data = qualificationFormSchema.parse({
      firstName: "A",
      email: "a@b.co",
      workflow: "",
      firmType: "other",
      companySize: "1-9",
    });
    const params = buildAttributionParams({
      firstTouch: buildFirstTouch({
        url: "https://prestyj.com/custom-ai-agents?utm_source=google&utm_medium=cpc",
        now: new Date(),
      }),
      lastCta: null,
      qualification: { firmType: data.firmType, companySize: data.companySize ?? null },
      service: "custom-ai-agents",
    });
    expect(params[ATTRIBUTION_KEYS.qualified]).toBe("no");
    const agg = aggregateBookings(
      [{ status: "accepted", createdAt: "2026-11-01T00:00:00Z", metadata: params }],
      { start: "2026-10-06", end: "2026-11-02" },
    );
    expect(agg.qualifiedDemosFromOrganicOrAi).toBe(0);
    expect(agg.byLane.get("custom-builds")?.demos).toBe(1);
  });

  it("requires company size for other businesses and ignores unknown services", () => {
    expect(
      qualificationFormSchema.safeParse({
        firstName: "A",
        email: "a@b.co",
        workflow: "",
        firmType: "other",
      }).success,
    ).toBe(false);
    expect(getBookableService("<script>")).toBeNull();
    expect(getBookableService(["custom-ai-agents"])).toBeNull();
    expect(laneForPath("/connectors/hubspot")).toBe("connectors");
    expect(laneForPath("/blog/x")).toBe("real-estate");
  });
});
