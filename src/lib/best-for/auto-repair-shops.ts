import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const autoRepairShops: BestForPageContent = createBestForPage({
  slug: "auto-repair-shops",
  niche: {
    name: "Auto Repair Shops",
    shortName: "Auto Repair",
    description: "Auto repair shops looking for AI-powered call handling, service scheduling, and customer communication",
  },
  meta: {
    title: "AI Phone Answering for Auto Repair Shops | Service Scheduling | Prestyj",
    description:
      "AI voice agents for auto repair shops handle customer calls 24/7, schedule service appointments, provide status updates, and capture emergency repair requests. Never miss a service call.",
    keywords: [
      "AI phone answering for auto repair",
      "auto repair shop automation",
      "mechanic shop answering service",
      "auto repair scheduling AI",
      "AI for auto repair shops",
      "automotive service phone AI",
      "auto repair virtual receptionist",
      "mechanic shop call handling",
      "automated auto repair scheduling",
      "service department AI",
    ],
  },
  hero: {
    badge: "Auto Repair AI",
    headlineAccent: "Auto Repair Shops",
    subheadline:
      "Vehicle owners call when they have problems—often while you're busy with other customers. AI answers every call, schedules service, provides updates, and keeps your bays full.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Wrench" as IconName,
      title: "Never Miss a Service Call",
      description:
        "When customers can't reach your shop, they call the next one. AI answers every call instantly, capturing service requests that would otherwise go to competitors.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Schedule Appointments 24/7",
      description:
        "Customers call early morning, late night, and during busy shop hours. AI books service appointments, checks availability, and confirms details—filling your schedule automatically.",
    },
    {
      icon: "PhoneCall" as IconName,
      title: "Service Status Updates",
      description:
        "Customers call to check on their vehicles. AI provides status updates, explains repair timelines, and manages pickup scheduling—freeing your service writers from constant interruptions.",
    },
    {
      icon: "AlertCircle" as IconName,
      title: "Emergency vs. Routine Triage",
      description:
        "AI identifies urgent repairs (breakdowns, unsafe to drive) and flags them for immediate attention. Routine service gets scheduled efficiently without disrupting your workflow.",
    },
  ],
  painPoints: [
    {
      problem: "Missing calls while working with customers",
      solution:
        "Service writers and technicians can't answer every call while helping customers or working on vehicles. AI handles all incoming calls and routes urgent matters to you while scheduling routine service.",
    },
    {
      problem: "Potential customers calling competitors when you don't answer",
      solution:
        "Car problems need quick attention. When customers can't reach you, they keep calling other shops. AI responds instantly, captures the repair business, and schedules the appointment.",
    },
    {
      problem: "Time-wasting calls for basic information",
      solution:
        "Customers call to ask about hours, pricing, services offered, and location. AI handles all routine inquiries instantly, so your team focuses on actual repair work and customer service.",
    },
    {
      problem: "After-hours calls going to voicemail",
      solution:
        "Vehicle problems don't follow business hours. AI answers 24/7, assesses urgency, schedules next-day service for routine repairs, and reaches you for emergency situations.",
    },
    {
      problem: "Service status calls interrupting work",
      solution:
        "Customers constantly call to check on their vehicles. AI provides status updates, explains repair completion timelines, and schedules pickups—keeping your service writers focused on active jobs.",
    },
    {
      problem: "Scheduling and rescheduling takes time",
      solution:
        "AI books appointments directly into your scheduling system, sends confirmations, and handles rescheduling requests. Your calendar fills automatically with minimal staff involvement.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Missed Service Calls",
        prestyj: "Zero (answers every call)",
        others: "30-50% during busy times",
      },
      {
        feature: "Appointment Scheduling",
        prestyj: "24/7, automated",
        others: "Business hours, manual",
      },
      {
        feature: "Status Update Calls",
        prestyj: "AI provides updates",
        others: "Staff must interrupt work",
      },
      {
        feature: "After-Hours Availability",
        prestyj: "24/7/365",
        others: "Voicemail only",
      },
      {
        feature: "Emergency Triage",
        prestyj: "AI categorizes and escalates",
        others: "All calls treated equally",
      },
      {
        feature: "Customer Response Time",
        prestyj: "Under 60 seconds",
        others: "Minutes to hours",
      },
      {
        feature: "Service Writer Interruptions",
        prestyj: "Near zero",
        others: "20-30+ per day",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI schedule auto repair appointments?",
      answer:
        "AI accesses your shop's scheduling system, checks bay availability, books appointments, and sends confirmation to customers. Service appointments appear on your calendar with vehicle details, customer contact information, and reason for service.",
    },
    {
      question: "Can AI provide vehicle status updates?",
      answer:
        "Yes. When integrated with your shop management system, AI can tell customers whether their vehicle is being diagnosed, waiting for parts, in progress, or ready for pickup. For complex situations requiring detailed explanations, AI can transfer to a service writer with full context.",
    },
    {
      question: "Does this integrate with shop management software?",
      answer:
        "Prestyj integrates with major auto repair shop management systems including Shopmonkey, Mitchell 1, ShopKey, and Tekmetric. Customer data, appointments, and service records sync automatically with your existing workflow.",
    },
    {
      question: "How does AI handle emergency repair situations?",
      answer:
        "AI asks questions to assess urgency: Is the vehicle safe to drive? Has it broken down? Is the customer stranded? Emergency situations trigger immediate escalation to you based on your preferences. Routine repairs get scheduled for the next available appointment.",
    },
    {
      question: "Can AI provide repair cost estimates?",
      answer:
        "For common services with standard pricing (oil changes, brake inspections, tire rotations), AI can provide estimate ranges. For complex repairs requiring diagnosis, AI collects vehicle and symptom information, schedules an appointment, and ensures your team has full details before arrival.",
    },
    {
      question: "What about customers who prefer speaking to a person?",
      answer:
        "AI seamlessly transfers calls to your service writers when requested, providing full conversation context. For routine scheduling and status updates, most customers appreciate instant service without waiting on hold or navigating phone menus.",
    },
    {
      question: "Can AI handle parts availability inquiries?",
      answer:
        "AI can answer questions about parts availability when integrated with your parts inventory system. Customers learn whether parts are in stock before arriving, reducing wasted trips and improving the service experience.",
    },
  ],
  cta: {
    headline: "Never Miss Another Service Call Again",
    subheadline:
      "Capture every repair job, schedule appointments 24/7, and keep your bays full. Book a demo to see AI handling auto repair shop calls.",
    buttonText: "Book Your Demo",
    footnote: "Works with all major shop management systems. No credit card required.",
  },
});
