import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const dental: BestForPageContent = createBestForPage({
  slug: "dental",
  niche: {
    name: "Dental Offices",
    shortName: "Dental",
    description: "Dental practices looking for AI-powered patient communication and appointment management",
  },
  meta: {
    title: "AI Agents for Dental Offices | Reduce No-Shows & Automate Scheduling | Prestyj",
    description:
      "HIPAA-compliant AI voice and text agents for dental practices. Reduce no-shows by 60%, automate appointment reminders, handle new patient intake 24/7, and save front desk staff 15+ hours/week.",
    keywords: [
      "AI agents for dental offices",
      "dental AI receptionist",
      "reduce dental no-shows",
      "dental appointment reminders",
      "AI for dental practices",
      "automated dental scheduling",
      "HIPAA compliant AI",
      "dental patient intake automation",
    ],
  },
  hero: {
    badge: "Dental Practice AI",
    headlineAccent: "Dental Offices",
    subheadline:
      "No-shows cost $150-$300 per slot. AI reduces no-shows by 60%, handles appointment booking 24/7, and automates patient intake—so your team can focus on patient care.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "CalendarCheck" as IconName,
      title: "Reduce No-Shows by 60%",
      description:
        "Automated appointment reminders via voice and text reduce no-shows from 15-20% down to 6-8%. That's 2-3 recovered appointments per day for the average practice.",
    },
    {
      icon: "Clock" as IconName,
      title: "Save Front Desk 15+ Hours/Week",
      description:
        "AI handles appointment confirmations, reminders, rescheduling requests, and new patient intake calls. Your staff focuses on in-office patients, not phone tag.",
    },
    {
      icon: "Phone" as IconName,
      title: "24/7 New Patient Booking",
      description:
        "New patients call evenings and weekends. AI responds instantly, gathers insurance info, and books first appointments—before they call your competitor.",
    },
    {
      icon: "Shield" as IconName,
      title: "HIPAA-Compliant by Default",
      description:
        "Built for healthcare with encrypted conversations, secure data handling, and full HIPAA compliance. No PHI exposure, complete audit trails.",
    },
  ],
  painPoints: [
    {
      problem: "No-shows costing $150-$300 per appointment slot",
      solution:
        "AI sends personalized reminders 48 hours and 24 hours before appointments. Patients can confirm, reschedule, or cancel—giving you time to fill the slot.",
    },
    {
      problem: "Front desk overwhelmed with confirmation calls",
      solution:
        "AI handles all appointment confirmations and reminders automatically. Your staff makes zero outbound confirmation calls.",
    },
    {
      problem: "After-hours calls going to voicemail, losing new patients",
      solution:
        "New patient acquisition costs $200-$400. AI captures every call 24/7, qualifies patients, and books appointments instantly.",
    },
    {
      problem: "Time-consuming new patient intake process",
      solution:
        "AI gathers patient information, insurance details, and dental history before the first visit. Patients arrive with paperwork complete.",
    },
    {
      problem: "Emergency appointment triage taking staff away from patients",
      solution:
        "AI identifies dental emergencies (severe pain, trauma, infection) and prioritizes same-day scheduling while gathering symptom details for the dentist.",
    },
    {
      problem: "Recall campaigns require hours of manual outreach",
      solution:
        "AI automates 6-month recall campaigns. Patients due for cleaning get personalized calls and texts with direct booking links.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "No-Show Rate",
        prestyj: "6-8% (60% reduction)",
        others: "15-20% industry average",
      },
      {
        feature: "New Patient Response",
        prestyj: "Under 60 seconds, 24/7",
        others: "Next business day callback",
      },
      {
        feature: "Confirmation Call Time",
        prestyj: "Zero (fully automated)",
        others: "10-15 hours/week",
      },
      {
        feature: "After-Hours Coverage",
        prestyj: "24/7/365",
        others: "Voicemail only",
      },
      {
        feature: "HIPAA Compliance",
        prestyj: "Built-in, encrypted",
        others: "Depends on staff training",
      },
      {
        feature: "New Patient Acquisition Cost",
        prestyj: "Lower (never miss a call)",
        others: "$200-$400 per patient",
      },
      {
        feature: "Recall Campaign Time",
        prestyj: "Automated outreach",
        others: "15-20 hours/month",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Is Prestyj HIPAA-compliant for dental practices?",
      answer:
        "Yes. Prestyj is built for healthcare with full HIPAA compliance. All patient conversations are encrypted, data is stored securely, and we maintain complete audit trails. We'll sign a Business Associate Agreement (BAA) as part of onboarding.",
    },
    {
      question: "How does AI reduce no-shows?",
      answer:
        "AI sends personalized voice and text reminders 48 hours and 24 hours before appointments. Patients can confirm with one click, request reschedule, or cancel—giving you time to fill empty slots. Industry data shows this reduces no-shows by 60%.",
    },
    {
      question: "Can AI handle insurance verification?",
      answer:
        "AI gathers insurance information during new patient intake and can verify active coverage before the appointment. Complex benefit questions are flagged for your billing team.",
    },
    {
      question: "What about patients who prefer speaking to a human?",
      answer:
        "AI seamlessly hands off to your front desk when requested, providing full conversation context. For routine tasks (confirmations, simple reschedules), most patients appreciate instant service without waiting on hold.",
    },
    {
      question: "Does it integrate with our practice management software?",
      answer:
        "Prestyj integrates with major dental software including Dentrix, Eaglesoft, Open Dental, and Curve. Appointments, patient data, and conversation notes sync automatically.",
    },
    {
      question: "How does emergency appointment triage work?",
      answer:
        "AI asks targeted questions to identify true emergencies (severe pain, trauma, swelling, bleeding). Emergency cases are prioritized for same-day scheduling and flagged for immediate dentist review.",
    },
    {
      question: "Can AI handle recall campaigns?",
      answer:
        "Yes. AI automatically reaches out to patients due for 6-month cleanings with personalized voice and text messages. Patients can book directly from the reminder without calling the office.",
    },
  ],
  cta: {
    headline: "Stop Losing $150-$300 Per No-Show Appointment",
    subheadline:
      "Reduce no-shows by 60%, capture every new patient call, and give your front desk 15 hours back every week. Book a demo to see the impact on your practice.",
    buttonText: "Book Your Demo",
    footnote: "HIPAA-compliant. No credit card required. Works with all major dental software.",
  },
});
