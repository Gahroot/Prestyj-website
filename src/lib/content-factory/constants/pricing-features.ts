import { pricingTiers } from "@/lib/pricing-data";

const starterTier = pricingTiers.find((tier) => tier.id === "starter");

if (!starterTier) {
  throw new Error("pricing-data.ts: starter tier missing — required for canonical pricing");
}

/**
 * Canonical Prestyj entry price. Derived from `pricing-data.ts` so the
 * marketing pages, comparison pages, and pricing page never drift apart.
 *
 * Format: "$1,997" — pair with PRESTYJ_PRICE_PERIOD for full presentation.
 */
export const PRESTYJ_PRICE_VALUE = `$${starterTier.monthlyPrice.toLocaleString("en-US")}`;
export const PRESTYJ_PRICE_PERIOD = "/mo";
export const PRESTYJ_PRICE_DISPLAY = `${PRESTYJ_PRICE_VALUE}${PRESTYJ_PRICE_PERIOD}`;
export const PRESTYJ_PRICE_STARTING_AT = `Starting at ${PRESTYJ_PRICE_DISPLAY}`;
export const PRESTYJ_PRICE_NOTE = `${PRESTYJ_PRICE_VALUE}/mo Starter · $${starterTier.setupFee.toLocaleString("en-US")} setup · ad budget + AI agents included`;

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

// No `cons` field here. If a Prestyj plan has real trade-offs on a given page,
// the page passes `prestyjPricingOverrides.cons` explicitly — don't hide them.
export const PRESTYJ_STANDARD_PRICING = {
  price: PRESTYJ_PRICE_STARTING_AT,
  note: PRESTYJ_PRICE_NOTE,
  pros: [
    PRESTYJ_PRICING_FEATURES.AD_MANAGEMENT,
    PRESTYJ_PRICING_FEATURES.BATCH_ADS,
    PRESTYJ_PRICING_FEATURES.CRM_SYNC,
  ] as string[],
};

/**
 * Canonical Prestyj pricing card for the `ComparePageData.pricing.prestyj`
 * slot used by /compare/* pages. Keeps the price/subtext consistent while
 * letting each page customize its feature bullets.
 */
export const PRESTYJ_COMPARE_PRICE = {
  price: PRESTYJ_PRICE_VALUE,
  priceSubtext: `${PRESTYJ_PRICE_PERIOD} Starter · $${starterTier.setupFee.toLocaleString("en-US")} setup · ad budget + AI agents included`,
};
