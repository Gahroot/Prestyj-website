import { TrendingDown, Clock, Building2, BarChart3 } from "lucide-react";
import type { ComparePageData, CompareMetadata } from "../types";

export const internalIsaTeamCompareData: ComparePageData = {
  slug: "prestyj-vs-internal-isa-team",
  competitorName: "Internal ISA Team",
  hero: {
    badge: "Build vs Buy Analysis",
    title: "AI Lead Response vs",
    titleAccent: "Internal ISA Teams",
    subtitle:
      "Internal ISA teams have worked for decades—but at enterprise scale, the math changes. Compare total cost of ownership for 50+ office operations.",
    description: "",
  },
  stats: [
    {
      value: "30%",
      label: "annual ISA turnover rate",
    },
    {
      value: "4-5 mo",
      label: "before ISAs become productive",
    },
    {
      value: "$18K",
      label: "average cost per failed hire",
    },
    {
      value: "<50%",
      label: "of ISAs profitable at 10 months",
    },
  ],
  pricing: {
    prestyj: {
      name: "Prestyj AI",
      price: "Custom pricing",
      priceSubtext: "Scaled for enterprise operations",
      highlight: true,
      features: [
        { text: "Zero turnover risk", included: true },
        { text: "Deploys in days, not months", included: true },
        { text: "24/7/365 coverage included", included: true },
        { text: "Consistent quality across all offices", included: true },
        { text: "Portfolio-level reporting built-in", included: true },
      ],
    },
    competitor: {
      name: "Internal ISA Team",
      price: "$57K-$69K",
      priceSubtext: "/year per ISA + benefits, taxes, management, turnover",
      features: [
        { text: "Human judgment for complex situations", included: true },
        { text: "Relationship building capability", included: true },
        { text: "30% annual turnover industry-wide", included: false },
        {
          text: "4-5 months before new ISAs produce",
          included: false,
        },
        { text: "$18K average cost per failed hire", included: false },
        { text: "Less than 50% profitable at 10 months", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Response Consistency",
      prestyj: true,
      competitor: "Varies",
      note: "ISA performance varies by individual skill, motivation, and day-to-day factors",
    },
    {
      feature: "24/7 Lead Coverage",
      prestyj: true,
      competitor: false,
      note: "ISAs work business hours; nights/weekends require expensive shift premiums",
    },
    {
      feature: "Multi-Office Scalability",
      prestyj: true,
      competitor: "Difficult",
      note: "Scaling ISA teams across 50+ offices requires proportional hiring and management",
    },
    {
      feature: "No Turnover Risk",
      prestyj: true,
      competitor: false,
      note: "30% annual turnover means constant recruitment and retraining cycles",
    },
    {
      feature: "Instant Deployment",
      prestyj: true,
      competitor: false,
      note: "New ISAs need 4-5 months of salary before producing results",
    },
    {
      feature: "Consistent Lead Qualification",
      prestyj: true,
      competitor: "Varies",
      note: "Qualification rigor varies wildly across individual ISAs",
    },
    {
      feature: "Portfolio-Level Visibility",
      prestyj: true,
      competitor: false,
      note: "ISA performance data often siloed by location",
    },
    {
      feature: "TCPA Compliance Built-In",
      prestyj: true,
      competitor: "Manual",
      note: "Requires ongoing training and monitoring to ensure ISA compliance",
    },
  ],
  whySwitch: {
    title: "Why Enterprise Operations Are Switching",
    description: "The economics change at scale—here's why VPs and Directors make the move",
    reasons: [
      {
        icon: TrendingDown,
        title: "Eliminate Turnover Costs",
        description:
          "At 30% annual turnover, a 50-office operation loses ~15 ISAs per year. At $18K per failed hire plus recruitment, turnover alone costs hundreds of thousands annually.",
      },
      {
        icon: Clock,
        title: "Skip the 4-5 Month Ramp Period",
        description:
          "New ISAs require $10K-$12.5K in salary before producing results. AI deploys fully operational in days, not months.",
      },
      {
        icon: Building2,
        title: "Scale Without Linear Cost Increase",
        description:
          "Doubling your offices doesn't mean doubling ISA headcount. AI scales to handle increased volume without proportional cost increases.",
      },
      {
        icon: BarChart3,
        title: "Unified Performance Visibility",
        description:
          "See lead response metrics across all 50+ offices in real-time. No more waiting for monthly reports or reconciling data from different locations.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Internal ISA Alternative",
      description: "Full comparison page with more details",
      href: "/alternatives/internal-isa",
      linkText: "Read more",
    },
    {
      title: "AI vs Offshore ISA",
      description: "Compare to outsourced ISA services",
      href: "/compare/prestyj-vs-offshore-isa",
      linkText: "Read comparison",
    },
    {
      title: "Best for Franchises",
      description: "Why franchise operations choose Prestyj",
      href: "/best-for/real-estate-franchises",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Ready to Move Beyond ISA Challenges?",
    description:
      "See how enterprise brokerages are replacing unpredictable ISA teams with consistent AI lead response. Calculate your potential savings.",
    buttonText: "Book Your Enterprise Demo",
    buttonHref: "/book-demo",
    disclaimer: "See multi-office deployment. Calculate your ISA cost savings.",
  },
};

export const internalIsaTeamMetadata: CompareMetadata = {
  slug: "prestyj-vs-internal-isa-team",
  competitorName: "Internal ISA Team",
  title: "AI Lead Response vs Internal ISA Team: Enterprise Cost Comparison",
  description:
    "Compare AI lead response vs internal ISA teams for 50+ office operations. ISAs cost $57K-$69K/year with 30% turnover. See total cost of ownership and why operations leaders are switching.",
  keywords: [
    "AI ISA cost vs human ISA cost",
    "ISA team alternative",
    "internal ISA alternative",
    "AI vs ISA real estate",
    "real estate ISA cost",
    "ISA turnover",
    "enterprise ISA alternative",
    "AI lead response vs ISA",
    "ISA replacement",
    "real estate inside sales agent cost",
  ],
};
