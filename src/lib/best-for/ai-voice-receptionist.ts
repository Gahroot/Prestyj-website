import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceReceptionist: BestForPageContent = createBestForPage({
  slug: "ai-voice-receptionist",
  niche: {
    name: "AI Voice Receptionist",
    shortName: "Voice Receptionist",
    description: "Small businesses and professional services replacing human receptionists with AI-powered voice answering and scheduling",
  },
  meta: {
    title: "AI Voice Receptionist | Replace Your Front Desk | Save 60-80% | Prestyj",
    description:
      "AI voice receptionist answers calls 24/7, books appointments, qualifies leads, and transfers to humans—at a fraction of receptionist cost. Perfect for dental, medical, legal, HVAC, and home services.",
    keywords: [
      "AI voice receptionist",
      "AI receptionist",
      "virtual receptionist AI",
      "AI answering service",
      "automated receptionist",
      "AI front desk",
      "virtual front desk",
      "AI phone receptionist",
      "24/7 answering service AI",
      "receptionist replacement AI",
    ],
  },
  hero: {
    badge: "AI Voice Receptionist",
    headlineAccent: "AI Voice Receptionist",
    subheadline:
      "Your receptionist costs $35-45K/year. AI provides 24/7 coverage, never misses a call, and handles appointment booking—for a fraction of the cost. Keep doing what matters, let AI answer the phone.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "Answer Every Call 24/7/365",
      description:
        "No more voicemail. No more missed calls during lunch, evenings, or weekends. AI answers instantly—even at 3 AM on Sunday. Every caller gets a professional response, every single time.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Save 60-80% on Receptionist Costs",
      description:
        "Full-time receptionist: $35-45K/year plus benefits, training, turnover. AI receptionist: fraction of the cost with better availability. ROI in weeks, not years.",
    },
    {
      icon: "Clock" as IconName,
      title: "Instant Appointment Booking",
      description:
        "Callers book appointments directly. No back-and-forth voicemail tag. No scheduling errors. Appointments sync to your calendar automatically.",
    },
    {
      icon: "Users" as IconName,
      title: "Scale Without Hiring",
      description:
        "Busy season comes—you don't need to hire temporary staff or pay overtime. AI handles 10 calls or 1,000 calls with the same quality and speed.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Never Lose a Lead",
      description:
        "Most businesses lose 15-25% of inbound leads because calls go to voicemail. AI captures every call, qualifies every prospect, and books every opportunity.",
    },
    {
      icon: "CheckCircle" as IconName,
      title: "Professional, Consistent, Always Available",
      description:
        "No sick days, no bad moods, no inconsistent customer service. AI delivers the same professional experience to every caller, every time, 24/7.",
    },
  ],
  painPoints: [
    {
      problem: "Receptionist costs $35-45K/year plus benefits, taxes, turnover training",
      solution:
        "AI receptionist provides better 24/7 coverage at 20-40% of that cost. ROI in weeks, not years.",
    },
    {
      problem: "Calls go to voicemail during busy periods, lunch, or after hours",
      solution:
        "AI answers every call instantly. No more missed opportunities. Callers always reach a live voice, 24/7.",
    },
    {
      problem: "Voicemails lead to lost leads—some customers won't call back",
      solution:
        "Studies show 30-40% of voicemail prospects never follow up. AI books appointments immediately, capturing sales you'd otherwise lose.",
    },
    {
      problem: "Manual scheduling is error-prone and time-consuming",
      solution:
        "AI books directly on your calendar, syncs automatically to your system, and eliminates double-bookings and scheduling mistakes.",
    },
    {
      problem: "Staff are interrupted constantly by phones—reducing productive time",
      solution:
        "AI handles all incoming calls. Your team focuses on client work without phone interruptions. Front desk worker can spend time on value-add tasks.",
    },
    {
      problem: "After-hours callbacks pile up—your team starts next day overwhelmed",
      solution:
        "AI handles after-hours calls in real-time: books appointments, answers FAQs, qualifies leads. Your team starts each day with organized, scheduled work.",
    },
    {
      problem: "Vacation and sick days leave no one to answer phones",
      solution:
        "AI never takes time off. Zero coverage gaps. Your business runs 24/7 even if your entire team is on holiday.",
    },
    {
      problem: "Customer experience inconsistency—depends on who answers",
      solution:
        "AI provides identical professionalism to every caller. No variation based on employee mood, training level, or experience.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI Receptionist", "Human Receptionist"],
    rows: [
      {
        feature: "Annual Cost",
        prestyj: "$500-2,000/month ($6K-24K/year)",
        others: "$35,000-45,000/year + benefits",
        note: "AI saves 50-80% annually",
      },
      {
        feature: "Coverage Hours",
        prestyj: "24/7/365 (no exceptions)",
        others: "40-50 hours/week (with gaps)",
      },
      {
        feature: "Call Answer Rate",
        prestyj: "100% (every call answered)",
        others: "~70% (voicemail during busy times)",
      },
      {
        feature: "Appointment Booking Speed",
        prestyj: "Instant (during call)",
        others: "Callback required (next day typical)",
      },
      {
        feature: "Lead Capture Rate",
        prestyj: "95%+ (AI qualifies & books)",
        others: "60-70% (voicemail tag-outs)",
      },
      {
        feature: "Appointment Errors",
        prestyj: "Near zero (automatic syncing)",
        others: "5-10% (human error)",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited (same cost for 10 or 1000 calls)",
        others: "Limited (need to hire more staff)",
      },
      {
        feature: "Training & Onboarding",
        prestyj: "Hours (upload policies, scripts)",
        others: "Weeks to months",
      },
      {
        feature: "Turnover Impact",
        prestyj: "Zero (no employee turnover)",
        others: "Major (restart training every 12-18 months)",
      },
      {
        feature: "Consistency",
        prestyj: "100% consistent every call",
        others: "Varies by person, day, mood",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Do callers know they're talking to AI?",
      answer:
        "Modern AI voices sound natural and conversational. Most callers don't notice. What matters to them is speed and professionalism—and AI delivers both. If callers ask to speak to a human, AI seamlessly transfers to your team with full context of the conversation.",
    },
    {
      question: "How does AI book appointments without knowing your schedule?",
      answer:
        "Prestyj integrates with your calendar system (Google Calendar, Outlook, practice management software, etc.). AI checks real-time availability, books directly on your calendar, and sends confirmations to your team and customers.",
    },
    {
      question: "What if a customer wants to speak to a human right away?",
      answer:
        "AI can transfer to a live team member immediately, passing along everything discussed so far. For after-hours calls, AI offers callback scheduling or email followup. Your team always has context.",
    },
    {
      question: "Can AI handle complex questions specific to my business?",
      answer:
        "AI is configured with your FAQs, policies, and common questions. It handles straightforward inquiries (hours, pricing, directions, appointment booking). Complex questions are automatically escalated to your team with full context.",
    },
    {
      question: "Does it work with our existing calendar and scheduling software?",
      answer:
        "Prestyj integrates with all major systems: Google Calendar, Outlook, Acuity Scheduling, Calendly, and industry-specific software (Dentrix for dental, Cerner for medical, etc.). Appointments sync automatically in both directions.",
    },
    {
      question: "What about HIPAA compliance for medical/dental offices?",
      answer:
        "Prestyj is HIPAA-compliant by default. All conversations are encrypted, data is stored securely, and we sign Business Associate Agreements. We're built specifically for healthcare, legal, and regulated industries.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Setup typically takes 1-2 hours. You provide your hours, policies, FAQs, and we configure AI to match your voice and process. Phone number transfer happens quickly. Many customers go live within a week.",
    },
    {
      question: "What happens if AI can't handle a call?",
      answer:
        "AI is smart about knowing its limits. If a caller's issue doesn't match trained scenarios, AI smoothly offers to: take a voicemail, schedule a callback, or transfer to your team immediately. You get context about why the transfer happened.",
    },
    {
      question: "Can AI qualify leads during the call?",
      answer:
        "Yes. AI can ask custom questions to assess fit: budget, timeline, decision-maker status, location, property type, etc. Leads are scored and routed accordingly (hot leads to sales, warm leads to nurture, cold leads to archive).",
    },
    {
      question: "What's the difference between AI receptionist and an answering service?",
      answer:
        "Traditional answering services take messages. AI receptionist handles the full task: answer, book appointments, answer FAQs, qualify leads, and transfer only when necessary. You get results, not messages.",
    },
  ],
  cta: {
    headline: "Replace Your Receptionist. Keep the Professionalism.",
    subheadline:
      "Stop losing leads to voicemail. AI answers every call 24/7, books appointments instantly, and costs a fraction of a full-time receptionist. Book a demo to see how it works for your business.",
    buttonText: "Book Your Demo",
    footnote: "HIPAA-compliant. Works with all calendar systems. No credit card required.",
  },
});
