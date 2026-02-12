import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const plasticSurgery: BestForPageContent = createBestForPage({
  slug: "plastic-surgery",
  niche: {
    name: "Plastic Surgery & Medical Spas",
    shortName: "Plastic Surgery",
    description:
      "Plastic surgeons, medspas, and aesthetic practices seeking AI receptionist for consultation booking and patient communication",
  },
  meta: {
    title: "Plastic Surgery AI Receptionist & MedSpa AI Phone System | Prestyj",
    description:
      "AI voice receptionist for plastic surgery and medical spas. Handle consultation bookings, procedure inquiries, and patient communication 24/7. High-value practice growth with discreet, professional service.",
    keywords: [
      "plastic surgery AI receptionist",
      "medspa AI receptionist",
      "aesthetic practice phone system",
      "cosmetic surgery answering service",
      "medical spa AI assistant",
      "plastic surgeon consultation booking",
      "medspa appointment scheduling",
      "aesthetic practice automation",
    ],
  },
  hero: {
    badge: "Aesthetic Practice AI",
    headlineAccent: "Plastic Surgery & Medical Spas",
    subheadline:
      "High-value consultations require prompt, professional response. AI handles every call 24/7, books consultations, handles procedure inquiries, and provides discreet patient communication—never miss a $5,000-50,000 opportunity.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Sparkles" as IconName,
      title: "Never Miss High-Value Consultations",
      description:
        "Cosmetic procedures average $5,000-15,000 per treatment. A single missed call is thousands lost. AI answers every inquiry instantly, qualifies interest, and books consultations—capturing opportunities before prospects call competitors.",
    },
    {
      icon: "Shield" as IconName,
      title: "Discreet, Professional Communication",
      description:
        "Aesthetic patients value privacy. AI communicates professionally, handles sensitive inquiries with discretion, and provides consistent on-brand messaging—no judgment, no gossip, just excellent service.",
    },
    {
      icon: "Globe" as IconName,
      title: "Multi-Lingual Patient Support",
      description:
        "Aesthetic practices serve diverse communities. AI supports Spanish, Mandarin, and more—explaining procedures, pricing, and consultation availability in patients' preferred language. Expand your reach without hiring multilingual staff.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Consultation Scheduling & Reminders",
      description:
      "AI books consultations directly into your calendar, sends multi-touch reminders to reduce no-shows, and handles rescheduling requests. Reminder calls and texts reduce no-show rates by 60%—critical for high-value appointment slots.",
    },
    {
      icon: "Phone" as IconName,
      title: "24/7 Availability for Working Professionals",
      description:
        "Your patients work 9-5 and research cosmetic procedures evenings and weekends. AI is always available to answer questions about treatments, pricing, and availability—capture leads when your office is closed.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Procedure Information & Pre-Consultation",
      description:
        "AI explains procedures, recovery expectations, and pricing ranges. Answers common questions about BOTOX, fillers, lasers, facelifts, body contouring. Qualified prospects receive consultation prep information—more productive consultations.",
    },
  ],
  painPoints: [
    {
      problem: "Missed calls from potential patients going to competitors",
      solution:
        "AI answers every call 24/7, captures patient information, understands which procedures they're interested in, and books consultations immediately. Your practice captures every high-value lead instead of sending them to competitors.",
    },
    {
      problem: "After-hours inquiries with no one to respond",
      solution:
        "Patients research cosmetic procedures evenings and weekends. AI provides immediate, helpful response: procedure information, pricing ranges, consultation availability, and instant booking. Leads captured while your competition is closed.",
    },
    {
      problem: "Front desk overwhelmed with routine inquiries",
      solution:
        "AI handles 80-90% of calls automatically: consultation booking, procedure information, pricing questions, appointment confirmations, rescheduling requests. Your front desk focuses on in-office patients and payment processing.",
    },
    {
      problem: "Consultation no-shows wasting valuable surgeon time",
      solution:
        "AI sends multi-touch appointment confirmations and reminders 48 hours and 24 hours before consultations via voice and text. Patients can confirm, reschedule, or cancel instantly—freeing slots for waitlist. No-show rates drop 60%.",
    },
    {
      problem: "Language barriers limiting patient acquisition",
      solution:
        "Multi-lingual AI support explains procedures, pricing, and consultation availability in patients' preferred language. Expand your patient base beyond English-only speakers without hiring bilingual staff.",
    },
    {
      problem: "New patient intake taking valuable staff time",
      solution:
        "AI completes new patient intake before consultation: medical history, previous procedures, goals and expectations, contact information, preferred contact method. Surgeons receive complete intake before consultation—more focused, productive discussions.",
    },
    {
      problem: "Follow-up and post-procedure inquiries overwhelming staff",
      solution:
        "AI handles post-procedure follow-up: recovery questions, medication reminders, appointment scheduling for follow-up visits. Patients get answers 24/7 without calling your office. Staff freed for in-office patient care.",
    },
    {
      problem: "Inconsistent information given to patients",
      solution:
        "AI provides consistent, on-brand messaging about procedures, pricing, and policies. Every caller receives accurate information—no conflicting details from different staff members. Professional, polished communication every time.",
    },
    {
      problem: "Difficulty tracking lead sources and consultation conversion",
      solution:
        "AI tracks every call: source (website, referral, ad), patient interest, consultation booked or not, reason if declined. Detailed analytics show which marketing channels deliver high-value patients and where follow-up is needed.",
    },
    {
      problem: "High cost of hiring additional reception staff",
      solution:
        "Adding reception staff costs $40K-60K annually plus benefits. AI provides round-the-clock coverage for a fraction of the cost—effectively adding 2-3 full-time staff members for less than one salary.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Staffing"],
    rows: [
      {
        feature: "Call Coverage",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Consultation Booking",
        prestyj: "Instant, automated",
        others: "During business hours, often voicemail",
      },
      {
        feature: "No-Show Rate",
        prestyj: "6-10% (with reminders)",
        others: "15-20% industry average",
      },
      {
        feature: "Multi-Lingual Support",
        prestyj: "Spanish, Mandarin, more included",
        others: "English only (unless hiring bilingual staff)",
      },
      {
        feature: "Procedure Information",
        prestyj: "Consistent AI explanations",
        others: "Varies by staff member",
      },
      {
        feature: "Annual Cost for 24/7",
        prestyj: "Fraction of staffing cost",
        others: "$80K-150K+ for additional staff",
      },
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "Next business day callback",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI handle sensitive cosmetic procedure inquiries appropriately?",
      answer:
        "Yes. AI is trained to communicate discreetly and professionally about all aesthetic procedures. Provides factual information about treatments, recovery expectations, and pricing ranges without judgment. Sensitive inquiries are handled with appropriate privacy and tact.",
    },
    {
      question: "How does AI book consultations for different surgeons?",
      answer:
        "AI routes consultation bookings based on your practice's scheduling: surgeon availability, procedure specialty, location preference, and patient requirements. We configure booking rules to match how your practice operates.",
    },
    {
      question: "What about patients who want to speak to a human?",
      answer:
        "Patients can always request human transfer ('I'd like to speak to someone'). AI transfers immediately with full conversation context. For straightforward inquiries (pricing, availability, procedure info), most patients appreciate instant answers without waiting on hold.",
    },
    {
      question: "Can AI explain different procedures and recovery expectations?",
      answer:
        "AI provides accurate information about common aesthetic procedures: BOTOX, fillers, lasers, facelifts, rhinoplasty, body contouring, breast surgery. Explains typical recovery timelines, activity restrictions, and expected results. Complex medical questions route to your surgical team.",
    },
    {
      question: "How does pricing discussion work with AI?",
      answer:
        "AI discusses pricing ranges for procedures based on your practice's fee structure. Provides starting-at pricing and explains that final quotes depend on consultation. For financing questions, AI provides information about payment options and schedules consultation for detailed discussion.",
    },
    {
      question: "Can AI handle post-procedure follow-up?",
      answer:
        "Yes. AI makes follow-up calls to check on recovery, reminds patients about medication schedules, answers common post-procedure questions, and schedules follow-up appointments. Patients appreciate 24/7 access to recovery guidance without calling your office.",
    },
    {
      question: "How does this integrate with practice management software?",
      answer:
        "Prestyj integrates with major aesthetic practice platforms: PatientNow, PatientNow, Crystalize, and generic EMR systems. Consultation bookings, patient information, and call notes sync automatically—no manual data entry.",
    },
    {
      question: "What about before and after photo inquiries?",
      answer:
        "AI explains that before/after photos are available during consultation and can direct patients to your website gallery if applicable. For photo requests, AI encourages consultation booking where surgeons can show relevant results and discuss realistic expectations.",
    },
  ],
  cta: {
    headline: "Never Miss a $5,000-50,000 Consultation Opportunity Again",
    subheadline:
      "AI captures every aesthetic patient inquiry 24/7, books consultations, handles procedure questions with discretion, and reduces no-shows. High-value practice growth with professional communication.",
    buttonText: "Book Your Demo",
    footnote: "Discreet, professional communication. Multi-lingual support included. Live in 1-2 weeks.",
  },
});
