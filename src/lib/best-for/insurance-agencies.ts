import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const insuranceAgencies: BestForPageContent = createBestForPage({
  slug: "insurance-agencies",
  niche: {
    name: "Insurance Agencies",
    shortName: "Insurance",
    description: "Independent insurance agents and agencies looking for AI-powered lead response",
  },
  meta: {
    title: "AI Agents for Insurance Agencies | 24/7 Lead Response | Prestyj",
    description:
      "AI voice and text agents for insurance agencies. Respond to quote requests in under 60 seconds, qualify prospects 24/7, and book more appointments. Save 13+ hours/week.",
    keywords: [
      "AI agents for insurance",
      "insurance AI lead response",
      "AI for insurance agencies",
      "insurance lead qualification",
      "AI insurance agent",
      "automated insurance lead follow-up",
    ],
  },
  hero: {
    badge: "Insurance AI",
    headlineAccent: "Insurance Agencies",
    subheadline:
      "Quote requests come in around the clock. AI responds in under 60 seconds, qualifies coverage needs, and books appointments while you focus on closing policies.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Clock" as IconName,
      title: "Save 13+ Hours Per Week",
      description:
        "McKinsey reports insurance agents save an average of 13 hours per week with AI automation. That's time back to focus on high-value client relationships.",
    },
    {
      icon: "Zap" as IconName,
      title: "Sub-60-Second Response",
      description:
        "When someone requests a quote at 10 PM, AI responds instantly. Speed-to-lead matters in insurance—the first agent to respond wins the policy.",
    },
    {
      icon: "Shield" as IconName,
      title: "Consistent Qualification",
      description:
        "AI asks the right questions every time: coverage type, current carrier, policy expiration, budget. No leads fall through the cracks.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Appointments on Your Calendar",
      description:
        "Qualified prospects are booked directly on your calendar. Wake up to appointments, not a list of callbacks.",
    },
  ],
  painPoints: [
    {
      problem: "Quote requests come in at all hours",
      solution:
        "AI responds 24/7/365 with instant, personalized engagement. No more missed leads because you were with a client or asleep.",
    },
    {
      problem: "Spending hours on unqualified prospects",
      solution:
        "AI pre-qualifies every lead by gathering coverage needs, budget, and timeline before you ever get on a call.",
    },
    {
      problem: "Can't afford a full-time receptionist or ISA",
      solution:
        "AI delivers better coverage than a human at a fraction of the cost. No salary, no benefits, no sick days.",
    },
    {
      problem: "Inconsistent follow-up on quote requests",
      solution:
        "AI follows up systematically on every lead—no more forgotten callbacks or leads that slipped through.",
    },
    {
      problem: "Competitors respond faster and win the business",
      solution:
        "With sub-60-second response times, you become the first agent they talk to. First responder advantage in insurance is everything.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Hours to days",
      },
      {
        feature: "Coverage Hours",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Qualification Consistency",
        prestyj: "100% consistent",
        others: "Varies by person",
      },
      {
        feature: "Monthly Cost",
        prestyj: "Fraction of staff cost",
        others: "$3,000-5,000+ for receptionist",
      },
      {
        feature: "Sick Days/PTO",
        prestyj: "Never",
        others: "15-20 days/year",
      },
      {
        feature: "Appointment Booking",
        prestyj: "Automated",
        others: "Manual scheduling",
      },
      {
        feature: "Lead Tracking",
        prestyj: "Built-in CRM",
        others: "Separate system needed",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Does AI understand insurance-specific qualification?",
      answer:
        "Yes. Prestyj AI is configured to ask the right questions for insurance: coverage type (auto, home, life, commercial), current carrier, policy expiration date, coverage limits, and budget range. The AI adapts to different insurance product lines.",
    },
    {
      question: "How does AI handle complex insurance questions?",
      answer:
        "AI handles initial qualification and appointment booking. When prospects ask detailed coverage questions, AI seamlessly hands off to you with full context. You handle the expertise; AI handles the volume.",
    },
    {
      question: "Can AI integrate with my agency management system?",
      answer:
        "Prestyj integrates with major insurance CRMs and agency management systems. Leads and conversations sync automatically so you maintain a single source of truth.",
    },
    {
      question: "What about compliance with insurance regulations?",
      answer:
        "AI is configured to stay within qualification parameters and doesn't provide coverage advice or quotes. It qualifies interest and books appointments—you handle the licensed work.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Most insurance agencies are live within days, not weeks. We handle setup and configuration so you can focus on your clients.",
    },
  ],
  cta: {
    headline: "Stop Losing Quote Requests to Slow Response",
    subheadline:
      "The first agent to respond wins the policy. Book a demo to see how AI can put you first in line for every lead.",
    buttonText: "Book Your Demo",
    footnote: "No credit card required. See your lead response transformation in minutes.",
  },
});
