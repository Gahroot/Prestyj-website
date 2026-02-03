import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceReceptionistMedical: BestForPageContent = createBestForPage({
  slug: "ai-voice-receptionist-medical",
  niche: {
    name: "Medical Practices",
    shortName: "Medical Practices",
    description:
      "Medical offices seeking HIPAA-compliant AI voice receptionist for patient triage, appointment management, and 24/7 call coverage",
  },
  meta: {
    title:
      "AI Voice Receptionist for Medical Practices | HIPAA-Compliant | Prestyj",
    description:
      "HIPAA-compliant AI voice receptionist for healthcare practices. Triage patient calls, schedule appointments 24/7, handle prescription refill requests, and reduce call overflow. Built for solo practices, clinics, and specialty offices.",
    keywords: [
      "AI voice receptionist medical",
      "healthcare AI receptionist",
      "HIPAA compliant AI voice",
      "medical appointment scheduling",
      "patient triage automation",
      "AI for medical offices",
      "healthcare call management",
      "patient intake automation",
      "medical practice AI",
      "telemedicine receptionist",
    ],
  },
  hero: {
    badge: "Medical Practice AI",
    headlineAccent: "Medical Practices",
    subheadline:
      "High call volume and emergency triage demand constant coverage. AI voice receptionist handles patient calls 24/7, triages symptoms, schedules appointments, and processes prescription refill requests—while maintaining full HIPAA compliance and freeing staff for clinical work.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "24/7 Patient Call Coverage",
      description:
        "Solo practices and small clinics can't staff round-the-clock coverage. AI answers every patient call immediately—evenings, weekends, holidays. No more missed calls, no more voicemail backlogs, no more patients calling competitors.",
    },
    {
      icon: "Heart" as IconName,
      title: "Intelligent Patient Triage",
      description:
        "AI asks clinically relevant questions to identify urgent symptoms. True emergencies (chest pain, difficulty breathing, severe trauma) are routed immediately. Non-urgent calls are scheduled appropriately, reducing ED referrals for minor issues.",
    },
    {
      icon: "Shield" as IconName,
      title: "HIPAA Compliance Built-In",
      description:
        "Handles PHI securely with encrypted conversations, secure authentication, and complete audit trails. Full Business Associate Agreement (BAA) coverage. No risk of non-compliance fines or patient data exposure.",
    },
    {
      icon: "Clock" as IconName,
      title: "Staff Productivity Gains",
      description:
        "Eliminates manual phone screening, intake calls, and prescription processing. Front desk and clinical staff regain 12-18 hours per week to focus on patient care, EHR management, and clinical duties.",
    },
  ],
  painPoints: [
    {
      problem: "Emergency calls coming in outside business hours with no coverage",
      solution:
        "AI answers every call 24/7, identifies true emergencies (chest pain, difficulty breathing, severe bleeding), and routes immediately to on-call provider. Non-emergency after-hours calls are triaged and scheduled. Patients get immediate response instead of voicemail.",
    },
    {
      problem: "Phone volume overwhelming front desk staff",
      solution:
        "Practices average 200-400 inbound calls per week. AI handles 80-90% automatically: appointment scheduling, confirmation calls, prescription refill requests, and patient intake. Front desk focuses on in-office patients and complex call transfers.",
    },
    {
      problem: "Patient triage done manually by non-clinical staff",
      solution:
        "AI asks symptom-specific questions (chest pain characteristics, vital signs, duration, associated symptoms) to stratify urgency. High-risk presentations flagged for immediate clinician review. Reduces unnecessary ED referrals and improves appropriate care levels.",
    },
    {
      problem: "Appointment no-shows costing practice revenue",
      solution:
        "AI sends multi-touch appointment confirmations and reminders 48 hours and 24 hours before visits via voice and text. Patients can confirm, reschedule, or cancel instantly. No-show rates drop from 20-25% to 8-12%.",
    },
    {
      problem: "Prescription refill requests creating staff bottleneck",
      solution:
        "AI validates prescription refill requests: confirms patient identity, medication details, pharmacy information. Forwards to provider inbox for clinical review. Eliminates repetitive staff phone calls and reduces processing time by 70%.",
    },
    {
      problem: "New patient intake process taking 20-30 minutes per patient",
      solution:
        "AI completes new patient intake overnight: medical history, allergies, current medications, insurance information, emergency contacts. Patients answer questions once in natural conversation. Front desk receives complete intake form before first visit.",
    },
    {
      problem: "HIPAA compliance risk with staff handling patient data over phone",
      solution:
        "AI handles PHI with enterprise-grade encryption, secure authentication, and BAA coverage. All conversations logged with complete audit trail. No staff-handled PHI exposure, reduced compliance risk.",
    },
    {
      problem: "Specialty practices getting high-volume routine calls",
      solution:
        "Orthopedics, dermatology, and other specialties get flooded with appointment requests and follow-up questions. AI filters routine inquiries, schedules appointments, provides post-procedure instructions. Clinicians focus on complex cases.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI Receptionist", "Traditional Approach"],
    rows: [
      {
        feature: "Call Coverage Hours",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Patient Triage Speed",
        prestyj: "Immediate (under 60 seconds)",
        others: "Staff dependent (5-15 minutes)",
      },
      {
        feature: "New Patient Intake Time",
        prestyj: "Completed pre-arrival",
        others: "20-30 minutes at desk",
      },
      {
        feature: "Appointment No-Show Rate",
        prestyj: "8-12% (with reminders)",
        others: "20-25% industry average",
      },
      {
        feature: "Staff Hours Saved Per Week",
        prestyj: "12-18 hours (frontdesk/clinical)",
        others: "0 (current baseline)",
      },
      {
        feature: "Prescription Refill Processing",
        prestyj: "Automated intake, provider queued",
        others: "Staff handles 3-4 min per call",
      },
      {
        feature: "HIPAA Compliance",
        prestyj: "Built-in, BAA included",
        others: "Staff training dependent",
      },
      {
        feature: "Emergency Call Routing",
        prestyj: "Intelligent triage, immediate escalation",
        others: "Staff assessment",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Is AI voice receptionist HIPAA-compliant for medical practices?",
      answer:
        "Yes, fully. Prestyj is built specifically for healthcare with enterprise-grade HIPAA compliance. All patient conversations are encrypted end-to-end. PHI is stored securely in compliant infrastructure. We execute a Business Associate Agreement (BAA) as standard. Complete audit trails document every interaction. Your practice has full compliance coverage.",
    },
    {
      question: "Can AI triage patient symptoms accurately?",
      answer:
        "AI asks clinically validated triage questions based on chief complaint: severity, duration, associated symptoms, vital signs when available. Red flags (chest pain, difficulty breathing, severe bleeding, loss of consciousness) are identified immediately. High-risk presentations are escalated to on-call provider within 60 seconds. AI supplements—not replaces—clinical judgment. All complex cases route to clinicians.",
    },
    {
      question: "How does AI handle emergency calls?",
      answer:
        "Emergency calls trigger immediate escalation protocols. AI identifies red flag symptoms and routes directly to on-call provider while gathering initial information. For true emergencies (sepsis signs, acute cardiac symptoms, trauma), patient gets immediate clinician contact. AI documents everything for medical record. No emergency waits in queue.",
    },
    {
      question: "Can it handle prescription refill requests?",
      answer:
        "Completely. AI validates patient identity, confirms prescription details (medication name, dosage, last fill date), and verifies pharmacy contact information. Request forwards to provider inbox with patient context. Provider reviews clinical appropriateness and approves/denies. AI notifies patient and processes refill. Reduces staff time by 70%.",
    },
    {
      question: "What about complex medical terminology and specialty practices?",
      answer:
        "Prestyj supports specialty-specific workflows: orthopedic post-op instructions, dermatology follow-up triage, cardiology risk stratification, family medicine chronic disease follow-up. AI trained on specialty vocabularies and decision trees. Handles clinical nuance naturally. Non-specialty questions route to staff.",
    },
    {
      question: "How does AI integrate with our EHR?",
      answer:
        "Prestyj integrates with major EHR systems: Epic, Cerner, Athenahealth, NextGen, Kareo, and others. Appointments sync automatically. Patient information pre-populates calls. Intake data flows directly into patient charts. Conversation summaries appear in note templates. Zero manual data entry.",
    },
    {
      question: "What patient data is stored, and where?",
      answer:
        "Only necessary PHI is retained: appointment confirmations, brief call summaries, medication refill requests. No voice recordings are retained after transcription. Data stored in HIPAA-compliant AWS infrastructure with encryption at rest and in transit. Access logged for audit. Retention policies comply with state medical record requirements.",
    },
    {
      question: "How do we handle calls requiring clinical judgment?",
      answer:
        "AI routes to clinicians automatically: complex symptoms, medication interactions, patient anxiety or distress, or any situation requiring clinical assessment. Transfer includes all conversation context. Clinician never works blind. Estimated handoff: under 60 seconds for high-priority cases.",
    },
    {
      question: "Can patients reach a human if needed?",
      answer:
        "Always. Patients can request human transfer at any time ('I want to speak to a person'). AI transfers immediately with full conversation context. For hearing-impaired patients, AI offers relay service. For non-English speakers, AI can escalate to multilingual staff or provide translation support.",
    },
    {
      question: "How does this help solo practices and small clinics?",
      answer:
        "Solo and 2-3 physician practices can't afford 24/7 staffing. AI provides around-the-clock coverage for appointment scheduling, triage, and intake—essentially adding 2-3 full-time staff. Costs 80% less than hiring additional staff. Frees physicians for clinical work instead of phone-handling.",
    },
  ],
  cta: {
    headline:
      "Reduce Call Overhead & Emergency Wait Times With HIPAA-Compliant AI",
    subheadline:
      "Stop drowning in phone calls. AI handles patient triage, scheduling, and intake 24/7 while maintaining full HIPAA compliance. Free up 12-18 staff hours per week for clinical care. Book a demo to see patient triage in action.",
    buttonText: "Schedule Your Demo",
    footnote:
      "HIPAA-compliant. Business Associate Agreement included. Integrates with all major EHR systems.",
  },
});
