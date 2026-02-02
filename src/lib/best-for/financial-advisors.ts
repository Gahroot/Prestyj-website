import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const financialAdvisors: BestForPageContent = createBestForPage({
  slug: "financial-advisors",
  niche: {
    name: "Financial Advisors & Wealth Management Firms",
    shortName: "Financial Advisors",
    description: "RIAs, wealth managers, and financial advisory firms needing compliant, done-for-you AI lead response",
  },
  meta: {
    title: "Done-For-You AI Agents for Financial Advisors | Prestyj",
    description:
      "Get production-ready AI lead response for wealth management firms in weeks, not months. FINRA-aware, CRM-integrated, zero technical complexity. Done-for-you AI that converts prospects to appointments.",
    keywords: [
      "AI for financial advisors",
      "done for you AI financial services",
      "AI lead response wealth management",
      "financial advisor AI agents",
      "CRM automation for RIAs",
      "AI appointment booking financial advisors",
      "FINRA compliant AI agents",
    ],
  },
  hero: {
    badge: "Built for Financial Advisors",
    headlineAccent: "Financial Advisors & Wealth Managers",
    subheadline:
      "Stop losing prospects to slow follow-up. Get done-for-you AI that responds in seconds, qualifies leads, and books consultations—all while staying FINRA-aware and integrated with your CRM.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Shield" as IconName,
      title: "FINRA-Aware Compliance",
      description:
        "Our AI understands financial services regulations. No investment advice, no unsuitable recommendations—just compliant lead qualification that moves prospects to human advisors.",
    },
    {
      icon: "Zap" as IconName,
      title: "Production-Ready in 2 Weeks",
      description:
        "While DIY platforms take 3-6 months to configure, our done-for-you approach gets you live in 1-2 weeks. No engineering team needed, no technical expertise required.",
    },
    {
      icon: "Target" as IconName,
      title: "CRM Integration Included",
      description:
        "We handle Salesforce Financial Services Cloud, Wealthbox, Redtail, or your custom CRM integration. All conversations, qualifications, and appointments sync automatically.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Predictable Pricing, Guaranteed ROI",
      description:
        "No per-minute billing shocks. One flat monthly fee covers unlimited conversations. If one qualified consultation closes, you've covered your costs for months.",
    },
  ],
  painPoints: [
    {
      problem: "Prospects go cold during your 24-48 hour response window",
      solution:
        "AI responds in under 60 seconds, 24/7. Prospects get immediate engagement when they're hottest—Saturday night, early morning, holidays. Never lose a lead to timing again.",
    },
    {
      problem: "Junior staff can't handle complex qualification conversations",
      solution:
        "AI asks the right questions to surface AUM, investment timeline, current advisor relationship, and financial goals—without giving advice. Sophisticated qualification without the salary.",
    },
    {
      problem: "DIY platforms require 6+ months and $50K in engineering time",
      solution:
        "Done-for-you eliminates all technical work. We build, integrate, test, and deploy your AI agents. You approve the strategy, we handle execution. Live in 2 weeks, not 6 months.",
    },
    {
      problem: "Compliance concerns about AI giving investment advice",
      solution:
        "AI is programmed to qualify and book, never advise. Conversation flows reviewed for FINRA awareness. Every interaction stays in the safe zone while moving prospects forward.",
    },
    {
      problem: "Need coverage during market volatility and after-hours",
      solution:
        "When markets crash at 4pm EST or rally overnight, prospects are searching. AI provides immediate response and books urgent consultations when your team is offline.",
    },
  ],
  comparison: {
    headers: ["Approach", "Prestyj Done-For-You", "DIY Platforms (Salesforce, Drift)"],
    rows: [
      {
        feature: "Time to Production",
        prestyj: "1-2 weeks, fully managed",
        others: "3-6 months + engineering time",
      },
      {
        feature: "Technical Expertise Required",
        prestyj: "Zero (we handle everything)",
        others: "API config, webhooks, CRM mapping",
      },
      {
        feature: "CRM Integration",
        prestyj: "Done for you (any platform)",
        others: "You configure via APIs",
      },
      {
        feature: "Compliance Review",
        prestyj: "FINRA-aware conversations included",
        others: "Your compliance team reviews",
      },
      {
        feature: "Pricing Model",
        prestyj: "Flat monthly (unlimited conversations)",
        others: "$2/conversation + hidden API costs",
      },
      {
        feature: "Ongoing Optimization",
        prestyj: "Continuous (we monitor & improve)",
        others: "Your responsibility",
      },
      {
        feature: "Success Rate",
        prestyj: "67% (vendor partnerships)",
        others: "33% (internal DIY builds)",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI stay compliant with FINRA regulations?",
      answer:
        "Our AI is programmed to qualify leads and book consultations without providing investment advice, recommendations, or performance projections. Conversation flows are designed for compliance review. AI knows when to escalate to a human advisor.",
    },
    {
      question: "Can AI integrate with our existing Salesforce Financial Services Cloud?",
      answer:
        "Yes. We handle the entire Salesforce integration: lead capture, conversation logging, appointment creation, and custom field mapping. Most Salesforce integrations complete in 7-10 days as part of implementation.",
    },
    {
      question: "What if prospects ask investment questions AI can't answer?",
      answer:
        "AI is trained to recognize investment advice requests and seamlessly hand off to human advisors. Example: 'That's a great question about asset allocation—let me connect you with one of our advisors who can discuss your specific situation.'",
    },
    {
      question: "How much does done-for-you cost compared to building internally?",
      answer:
        "Internal builds cost $200K-500K+ in engineering time and often fail (67% failure rate). DIY platforms add hidden costs: engineering time ($20K-50K), failed implementations, ongoing maintenance. Done-for-you typically costs 60-80% less with guaranteed production deployment.",
    },
    {
      question: "Do you work with independent RIAs or only large firms?",
      answer:
        "Both. We serve solo RIAs managing $50M+ AUM and multi-advisor firms managing billions. Done-for-you scales to your size—whether you need one AI agent or a team of specialized agents for different prospect segments.",
    },
  ],
  cta: {
    headline: "Never Lose a Prospect to Slow Response Again",
    subheadline:
      "See how wealth management firms use done-for-you AI to respond in seconds, qualify intelligently, and book more consultations. Schedule a demo to see your AI agent in action.",
    buttonText: "Book Your Demo",
    footnote: "FINRA-aware. CRM-integrated. Production-ready in weeks.",
  },
});
