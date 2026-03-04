export const PRESTYJ_PRICING_FEATURES = {
  AD_MANAGEMENT: "Done-for-you ad management",
  AD_BUDGET: "Ad budget included in plan",
  BATCH_ADS: "Batch video ads",
  LANDING_PAGE: "Conversion-optimized landing page",
  FULL_WEBSITE: "Full business website",
  CRM_SYNC: "CRM Sync",
  AI_CHAT_TEXT: "AI Chat & Text Agent",
  AI_VOICE: "AI Voice Agent",
  AI_RECEPTIONIST: "AI Receptionist",
  LEAD_REACTIVATION: "Lead reactivation included",
} as const;

export const PRESTYJ_STANDARD_PRICING = {
  price: "Starting at $1,997/mo",
  note: "Setup fee + monthly. Ad budget included.",
  pros: [
    PRESTYJ_PRICING_FEATURES.AD_MANAGEMENT,
    PRESTYJ_PRICING_FEATURES.BATCH_ADS,
    PRESTYJ_PRICING_FEATURES.CRM_SYNC,
  ] as string[],
  cons: [] as string[], // ALWAYS empty for Prestyj
};
