import type { SolutionPageContent } from "./types";

export const aiPhoneAnswering: SolutionPageContent = {
  slug: "ai-phone-answering",
  meta: {
    title: "AI Phone Answering Service | 24/7 Call Answering for Business | Prestyj",
    description: "Never miss another call. AI answers every phone call instantly, handles common questions, routes calls intelligently, and books appointments 24/7. Built for small businesses, medical offices, legal practices, and solo entrepreneurs.",
    keywords: [
      "AI phone answering service",
      "24/7 call answering for business",
      "AI virtual receptionist",
      "automated phone answering system",
      "AI answering service for small business",
      "AI receptionist for medical offices",
      "law firm answering service",
      "after hours call answering",
      "AI call routing software",
      "appointment booking AI",
      "virtual phone receptionist",
      "AI answering service for solo entrepreneurs",
    ],
  },
  hero: {
    badge: "AI Phone Answering",
    headline: "Every Call Answered.",
    headlineAccent: "Every Caller Helped.",
    subheadline: "An AI receptionist that picks up on the first ring, answers common questions, routes calls intelligently, and books appointments—24 hours a day, 7 days a week. Built for small businesses, medical offices, legal practices, and busy solopreneurs.",
    stats: [
      { value: "<1 ring", label: "answer time", color: "success" },
      { value: "24/7", label: "always available", color: "primary" },
      { value: "100%", label: "calls answered", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Missed Calls Are Costing You Customers",
    subheadline: "Every unanswered phone call is a potential client choosing your competitor.",
    points: [
      {
        icon: "PhoneMissed",
        title: "You can't answer every call",
        description: "Whether you're with a patient, in court, on a job site, or simply asleep, calls keep coming. 62% of callers who reach voicemail never leave a message—they call the next business on their list.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "After-hours callers go elsewhere",
        description: "Over 40% of business calls happen outside the 9-to-5 window. Without 24/7 coverage, evening and weekend callers immediately move on to a competitor who picks up.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "Live receptionists are expensive",
        description: "A full-time receptionist costs $40,000-$60,000 per year—and still only covers 40 hours a week. Traditional answering services charge by the minute and only take messages.",
        color: "primary",
      },
      {
        icon: "TrendingDown",
        title: "Phone tag kills conversion",
        description: "Callbacks made more than an hour after the initial call see conversion rates drop by 80%. By the time you return the call, the lead is gone or the appointment is booked elsewhere.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "An AI Receptionist That Never Sleeps",
    subheadline: "Answer every call, help every caller, and book every appointment—without hiring a single person.",
    benefits: [
      {
        icon: "Phone",
        title: "Instant Pickup, Every Time",
        description: "AI answers on the first ring, every time, with a natural conversational voice. No hold music, no menu trees, no \"please leave a message after the beep.\"",
      },
      {
        icon: "Bot",
        title: "Handles Common Inquiries",
        description: "Hours, location, pricing, services offered, insurance accepted, directions—AI answers FAQs instantly with information trained on your business, freeing your team for high-value work.",
      },
      {
        icon: "Workflow",
        title: "Smart Call Routing",
        description: "AI identifies the caller's need and routes them to the right person, department, or voicemail. Urgent matters reach you immediately; routine inquiries get resolved without interruption.",
      },
      {
        icon: "Calendar",
        title: "Books Appointments Live",
        description: "Connected to your calendar, AI schedules consultations, intake calls, and appointments directly during the conversation—no callbacks, no back-and-forth.",
      },
      {
        icon: "MessageSquare",
        title: "Detailed Call Summaries",
        description: "Every call generates a transcript and summary delivered by email or SMS, so you know exactly what was discussed, what was promised, and what needs follow-up.",
      },
      {
        icon: "Shield",
        title: "HIPAA-Aware & Confidential",
        description: "Built with privacy in mind for medical offices, legal practices, and regulated industries. Calls are handled securely with appropriate confidentiality safeguards.",
      },
    ],
  },
  calculator: {
    headline: "Missed Call Revenue Calculator",
    subheadline: "Find out how much revenue you're losing to unanswered phone calls every month.",
    inputs: {
      leads: { label: "Inbound calls per month", placeholder: "300", defaultValue: 300 },
      commission: { label: "Average customer value ($)", placeholder: "500", defaultValue: 500 },
    },
    reactivationRate: 0.3,
    conversionRate: 0.4,
    resultLabel: "Additional monthly revenue with AI phone answering",
  },
  objections: {
    headline: "Common Concerns About AI Phone Answering",
    subheadline: "Honest answers for businesses considering an AI receptionist.",
    objections: [
      {
        objection: "Won't my callers hate talking to a robot?",
        response: "Today's AI doesn't sound like the robots of a decade ago. It speaks naturally, listens conversationally, and adapts to interruptions. In real-world deployments, most callers don't realize they're speaking with AI—and the ones who do appreciate getting an immediate, helpful answer instead of voicemail.",
      },
      {
        objection: "What if a caller has a complex or unusual question?",
        response: "AI is great at handling the 70-80% of calls that follow predictable patterns: hours, pricing, scheduling, basic intake. For anything outside its scope, it captures detailed notes and either transfers the call live or sends you an instant summary so you can follow up with full context.",
      },
      {
        objection: "We're a medical/legal practice—privacy is critical.",
        response: "Prestyj's AI phone system is built with healthcare and legal workflows in mind. Conversations are handled with confidentiality safeguards, sensitive data is protected, and you can configure exactly what information is collected, stored, and shared. Many of our customers are medical offices and law firms.",
      },
      {
        objection: "How is this different from a regular answering service?",
        response: "Traditional answering services take a name and a number, then send you a message. Our AI actually does the work—answers questions, qualifies callers, books appointments on your live calendar, and resolves issues without you ever needing to call back. It's a receptionist, not a message pad.",
      },
    ],
  },
  cta: {
    headline: "Stop Letting Calls Go to Voicemail",
    subheadline: "Every missed call is a missed customer. Get an AI receptionist that answers every call, helps every caller, and books appointments around the clock.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "Hear a live AI phone call demo. No commitment, no credit card required.",
  },
};
