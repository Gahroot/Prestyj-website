import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceReceptionistDental: BestForPageContent = createBestForPage({
  slug: "ai-voice-receptionist-dental",
  niche: {
    name: "AI Voice Receptionist for Dental",
    shortName: "Dental Voice AI",
    description: "Dental practices needing intelligent call handling that manages appointment routing, emergency triage, and high-volume patient communication",
  },
  meta: {
    title: "AI Voice Receptionist for Dental | Handle Emergencies & Calls 24/7 | Prestyj",
    description:
      "AI voice receptionist built for dental practices. Handle emergency calls with triage, reduce missed appointments by 50%, route complex cases to specialists, and support multi-location offices. Works with Dentrix, Eaglesoft, and Open Dental.",
    keywords: [
      "AI voice receptionist for dental",
      "dental emergency triage AI",
      "AI dental phone system",
      "dental practice phone automation",
      "emergency appointment triage",
      "dental call routing",
      "dental call handling AI",
      "multi-location dental office AI",
      "dental practice receptionist automation",
      "AI receptionist for dental specialists",
    ],
  },
  hero: {
    badge: "Dental AI Voice Receptionist",
    headlineAccent: "AI Voice Receptionist for Dental",
    subheadline:
      "Intelligently answer every call 24/7 with emergency triage, complex routing, and appointment management. Reduce missed calls by 50%, handle call volume that would require 2-3 receptionists, and give your team back 20+ hours per week.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "AlertTriangle" as IconName,
      title: "Emergency Triage & Routing",
      description:
        "AI identifies true dental emergencies (severe pain, trauma, swelling, infections) within seconds. Routes emergency cases to same-day scheduling, flags the dentist, and ensures no critical call goes unanswered. Non-emergencies get appropriate scheduling windows.",
    },
    {
      icon: "Phone" as IconName,
      title: "Handle Call Volume That Would Require 2-3 Receptionists",
      description:
        "AI answers unlimited concurrent calls with natural conversation. Manages call volume spikes during lunch breaks or peak hours without putting patients on hold or missing calls.",
    },
    {
      icon: "Building2" as IconName,
      title: "Multi-Location Routing & Management",
      description:
        "For dental groups with 2+ locations: AI routes emergency cases and complex procedures to specialists, manages location-specific phone trees, and keeps appointment books balanced across all offices.",
    },
    {
      icon: "Clock" as IconName,
      title: "24/7 Coverage With Intelligent Handoff",
      description:
        "After-hours calls get triaged for emergencies, appointment requests get logged, and routine questions get answers. Complex cases and urgent matters seamlessly transfer to on-call dentist or voicemail. Your team reviews everything in the morning.",
    },
    {
      icon: "Brain" as IconName,
      title: "Understands Complex Dental Workflows",
      description:
        "AI knows the difference between cosmetic consultations, orthodontic cases, implant work, and general dentistry. Routes callers appropriately, asks relevant questions, and flags special needs (anxiety patients, new patients, insurance pre-auth required).",
    },
  ],
  painPoints: [
    {
      problem: "Missed emergency calls cost patients—and liability exposure",
      solution:
        "AI answers every call immediately with emergency detection. If a patient has severe pain or trauma, the AI flags it as urgent, suggests same-day slots, and alerts the dentist. No emergency goes to voicemail.",
    },
    {
      problem: "Peak call times overwhelm receptionists (10-11am, lunch breaks, end of day)",
      solution:
        "AI handles unlimited concurrent calls during peak hours. When 20+ patients call simultaneously, every call connects. Your receptionist focuses on check-in and case management, not call overflow.",
    },
    {
      problem: "Cosmetic consultation calls routed to general dentistry—lost revenue opportunities",
      solution:
        "AI identifies consultation type during the call, asks cosmetic-specific questions (smile goals, timeline, budget awareness), and routes to cosmetic specialist or schedules dedicated consultation. Higher close rate, better patient experience.",
    },
    {
      problem: "Multi-location dental groups lose appointment opportunities when calls go to wrong office",
      solution:
        "AI understands your group structure and specialties at each location. Patient calls with implant questions? Routes to implant specialist location. Orthodontic follow-up? Routes to ortho office. Balanced scheduling across all locations.",
    },
    {
      problem: "After-hours calls go to voicemail—true emergencies can't reach anyone",
      solution:
        "AI triages after-hours emergency calls and notifies on-call dentist within 30 seconds. Routine calls get logged for morning callback. Critical emergencies never rely on voicemail alone.",
    },
    {
      problem: "Insurance pre-auth and complex cases take 30+ minutes to schedule because AI can't handle nuance",
      solution:
        "AI gathers detailed case information (crown work, extractions, implants, pre-existing conditions), identifies insurance pre-auth needs, and flags complex cases for your scheduler to handle with all context provided. Speeds up complex scheduling.",
    },
    {
      problem: "Anxious patients or patients with special needs get standard treatment—poor experience",
      solution:
        "AI learns from notes in your system: \"Claustrophobic,\" \"IV sedation required,\" \"pediatric patient.\" Acknowledges special needs during call, schedules appropriately, and gives your team advance warning for proper setup.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI Voice Receptionist", "Human Receptionist + Traditional Phone System"],
    rows: [
      {
        feature: "Emergency Response Time",
        prestyj: "Immediate (under 10 seconds)",
        others: "Depends on receptionist availability (5-60+ minutes if after-hours)",
      },
      {
        feature: "Concurrent Call Handling",
        prestyj: "Unlimited (100+ simultaneous calls)",
        others: "Limited (usually 1-2 phones per receptionist)",
      },
      {
        feature: "After-Hours Emergency Triage",
        prestyj: "AI detects emergencies, notifies on-call dentist",
        others: "Voicemail, emergency clinic referral, or unanswered call",
      },
      {
        feature: "Multi-Location Routing",
        prestyj: "Intelligent routing to specialist/location",
        others: "Manual transfer or manual phone tree",
      },
      {
        feature: "Cosmetic Consultation Detection",
        prestyj: "Yes, specialized routing and triage questions",
        others: "Generic scheduling, no consultation-specific workflow",
      },
      {
        feature: "Cost Per Missed Call",
        prestyj: "$0 (AI answers every call)",
        others: "$50-150 (lost revenue + follow-up time)",
      },
      {
        feature: "Vacation/Sick Day Coverage",
        prestyj: "Zero impact (AI works 365 days)",
        others: "Requires coverage hire or appointment backlog",
      },
      {
        feature: "Data Collection for Scheduling",
        prestyj: "Comprehensive details + special needs flagged",
        others: "Limited to what receptionist remembers to ask",
      },
      {
        feature: "Receptionist Time Freed for Patient Care",
        prestyj: "20+ hours/week available",
        others: "5-10 hours/week typical",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI identify a true dental emergency?",
      answer:
        "AI asks quick diagnostic questions: severity of pain (scale), location (tooth, swelling), duration, trauma history, and whether the patient can wait. Severe pain + swelling = likely infection = emergency. Knocked-out tooth = obvious emergency. Mild sensitivity = routine appointment. AI knows dental triage protocols and escalates appropriately.",
    },
    {
      question: "Can AI handle complex case-specific questions (implants, crowns, extractions)?",
      answer:
        "Yes. AI understands major dental procedures and asks relevant questions: implant cases (bone density concerns, timeline), crown patients (prep scheduling), extractions (wisdom teeth vs. single tooth). AI gathers case-specific details and flags your scheduler with full context. Complex scheduling that would take a receptionist 20 minutes takes AI 3 minutes with better information.",
    },
    {
      question: "How does multi-location routing work for dental groups?",
      answer:
        "Tell AI your group structure and specialties. Patient calls saying 'I need an implant'? Routes to your implant specialist location. Orthodontic follow-up? Routes to ortho office. Cosmetic consultation? Routes to cosmetic center. AI keeps appointment book balanced and sends patients to the right place first call.",
    },
    {
      question: "What happens when a patient wants to speak to a human?",
      answer:
        "AI transfers to your receptionist or team member immediately, providing full conversation context. For routine requests (appointment confirmation, reschedule), patients rarely ask for a human. When they do, handoff is seamless with zero repeat information.",
    },
    {
      question: "Can AI handle after-hours emergency calls?",
      answer:
        "Absolutely. After-hours: AI triages emergency calls, detects true emergencies, and immediately pages/calls your on-call dentist (with patient details). Routine appointment requests are logged for morning callback. This gives you 24/7 coverage without requiring staff to answer every call.",
    },
    {
      question: "Does it identify insurance pre-auth needs automatically?",
      answer:
        "AI learns your common procedures that require pre-auth (implants, major restorations, extractions). When a patient calls about these procedures, AI flags the pre-auth requirement, gathers insurance info, and notes any pre-auth dependencies. Your scheduler has everything needed upfront.",
    },
    {
      question: "Can AI flag special patient needs (anxiety, pediatric, sedation)?",
      answer:
        "Yes. If your practice management software notes that a patient is claustrophobic, anxious, requires IV sedation, or is a pediatric patient, AI sees those flags and acknowledges them during the call ('I see you've chosen sedation in the past'). Your team gets advance warning to prepare.",
    },
    {
      question: "What about HIPAA compliance for voice calls?",
      answer:
        "All calls are encrypted, data is stored securely, and we maintain full audit trails. We sign a Business Associate Agreement (BAA) with your practice. PHI is never exposed, and call recordings are retained per your compliance policy.",
    },
    {
      question: "Which practice management software does it integrate with?",
      answer:
        "Prestyj integrates with Dentrix, Eaglesoft, Open Dental, Curve, Actelis, and Dental.io. AI reads appointment availability in real-time, accesses patient history, and logs new appointments automatically. Full two-way sync ensures your system stays current.",
    },
    {
      question: "How much time does this save receptionists?",
      answer:
        "Most practices see 20-25 hours/week freed up: call volume that used to require 1.5+ receptionists is now handled by AI. Your receptionist focuses on patient check-in, complex case management, and patient experience instead of phone volume.",
    },
  ],
  cta: {
    headline: "Never Miss an Emergency Call Again",
    subheadline:
      "See how AI voice receptionist handles complex routing, emergency triage, and call volume 24/7. Reduce missed calls by 50%, free up 20+ hours per week, and give your team back their sanity. Schedule a demo tailored to your dental practice.",
    buttonText: "Book Your Demo",
    footnote: "HIPAA-compliant. Works with all major dental software. No credit card required.",
  },
});
