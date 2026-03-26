import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiSalesAgent: BestForPageContent = createBestForPage({
  slug: "ai-sales-agent",
  niche: {
    name: "AI Sales Agent",
    shortName: "AI Sales Agent",
    description: "Service businesses needing an AI-powered sales agent that qualifies leads and books appointments 24/7",
  },
  meta: {
    title: "AI Sales Agent | Voice AI That Qualifies Leads & Books Appointments | Prestyj",
    description:
      "AI sales agents for service businesses: voice AI that calls leads instantly, qualifies them with natural conversation, and books appointments around the clock. 78% of leads go with the first responder—be first every time.",
    keywords: [
      "AI sales agent",
      "AI sales agents for service businesses",
      "AI voice sales agent",
      "automated sales agent",
      "AI inside sales agent",
      "virtual sales agent",
      "AI lead conversion agent",
      "AI phone sales",
    ],
  },
  hero: {
    badge: "AI Sales Agent",
    headlineAccent: "AI Sales Agent",
    subheadline:
      "Your always-on sales agent that calls leads in under 60 seconds, qualifies them through natural voice conversation, and books appointments directly on your calendar. Never miss a lead. Never waste time on unqualified prospects.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "Voice AI That Sells 24/7",
      description:
        "78% of leads buy from the first responder. AI sales agents call leads in under 60 seconds—day, night, weekends, holidays. Every lead gets instant human-like voice engagement while competitors are still checking email.",
    },
    {
      icon: "Target" as IconName,
      title: "Qualify Leads Before Your Team Gets Involved",
      description:
        "AI asks your qualification questions: budget, timeline, service needs, decision-maker status. Only qualified prospects get routed to your sales team. Stop wasting time on leads who will never convert.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Appointment Booking on Autopilot",
      description:
        "Qualified leads get appointments booked directly into your calendar. AI handles availability checking, scheduling, confirmations, and reminders. 24/7 booking means you capture leads whenever they're ready to commit.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "400% Improvement in Lead Conversion",
      description:
        "Service businesses using AI sales agents see 4x improvement in lead-to-appointment rates. Instant response + qualification + friction-free booking = dramatically higher conversion from the same lead volume.",
    },
  ],
  painPoints: [
    {
      problem: "Slow follow-up kills deals—leads go cold or to competitors",
      solution:
        "AI sales agents call leads in under 60 seconds, 24/7. While competitors take hours or days to respond, your AI agent has already engaged, qualified, and booked the appointment. Speed-to-lead is the #1 conversion factor.",
    },
    {
      problem: "Missed calls = missed revenue",
      solution:
        "Every missed call is a lost opportunity. AI handles unlimited concurrent calls, so no lead ever hits voicemail or waits on hold. After-hours, weekends, high-volume periods—every call gets answered.",
    },
    {
      problem: "Sales team wastes hours on unqualified leads",
      solution:
        "AI pre-qualifies every lead with your specific criteria. Your team only talks to prospects who have budget, authority, timeline, and genuine need. Typical clients report 60-70% reduction in time wasted on bad leads.",
    },
    {
      problem: "Can't scale sales without massive hiring",
      solution:
        "One AI sales agent handles the call volume of 5-10 human ISAs. Scale from 100 leads/month to 10,000 leads/month without hiring, training, or managing more staff. Capacity scales instantly.",
    },
    {
      problem: "Inconsistent qualification and messaging across team",
      solution:
        "AI delivers your qualification script and messaging perfectly, every single time. No variation between reps, no bad days, no forgotten questions. Consistent quality at unlimited scale.",
    },
  ],
  comparison: {
    headers: ["Capability", "Prestyj AI Sales Agent", "Human ISA", "Doing Nothing"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "Minutes to hours",
        note: "78% of leads choose first responder",
      },
      {
        feature: "Availability",
        prestyj: "24/7/365, unlimited calls",
        others: "40-60 hrs/week, 1 call at a time",
        note: "Never miss after-hours leads",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Every lead, consistent criteria",
        others: "Inconsistent, varies by rep",
        note: "Only qualified leads reach sales",
      },
      {
        feature: "Appointment Booking",
        prestyj: "Real-time calendar integration",
        others: "Manual, error-prone",
        note: "Instant booking increases conversion",
      },
      {
        feature: "Cost Per Qualified Appointment",
        prestyj: "$5-15",
        others: "$75-150",
        note: "10x lower cost at scale",
      },
      {
        feature: "Conversion Rate",
        prestyj: "15-25% lead-to-appointment",
        others: "5-10% lead-to-appointment",
        note: "4x improvement typical",
      },
      {
        feature: "Missed Calls",
        prestyj: "Zero",
        others: "20-40% during busy periods",
        note: "Every lead gets engaged",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "What is an AI sales agent and how does it work?",
      answer:
        "An AI sales agent is a voice AI system that handles inbound and outbound sales calls just like a human sales representative. It answers calls instantly, engages leads in natural conversation, asks qualification questions, handles objections, and books appointments directly into your calendar. It works 24/7 and handles unlimited concurrent calls.",
    },
    {
      question: "Can an AI sales agent really qualify leads like a human?",
      answer:
        "Yes. AI sales agents use natural language processing to have real conversations, detect tone and urgency, and ask dynamic follow-up questions. They apply your qualification criteria consistently—often more accurately than humans who may skip questions or make assumptions. Most clients report higher-quality appointments from AI qualification.",
    },
    {
      question: "What happens when a lead asks a question the AI can't answer?",
      answer:
        "AI is trained on your business information and common objections. For complex questions, it can schedule a callback with your team, take a message, or transfer the call. You control escalation rules based on conversation context and lead quality score.",
    },
    {
      question: "How fast does the AI sales agent respond to leads?",
      answer:
        "Under 60 seconds for inbound calls. For web leads, AI can call within seconds of form submission. This 'speed-to-lead' is critical—78% of leads go with the first business that responds. AI ensures you're always first.",
    },
    {
      question: "Can AI sales agents work with my existing CRM and calendar?",
      answer:
        "Absolutely. Prestyj integrates with major CRMs (HubSpot, Salesforce, Follow Up Boss, ServiceTitan, Jobber) and calendar systems (Google, Outlook, Calendly). Qualified leads and appointments sync automatically to your existing workflow.",
    },
    {
      question: "What's the ROI of an AI sales agent vs. hiring ISAs?",
      answer:
        "An AI sales agent costs roughly 10-20% of a full-time ISA salary while handling 5-10x the call volume. At $5-15 per qualified appointment vs. $75-150 with human staff, most service businesses see positive ROI within the first month. No training time, no turnover, no benefits, no management overhead.",
    },
  ],
  cta: {
    headline: "Your AI Sales Agent Is Ready to Start Converting Leads",
    subheadline:
      "See how an AI sales agent can call, qualify, and book appointments for your business 24/7. Book a demo to hear your AI agent in action.",
    buttonText: "Book a Demo",
    footnote: "Watch AI handle a live sales call with your qualification criteria.",
  },
});
