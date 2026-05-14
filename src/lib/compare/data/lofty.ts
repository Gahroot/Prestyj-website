import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const loftyCompareData: ComparePageData = createComparePage({
  slug: "lofty-vs-prestyj",
  competitorName: "Lofty",
  hero: {
    badge: "Lofty vs Prestyj",
    title: "Lofty vs Prestyj",
    titleAccent: "Which AI Platform Converts More?",
    subtitle:
      "Lofty combines CRM, basic AI, and marketing in one platform. Prestyj delivers more advanced AI agents, a simpler user experience, and higher lead conversion rates.",
    description: "",
  },
  stats: [
    {
      value: "$499+",
      label: "Lofty starting monthly cost",
    },
    {
      value: "Complex",
      label: "Lofty learning curve",
    },
    {
      value: "Basic AI",
      label: "Lofty AI capabilities",
    },
    {
      value: "Advanced AI",
      label: "Prestyj agent technology",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month (all-in-one, transparent)",
      features: [
        { text: "Advanced AI agents included", included: true },
        { text: "Simple, intuitive UX", included: true },
        { text: "Higher conversion rates out of the box", included: true },
        { text: "Dedicated onboarding and support", included: true },
      ],
    },
    competitor: {
      price: "$499+",
      priceSubtext: "/month with complex tiered pricing",
      features: [
        { text: "CRM + basic AI + marketing included", included: true },
        { text: "Steep learning curve for teams", included: false },
        { text: "AI is basic compared to dedicated platforms", included: false },
        { text: "Feature bloat can overwhelm users", included: false },
      ],
    },
  },
  features: [
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(
      STANDARD_FEATURES.AI_VOICE,
      false,
      "Lofty has limited voice AI capabilities",
    ),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
    buildCompareFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
    {
      feature: "Advanced AI Agents",
      prestyj: true,
      competitor: false,
      note: "Lofty's AI is basic rule-based; Prestyj uses advanced conversational AI",
    },
    {
      feature: "Simple UX / Low Learning Curve",
      prestyj: true,
      competitor: false,
      note: "Lofty has a steep learning curve with feature-heavy interface",
    },
    buildCompareFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
  ],
  whySwitch: {
    title: "Why Agents Switch from Lofty to Prestyj",
    description: "Key reasons real estate professionals choose Prestyj over Lofty",
    reasons: [
      {
        icon: "Brain",
        title: "More Advanced AI Agents",
        description:
          "Lofty's AI is basic and rule-based. Prestyj's AI agents handle complex conversations, objections, and multi-turn dialogues that actually convert leads.",
      },
      {
        icon: "Zap",
        title: "Simpler UX, Faster Results",
        description:
          "Lofty's feature-heavy interface creates a steep learning curve. Prestyj is designed for simplicity—your team is productive from day one.",
      },
      {
        icon: "TrendingUp",
        title: "Better Conversion Rates",
        description:
          "Prestyj is built specifically for lead conversion. Every feature, workflow, and AI conversation is optimized to turn more leads into appointments and closings.",
      },
      {
        icon: "DollarSign",
        title: "Transparent Pricing",
        description:
          "Lofty's complex tiered pricing makes it hard to predict costs. Prestyj offers straightforward pricing with everything included—no surprise upgrades.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Lofty Alternative",
      description: "Full alternative analysis for Lofty users",
      href: "/alternatives/lofty",
      linkText: "View analysis",
    },
    {
      title: "Best for Real Estate Brokerages",
      description: "Why brokerages choose Prestyj for their operations",
      href: "/best-for/real-estate-brokerages",
      linkText: "Learn more",
    },
    {
      title: "See Real Results",
      description: "Case studies from agents using Prestyj",
      href: "/results",
      linkText: "View results",
    },
  ],
  cta: {
    title: "Ready to See Prestyj in Action?",
    description:
      "Book a personalized demo to see how Prestyj's advanced AI agents and simple UX can outperform your current platform.",
    buttonText: "Book a Demo",
    disclaimer: "No credit card required. See results in minutes.",
  },
});

export const loftyMetadata: CompareMetadata = {
  slug: "lofty-vs-prestyj",
  competitorName: "Lofty",
  title: "Lofty vs Prestyj | AI Real Estate Platform Comparison",
  description:
    "Compare Lofty CRM + basic AI vs Prestyj advanced AI-native platform. Lofty starts at $499/mo with a steep learning curve. Prestyj delivers simpler UX, better AI, and higher conversion.",
  keywords: [
    "Lofty alternative",
    "Lofty vs Prestyj",
    "Prestyj vs Lofty",
    "Lofty review",
    "Lofty pricing",
    "Lofty CRM alternative",
    "real estate AI platform comparison",
    "best AI real estate CRM",
    "Lofty competitor",
    "advanced AI real estate",
  ],
};
