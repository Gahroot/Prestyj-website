import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const sierraAi: AlternativePageContent = createAlternativePage({
  slug: "sierra-ai",
  type: "direct-competitor",
  competitor: {
    name: "Sierra AI",
    shortName: "Sierra",
    pricing: "Enterprise (contact for pricing)",
    website: "https://sierra.ai",
    description:
      "Enterprise-focused conversational AI platform founded by former Salesforce executives, offering agentic AI for customer service automation",
  },
  meta: {
    title: "Best Sierra AI Alternative | Prestyj AI Receptionist",
    description:
      "Looking for a Sierra AI alternative? Compare Prestyj vs Sierra: SMB-focused vs enterprise, transparent pricing vs contact sales, 15min setup vs implementation, receptionist-optimized vs general customer service.",
    keywords: [
      "sierra ai alternative",
      "sierra alternative",
      "best sierra ai alternative",
      "sierra ai competitors",
      "AI receptionist alternative",
      "AI customer service software",
      "alternative to sierra ai",
      "sierra ai pricing",
      "virtual receptionist AI",
      "enterprise AI alternative",
    ],
  },
  hero: {
    badge: "Sierra AI Alternative",
    subheadline:
      "Sierra AI is powerful for enterprises with complex implementation needs. But if you're a growing business wanting a receptionist that just works—without enterprise contracts or months of setup—there's a better solution.",
  },
  industryStats: [
    {
      stat: "68%",
      description: "of callers hang up after 3 rings—Prestyj answers in 1.2 sec",
    },
    {
      stat: "$50K-250K/year",
      description: "typical enterprise AI implementation cost with Sierra",
    },
    {
      stat: "200+ businesses",
      description: "using Prestyj with proven implementation data",
    },
    {
      stat: "15 minutes",
      description: "to go live with Prestyj (no implementation team needed)",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Target Market",
        prestyj: "SMB & growing businesses",
        competitor: "Enterprise only",
        note: "Sierra is built for Fortune 500 companies with complex needs",
      },
      {
        feature: "Setup & Deployment",
        prestyj: "15 minutes",
        competitor: "3-6 months",
        note: "Sierra requires implementation team, custom integration, and training",
      },
      {
        feature: "Pricing Model",
        prestyj: "Transparent monthly",
        competitor: "Custom contracts",
        note: "Sierra pricing is opaque, requires sales negotiation",
      },
      {
        feature: "Implementation Required",
        prestyj: "None (plug-and-play)",
        competitor: "Dedicated team needed",
        note: "Sierra requires system integration, workflow design, and deployment",
      },
      {
        feature: "Focus Area",
        prestyj: "Phone receptionist",
        competitor: "General customer service",
        note: "Prestyj specializes in phone answering, Sierra covers all channels",
      },
      {
        feature: "Minimum Commitment",
        prestyj: "Month-to-month",
        competitor: "Annual enterprise contracts",
        note: "Sierra typically requires 12-24 month commitments",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Sierra: you manage integrations and data pipelines"
      ),
      {
        feature: "Ready-Made Workflows",
        prestyj: "Receptionist templates included",
        competitor: "Custom-built",
        note: "Sierra workflows require design and implementation",
      },
      {
        feature: "24/7 Phone Coverage",
        prestyj: true,
        competitor: true,
        note: "Both available, but Prestyj is configured in minutes vs months",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.RESPONSE_24_7,
        true,
        "Prestyj configured for receptionist tasks out-of-box"
      ),
      {
        feature: "Support Model",
        prestyj: "Business-focused + white-glove",
        competitor: "Enterprise customer success",
        note: "Sierra offers enterprise support, Prestyj offers hands-on guidance",
      },
    ],
    competitorPricing: {
      price: "Custom",
      period: "enterprise pricing",
      note: "Requires sales contact—typical implementations $50K-250K/year, not including internal team costs",
      pros: [
        "Designed for complex enterprise ecosystems",
        "Agentic AI that can take actions across systems",
        "Deep integration capabilities with enterprise software",
        "Multi-channel coverage (phone, chat, email, SMS)",
        "Strong leadership team (former Salesforce executives)",
        "$2.9B valuation suggests strong investor backing",
        "Sophisticated workflow automation",
        "Enterprise-grade security and compliance",
      ],
      cons: [
        "No transparent pricing (must contact sales)",
        "Long implementation cycles (3-6 months typical)",
        "Requires significant internal resources",
        "Annual enterprise contracts (12-24 months)",
        "Built for Fortune 500, not growing businesses",
        "Complex setup requires dedicated team",
        "High total cost of ownership (implementation + licensing)",
        "Self-serve onboarding not available",
        "Overkill for SMB phone reception needs",
        "Not optimized for receptionist-specific workflows",
      ],
    },
    prestyjPricingOverrides: {
      price: "Predictable, transparent",
      note: "Month-to-month plans. No enterprise contracts. No implementation fees.",
      pros: [
        "Live in 15 minutes with zero code",
        "Built specifically for phone reception",
        "Transparent pricing (no contact sales required)",
        "Month-to-month flexibility",
        "Proven results from 200+ implementations",
        "White-glove onboarding included",
        "No minimum commitments",
        "SMB-focused support and guidance",
        "Receptionist-optimized workflows",
        "All-in pricing with no hidden fees",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "Go Live in Minutes, Not Months",
      description:
        "Sierra's enterprise implementation means 3-6 months of setup. Prestyj is built for receptionists—answer calls and set appointments on day one, no implementation team required.",
    },
    {
      icon: "DollarSign",
      title: "Transparent Pricing, Not Enterprise Contracts",
      description:
        "Sierra requires custom contracts and sales negotiations. Prestyj offers transparent, month-to-month pricing—you know exactly what you'll pay with no minimum commitments.",
    },
    {
      icon: "Target",
      title: "Built for Growing Businesses, Not Just Enterprises",
      description:
        "Sierra is optimized for Fortune 500 complexity. Prestyj is designed for SMBs that need reliable phone coverage without enterprise overhead.",
    },
    {
      icon: "BarChart3",
      title: "Proven Results from 200+ Businesses",
      description:
        "Sierra is newer to market with enterprise focus. Prestyj has implementation data from 200+ businesses across industries, with proven ROI templates ready to deploy.",
    },
  ],
  whenCompetitorFits: [
    "You're a Fortune 500 or large enterprise with complex needs",
    "You need deep integration across 10+ enterprise systems",
    "You have a dedicated implementation team and budget",
    "You require sophisticated agentic AI workflows beyond phone answering",
    "You need multi-channel AI (phone, chat, email, SMS) with unified orchestration",
    "You're comfortable with 3-6 month implementation cycles",
    "You need enterprise-grade compliance and data residency",
    "You have annual budgets and prefer negotiated enterprise contracts",
    "Your use case requires complex system actions and data updates",
    "You already have enterprise customer success infrastructure",
  ],
  whenPrestyjFits: [
    "You want a receptionist that answers your phone today (not in 6 months)",
    "You're an SMB, franchise, or growing business (not enterprise)",
    "You need transparent pricing without sales negotiations",
    "You want month-to-month flexibility (no annual contracts)",
    "You don't have an implementation team or want to avoid hiring one",
    "You need receptionist-specific workflows (appointments, messages, callbacks)",
    "You want proven results from 200+ similar businesses",
    "You prefer white-glove onboarding over self-serve implementation",
    "You value phone answering over complex multi-channel automation",
    "You want all-in pricing with no hidden fees or implementation costs",
    "You need business support focused on your industry, not general CS",
  ],
  relatedResources: [
    {
      href: "/alternatives/bland-ai",
      title: "Prestyj vs Bland AI",
      description: "Compare another enterprise-focused AI platform",
    },
    {
      href: "/blog",
      title: "AI Receptionist Blog",
      description: "Learn how AI receptionists work and ROI calculations",
    },
    {
      href: "/solutions/business-automation",
      title: "Business Automation Solutions",
      description: "Explore automation options for growing businesses",
    },
  ],
  cta: {
    headline: "Ready to Answer Calls Today?",
    subheadline:
      "Stop waiting for enterprise implementation. Prestyj is live in 15 minutes with transparent pricing and proven results from 200+ businesses.",
    buttonText: "Book Your Free 15-Minute Demo",
    buttonHref: "/book-demo",
    footnote:
      "See your AI receptionist live with your real phone number. No credit card, no implementation team, no enterprise contracts.",
  },
});
