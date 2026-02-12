import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const mentalHealthClinics: BestForPageContent = createBestForPage({
  slug: "mental-health-clinics",
  niche: {
    name: "Mental Health Clinics",
    shortName: "Mental Health",
    description: "Mental health practices looking for HIPAA-compliant AI intake, appointment scheduling, and patient communication",
  },
  meta: {
    title: "HIPAA-Compliant AI for Mental Health Clinics | Intake & Scheduling | Prestyj",
    description:
      "HIPAA-compliant AI voice and text agents for mental health clinics. Automate intake, reduce no-shows by 65%, handle crisis call detection, and protect clinician time for patient care.",
    keywords: [
      "HIPAA compliant AI mental health",
      "mental health clinic AI receptionist",
      "therapy practice automation",
      "mental health intake automation",
      "AI for mental health clinics",
      "therapy appointment scheduling AI",
      "mental health answering service",
      "crisis call detection AI",
      "therapist practice automation",
      "behavioral health AI",
    ],
  },
  hero: {
    badge: "Mental Health AI",
    headlineAccent: "Mental Health Clinics",
    subheadline:
      "Mental health clinicians spend hours on intake calls and scheduling. AI handles initial inquiries, screens new patients, manages appointments, and detects crisis calls—while maintaining full HIPAA compliance.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Shield" as IconName,
      title: "HIPAA-Compliant by Default",
      description:
        "Built for healthcare with encrypted conversations, secure data handling, and full HIPAA compliance. Patient information is protected with audit trails and BAA coverage.",
    },
    {
      icon: "AlertTriangle" as IconName,
      title: "Crisis Call Detection & Escalation",
      description:
        "AI identifies crisis indicators (suicidal ideation, self-harm, emergency situations) and immediately escalates to on-call clinicians or crisis lines—every time, no exceptions.",
    },
    {
      icon: "CalendarCheck" as IconName,
      title: "Reduce No-Shows by 65%",
      description:
        "Automated reminders via text and voice reduce no-shows significantly. Mental health clients benefit from multiple touchpoints, ensuring appointments are kept or rescheduled with notice.",
    },
    {
      icon: "FileText" as IconName,
      title: "Streamline New Patient Intake",
      description:
        "AI gathers insurance information, presenting concerns, scheduling preferences, and basic history before the first session. Clinicians receive complete intake summaries, reducing administrative burden.",
    },
  ],
  painPoints: [
    {
      problem: "Hours spent on initial intake calls",
      solution:
        "AI conducts structured intake conversations, collecting insurance information, presenting concerns, history, and scheduling preferences. Clinicians receive comprehensive summaries and focus time on clinical work.",
    },
    {
      problem: "No-shows costing $125-$250 per session",
      solution:
        "AI sends personalized reminders and allows easy rescheduling via text. Clients can cancel or reschedule without uncomfortable phone calls, increasing attendance rates and reducing revenue loss.",
    },
    {
      problem: "After-hours crisis calls go to voicemail",
      solution:
        "AI answers all calls and identifies crisis situations immediately. Crisis calls are escalated according to your protocols—on-call clinicians, crisis lines, or emergency services—with full documentation.",
    },
    {
      problem: "New patients can't reach you during sessions",
      solution:
        "Prospective clients often call when clinicians are in session. AI answers professionally, gathers essential information, answers basic questions, and schedules consultations—ensuring no potential client is lost to voicemail.",
    },
    {
      problem: "Insurance verification consuming admin time",
      solution:
        "AI gathers insurance information during intake, verifies coverage, and checks benefits before appointments. Complex cases are flagged for your billing team, while routine verification happens automatically.",
    },
    {
      problem: "Administrative work taking time from patient care",
      solution:
        "AI handles appointment scheduling, reminders, rescheduling, and routine inquiries. Clinicians and administrative staff reclaim 10-15 hours weekly for direct patient care and clinical documentation.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "No-Show Rate",
        prestyj: "8-12% (65% reduction)",
        others: "25-35% industry average",
      },
      {
        feature: "New Patient Intake Time",
        prestyj: "AI collects, clinician reviews",
        others: "30-45 min phone per patient",
      },
      {
        feature: "Crisis Call Detection",
        prestyj: "Automated, immediate escalation",
        others: "Depends on staff training",
      },
      {
        feature: "After-Hours Coverage",
        prestyj: "24/7 with crisis protocols",
        others: "Voicemail or on-call only",
      },
      {
        feature: "HIPAA Compliance",
        prestyj: "Built-in, encrypted, BAA included",
        others: "Varies, requires management",
      },
      {
        feature: "Insurance Verification",
        prestyj: "Automated during intake",
        others: "Manual staff process",
      },
      {
        feature: "Administrative Hours Saved",
        prestyj: "10-15 hours/week",
        others: "0 (all manual)",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI handle crisis calls for mental health practices?",
      answer:
        "AI is trained to detect crisis indicators including expressions of self-harm, suicide, harm to others, and emergency situations. When a crisis is identified, the call is immediately escalated according to your protocols—on-call clinician, crisis hotline, or emergency services—with full documentation and context. AI never handles crisis situations autonomously.",
    },
    {
      question: "Is Prestyj HIPAA-compliant for mental health practices?",
      answer:
        "Yes. Prestyj is built specifically for healthcare with full HIPAA compliance. All patient conversations are encrypted, data is stored securely, and we maintain complete audit trails. We sign a Business Associate Agreement (BAA) as part of onboarding, covering all PHI handling.",
    },
    {
      question: "How does AI intake work for new mental health patients?",
      answer:
        "AI conducts structured intake conversations covering: contact information, insurance details, presenting concerns, history of treatment, medication information, and scheduling preferences. The clinician receives a complete summary before the first session, reducing intake time significantly.",
    },
    {
      question: "Can AI handle sensitive conversations appropriately?",
      answer:
        "AI is trained for mental health contexts with appropriate tone, empathy, and boundaries. For routine scheduling and administrative tasks, AI handles conversations professionally. For clinical content or complex situations, AI collects information for the clinician rather than attempting to provide clinical guidance.",
    },
    {
      question: "Does this integrate with EHR and practice management systems?",
      answer:
        "Prestyj integrates with major healthcare systems including SimplePractice, TherapyNotes, DrChrono, and Electronic Health Records. Patient data, appointments, and documentation sync securely with your existing workflow.",
    },
    {
      question: "What about patients who prefer speaking to a person?",
      answer:
        "AI seamlessly transfers to your administrative staff when requested, providing full conversation context. Many patients appreciate the ability to handle scheduling and rescheduling via text without having to make uncomfortable phone calls during business hours.",
    },
    {
      question: "How are insurance benefits verified?",
      answer:
        "AI collects insurance information during intake and can verify basic coverage, copay amounts, and deductible status. For complex coverage questions or pre-authorization needs, AI flags the case for your billing team with all collected information.",
    },
    {
      question: "Can AI handle ongoing patient communications?",
      answer:
        "Yes. AI can send appointment reminders, check on patients between sessions (according to your protocols), handle rescheduling requests, and send automated follow-up resources—all while maintaining professional boundaries and clinical appropriateness.",
    },
  ],
  cta: {
    headline: "Reduce Administrative Burden, Protect Patient Care",
    subheadline:
      "Save 10-15 hours weekly on intake and scheduling, reduce no-shows by 65%, and ensure every crisis call gets immediate attention. Book a demo to see HIPAA-compliant AI for mental health practices.",
    buttonText: "Book Your Demo",
    footnote: "HIPAA-compliant with BAA. Works with major EHR systems. No credit card required.",
  },
});
