import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const eliseai: AlternativePageContent = createAlternativePage({
  slug: "eliseai",
  type: "direct-competitor",
  competitor: {
    name: "EliseAI",
    shortName: "EliseAI",
    pricing: "Custom pricing (typically $2K-5K/mo)",
    website: "https://eliseai.com",
    description: "AI leasing assistant and workflow automation for multifamily",
  },
  meta: {
    title: "EliseAI Alternatives for Multifamily AI Leasing | Prestyj",
    description:
      "Looking for EliseAI alternatives? Compare Prestyj vs EliseAI for multifamily AI leasing. Done-for-you implementation, transparent pricing, and voice-first lead response.",
    keywords: [
      "eliseai alternatives",
      "eliseai vs prestyj",
      "multifamily AI leasing alternatives",
      "apartment AI assistant",
      "eliseai competitors",
      "multifamily automation",
    ],
  },
  hero: {
    badge: "EliseAI Alternative",
    subheadline:
      "EliseAI provides comprehensive multifamily automation. Prestyj provides instant AI voice response for leasing prospects—simpler to implement and more focused on lead conversion.",
  },
  industryStats: [
    {
      stat: "85%",
      description: "of after-hours leasing calls go unanswered",
    },
    {
      stat: "21x",
      description: "higher conversion when leads are reached in 5 minutes vs 30",
    },
    {
      stat: "3-5x",
      description: "higher conversion with voice vs text alone",
    },
  ],
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Multifamily Focus",
        prestyj: true,
        competitor: true,
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Implementation Timeline",
        prestyj: "1-2 weeks",
        competitor: "2-3 months",
        note: "EliseAI requires extensive workflow configuration",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$2,000-5,000",
      period: "/month",
      note: "Enterprise pricing, often requires annual commitment",
      pros: ["Deep multifamily features", "Workflow automation", "PMS integrations"],
      cons: [
        "Expensive for smaller portfolios",
        "Long implementation timeline",
        "Complex platform requires training",
        "Pricing often opaque/custom",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Clock",
      title: "Live in Weeks, Not Months",
      description:
        "EliseAI implementations take 2-3 months. Prestyj goes live in 1-2 weeks with done-for-you setup—start capturing leads faster.",
    },
    {
      icon: "DollarSign",
      title: "Transparent Pricing",
      description:
        "EliseAI's custom pricing is opaque. Prestyj offers clear, predictable pricing you can understand without a sales cycle.",
    },
    {
      icon: "Phone",
      title: "Voice-First Leasing Response",
      description:
        "EliseAI handles many channels. Prestyj focuses on voice—where 70% of leasing prospects prefer to engage.",
    },
    {
      icon: "Zap",
      title: "Simpler Implementation",
      description:
        "EliseAI is a complex platform. Prestyj integrates quickly with your existing PMS and CRM—minimal disruption to operations.",
    },
  ],
  whenCompetitorFits: [
    "You need extensive workflow automation beyond lead response",
    "You're a large enterprise portfolio",
    "You have long implementation timelines",
    "You need deep PMS workflow integration",
  ],
  whenPrestyjFits: [
    "You want faster implementation",
    "Lead response is your priority",
    "You prefer transparent pricing",
    "You need voice AI focus",
    "You want done-for-you vs complex platform",
  ],
  relatedResources: [
    {
      href: "/alternatives/betterbot",
      title: "BetterBot Alternatives",
      description: "Compare more multifamily AI platforms",
    },
    {
      href: "/best-for/property-managers",
      title: "Built for Property Managers",
      description: "How Prestyj serves multifamily properties",
    },
    {
      href: "/blog/done-for-you-ai-agents-guide",
      title: "Done-For-You vs DIY AI",
      description: "Why done-for-you wins for most teams",
    },
  ],
});
