import type { ComparePageData, CompareMetadata } from "../types";
import {
  createComparePage,
  buildCompareFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const alannaAiCompareData: ComparePageData = createComparePage({
  slug: "alanna-ai-vs-prestyj",
  competitorName: "Alanna.ai",
  hero: {
    badge: "Alanna.ai vs Prestyj",
    title: "Alanna.ai vs Prestyj",
    titleAccent: "Title AI vs Full Conversion Platform",
    subtitle:
      "Alanna.ai provides text-based AI for title companies. Prestyj delivers voice + text + email AI that works for title companies AND every other real estate vertical.",
    description: "",
  },
  stats: [
    {
      value: "Custom",
      label: "Alanna.ai pricing",
    },
    {
      value: "Text Only",
      label: "Alanna.ai channel",
    },
    {
      value: "Title Only",
      label: "Alanna.ai industry focus",
    },
    {
      value: "Voice + Text + Email",
      label: "Prestyj multi-channel AI",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month (multi-channel AI platform)",
      features: [
        { text: "Voice + text + email AI included", included: true },
        { text: "Works for title AND all RE verticals", included: true },
        { text: "Built-in CRM and marketing automation", included: true },
        { text: "Transparent, predictable pricing", included: true },
      ],
    },
    competitor: {
      price: "Custom",
      priceSubtext: "pricing (title industry only)",
      features: [
        { text: "Text-based AI for title companies", included: true },
        { text: "Title-specific conversation workflows", included: true },
        { text: "Limited to text channel only", included: false },
        { text: "Restricted to title industry", included: false },
      ],
    },
  },
  features: [
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, false, "Alanna.ai is text-only"),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(STANDARD_FEATURES.BUILT_IN_CRM, false, "Alanna.ai is a conversational layer, not a CRM"),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, false),
    buildCompareFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
    {
      feature: "Email AI Outreach",
      prestyj: true,
      competitor: false,
      note: "Alanna.ai focuses exclusively on text messaging",
    },
    {
      feature: "All RE Verticals",
      prestyj: true,
      competitor: false,
      note: "Alanna.ai is built exclusively for the title industry",
    },
    buildCompareFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, false),
  ],
  whySwitch: {
    title: "Why Title Companies Switch from Alanna.ai to Prestyj",
    description: "Key reasons title professionals choose Prestyj over Alanna.ai",
    reasons: [
      {
        icon: "Phone",
        title: "Voice + Text + Email AI",
        description:
          "Alanna.ai is text-only. Prestyj gives you AI voice assistants, text agents, and email automation—reaching clients however they prefer to communicate.",
      },
      {
        icon: "Globe",
        title: "Works for Title AND Other Verticals",
        description:
          "If your business spans title, escrow, mortgage, or other real estate services, Prestyj covers them all. Alanna.ai is limited to title-only workflows.",
      },
      {
        icon: "Database",
        title: "Native CRM Included",
        description:
          "Alanna.ai is a conversational layer that sits on top of other systems. Prestyj includes a full CRM so every client interaction is tracked and actionable.",
      },
      {
        icon: "DollarSign",
        title: "Transparent Pricing",
        description:
          "Alanna.ai uses custom pricing that varies by title company size. Prestyj offers straightforward, predictable pricing with no hidden fees.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Alanna.ai Alternative",
      description: "Full alternative analysis for Alanna.ai users",
      href: "/alternatives/alanna-ai",
      linkText: "View analysis",
    },
    {
      title: "Best for Title Companies",
      description: "Why title companies choose Prestyj for their business",
      href: "/best-for/title-companies",
      linkText: "Learn more",
    },
    {
      title: "See Real Results",
      description: "Case studies from title professionals using Prestyj",
      href: "/results",
      linkText: "View results",
    },
  ],
  cta: {
    title: "Ready to See Prestyj in Action?",
    description:
      "Book a personalized demo to see how Prestyj's multi-channel AI can serve your title business and beyond.",
    buttonText: "Book Your Free Demo",
    disclaimer: "No credit card required. See results in minutes.",
  },
});

export const alannaAiMetadata: CompareMetadata = {
  slug: "alanna-ai-vs-prestyj",
  competitorName: "Alanna.ai",
  title: "Alanna.ai vs Prestyj | Title AI vs Full Conversion Platform",
  description:
    "Compare Alanna.ai text-based title AI vs Prestyj multi-channel AI platform. Alanna.ai is custom-priced and title-only. Prestyj offers voice + text + email AI for title and all RE verticals.",
  keywords: [
    "Alanna.ai alternative",
    "Alanna.ai vs Prestyj",
    "Prestyj vs Alanna.ai",
    "Alanna.ai review",
    "Alanna.ai pricing",
    "title company AI alternative",
    "AI for title companies",
    "best AI for title industry",
    "Alanna.ai competitor",
    "multi-channel AI real estate",
  ],
};
