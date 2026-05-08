import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const salesforceUsers: BestForPageContent = createBestForPage({
  slug: "salesforce-users",
  niche: {
    name: "Salesforce Users",
    shortName: "Salesforce",
    description:
      "Sales teams and businesses using Salesforce CRM looking for AI-powered lead response and automated qualification",
  },
  meta: {
    title: "AI Lead Response for Salesforce Users | Prestyj",
    description:
      "Enhance your Salesforce CRM with AI that responds to leads in under 60 seconds, qualifies prospects, and books meetings — all syncing back to Salesforce automatically.",
    keywords: [
      "Salesforce AI integration",
      "AI for Salesforce",
      "Salesforce lead response automation",
      "Salesforce AI sales agent",
      "Salesforce automated qualification",
      "AI appointment setting Salesforce",
    ],
  },
  hero: {
    badge: "Built for Salesforce",
    headlineAccent: "Salesforce Users",
    subheadline:
      "Salesforce manages your pipeline. Prestyj's AI fills it. Respond to leads in under 60 seconds, qualify automatically, and book meetings that sync straight back to Salesforce — 24/7.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Lightning-Fast Lead Response",
      description:
        "AI responds to Salesforce leads the moment they're created — web forms, advertising, referrals, events. Every lead source gets immediate, personalized outreach in under 60 seconds.",
    },
    {
      icon: "Database" as IconName,
      title: "Full Salesforce Sync",
      description:
        "Conversations, lead scores, qualification data, and booked meetings all sync back to Salesforce in real-time. Your reps see the complete picture on the lead and opportunity records.",
    },
    {
      icon: "Target" as IconName,
      title: "Lead Scoring Enhancement",
      description:
        "AI's qualification conversations add rich intent signals to your Salesforce leads. Your lead scoring models get better data, and reps prioritize the right prospects.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Pipeline Velocity Boost",
      description:
        "AI handles top-of-funnel qualification and scheduling so reps spend time closing deals instead of chasing unqualified leads. Pipeline moves faster with less manual effort.",
    },
  ],
  painPoints: [
    {
      problem: "Leads sitting in Salesforce without follow-up for hours or days",
      solution:
        "AI contacts every new Salesforce lead in under 60 seconds. Reps find pre-qualified, appointment-ready prospects when they open their pipeline view.",
    },
    {
      problem: "SDRs spending time on unqualified leads instead of closing deals",
      solution:
        "AI pre-qualifies every lead before involving sales reps. SDRs focus on high-intent prospects; low-quality leads get automated nurture instead of wasted sales cycles.",
    },
    {
      problem: "Inconsistent follow-up across the sales team",
      solution:
        "AI delivers the same professional, on-brand outreach to every lead — every time. No more variation in response quality depending on who's working that day.",
    },
    {
      problem: "After-hours form submissions going to competitors",
      solution:
        "AI responds 24/7. A prospect filling out a form at 9 PM gets a response before your competitor's team logs in the next morning.",
    },
  ],
  comparison: {
    headers: ["Capability", "Salesforce + Prestyj", "Salesforce Alone"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "Hours to days, business hours",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated AI qualification",
        others: "Manual SDR outreach",
      },
      {
        feature: "Meeting Booking",
        prestyj: "AI books to rep calendars directly",
        others: "Manual scheduling back-and-forth",
      },
      {
        feature: "After-Hours Coverage",
        prestyj: "Full qualification and booking",
        others: "Autoresponder email only",
      },
      {
        feature: "Consistency",
        prestyj: "Every lead, every time",
        others: "Varies by rep workload",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited leads simultaneously",
        others: "Limited by SDR headcount",
      },
      {
        feature: "Cost per Qualified Lead",
        prestyj: "Fixed cost, unlimited volume",
        others: "SDR salary + commission",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with Salesforce?",
      answer:
        "Prestyj connects via Salesforce API. When leads are created — from any source — Prestyj receives them instantly and begins AI follow-up. Conversations, qualification notes, and meetings sync back to Salesforce lead and contact records automatically.",
    },
    {
      question: "Does it work with Salesforce lead assignment rules?",
      answer:
        "Yes. Prestyj respects your Salesforce assignment rules — round-robin, territory-based, or custom criteria. Meetings get booked to the assigned rep's calendar without conflicts.",
    },
    {
      question: "Can Prestyj integrate with Salesforce Sales Cloud and Service Cloud?",
      answer:
        "Prestyj integrates with Sales Cloud for lead response and qualification. Service Cloud cases can trigger AI follow-up as well. Contact us about your specific Salesforce setup.",
    },
    {
      question: "What about Salesforce Einstein? How is this different?",
      answer:
        "Salesforce Einstein provides analytics and predictions. Prestyj provides real-time AI conversations with your leads — actual outreach, qualification, and appointment booking. They complement each other: Einstein predicts, Prestyj acts.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Most Salesforce integrations are live within 10–14 business days, including API connection, AI training on your product and qualification criteria, Salesforce sync testing, and team onboarding.",
    },
  ],
  cta: {
    headline: "Accelerate Your Salesforce Pipeline",
    subheadline:
      "Every lead contacted in under 60 seconds. Every prospect pre-qualified before your reps pick up the phone. See how AI + Salesforce closes more deals faster.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for sales teams on Salesforce.",
  },
});
