import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const aiImplementationPartnerCompareData: ComparePageData = createComparePage({
  slug: "ai-implementation-partner-vs-consultant",
  competitorName: "AI Implementation Partners",
  hero: {
    badge: "Engagement Model Comparison",
    title: "AI Implementation Partner vs. Consultant:",
    titleAccent: "Which Delivers Better Results?",
    subtitle:
      "Implementation partners provide technical execution. Consultants provide strategy and expertise. But which model actually delivers successful AI projects for service businesses?",
    description: "",
    keyStats: [
      {
        value: "70%",
        label: "of AI projects fail with pure execution partners",
      },
      {
        value: "Strategy + Execution",
        label: "Required for success",
      },
      {
        value: "40%",
        label: "Less expensive with specialized consultants",
      },
      {
        value: "Weeks",
        label: "vs. Months for typical partners",
      },
    ],
  },
  stats: [
    {
      value: "70%",
      label: "AI project failure rate with execution-only partners",
      description:
        "Technical execution without strategic guidance builds the wrong thing or fails to deliver ROI",
    },
    {
      value: "2-4 weeks",
      label: "Typical consultant implementation timeline",
      description:
        "Specialized consultants move fast with pre-built solutions and proven workflows",
    },
    {
      value: "40-60%",
      label: "Cost savings with specialized consultants",
      description:
        "Implementation partners have higher overhead and longer project cycles",
    },
  ],
  pricing: {
    prestyj: {
      price: "Custom flat pricing",
      priceSubtext: "Strategy + execution + optimization included",
      features: [
        { text: "Strategic consulting included", included: true },
        { text: "Done-for-you implementation", included: true },
        { text: "Industry specialization", included: true },
        { text: "Ongoing optimization", included: true },
        { text: "No separate strategy or execution fees", included: true },
        { text: "Proven methodology with 70%+ success rate", included: true },
      ],
    },
    competitor: {
      price: "$15,000-50,000+ per project",
      priceSubtext: "Implementation fees, plus separate strategy fees",
      features: [
        { text: "Technical execution only", included: true, note: "Strategy is separate or missing" },
        { text: "Custom build from scratch", included: true, note: "Slower, more expensive" },
        { text: "Generalist (non-industry specific)", included: true },
        { text: "Separate strategy consulting", included: true, note: "Additional $5K-20K" },
        { text: "Maintenance and optimization separate", included: true, note: "Extra $3K-10K/month" },
        { text: "Long implementation cycles", included: true, note: "3-6 months typical" },
      ],
    },
  },
  features: [
    {
      feature: "Strategic Guidance",
      prestyj: "Included",
      competitor: "Separate or missing",
      note: "Partners execute; strategy is your problem or requires separate engagement",
    },
    {
      feature: "Implementation Speed",
      prestyj: "2-4 weeks",
      competitor: "3-6 months",
      note: "Consultants use pre-built solutions. Partners build from scratch",
    },
    {
      feature: "Industry Expertise",
      prestyj: "Specialized (service businesses)",
      competitor: "Generalist",
      note: "Most partners serve all industries with generic solutions",
    },
    {
      feature: "Total Cost",
      prestyj: "$3K-6K/month + implementation",
      competitor: "$15K-50K+ implementation + separate optimization",
      note: "Partners appear cheaper for implementation but total cost is much higher",
    },
    {
      feature: "Success Rate",
      prestyj: "70%+ (proven methodology)",
      competitor: "30% (execution without strategy)",
      note: "Pure technical execution fails without strategic guidance",
    },
    {
      feature: "Ongoing Optimization",
      prestyj: "Included",
      competitor: "Additional cost",
      note: "Partners build and leave. Consultants optimize continuously.",
    },
    {
      feature: "Change Management",
      prestyj: "Included",
      competitor: "Your responsibility",
      note: "Partners focus on technology, not people and adoption",
    },
    {
      feature: "ROI Focus",
      prestyj: "Primary metric",
      competitor: "Technical delivery",
      note: "Partners deliver technology. Consultants deliver business results",
    },
    {
      feature: "Account Model",
      prestyj: "Direct to implementation team",
      competitor: "Account manager + delivery team",
      note: "Partners add account management layer (slower communication)",
    },
    {
      feature: "Flexibility",
      prestyj: "Month-to-month available",
      competitor: "Long-term contracts",
      note: "Partners require 6-12 month commitments to recoup setup costs",
    },
  ],
  whySwitch: {
    title: "Why Smart Businesses Choose Specialized Consultants Over Implementation Partners",
    description:
      "Implementation partners are great if you have a perfectly spec'd technical project and unlimited budget. For everyone else, they're expensive, slow, and risky.",
    reasons: [
      {
        icon: "DollarSign",
        title: "The Hidden Cost of Custom Builds",
        description:
          "Implementation partners build from scratch—slow and expensive. Consultants use pre-built, proven solutions optimized for your industry. Same result, 40-60% less cost, weeks faster.",
      },
      {
        icon: "TrendingUp",
        title: "Strategy Isn't Optional",
        description:
          "70% of AI projects fail due to poor strategy, not bad technology. Implementation partners execute whatever you ask—even if it's the wrong thing. Consultants tell you when you're making mistakes and suggest better approaches.",
      },
      {
        icon: "Clock",
        title: "3-6 Months vs. 2-4 Weeks",
        description:
          "Partners need months to design, build, test, and deploy custom solutions. Consultants deploy proven solutions in weeks. Your competition doesn't wait—neither should you.",
      },
      {
        icon: "RefreshCw",
        title: "They Build and Leave",
        description:
          "Implementation partners hand off the code and disappear. AI degrades without optimization. Consultants include ongoing optimization because they know AI requires continuous improvement.",
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
        "Specialized consultant vs. full agency team—which delivers better ROI?",
      href: "/compare/ai-consultant-vs-ai-agency",
      linkText: "Compare consultants to agencies",
    },
    {
      title: "AI Consultant Deliverables: What to Expect",
      description:
        "Scope, timeline, outcomes—what AI consultants should actually deliver.",
      href: "/blog/ai-consultant-deliverables-2026",
      linkText: "Understand deliverables",
    },
    {
      title: "AI Pilot Program Consulting",
      description:
        "Test before committing to full implementation with a controlled pilot.",
      href: "/solutions/ai-pilot-program-consulting",
      linkText: "Explore pilot programs",
    },
  ],
  cta: {
    title: "Need Strategy AND Execution?",
    description:
      "Get the strategic guidance of a consultant plus the hands-on execution of an implementation partner—all in one, at 40-60% less than traditional implementation partners.",
    buttonText: "See Your Custom Approach",
    buttonHref: "/book-demo",
    disclaimer:
      "No commitment required. We'll show you how we combine strategy and execution for your specific use case.",
  },
});

export const aiImplementationPartnerMetadata: CompareMetadata = {
  slug: "ai-implementation-partner-vs-consultant",
  competitorName: "AI Implementation Partners",
  title:
    "AI Implementation Partner vs. Consultant: Strategy + Execution | 2026",
  description:
    "Compare AI implementation partners (technical execution) vs. AI consultants (strategy + execution). Learn why specialized consultants deliver 70%+ success rates vs. 30% for partners.",
  keywords: [
    "AI implementation partner vs consultant",
    "AI consultant vs implementation partner",
    "AI consulting vs development",
    "AI strategy vs execution",
    "AI project success rates",
    "done-for-you AI vs custom development",
    "AI implementation methodology",
  ],
};
