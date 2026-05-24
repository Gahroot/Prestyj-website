/**
 * Registry of calculators that have a public iframe-embed surface at
 * /embed/calculator/[slug]. Each entry maps a public slug to its
 * canonical permalink and a human title used for embed metadata.
 *
 * Embeds are required to carry the "Powered by Prestyj" footer with a
 * link back to the permalink — that's the backlink mechanism.
 */

export interface EmbeddableCalculator {
  slug: string;
  title: string;
  description: string;
  permalink: string;
  recommendedHeight: number;
}

const SITE_URL = "https://prestyj.com";

export const embeddableCalculators: EmbeddableCalculator[] = [
  {
    slug: "ai-call-handling-roi",
    title: "AI Call Handling ROI Calculator",
    description:
      "Estimate the annual revenue lost to missed calls and the recoverable upside from an AI voice agent — by business type, call volume, and job value.",
    permalink: `${SITE_URL}/ai-call-handling-calculator`,
    recommendedHeight: 1400,
  },
  {
    slug: "batch-video-ad-roi",
    title: "Batch Video Ad ROI Calculator",
    description:
      "Model the cost-per-tested-angle and breakeven of a batch video ad program vs. agency, UGC, or in-house production.",
    permalink: `${SITE_URL}/batch-video-ad-roi-calculator`,
    recommendedHeight: 1600,
  },
  {
    slug: "cost-per-tested-angle",
    title: "Cost Per Tested Ad Angle Calculator",
    description:
      "Compare cost-per-tested-angle across UGC, agency, AI avatar tools, and Prestyj — the single metric that determines paid-social winners.",
    permalink: `${SITE_URL}/cost-per-tested-ad-angle-calculator`,
    recommendedHeight: 1700,
  },
];

export function findEmbeddableCalculator(slug: string): EmbeddableCalculator | undefined {
  return embeddableCalculators.find((c) => c.slug === slug);
}

export function getAllEmbeddableCalculatorSlugs(): string[] {
  return embeddableCalculators.map((c) => c.slug);
}
