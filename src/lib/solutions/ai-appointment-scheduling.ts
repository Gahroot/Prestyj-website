import type { SolutionPageContent } from "./types";

export const aiAppointmentScheduling: SolutionPageContent = {
  slug: "ai-appointment-scheduling",
  meta: {
    title: "AI Appointment Scheduling | Book Meetings 24/7 with Voice AI | Prestyj",
    description:
      "AI appointment scheduling that works by phone. Book consultations, showings, and service calls 24/7 with voice AI that checks real-time calendar availability. Reduce no-shows by 40% and capture 3x more bookings.",
    keywords: [
      "AI appointment scheduling",
      "AI booking agent",
      "voice AI appointment scheduling",
      "automated appointment booking",
      "AI scheduling assistant",
      "24/7 appointment scheduling",
      "AI calendar booking",
      "reduce no-shows AI",
    ],
  },
  hero: {
    badge: "AI Appointment Scheduling",
    headline: "Book Appointments 24/7.",
    headlineAccent: "While You Sleep.",
    subheadline:
      "A lead calls at 9pm and wants to book a consultation. Your office is closed—but AI checks your calendar, finds available slots, and books the appointment with a confirmation sent instantly. That's 3–5x more bookings captured outside business hours.",
    stats: [
      { value: "40%", label: "reduction in no-shows", color: "success" },
      { value: "3–5x", label: "more after-hours bookings", color: "primary" },
      { value: "<2 min", label: "average booking time", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Scheduling Process Is Losing You Business",
    subheadline: "Phone tag, voicemail, and 'let me check my calendar' kill conversions.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Phone tag kills 30–40% of potential bookings",
        description:
          "A prospect calls. Nobody answers. They leave a voicemail. You call back the next day. They don't answer. Three days of phone tag later, they've booked with someone else. This cycle repeats daily.",
        color: "destructive",
      },
      {
        icon: "Calendar",
        title: "'Let me check my calendar' = lost momentum",
        description:
          "When prospects are ready to book, they want it done now. Making them wait for a callback or an email confirmation gives them time to reconsider—or find another provider. Every delay costs bookings.",
        color: "warning",
      },
      {
        icon: "UserX",
        title: "No-shows waste $10K–$50K/year in revenue",
        description:
          "Missed appointments cost businesses $150–$300 per slot in lost revenue. At 3–5 no-shows per week, that's $23K–$78K annually in wasted capacity. No confirmations, no reminders, no accountability.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI Scheduling That Works in Real-Time",
    subheadline: "Book appointments instantly, confirm automatically, and reduce no-shows.",
    benefits: [
      {
        icon: "Clock",
        title: "Real-Time Calendar Availability",
        description:
          "AI checks your live calendar availability across Google Calendar, Outlook, and Calendly. No double-bookings, no scheduling conflicts. Callers get confirmed appointments in under 2 minutes.",
      },
      {
        icon: "Bot",
        title: "24/7 Booking with Voice AI",
        description:
          "Prospects call anytime—nights, weekends, holidays—and AI books the appointment on the spot. No voicemail, no callback required. Capture the booking while intent is highest.",
      },
      {
        icon: "MessageSquare",
        title: "Automated Confirmations & Reminders",
        description:
          "Instant email and SMS confirmations after booking. Automated reminders 24 hours and 1 hour before the appointment. No-show rates drop 40% with proper reminder sequences.",
      },
      {
        icon: "Target",
        title: "Smart Appointment Matching",
        description:
          "AI matches appointment type to the right provider: consultations with senior staff, follow-ups with associates, service calls with technicians. No manual triage needed.",
      },
      {
        icon: "RefreshCw",
        title: "Easy Rescheduling & Cancellations",
        description:
          "Callers can reschedule or cancel by calling the same AI number. Calendar updates instantly, freed slots become available immediately, and no staff time is wasted on schedule changes.",
      },
      {
        icon: "BarChart3",
        title: "Booking Analytics & Optimization",
        description:
          "Track booking rates by time of day, day of week, and lead source. See no-show patterns, peak booking times, and conversion rates. Optimize your schedule for maximum revenue.",
      },
    ],
  },
  faqs: [
    {
      question: "How does AI appointment scheduling work?",
      answer:
        "A prospect calls your business number. AI answers, understands they want to book an appointment, asks for their preferred date/time, checks your live calendar availability, and confirms the booking—all in under 2 minutes. Confirmations are sent via email and SMS automatically. No human involvement needed for routine bookings.",
    },
    {
      question: "Which calendar systems does it integrate with?",
      answer:
        "Prestyj integrates with Google Calendar, Microsoft Outlook/Exchange, Calendly, Acuity Scheduling, and most calendar systems via API. AI reads real-time availability and writes new bookings directly. Double-bookings are impossible because AI checks availability before confirming.",
    },
    {
      question: "How does it reduce no-shows?",
      answer:
        "Three ways: instant confirmation (establishes commitment), automated SMS/email reminders (24hr and 1hr before), and easy rescheduling (callers who need to change can do it instantly instead of just not showing up). Together, these reduce no-shows by 30–40%.",
    },
    {
      question: "Can AI handle different appointment types?",
      answer:
        "Yes. Configure appointment types with durations, required providers, buffer times, and prep instructions. AI matches callers to the right type: 30-minute consultation, 60-minute showing, 2-hour service call. Each type has its own scheduling rules.",
    },
    {
      question: "What about existing patients/clients who call to book?",
      answer:
        "AI recognizes returning callers by phone number, accesses their history, and offers relevant appointment types. Existing patients can book follow-ups, annual checkups, or recurring appointments. New prospects get appropriate initial consultation slots.",
    },
    {
      question: "How much does AI appointment scheduling cost?",
      answer:
        "Most businesses spend $300–$600/month for AI appointment scheduling, including 24/7 coverage, calendar integration, automated reminders, and booking analytics. At $150–$300 per appointment slot, capturing just 2–3 additional bookings per month that would have been lost pays for the entire service.",
    },
    {
      question: "Can callers reschedule or cancel through AI?",
      answer:
        "Yes. Callers can call the same number to reschedule or cancel. AI looks up their appointment, offers alternative times for rescheduling, or processes cancellations. Calendar updates instantly and freed slots become available for other callers.",
    },
    {
      question: "Does it work with CRM systems?",
      answer:
        "Yes. Prestyj syncs booking data to HubSpot, Salesforce, Follow Up Boss, ServiceTitan, and other CRMs. New appointments appear in your CRM with caller details, appointment type, and notes. Full two-way sync keeps everything current.",
    },
  ],
  objections: {
    headline: "Scheduling Concerns",
    subheadline: "We've addressed every objection we've heard from businesses like yours.",
    objections: [
      {
        objection: "My scheduling is too complex for AI to handle.",
        response:
          "AI handles multi-provider scheduling, different appointment types with varying durations, buffer times between appointments, location-specific availability, and provider preferences. If your current system can represent it as calendar rules, AI can book it. We configure the complexity once, and AI executes it perfectly every time.",
      },
      {
        objection: "I already use Calendly/Acuity for online booking.",
        response:
          "Online booking only works for people at their computers. 60% of appointment requests come by phone from people who want to book now—not navigate a booking link. AI handles phone-based booking into your existing Calendly/Acuity calendar. Same system, more access points, more bookings.",
      },
      {
        objection: "What if AI books the wrong type of appointment?",
        response:
          "AI confirms the appointment type with the caller before booking: 'I'd like to book you for a 30-minute initial consultation on Tuesday at 2pm. Does that work?' If the AI detects uncertainty, it transfers to your staff. Error rates on properly configured systems are under 1%.",
      },
      {
        objection: "My clients expect a personal touch when booking.",
        response:
          "AI delivers a conversational, personal experience—callers hear a natural voice that asks about their preferences, confirms details, and sends personalized confirmations. Most callers rate the AI booking experience as good as or better than phone tag with a busy receptionist.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Revenue from AI Booking",
    subheadline: "See how many more appointments you'd capture with 24/7 scheduling.",
    inputs: {
      leads: {
        label: "Appointment requests per month",
        placeholder: "e.g., 300",
        defaultValue: 300,
      },
      commission: {
        label: "Revenue per appointment ($)",
        placeholder: "e.g., 250",
        defaultValue: 250,
      },
    },
    reactivationRate: 0.35,
    conversionRate: 0.7,
    resultLabel: "Additional annual revenue captured",
  },
  cta: {
    headline: "Start Booking Appointments 24/7",
    subheadline:
      "Stop losing bookings to voicemail and phone tag. AI captures every appointment request, confirms instantly, and fills your calendar while you focus on delivering great service.",
    buttonText: "Set Up AI Scheduling",
    buttonHref: "/book-demo",
    footnote: "Works with Google Calendar, Outlook, Calendly, and more. Live in 5–7 days.",
  },
};
