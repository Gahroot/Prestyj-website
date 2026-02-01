import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const realEstateTeams: BestForPageContent = createBestForPage({
  slug: "real-estate-teams",
  niche: {
    name: "Real Estate Teams",
    shortName: "Teams",
    description: "Multi-agent teams needing consistent lead distribution and follow-up",
  },
  meta: {
    title: "Best Lead Response for Real Estate Teams | Prestyj",
    description:
      "Discover why real estate teams choose Prestyj for consistent lead response and distribution. Eliminate ISA turnover, ensure 24/7 coverage, and scale your team's capacity.",
    keywords: [
      "best lead response for real estate teams",
      "real estate team lead management",
      "team lead distribution",
      "real estate team AI",
      "ISA for real estate teams",
      "lead routing real estate",
    ],
  },
  hero: {
    badge: "Built for Real Estate Teams",
    headlineAccent: "Real Estate Teams",
    subheadline:
      "Give every lead the instant, consistent response they deserve. Intelligent routing, 24/7 coverage, and zero ISA turnover headaches.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Users" as IconName,
      title: "Intelligent Lead Distribution",
      description:
        "Route leads to the right agent based on availability, specialty, location, or round-robin. Every lead gets to the best agent for that opportunity.",
    },
    {
      icon: "Clock" as IconName,
      title: "Consistent 24/7 Coverage",
      description:
        "No more coverage gaps when ISAs are sick, quit, or on vacation. AI provides the same quality response at 3am as 3pm.",
    },
    {
      icon: "Zap" as IconName,
      title: "Eliminate Training Time",
      description:
        "Stop spending 2-4 weeks training new ISAs who might leave in 6 months. AI is ready instantly and never forgets your scripts.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scale Instantly",
      description:
        "Double your lead volume without doubling your staff. AI handles unlimited leads with the same response quality.",
    },
  ],
  painPoints: [
    {
      problem: "ISAs quitting after you've invested in training",
      solution:
        "AI never quits. Your investment in setup pays dividends forever. No turnover, no retraining, no lost institutional knowledge.",
    },
    {
      problem: "Inconsistent follow-up across team members",
      solution:
        "Every lead gets the same high-quality follow-up sequence. No more leads falling through the cracks because an agent got busy.",
    },
    {
      problem: "Leads not getting to the right agent",
      solution:
        "Intelligent routing matches leads with agents based on your rules: geography, price point, availability, specialty, or custom criteria.",
    },
    {
      problem: "Night and weekend coverage gaps",
      solution:
        "AI works every hour of every day. Saturday night leads get the same instant response as Tuesday morning leads.",
    },
    {
      problem: "Scaling requires hiring more ISAs",
      solution:
        "AI capacity is unlimited. Handle 100 leads or 10,000 leads without hiring another person.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Traditional ISA Team"],
    rows: [
      {
        feature: "Initial Response Time",
        prestyj: "Under 60 seconds, guaranteed",
        others: "1-5 minutes (during business hours)",
      },
      {
        feature: "Coverage Hours",
        prestyj: "24/7/365",
        others: "40-60 hrs/week with overtime",
      },
      {
        feature: "Cost per Lead Handled",
        prestyj: "Decreases as volume grows",
        others: "Fixed cost per ISA hire",
      },
      {
        feature: "Turnover Rate",
        prestyj: "Zero",
        others: "30-50% annually in ISA roles",
      },
      {
        feature: "Training Time",
        prestyj: "Instant deployment",
        others: "2-4 weeks per new hire",
      },
      {
        feature: "Lead Routing",
        prestyj: "Rules-based intelligent routing",
        others: "Manual or basic round-robin",
      },
      {
        feature: "Performance Consistency",
        prestyj: "100% consistent",
        others: "Varies by individual",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does lead routing work for our team?",
      answer:
        "You set the rules: round-robin, availability-based, geographic, price-point, or custom criteria. Leads are automatically routed to the right agent. You can adjust rules anytime as your team evolves.",
    },
    {
      question: "Can team leads monitor AI conversations?",
      answer:
        "Yes. Team leaders have full visibility into all conversations, response times, and outcomes. Use insights to coach agents and optimize your lead handling.",
    },
    {
      question: "What about our existing CRM and tools?",
      answer:
        "Prestyj integrates with major real estate CRMs and tools. Your workflow stays intact while gaining 24/7 AI coverage. Leads and conversations sync automatically.",
    },
    {
      question: "How do agents get notified of hot leads?",
      answer:
        "Agents receive instant notifications when AI qualifies a lead as hot or when a lead requests to speak with an agent. Configurable alerts via text, email, or app notification.",
    },
    {
      question: "Can different agents have different AI personalities?",
      answer:
        "Absolutely. Each agent can customize their AI's voice, qualifying questions, and handoff preferences. The AI adapts to represent each agent appropriately.",
    },
  ],
  cta: {
    headline: "Give Your Team 24/7 Lead Coverage",
    subheadline:
      "See how top real estate teams use Prestyj to respond to every lead instantly, route opportunities intelligently, and scale without hiring. Book a team demo today.",
    buttonText: "Book a Team Demo",
  },
});
