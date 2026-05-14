import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const followUpBossCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-follow-up-boss",
  competitorName: "Follow Up Boss",
  hero: {
    badge: "Follow Up Boss vs Prestyj",
    title: "Follow Up Boss vs Prestyj",
    titleAccent: "CRM vs AI-Native Platform",
    subtitle:
      "Follow Up Boss is a powerful CRM, but it has no native AI. Prestyj combines a built-in CRM with advanced AI agents that engage, qualify, and convert leads automatically.",
    description: "",
  },
  stats: [
    {
      value: "CRM-Only",
      label: "Follow Up Boss core product",
    },
    {
      value: "$69",
      label: "per user/mo + AI tool costs",
    },
    {
      value: "3rd Party",
      label: "AI integrations required",
    },
    {
      value: "Native AI",
      label: "Prestyj built-in agents",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month (all-in-one platform)",
      features: [
        { text: "Native AI agents built-in", included: true },
        { text: "Built-in CRM included", included: true },
        { text: "No additional AI tool costs", included: true },
        { text: "Marketing automation included", included: true },
      ],
    },
    competitor: {
      price: "$69",
      priceSubtext: "/user/mo + separate AI tool costs",
      features: [
        { text: "Excellent CRM for lead tracking", included: true },
        { text: "Strong third-party integrations", included: true },
        { text: "Requires 3rd party AI tools for automation", included: false },
        { text: "Additional costs for AI voice, text, email", included: false },
      ],
    },
  },
  features: [
    buildCompareFeature(
      STANDARD_FEATURES.AI_TEXT,
      false,
      "Requires 3rd party integration like Structurely or Ylopo",
    ),
    buildCompareFeature(
      STANDARD_FEATURES.AI_VOICE,
      false,
      "Requires separate AI voice tool like Air.ai or similar",
    ),
    buildCompareFeature(
      STANDARD_FEATURES.RESPONSE_24_7,
      false,
      "Only with additional AI tool integrations",
    ),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      true,
      "FUB has excellent CRM; Prestyj also has built-in CRM",
    ),
    buildCompareFeature(
      STANDARD_FEATURES.APPOINTMENT_BOOKING,
      false,
      "Requires calendar + AI tool stack",
    ),
    buildCompareFeature(
      STANDARD_FEATURES.LEAD_QUALIFICATION,
      false,
      "Must integrate with external AI qualification tool",
    ),
    {
      feature: "Native AI Agents",
      prestyj: true,
      competitor: false,
      note: "FUB relies entirely on third-party integrations for AI functionality",
    },
    {
      feature: "All-in-One Platform",
      prestyj: true,
      competitor: false,
      note: "FUB is CRM-only; AI, marketing, and voice require separate tools",
    },
    buildCompareFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
  ],
  whySwitch: {
    title: "Why Teams Switch from Follow Up Boss to Prestyj",
    description: "Key reasons real estate professionals choose Prestyj over Follow Up Boss",
    reasons: [
      {
        icon: "Brain",
        title: "Native AI Agents Built-In",
        description:
          "Follow Up Boss requires you to buy, integrate, and manage separate AI tools. Prestyj's AI agents are native—text, voice, and email AI work out of the box.",
      },
      {
        icon: "DollarSign",
        title: "Lower Total Cost of Ownership",
        description:
          "At $69/user/mo plus separate AI tool subscriptions, FUB stacks get expensive fast. Prestyj's $1,997/mo replaces CRM + AI + marketing tools for your entire team.",
      },
      {
        icon: "Puzzle",
        title: "No Integration Headaches",
        description:
          "Stop managing API connections between your CRM and 3-4 AI vendors. Prestyj is one platform where everything talks to everything natively.",
      },
      {
        icon: "Zap",
        title: "Faster Time to Value",
        description:
          "Setting up FUB with AI integrations takes weeks. Prestyj is configured and converting leads within days of onboarding.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Follow Up Boss Alternative",
      description: "Full alternative analysis for Follow Up Boss users",
      href: "/alternatives/follow-up-boss",
      linkText: "View analysis",
    },
    {
      title: "Best for Real Estate Teams",
      description: "Why teams choose Prestyj for their operations",
      href: "/best-for/real-estate-teams",
      linkText: "Learn more",
    },
    {
      title: "See Real Results",
      description: "Case studies from teams using Prestyj",
      href: "/results",
      linkText: "View results",
    },
  ],
  cta: {
    title: "Ready to See Prestyj in Action?",
    description:
      "Book a personalized demo to see how Prestyj's native AI agents can replace your entire CRM + AI tool stack.",
    buttonText: "Book a Demo",
    disclaimer: "No credit card required. See results in minutes.",
  },
});

export const followUpBossMetadata: CompareMetadata = {
  slug: "prestyj-vs-follow-up-boss",
  competitorName: "Follow Up Boss",
  title: "Follow Up Boss vs Prestyj | CRM vs AI-Native Platform",
  description:
    "Compare Follow Up Boss CRM vs Prestyj AI-native platform. FUB is $69/user/mo with no native AI and requires 3rd party tools. Prestyj has built-in AI agents, CRM, and marketing automation.",
  keywords: [
    "Follow Up Boss alternative",
    "Follow Up Boss vs Prestyj",
    "Prestyj vs Follow Up Boss",
    "Follow Up Boss review",
    "Follow Up Boss pricing",
    "CRM with AI for real estate",
    "real estate CRM comparison",
    "best AI CRM for real estate",
    "Follow Up Boss competitor",
    "AI native real estate platform",
  ],
};
