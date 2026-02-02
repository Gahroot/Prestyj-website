import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const wealthManagementFirms: BestForPageContent = createBestForPage({
  slug: "wealth-management-firms",
  niche: {
    name: "Wealth Management Firms & Private Banks",
    shortName: "Wealth Management",
    description: "Enterprise wealth management needing compliant, done-for-you AI for high-net-worth prospect engagement",
  },
  meta: {
    title: "Done-For-You AI Agents for Wealth Management Firms | Prestyj",
    description:
      "Enterprise wealth management firms get production-ready AI that qualifies HNW prospects, books consultations, and integrates with Salesforce FSC—in weeks, not months. Zero technical complexity.",
    keywords: [
      "AI for wealth management firms",
      "done for you AI private banking",
      "AI lead response wealth management",
      "enterprise financial services AI",
      "Salesforce FSC AI integration",
      "HNW prospect qualification AI",
      "private bank AI agents",
    ],
  },
  hero: {
    badge: "Built for Enterprise Wealth Management",
    headlineAccent: "Wealth Management Firms & Private Banks",
    subheadline:
      "Stop losing high-net-worth prospects to slow response. Get done-for-you AI that engages prospects in seconds, qualifies by AUM and timeline, and routes to the right advisor team—fully integrated with Salesforce Financial Services Cloud.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Shield" as IconName,
      title: "Enterprise-Grade Compliance",
      description:
        "Built for firms managing billions in AUM. FINRA-aware conversations, audit trails included, compliance review workflows. AI qualifies and routes without ever giving investment advice or making recommendations.",
    },
    {
      icon: "Users" as IconName,
      title: "Intelligent Advisor Routing",
      description:
        "Route HNW prospects to the right advisor team based on AUM thresholds, specialization (trusts, alternatives, retirement), geography, or capacity. Senior advisors only see $5M+ opportunities.",
    },
    {
      icon: "Zap" as IconName,
      title: "Production-Ready in 3 Weeks",
      description:
        "While internal builds take 12-24 months and cost $300K-500K, done-for-you gets you live in 3 weeks. We handle Salesforce FSC integration, advisor routing logic, compliance review—everything.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Continuous Optimization Included",
      description:
        "We monitor conversion rates by prospect segment, optimize qualification questions, and improve routing logic based on performance data. Your AI agents get better every week—automatically.",
    },
  ],
  painPoints: [
    {
      problem: "HNW prospects go to competitors during your 24-48 hour response window",
      solution:
        "AI engages prospects in under 60 seconds, 24/7. When a $10M prospect submits a form Saturday afternoon, they get immediate engagement and book a consultation before competitors reply Monday morning.",
    },
    {
      problem: "Junior staff can't qualify complex HNW prospects (trusts, alternatives, concentrated stock)",
      solution:
        "AI asks sophisticated qualifying questions: current AUM, investment complexity, planning needs, dissatisfaction with current advisor. Surfaces high-value opportunities without requiring senior advisor time upfront.",
    },
    {
      problem: "Internal AI builds take 18+ months, cost $500K+, and often fail (67% failure rate)",
      solution:
        "Done-for-you eliminates build risk. We've deployed AI for firms managing $10B+ AUM. You get proven methodologies, not 18 months of trial and error. Live in 3 weeks with guaranteed production deployment.",
    },
    {
      problem: "DIY platforms require technical expertise you don't have (APIs, webhooks, CRM mapping)",
      solution:
        "Zero technical work on your end. We handle Salesforce FSC integration, advisor routing, phone system setup, compliance workflows. You approve the strategy, we execute everything.",
    },
    {
      problem: "Compliance concerns about AI conversations with HNW prospects",
      solution:
        "All conversation flows reviewed for FINRA awareness. AI stays in qualification mode—no advice, no recommendations, no performance projections. Full audit trails and conversation recordings for compliance review.",
    },
  ],
  comparison: {
    headers: ["Approach", "Prestyj Done-For-You", "Internal Build / DIY Platforms"],
    rows: [
      {
        feature: "Time to Production",
        prestyj: "3 weeks, fully managed",
        others: "12-24 months internal / 6+ months DIY",
      },
      {
        feature: "Total Implementation Cost",
        prestyj: "60-80% less than internal builds",
        others: "$300K-500K+ internal / $50K+ DIY setup",
      },
      {
        feature: "Success Rate",
        prestyj: "67% (vendor partnerships)",
        others: "33% (internal DIY builds)",
      },
      {
        feature: "Salesforce FSC Integration",
        prestyj: "Done for you (standard offering)",
        others: "You build custom API integration",
      },
      {
        feature: "Compliance Review Support",
        prestyj: "Included (FINRA-aware flows)",
        others: "Your compliance team builds process",
      },
      {
        feature: "Advisor Routing Logic",
        prestyj: "Configured for you (AUM, specialty, capacity)",
        others: "You code routing rules",
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
      question: "How does AI route prospects to the right advisor team?",
      answer:
        "AI uses your routing rules: AUM thresholds ($1M-5M to team A, $5M+ to senior advisors), geography, advisor specialization (trusts, alternatives, retirement), or capacity. If an advisor is at capacity, AI routes to the next available qualified advisor. Fully customizable.",
    },
    {
      question: "Can this integrate with our Salesforce Financial Services Cloud instance?",
      answer:
        "Yes, Salesforce FSC is our most common integration. We map lead capture, qualification data, conversation transcripts, and scheduled consultations to your FSC objects. Most integrations complete in 10-14 days as part of implementation.",
    },
    {
      question: "What's the qualification process for $10M+ prospects?",
      answer:
        "AI asks about current AUM, investment sophistication (alternatives, private equity, concentrated stock), financial planning needs (trusts, estate, tax), dissatisfaction drivers with current advisor, and decision timeline. High-value prospects are flagged for immediate senior advisor outreach.",
    },
    {
      question: "How much cheaper is done-for-you than building internally?",
      answer:
        "Internal builds cost $300K-500K+ in engineering time (12-24 months), often fail (67% failure rate), and require ongoing maintenance ($60K-100K annually). Done-for-you costs 60-80% less, guaranteed production deployment in 3 weeks, and includes ongoing optimization.",
    },
    {
      question: "Do you work with regional firms or only bulge bracket wealth managers?",
      answer:
        "Both. We serve regional RIAs managing $1B-10B AUM and national wealth management firms managing $100B+ AUM. Done-for-you scales to your complexity—from single-office firms to multi-region enterprises with hundreds of advisors.",
    },
  ],
  cta: {
    headline: "Engage HNW Prospects in Seconds, Not Days",
    subheadline:
      "See how enterprise wealth management firms use done-for-you AI to qualify $5M+ prospects, route intelligently, and book more consultations. Schedule a demo to see your AI in action.",
    buttonText: "Book Enterprise Demo",
    footnote: "Salesforce FSC integrated. FINRA-aware. Production-ready in 3 weeks.",
  },
});
