import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const lofty: AlternativePageContent = createAlternativePage({
  slug: "lofty",
  type: "direct-competitor",
  competitor: {
    name: "Lofty (formerly Chime)",
    pricing: "Starting at $499/mo",
    website: "https://lofty.com",
    description: "Real estate CRM with AI assistant and marketing automation",
  },
  meta: {
    title: "Lofty Alternatives | Better AI Real Estate Platform",
    description:
      "Lofty vs Prestyj comparison. See why teams switch from Lofty to Prestyj for more powerful AI agents, better lead conversion, and full-pipeline automation.",
    keywords: [
      "Lofty alternatives",
      "Lofty vs Prestyj",
      "Chime alternative",
      "real estate AI platform",
      "AI CRM real estate",
    ],
  },
  hero: {
    badge: "Lofty Alternative",
    subheadline:
      "Lofty offers CRM and basic AI assistance, but its AI is limited, pricing is complex, and the learning curve is steep. Prestyj delivers more powerful AI agents, simpler onboarding, and better conversion — without the bloat.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_VOICE,
        false,
        "Lofty's AI assistant is text-based only"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      buildAlternativeFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.LEAD_QUALIFICATION,
        true,
        "Lofty's AI qualification is basic"
      ),
      {
        feature: "Marketing Automation",
        prestyj: true,
        competitor: true,
        note: "Lofty includes marketing but setup is complex",
      },
      {
        feature: "Transparent Pricing",
        prestyj: true,
        competitor: false,
        note: "Lofty pricing has hidden fees and add-ons",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$499",
      period: "/month",
      note: "Complex pricing with add-ons for full features",
      pros: ["Includes CRM and marketing automation", "Good for large teams"],
      cons: [
        "AI capabilities are limited and basic",
        "Complex pricing with hidden fees",
        "Steep learning curve for new users",
        "Voice AI not available",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Brain",
      title: "More Sophisticated AI Agents",
      description:
        "Lofty's AI assistant handles simple tasks. Prestyj's agents qualify leads, book appointments, and nurture prospects with human-like intelligence.",
    },
    {
      icon: "Zap",
      title: "Simpler Setup & Onboarding",
      description:
        "Lofty's steep learning curve slows teams down. Prestyj is designed for fast implementation — most teams are live within days.",
    },
    {
      icon: "TrendingUp",
      title: "Better Lead Conversion Rates",
      description:
        "Prestyj's voice-first AI and intelligent follow-up convert more leads into appointments than Lofty's basic text-based assistant.",
    },
    {
      icon: "DollarSign",
      title: "More Transparent Pricing",
      description:
        "No surprise add-ons or hidden fees. Prestyj's pricing is straightforward so you can budget with confidence.",
    },
    {
      icon: "Users",
      title: "Works Across All RE Verticals",
      description:
        "Lofty is built for traditional agents. Prestyj serves agents, investors, wholesalers, title companies, and property managers.",
    },
    {
      icon: "Phone",
      title: "Superior Voice AI Capabilities",
      description:
        "Lofty lacks voice AI entirely. Prestyj's voice agents respond to calls instantly, qualify leads in real time, and book appointments hands-free.",
    },
  ],
  whenCompetitorFits: [
    "You're a large traditional team that needs extensive CRM customization",
    "You have the resources for a long onboarding and training process",
    "You want a platform with built-in IDX website features",
  ],
  whenPrestyjFits: [
    "You want more powerful AI without the complexity",
    "You need voice AI for immediate lead response",
    "You prefer transparent pricing with no hidden fees",
    "You serve multiple real estate verticals",
    "You want to go live quickly without a steep learning curve",
  ],
  relatedResources: [
    {
      href: "/best-for/real-estate-agents",
      title: "Built for Real Estate Agents",
      description: "How Prestyj serves agents and growing teams",
    },
    {
      href: "/solutions/lead-conversion",
      title: "Lead Conversion Solutions",
      description: "See how Prestyj converts more leads into appointments",
    },
    {
      href: "/alternatives/kvcore",
      title: "kvCORE Alternatives",
      description: "Compare other enterprise real estate platforms",
    },
  ],
});
