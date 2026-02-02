import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiAppointmentSetting: BestForPageContent = createBestForPage({
  slug: "ai-appointment-setting",
  niche: {
    name: "AI Appointment Setting",
    shortName: "Appointment Setting",
    description: "Sales teams needing to book more appointments without hiring appointment setters",
  },
  meta: {
    title: "Best AI Appointment Setting Service | Book More Demos 24/7 | Prestyj",
    description:
      "AI appointment setters book qualified demos and consultations around the clock. Check calendars, find availability, send confirmations, and reduce no-shows by 40%. Never miss an appointment opportunity.",
    keywords: [
      "AI appointment setting",
      "AI appointment setter",
      "automated appointment scheduling",
      "AI appointment booking",
      "AI scheduling assistant",
      "automated demo booking",
      "AI calendar scheduling",
      "appointment setting service",
    ],
  },
  hero: {
    badge: "AI Appointment Setting",
    headlineAccent: "AI Appointment Setting",
    subheadline:
      "Turn more leads into booked appointments with AI that schedules 24/7. Qualify leads, find mutual availability, book appointments, send confirmations, and reduce no-shows—all automated.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Calendar" as IconName,
      title: "24/7 Appointment Scheduling",
      description:
        "Leads book appointments on their schedule, not yours. AI checks calendars, finds availability, and books appointments any time—evenings, weekends, holidays. Never lose an appointment because you weren't available.",
    },
    {
      icon: "Target" as IconName,
      title: "Qualify Before Booking",
      description:
        "Don't waste calendar time on unqualified prospects. AI qualifies leads during the scheduling conversation and only books appointments with prospects who meet your criteria.",
    },
    {
      icon: "Bell" as IconName,
      title: "Automated Confirmations & Reminders",
      description:
        "Reduce no-shows by 40% with automated confirmation and reminder sequences. AI sends pre-appointment reminders via text and email, answers questions, and re-schedules if needed.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "2-3x More Appointments Booked",
      description:
        "Human appointment setters reach 20-30% of leads during business hours. AI reaches 100% of leads 24/7, converting 2-3x more inquiries into booked appointments.",
    },
  ],
  painPoints: [
    {
      problem: "Leads don't convert because scheduling is too hard",
      solution:
        "AI makes scheduling effortless. Leads speak naturally ('I'm free Tuesday afternoon') and AI handles the rest: checks your calendar, books the slot, sends confirmation. Friction-free scheduling increases conversion by 40-60%.",
    },
    {
      problem: "Appointment setters only work business hours",
      solution:
        "45% of appointment requests happen outside business hours. AI books appointments 24/7, capturing evening and weekend opportunities that competitors miss. Every lead can book immediately, regardless of time.",
    },
    {
      problem: "High no-show rates waste sales time",
      solution:
        "AI sends automated confirmation and reminder sequences that reduce no-shows by 40%. Pre-appointment qualification ensures only serious prospects book. Result: higher show rates and better time utilization.",
    },
    {
      problem: "Back-and-forth scheduling emails waste time",
      solution:
        "AI handles all scheduling logistics in one conversation: checks both calendars, finds mutual availability, books the appointment, and sends confirmation. No email chains, no phone tag.",
    },
    {
      problem: "Can't scale appointment volume without hiring",
      solution:
        "AI handles unlimited appointment requests simultaneously. Whether you need 10 appointments or 1,000 appointments per month, AI scales instantly without adding staff.",
    },
  ],
  comparison: {
    headers: ["Feature", "AI Appointment Setting", "Human Setter"],
    rows: [
      {
        feature: "Appointments Booked Per Day",
        prestyj: "Unlimited (100s possible)",
        others: "10-15 per setter",
      },
      {
        feature: "Availability",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Response Time",
        prestyj: "Immediate (under 60 seconds)",
        others: "Hours to days",
      },
      {
        feature: "No-Show Rate",
        prestyj: "10-15% (automated reminders)",
        others: "25-50% (manual follow-up)",
      },
      {
        feature: "Cost Per Appointment",
        prestyj: "$5-15",
        others: "$50-100 (salary + overhead)",
      },
      {
        feature: "Calendar Integration",
        prestyj: "Real-time, automatic",
        others: "Manual checking",
      },
      {
        feature: "Qualification Included",
        prestyj: "Yes (before booking)",
        others: "Limited or separate process",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Which calendar systems does AI integrate with?",
      answer:
        "Prestyj integrates with Google Calendar, Microsoft Outlook, Calendly, Cal.com, and most major scheduling platforms. AI checks real-time availability and books directly into your calendar system.",
    },
    {
      question: "Can AI handle complex scheduling like multiple team members?",
      answer:
        "Yes. AI can route appointments to specific team members based on territory, expertise, availability, or round-robin. Supports multiple calendars, blackout times, buffer times, and custom scheduling rules.",
    },
    {
      question: "What if someone needs to reschedule?",
      answer:
        "AI handles rescheduling automatically. Leads can request changes via text or phone, and AI finds new availability and updates the appointment. All changes sync automatically to your calendar.",
    },
    {
      question: "How does AI reduce no-shows?",
      answer:
        "Multi-touch reminder sequence: confirmation immediately after booking, reminder 24 hours before, reminder 2 hours before. AI also answers pre-appointment questions and re-engages leads who seem uncertain. Result: 40% reduction in no-shows.",
    },
    {
      question: "Can AI qualify leads before booking appointments?",
      answer:
        "Absolutely. AI asks your qualification questions during the scheduling conversation. Only prospects who meet your criteria get an appointment. This prevents wasted time on unqualified prospects.",
    },
  ],
  cta: {
    headline: "Fill Your Calendar With Qualified Appointments",
    subheadline:
      "See how AI appointment setting books 2-3x more demos without adding staff. Book a demo to see intelligent scheduling in action.",
    buttonText: "See AI Book an Appointment",
    footnote: "Watch AI handle scheduling, qualification, and confirmation in real-time.",
  },
});
