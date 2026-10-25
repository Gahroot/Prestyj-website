import { describe, expect, it } from "vitest";

import {
  FIRST_TOUCH_STORAGE_KEY,
  buildAttributionParams,
  buildFirstTouch,
  captureFirstTouch,
  readFirstTouch,
  readLastCta,
  recordCtaClick,
  toCalMetadataConfig,
} from "@/lib/attribution/first-touch";
import { isQualified } from "@/lib/attribution/qualification";

function memoryStorage(): Pick<Storage, "getItem" | "setItem"> & { data: Map<string, string> } {
  const data = new Map<string, string>();
  return {
    data,
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => void data.set(key, value),
  };
}

const now = new Date("2026-10-25T12:00:00Z");

describe("buildFirstTouch", () => {
  it("captures path, referrer host, UTMs and channel", () => {
    const touch = buildFirstTouch({
      url: "https://prestyj.com/blog/ai-assisted-quarter-end-close?utm_source=newsletter&utm_medium=email&utm_campaign=q4",
      referrer: "https://www.linkedin.com/feed/",
      now,
    });
    expect(touch).toEqual({
      landingPath: "/blog/ai-assisted-quarter-end-close",
      channel: "email",
      referrerHost: "linkedin.com",
      utmSource: "newsletter",
      utmMedium: "email",
      utmCampaign: "q4",
      at: now.toISOString(),
    });
  });

  it("classifies AI and organic referrers and ignores own-host referrers", () => {
    expect(
      buildFirstTouch({ url: "https://prestyj.com/", referrer: "https://chatgpt.com/", now })
        .channel,
    ).toBe("ai");
    expect(
      buildFirstTouch({ url: "https://prestyj.com/", referrer: "https://www.google.com/", now })
        .channel,
    ).toBe("organic");
    const internal = buildFirstTouch({
      url: "https://prestyj.com/x",
      referrer: "https://prestyj.com/",
      now,
    });
    expect(internal.channel).toBe("direct");
    expect(internal.referrerHost).toBeUndefined();
  });
});

describe("captureFirstTouch", () => {
  it("never overwrites an existing first touch", () => {
    const storage = memoryStorage();
    const first = buildFirstTouch({
      url: "https://prestyj.com/a",
      referrer: "https://perplexity.ai/",
      now,
    });
    const second = buildFirstTouch({ url: "https://prestyj.com/b", referrer: null, now });
    captureFirstTouch(storage, first);
    expect(captureFirstTouch(storage, second)).toEqual(first);
    expect(readFirstTouch(storage)?.landingPath).toBe("/a");
  });

  it("replaces corrupt stored data", () => {
    const storage = memoryStorage();
    storage.data.set(FIRST_TOUCH_STORAGE_KEY, "{not json");
    const touch = buildFirstTouch({ url: "https://prestyj.com/c", referrer: null, now });
    expect(captureFirstTouch(storage, touch).landingPath).toBe("/c");
  });
});

describe("recordCtaClick", () => {
  it("keeps the last CTA clicked", () => {
    const storage = memoryStorage();
    recordCtaClick(storage, { id: "article-inline:x", variant: "a" });
    recordCtaClick(storage, { id: "article-end:x", variant: "b" });
    expect(readLastCta(storage)).toEqual({ id: "article-end:x", variant: "b" });
    recordCtaClick(storage, { id: "link:/pricing" });
    expect(readLastCta(storage)).toEqual({ id: "link:/pricing" });
  });
});

describe("buildAttributionParams", () => {
  it("maps every value to its pj_* key and omits absent values", () => {
    const params = buildAttributionParams({
      firstTouch: buildFirstTouch({
        url: "https://prestyj.com/blog/x",
        referrer: "https://chatgpt.com/",
        now,
      }),
      lastCta: { id: "article-end:x", variant: "b" },
      qualification: { firmType: "fund", aumBand: "1b-5b" },
    });
    expect(params).toEqual({
      pj_landing: "/blog/x",
      pj_channel: "ai",
      pj_ref: "chatgpt.com",
      pj_cta: "article-end:x",
      pj_cta_variant: "b",
      pj_firm_type: "fund",
      pj_aum_band: "1b-5b",
      pj_qualified: "yes",
    });
    expect(Object.values(params)).not.toContain("undefined");
  });

  it("produces Cal.com metadata[...] config keys", () => {
    expect(toCalMetadataConfig({ pj_channel: "ai", pj_qualified: "no" })).toEqual({
      "metadata[pj_channel]": "ai",
      "metadata[pj_qualified]": "no",
    });
  });
});

describe("isQualified", () => {
  it("applies the ICP rule", () => {
    expect(isQualified("fund", "500m-1b")).toBe(true);
    expect(isQualified("fund", "5b-plus")).toBe(true);
    expect(isQualified("fund", "under-500m")).toBe(false);
    expect(isQualified("fund", null)).toBe(false);
    expect(isQualified("brokerage")).toBe(true);
    expect(isQualified("owner-operator")).toBe(true);
    expect(isQualified("other")).toBe(false);
  });
});
