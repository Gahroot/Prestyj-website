import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const resimpliCompareData: ComparePageData = createComparePage({
  slug: "resimpli-vs-prestyj",
  competitorName: "REsimpli",
  hero: {
    badge: "REsimpli vs Prestyj",
    title: "REsimpli vs Prestyj",
    titleAccent: "Investor CRM vs AI Conversion Platform",
    subtitle:
      "REsimpli is excellent for wholesalers and investors with CRM, skip tracing, and dialer tools. Prestyj delivers more advanced AI agents and works across all real estate verticals.",
    description: "",
  },
  stats: [
    {
      value: "$149",
      label: "REsimpli starting monthly cost",
    },
    {
      value: "Wholesalers",
      label: "REsimpli primary audience",
    },
    {
      value: "Basic AI",
      label: "REsimpli AI capabilities",
    },
    {
      value: "All Verticals",
      label: "Prestyj market coverage",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month (full AI conversion platform)",
      features: [
        { text: "Advanced AI agents for all verticals", included: true },
        { text: "Works for residential, commercial, title, mortgage", included: true },
        { text: "Multi-channel outreach (text, voice, email)", included: true },
        { text: "Built-in CRM and marketing automation", included: true },
      ],
    },
    competitor: {
      price: "$149",
      priceSubtext: "/month + usage costs",
      features: [
        { text: "CRM + skip tracing + dialer included", included: true },
        { text: "Great for wholesalers and investors", included: true },
        { text: "Basic AI, not conversational agents", included: false },
        { text: "Limited to investor-focused workflows", included: false },
      ],
    },
  },
  features: [
    buildCompareFeature(
      STANDARD_FEATURES.AI_TEXT,
      false,
      "REsimpli has basic SMS, not conversational AI",
    ),
    buildCompareFeature(
      STANDARD_FEATURES.AI_VOICE,
      false,
      "Dialer is manual/auto-dial, not AI voice agent",
    ),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, false),
    buildCompareFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, false),
    buildCompareFeature(
      STANDARD_FEATURES.LEAD_QUALIFICATION,
      false,
      "Basic list filtering, not AI qualification",
    ),
    {
      feature: "Skip Tracing",
      prestyj: false,
      competitor: true,
      note: "REsimpli includes skip tracing; Prestyj focuses on conversion",
    },
    {
      feature: "All RE Verticals",
      prestyj: true,
      competitor: false,
      note: "REsimpli is built for wholesalers and investors primarily",
    },
    buildCompareFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, false),
  ],
  whySwitch: {
    title: "Why Professionals Switch from REsimpli to Prestyj",
    description: "Key reasons real estate professionals choose Prestyj over REsimpli",
    reasons: [
      {
        icon: "Brain",
        title: "More Advanced AI Agents",
        description:
          "REsimpli's AI is basic list management and auto-dialing. Prestyj's AI agents have real conversations, handle objections, and book appointments automatically.",
      },
      {
        icon: "Globe",
        title: "Works Across All RE Verticals",
        description:
          "REsimpli is optimized for wholesalers and investors. Prestyj serves residential agents, commercial brokers, title companies, mortgage lenders, and more.",
      },
      {
        icon: "MessageCircle",
        title: "Multi-Channel AI Outreach",
        description:
          "Prestyj engages leads via text, voice, and email AI. REsimpli is primarily dialer-focused with limited automated outreach channels.",
      },
      {
        icon: "Zap",
        title: "Conversion-Focused Platform",
        description:
          "REsimpli helps you find and call leads. Prestyj converts them—automatically qualifying, nurturing, and booking appointments while you focus on closings.",
      },
    ],
  },
  relatedResources: [
    {
      title: "REsimpli Alternative",
      description: "Full alternative analysis for REsimpli users",
      href: "/alternatives/resimpli",
      linkText: "View analysis",
    },
    {
      title: "Best for Real Estate Investors",
      description: "Why investors choose Prestyj for their business",
      href: "/best-for/real-estate-investors",
      linkText: "Learn more",
    },
    {
      title: "See Real Results",
      description: "Case studies from professionals using Prestyj",
      href: "/results",
      linkText: "View results",
    },
  ],
  cta: {
    title: "Ready to See Prestyj in Action?",
    description:
      "Book a personalized demo to see how Prestyj's advanced AI agents can convert more leads across your real estate vertical.",
    buttonText: "Book a Demo",
    disclaimer: "No credit card required. See results in minutes.",
  },
});

export const resimpliMetadata: CompareMetadata = {
  slug: "resimpli-vs-prestyj",
  competitorName: "REsimpli",
  title: "REsimpli vs Prestyj | Investor CRM vs AI Conversion Platform",
  description:
    "Compare REsimpli wholesaler CRM vs Prestyj AI conversion platform. REsimpli is $149/mo with basic AI for investors. Prestyj has advanced AI agents for all real estate verticals.",
  keywords: [
    "REsimpli alternative",
    "REsimpli vs Prestyj",
    "Prestyj vs REsimpli",
    "REsimpli review",
    "REsimpli pricing",
    "wholesaler CRM alternative",
    "real estate investor AI",
    "best AI for real estate investors",
    "REsimpli competitor",
    "AI lead conversion for investors",
  ],
};
