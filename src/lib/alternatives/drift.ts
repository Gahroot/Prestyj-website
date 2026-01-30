import type { AlternativePageContent } from "./types";

export const drift: AlternativePageContent = {
  slug: "drift",
  type: "direct-competitor",
  competitor: {
    name: "Drift Enterprise",
    shortName: "Drift",
    pricing: "$60K+/year + seat costs",
    website: "https://drift.com",
    description: "Enterprise conversational AI platform for B2B sales teams, now part of Salesloft",
  },
  meta: {
    title: "Drift Alternative for Real Estate Enterprise | Prestyj",
    description:
      "Looking for a Drift alternative for real estate? Compare Prestyj vs Drift: built for RE workflows, faster implementation, no 12-week deployment timeline.",
    keywords: [
      "drift alternative",
      "drift alternative real estate",
      "drift competitors",
      "drift enterprise alternative",
      "drift vs prestyj",
      "conversational AI real estate",
      "drift pricing",
    ],
  },
  hero: {
    badge: "Drift Alternative",
    headline: "Looking for a",
    headlineAccent: "Drift Enterprise Alternative?",
    subheadline:
      "Drift is a proven B2B sales platform—but it wasn't built for real estate. Compare implementation timelines, total costs, and real estate-specific capabilities.",
  },
  industryStats: [
    {
      stat: "12+ weeks",
      description: "Drift enterprise implementation time",
    },
    {
      stat: "$156K+",
      description: "typical annual cost (license + seats)",
    },
    {
      stat: "Aug 2025",
      description: "OAuth security breach forced Salesforce disconnect",
    },
    {
      stat: "$80/seat",
      description: "per user monthly for inbox access",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Built for Real Estate",
        prestyj: true,
        competitor: false,
        note: "Drift is built for generic B2B sales, requires customization for RE workflows",
      },
      {
        feature: "AI Text Conversations",
        prestyj: true,
        competitor: true,
      },
      {
        feature: "AI Voice Assistants",
        prestyj: true,
        competitor: "Limited",
        note: "Drift focuses on chat; voice is secondary",
      },
      {
        feature: "Implementation Time",
        prestyj: "Days",
        competitor: "12+ weeks",
        note: "Drift enterprise deployments require extensive configuration",
      },
      {
        feature: "Real Estate CRM Integrations",
        prestyj: true,
        competitor: false,
        note: "No native Follow Up Boss, BoomTown, kvCORE, or Sierra integration",
      },
      {
        feature: "Multi-Office Management",
        prestyj: true,
        competitor: "Complex",
        note: "Multi-brand configurations add weeks to implementation",
      },
      {
        feature: "Predictable Pricing",
        prestyj: true,
        competitor: false,
        note: "$80/seat/month adds up fast for enterprise real estate teams",
      },
      {
        feature: "Security Track Record",
        prestyj: true,
        competitor: "Breach in 2025",
        note: "August 2025 OAuth exploit compromised Salesforce integrations",
      },
    ],
    competitorPricing: {
      price: "$60K+",
      period: "/year enterprise license",
      note: "+ $80/seat/month for team access",
      pros: [
        "Established enterprise platform",
        "Strong Salesforce integration (pre-breach)",
        "Comprehensive marketing automation",
      ],
      cons: [
        "12+ week implementation for enterprise",
        "$80/seat/month for anyone needing inbox/routing access",
        "August 2025 security breach affecting enterprise customers",
        "Not built for real estate workflows",
        "Routing logic struggles with complex scenarios",
      ],
    },
    prestyjPricing: {
      price: "Custom pricing",
      note: "Scaled for real estate operations",
      pros: [
        "Built specifically for real estate",
        "Deploys in days, not months",
        "Native RE CRM integrations",
        "Multi-office management included",
        "No per-seat add-on costs",
      ],
      cons: [],
    },
  },
  whySwitch: [
    {
      icon: "Building2",
      title: "Purpose-Built for Real Estate",
      description:
        "Drift serves 20+ industries generically. Prestyj is built exclusively for real estate with workflows, terminology, and integrations your teams already understand.",
    },
    {
      icon: "Clock",
      title: "Deploy in Days, Not Months",
      description:
        "Drift enterprise deployments take 12+ weeks with custom routing and multi-brand configurations. Prestyj deploys across your offices in days.",
    },
    {
      icon: "DollarSign",
      title: "No Seat-Based Cost Explosion",
      description:
        "Drift charges $80/seat/month for inbox access. For 50 offices with 2 managers each, that's $96K/year in seat costs alone—on top of the base license.",
    },
    {
      icon: "Shield",
      title: "Security You Can Trust",
      description:
        "The August 2025 Drift OAuth breach forced enterprises to disconnect Salesforce integrations. We take security seriously with no history of breaches.",
    },
  ],
  whenCompetitorFits: [
    "You need cross-industry capabilities beyond real estate",
    "Your team already uses Salesloft for sales engagement",
    "You have IT resources for 12+ week implementation",
    "Your budget accommodates $80/seat ongoing costs",
  ],
  whenPrestyjFits: [
    "You operate 50+ real estate offices",
    "You need real estate-specific workflows out of the box",
    "You want fast deployment without months of configuration",
    "You can't afford $80/seat for everyone who needs access",
    "Security concerns matter after recent industry breaches",
    "You need native integrations with RE CRMs (Follow Up Boss, BoomTown, kvCORE)",
  ],
  relatedResources: [
    {
      href: "/compare/prestyj-vs-drift",
      title: "Prestyj vs Drift: Full Comparison",
      description: "Detailed feature and pricing breakdown",
    },
    {
      href: "/alternatives/conversica",
      title: "Conversica Alternative",
      description: "Compare to another enterprise AI platform",
    },
    {
      href: "/best-for/real-estate-franchises",
      title: "Best for Franchises",
      description: "Why franchise operations choose Prestyj",
    },
  ],
  cta: {
    headline: "Ready for a Real Estate-First Platform?",
    subheadline:
      "See how enterprise real estate operations are choosing purpose-built solutions over generic B2B platforms. Faster deployment, predictable pricing, and RE-native integrations.",
    buttonText: "Book Your Enterprise Demo",
    buttonHref: "/book-demo",
    footnote: "Deploy in days, not months. No per-seat add-ons.",
  },
};
