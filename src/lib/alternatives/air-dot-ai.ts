import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const airDotAi: AlternativePageContent = createAlternativePage({
  slug: "air-dot-ai",
  type: "direct-competitor",
  competitor: {
    name: "Air.ai",
    shortName: "Air.ai",
    pricing: "$0.23-0.45/minute + platform fees",
    website: "https://air.ai",
    description: "AI voice agent platform for automated phone conversations",
  },
  meta: {
    title: "Air.ai Alternatives for Real Estate Lead Response | Prestyj",
    description:
      "Looking for Air.ai alternatives? Compare Prestyj vs Air.ai for real estate AI voice agents. Done-for-you setup, real estate-trained AI, and predictable flat pricing instead of per-minute billing.",
    keywords: [
      "air.ai alternatives",
      "air ai vs prestyj",
      "air.ai competitors",
      "AI voice agent platform",
      "real estate AI voice",
      "automated calling AI",
    ],
  },
  hero: {
    badge: "Air.ai Alternative",
    subheadline:
      "Air.ai provides raw AI voice infrastructure. Prestyj provides production-ready AI voice agents trained specifically for real estate conversations that convert.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Real Estate Training",
        prestyj: "Built-in RE knowledge",
        competitor: "Requires training",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Pricing Model",
        prestyj: "Flat monthly fee",
        competitor: "Per-minute billing",
        note: "Air.ai charges $0.23-0.45/minute—costs add up fast",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$0.23-0.45",
      period: "/minute",
      note: "+ platform fees, + setup costs",
      pros: ["Long-duration conversations possible", "Customizable for any use case"],
      cons: [
        "Per-minute billing gets expensive at scale",
        "Requires significant prompt engineering and testing",
        "No built-in real estate knowledge",
        "You handle all technical implementation",
        "Hidden costs in platform and setup fees",
      ],
    },
  },
  whySwitch: [
    {
      icon: "DollarSign",
      title: "Predictable Flat Pricing",
      description:
        "Air.ai's per-minute model means surprise bills. Prestyj charges one flat monthly rate—know exactly what you'll pay regardless of call volume.",
    },
    {
      icon: "Home",
      title: "Real Estate-Native AI",
      description:
        "Air.ai is a general platform. Prestyj's AI understands property types, MLS language, buyer/seller pain points, and what makes real estate leads convert.",
    },
    {
      icon: "Wrench",
      title: "Done-For-You Implementation",
      description:
        "With Air.ai, you're building it yourself. Prestyj handles script development, voice training, CRM integration, and ongoing optimization.",
    },
    {
      icon: "TrendingUp",
      title: "Proven Real Estate Results",
      description:
        "Air.ai serves many industries. Prestyj focuses exclusively on real estate—our conversation flows are proven to convert motivated leads.",
    },
  ],
  whenCompetitorFits: [
    "You need conversations longer than 10 minutes",
    "You have in-house AI engineering resources",
    "You need highly customized non-real estate use cases",
    "You want to build and manage everything internally",
  ],
  whenPrestyjFits: [
    "You want real estate-specific conversations",
    "You don't have an AI engineering team",
    "You prefer predictable monthly costs",
    "You need done-for-you implementation",
    "You want CRM integration handled for you",
  ],
  relatedResources: [
    {
      href: "/alternatives/vapi",
      title: "Vapi Alternatives",
      description: "Compare more AI voice platforms",
    },
    {
      href: "/alternatives/bland-ai",
      title: "Bland AI Alternatives",
      description: "More AI voice platform comparisons",
    },
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate",
      description: "Why Prestyj is optimized for real estate",
    },
  ],
});
