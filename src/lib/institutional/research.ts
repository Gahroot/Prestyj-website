import type { CapabilitySlug } from "@/lib/institutional/capabilities";

export type ResearchArticle = {
  capabilities: readonly CapabilitySlug[];
  topics: readonly string[];
  slug: string;
  category: string;
  title: string;
  description: string;
};

export const researchArticles: readonly ResearchArticle[] = [
  {
    slug: "ai-for-real-estate-investment-funds-exception-queues",
    capabilities: ["portfolio-intelligence"],
    topics: ["exceptions", "source-lineage"],
    category: "Portfolio intelligence",
    title: "Start with exception queues, not a chatbot",
    description:
      "A practical operating model for reconciling fund data, surfacing discrepancies, and routing controlled work.",
  },
  {
    slug: "ai-agents-real-estate-investment-funds",
    capabilities: [
      "deal-diligence",
      "fund-operations",
      "investor-reporting",
      "portfolio-intelligence",
      "origination",
      "listing-media",
    ],
    topics: ["review-controls", "integration"],
    category: "Operating model",
    title: "Where AI agents belong inside a real estate investment fund",
    description:
      "A workflow test for deciding what to automate, what to leave in the system of record, and who must own release.",
  },
  {
    slug: "ai-assisted-quarter-end-close",
    capabilities: ["fund-operations"],
    topics: ["source-lineage", "review-controls"],
    category: "Fund operations",
    title: "An AI-assisted quarter-end close without a black box",
    description:
      "How to preserve transaction lineage, exception handling, and fund-accounting approval while reducing manual assembly.",
  },
  {
    slug: "explainable-distribution-waterfalls",
    capabilities: ["fund-operations"],
    topics: ["source-lineage", "review-controls"],
    category: "Fund operations",
    title: "A distribution waterfall should explain itself tier by tier",
    description:
      "What an agent can prepare, what the LPA still governs, and why reviewable math matters more than a fast answer.",
  },
  {
    slug: "lp-reporting-data-boundaries",
    capabilities: ["investor-reporting"],
    topics: ["access-boundaries", "review-controls"],
    category: "Investor relations",
    title: "The investor answer is only correct inside the right boundary",
    description: "Fund, investor, document, and side-letter scope for AI-assisted LP reporting.",
  },
  {
    slug: "evidence-led-real-estate-diligence",
    capabilities: ["deal-diligence"],
    topics: ["source-lineage", "exceptions"],
    category: "Deal work",
    title: "Diligence is not done until the source survives the conclusion",
    description:
      "A practical evidence spine for VDR extraction, sponsor screening, conflicts, and committee materials.",
  },
  {
    slug: "reconciling-property-data-conflicts",
    capabilities: ["portfolio-intelligence"],
    topics: ["exceptions", "source-lineage"],
    category: "Portfolio intelligence",
    title: "When the model and property system disagree",
    description:
      "How to produce a point-in-time portfolio answer without averaging away the conflict.",
  },
  {
    slug: "ai-voice-agents-commercial-brokerage",
    capabilities: ["origination"],
    topics: ["handoff", "access-boundaries"],
    category: "Brokerage operations",
    title: "What a brokerage voice agent must hand back to the broker",
    description:
      "Qualification, consent, transcript, routing, and the record required after an inbound call.",
  },
  {
    slug: "keep-the-system-of-record",
    capabilities: [
      "deal-diligence",
      "fund-operations",
      "investor-reporting",
      "portfolio-intelligence",
      "origination",
      "listing-media",
    ],
    topics: ["review-controls", "integration"],
    category: "Operating model",
    title: "Keep the system of record. Automate the work above it.",
    description:
      "A safer deployment sequence for firms that cannot afford a replacement project disguised as an AI pilot.",
  },
] as const;

export function getCapabilityArticles(capability: CapabilitySlug): readonly ResearchArticle[] {
  return researchArticles.filter((article) => article.capabilities.includes(capability));
}

export function getRelatedArticles(slug: string, limit = 3): readonly ResearchArticle[] {
  const current = researchArticles.find((article) => article.slug === slug);
  if (!current) return [];
  return researchArticles
    .filter((article) => article.slug !== slug)
    .map((article) => ({
      article,
      score:
        (article.category === current.category ? 10 : 0) +
        article.capabilities.filter((capability) => current.capabilities.includes(capability))
          .length *
          2 +
        article.topics.filter((topic) => current.topics.includes(topic)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.article.slug.localeCompare(b.article.slug))
    .slice(0, Math.max(0, limit))
    .map(({ article }) => article);
}
