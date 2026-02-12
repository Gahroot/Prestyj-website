import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const answerConnect: AlternativePageContent = createAlternativePage({
  slug: "answer-connect",
  type: "integration-partner",
  competitor: {
    name: "AnswerConnect",
    shortName: "AnswerConnect",
    pricing: "$275-495/mo per plan",
    website: "https://www.answerconnect.com",
    description: "24/7 live answering service with human receptionists",
  },
  meta: {
    title: "AnswerConnect Alternative: AI Answering Service | Prestyj",
    description:
      "Looking for an AnswerConnect alternative? Prestyj provides AI-powered answering at a fraction of the cost—no per-minute fees, instant response, and consistent quality 24/7.",
    keywords: [
      "AnswerConnect alternative",
      "AnswerConnect competitor",
      "answering service alternative",
      "AI vs live answering service",
      "virtual receptionist alternative",
      "AnswerConnect pricing",
      "automated answering service",
    ],
  },
  hero: {
    badge: "AnswerConnect Alternative",
    subheadline:
      "AnswerConnect provides live receptionists at $275-495/month with per-minute billing. Prestyj delivers AI-powered answering at a fraction of the cost—no per-minute fees, instant response, and consistent quality every time.",
  },
  industryStats: [
    {
      stat: "$275-495",
      description: "per month for AnswerConnect base plans",
    },
    {
      stat: "$1.50+",
      description: "per minute for overflow calls on many plans",
    },
    {
      stat: "78%",
      description: "of callers prefer to leave a message with a human-like AI vs waiting on hold",
    },
    {
      stat: "30+ seconds",
      description: "average wait time for live answering services during peak hours",
    },
  ],
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, "Human agents only"),
      {
        feature: "Response Consistency",
        prestyj: "100% consistent",
        competitor: "Varies by agent",
        note: "Human performance varies based on training, mood, experience",
      },
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Per-Minute Billing",
        prestyj: "None",
        competitor: "$1.50+ per minute",
        note: "Overflow and extended calls add up quickly with per-minute pricing",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Call Transfers",
        prestyj: "Intelligent screening",
        competitor: "Basic transfer",
        note: "Prestyj qualifies before transferring; humans often transfer everything",
      },
      {
        feature: "Bilingual Support",
        prestyj: "40+ languages",
        competitor: "English/Spanish add-on",
        note: "Multilingual requires premium plans with human services",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$275-495",
      period: "/month per plan",
      note: "+ per-minute billing for overflow calls ($1.50+/min), setup fees, and premium add-ons",
      pros: [
        "Live human agents",
        "Established reputation",
        "Can handle complex scenarios",
        "Script customization available",
      ],
      cons: [
        "Expensive base plans starting at $275/mo",
        "Per-minute billing adds up quickly",
        "Variable quality between agents",
        "Long wait times during peak hours",
        "Limited to business hours on lower tiers",
        "Setup fees and onboarding costs",
        "Bilingual support costs extra",
      ],
    },
  },
  whySwitch: [
    {
      icon: "DollarSign",
      title: "70% Less Than Live Answering",
      description:
        "AnswerConnect plans start at $275/month plus per-minute fees. Prestyj provides comprehensive AI answering at a fraction of the cost with no hidden per-minute charges.",
    },
    {
      icon: "Zap",
      title: "Instant Response, No Hold Times",
      description:
        "Live answering services put callers on hold during peak times. Prestyj answers instantly—every time—eliminating caller abandonment and frustration.",
    },
    {
      icon: "Shield",
      title: "Consistent Quality, Every Call",
      description:
        "Human receptionists have good days and bad days. Prestyj delivers the same professional, on-brand response quality for every single call, 24/7.",
    },
    {
      icon: "Clock",
      title: "Qualify Before Transferring",
      description:
        "Human services often transfer every call to you. Prestyj intelligently screens and qualifies leads, so you only spend time on prospects worth talking to.",
    },
  ],
  whenCompetitorFits: [
    "Your calls require complex human judgment",
    "You prefer live agents for all interactions",
    "You have minimal call volume and budget isn't a concern",
    "You need emotional intelligence in conversations",
    "Your industry requires human compliance verification",
  ],
  whenPrestyjFits: [
    "You want to reduce answering service costs",
    "You need consistent quality across all calls",
    "You're tired of per-minute billing surprises",
    "You want to qualify leads before talking to them",
    "You need 24/7 coverage without night shift premiums",
    "You value instant response over hold times",
    "You need multilingual support without extra fees",
  ],
  relatedResources: [
    {
      href: "/blog/ai-vs-live-answering-service",
      title: "AI vs Live Answering Services",
      description: "Compare costs, quality, and performance",
    },
    {
      href: "/alternatives/ruby",
      title: "Ruby Alternative",
      description: "Compare to another virtual receptionist service",
    },
    {
      href: "/best-for/small-business",
      title: "Best for Small Business",
      description: "Why small businesses choose AI answering",
    },
    {
      href: "/compare/answering-service-vs-ai",
      title: "Answering Service vs AI",
      description: "Complete comparison guide",
    },
  ],
});
