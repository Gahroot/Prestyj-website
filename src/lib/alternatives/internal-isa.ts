import type { AlternativePageContent } from "./types";
import { createAlternativePage } from "@/lib/content-factory";

export const internalIsa: AlternativePageContent = createAlternativePage({
  slug: "internal-isa",
  type: "direct-competitor",
  competitor: {
    name: "Internal ISA Teams",
    shortName: "Internal ISA",
    pricing: "$57K-$69K/year per ISA + benefits",
    description:
      "In-house Inside Sales Agents hired, trained, and managed by your brokerage",
  },
  meta: {
    title:
      "Internal ISA Team Alternative for Enterprise Real Estate | Prestyj",
    description:
      "Compare AI lead response vs. internal ISA teams for 50+ office operations. See the real costs: 30% annual turnover, 4-5 month ramp time, and management overhead.",
    keywords: [
      "internal ISA alternative",
      "ISA team alternative",
      "AI vs ISA real estate",
      "real estate ISA cost",
      "ISA turnover",
      "enterprise ISA alternative",
      "AI lead response vs ISA",
    ],
  },
  hero: {
    badge: "Build vs Buy Analysis",
    subheadline:
      "Internal ISA teams require significant investment in hiring, training, and management. Compare the total cost of ownership for 50+ office operations.",
  },
  industryStats: [
    {
      stat: "30%",
      description: "average annual ISA turnover rate",
    },
    {
      stat: "4-5 mo",
      description: "before new ISAs become productive",
    },
    {
      stat: "$18K",
      description: "average cost per failed ISA hire",
    },
    {
      stat: "<50%",
      description: "of ISAs become profitable after 10 months",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Response Consistency",
        prestyj: true,
        competitor: "Varies",
        note: "ISA performance varies by individual skill and motivation",
      },
      {
        feature: "24/7 Lead Coverage",
        prestyj: true,
        competitor: false,
        note: "ISAs work business hours; nights/weekends require shifts",
      },
      {
        feature: "Multi-Office Scalability",
        prestyj: true,
        competitor: "Difficult",
        note:
          "Scaling ISA teams across 50+ offices requires significant hiring and management overhead",
      },
      {
        feature: "No Turnover Risk",
        prestyj: true,
        competitor: false,
        note:
          "30% annual turnover means constant recruitment and retraining cycles",
      },
      {
        feature: "Instant Ramp-Up",
        prestyj: true,
        competitor: false,
        note: "ISAs need 4-5 months to become fully productive",
      },
      {
        feature: "Consistent Lead Qualification",
        prestyj: true,
        competitor: "Varies",
        note: "Qualification rigor varies wildly across ISAs",
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
        note: "Requires training and monitoring to ensure ISAs follow regulations",
      },
    ],
    competitorPricing: {
      price: "$57K-$69K",
      period: "/year per ISA",
      note: "+ benefits, taxes, management, facilities",
      pros: [
        "Human judgment for complex situations",
        "Can handle unexpected scenarios",
        "Relationship building over time",
      ],
      cons: [
        "30% annual turnover rate industry-wide",
        "4-5 month ramp time before productivity",
        "$18,000 average cost per failed hire",
        "Less than 50% become profitable after 10 months",
        "Requires daily coaching and call reviews",
        "Business hours only without shift premiums",
      ],
    },
    prestyjPricingOverrides: {
      price: "Custom pricing",
      note: "Scaled for enterprise operations",
      pros: [
        "Zero turnover risk",
        "Deploys in days, not months",
        "24/7/365 coverage included",
        "Consistent quality across all offices",
        "Portfolio-level reporting built-in",
        "TCPA compliance by design",
      ],
    },
  },
  whySwitch: [
    {
      icon: "TrendingDown",
      title: "Eliminate Turnover Costs",
      description:
        "At 30% annual turnover, a 50-office operation loses ~15 ISAs per year. At $18K per failed hire plus recruitment costs, turnover alone costs hundreds of thousands annually.",
    },
    {
      icon: "Clock",
      title: "Skip the 4-5 Month Ramp Period",
      description:
        "New ISAs require $10K-$12.5K in salary before producing results. AI deploys fully operational in days, not months.",
    },
    {
      icon: "Building2",
      title: "Scale Without Linear Cost Increase",
      description:
        "Doubling your offices doesn't mean doubling your ISA headcount. AI scales to handle increased volume without proportional cost increases.",
    },
    {
      icon: "BarChart3",
      title: "Unified Performance Visibility",
      description:
        "See lead response metrics across all 50+ offices in real-time. No more waiting for monthly reports or reconciling data from different locations.",
    },
  ],
  whenCompetitorFits: [
    "You need human judgment for ultra-high-value, complex negotiations",
    "Your leads require extensive relationship building before conversion",
    "You have a proven ISA training program with below-industry turnover",
    "Your volume is low enough that 1-2 ISAs can handle coverage",
  ],
  whenPrestyjFits: [
    "You operate 50+ offices and can't manage ISA teams at scale",
    "Turnover is killing your lead response consistency",
    "You need 24/7 coverage without paying overnight premiums",
    "You want portfolio-level visibility into lead response performance",
    "You're tired of the 4-5 month ramp cycle every time an ISA leaves",
    "You need consistent TCPA compliance across all locations",
  ],
  relatedResources: [
    {
      href: "/compare/prestyj-vs-internal-isa-team",
      title: "AI vs ISA Team: Full Cost Analysis",
      description: "Detailed breakdown of total cost of ownership",
    },
    {
      href: "/compare/prestyj-vs-offshore-isa",
      title: "AI vs Offshore ISA Services",
      description: "Compare to outsourced ISA alternatives",
    },
    {
      href: "/best-for/real-estate-franchises",
      title: "Best for Franchises",
      description: "Why franchise operations choose AI over ISA teams",
    },
  ],
  cta: {
    headline: "Ready to Move Beyond ISA Team Challenges?",
    subheadline:
      "See how enterprise brokerages are replacing unpredictable ISA teams with consistent AI lead response. Portfolio visibility, zero turnover, and 24/7 coverage included.",
    buttonText: "Book Your Enterprise Demo",
    buttonHref: "/book-demo",
    footnote: "See multi-office deployment. Calculate your ISA cost savings.",
  },
});
