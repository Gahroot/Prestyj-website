/**
 * Shared pricing data for one-time batch video ad packages.
 *
 * Used by /bulk-video-ad-pricing (the canonical pricing page) and the
 * free-ads FAQ "Can I buy more ads?" answer so the two surfaces never drift.
 */

import type { BatchTierId } from "./batch-tiers";

export interface BulkAdPricingTier {
  readonly tierId: BatchTierId;
  readonly name: string;
  readonly price: string;
  readonly costPerAd: string;
  readonly ctaLabel: string;
  readonly tagline: string;
  readonly popular: boolean;
  readonly features: readonly string[];
}

export const bulkAdPricingTiers: readonly BulkAdPricingTier[] = [
  {
    tierId: "starter",
    name: "100 Ads",
    price: "$497",
    costPerAd: "$4.97",
    ctaLabel: "Get 100 ads — $497",
    tagline: "Sample the system",
    popular: false,
    features: [
      "100 unique vertical video ads",
      "1 customer problem tested",
      "Hook, body & CTA variations",
      "1–2 business day turnaround",
      "Error revisions included",
    ],
  },
  {
    tierId: "minimum",
    name: "300 Ads",
    price: "$1,497",
    costPerAd: "$4.99",
    ctaLabel: "Get 300 ads — $1,497",
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
    tierId: "pro",
    name: "500 Ads",
    price: "$2,497",
    costPerAd: "$4.99",
    ctaLabel: "Get 500 ads — $2,497",
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
    tierId: "max",
    name: "1,000 Ads",
    price: "$3,997",
    costPerAd: "$4.00",
    ctaLabel: "Get 1,000 ads — $3,997",
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
