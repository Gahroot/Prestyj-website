import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const offshoreIsaCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-offshore-isa",
  competitorName: "Offshore ISA Services",
  hero: {
    badge: "Outsourcing Comparison",
    title: "AI Lead Response vs",
    titleAccent: "Offshore ISA Services",
    subtitle:
      "Offshore ISA services offer cost savings—but at what risk? Compare quality control, TCPA compliance, and enterprise scalability for 50+ office operations.",
    description: "",
  },
  stats: [
    {
      value: "15+",
      label: "states with mini-TCPA laws",
    },
    {
      value: "Jan 2026",
      label: "new FCC consent rules take effect",
    },
    {
      value: "$500-$1.5K",
      label: "TCPA violation penalty per call",
    },
    {
      value: "285%",
      label: "TCPA class action surge (Sept 2025)",
    },
  ],
  pricing: {
    prestyj: {
      price: "Custom pricing",
      priceSubtext: "TCPA compliance included",
      features: [
        { text: "TCPA compliance by design", included: true },
        { text: "Consistent brand voice every time", included: true },
        { text: "No third-party dependency", included: true },
        { text: "Real-time portfolio visibility", included: true },
        { text: "Scales without quality degradation", included: true },
      ],
    },
    competitor: {
      price: "$1,500-$3,000",
      priceSubtext: "/month per agent + compliance risk exposure",
      features: [
        { text: "Lower direct labor costs", included: true },
        { text: "24/7 coverage available", included: true },
        {
          text: "TCPA compliance training and monitoring burden on you",
          included: false,
        },
        { text: "Quality variance across different agents", included: false },
        { text: "Limited US market knowledge", included: false },
        { text: "Provider turnover affects your leads", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Brand Voice Consistency",
      prestyj: true,
      competitor: "Varies",
      note: "Offshore agents may not match your brand tone across conversations",
    },
    {
      feature: "TCPA Compliance Built-In",
      prestyj: true,
      competitor: "Risk",
      note: "New Jan 2026 regulations require one-to-one consent tracking across 15+ state jurisdictions",
    },
    {
      feature: "24/7 Coverage",
      prestyj: true,
      competitor: true,
      note: "Both offer around-the-clock availability",
    },
    {
      feature: "Multi-Office Scalability",
      prestyj: true,
      competitor: "Limited",
      note: "Quality control becomes difficult at scale with distributed offshore teams",
    },
    {
      feature: "Response Consistency",
      prestyj: true,
      competitor: "Varies",
      note: "Different agents, different quality—hard to maintain standards",
    },
    {
      feature: "US Market Knowledge",
      prestyj: true,
      competitor: "Limited",
      note: "Offshore staff face steep learning curve on local market nuances",
    },
    {
      feature: "No Provider Turnover Impact",
      prestyj: true,
      competitor: false,
      note: "When offshore providers churn staff, your lead response suffers",
    },
    {
      feature: "Real-Time Performance Visibility",
      prestyj: true,
      competitor: "Limited",
      note: "Offshore reporting often delayed or inconsistent across locations",
    },
  ],
  whySwitch: {
    title: "Why Enterprise Operations Choose AI",
    description: "Risk reduction and quality consistency drive the decision",
    reasons: [
      {
        icon: "Shield",
        title: "Eliminate TCPA Compliance Risk",
        description:
          "New 2026 regulations require one-to-one consent per seller across 15+ state mini-TCPA laws. AI has compliance built into every conversation—no training required.",
      },
      {
        icon: "Globe",
        title: "Consistent Brand Voice",
        description:
          "Offshore teams struggle to match your brand tone. AI delivers the same quality conversation whether it's the first call or the ten-thousandth.",
      },
      {
        icon: "AlertTriangle",
        title: "Remove Provider Risk",
        description:
          "When your offshore provider has turnover or quality issues, your lead response suffers. AI eliminates third-party dependency.",
      },
      {
        icon: "BarChart3",
        title: "Real-Time Portfolio Visibility",
        description:
          "See lead response metrics across all 50+ offices instantly. No more waiting for offshore provider reports or reconciling different data formats.",
      },
    ],
  },
  specialSections: [
    {
      type: "tcpa-warning",
      position: "after-pricing",
      data: {
        icon: "AlertTriangle",
        title: "2026 TCPA Compliance Warning",
        description:
          "New FCC rules effective January 2026 require one-to-one consent per seller. 15+ states have mini-TCPA laws with varying requirements. Violations cost $500-$1,500 per call—not per consumer. Class action filings surged 285% in September 2025 alone.",
        footer:
          "Managing TCPA compliance across offshore teams and 50+ offices creates significant legal exposure.",
        whenToUse: {
          competitor: {
            title: "When Offshore ISA Is Right",
            scenarios: [
              "You need human conversation for complex negotiations",
              "You have robust TCPA compliance infrastructure",
              "You can accept quality variance between agents",
              "Volume is low enough to maintain quality control",
            ],
          },
          prestyj: {
            title: "When Prestyj AI Is Right",
            scenarios: [
              "TCPA compliance is a critical concern",
              "Brand voice consistency matters across all leads",
              "You want to eliminate third-party provider risk",
              "You need real-time visibility across 50+ offices",
              "Scale requires consistent quality without degradation",
            ],
          },
        },
      },
    },
  ],
  relatedResources: [
    {
      title: "AI vs Internal ISA Team",
      description: "Compare in-house ISA cost analysis",
      href: "/compare/prestyj-vs-internal-isa-team",
      linkText: "Read comparison",
    },
    {
      title: "ISA Alternative",
      description: "Full ISA alternative comparison",
      href: "/alternatives/internal-isa",
      linkText: "View alternatives",
    },
    {
      title: "Best for Franchises",
      description: "Why franchise operations choose AI",
      href: "/best-for/real-estate-franchises",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Ready for Compliant, Consistent Lead Response?",
    description:
      "See how enterprise operations are replacing offshore provider risk with AI-powered consistency. TCPA compliance, brand voice control, and real-time visibility included.",
    buttonText: "Book Your Enterprise Demo",
    disclaimer: "See compliance features. Evaluate quality consistency.",
  },
});

export const offshoreIsaMetadata: CompareMetadata = {
  slug: "prestyj-vs-offshore-isa",
  competitorName: "Offshore ISA Services",
  title: "AI Lead Response vs Offshore ISA Services: Enterprise Comparison",
  description:
    "Compare AI lead response vs offshore ISA services for 50+ office real estate operations. Evaluate quality control, TCPA compliance, and total cost of outsourced ISAs.",
  keywords: [
    "offshore ISA alternative",
    "outsourced ISA alternative",
    "offshore ISA vs AI",
    "real estate virtual ISA",
    "offshore lead response",
    "ISA outsourcing real estate",
    "TCPA compliance ISA",
    "offshore ISA quality",
    "AI vs offshore ISA",
  ],
};
