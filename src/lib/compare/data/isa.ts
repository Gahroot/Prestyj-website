import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const isaCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-isa",
  competitorName: "Human ISA",
  hero: {
    badge: "Comparison Guide",
    title: "AI Sales Agent vs Human ISA:",
    titleAccent: "The Real Comparison",
    subtitle:
      "Should you hire a human Inside Sales Agent or use AI? We break down the real costs, capabilities, and use cases to help you make the right choice for your business.",
    description: "",
    keyStats: [
      {
        value: "$4k+",
        label: "ISA monthly salary",
      },
      {
        value: "78%",
        label: "choose first responder",
      },
      {
        value: "80%",
        label: "leads lost to slow response",
      },
      {
        value: "2-4 wks",
        label: "ISA training time",
      },
    ],
  },
  pricing: {
    prestyj: {
      price: "Custom pricing",
      priceSubtext: "Tailored to your needs",
      features: [
        { text: "24/7/365 availability", included: true },
        { text: "Under 60 seconds response time", included: true },
        { text: "No commission splits", included: true },
        { text: "Instant deployment", included: true },
        { text: "Unlimited capacity", included: true },
      ],
    },
    competitor: {
      price: "$4,000+",
      priceSubtext: "/month base salary",
      features: [
        { text: "40 hrs/week availability", included: true },
        { text: "Minutes to hours response time", included: true },
        { text: "15-25% commission split required", included: false },
        { text: "2-4 weeks training required", included: false },
        { text: "Requires coverage for sick days/PTO", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Monthly Cost",
      prestyj: "Custom pricing",
      competitor: "$4,000+ base salary",
      note: "Plus 15-25% commission splits",
    },
    {
      feature: "Availability",
      prestyj: "24/7/365",
      competitor: "40 hrs/week",
    },
    {
      feature: "Response Time",
      prestyj: "Under 60 seconds",
      competitor: "Minutes to hours",
    },
    {
      feature: "Sick Days / PTO",
      prestyj: "Never",
      competitor: "Yes, requires coverage",
    },
    {
      feature: "Commission Split",
      prestyj: "None",
      competitor: "15-25%",
    },
    {
      feature: "Training Required",
      prestyj: "Instant deployment",
      competitor: "2-4 weeks",
    },
    {
      feature: "Scalability",
      prestyj: "Unlimited capacity",
      competitor: "Hire more staff",
    },
    {
      feature: "Human Connection",
      prestyj: "AI-powered conversations",
      competitor: "Natural rapport building",
    },
    {
      feature: "Complex Negotiations",
      prestyj: "Handoff to agent",
      competitor: "Expert handling",
    },
  ],
  whySwitch: {
    title: "When a Human ISA Makes Sense",
    description:
      "There are legitimate scenarios where a human ISA might be the better choice for your business.",
    reasons: [
      {
        icon: "Users",
        title: "Complex Client Relationships",
        description:
          "Luxury markets or high-touch clients who expect personalized human interaction from the first contact.",
      },
      {
        icon: "Brain",
        title: "Local Market Expertise",
        description:
          "ISAs with deep neighborhood knowledge can provide nuanced insights that build immediate trust.",
      },
      {
        icon: "Heart",
        title: "Bilingual Requirements",
        description:
          "Markets requiring fluent conversation in multiple languages with cultural understanding.",
      },
      {
        icon: "Users",
        title: "Team Culture Fit",
        description:
          "When in-person collaboration and team dynamics are essential to your business model.",
      },
    ],
  },
  specialSections: [
    {
      type: "cost-calculator",
      position: "after-pricing",
      data: {
        title: "Cost Comparison Calculator",
        description:
          "See how much a human ISA costs over time based on verified industry data.",
        // The actual CostCalculator component will be rendered in the page
        humanBaseSalary: 4000,
        humanCommissionRate: 0.2,
        humanTrainingCost: 2000,
        humanTurnoverRate: 0.5,
        responseRate: 0.78,
        conversionRate: 0.02,
      },
    },
  ],
  relatedResources: [
    {
      title: "Prestyj vs Ylopo",
      description: "Compare Prestyj to Ylopo's AI platform",
      href: "/compare/prestyj-vs-ylopo",
      linkText: "Read comparison",
    },
    {
      title: "Speed-to-Lead Guide",
      description: "Why 5 minutes is already too late",
      href: "/blog/speed-to-lead",
      linkText: "Read article",
    },
    {
      title: "See Real Results",
      description: "Case studies from agents using Prestyj",
      href: "/results",
      linkText: "View results",
    },
  ],
  cta: {
    title: "Ready to See AI in Action?",
    description:
      "Book a demo and see how an AI agent handles your leads. No pressure, no commitment - just see if it is the right fit for your business.",
    buttonText: "Book a Demo",
    disclaimer: "Free demo. No credit card required.",
  },
});

// Additional data for the "When AI Makes More Sense" section
// This is a separate export because it's rendered as its own section
export const aiAgentBenefits = [
  {
    title: "High Lead Volume",
    description:
      "When you receive more inquiries than a human can respond to quickly. 78% of buyers work with the first responder.",
  },
  {
    title: "After-Hours Coverage",
    description:
      "Most leads come in evenings and weekends. Without 24/7 coverage, 80% of leads go cold due to slow response.",
  },
  {
    title: "Consistent Follow-Up",
    description:
      "AI never forgets to follow up, never has a bad day, and maintains the same quality on lead #1 and lead #100.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Eliminate $4,000+/month salary plus 15-25% commission splits while handling unlimited lead volume.",
  },
  {
    title: "Instant Scaling",
    description:
      "Launch a new marketing campaign without worrying about overwhelming your ISA or hiring additional staff.",
  },
  {
    title: "Zero Turnover",
    description:
      "ISA positions have high turnover rates. Avoid constant recruiting, hiring, and training cycles.",
  },
];

export const isaMetadata: CompareMetadata = {
  slug: "prestyj-vs-isa",
  competitorName: "Human ISA",
  title: "AI Sales Agent vs Human ISA: The Real Comparison",
  description:
    "Compare AI sales agents to human ISAs. Understand costs ($4,000+/month salary, 15-25% commission splits), availability (40 hrs/week vs 24/7), response times, and when each option makes sense for your real estate business.",
  keywords: [
    "AI ISA vs human ISA",
    "should I hire an ISA",
    "ISA cost comparison",
    "real estate ISA salary",
    "AI sales agent",
    "inside sales agent",
    "real estate lead response",
    "ISA vs AI agent",
    "hire ISA or use AI",
    "real estate automation",
  ],
};
