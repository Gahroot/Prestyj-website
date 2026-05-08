import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const workizUsers: BestForPageContent = createBestForPage({
  slug: "workiz-users",
  niche: {
    name: "Workiz Users",
    shortName: "Workiz",
    description:
      "Service businesses using Workiz for job management, scheduling, and customer communication",
  },
  meta: {
    title: "AI Lead Response for Workiz Users | Prestyj",
    description:
      "Automate lead capture and booking for your Workiz-powered business. AI answers every call, qualifies jobs, and creates appointments in Workiz — 24 hours a day.",
    keywords: [
      "Workiz AI integration",
      "AI for Workiz",
      "Workiz automated booking",
      "Workiz AI receptionist",
      "Workiz lead response",
      "AI appointment setting Workiz",
    ],
  },
  hero: {
    badge: "Built for Workiz",
    headlineAccent: "Your Workiz Job Board",
    subheadline:
      "Stop losing leads to voicemail and callback delays. AI answers every call, captures job details, and books appointments directly into Workiz — even while your team is in the field.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Briefcase" as IconName,
      title: "Automatic Job Creation",
      description:
        "AI creates complete jobs in Workiz with customer info, service type, and scheduling preferences — no manual entry, no lost details from message pads.",
    },
    {
      icon: "Users" as IconName,
      title: "Client Database Sync",
      description:
        "AI recognizes returning Workiz clients by phone number and updates their records with new service details. First-time callers get added as new clients automatically.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Smart Scheduling",
      description:
        "AI reads your Workiz calendar to offer accurate time slots based on technician availability and job location. Bookings respect your scheduling rules and drive time.",
    },
    {
      icon: "Phone" as IconName,
      title: "24/7 Lead Capture",
      description:
        "Calls don't stop at 5 PM and neither does AI. After-hours leads get qualified and booked into Workiz so your first appointment is waiting when you start your day.",
    },
  ],
  painPoints: [
    {
      problem: "Missing calls while on job sites or in transit",
      solution:
        "AI handles every call while your team works. Leads get qualified and booked into Workiz without interrupting the job at hand.",
    },
    {
      problem: "Evenings spent returning calls and entering data into Workiz",
      solution:
        "AI handles booking throughout the day. When you clock out, your Workiz schedule is already filled — no evening admin work required.",
    },
    {
      problem: "Seasonal spikes create a backlog of unreturned calls",
      solution:
        "AI scales instantly for peak seasons. Whether it's spring HVAC tune-ups or winter plumbing emergencies, every caller gets an immediate response.",
    },
    {
      problem: "Can't justify hiring full-time office staff",
      solution:
        "AI provides enterprise-level call handling at a fraction of receptionist cost. Small teams deliver big-company responsiveness without the payroll.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj + Workiz", "Workiz Alone", "Answering Service + Workiz"],
    rows: [
      {
        feature: "Call Coverage",
        prestyj: "24/7, unlimited concurrent",
        others: "Business hours only / Messages only",
      },
      {
        feature: "Job Creation",
        prestyj: "Direct in Workiz, instant",
        others: "Manual entry after calls / No integration",
      },
      {
        feature: "Client Recognition",
        prestyj: "Auto lookup from Workiz database",
        others: "Manual search / No access to CRM",
      },
      {
        feature: "Booking Speed",
        prestyj: "Confirmed on first call",
        others: "Callback required / Message relay delay",
      },
      {
        feature: "Schedule Accuracy",
        prestyj: "Real-time Workiz calendar sync",
        others: "Manual checking / No calendar access",
      },
      {
        feature: "Cost Structure",
        prestyj: "Fixed monthly, unlimited calls",
        others: "Your time cost / Per-minute fees",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with Workiz?",
      answer:
        "Prestyj connects to Workiz through its API. AI accesses your client list for recognition, reads your schedule for availability, and creates jobs directly in your Workiz account. Setup is quick with your API credentials.",
    },
    {
      question: "Can AI handle estimates versus direct bookings?",
      answer:
        "Yes. You configure which services need on-site estimates versus which can be booked directly. AI routes each call appropriately — creating estimate requests or confirmed appointments in Workiz based on your rules.",
    },
    {
      question: "Does it support multiple team members and service zones?",
      answer:
        "Absolutely. AI reads all technician schedules and can route based on service area, skill set, or availability. Whether you have two techs or twenty, jobs get assigned to the right person.",
    },
    {
      question: "What about recurring service customers?",
      answer:
        "AI can set up and manage recurring jobs in Workiz — monthly maintenance, seasonal service contracts, and scheduled follow-ups. Regular customers get recognized and their history is referenced automatically.",
    },
    {
      question: "Will this conflict with Workiz's built-in phone system?",
      answer:
        "Prestyj works alongside Workiz Phone. You choose which calls AI handles — overflow, after-hours, or all incoming. Your existing Workiz phone setup stays intact.",
    },
  ],
  cta: {
    headline: "Never Miss a Workiz Lead Again",
    subheadline:
      "Turn every call into a booked job in Workiz. See how AI keeps your calendar full while your team stays focused on the work that pays.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for service businesses on Workiz.",
  },
});
