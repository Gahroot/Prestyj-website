import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const smartAlto: AlternativePageContent = createAlternativePage({
  slug: "smart-alto",
  type: "direct-competitor",
  competitor: {
    name: "Smart Alto",
    shortName: "Smart Alto",
    pricing: "$500-1,000/mo + per-lead fees",
    website: "https://smartalto.com",
    description: "AI-powered inside sales agent service for real estate teams",
  },
  meta: {
    title: "Smart Alto Alternatives for Real Estate ISA Teams | Prestyj",
    description:
      "Looking for Smart Alto alternatives? Compare Prestyj vs Smart Alto for AI lead response. Voice AI that handles calls, transparent pricing, and no per-lead fees.",
    keywords: [
      "smart alto alternatives",
      "smart alto vs prestyj",
      "smart alto competitors",
      "AI ISA alternatives",
      "real estate ISA service",
      "inside sales agent AI",
    ],
  },
  hero: {
    badge: "Smart Alto Alternative",
    subheadline:
      "Smart Alto provides AI inside sales agents. Prestyj provides AI voice receptionists that respond instantly, qualify, and book appointments—with simpler pricing.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Human ISA Hybrid",
        prestyj: "Optional",
        competitor: "Included",
        note: "Smart Alto combines AI + human ISAs",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Per-Lead Fees",
        prestyj: false,
        competitor: true,
        note: "Smart Alto charges per-lead fees at scale",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$500-1,000",
      period: "/month",
      note: "+ per-lead fees at higher volumes",
      pros: ["Human + AI hybrid model", "Experienced in real estate"],
      cons: [
        "Per-lead pricing at scale",
        "Hybrid model increases costs",
        "Less transparent pricing structure",
        "Implementation still takes time",
      ],
    },
  },
  whySwitch: [
    {
      icon: "DollarSign",
      title: "No Per-Lead Fees",
      description:
        "Smart Alto charges per lead at volume. Prestyj's flat monthly pricing means no surprise costs as you scale lead generation.",
    },
    {
      icon: "Phone",
      title: "Voice-First AI",
      description:
        "Smart Alto focuses on text outreach. Prestyj uses voice conversations—prospects actually want to talk, not text back and forth.",
    },
    {
      icon: "Zap",
      title: "Pure AI or Hybrid—Your Choice",
      description:
        "Smart Alto bundles human ISAs. Prestyj offers pure AI or hybrid models—you're not forced into pricing that includes humans you might not need.",
    },
    {
      icon: "Clock",
      title: "Faster Time to Value",
      description:
        "Smart Alto onboarding takes weeks. Prestyj integrates and goes live quickly—start capturing leads faster.",
    },
  ],
  whenCompetitorFits: [
    "You want a hybrid AI + human ISA service",
    "You prefer managed text outreach",
    "You need extensive CRM integration work",
    "You're looking for full-service lead management",
  ],
  whenPrestyjFits: [
    "You want voice-first AI",
    "You prefer predictable monthly pricing",
    "You don't want per-lead fees",
    "You need instant 24/7 response",
    "You want pure AI or hybrid on your terms",
  ],
  relatedResources: [
    {
      href: "/alternatives/human-isa",
      title: "AI vs Human ISA Teams",
      description: "Compare AI to traditional inside sales agents",
    },
    {
      href: "/alternatives/structurely",
      title: "Structurely Alternatives",
      description: "Compare more AI ISA platforms",
    },
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate Teams",
      description: "How Prestyj serves teams and brokerages",
    },
  ],
});
