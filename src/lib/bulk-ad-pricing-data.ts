/**
 * Shared pricing data for one-time batch video ad packages.
 *
 * Used by /bulk-video-ad-pricing (the canonical pricing page) and the
 * free-ads FAQ "Can I buy more ads?" answer so the two surfaces never drift.
 */

export interface BulkAdPricingTier {
  readonly name: string;
  readonly price: string;
  readonly tagline: string;
  readonly popular: boolean;
  readonly features: readonly string[];
}

export const bulkAdPricingTiers: readonly BulkAdPricingTier[] = [
  {
    name: "300 Ads",
    price: "$1,497",
    tagline: "Test your first angles",
    popular: false,
    features: [
      "300 unique vertical video ads",
      "3 customer problems each ad speaks to (e.g., price, speed, trust)",
      "Hook, body & CTA variations",
      "1–2 business day turnaround",
      "Error revisions included",
    ],
  },
  {
    name: "500 Ads",
    price: "$2,497",
    tagline: "The sweet spot",
    popular: true,
    features: [
      "500 unique vertical video ads",
      "5 customer problems each ad speaks to (e.g., price, speed, trust)",
      "Hook, body & CTA variations",
      "1–2 business day turnaround",
      "Error revisions included",
      "Priority queue",
    ],
  },
  {
    name: "1,000 Ads",
    price: "$3,997",
    tagline: "Go wide, find winners fast",
    popular: false,
    features: [
      "1,000 unique vertical video ads",
      "10 customer problems each ad speaks to (e.g., price, speed, trust)",
      "Hook, body & CTA variations",
      "1–2 business day turnaround",
      "Error revisions included",
      "Priority queue",
      "Full-spectrum angle coverage",
    ],
  },
];
