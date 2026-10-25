/**
 * Booking-metadata and GA4 param keys. Mirrors ATTRIBUTION_KEYS in
 * scripts/growth-engine/shared/contracts.ts (copied so the Next build never imports
 * from scripts/). keys.test.ts asserts both stay identical.
 */
export const ATTRIBUTION_KEYS = {
  landingPath: "pj_landing",
  channel: "pj_channel",
  referrerHost: "pj_ref",
  utmSource: "pj_utm_source",
  utmMedium: "pj_utm_medium",
  utmCampaign: "pj_utm_campaign",
  ctaId: "pj_cta",
  ctaVariant: "pj_cta_variant",
  firmType: "pj_firm_type",
  aumBand: "pj_aum_band",
  qualified: "pj_qualified",
} as const;
export type AttributionKey = (typeof ATTRIBUTION_KEYS)[keyof typeof ATTRIBUTION_KEYS];
