import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const smithAi: AlternativePageContent = createAlternativePage({
  slug: "smith-ai",
  type: "direct-competitor",
  competitor: {
    name: "Smith.ai",
    shortName: "Smith.ai",
    pricing: "$100-285/mo + $2.75-6/min",
    website: "https://smith.ai",
    description:
      "Hybrid AI + human receptionist service for small businesses and law firms",
  },
  meta: {
    title: "Smith.ai Alternative: Pure AI Receptionist | Prestyj",
    description:
      "Looking for a Smith.ai alternative? Compare Prestyj vs Smith.ai: 24/7 AI voice agents at a fraction of the cost. No per-minute fees, no tier limits, true AI automation.",
    keywords: [
      "smith.ai alternative",
      "smith.ai competitor",
      "smith.ai pricing",
      "smith.ai vs prestyj",
      "ai receptionist alternative",
      "virtual receptionist alternative",
      "receptionist service alternative",
    ],
  },
  hero: {
    badge: "Smith.ai Alternative",
    subheadline:
      "Smith.ai charges $100-285/month plus $2.75-6/minute for a hybrid AI/human model. Prestyj provides 24/7 AI voice agents with no per-minute fees and predictable pricing.",
  },
  industryStats: [
    {
      stat: "$285/mo",
      description: "Smith.ai base plan (not including per-minute fees)",
    },
    {
      stat: "$6/min",
      description: "additional charge for calls that transfer to humans",
    },
    {
      stat: "24/7",
      description: "Prestyj AI availability vs Smith.ai business hours",
    },
    {
      stat: "$0/min",
      description: "Prestyj per-minute fee (we don't charge them)",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Pricing Model",
        prestyj: "Flat monthly rate",
        competitor: "$100-285/mo + $2.75-6/min",
        note:
          "Smith.ai's per-minute fees make costs unpredictable and expensive for high call volumes",
      },
      {
        feature: "Pure AI vs Hybrid",
        prestyj: "Pure AI (always learning)",
        competitor: "AI + human handoff",
        note:
          "Smith.ai falls back to human agents—adding cost and delay",
      },
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "True 24/7 Availability",
        prestyj: true,
        competitor: "Business hours only",
        note:
          "Smith.ai's human agents work business hours; after-hours calls go to voicemail or pay premium rates",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      {
        feature: "Lead Qualification",
        prestyj: "Instant AI scoring",
        competitor: "Human review required",
        note: "Smith.ai transfers qualified leads to you—you still review manually",
      },
      {
        feature: "Setup Time",
        prestyj: "Minutes",
        competitor: "Days",
        note: "Smith.ai requires onboarding and script training",
      },
      {
        feature: "CRM Integration",
        prestyj: true,
        competitor: "Limited",
        note: "Smith.ai has basic integrations; Prestyj offers deep CRM sync",
      },
    ],
    competitorPricing: {
      price: "$100-285",
      period: "/month + per-minute fees",
      note: "$2.75-6/minute for calls + extra for human agent transfers",
      pros: [
        "Hybrid AI + human model",
        "Industry experience in legal and professional services",
        "Can handle complex multi-step tasks",
        "Established brand reputation",
      ],
      cons: [
        "Per-minute fees make costs unpredictable",
        "After-hours coverage costs extra or goes to voicemail",
        "Human handoff adds latency and cost",
        "Higher plans needed for volume",
        "Setup and onboarding required",
      ],
    },
  },
  whySwitch: [
    {
      icon: "DollarSign",
      title: "No Per-Minute Fees",
      description:
        "Smith.ai charges $2.75-6/minute on top of monthly fees. High call volumes? Your bill explodes. Prestyj has one flat rate—period.",
    },
    {
      icon: "Clock",
      title: "True 24/7 Availability",
      description:
        "Smith.ai's human agents work business hours. After-hours calls cost extra or go to voicemail. Prestyj never sleeps.",
    },
    {
      icon: "Zap",
      title: "Instant Setup, No Onboarding",
      description:
        "Smith.ai requires days of onboarding and script training. Prestyj deploys in minutes—start handling calls immediately.",
    },
    {
      icon: "TrendingUp",
      title: "Pure AI That Improves",
      description:
        "Smith.ai's hybrid model means fallback to expensive humans. Prestyj's pure AI learns every call, getting smarter and faster over time.",
    },
  ],
  whenCompetitorFits: [
    "You need human agents to handle complex scenarios",
    "Your industry requires human judgment (legal, medical)",
    "You have low call volume and don't mind per-minute fees",
    "You want the security of human fallback",
  ],
  whenPrestyjFits: [
    "You want predictable, flat-rate pricing",
    "You need true 24/7 availability",
    "High call volumes would be expensive with per-minute fees",
    "You want instant setup without onboarding",
    "You're comfortable with pure AI automation",
    "You need CRM integrations for lead routing",
  ],
  relatedResources: [
    {
      href: "/compare/prestyj-vs-smith-ai",
      title: "Prestyj vs Smith.ai: Full Comparison",
      description: "Detailed feature and pricing breakdown",
    },
    {
      href: "/alternatives/isa-service",
      title: "ISA Service Alternatives",
      description: "Compare to other lead response solutions",
    },
    {
      href: "/best-for/real-estate-lead-response",
      title: "Best for Real Estate Lead Response",
      description: "Why real estate teams choose Prestyj",
    },
  ],
  cta: {
    headline: "Ready for Predictable AI Receptionist Pricing?",
    subheadline:
      "Stop paying per-minute fees and worrying about after-hours coverage. Get 24/7 AI voice agents with one flat rate.",
    buttonText: "Start Your Free Trial",
    buttonHref: "/book-demo",
    footnote: "No per-minute fees. No hidden costs. Cancel anytime.",
  },
});
