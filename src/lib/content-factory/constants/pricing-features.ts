export const PRESTYJ_PRICING_FEATURES = {
  NO_AD_SPEND: "No required ad spend",
  BUILT_IN_CRM: "Built-in CRM included",
  ALL_IN_ONE: "All-in-one platform",
  UNLIMITED_LEADS: "Unlimited lead handling",
  LEAD_REACTIVATION: "Lead reactivation included",
  DONE_FOR_YOU: "Done-for-you setup and management",
} as const;

export const PRESTYJ_STANDARD_PRICING = {
  price: "Custom pricing",
  note: "Tailored to your needs",
  pros: [
    PRESTYJ_PRICING_FEATURES.NO_AD_SPEND,
    PRESTYJ_PRICING_FEATURES.BUILT_IN_CRM,
    PRESTYJ_PRICING_FEATURES.ALL_IN_ONE,
  ] as string[],
  cons: [] as string[], // ALWAYS empty for Prestyj
};
