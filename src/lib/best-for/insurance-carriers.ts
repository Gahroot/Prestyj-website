import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const insuranceCarriers: BestForPageContent = createBestForPage({
  slug: "insurance-carriers",
  niche: {
    name: "Insurance Carriers & Underwriters",
    shortName: "Insurance Carriers",
    description: "Insurance carriers and TPAs needing enterprise done-for-you AI for claims processing and policy servicing at scale",
  },
  meta: {
    title: "Done-For-You AI Agents for Insurance Carriers | Prestyj",
    description:
      "Enterprise insurance carriers get production-ready AI for claims FNOL, policy servicing, and agent support—integrated with Guidewire or Duck Creek. Deployed in weeks, not 18 months.",
    keywords: [
      "AI for insurance carriers",
      "done for you AI insurance underwriting",
      "AI claims processing automation",
      "enterprise insurance AI",
      "Guidewire AI integration",
      "insurance carrier AI agents",
      "AI FNOL automation",
    ],
  },
  hero: {
    badge: "Built for Enterprise Insurance Carriers",
    headlineAccent: "Insurance Carriers & TPAs",
    subheadline:
      "Stop losing $2M+ on pilot-to-production failures. Get done-for-you AI for claims FNOL, policy servicing, and agent support—integrated with Guidewire or Duck Creek. Production-ready in 4-6 weeks, not 18 months.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Shield" as IconName,
      title: "Enterprise-Grade Compliance",
      description:
        "Built for carriers processing millions of claims annually. NAIC-aware, audit trails included, regulatory reporting ready. AI handles routine work while escalating complex scenarios to human adjusters.",
    },
    {
      icon: "Zap" as IconName,
      title: "Production-Ready in 4-6 Weeks",
      description:
        "While internal builds take 12-24 months and cost $500K-1M+, done-for-you gets you live in 4-6 weeks. We handle Guidewire integration, FNOL workflows, policy admin system connection—everything.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Proven 60% Processing Time Reduction",
      description:
        "Documented results: 60% reduction in claims processing time, 70% of support tickets automated, 40% cost reduction per claim. ROI positive in 90-120 days for most carriers.",
    },
    {
      icon: "Target" as IconName,
      title: "Legacy System Integration Included",
      description:
        "We've integrated with 20-year-old policy admin systems, mainframes with outdated programming languages, and undocumented legacy platforms. Complexity is our specialty, not your problem.",
    },
  ],
  painPoints: [
    {
      problem: "91% of carriers expected to adopt AI by 2026 but internal builds fail 95% of the time",
      solution:
        "Done-for-you eliminates build risk. We've deployed AI for carriers processing $1B+ in annual premiums. You get proven methodologies from day one, not 18 months of trial and error ending in pilot purgatory.",
    },
    {
      problem: "Legacy policy admin systems don't integrate with modern AI platforms (APIs, SDKs)",
      solution:
        "We specialize in legacy system integration. Undocumented mainframes, outdated programming languages, vendor-unsupported platforms—we've connected them all. Phased integration approach minimizes disruption.",
    },
    {
      problem: "DIY platforms take 12-18 months to configure and still fail at production scale",
      solution:
        "Done-for-you gets you to production in 4-6 weeks with guaranteed deployment. No pilot purgatory, no 18-month engineering projects. We handle Guidewire, Duck Creek, or custom system integration—fully managed.",
    },
    {
      problem: "NAIC enforcement starting 2026-2027 adds regulatory pressure and compliance complexity",
      solution:
        "Our AI is built for insurance regulatory requirements. Proper disclosures, no unauthorized recommendations, audit trails for regulatory review. State-specific playbooks for multi-jurisdiction carriers.",
    },
    {
      problem: "Claims adjusters spend 60% of time on routine FNOL and status inquiries, not complex cases",
      solution:
        "AI handles routine FNOL (loss details, injured parties, property damage), policy lookups, and status inquiries. Adjusters focus on complex claims, fraud investigation, and high-value negotiations. 3-5X efficiency gains.",
    },
  ],
  comparison: {
    headers: ["Approach", "Prestyj Done-For-You", "Internal Build / DIY Platforms"],
    rows: [
      {
        feature: "Time to Production",
        prestyj: "4-6 weeks, fully managed",
        others: "12-24 months internal / 6-12 months DIY",
      },
      {
        feature: "Success Rate",
        prestyj: "Guaranteed production deployment",
        others: "95% fail to reach production",
      },
      {
        feature: "Total Implementation Cost",
        prestyj: "60-80% less than internal builds",
        others: "$500K-1M+ internal / $100K+ DIY setup",
      },
      {
        feature: "Legacy System Integration",
        prestyj: "Done for you (any platform)",
        others: "You build custom connectors",
      },
      {
        feature: "NAIC Compliance Support",
        prestyj: "Included (state-specific playbooks)",
        others: "Your compliance team builds process",
      },
      {
        feature: "Processing Time Reduction",
        prestyj: "60% (documented across carriers)",
        others: "Unknown (if it reaches production)",
      },
      {
        feature: "Ongoing Optimization",
        prestyj: "Continuous (we monitor & improve)",
        others: "Your IT team maintains",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can you integrate with our Guidewire or Duck Creek platform?",
      answer:
        "Yes. We handle integrations with all major carrier systems: Guidewire ClaimCenter/PolicyCenter, Duck Creek Claims/Policy, Insurity, and custom-built platforms. FNOL data, claims updates, and policy lookups sync automatically. Most enterprise integrations complete in 3-4 weeks.",
    },
    {
      question: "How does AI handle first notice of loss (FNOL) calls?",
      answer:
        "AI collects critical FNOL information: loss date/time/location, parties involved, injuries/damages, initial liability assessment. For standard claims (auto collision, property damage), AI can complete FNOL. Complex scenarios (fatalities, significant injuries, fraud indicators) escalate to adjusters immediately.",
    },
    {
      question: "What about our 20-year-old policy admin system on a mainframe?",
      answer:
        "Legacy system integration is our specialty. We've connected AI to mainframes with undocumented APIs, proprietary programming languages, and vendor-unsupported platforms. Phased integration approach minimizes risk: start with read-only data access, then add write capabilities after validation.",
    },
    {
      question: "How much cheaper is done-for-you than building internally?",
      answer:
        "Internal builds cost $500K-1M+ in engineering time (12-24 months), have 95% failure rate, and require $100K-200K annual maintenance. Done-for-you costs 60-80% less, guaranteed production deployment in 4-6 weeks, and includes ongoing optimization. ROI positive in 90-120 days.",
    },
    {
      question: "Do you handle multi-state carriers with different NAIC requirements?",
      answer:
        "Yes. We create state-specific conversation flows and compliance playbooks. AI adapts disclosures, routing logic, and escalation rules based on the state where the policy was issued. Handles multi-jurisdiction complexity automatically.",
    },
  ],
  cta: {
    headline: "Stop Pilot Purgatory. Get to Production in Weeks.",
    subheadline:
      "See how insurance carriers use done-for-you AI to automate FNOL, reduce processing time 60%, and free adjusters for complex claims. Schedule an enterprise demo to see results.",
    buttonText: "Book Enterprise Demo",
    footnote: "Guidewire integrated. NAIC-compliant. Production-ready in 4-6 weeks.",
  },
});
