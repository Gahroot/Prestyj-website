import type { ComparePageData, CompareMetadata } from "../types";
import {
  createComparePage,
  buildCompareFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const conversicaCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-conversica",
  competitorName: "Conversica",
  hero: {
    badge: "Enterprise Comparison",
    title: "Prestyj vs Conversica",
    titleAccent: "For Enterprise Real Estate Operations",
    subtitle:
      "Conversica is a proven enterprise AI assistant—but it wasn't built for real estate. Compare how each platform serves 50+ office operations managing thousands of monthly leads.",
    description: "",
  },
  stats: [
    {
      value: "$2,999+",
      label: "Conversica monthly minimum",
    },
    {
      value: "2+ weeks",
      label: "Conversica implementation time",
    },
    {
      value: "48%",
      label: "of buyer inquiries get no response",
    },
    {
      value: "78%",
      label: "of buyers work with first responder",
    },
  ],
  pricing: {
    prestyj: {
      price: "Custom pricing",
      priceSubtext: "Scaled for your operation",
      features: [
        { text: "Built exclusively for real estate", included: true },
        { text: "Multi-office management included", included: true },
        {
          text: "Implementation, training, support included",
          included: true,
        },
        { text: "Deploys in days, not weeks", included: true },
      ],
    },
    competitor: {
      price: "$2,999+",
      priceSubtext: "/month + Hidden enterprise costs",
      features: [
        { text: "10+ years in market, proven technology", included: true },
        { text: "Unlimited seats included", included: true },
        { text: "Annual commitment required", included: false },
        {
          text: "Customization, training, maintenance extra",
          included: false,
        },
        { text: "Not optimized for real estate workflows", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Built for Real Estate",
      prestyj: true,
      competitor: false,
      note: "Conversica is industry-agnostic, requires customization for RE workflows",
    },
    {
      feature: "Multi-Office Management",
      prestyj: true,
      competitor: "Limited",
      note: "Prestyj built for 50+ office operations from day one",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    {
      feature: "Same-Day Implementation",
      prestyj: true,
      competitor: false,
      note: "Conversica requires 2+ weeks of setup and strategy calls",
    },
    {
      feature: "Transparent Pricing",
      prestyj: true,
      competitor: false,
      note: "Conversica pricing excludes customization, training, and maintenance",
    },
    {
      feature: "Responsive Support",
      prestyj: true,
      competitor: false,
      note: "Conversica users report difficulty reaching support",
    },
  ],
  whySwitch: {
    title: "Why Enterprise Operations Choose Prestyj",
    description:
      "Key reasons VPs and Directors at 50+ office operations make the switch",
    reasons: [
      {
        icon: "Building2",
        title: "Purpose-Built for Real Estate",
        description:
          "Conversica serves 20+ industries. Prestyj is built exclusively for real estate with workflows, compliance, and terminology your teams already understand.",
      },
      {
        icon: "Clock",
        title: "Faster Time to Value",
        description:
          "Conversica requires 2+ weeks of setup plus ongoing strategy calls. Prestyj deploys across your offices in days, not months.",
      },
      {
        icon: "DollarSign",
        title: "Predictable Total Cost",
        description:
          "Conversica's $2,999/month is just the start—customization, training, and maintenance add significantly. Prestyj pricing includes everything.",
      },
      {
        icon: "Zap",
        title: "Enterprise Operations Focus",
        description:
          "Multi-location dashboards, standardized workflows, and portfolio-level reporting designed for VPs managing 50+ offices.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Prestyj vs Structurely",
      description: "Compare to Structurely's real estate AI",
      href: "/compare/prestyj-vs-structurely",
      linkText: "Read comparison",
    },
    {
      title: "AI vs Human ISA",
      description: "The full cost comparison for enterprise teams",
      href: "/compare/prestyj-vs-isa",
      linkText: "Read comparison",
    },
    {
      title: "Best for Franchises",
      description: "Why franchise operations choose Prestyj",
      href: "/best-for/real-estate-franchises",
      linkText: "View details",
    },
  ],
  cta: {
    title: "Ready for a Real Estate-First Solution?",
    description:
      "Book a demo to see how Prestyj handles lead response across your entire operation—no lengthy implementation required.",
    buttonText: "Book Your Enterprise Demo",
    disclaimer: "See multi-office capabilities. No commitment required.",
  },
});

export const conversicaMetadata: CompareMetadata = {
  slug: "prestyj-vs-conversica",
  competitorName: "Conversica",
  title:
    "Prestyj vs Conversica: Enterprise Real Estate Lead Response Compared",
  description:
    "Compare Prestyj and Conversica for 50+ office operations. Conversica costs $2,999+/month with complex setup. See pricing, features, and which is best for your brokerage network.",
  keywords: [
    "Conversica alternative",
    "Conversica vs Prestyj",
    "Prestyj vs Conversica",
    "Conversica alternative real estate",
    "enterprise AI lead response",
    "Conversica pricing",
    "Conversica review",
    "AI sales assistant comparison",
    "real estate enterprise automation",
    "Conversica competitor",
  ],
};
