import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const kvcoreUsers: BestForPageContent = createBestForPage({
  slug: "kvcore-users",
  niche: {
    name: "kvCORE Users",
    shortName: "kvCORE",
    description: "Real estate teams and brokerages using kvCORE who want AI-powered lead response",
  },
  meta: {
    title: "AI Lead Response for kvCORE Users | Prestyj",
    description:
      "Prestyj enhances your kvCORE platform with AI that responds to leads in under 60 seconds, qualifies buyers and sellers, and books appointments — all syncing back to your kvCORE CRM.",
    keywords: [
      "kvCORE AI integration",
      "AI for kvCORE users",
      "kvCORE lead response automation",
      "kvCORE AI lead follow up",
      "kvCORE real estate AI",
      "enhance kvCORE with AI",
    ],
  },
  hero: {
    badge: "Built for kvCORE Users",
    headlineAccent: "kvCORE Users",
    subheadline:
      "kvCORE gives you the platform. Prestyj gives you the AI that makes it work 24/7 — responding to every lead in under 60 seconds and booking appointments directly into your kvCORE pipeline.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Instant Response on All kvCORE Leads",
      description:
        "Every lead that enters your kvCORE pipeline — from ads, IDX, or any source — gets an AI response in under 60 seconds. No manual follow-up required.",
    },
    {
      icon: "Database" as IconName,
      title: "Seamless kvCORE Sync",
      description:
        "All AI conversations, qualification data, and appointment bookings sync back into your kvCORE CRM automatically. Your database stays clean and current.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "AI That Handles What kvCORE Can't",
      description:
        "kvCORE automates sequences but can't have real conversations. Prestyj's AI engages leads in genuine dialogue — qualifying them and moving them toward an appointment.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Maximize Your kvCORE Investment",
      description:
        "You're already paying for kvCORE. Prestyj makes it dramatically more effective by ensuring every lead in your database gets immediate, intelligent follow-up.",
    },
  ],
  painPoints: [
    {
      problem: "kvCORE drip campaigns not generating responses",
      solution:
        "Generic drip emails get ignored. AI sends personalized, conversational messages that lead to real replies — and real appointments.",
    },
    {
      problem: "Leads sitting in kvCORE going cold",
      solution:
        "AI doesn't wait for you to act. Every new lead gets an immediate outreach — before they forget they were even interested.",
    },
    {
      problem: "Agents not following up on kvCORE lead alerts",
      solution:
        "AI is the first line of response for every lead. By the time your agent gets the hot-lead notification, AI has already qualified them.",
    },
    {
      problem: "Hard to track what's happening with leads across agents",
      solution:
        "Prestyj adds a full conversation and qualification layer on top of your kvCORE data — giving you visibility that the platform alone doesn't provide.",
    },
    {
      problem: "Old leads in kvCORE that never converted",
      solution:
        "Lead reactivation campaigns re-engage your cold kvCORE database. Many teams get 20%+ response rates from leads that were dormant for months.",
    },
  ],
  comparison: {
    headers: ["Capability", "kvCORE + Prestyj", "kvCORE Alone"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, always",
        others: "Depends on agent checking kvCORE",
      },
      {
        feature: "Conversational AI",
        prestyj: "Full 2-way conversation",
        others: "Automated drip sequences",
      },
      {
        feature: "24/7 Coverage",
        prestyj: "Complete",
        others: "Only during business hours",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated before agent involvement",
        others: "Agent must call and qualify manually",
      },
      {
        feature: "Appointment Booking",
        prestyj: "AI books directly to agent calendar",
        others: "Manual coordination",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with kvCORE?",
      answer:
        "We connect via webhook or API. When a lead enters your kvCORE system, Prestyj receives it instantly and begins the AI follow-up sequence. Conversation data and appointment bookings sync back into kvCORE automatically.",
    },
    {
      question: "Will using Prestyj affect my kvCORE drip campaigns?",
      answer:
        "We work alongside your existing kvCORE automations. Typically we recommend letting Prestyj handle the initial outreach and conversation, then hand off to your kvCORE sequences for longer-term nurture.",
    },
    {
      question: "Can Prestyj reactivate old leads from my kvCORE database?",
      answer:
        "Yes. We can run targeted reactivation campaigns to specific segments of your kvCORE database — filtering by last contact date, lead source, or any other criteria.",
    },
    {
      question: "Does Prestyj work with kvCORE Smart CRM?",
      answer:
        "Yes. Prestyj integrates with all kvCORE tiers. Contact us to discuss your specific kvCORE setup and we'll confirm compatibility before you start.",
    },
    {
      question: "How long does the integration take to set up?",
      answer:
        "Most kvCORE integrations are live within 7–10 business days including AI training, integration setup, and test campaign validation.",
    },
  ],
  cta: {
    headline: "Make Your kvCORE Investment Work Harder",
    subheadline:
      "See how Prestyj supercharges kvCORE with AI-powered instant lead response and appointment booking. Book a demo and we'll show you the integration live.",
    buttonText: "Book a Demo",
  },
});
