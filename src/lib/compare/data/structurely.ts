import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const structurelyCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-structurely",
  competitorName: "Structurely",
  hero: {
    badge: "Structurely vs Prestyj",
    title: "Structurely vs Prestyj",
    titleAccent: "AI Real Estate Comparison",
    subtitle:
      "Structurely offers a chatbot for lead qualification. Prestyj delivers a full AI-powered lead conversion platform with CRM, marketing automation, and multi-channel outreach.",
    description: "",
  },
  stats: [
    {
      value: "2016",
      label: "Structurely founded",
    },
    {
      value: "Text + Voice AI",
      label: "Structurely channels only",
    },
    {
      value: "Lead Qualification",
      label: "Structurely's primary focus",
    },
    {
      value: "Full Pipeline",
      label: "Prestyj end-to-end coverage",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month (replaces 5+ tools)",
      features: [
        { text: "All-in-one platform included", included: true },
        { text: "Native CRM + marketing automation", included: true },
        { text: "Multi-channel AI (text, voice, email)", included: true },
        { text: "Works for all real estate verticals", included: true },
      ],
    },
    competitor: {
      price: "$299",
      priceSubtext: "/month + separate tool costs",
      features: [
        { text: "Text and voice AI chatbot", included: true },
        { text: "Lead qualification only", included: true },
        { text: "Requires separate CRM integration", included: false },
        { text: "Limited to chatbot functionality", included: false },
      ],
    },
  },
  features: [
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      false,
      "Structurely requires separate CRM integration",
    ),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, false),
    buildCompareFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
    {
      feature: "Marketing Automation",
      prestyj: true,
      competitor: false,
      note: "Structurely is limited to conversational AI",
    },
    {
      feature: "Email AI Outreach",
      prestyj: true,
      competitor: false,
      note: "Structurely focuses on text and voice only",
    },
    buildCompareFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, false),
  ],
  whySwitch: {
    title: "Why Agents Switch from Structurely to Prestyj",
    description: "Key reasons real estate professionals choose Prestyj over Structurely",
    reasons: [
      {
        icon: "Zap",
        title: "Beyond Chatbot to Full Pipeline",
        description:
          "Structurely handles lead qualification conversations. Prestyj manages the entire conversion pipeline from first touch to close.",
      },
      {
        icon: "Database",
        title: "Native CRM Included",
        description:
          "Stop paying for and integrating separate CRM tools. Prestyj's built-in CRM keeps every lead, conversation, and deal in one place.",
      },
      {
        icon: "MessageCircle",
        title: "Marketing Automation Included",
        description:
          "Prestyj includes automated email sequences, drip campaigns, and follow-up workflows—no additional marketing tools needed.",
      },
      {
        icon: "Phone",
        title: "Multi-Channel AI",
        description:
          "Structurely covers text and voice. Prestyj adds email AI, giving you three channels to reach and convert every lead.",
      },
      {
        icon: "Globe",
        title: "Works for All RE Verticals",
        description:
          "Whether you're residential, commercial, title, or mortgage, Prestyj adapts to your business. Structurely is built primarily for agent lead gen.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Structurely Alternative",
      description: "Full alternative analysis for Structurely users",
      href: "/alternatives/structurely",
      linkText: "View analysis",
    },
    {
      title: "Best for Real Estate Agents",
      description: "Why agents choose Prestyj for their business",
      href: "/best-for/real-estate-agents",
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
      "Book a personalized demo to see how Prestyj can transform your lead management and help you close more deals.",
    buttonText: "Book a Demo",
    disclaimer: "No credit card required. See results in minutes.",
  },
});

export const structurelyMetadata: CompareMetadata = {
  slug: "prestyj-vs-structurely",
  competitorName: "Structurely",
  title: "Structurely vs Prestyj | AI Real Estate Comparison",
  description:
    "Compare Structurely chatbot vs Prestyj full platform. Structurely offers text+voice AI for $299/mo. Prestyj delivers native CRM, marketing automation, and multi-channel AI for $1,997/mo—replacing 5+ tools.",
  keywords: [
    "Structurely alternative",
    "Structurely vs Prestyj",
    "Prestyj vs Structurely",
    "Structurely review",
    "Structurely pricing",
    "AI real estate comparison",
    "real estate chatbot alternative",
    "best AI for real estate agents",
    "Structurely competitor",
    "AI lead conversion platform",
  ],
};
