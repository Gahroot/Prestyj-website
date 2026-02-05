import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const synthflow: AlternativePageContent = createAlternativePage({
  slug: "synthflow",
  type: "direct-competitor",
  competitor: {
    name: "Synthflow",
    shortName: "Synthflow",
    pricing: "$0.15-0.45/minute + platform fees",
    website: "https://synthflow.ai",
    description: "AI voice automation platform with workflow building",
  },
  meta: {
    title: "Synthflow Alternatives for Real Estate | Prestyj",
    description:
      "Looking for Synthflow alternatives? Compare Prestyj vs Synthflow for real estate AI voice agents. Done-for-you real estate training vs. DIY workflow building.",
    keywords: [
      "synthflow alternatives",
      "synthflow vs prestyj",
      "synthflow competitors",
      "AI voice automation",
      "real estate AI voice agents",
      "synthflow pricing",
    ],
  },
  hero: {
    badge: "Synthflow Alternative",
    subheadline:
      "Synthflow is a DIY voice automation platform. Prestyj is a done-for-you AI voice service trained specifically for real estate lead response.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Real Estate Knowledge",
        prestyj: "Built-in",
        competitor: "You build workflows",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Setup Required",
        prestyj: "Done-for-you",
        competitor: "DIY workflow building",
        note: "You design, test, and optimize conversation flows",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$0.15-0.45",
      period: "/minute",
      note: "+ platform subscription fees",
      pros: ["Highly customizable workflows", "Visual workflow builder"],
      cons: [
        "Per-minute billing adds up quickly",
        "Requires technical or workflow design skills",
        "No industry-specific knowledge included",
        "You're responsible for all testing and optimization",
        "Time-intensive to get production-ready",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Wrench",
      title: "Done-For-You vs. DIY",
      description:
        "Synthflow gives you tools to build yourself. Prestyj builds everything for you—scripts, voice training, CRM integration, testing.",
    },
    {
      icon: "Home",
      title: "Real Estate Expertise Built-In",
      description:
        "Synthflow is generic. Prestyj's AI already understands property types, market areas, qualification questions, and what makes real estate leads convert.",
    },
    {
      icon: "Clock",
      title: "Live in Days, Not Weeks",
      description:
        "Synthflow requires workflow design and testing cycles. Prestyj's real estate templates go live in 1-2 weeks with proven conversation flows.",
    },
    {
      icon: "DollarSign",
      title: "No Surprise Per-Minute Bills",
      description:
        "Synthflow's per-minute pricing scales with usage. Prestyj is one flat monthly fee—predictable regardless of call volume.",
    },
  ],
  whenCompetitorFits: [
    "You want complete control over conversation workflows",
    "You have time to invest in learning and building",
    "You need highly complex, non-standard call flows",
    "You enjoy DIY platform configuration",
  ],
  whenPrestyjFits: [
    "You want done-for-you implementation",
    "You need real estate-specific conversations",
    "You prefer predictable monthly pricing",
    "You don't have time for workflow building",
    "You want proven real estate results",
  ],
  relatedResources: [
    {
      href: "/alternatives/air-dot-ai",
      title: "Air.ai Alternatives",
      description: "Compare more AI voice platforms",
    },
    {
      href: "/alternatives/retell",
      title: "Retell AI Alternatives",
      description: "More voice AI comparisons",
    },
    {
      href: "/best-for/done-for-you-ai",
      title: "Done-For-You AI",
      description: "Why done-for-you beats DIY for most businesses",
    },
  ],
});
