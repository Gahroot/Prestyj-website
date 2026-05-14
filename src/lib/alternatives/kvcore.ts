import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const kvcore: AlternativePageContent = createAlternativePage({
  slug: "kvcore",
  type: "direct-competitor",
  competitor: {
    name: "kvCORE",
    pricing: "Starting at $499/mo",
    website: "https://kvcore.com",
    description: "Enterprise real estate platform with CRM and IDX websites",
  },
  meta: {
    title: "kvCORE Alternatives | AI-Powered Real Estate Platform",
    description:
      "kvCORE vs Prestyj comparison. See why teams choose Prestyj over kvCORE for AI-powered lead conversion, autonomous AI agents, and smarter pipeline management.",
    keywords: [
      "kvCORE alternatives",
      "kvCORE vs Prestyj",
      "enterprise real estate CRM alternative",
      "AI real estate platform",
      "real estate automation software",
    ],
  },
  hero: {
    badge: "kvCORE Alternative",
    subheadline:
      "kvCORE is a comprehensive enterprise platform, but its AI is basic, implementation takes months, and pricing is complex. Prestyj delivers purpose-built AI, faster deployment, and smarter automation without the enterprise bloat.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_TEXT,
        false,
        "kvCORE AI is basic and rules-based",
      ),
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, false, "No native voice AI capabilities"),
      buildAlternativeFeature(
        STANDARD_FEATURES.RESPONSE_24_7,
        false,
        "Limited to basic auto-responders",
      ),
      buildAlternativeFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.LEAD_QUALIFICATION,
        false,
        "Basic lead scoring only",
      ),
      {
        feature: "IDX Website",
        prestyj: false,
        competitor: true,
        note: "kvCORE includes IDX websites; Prestyj focuses on conversion",
      },
      {
        feature: "Enterprise-Grade Customization",
        prestyj: true,
        competitor: true,
        note: "kvCORE is more customizable but harder to configure",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$499",
      period: "/month",
      note: "Enterprise-focused with complex pricing tiers",
      pros: ["Comprehensive CRM + IDX websites", "Highly customizable for large brokerages"],
      cons: [
        "AI is basic and bolted-on",
        "Implementation takes months",
        "Overkill for smaller teams",
        "Often requires long-term contracts",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Brain",
      title: "Purpose-Built AI (Not Bolted On)",
      description:
        "kvCORE's AI feels like an afterthought. Prestyj was built around AI from day one — autonomous agents that qualify, nurture, and convert leads without human intervention.",
    },
    {
      icon: "Clock",
      title: "Faster Implementation (Days Not Months)",
      description:
        "kvCORE deployments can take 3-6 months. Prestyj gets you live in 1-2 weeks with done-for-you setup and minimal disruption.",
    },
    {
      icon: "Users",
      title: "Better for Teams of 1-50 Agents",
      description:
        "kvCORE is built for mega-brokerages. Prestyj is designed for teams that want enterprise power without enterprise complexity.",
    },
    {
      icon: "DollarSign",
      title: "More Affordable for Growing Teams",
      description:
        "No bloated enterprise pricing. Prestyj offers transparent, predictable costs that scale with your business.",
    },
    {
      icon: "Sparkles",
      title: "AI That Learns Your Business",
      description:
        "Prestyj's agents adapt to your scripts, market, and workflows. kvCORE's rules-based automation can't match true AI learning.",
    },
    {
      icon: "CheckCircle",
      title: "No Long-Term Contracts Required",
      description:
        "kvCORE often locks you into annual agreements. Prestyj offers flexibility with no long-term commitment required.",
    },
  ],
  whenCompetitorFits: [
    "You're a large brokerage that needs extensive IDX website customization",
    "You have dedicated IT staff for a months-long implementation",
    "You want a platform built specifically for traditional agent recruiting",
    "You're comfortable with annual contracts and enterprise complexity",
  ],
  whenPrestyjFits: [
    "You want AI that actually works, not just marketing buzzwords",
    "You need to go live quickly without a 6-month implementation",
    "You're a team of 1-50 agents who want power without bloat",
    "You prefer month-to-month flexibility over long-term contracts",
    "You want AI that learns and improves over time",
  ],
  relatedResources: [
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate Teams",
      description: "How Prestyj scales with teams of any size",
    },
    {
      href: "/solutions/lead-reactivation",
      title: "Lead Conversion Solutions",
      description: "See how Prestyj converts more leads into appointments",
    },
    {
      href: "/alternatives/lofty",
      title: "Lofty Alternatives",
      description: "Compare other CRM + AI real estate platforms",
    },
  ],
});
