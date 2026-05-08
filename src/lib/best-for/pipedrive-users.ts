import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const pipedriveUsers: BestForPageContent = createBestForPage({
  slug: "pipedrive-users",
  niche: {
    name: "Pipedrive Users",
    shortName: "Pipedrive",
    description:
      "Sales teams using Pipedrive CRM for pipeline management, deal tracking, and activity automation",
  },
  meta: {
    title: "AI Lead Response for Pipedrive Users | Prestyj",
    description:
      "Enhance your Pipedrive pipeline with AI that responds to leads in under 60 seconds, qualifies deals, and books meetings — all syncing back to Pipedrive automatically.",
    keywords: [
      "Pipedrive AI integration",
      "AI for Pipedrive",
      "Pipedrive lead response automation",
      "Pipedrive AI sales assistant",
      "Pipedrive automated qualification",
      "AI appointment setting Pipedrive",
    ],
  },
  hero: {
    badge: "Built for Pipedrive",
    headlineAccent: "Pipedrive Users",
    subheadline:
      "Pipedrive visualizes your pipeline. Prestyj's AI fills it with qualified meetings. Respond to every lead in under 60 seconds and watch your deal stages move faster.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Instant Lead Engagement",
      description:
        "AI responds to Pipedrive leads the moment they're created — from web forms, imports, or integrations. Every prospect gets a personalized outreach in under 60 seconds.",
    },
    {
      icon: "Database" as IconName,
      title: "Real-Time Pipedrive Sync",
      description:
        "AI conversations, qualification answers, and booked meetings sync to Pipedrive contacts and deals automatically. Your pipeline view stays current without manual updates.",
    },
    {
      icon: "Target" as IconName,
      title: "Deal Qualification on Autopilot",
      description:
        "AI asks your qualification questions — budget, timeline, decision-makers — and updates Pipedrive deal fields automatically. Reps see qualified deals, not blank contact records.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Faster Pipeline Velocity",
      description:
        "AI handles top-of-funnel work so reps focus on closing. More leads contacted, more deals qualified, more pipeline moving — without adding headcount.",
    },
  ],
  painPoints: [
    {
      problem: "New leads sitting in Pipedrive without follow-up",
      solution:
        "AI contacts every new Pipedrive lead in under 60 seconds. Reps find pre-qualified prospects when they check their pipeline instead of cold contacts that need chasing.",
    },
    {
      problem: "Reps spending hours on unqualified leads",
      solution:
        "AI pre-qualifies every lead before it becomes a deal in Pipedrive. Reps only invest time in prospects who meet your qualification criteria.",
    },
    {
      problem: "Inconsistent follow-up across the sales team",
      solution:
        "AI delivers consistent, professional outreach to every lead — no variation based on rep workload, mood, or skill level.",
    },
    {
      problem: "After-hours leads losing interest before next business day",
      solution:
        "AI responds 24/7. A prospect submitting a form Friday evening gets engaged before Monday morning standup — no deal left waiting for business hours.",
    },
  ],
  comparison: {
    headers: ["Capability", "Pipedrive + Prestyj", "Pipedrive Alone"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "Rep-dependent, business hours",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated AI qualification",
        others: "Manual rep calls",
      },
      {
        feature: "Deal Data Entry",
        prestyj: "AI populates fields automatically",
        others: "Manual entry by reps",
      },
      {
        feature: "Meeting Booking",
        prestyj: "AI books to rep calendars",
        others: "Manual scheduling back-and-forth",
      },
      {
        feature: "Consistency",
        prestyj: "Every lead, same quality, always",
        others: "Varies by rep performance",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited leads simultaneously",
        others: "Limited by team size",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with Pipedrive?",
      answer:
        "Prestyj connects via Pipedrive API. When leads are created — from web forms, Prospector, or integrations — Prestyj receives them and begins AI follow-up. Conversations and meetings sync back to Pipedrive contacts, deals, and activities automatically.",
    },
    {
      question: "Does it work with Pipedrive's Automation feature?",
      answer:
        "Yes. Prestyj complements Pipedrive Automations. Your existing workflow automations keep running — Prestyj adds the conversational AI layer on top for real-time lead engagement and qualification.",
    },
    {
      question: "Can AI update custom fields in Pipedrive?",
      answer:
        "Absolutely. AI can populate any Pipedrive deal or contact field based on qualification responses — company size, budget range, timeline, decision-maker status. Custom fields stay current without manual entry.",
    },
    {
      question: "Does Prestyj respect Pipedrive lead owner assignments?",
      answer:
        "Yes. Prestyj follows your Pipedrive assignment rules. Meetings get booked to the assigned rep's calendar, and all activities appear under the correct lead owner.",
    },
    {
      question: "How long does the Pipedrive integration take?",
      answer:
        "Most Pipedrive integrations are live within 7–10 business days, including API connection, AI training on your qualification criteria, custom field mapping, and test lead validation.",
    },
  ],
  cta: {
    headline: "Accelerate Your Pipedrive Pipeline",
    subheadline:
      "Every lead contacted instantly. Every deal pre-qualified automatically. See how AI + Pipedrive moves more deals through your pipeline — faster.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for sales teams on Pipedrive.",
  },
});
