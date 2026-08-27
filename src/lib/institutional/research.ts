export type ResearchArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
};

export const researchArticles: readonly ResearchArticle[] = [
  {
    slug: "ai-for-real-estate-investment-funds-exception-queues",
    category: "Portfolio intelligence",
    title: "Start with exception queues, not a chatbot",
    description:
      "A practical operating model for reconciling fund data, surfacing discrepancies, and routing controlled work.",
  },
  {
    slug: "ai-agents-real-estate-investment-funds",
    category: "Operating model",
    title: "Where AI agents belong inside a real estate investment fund",
    description:
      "A workflow test for deciding what to automate, what to leave in the system of record, and who must own release.",
  },
  {
    slug: "ai-assisted-quarter-end-close",
    category: "Fund operations",
    title: "An AI-assisted quarter-end close without a black box",
    description:
      "How to preserve transaction lineage, exception handling, and fund-accounting approval while reducing manual assembly.",
  },
  {
    slug: "explainable-distribution-waterfalls",
    category: "Fund operations",
    title: "A distribution waterfall should explain itself tier by tier",
    description:
      "What an agent can prepare, what the LPA still governs, and why reviewable math matters more than a fast answer.",
  },
  {
    slug: "lp-reporting-data-boundaries",
    category: "Investor relations",
    title: "The investor answer is only correct inside the right boundary",
    description: "Fund, investor, document, and side-letter scope for AI-assisted LP reporting.",
  },
  {
    slug: "evidence-led-real-estate-diligence",
    category: "Deal work",
    title: "Diligence is not done until the source survives the conclusion",
    description:
      "A practical evidence spine for VDR extraction, sponsor screening, conflicts, and committee materials.",
  },
  {
    slug: "reconciling-property-data-conflicts",
    category: "Portfolio intelligence",
    title: "When the model and property system disagree",
    description:
      "How to produce a point-in-time portfolio answer without averaging away the conflict.",
  },
  {
    slug: "ai-voice-agents-commercial-brokerage",
    category: "Brokerage operations",
    title: "What a brokerage voice agent must hand back to the broker",
    description:
      "Qualification, consent, transcript, routing, and the record required after an inbound call.",
  },
  {
    slug: "keep-the-system-of-record",
    category: "Operating model",
    title: "Keep the system of record. Automate the work above it.",
    description:
      "A safer deployment sequence for firms that cannot afford a replacement project disguised as an AI pilot.",
  },
] as const;
