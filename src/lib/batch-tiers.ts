export type BatchTierId = "minimum" | "pro" | "max";

export type BatchTier = {
  id: BatchTierId;
  name: string;
  tagline: string;
  priceLabel: string;
  priceCents: number;
  adCount: number;
  painPoints: number;
  highlights: string[];
  popular?: boolean;
};

export const BATCH_TIERS: Record<BatchTierId, BatchTier> = {
  minimum: {
    id: "minimum",
    name: "Minimum",
    tagline: "Test your first angles",
    priceLabel: "$1,497",
    priceCents: 149700,
    adCount: 300,
    painPoints: 3,
    highlights: [
      "300 unique ad scripts",
      "3 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
      "Error revisions included",
    ],
  },
  pro: {
    id: "pro",
    name: "Pro",
    tagline: "The sweet spot",
    priceLabel: "$2,497",
    priceCents: 249700,
    adCount: 500,
    painPoints: 5,
    popular: true,
    highlights: [
      "500 unique ad scripts",
      "5 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
      "Error revisions included",
      "Priority queue",
    ],
  },
  max: {
    id: "max",
    name: "Max",
    tagline: "Go wide, find winners fast",
    priceLabel: "$3,997",
    priceCents: 399700,
    adCount: 1000,
    painPoints: 10,
    highlights: [
      "1000 unique ad scripts",
      "10 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
      "Error revisions included",
      "Priority queue",
      "Full-spectrum angle coverage",
    ],
  },
};

export const BATCH_TIER_LIST: BatchTier[] = [
  BATCH_TIERS.minimum,
  BATCH_TIERS.pro,
  BATCH_TIERS.max,
];

export function getBatchTierPriceId(id: BatchTierId): string {
  switch (id) {
    case "minimum":
      return process.env.STRIPE_PRICE_MINIMUM ?? "";
    case "pro":
      return process.env.STRIPE_PRICE_PRO ?? "";
    case "max":
      return process.env.STRIPE_PRICE_MAX ?? "";
  }
}

export function getBatchTierByPriceId(priceId: string): BatchTier | null {
  if (priceId === process.env.STRIPE_PRICE_MINIMUM) return BATCH_TIERS.minimum;
  if (priceId === process.env.STRIPE_PRICE_PRO) return BATCH_TIERS.pro;
  if (priceId === process.env.STRIPE_PRICE_MAX) return BATCH_TIERS.max;
  return null;
}

export function isBatchTierId(value: unknown): value is BatchTierId {
  return value === "minimum" || value === "pro" || value === "max";
}
