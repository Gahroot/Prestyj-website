import type { SolutionPageContent } from "./types";

export const homeServices: SolutionPageContent = {
  slug: "home-services",
  meta: {
    title: "AI Lead Response for Home Service Businesses | 24/7 Appointment Booking | Prestyj",
    description: "Never miss another service call. AI answers every lead in under 60 seconds, qualifies the job, and books appointments 24/7. Built for HVAC, plumbing, electrical, and contractor businesses.",
    keywords: [
      "AI receptionist for plumbers",
      "HVAC automated dispatch system",
      "after-hours appointment booking for contractors",
      "missed call text back automation",
      "AI answering service home services",
      "contractor lead response",
      "home service business automation",
      "AI for HVAC companies",
      "plumber AI receptionist",
      "electrician lead qualification",
    ],
  },
  hero: {
    badge: "Home Services AI Solution",
    headline: "Every Service Call Answered.",
    headlineAccent: "Every Job Booked.",
    subheadline: "Your crews are in the field. Your office is slammed. AI answers every call, qualifies the job, and books appointments—24/7. Built for HVAC, plumbing, electrical, and contractor businesses doing $1M+.",
    stats: [
      { value: "60s", label: "avg. response time", color: "success" },
      { value: "100%", label: "call answer rate", color: "primary" },
      { value: "3-5x", label: "more jobs captured", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Every Missed Call Is a Lost Job",
    subheadline: "Home service businesses lose thousands in revenue from slow or missed responses.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Technicians can't answer phones",
        description: "Your best people are crawling under houses and climbing on roofs. Every missed call is a $2,000-15,000 job going to the competitor who answers first.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "After-hours calls go to voicemail",
        description: "42% of service calls come after 5pm and on weekends. Homeowners with emergencies call the next company on the list—not your voicemail.",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Peak seasons overwhelm your team",
        description: "Summer AC rush or winter heating emergencies flood your lines. Your 2-person office can't handle 200+ daily calls without dropping leads.",
        color: "primary",
      },
      {
        icon: "DollarSign",
        title: "Answering services take messages, not bookings",
        description: "Traditional answering services write down a name and number. By the time you call back 4 hours later, they've already hired someone else.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI-Powered 24/7 Call Handling",
    subheadline: "Capture every lead, qualify every job, book every appointment—automatically.",
    benefits: [
      {
        icon: "Zap",
        title: "Sub-60 Second Response",
        description: "Every call answered instantly. No hold music, no voicemail, no \"we'll call you back.\" Homeowners get immediate help when they need it most.",
      },
      {
        icon: "Bot",
        title: "Intelligent Job Qualification",
        description: "AI asks the right questions: service needed, urgency level, property type, preferred scheduling. Routes emergencies for immediate dispatch.",
      },
      {
        icon: "Calendar",
        title: "Automated Appointment Booking",
        description: "Qualified leads book directly into your calendar based on technician availability, service area, and job type. No back-and-forth phone tag.",
      },
      {
        icon: "RefreshCw",
        title: "Unlimited Call Capacity",
        description: "Whether it's 10 calls or 1,000 calls on the hottest day of summer, AI handles them all simultaneously. Scale without hiring.",
      },
      {
        icon: "Mail",
        title: "Multi-Channel Follow-Up",
        description: "Call answered, SMS confirmation sent, email estimate details delivered. Coordinated communication across every channel your customers use.",
      },
      {
        icon: "Shield",
        title: "Emergency Triage Built-In",
        description: "Gas leaks, burst pipes, no heat in winter—AI identifies emergencies instantly and routes them for urgent dispatch while booking standard jobs normally.",
      },
    ],
  },
  calculator: {
    headline: "Revenue Recovery Calculator",
    subheadline: "See how much revenue you're losing from missed and slow responses.",
    inputs: {
      leads: { label: "Service calls per month", placeholder: "200", defaultValue: 200 },
      commission: { label: "Average job value ($)", placeholder: "3500", defaultValue: 3500 },
    },
    reactivationRate: 0.65,
    conversionRate: 0.6,
    resultLabel: "Additional monthly revenue with AI",
  },
  objections: {
    headline: "Common Concerns About AI for Home Services",
    subheadline: "Real answers for contractors considering AI call handling.",
    objections: [
      {
        objection: "Homeowners will hang up on a robot",
        response: "Modern AI uses natural conversational language that sounds genuinely human. What homeowners care about most is getting an immediate answer—not whether it's a person or AI. A helpful AI that answers in 5 seconds beats a human who calls back in 4 hours.",
      },
      {
        objection: "AI can't handle complex service questions",
        response: "AI is designed to qualify and book, not diagnose. For technical questions about equipment specs, repair vs replace, or warranty coverage, AI captures the details and routes to your team with full context. It handles 80% of calls so your team can focus on the 20% that need expertise.",
      },
      {
        objection: "We already have an answering service",
        response: "Answering services take messages. AI takes action. Instead of delivering a callback slip hours later, AI qualifies the job, checks your calendar, and books the appointment on the spot. For emergency calls, it triages and routes immediately.",
      },
      {
        objection: "Our dispatch software is too complex for AI",
        response: "Prestyj integrates with ServiceTitan, Jobber, Housecall Pro, and other leading field service platforms. AI books appointments directly into your existing workflow—no double entry, no manual transfer.",
      },
    ],
  },
  cta: {
    headline: "Ready to Capture Every Service Call?",
    subheadline: "Every missed call is a job your competitor books instead. Stop losing revenue and start booking appointments automatically, 24/7.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See how AI handles service calls in under 60 seconds.",
  },
};
