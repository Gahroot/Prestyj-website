import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const doneForYouAi: BestForPageContent = createBestForPage({
  slug: "done-for-you-ai",
  niche: {
    name: "Done-For-You AI Solutions",
    shortName: "Done-For-You AI",
    description: "Businesses looking for turnkey AI agent implementation without technical complexity",
  },
  meta: {
    title: "Done-For-You AI Agents | Turnkey Solutions with Zero Technical Complexity | Prestyj",
    description:
      "Get AI voice and text agents implemented in days, not months. No coding, no setup, no maintenance. Done-for-you AI lead response with predictable pricing and guaranteed results.",
    keywords: [
      "done for you AI agents",
      "done-for-you AI agents",
      "turnkey AI solutions",
      "managed AI agents",
      "AI agent implementation service",
      "done for you business AI",
      "turnkey AI voice agents",
      "managed AI voice agents",
    ],
  },
  hero: {
    badge: "Done-For-You AI",
    headlineAccent: "Done-For-You AI Solutions",
    subheadline:
      "Stop building. Start converting. Get AI agents live in days with zero technical complexity. We handle setup, integration, optimization, and ongoing management—you just book more appointments.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Live in Days, Not Months",
      description:
        "DIY platforms take 3-6 months to configure and optimize. Done-for-you gets you live in under 2 weeks. No learning curve, no engineering time, no setup headaches.",
    },
    {
      icon: "Shield" as IconName,
      title: "Zero Technical Complexity",
      description:
        "No APIs to configure. No webhooks to set up. No prompt engineering. We handle all technical implementation, integrations, and optimization. You just approve the strategy.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Predictable, Transparent Pricing",
      description:
        "No per-minute billing surprises. No hidden API costs. No engineering salaries. One predictable monthly price that includes everything: setup, management, optimization, and support.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Continuous Optimization Included",
      description:
        "DIY platforms give you tools and say good luck. Done-for-you means we continuously optimize your agents based on real performance data. Results improve over time, automatically.",
    },
  ],
  painPoints: [
    {
      problem: "DIY platforms promise 'no-code' but still require technical expertise",
      solution:
        "True done-for-you means zero technical work on your end. We handle API integrations, CRM connections, phone system setup, and ongoing maintenance. You focus on sales, we handle the technology.",
    },
    {
      problem: "Per-minute pricing from DIY platforms creates unpredictable costs",
      solution:
        "One flat monthly fee covers unlimited conversations. No surprise bills when leads spike. No calculating costs per minute. Predictable pricing that scales with your business, not your usage.",
    },
    {
      problem: "Building AI internally takes 6-18 months and often fails",
      solution:
        "We've built hundreds of AI agents. You get best practices from day one. Live in 1-2 weeks with proven strategies, not 18 months of trial and error.",
    },
    {
      problem: "DIY tools require constant monitoring and optimization",
      solution:
        "We monitor performance 24/7 and optimize continuously. Your AI agents get better every week based on real conversation data. No dashboards to check, no tweaks to make—we handle it.",
    },
    {
      problem: "No internal expertise for AI implementation",
      solution:
        "85% of businesses lack AI expertise. Done-for-you bridges that gap. You don't need to hire AI engineers, learn prompt engineering, or become a telephony expert. We bring the expertise.",
    },
  ],
  comparison: {
    headers: ["Approach", "Prestyj Done-For-You", "DIY Platforms"],
    rows: [
      {
        feature: "Time to Go Live",
        prestyj: "1-2 weeks",
        others: "3-6 months",
      },
      {
        feature: "Technical Expertise Required",
        prestyj: "Zero",
        others: "Moderate to high",
      },
      {
        feature: "Setup Work Required",
        prestyj: "None (we handle it)",
        others: "40-80 hours",
      },
      {
        feature: "Ongoing Optimization",
        prestyj: "Included (continuous)",
        others: "Your responsibility",
      },
      {
        feature: "Pricing Model",
        prestyj: "Predictable monthly",
        others: "$0.05-0.09/min + hidden fees",
      },
      {
        feature: "CRM Integration",
        prestyj: "Done for you",
        others: "You configure via APIs",
      },
      {
        feature: "Performance Monitoring",
        prestyj: "We monitor 24/7",
        others: "You check dashboards",
      },
      {
        feature: "Support Model",
        prestyj: "Dedicated success manager",
        others: "Community forums + docs",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "What does 'done-for-you' actually include?",
      answer:
        "Everything: strategy consultation, technical setup, CRM integrations, phone system configuration, AI training, testing, deployment, ongoing monitoring, continuous optimization, and unlimited support. You approve the approach, we execute everything.",
    },
    {
      question: "How is this different from DIY platforms like Vapi or Bland AI?",
      answer:
        "DIY platforms give you tools and documentation. Done-for-you means we do the work. You don't configure APIs, write prompts, set up webhooks, or optimize performance. We handle 100% of the technical work. You just see results.",
    },
    {
      question: "What if I have a complex workflow or integrations?",
      answer:
        "That's exactly when done-for-you shines. Complex integrations are where DIY projects fail. We've integrated with hundreds of CRMs, phone systems, and business tools. Complexity is our specialty, not your problem.",
    },
    {
      question: "How much cheaper is done-for-you than building internally?",
      answer:
        "Building internally costs $200K-500K+ (engineering salaries, opportunity cost, infrastructure). DIY platforms add hidden costs: engineering time ($20K-50K), failed implementations, and ongoing maintenance. Done-for-you typically costs 60-80% less than internal builds.",
    },
    {
      question: "Can I switch from a DIY platform I'm already using?",
      answer:
        "Absolutely. We migrate clients from Vapi, Bland, Retell, and others regularly. We handle the entire migration: rebuilding agents, moving integrations, testing, and going live. Most migrations complete in 2-3 weeks.",
    },
  ],
  cta: {
    headline: "Stop Building. Start Converting.",
    subheadline:
      "See how done-for-you AI eliminates technical complexity and delivers results in days, not months. Book a demo to see the difference between tools and turnkey solutions.",
    buttonText: "Book Your Demo",
    footnote: "No credit card required. No technical expertise needed. See your solution in action.",
  },
});
