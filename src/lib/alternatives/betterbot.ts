import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const betterbot: AlternativePageContent = createAlternativePage({
  slug: "betterbot",
  type: "direct-competitor",
  competitor: {
    name: "BetterBot",
    shortName: "BetterBot",
    pricing: "$250-500/mo + per-unit fees",
    website: "https://betterbot.com",
    description: "AI leasing assistant and chatbot for multifamily properties",
  },
  meta: {
    title: "BetterBot Alternatives for Multifamily AI Leasing | Prestyj",
    description:
      "Looking for BetterBot alternatives? Compare Prestyj vs BetterBot for multifamily AI lead response. Voice AI that handles phone leads, not just chat.",
    keywords: [
      "betterbot alternatives",
      "betterbot vs prestyj",
      "multifamily AI leasing alternatives",
      "apartment AI chatbot",
      "betterbot competitors",
      "multifamily lead response",
    ],
  },
  hero: {
    badge: "BetterBot Alternative",
    subheadline:
      "BetterBot handles chat leads for multifamily. Prestyj handles phone AND chat—capturing the 70% of prospects who call instead of typing.",
  },
  industryStats: [
    {
      stat: "70%",
      description: "of multifamily prospects prefer calling over chat",
    },
    {
      stat: "15%",
      description: "of properties answer leads after hours (operators miss 85%)",
    },
    {
      stat: "3-5x",
      description: "higher conversion with voice vs chat alone",
    },
  ],
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Multifamily Training",
        prestyj: "Built-in",
        competitor: true,
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Pricing Model",
        prestyj: "Flat monthly",
        competitor: "Per-unit fees",
        note: "BetterBot charges per unit, expensive for large portfolios",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$250-500",
      period: "/month",
      note: "+ per-unit fees (can be $1K+ for large properties)",
      pros: ["Built for multifamily", "Property management integrations"],
      cons: [
        "Per-unit pricing gets expensive for portfolios",
        "Chat-only (misses phone leads)",
        "Limited voice capabilities",
        "Properties still need answering service backup",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "Captures Phone Leads Too",
      description:
        "BetterBot only handles chat. Prestyj handles phone calls—which is how 70% of multifamily prospects prefer to communicate.",
    },
    {
      icon: "Building2",
      title: "Portfolio-Friendly Pricing",
      description:
        "BetterBot charges per unit. Prestyj's flat pricing works for single properties or 100+ unit portfolios without per-unit math.",
    },
    {
      icon: "Clock",
      title: "True 24/7 Coverage",
      description:
        "BetterBot handles website chat. Prestyj handles actual phone conversations after hours—when many prospects call.",
    },
    {
      icon: "Calendar",
      title: "Schedules Tours Directly",
      description:
        "BetterBot nurtures leads. Prestyj qualifies prospects and books tour appointments directly onto leasing calendars.",
    },
  ],
  whenCompetitorFits: [
    "You only need website chat coverage",
    "Phone leads aren't a significant source",
    "You prefer per-unit pricing structure",
    "You're focused on nurturing, not booking",
  ],
  whenPrestyjFits: [
    "Phone leads are important to capture",
    "You manage multiple properties",
    "You want tour appointments booked",
    "You need after-hours phone coverage",
    "You prefer predictable monthly pricing",
  ],
  relatedResources: [
    {
      href: "/alternatives/eliseai",
      title: "EliseAI Alternatives",
      description: "Compare more multifamily AI platforms",
    },
    {
      href: "/best-for/property-managers",
      title: "Built for Property Managers",
      description: "How Prestyj serves multifamily",
    },
    {
      href: "/alternatives/human-isa",
      title: "AI vs Human Leasing Agents",
      description: "Cost comparison for multifamily teams",
    },
  ],
});
