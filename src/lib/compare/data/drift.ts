import type { ComparePageData, CompareMetadata } from "../types";
import {
  createComparePage,
  buildCompareFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const driftCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-drift",
  competitorName: "Drift",
  hero: {
    badge: "Enterprise Comparison",
    title: "Prestyj vs Drift",
    titleAccent: "For Enterprise Real Estate",
    subtitle:
      "Drift is a proven B2B conversational platform—but it wasn't built for real estate. Compare implementation timelines, total costs, and RE-specific capabilities.",
    description: "",
  },
  stats: [
    {
      value: "$60K+",
      label: "Drift annual enterprise license",
    },
    {
      value: "12+ weeks",
      label: "enterprise implementation time",
    },
    {
      value: "$80/seat",
      label: "monthly add-on for team access",
    },
    {
      value: "Aug 2025",
      label: "OAuth security breach",
    },
  ],
  pricing: {
    prestyj: {
      price: "Custom pricing",
      priceSubtext: "",
      features: [
        { text: "Built specifically for real estate", included: true },
        { text: "Deploys in days, not months", included: true },
        { text: "Native RE CRM integrations included", included: true },
        { text: "Multi-office management included", included: true },
        { text: "No security breach history", included: true },
      ],
    },
    competitor: {
      price: "$60K+",
      priceSubtext: "/year license",
      features: [
        { text: "Established enterprise platform", included: true },
        { text: "Comprehensive marketing automation", included: true },
        { text: "12+ week enterprise implementation", included: false },
        {
          text: "$80/seat adds up (50 offices × 2 = $96K/year)",
          included: false,
        },
        { text: "No native real estate CRM integrations", included: false },
        { text: "August 2025 security breach", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Built for Real Estate",
      prestyj: true,
      competitor: false,
      note: "Drift is a generic B2B sales platform requiring extensive customization for RE workflows",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(
      STANDARD_FEATURES.AI_VOICE,
      "Limited",
      "Drift focuses on chat-first; voice is secondary"
    ),
    {
      feature: "Implementation Time",
      prestyj: "Days",
      competitor: "12+ weeks",
      note: "Drift enterprise deployments require extensive configuration and custom routing",
    },
    {
      feature: "Real Estate CRM Integrations",
      prestyj: true,
      competitor: false,
      note: "No native Follow Up Boss, BoomTown, kvCORE, or Sierra Interactive integration",
    },
    {
      feature: "Multi-Office Management",
      prestyj: true,
      competitor: "Complex",
      note: "Multi-brand configurations add weeks to Drift implementation",
    },
    {
      feature: "Predictable Pricing",
      prestyj: true,
      competitor: false,
      note: "$80/seat/month adds up fast for enterprise teams",
    },
    {
      feature: "Security Track Record",
      prestyj: true,
      competitor: "Breach Aug 2025",
      note: "OAuth exploit compromised Salesforce and Google Workspace integrations",
    },
  ],
  whySwitch: {
    title: "Why Real Estate Operations Choose Prestyj",
    description:
      "Key reasons VPs and Directors at 50+ office operations choose purpose-built solutions",
    reasons: [
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
          "Drift charges $80/seat/month for inbox access. For 50 offices with 2 managers each, that's $96K/year in seat costs alone—on top of the $60K+ base license.",
      },
      {
        icon: "Shield",
        title: "Security You Can Trust",
        description:
          "The August 2025 Drift OAuth breach forced enterprises to disconnect Salesforce integrations. We prioritize security with no history of breaches.",
      },
    ],
  },
  specialSections: [
    {
      type: "security-warning",
      position: "after-stats",
      data: {
        title: "August 2025 Security Incident",
        description:
          "An OAuth exploit compromised Drift's Salesforce and Google Workspace integrations from August 8-18, 2025. Attackers used stolen tokens to export data via Salesforce Bulk API. Salesforce and Salesloft revoked all Drift access on August 20, 2025, forcing enterprises to disable Drift across their websites.",
        disclaimer: "Security considerations matter when evaluating enterprise platforms.",
      },
    },
  ],
  relatedResources: [
    {
      title: "Drift Alternative",
      description: "Full Drift alternative comparison",
      href: "/alternatives/drift",
      linkText: "Read comparison",
    },
    {
      title: "Prestyj vs Conversica",
      description: "Compare to another enterprise platform",
      href: "/compare/prestyj-vs-conversica",
      linkText: "Read comparison",
    },
    {
      title: "Best for Franchises",
      description: "Why franchise operations choose Prestyj",
      href: "/best-for/real-estate-franchises",
      linkText: "Read article",
    },
  ],
  cta: {
    title: "Ready for a Real Estate-First Platform?",
    description:
      "See how enterprise real estate operations are choosing purpose-built solutions over generic B2B platforms. Deploy in days, not months.",
    buttonText: "Book Your Enterprise Demo",
    disclaimer: "See multi-office capabilities. No 12-week implementation.",
  },
});

export const driftMetadata: CompareMetadata = {
  slug: "prestyj-vs-drift",
  competitorName: "Drift",
  title: "Prestyj vs Drift: Enterprise Real Estate Lead Response Compared",
  description:
    "Compare Prestyj and Drift for real estate operations. Drift costs $60K+/year with 12-week implementation. See why real estate enterprises choose purpose-built solutions.",
  keywords: [
    "Drift alternative",
    "Drift alternative real estate",
    "Drift vs Prestyj",
    "Prestyj vs Drift",
    "Drift enterprise alternative",
    "Drift pricing",
    "Drift review",
    "conversational AI real estate",
    "Drift competitor",
    "Drift security breach",
  ],
};
