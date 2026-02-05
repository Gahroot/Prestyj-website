import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const homebot: AlternativePageContent = createAlternativePage({
  slug: "homebot",
  type: "integration-partner",
  competitor: {
    name: "Homebot",
    shortName: "Homebot",
    pricing: "$199-399/mo + per-user fees",
    website: "https://homebot.ai",
    description: "AI-powered seller lead nurturing and homeowner engagement platform",
  },
  meta: {
    title: "Homebot Alternatives for Real Estate | Prestyj",
    description:
      "Looking for Homebot alternatives? Compare Prestyj vs Homebot for lead response. Instant voice AI that engages buyer and seller leads in real-time conversations.",
    keywords: [
      "homebot alternatives",
      "homebot vs prestyj",
      "homebot competitors",
      "seller lead tools",
      "real estate AI nurturing",
      "homebot pricing",
    ],
  },
  hero: {
    badge: "Homebot Alternative",
    subheadline:
      "Homebot focuses on long-term homeowner nurturing via dashboards. Prestyj provides instant voice AI that engages leads immediately when they're hottest.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      {
        feature: "AI Text/Email",
        prestyj: true,
        competitor: true,
        note: "Homebot is primarily text/email based",
      },
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Homeowner Dashboards",
        prestyj: false,
        competitor: true,
        note: "Homebot's signature feature",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Buyer Lead Response",
        prestyj: "Instant voice qualification",
        competitor: "Limited (seller-focused)",
        note: "Homebot primarily serves seller leads",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$199-399",
      period: "/month",
      note: "+ per-user fees at scale",
      pros: ["Excellent for long-term homeowner nurturing", "Equity dashboards", "Seller lead focus"],
      cons: [
        "Limited buyer lead capabilities",
        "No voice-first engagement",
        "Delayed engagement (not instant response)",
        "Primarily dashboard-driven, not conversational",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "Voice-First Instant Response",
      description:
        "Homebot sends emails and dashboards. Prestyj calls leads immediately—having actual conversations that qualify and book appointments.",
    },
    {
      icon: "Users",
      title: "Buyer AND Seller Leads",
      description:
        "Homebot focuses on seller nurturing. Prestyj handles both buyer and seller leads with instant voice qualification.",
    },
    {
      icon: "Zap",
      title: "Engage When Lead Is Hottest",
      description:
        "Homebot is a long play. Prestyj engages in the first 60 seconds—converting leads while they're actively searching, not weeks later.",
    },
    {
      icon: "Calendar",
      title: "Books Appointments Directly",
      description:
        "Homebot nurtures. Prestyj qualifies and books appointments directly onto your calendar—moving leads to booked meetings, not just engaged contacts.",
    },
  ],
  whenCompetitorFits: [
    "You want long-term homeowner database nurturing",
    "Seller leads are your primary focus",
    "You like dashboard-based client engagement",
    "You're not focused on instant lead response",
  ],
  whenPrestyjFits: [
    "You need instant lead response",
    "You want voice conversations, not just email",
    "You work both buyer and seller leads",
    "You want appointments booked, not just nurturing",
    "You care about speed-to-lead",
  ],
  relatedResources: [
    {
      href: "/alternatives/human-isa",
      title: "AI vs Human ISA",
      description: "Compare AI to human inside sales agents",
    },
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate Teams",
      description: "How Prestyj serves teams and brokerages",
    },
    {
      href: "/blog/lead-reactivation-guide",
      title: "Lead Reactivation Strategies",
      description: "Re-engaging dormant database leads",
    },
  ],
});
