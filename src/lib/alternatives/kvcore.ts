import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const kvcore: AlternativePageContent = createAlternativePage({
  slug: "kvcore",
  type: "integration-partner",
  competitor: {
    name: "kvCORE",
    shortName: "kvCORE",
    pricing: "$499-899/mo + setup fees",
    website: "https://kvcore.com",
    description: "All-in-one real estate CRM and marketing platform with AI features",
  },
  meta: {
    title: "Best kvCORE Alternative for Real Estate Lead Response | Prestyj",
    description:
      "Looking for kvCORE alternatives? Compare Prestyj vs kvCORE for AI lead response and qualification. No setup fees, done-for-you implementation, and voice-first AI that actually converts leads.",
    keywords: [
      "kvcore alternative",
      "kvcore competitors",
      "kvcore vs prestyj",
      "real estate CRM alternatives",
      "AI lead response platform",
      "kvCORE pricing alternatives",
    ],
  },
  hero: {
    badge: "kvCORE Alternative",
    subheadline:
      "kvCORE is a full-featured CRM with AI add-ons. Prestyj is AI-first lead response that integrates with your existing CRM. Here's what real estate teams should know.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Prestyj integrates with your existing CRM instead of replacing it"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Setup Fees",
        prestyj: false,
        competitor: true,
        note: "kvCORE charges onboarding/setup fees",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$499-899",
      period: "/month",
      note: "+ setup fees, + per-lead costs at scale",
      pros: ["Full-featured real estate CRM", "IDX website included"],
      cons: [
        "Significant setup and onboarding fees",
        "Per-lead pricing kicks in at scale",
        "Requires replacing your entire tech stack",
        "AI features are add-ons, not core focus",
        "Multi-month implementation timeline",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "Keep Your Existing CRM",
      description:
        "Prestyj integrates with Follow Up Boss, Sierra Interactive, kvCORE itself, and 15+ other CRMs. No need to migrate or replace your entire tech stack.",
    },
    {
      icon: "Phone",
      title: "Voice-First AI (Not Just Text)",
      description:
        "kvCORE's AI is primarily text-based. Prestyj uses natural voice conversations that convert 3-5x better than chat alone. Leads actually want to talk.",
    },
    {
      icon: "DollarSign",
      title: "Predictable Pricing at Scale",
      description:
        "No per-lead fees that surprise you at volume. No setup fees. One flat monthly rate regardless of how many leads you generate.",
    },
    {
      icon: "Clock",
      title: "Live in Days, Not Months",
      description:
        "kvCORE onboarding takes weeks of configuration and data migration. Prestyj integrates and goes live in 1-2 weeks with zero disruption.",
    },
  ],
  whenCompetitorFits: [
    "You need a complete CRM replacement from scratch",
    "You want an included IDX website solution",
    "You're a large enterprise requiring extensive customization",
    "You're already invested in the kvCORE ecosystem",
  ],
  whenPrestyjFits: [
    "You like your CRM but need better lead response",
    "You want voice AI, not just chatbots",
    "You're tired of per-lead pricing surprises",
    "You need 24/7 coverage without hiring more staff",
    "You want to be live quickly without complex setup",
  ],
  relatedResources: [
    {
      href: "/alternatives/follow-up-boss",
      title: "Follow Up Boss Alternatives",
      description: "Compare Prestyj to other real estate CRMs",
    },
    {
      href: "/alternatives/human-isa",
      title: "AI vs Human ISA Teams",
      description: "Cost comparison of AI vs inside sales agents",
    },
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate Teams",
      description: "See how Prestyj serves real estate teams",
    },
  ],
});
