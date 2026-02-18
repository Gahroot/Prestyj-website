import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const aiAgencyCompareData: ComparePageData = createComparePage({
  slug: "ai-consultant-vs-ai-agency",
  competitorName: "AI Agencies",
  hero: {
    badge: "Engagement Model Comparison",
    title: "AI Consultant vs. AI Agency:",
    titleAccent: "Which Delivers Better ROI?",
    subtitle:
      "Consultants provide strategy and fractional expertise. Agencies deliver execution with full teams. But which model actually costs less and delivers faster for service businesses implementing AI?",
    description: "",
    keyStats: [
      {
        value: "30-50%",
        label: "Less expensive with consultants",
      },
      {
        value: "2-4 weeks",
        label: "Typical consultant implementation",
      },
      {
        value: "8-16+ weeks",
        label: "Typical agency timeline",
      },
      {
        value: "Months",
        label: "Notice period to end agency contracts",
      },
    ],
  },
  stats: [
    {
      value: "30-50%",
      label: "Cost savings with specialized consultants",
      description:
        "Agencies have higher overhead (account managers, project managers, sales teams) that you pay for",
    },
    {
      value: "2-4 weeks",
      label: "Average consultant implementation time",
      description:
        "Specialized consultants move fast with pre-built solutions and industry expertise",
    },
    {
      value: "8-16+ weeks",
      label: "Average agency project timeline",
      description:
        "Agencies have slower processes: discovery, scoping, resource allocation, development cycles",
    },
  ],
  pricing: {
    prestyj: {
      price: "Custom flat pricing",
      priceSubtext: "Predictable monthly cost, no agency overhead baked in",
      features: [
        { text: "Done-for-you implementation", included: true },
        { text: "Industry-specialized expertise", included: true },
        { text: "Direct access to implementation team", included: true },
        { text: "Ongoing optimization included", included: true },
        { text: "No account manager layer", included: true },
        { text: "Flexible month-to-month options", included: true },
      ],
    },
    competitor: {
      price: "$8,000-25,000+/month",
      priceSubtext: "Retainer pricing for AI agency services",
      features: [
        { text: "Full agency team access", included: true, note: "Project managers, designers, developers" },
        { text: "Strategic consulting", included: true },
        { text: "Custom development", included: true, note: "Slower, more expensive" },
        { text: "Account management", included: true, note: "Extra layer between you and implementers" },
        { text: "Long-term contracts", included: true, note: "6-12 month commitments typical" },
        { text: "Change orders for scope changes", included: true, note: "Additional fees for modifications" },
      ],
    },
  },
  features: [
    {
      feature: "Cost Efficiency",
      prestyj: "30-50% less expensive",
      competitor: "Higher overhead costs",
      note: "Agencies charge for sales teams, account managers, project managers you don't need",
    },
    {
      feature: "Implementation Speed",
      prestyj: "2-4 weeks",
      competitor: "8-16+ weeks",
      note: "Consultants use pre-built solutions. Agencies build from scratch or repurpose generalist code",
    },
    {
      feature: "Industry Expertise",
      prestyj: "Specialized in service businesses",
      competitor: "Varies widely",
      note: "Many agencies serve all industries. Look for home services specialization",
    },
    {
      feature: "Flexibility",
      prestyj: "Month-to-month available",
      competitor: "6-12 month contracts",
      note: "Agencies require long commitments to recoup business development costs",
    },
    {
      feature: "Direct Access",
      prestyj: "Work directly with implementers",
      competitor: "Account manager layer",
      note: "Agencies route communication through PMs, slowing feedback loops",
    },
    {
      feature: "Scope Changes",
      prestyj: "Included in retainer",
      competitor: "Change orders required",
      note: "Agencies typically charge extra for modifications beyond original scope",
    },
    {
      feature: "Ongoing Support",
      prestyj: "Included",
      competitor: "Varies",
      note: "Some agencies include support, others charge hourly for maintenance",
    },
    {
      feature: "Optimization",
      prestyj: "Continuous",
      competitor: "Project-dependent",
      note: "Agencies optimize when you pay for it. Consultants optimize as part of the service",
    },
    {
      feature: "Billing Model",
      prestyj: "Predictable flat rate",
      competitor: "Retainer + hourly",
      note: "Agencies often bill retainers plus hourly for scope creep",
    },
    {
      feature: "Team Size",
      prestyj: "Lean, specialized",
      competitor: "Large, generalist",
      note: "Agencies provide larger teams but slower communication and higher costs",
    },
  ],
  whySwitch: {
    title: "Why Service Businesses Choose Specialized Consultants Over Agencies",
    description:
      "Agencies sound impressive—they'll show you org charts, case studies, and sleek presentations. But you're paying for that overhead.",
    reasons: [
      {
        icon: "DollarSign",
        title: "You're Paying for Their Sales Team",
        description:
          "Agencies spend 20-30% of revenue on business development, marketing, and sales. Those costs? Passed directly to you in monthly retainers. Consultants with specialized expertise have minimal overhead and pass those savings to you.",
      },
      {
        icon: "Clock",
        title: "The Account Manager Bottleneck",
        description:
          "Agencies route everything through account managers to protect their developers' time. You request a change → account manager documents it → project manager prioritizes it → developer implements it → QA tests it → account manager delivers it. Consultants work directly with you, cutting that loop from weeks to days.",
      },
      {
        icon: "FileText",
        title: "Change Orders Equal Extra Revenue",
        description:
          "Agencies make significant revenue on scope changes. Want to add SMS to your voice AI? That's a change order—typically $2,000-5,000 in extra fees. Prestyj includes workflow modifications as part of your flat-rate service.",
      },
      {
        icon: "Calendar",
        title: "Six-Month Minimums Are Standard",
        description:
          "Agencies need 6-12 month commitments to make their economics work. They front resource acquisition costs and need time to recoup them. If the AI doesn't perform as expected, you're stuck paying for months. Prestyj offers month-to-month options because we're confident in results.",
      },
    ],
  },
  relatedResources: [
    {
      title: "AI Consulting Engagement Models Explained",
      description:
        "Retainers, project-based, hourly, outcome-based—what each model means for your business.",
      href: "/blog/ai-consulting-engagement-models-explained-2026",
      linkText: "Read the guide",
    },
    {
      title: "AI Consultant Pricing Guide 2026",
      description:
        "What you'll actually pay for AI consultants vs. agencies, with hidden costs revealed.",
      href: "/blog/ai-consultant-pricing-guide-2026",
      linkText: "See pricing breakdown",
    },
    {
      title: "Fractional AI Consultant vs Full-Time Employee",
      description:
        "Compare fractional AI expertise to hiring in-house AI engineers.",
      href: "/compare/fractional-ai-consultant-vs-full-time-employee",
      linkText: "Compare engagement models",
    },
    {
      title: "AI Consultant Deliverables: What to Expect",
      description:
        "Scope, timeline, and outcomes—what AI consultants should actually deliver.",
      href: "/blog/ai-consultant-deliverables-2026",
      linkText: "Understand deliverables",
    },
  ],
  cta: {
    title: "Need AI Implementation Without Agency Overhead?",
    titleAccent: "Without Agency Overhead",
    description:
      "Get industry-specialized AI expertise, done-for-you implementation, and ongoing optimization at 30-50% less than traditional AI agencies.",
    buttonText: "See Your Custom Pricing",
    buttonHref: "/book-demo",
    disclaimer:
      "No commitment required. We'll show you exact pricing, timeline, and ROI projections for your specific use case.",
  },
});

export const aiAgencyMetadata: CompareMetadata = {
  slug: "ai-consultant-vs-ai-agency",
  competitorName: "AI Agencies",
  title:
    "AI Consultant vs. AI Agency: Cost, Speed & ROI Comparison for Service Businesses | 2026",
  description:
    "Compare AI consultants vs. AI agencies on cost, implementation speed, and ROI. Learn why specialized AI consultants cost 30-50% less than agencies with faster delivery for service businesses.",
  keywords: [
    "AI consultant vs AI agency",
    "AI automation consultant cost",
    "AI consulting vs agency pricing",
    "fractional AI consultant",
    "AI implementation partner",
    "done-for-you AI vs agency",
    "AI consulting engagement models",
    "AI for service businesses",
    "AI consultant ROI",
  ],
};
