import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const followUpBossUsers: BestForPageContent = createBestForPage({
  slug: "follow-up-boss-users",
  niche: {
    name: "Follow Up Boss Users",
    shortName: "Follow Up Boss",
    description:
      "Real estate teams and brokerages using Follow Up Boss CRM for lead management and agent assignment",
  },
  meta: {
    title: "Automated Lead Follow-up for Follow Up Boss Users | Prestyj",
    description:
      "Turn Follow Up Boss leads into appointments automatically. AI responds in under 60 seconds, qualifies prospects, and books showings directly.",
    keywords: [
      "AI for Follow Up Boss",
      "Follow Up Boss automation",
      "Follow Up Boss AI integration",
      "automated lead response Follow Up Boss",
      "AI appointment setting real estate",
    ],
  },
  hero: {
    badge: "Built for Follow Up Boss",
    headlineAccent: "A Booked Appointment",
    subheadline:
      "Stop losing leads to 5-minute response times. AI contacts every Follow Up Boss lead in under 60 seconds, qualifies interest, and books showings—automatically.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "60-Second Speed to Lead",
      description:
        "AI responds to Follow Up Boss leads instantly—text, call, or web form. While competitors are still drafting their first message, your appointment is booked.",
    },
    {
      icon: "Target" as IconName,
      title: "Smart List Integration",
      description:
        "AI reads Follow Up Boss smart lists and action plans. VIP buyers get priority response; cold leads get nurture sequences. Your workflow stays intact.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Direct Calendar Booking",
      description:
        "AI books appointments into agent calendars based on Follow Up Boss assignment rules. Round-robin, lead source routing, or custom logic—all automated.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Action Plan Triggers",
      description:
        "AI actions trigger Follow Up Boss workflows. Booked appointments start your showing sequence; unqualified leads enter nurture. Your automations just work.",
    },
  ],
  painPoints: [
    {
      problem: "Leads go cold waiting 5-30 minutes for agent response",
      solution:
        "AI contacts leads in under 60 seconds. Zillow and Realtor.com leads get immediate qualification before they move on to the next agent.",
    },
    {
      problem: "Agents miss after-hours and weekend leads",
      solution:
        "AI responds 24/7. Saturday afternoon open house leads get qualified and booked by the time agents check their phone Sunday morning.",
    },
    {
      problem: "ISAs waste time on tire-kickers and unqualified leads",
      solution:
        "AI pre-qualifies every lead before involving agents. ISAs focus on high-intent prospects; low-quality leads enter automated nurture.",
    },
    {
      problem: "Round-robin breaks when agents are busy or unavailable",
      solution:
        "AI checks real-time calendar availability in Follow Up Boss. Leads get assigned to available agents; no appointments booked for agents on vacation.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj + Follow Up Boss", "Follow Up Boss Alone", "ISA Team + Follow Up Boss"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "Agent-dependent / 5-30 minutes during business hours",
      },
      {
        feature: "After-Hours Coverage",
        prestyj: "Full qualification and booking",
        others: "Voicemail or auto-response / Message-only, callback required",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Every lead, instant",
        others: "Manual agent effort / ISA capacity limits",
      },
      {
        feature: "Appointment Booking",
        prestyj: "Direct to agent calendar",
        others: "Manual coordination / ISA schedules, then confirms",
      },
      {
        feature: "Smart List Actions",
        prestyj: "Automated workflow triggers",
        others: "Manual list management / ISA follows playbook",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited leads simultaneously",
        others: "Limited by agent availability / ISA headcount",
      },
      {
        feature: "Cost per Lead",
        prestyj: "Fixed cost, unlimited volume",
        others: "Agent time cost / $3,000-5,000/month per ISA",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with Follow Up Boss?",
      answer:
        "Prestyj connects via Follow Up Boss API. AI receives lead notifications in real-time, reads smart lists and action plans, books appointments to agent calendars, and updates lead status—all automatically.",
    },
    {
      question: "Can AI handle leads from Zillow, Realtor.com, and Facebook?",
      answer:
        "Yes. AI responds to leads from any source that flows into Follow Up Boss—portals, website forms, paid ads, open house sign-ins. Source-specific qualification scripts are supported.",
    },
    {
      question: "How does AI assign leads to the right agent?",
      answer:
        "AI follows your Follow Up Boss assignment rules—round-robin, lead source routing, geography, or custom logic. It checks real-time calendar availability to only book with available agents.",
    },
    {
      question: "What if a lead wants a specific agent or property?",
      answer:
        "AI can route to specific agents or check MLS integration for property availability. Complex requests get flagged for agent review while still capturing complete lead details.",
    },
    {
      question: "Does it replace ISAs or agents?",
      answer:
        "AI handles the repetitive first response and qualification that burns out ISAs. Agents and ISAs focus on building relationships with qualified, appointment-ready leads instead of chasing cold contacts.",
    },
  ],
  cta: {
    headline: "Turn Every Follow Up Boss Lead Into an Appointment",
    subheadline:
      "Win with speed to lead. See how AI + Follow Up Boss converts more leads by responding before your competition even sees the notification.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for real estate teams on Follow Up Boss.",
  },
});
