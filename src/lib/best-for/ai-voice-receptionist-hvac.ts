import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceReceptionistHvac: BestForPageContent = createBestForPage({
  slug: "ai-voice-receptionist-hvac",
  niche: {
    name: "AI Voice Receptionist for HVAC",
    shortName: "HVAC Voice AI",
    description:
      "HVAC companies needing intelligent call handling for emergency dispatch, seasonal overflow, and 24/7 service call management",
  },
  meta: {
    title: "AI Voice Receptionist for HVAC | Emergency Dispatch & Seasonal Overflow 24/7 | Prestyj",
    description:
      "AI voice receptionist built for HVAC companies. Triage emergency calls, handle 3–5x seasonal volume spikes, dispatch on-call technicians, and integrate with ServiceTitan. Answer every call 24/7 and book more jobs.",
    keywords: [
      "AI voice receptionist HVAC",
      "HVAC AI phone answering",
      "HVAC emergency dispatch AI",
      "AI receptionist for HVAC companies",
      "HVAC call handling automation",
      "ServiceTitan AI integration",
      "HVAC seasonal call overflow AI",
      "HVAC after-hours answering AI",
    ],
  },
  hero: {
    badge: "HVAC AI Voice Receptionist",
    headlineAccent: "AI Voice Receptionist for HVAC",
    subheadline:
      "Handle emergency no-heat and no-AC calls with instant triage and dispatch. Manage 3–5x seasonal call volume without hiring temps. Answer every call 24/7 with AI that understands HVAC workflows and integrates with ServiceTitan.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "AlertTriangle" as IconName,
      title: "Emergency Triage & Priority Dispatch",
      description:
        "AI identifies true HVAC emergencies (no heat in freezing weather, no AC during heat waves, gas smells) within seconds. Emergencies dispatch to on-call technicians immediately with full job details and customer address. Non-emergencies get scheduled for business hours.",
    },
    {
      icon: "Wrench" as IconName,
      title: "Understands HVAC Service Types",
      description:
        "AI knows the difference between emergency repair, seasonal maintenance, equipment replacement, and new installation. It asks the right questions for each: system type, age, fuel source, symptoms. Leads arrive in your dispatch board pre-qualified with relevant details.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Handles 3–5x Seasonal Volume Spikes",
      description:
        "Summer heat waves and winter freezes bring massive call volume that overwhelms human staff. AI handles unlimited concurrent calls—when 50 customers call simultaneously about their broken AC, every single one gets answered. No hold times, no voicemail.",
    },
    {
      icon: "Clock" as IconName,
      title: "After-Hours Emergency Coverage",
      description:
        "No-heat calls at 2am. Broken AC on July 4th weekend. AI answers immediately, assesses urgency, and pages your on-call technician for emergencies. Routine calls get scheduled for the next business day. Your customers never hit voicemail during their worst moments.",
    },
    {
      icon: "Building2" as IconName,
      title: "Multi-Truck & Multi-Trade Operations",
      description:
        "Running 5+ trucks? AI routes calls to the right team: residential repair, commercial service, installation crews, maintenance agreements. For multi-trade companies (HVAC + plumbing + electrical), AI triages and routes to the correct department automatically.",
    },
    {
      icon: "Database" as IconName,
      title: "ServiceTitan Integration",
      description:
        "Jobs book directly into ServiceTitan with customer info, equipment type, issue description, priority level, and technician preferences. Your dispatchers see new jobs in real-time—no manual data entry, no missed details.",
    },
  ],
  painPoints: [
    {
      problem: "Summer heat wave = 100+ calls/day with 2 people answering phones",
      solution:
        "AI handles unlimited concurrent calls during peak season. When call volume spikes 3–5x, every caller connects immediately instead of hitting voicemail. Your staff focuses on dispatching and service, not drowning in ringing phones.",
    },
    {
      problem: "Emergency no-heat calls at 2am go to voicemail—customers call competitors",
      solution:
        "AI answers after-hours calls instantly, asks emergency triage questions (indoor temperature, system type, any gas smell?), and dispatches on-call technicians for true emergencies. Routine issues get booked for business hours. No emergency ever goes to voicemail.",
    },
    {
      problem: "Seasonal temp hires cost $3K–$5K/month and need constant training",
      solution:
        "AI requires no training, no HR paperwork, no benefits. It's ready for peak season on day one with consistent quality. No interviewing, no onboarding, no turnover. One flat monthly cost covers unlimited volume.",
    },
    {
      problem: "Customer history is in ServiceTitan but callers get generic responses",
      solution:
        "AI accesses ServiceTitan customer records in real-time. It recognizes returning customers, references past service ('I see we replaced your compressor last July'), and routes to the appropriate technician based on service history.",
    },
    {
      problem: "Maintenance agreement customers get the same rushed service as one-time callers",
      solution:
        "AI identifies maintenance agreement holders by phone number and provides priority scheduling, preferred time slots, and upsell opportunities. Your best customers get VIP treatment automatically.",
    },
    {
      problem: "Commercial HVAC clients expect immediate response but get voicemail",
      solution:
        "AI recognizes commercial accounts and routes them to your commercial team with priority handling. Multi-location commercial clients get consistent service across all their properties. No more lost commercial contracts due to slow response.",
    },
    {
      problem: "Technicians get dispatched without enough info, wasting truck rolls",
      solution:
        "AI gathers detailed job information before dispatching: system type (gas/electric/heat pump), unit location (rooftop/basement/attic), symptoms, customer-reported error codes, and equipment age. Technicians arrive prepared with the right parts.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI Voice Receptionist", "Traditional HVAC Answering Service"],
    rows: [
      {
        feature: "Emergency Call Triage",
        prestyj: "AI identifies emergencies in seconds, dispatches on-call tech",
        others: "Takes message, calls your on-call tech, hopes they answer",
      },
      {
        feature: "Concurrent Call Capacity",
        prestyj: "Unlimited (100+ simultaneous calls)",
        others: "Limited to operators on shift (5–15 typically)",
      },
      {
        feature: "Seasonal Volume Handling",
        prestyj: "No change in quality during 5x volume spikes",
        others: "Overwhelmed during peaks, long hold times, missed calls",
      },
      {
        feature: "ServiceTitan Integration",
        prestyj: "Direct two-way sync, auto job creation",
        others: "Manual entry from message slips or email forwards",
      },
      {
        feature: "Customer History Access",
        prestyj: "Real-time access to past service records",
        others: "No access—takes message with basic info only",
      },
      {
        feature: "Maintenance Agreement Recognition",
        prestyj: "Auto-identifies VIP customers, priority scheduling",
        others: "Treats all callers the same, no CRM access",
      },
      {
        feature: "Equipment-Specific Questions",
        prestyj: "Asks system type, age, symptoms, error codes",
        others: "Takes name, number, and basic issue description",
      },
      {
        feature: "Cost During Peak Season",
        prestyj: "Same flat rate regardless of volume",
        others: "Per-minute pricing increases bill 3–5x during peaks",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI triage HVAC emergency calls?",
      answer:
        "AI asks targeted diagnostic questions: 'Is this a no-heat or no-AC situation?', 'What's the indoor temperature?', 'Do you smell gas?', 'What type of system do you have—gas furnace, heat pump, or electric?', 'Any unusual sounds?'. Based on answers, it categorizes priority: emergency (no heat below 50°F, gas smell, no AC above 90°F) = immediate dispatch; urgent (system running but struggling) = same-day; routine (maintenance, estimates) = scheduled. Gas leaks trigger safety instructions before dispatch.",
    },
    {
      question: "Does it integrate with ServiceTitan?",
      answer:
        "Yes. Prestyj integrates directly with ServiceTitan to create new jobs, log customer information, attach call recordings and transcripts, and sync appointment schedules. Your dispatchers see new jobs in the dispatch board in real-time. Customer records are created or updated automatically.",
    },
    {
      question: "How does it handle summer and winter call volume spikes?",
      answer:
        "AI handles unlimited concurrent calls, so when volume spikes 3–5x during extreme weather, every call gets answered with the same quality. No additional staffing, no overtime costs, no missed calls. Your office team focuses on dispatching and customer service instead of answering a constantly ringing phone.",
    },
    {
      question: "Can AI schedule maintenance agreement visits?",
      answer:
        "Yes. AI identifies maintenance agreement customers, checks their last service date, and schedules seasonal tune-ups (spring AC check, fall furnace check). It can also upsell maintenance agreements to one-time callers who qualify based on system age or service frequency.",
    },
    {
      question: "What happens when a caller wants to talk to a human?",
      answer:
        "AI transfers the call to your office or on-call technician immediately, providing full conversation context so the caller doesn't repeat themselves. For most routine calls (scheduling, pricing, basic questions), fewer than 10% request a human transfer.",
    },
    {
      question: "How does after-hours emergency dispatch work?",
      answer:
        "After-hours calls are answered immediately. If AI detects an emergency, it pages your on-call technician via text and phone call with job details, customer address, and callback number. The technician can accept or reassign directly from the notification. Non-emergency calls are scheduled for the next business day.",
    },
    {
      question: "Can it handle multi-trade companies (HVAC + plumbing + electrical)?",
      answer:
        "Yes. AI routes calls based on the type of issue: HVAC calls to HVAC dispatch, plumbing calls to the plumbing team, electrical to electricians. For companies with multiple trades, AI asks the right questions to determine the trade and routes accordingly—no manual sorting needed.",
    },
    {
      question: "How much does an HVAC AI voice receptionist cost?",
      answer:
        "Most HVAC companies spend $400–$800/month for AI voice receptionist service with full 24/7 coverage, unlimited concurrent calls, and ServiceTitan integration. At $300–$800 per captured emergency job, the service pays for itself with just 1–2 captured calls per month that would have gone to voicemail.",
    },
    {
      question: "How quickly can we be live?",
      answer:
        "Typical setup takes 5–7 business days: configure emergency triage logic, train on your services and pricing, connect ServiceTitan integration, and test with sample calls. Most HVAC companies are fully live before their next busy season.",
    },
  ],
  cta: {
    headline: "Never Miss an Emergency HVAC Call Again",
    subheadline:
      "See how AI voice receptionist handles emergency triage, seasonal overflow, and after-hours dispatch 24/7. Capture every call, dispatch emergencies instantly, and keep your trucks busy year-round.",
    buttonText: "Book a Demo",
    footnote: "ServiceTitan integration included. Live in 5–7 business days. No annual contract.",
  },
});
