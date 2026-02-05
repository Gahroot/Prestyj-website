import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const sierraInteractive: AlternativePageContent = createAlternativePage({
  slug: "sierra-interactive",
  type: "integration-partner",
  competitor: {
    name: "Sierra Interactive",
    shortName: "Sierra Interactive",
    pricing: "$749-1,499/mo + ad spend",
    website: "https://sierrainteractive.com",
    description: "Real estate marketing platform with lead generation and CRM",
  },
  meta: {
    title: "Sierra Interactive Alternatives for AI Lead Response | Prestyj",
    description:
      "Looking for Sierra Interactive alternatives? Compare Prestyj vs Sierra for AI voice lead response. Done-for-you implementation, integrates with your CRM, no ad spend required.",
    keywords: [
      "sierra interactive alternatives",
      "sierra interactive vs prestyj",
      "sierra interactive competitors",
      "real estate lead generation alternatives",
      "AI lead response platform",
    ],
  },
  hero: {
    badge: "Sierra Interactive Alternative",
    subheadline:
      "Sierra Interactive is a powerful lead generation and CRM platform. Prestyj is the AI voice layer that responds to leads instantly—whether or not you use Sierra.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Prestyj integrates with Sierra and other CRMs"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Required Ad Spend",
        prestyj: false,
        competitor: true,
        note: "Sierra requires minimum ad spend commitments",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$749-1,499",
      period: "/month",
      note: "+ required ad spend (typically $2K-10K/mo)",
      pros: ["Excellent lead generation", "Strong SEO tools"],
      cons: [
        "Significant ad spend required on top of platform fees",
        "Complex pricing with multiple tiers",
        "AI features are secondary to lead gen",
        "Voice AI not a core offering",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "Voice AI That Actually Converts",
      description:
        "Sierra focuses on lead gen and chat. Prestyj provides voice AI that picks up the phone and conversations—converting 3-5x better than text alone.",
    },
    {
      icon: "DollarSign",
      title: "No Ad Spend Commitments",
      description:
        "Sierra requires thousands in monthly ad spend. Prestyj works with leads from any source—your existing channels work fine.",
    },
    {
      icon: "Zap",
      title: "Complements Your Stack",
      description:
        "Already using Sierra? Prestyj integrates to provide instant voice response. You don't have to choose one or the other.",
    },
    {
      icon: "Users",
      title: "Done-For-You Implementation",
      description:
      "Sierra requires significant configuration. Prestyj handles setup, integration, voice training, and optimization—we do the work.",
    },
  ],
  whenCompetitorFits: [
    "You need comprehensive lead generation services",
    "You want website and SEO tools included",
    "You have large ad budgets and want managed spend",
    "You need full marketing + CRM solution",
  ],
  whenPrestyjFits: [
    "You have leads but response time is the bottleneck",
    "You want voice AI, not just chat",
    "You don't want to commit to minimum ad spend",
    "You need instant 24/7 lead response",
    "You want done-for-you vs. DIY configuration",
  ],
  relatedResources: [
    {
      href: "/alternatives/human-isa",
      title: "AI vs Human ISA",
      description: "Compare AI voice agents to inside sales teams",
    },
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate Teams",
      description: "How Prestyj serves teams and brokerages",
    },
    {
      href: "/blog/unit-economics-ai-lead-response",
      title: "AI Lead Response ROI",
      description: "Financial analysis of AI vs human teams",
    },
  ],
});
