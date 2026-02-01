import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const cinc: AlternativePageContent = createAlternativePage({
  slug: "cinc",
  type: "direct-competitor",
  competitor: {
    name: "CINC",
    shortName: "CINC",
    pricing: "$1,500+/mo",
    website: "https://cincpro.com",
    description:
      "All-in-one real estate platform with lead generation, CRM, and AI",
  },
  meta: {
    title: "Best CINC Alternative for Real Estate | Prestyj",
    description:
      "Looking for a CINC alternative? Compare Prestyj vs CINC: simpler setup, lead reactivation focus, no complex enterprise features you don't need.",
    keywords: [
      "CINC alternative",
      "CINC vs prestyj",
      "CINC competitors",
      "real estate CRM alternative",
      "real estate lead generation",
    ],
  },
  hero: {
    badge: "CINC Alternative",
    subheadline:
      "CINC is powerful but complex. If you're looking for instant AI response and lead reactivation without the enterprise overhead, there's a simpler path.",
  },
  industryStats: [
    {
      stat: "$1.5k+",
      description: "CINC monthly cost",
    },
    {
      stat: "47 sec",
      description: "average Prestyj response time",
    },
    {
      stat: "$47K",
      description: "avg. recovered revenue from lead reactivation",
    },
  ],
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      {
        feature: "Lead Generation",
        prestyj: false,
        competitor: true,
        note: "CINC focuses on generating new leads",
      },
      {
        feature: "Lead Reactivation",
        prestyj: true,
        competitor: false,
        note: "Prestyj revives your dead database",
      },
      buildAlternativeFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
      {
        feature: "Simple Setup",
        prestyj: true,
        competitor: false,
        note: "CINC requires significant onboarding",
      },
      {
        feature: "IDX Website",
        prestyj: false,
        competitor: true,
      },
      {
        feature: "Done-For-You Service",
        prestyj: true,
        competitor: false,
        note: "Prestyj handles everything for you",
      },
      {
        feature: "Solo Agent Friendly",
        prestyj: true,
        competitor: false,
        note: "CINC is enterprise-focused",
      },
    ],
    competitorPricing: {
      price: "$1,500+",
      period: "/month",
      note: "Enterprise-tier pricing",
      pros: [
        "All-in-one platform with lead gen",
        "IDX website included",
        "Robust team management",
      ],
      cons: [
        "Complex setup and learning curve",
        "Enterprise-focused, overkill for small teams",
        "Higher price point",
        "No dedicated lead reactivation",
      ],
    },
    prestyjPricingOverrides: {
      price: "Custom pricing",
      note: "Designed for solo agents to small teams",
      pros: [
        "Simple setup, fast deployment",
        "Lead reactivation specialization",
        "Done-for-you service",
        "Right-sized for your business",
      ],
    },
  },
  whySwitch: [
    {
      icon: "RefreshCw",
      title: "Lead Reactivation Focus",
      description:
        "CINC generates new leads. Prestyj revives the thousands of dead leads you already paid for—often at higher ROI than buying new ones.",
    },
    {
      icon: "Zap",
      title: "Simpler Implementation",
      description:
        "No complex enterprise onboarding. We get you up and running fast with done-for-you setup and management.",
    },
    {
      icon: "DollarSign",
      title: "Right-Sized Pricing",
      description:
        "Don't pay for enterprise features you don't need. Prestyj is designed for solo agents and small teams.",
    },
    {
      icon: "Users",
      title: "Hands-Off Operation",
      description:
        "We handle everything—you just show up to appointments. No need to learn complex software.",
    },
  ],
  whenCompetitorFits: [
    "You need lead generation (not just response/reactivation)",
    "You want an IDX website included",
    "You're running a large team that needs enterprise features",
    "You're willing to invest time in learning a complex platform",
  ],
  whenPrestyjFits: [
    "You already have leads but need help responding and reactivating them",
    "You want a simple, fast setup without enterprise complexity",
    "You're a solo agent or small team",
    "You want a done-for-you service that handles everything",
    "You'd rather revive dead leads than constantly buy new ones",
  ],
  relatedResources: [
    {
      href: "/alternatives/ylopo",
      title: "Prestyj vs Ylopo",
      description: "Compare to another AI platform",
    },
    {
      href: "/solutions/lead-reactivation",
      title: "Lead Reactivation",
      description: "How we revive your dead database",
    },
    {
      href: "/results",
      title: "See Real Results",
      description: "Case studies from agents using Prestyj",
    },
  ],
  cta: {
    headline: "Want Results Without the Complexity?",
    subheadline:
      "See how Prestyj delivers instant lead response and database reactivation without enterprise overhead.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. Simple setup, immediate results.",
  },
});
