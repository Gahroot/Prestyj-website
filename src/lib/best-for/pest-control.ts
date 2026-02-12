import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const pestControl: BestForPageContent = createBestForPage({
  slug: "pest-control",
  niche: {
    name: "Pest Control Companies",
    shortName: "Pest Control",
    description: "Pest control companies looking for AI-powered call handling, emergency dispatch, and service scheduling",
  },
  meta: {
    title: "AI Phone Answering for Pest Control | Emergency Dispatch | Prestyj",
    description:
      "AI voice agents for pest control handle customer calls 24/7, identify emergency infestations, schedule service, and dispatch technicians. Never miss an urgent pest control call again.",
    keywords: [
      "AI phone answering for pest control",
      "pest control automation",
      "pest control answering service",
      "pest control scheduling AI",
      "AI for pest control companies",
      "exterminator call handling",
      "pest control virtual receptionist",
      "emergency pest dispatch AI",
      "automated pest control scheduling",
      "pest control business automation",
    ],
  },
  hero: {
    badge: "Pest Control AI",
    headlineAccent: "Pest Control Companies",
    subheadline:
      "Pest emergencies don't wait—neither should your response. AI answers every call, identifies urgent situations, schedules service appointments, and keeps your technicians booked.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "AlertTriangle" as IconName,
      title: "Catch Every Emergency Job",
      description:
        "Pest sightings trigger immediate calls—customers won't leave voicemail. AI answers instantly, identifies emergencies, and ensures you capture urgent pest control jobs before competitors.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Schedule Service 24/7",
      description:
      "Customers call evenings and weekends with pest problems. AI books appointments, checks technician availability, and confirms service times—filling your schedule while you're off the clock.",
    },
    {
      icon: "Bug" as IconName,
      title: "Identify Pest Type & Urgency",
      description:
        "AI asks the right questions to understand the pest problem, assess severity, and determine if same-day service is needed. Technicians arrive prepared with the right equipment and treatment.",
    },
    {
      icon: "MapPin" as IconName,
      title: "Route Optimization & Dispatch",
      description:
        "AI captures location details, scheduling preferences, and problem information. Service routes are planned efficiently, and technicians have complete information before arrival.",
    },
  ],
  painPoints: [
    {
      problem: "Missing emergency calls while on jobs",
      solution:
        "Technicians can't answer phones while treating properties. AI handles all calls, identifies urgent situations, and reaches you for true emergencies requiring same-day service.",
    },
    {
      problem: "Customers calling multiple companies when no one answers",
      solution:
        "Pest problems require fast response. When customers can't reach you, they keep calling competitors. AI responds instantly, captures the job, and schedules service before they find another company.",
    },
    {
      problem: "After-hours pest emergencies going unanswered",
      solution:
        "Pests don't follow business hours. AI answers 24/7, assesses urgency, schedules next-day service for routine calls, and reaches on-call technicians for true emergencies.",
    },
    {
      problem: "Time spent explaining services and pricing",
      solution:
        "Customers call to ask about treatment options, pricing, and service areas. AI handles all routine inquiries, explains your services, and provides pricing guidelines—freeing your team for actual pest control work.",
    },
    {
      problem: "Difficult to qualify emergency vs. routine calls",
      solution:
        "AI asks targeted questions to identify pest type, infestation level, and health risks. Emergencies (active infestations, stinging insects, structural pests) get prioritized appropriately.",
    },
    {
      problem: "Scheduling and rescheduling taking time",
      solution:
        "AI books appointments directly into your calendar, sends confirmations with preparation instructions, and manages rescheduling requests. Your schedule fills automatically.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Emergency Call Response",
        prestyj: "Instant with escalation",
        others: "Voicemail, lost business",
      },
      {
        feature: "After-Hours Availability",
        prestyj: "24/7/365",
        others: "Voicemail or on-call cell",
      },
      {
        feature: "Service Scheduling",
        prestyj: "24/7, automated",
        others: "Business hours only",
      },
      {
        feature: "Pest Identification",
        prestyj: "AI asks qualifying questions",
        others: "Technician must visit",
      },
      {
        feature: "Urgency Assessment",
        prestyj: "Automated triage",
        others: "All calls treated equally",
      },
      {
        feature: "Customer Response Time",
        prestyj: "Under 60 seconds",
        others: "Hours to next business day",
      },
      {
        feature: "Route Information Captured",
        prestyj: "Complete details before dispatch",
        others: "Information gathered on-site",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI identify pest emergencies vs. routine service?",
      answer:
        "AI asks targeted questions: What type of pest? How many are you seeing? Is there structural damage? Are there health risks (stinging insects, rodents near food)? Based on answers, AI prioritizes same-day service for true emergencies and schedules routine appointments for less urgent situations.",
    },
    {
      question: "Can AI schedule pest control appointments directly?",
      answer:
        "Yes. AI accesses your scheduling system, checks technician availability, books appointments, and sends confirmation to customers with preparation instructions. Service appointments appear on your calendar with complete job details.",
    },
    {
      question: "Does this integrate with pest control software?",
      answer:
        "Prestyj integrates with major pest control management systems including PestPac, GorillaDesk, FieldRoutes, and PestRoutes. Customer data, appointments, and service history sync automatically with your existing workflow.",
    },
    {
      question: "How does AI handle after-hours emergencies?",
      answer:
        "AI answers all calls and assesses urgency. For true emergencies requiring immediate response (active infestations, stinging insect nests, rodents in living spaces), AI reaches your on-call technician according to your escalation protocols. Routine requests get scheduled for the next available time.",
    },
    {
      question: "Can AI provide pricing information?",
      answer:
        "AI can provide starting price ranges for common services based on your pricing structure. For accurate quotes requiring property inspection, AI explains the process, collects property details, and schedules an estimate appointment with full information for your technician.",
    },
    {
      question: "What about customers who need to speak to a person?",
      answer:
        "AI seamlessly transfers calls to your staff when requested, providing full conversation context. For routine scheduling and information, most customers appreciate instant service without waiting on hold or navigating phone menus.",
    },
    {
      question: "Can AI handle recurring service scheduling?",
      answer:
        "Yes. AI can schedule recurring pest control treatments, manage service reminders, and handle rescheduling requests. Customers can set up ongoing service without multiple calls to your office.",
    },
  ],
  cta: {
    headline: "Never Miss Another Emergency Pest Control Call",
    subheadline:
      "Capture every urgent job, schedule appointments 24/7, and keep your technicians fully booked. Book a demo to see AI handling pest control calls.",
    buttonText: "Book Your Demo",
    footnote: "Works with all major pest control software. No credit card required.",
  },
});
