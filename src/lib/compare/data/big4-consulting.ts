import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const big4ConsultingCompareData: ComparePageData = createComparePage({
  slug: "ai-consultant-vs-big4-consulting",
  competitorName: "Big 4 Consulting Firms",
  hero: {
    badge: "Consulting Firm Comparison",
    title: "AI Consultant vs. Big 4 Firms:",
    titleAccent: "Which Delivers Better ROI?",
    subtitle:
      "Big 4 firms (Deloitte, PwC, EY, KPMG) offer AI consulting at enterprise scale. But do you need their overhead? Specialized consultants deliver better results for 60-80% less.",
    description: "",
    keyStats: [
      {
        value: "60-80%",
        label: "less expensive with specialized consultants",
      },
      {
        value: "$50K-250K",
        label: "Big 4 AI project minimum",
      },
      {
        value: "4-8 months",
        label: "Typical Big 4 timeline",
      },
      {
        value: "2-4 weeks",
        label: "Specialized consultant timeline",
      },
    ],
  },
  stats: [
    {
      value: "$50,000-250,000+",
      label: "Minimum project cost for Big 4 AI consulting",
      description:
        "Enterprise pricing with enterprise overhead: account managers, project managers, junior associates learning on your dime",
    },
    {
      value: "4-8 months",
      label: "Typical Big 4 AI project timeline",
      description:
        "Layers of review, approval, and coordination slow everything down",
    },
    {
      value: "60-80%",
      label: "Cost savings with specialized consultants",
      description:
        "Same (often better) results without the Big 4 overhead and hierarchy",
    },
  ],
  pricing: {
    prestyj: {
      price: "Custom flat pricing",
      priceSubtext: "Industry specialization without Big 4 overhead",
      features: [
        { text: "Direct access to senior experts", included: true },
        { text: "Industry specialization (service businesses)", included: true },
        { text: "Fast implementation (2-4 weeks)", included: true },
        { text: "Ongoing optimization included", included: true },
        { text: "No junior staff learning curve", included: true },
        { text: "Flexible month-to-month options", included: true },
      ],
    },
    competitor: {
      price: "$50,000-250,000+",
      priceSubtext: "Plus separate strategy, implementation, and maintenance fees",
      features: [
        { text: "Prestigious brand name", included: true, note: "But at significant cost" },
        { text: "Large teams", included: true, note: "Partners + managers + associates = overhead" },
        { text: "Enterprise methodology", included: true, note: "Proven but slow and bureaucratic" },
        { text: "Multiple service layers", included: true, note: "You pay for partner, manager, associate time" },
        { text: "Long-term contracts", included: true, note: "6-12 month commitments typical" },
        { text: "Change orders common", included: true, note: "Scope changes = extra fees" },
      ],
    },
  },
  features: [
    {
      feature: "Expertise Level",
      prestyj: "Senior/practitioner level",
      competitor: "Mixed (partners + juniors)",
      note: "Big 4 assigns junior associates who learn on your project",
    },
    {
      feature: "Industry Specialization",
      prestyj: "Service business experts",
      competitor: "Generalist (all industries)",
      note: "Big 4 serves every industry with less specialized knowledge",
    },
    {
      feature: "Speed",
      prestyj: "2-4 weeks",
      competitor: "4-8 months",
      note: "Big 4 hierarchy and processes slow everything down",
    },
    {
      feature: "Total Cost",
      prestyj: "$10K-30K typical project",
      competitor: "$50K-250K+ minimum",
      note: "You're paying for Big 4 brand and overhead, not results",
    },
    {
      feature: "Team Composition",
      prestyj: "Lean, senior team",
      competitor: "Layered hierarchy",
      note: "Big 4 assigns partners, managers, associates—you pay for all of them",
    },
    {
      feature: "Responsiveness",
      prestyj: "Direct, fast",
      competitor: "Bureaucratic, slow",
      note: "Big 4 requires internal approvals and consensus",
    },
    {
      feature: "Flexibility",
      prestyj: "Month-to-month available",
      competitor: "6-12 month contracts",
      note: "Big 4 needs long commitments to recoup setup costs",
    },
    {
      feature: "Optimization",
      prestyj: "Included",
      competitor: "Separate engagement",
      note: "Big 4 charges separately for ongoing work",
    },
    {
      feature: "Accountability",
      prestyj: "Direct access to implementers",
      competitor: "Multiple layers",
      note: "Big 4 account managers shield you from actual implementers",
    },
    {
      feature: "Innovation",
      prestyj: "Cutting-edge, agile",
      competitor: "Conservative, established",
      note: "Big 4 is risk-averse and slow to adopt new approaches",
    },
  ],
  whySwitch: {
    title: "Why Smart Businesses Choose Specialized Consultants Over Big 4 Firms",
    description:
      "Big 4 firms are right for Fortune 500 AI transformations. For everyone else, they're expensive, slow, and over-resourced.",
    reasons: [
      {
        icon: "DollarSign",
        title: "You're Paying for Their Brand, Not Results",
        description:
          "Big 4 overhead is massive: plush offices, managing partners, sales teams, marketing, HR, IT. You pay for all of it through project fees. Specialized consultants have minimal overhead—those savings pass to you.",
      },
      {
        icon: "Users",
        title: "Junior Associates Learning on Your Dime",
        description:
          "Big 4 projects include recent graduates learning AI, your industry, and your business. You're paying full rates for training. Specialized consultants deploy senior experts who know AI and your industry from day one.",
      },
      {
        icon: "Clock",
        title: "4-8 Months vs. 2-4 Weeks",
        description:
          "Big 4 processes require partner reviews, stakeholder approvals, consensus-building, and endless meetings. Specialized consultants move fast with lean processes and direct decision-making. Speed matters—your competition won't wait.",
      },
      {
        icon: "RefreshCw",
        title: "They Excel at Presentations, Not Execution",
        description:
          "Big 4 firms are brilliant at slide decks and strategy documents. But execution? They often hand off to implementation partners or charge additional. Specialized consultants do strategy AND execution for one price.",
      },
    ],
  },
  relatedResources: [
    {
      title: "AI Consulting Engagement Models Explained",
      description:
        "Retainers, project-based, hourly, outcome-based—what each model means.",
      href: "/blog/ai-consulting-engagement-models-explained-2026",
      linkText: "Compare engagement models",
    },
    {
      title: "AI Consultant vs. AI Agency",
      description:
        "Specialized consultant vs. full agency team vs. Big 4—which delivers?",
      href: "/compare/ai-consultant-vs-ai-agency",
      linkText: "Compare all options",
    },
    {
      title: "Fractional AI Consultant vs. Full-Time Employee",
      description:
        "Compare specialized consultants to hiring in-house or Big 4 teams.",
      href: "/compare/fractional-ai-consultant-vs-full-time-employee",
      linkText: "Compare engagement models",
    },
    {
      title: "AI Pilot Program Consulting",
      description:
        "Test AI with a small investment before committing to Big 4 pricing.",
      href: "/solutions/ai-pilot-program-consulting",
      linkText: "Explore pilot programs",
    },
  ],
  cta: {
    title: "Need Big 4 Results at 60-80% Less Cost?",
    description:
      "Get the expertise and methodology of Big 4 firms without the overhead, junior staff, and slow processes. Senior practitioners, industry specialization, and fast execution.",
    buttonText: "Compare Your Options",
    buttonHref: "/book-demo",
    disclaimer:
      "No commitment required. We'll compare Big 4 vs. specialized consultant approaches for your specific use case.",
  },
});

export const big4ConsultingMetadata: CompareMetadata = {
  slug: "ai-consultant-vs-big4-consulting",
  competitorName: "Big 4 Consulting Firms",
  title:
    "AI Consultant vs. Big 4 Firms: Cost, Speed, and ROI Comparison | 2026",
  description:
    "Compare AI consultants to Big 4 consulting firms (Deloitte, PwC, EY, KPMG). Learn why specialized consultants deliver 60-80% cost savings with faster implementation for service businesses.",
  keywords: [
    "AI consultant vs Big 4",
    "Deloitte vs AI consultant",
    "PwC AI consulting vs specialized",
    "EY AI consulting comparison",
    "KPMG AI vs boutique consultant",
    "big 4 AI consulting cost",
    "enterprise AI vs specialized consultant",
  ],
};
