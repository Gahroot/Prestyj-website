import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const rubyReceptionist: AlternativePageContent = createAlternativePage({
  slug: "ruby-receptionist",
  type: "direct-competitor",
  competitor: {
    name: "Ruby Receptionist",
    shortName: "Ruby",
    pricing: "$249-589/mo + setup fees",
    website: "https://ruby.com",
    description:
      "Premium live virtual receptionist service for small businesses and law firms",
  },
  meta: {
    title: "Ruby Receptionist Alternative: AI Receptionist at 85% Less | Prestyj",
    description:
      "Looking for a Ruby Receptionist alternative? Compare Prestyj vs Ruby: 24/7 AI voice agents cost 85-95% less than live receptionists, with consistent quality and no sick days.",
    keywords: [
      "ruby receptionist alternative",
      "ruby alternative",
      "virtual receptionist alternative",
      "live receptionist alternative",
      "ruby receptionist pricing",
      "ruby vs prestyj",
      "ai receptionist vs live receptionist",
    ],
  },
  hero: {
    badge: "Ruby Receptionist Alternative",
    subheadline:
      "Ruby charges $249-589/month for live receptionists during business hours. Prestyj provides 24/7 AI voice agents at a fraction of the cost—85-95% savings with consistent quality.",
  },
  industryStats: [
    {
      stat: "$249-589/mo",
      description: "Ruby's monthly plans (business hours only)",
    },
    {
      stat: "85-95%",
      description: "cost savings with AI vs live receptionist",
    },
    {
      stat: "24/7",
      description: "Prestyj availability vs Ruby business hours",
    },
    {
      stat: "0",
      description: "sick days, turnover, bad days with AI",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Monthly Cost",
        prestyj: "$500-2,000/mo for 24/7",
        competitor: "$249-589/mo (business hours)",
        note:
          "Ruby's lower tiers cover limited minutes; higher tiers needed for meaningful volume",
      },
      {
        feature: "Availability Hours",
        prestyj: "24/7/365",
        competitor: "Business hours only",
        note: "After-hours calls go to voicemail or cost extra",
      },
      {
        feature: "Consistency",
        prestyj: "100% consistent",
        competitor: "Varies by receptionist",
        note: "Human performance varies day to day, person to person",
      },
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      {
        feature: "Simultaneous Call Handling",
        prestyj: "Unlimited",
        competitor: "Limited by staff",
        note: "Ruby can only handle as many calls as their team size allows",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      {
        feature: "Lead Qualification",
        prestyj: "Instant AI scoring",
        competitor: "Message taking",
        note: "Ruby takes messages and forwards them—you still qualify leads",
      },
      {
        feature: "Scalability",
        prestyj: "Instant (no limits)",
        competitor: "Requires plan upgrade",
        note: "Call volume spikes require moving to higher tiers",
      },
    ],
    competitorPricing: {
      price: "$249-589",
      period: "/month for business hours",
      note: "After-hours and weekend coverage costs extra. Higher tiers for meaningful call volume.",
      pros: [
        "Live human receptionists",
        "Friendly, professional service",
        "Industry experience in legal and professional services",
        "Can handle complex multi-step tasks",
      ],
      cons: [
        "85-95% more expensive than AI",
        "Business hours only (after-hours costs extra)",
        "Inconsistent quality across receptionists",
        "Sick days, vacations, turnover affect service",
        "Takes messages only—you still follow up manually",
        "Higher tiers needed for volume",
      ],
    },
  },
  whySwitch: [
    {
      icon: "DollarSign",
      title: "Save 85-95% on Reception Costs",
      description:
        "Ruby charges $249-589/month for business hours coverage. Prestyj provides 24/7 AI coverage for a fraction of that—saving $20,000-50,000+ annually while improving availability.",
    },
    {
      icon: "Clock",
      title: "True 24/7 Availability",
      description:
        "Ruby's receptionists work business hours. After-hours calls go to voicemail or cost extra. Prestyj never sleeps—every call gets answered, evenings, weekends, holidays included.",
    },
    {
      icon: "Target",
      title: "100% Consistent Quality",
      description:
        "Ruby's quality varies between receptionists—some are great, others less so. Prestyj delivers consistent, professional, on-brand communication every single call.",
    },
    {
      icon: "Zap",
      title: "No Sick Days, No Turnover",
      description:
        "Human receptionists get sick, take vacations, quit. Ruby replaces them, but there's ramp-up and inconsistency. Prestyj shows up every single day with perfect performance.",
    },
  ],
  whenCompetitorFits: [
    "You value human interaction over cost savings",
    "Your clients expect live receptionists",
    "You have low call volume and budget isn't a concern",
    "You need receptionists to handle complex judgment calls",
  ],
  whenPrestyjFits: [
    "You want 85-95% cost savings",
    "You need 24/7 availability, not just business hours",
    "You value consistent quality over variable human performance",
    "You want instant lead qualification, not message taking",
    "You're tired of sick days, turnover, and training",
    "Call volume spikes would be expensive with tiered pricing",
  ],
  relatedResources: [
    {
      href: "/compare/prestyj-vs-ruby-receptionist",
      title: "Prestyj vs Ruby Receptionist: Full Comparison",
      description: "Detailed feature and pricing breakdown",
    },
    {
      href: "/alternatives/smith-ai",
      title: "Smith.ai Alternative",
      description: "Compare to another hybrid receptionist service",
    },
    {
      href: "/best-for/law-firms",
      title: "Best for Law Firms",
      description: "Why legal practices choose Prestyj",
    },
  ],
  cta: {
    headline: "Ready for 24/7 AI Receptionist at 85% Less?",
    subheadline:
      "Stop paying premium rates for business-hours coverage. Get 24/7 AI voice agents with consistent quality—no sick days, no turnover, no voicemail.",
    buttonText: "Start Your Free Trial",
    buttonHref: "/book-demo",
    footnote: "24/7 coverage included. No tier limits. Cancel anytime.",
  },
});
