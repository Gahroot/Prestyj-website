import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const isaService: AlternativePageContent = createAlternativePage({
  slug: "isa-service",
  type: "integration-partner",
  competitor: {
    name: "ISA Services",
    shortName: "ISA Services",
    pricing: "$2,000-5,000/mo per ISA",
    website: "#",
    description: "Human inside sales agent services and outsourced ISA teams",
  },
  meta: {
    title: "ISA Service Alternatives: AI vs Human ISAs | Prestyj",
    description:
      "Looking for ISA service alternatives? Compare AI vs human ISA services. Prestyj provides instant AI lead response at a fraction of the cost—no turnover, no training, 24/7 coverage.",
    keywords: [
      "ISA service alternatives",
      "AI vs human ISA",
      "inside sales agent alternatives",
      "ISA service cost",
      "replace ISA with AI",
      "outsourced ISA services",
    ],
  },
  hero: {
    badge: "ISA Service Alternative",
    subheadline:
      "Traditional ISA services cost $2K-5K/month per agent, have 30-50% turnover, and can't cover 24/7. Prestyj provides instant AI response at a fraction of the cost.",
  },
  industryStats: [
    {
      stat: "49%",
      description: "annual turnover rate for real estate ISAs",
    },
    {
      stat: "$18,000",
      description: "cost of a single bad ISA hire",
    },
    {
      stat: "30-50%",
      description: "of new ISAs quit within their first year",
    },
  ],
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Turnover Risk",
        prestyj: "Zero turnover",
        competitor: "30-50% annually",
        note: "Human ISAs quit, taking training and momentum",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Scalability",
        prestyj: "Instant (unlimited capacity)",
        competitor: "Requires hiring",
        note: "Scale means hiring and training more humans",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$2,000-5,000",
      period: "/month per ISA",
      note: "+ recruiting, training, management overhead",
      pros: ["Human judgment", "Can handle complex conversations", "Relationship building"],
      cons: [
        "High cost per agent",
        "Significant turnover and replacement costs",
        "Can't cover 24/7 without hiring shifts",
        "Takes weeks to onboard new hires",
        "Quality varies by individual",
      ],
    },
  },
  whySwitch: [
    {
      icon: "DollarSign",
      title: "80% Less Than Human ISAs",
      description:
        "One ISA costs $2K-5K/month. Prestyj covers the same volume for a fraction of the cost—no salary, benefits, or overhead.",
    },
    {
      icon: "Clock",
      title: "No Turnover, Ever",
      description:
        "ISA turnover destroys momentum. Prestyj never quits, never calls in sick, never takes a vacation—consistent lead response 24/7.",
    },
    {
      icon: "Zap",
      title: "Instant Scalability",
      description:
        "Need 10x the lead volume? ISA services need weeks to hire and train. Prestyj scales instantly—no hiring, no onboarding delays.",
    },
    {
      icon: "Phone",
      title: "Actual Voice Conversations",
      description:
        "Many ISA services rely on text. Prestyj uses natural voice conversations—prospects prefer talking, and conversion is 3-5x higher.",
    },
  ],
  whenCompetitorFits: [
    "You need human relationship building",
    "Your leads require complex qualification",
    "You have budget for human team expansion",
    "You're okay with turnover management",
  ],
  whenPrestyjFits: [
    "You want to reduce ISA costs",
    "You're tired of turnover and retraining",
    "You need 24/7 coverage",
    "You want instant scalability",
    "You prefer predictable monthly costs",
  ],
  relatedResources: [
    {
      href: "/alternatives/internal-isa",
      title: "Internal ISA Alternatives",
      description: "Compare AI to in-house ISA teams",
    },
    {
      href: "/alternatives/human-isa",
      title: "Human ISA vs AI",
      description: "Detailed cost and performance comparison",
    },
    {
      href: "/blog/unit-economics-ai-lead-response",
      title: "ISA vs AI Economics",
      description: "Financial analysis of AI vs human teams",
    },
  ],
});
