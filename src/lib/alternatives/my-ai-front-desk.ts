import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const myAiFrontDesk: AlternativePageContent = createAlternativePage({
  slug: "my-ai-front-desk",
  type: "direct-competitor",
  competitor: {
    name: "My AI Front Desk",
    shortName: "My AI Front Desk",
    pricing: "$50-150/mo + usage fees",
    website: "https://myaifrontdesk.com",
    description: "AI receptionist for small businesses with focus on simplicity",
  },
  meta: {
    title: "My AI Front Desk Alternative: Enterprise-Grade AI | Prestyj",
    description:
      "Looking for a My AI Front Desk alternative? Compare Prestyj vs My AI Front Desk: More capable AI voice agents, deeper integrations, and scalable for growing businesses.",
    keywords: [
      "my ai front desk alternative",
      "myaifrontdesk competitor",
      "my ai front desk pricing",
      "ai receptionist for small business",
      "business answering service alternative",
      "virtual receptionist comparison",
      "small business AI phone system",
    ],
  },
  hero: {
    badge: "My AI Front Desk Alternative",
    subheadline:
      "My AI Front Desk offers basic AI receptionist features. Prestyj delivers enterprise-grade AI voice agents with lead qualification, CRM integration, and scalability.",
  },
  industryStats: [
    {
      stat: "Basic vs Advanced",
      description: "Simple answering vs lead qualification & routing",
    },
    {
      stat: "Deeper Integrations",
      description: "Prestyj CRM sync vs basic connections",
    },
    {
      stat: "Scalable",
      description: "Grows with your business",
    },
    {
      stat: "24/7",
      description: "Prestyj AI voice availability",
    },
  ],
  comparison: {
    features: [
      {
        feature: "AI Capabilities",
        prestyj: "Advanced lead qualification",
        competitor: "Basic answering & routing",
        note: "My AI Front Desk focuses on simple tasks",
      },
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Lead Qualification",
        prestyj: "AI scoring & routing",
        competitor: "Basic information capture",
        note: "Prestyj qualifies leads before routing",
      },
      {
        feature: "CRM Integration",
        prestyj: "Deep, two-way sync",
        competitor: "Limited or basic",
        note: "Prestyj integrates with major CRMs deeply",
      },
      {
        feature: "Customization",
        prestyj: "Built to your business",
        competitor: "Template-based",
        note: "Prestyj creates custom workflows",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited call handling",
        competitor: "Tier limits may apply",
        note: "Prestyj scales with your growth",
      },
      {
        feature: "Analytics",
        prestyj: "Detailed reporting",
        competitor: "Basic metrics",
        note: "Prestyj provides comprehensive insights",
      },
    ],
    competitorPricing: {
      price: "$50-150",
      period: "/month",
      note: "Usage-based pricing on higher tiers",
      pros: [
        "Simple, user-friendly interface",
        "Quick setup for basic needs",
        "Affordable for very small businesses",
        "Handles routine inquiries well",
        "Good for simple answering service",
      ],
      cons: [
        "Limited advanced features",
        "Basic CRM integration",
        "May not scale well",
        "Template-based customization",
        "Limited lead qualification",
        "Basic reporting",
      ],
    },
    prestyjPricingOverrides: {
      price: "Custom",
      period: "based on usage",
      note: "Enterprise features included",
      pros: [
        "Advanced AI lead qualification",
        "Deep CRM integrations",
        "Scales with business growth",
        "Custom workflows",
        "Comprehensive analytics",
        "Done-for-you setup",
      ],
      cons: [
        "May be more than very small businesses need",
        "Enterprise focus over simplicity",
      ],
    },
  },
  whySwitch: [
    {
      icon: "TrendingUp",
      title: "Outgrow Basic Answering",
      description:
        "My AI Front Desk is great for simple needs. Prestyj scales with advanced features as your business grows.",
    },
    {
      icon: "Database",
      title: "Deeper CRM Integration",
      description:
        "Basic connections vs. deep two-way CRM sync with lead scoring and automatic routing.",
    },
    {
      icon: "Filter",
      title: "Real Lead Qualification",
      description:
        "Don't just capture information—qualify leads and route them intelligently to the right team member.",
    },
    {
      icon: "BarChart3",
      title: "Better Analytics",
      description:
        "Understand what's working with comprehensive reporting on call outcomes, conversion rates, and ROI.",
    },
  ],
  whenCompetitorFits: [
    "You need very basic phone answering only",
    "You're a solo practitioner with simple needs",
    "Budget is the primary concern",
    "You don't need CRM integration",
    "Simple information capture is sufficient",
  ],
  whenPrestyjFits: [
    "You need lead qualification and routing",
    "CRM integration is important",
    "You're growing and need scalability",
    "Detailed analytics matter",
    "You want custom workflows",
    "You need more than basic answering",
  ],
  relatedResources: [
    {
      href: "/best-for/ai-voice-receptionist",
      title: "AI Voice Receptionist Guide",
      description: "Compare AI receptionist solutions",
    },
    {
      href: "/alternatives/smith-ai",
      title: "Smith.ai Alternative",
      description: "Compare to other receptionist services",
    },
    {
      href: "/blog/ai-voice-agent-vs-human-receptionist",
      title: "AI vs Human Receptionists",
      description: "Full cost and capability comparison",
    },
  ],
  cta: {
    headline: "Ready for Enterprise-Grade AI Reception?",
    subheadline:
      "Get advanced lead qualification, deep CRM integration, and scalable AI voice agents that grow with your business.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "Scalable for growing businesses. No credit card required.",
  },
});
