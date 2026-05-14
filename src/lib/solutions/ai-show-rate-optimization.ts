import type { SolutionPageContent } from "./types";

export const aiShowRateOptimization: SolutionPageContent = {
  slug: "ai-show-rate-optimization",
  meta: {
    title: "AI Show Rate Optimization | Reduce No-Shows by 50% | Prestyj",
    description:
      "Stop losing revenue to no-shows. AI sends automated reminders, confirms appointments, handles rescheduling, and personalizes pre-appointment engagement to boost show rates by 30-50%.",
    keywords: [
      "AI appointment reminders",
      "reduce no-show rate",
      "automated appointment confirmations",
      "AI rescheduling assistant",
      "show rate optimization software",
      "no-show prevention AI",
      "real estate appointment reminders",
      "medical office no-show automation",
      "home services appointment confirmation",
      "AI scheduling assistant",
      "patient reminder automation",
      "appointment engagement AI",
    ],
  },
  hero: {
    badge: "Show Rate Optimization AI",
    headline: "Cut No-Shows in Half.",
    headlineAccent: "Fill Every Appointment Slot.",
    subheadline:
      "Every no-show is wasted time, lost revenue, and a hole in your calendar. AI confirms, reminds, reschedules, and engages every booked appointment—so the people on your calendar actually show up.",
    stats: [
      { value: "50%", label: "fewer no-shows", color: "success" },
      { value: "3x", label: "confirmation rate", color: "primary" },
      { value: "24/7", label: "automated engagement", color: "warning" },
    ],
  },
  painPoints: {
    headline: "No-Shows Are Killing Your Revenue",
    subheadline:
      "Every empty slot is paid staff time, lost commission, and a customer who chose not to show.",
    points: [
      {
        icon: "UserX",
        title: "20-40% of appointments are no-shows",
        description:
          "Industry averages are brutal. For real estate showings, medical offices, and home services, nearly half of all booked appointments either no-show or cancel last minute—wrecking your day.",
        color: "destructive",
      },
      {
        icon: "DollarSign",
        title: "Each no-show costs $150-$500+",
        description:
          "Wasted technician drive time, empty exam rooms, agents waiting at vacant properties. The hard cost of every missed appointment compounds fast across hundreds of bookings per month.",
        color: "warning",
      },
      {
        icon: "Clock",
        title: "Manual reminders eat staff hours",
        description:
          "Your team spends hours every day calling, texting, and emailing to confirm appointments. It's a full-time job that still leaves half the calendar uncertain.",
        color: "primary",
      },
      {
        icon: "PhoneMissed",
        title: "Last-minute cancels can't be filled",
        description:
          "By the time a client cancels at 8am for a 9am appointment, that slot is dead. Without automation, you can't reach waitlisted clients fast enough to fill the gap.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Keeps Your Calendar Full",
    subheadline:
      "Automated reminders, smart confirmations, and personalized engagement that gets people to show up.",
    benefits: [
      {
        icon: "MessageSquare",
        title: "Multi-Touch Smart Reminders",
        description:
          "AI sends perfectly-timed reminders via SMS, email, and voice—24 hours, 2 hours, and 15 minutes before. Each message personalized to the appointment type and customer.",
      },
      {
        icon: "CheckCircle",
        title: "Two-Way Confirmation Flow",
        description:
          "Customers confirm, cancel, or reschedule by replying directly to the reminder. AI handles the conversation, updates your calendar, and notifies your team automatically.",
      },
      {
        icon: "RefreshCw",
        title: "Intelligent Rescheduling Assistant",
        description:
          "When clients can't make it, AI offers the next available slots that fit their preferences—no back-and-forth phone tag. Recovers appointments that would otherwise be lost.",
      },
      {
        icon: "Heart",
        title: "Personalized Pre-Appointment Engagement",
        description:
          "AI sends helpful prep info: what to bring, parking instructions, agent bios, property highlights, intake forms. Engaged customers are 3x more likely to show.",
      },
      {
        icon: "Zap",
        title: "Instant Waitlist Backfill",
        description:
          "When a slot opens up, AI immediately texts waitlisted customers to fill the gap. Empty calendar slots become booked appointments in minutes—not lost revenue.",
      },
      {
        icon: "BarChart3",
        title: "Show Rate Analytics & Insights",
        description:
          "Track show rates by appointment type, time of day, and customer segment. AI surfaces patterns so you know which clients need extra outreach to convert.",
      },
    ],
  },
  calculator: {
    headline: "No-Show Cost Calculator",
    subheadline: "See how much revenue you're losing to no-shows—and how much you can recover.",
    inputs: {
      leads: { label: "Appointments booked per month", placeholder: "300", defaultValue: 300 },
      commission: { label: "Average appointment value ($)", placeholder: "400", defaultValue: 400 },
    },
    reactivationRate: 0.5,
    conversionRate: 0.3,
    resultLabel: "Additional monthly revenue from recovered appointments",
  },
  objections: {
    headline: "Common Concerns About Show Rate AI",
    subheadline: "Real answers for businesses tired of empty appointment slots.",
    objections: [
      {
        objection: "We already send automated reminders",
        response:
          "Basic reminders aren't enough. Generic \"You have an appointment tomorrow\" texts get ignored. Prestyj's AI sends personalized, conversational reminders that customers actually respond to—and handles the back-and-forth when they need to reschedule. That's the difference between a 70% and 95% show rate.",
      },
      {
        objection: "Our customers don't like automated messages",
        response:
          "Customers don't dislike automation—they dislike feeling like a number. AI uses their name, references the specific service or property, and sounds like a helpful assistant, not a generic blast. The result: higher engagement and fewer complaints than human-sent reminders.",
      },
      {
        objection: "Rescheduling needs a human touch",
        response:
          "AI handles 80% of rescheduling automatically—matching availability, confirming new times, updating calendars. For complex situations, it escalates to your team with full context. Your staff only handles exceptions, not every reschedule request.",
      },
      {
        objection: "Will this integrate with our scheduling system?",
        response:
          "Yes. Prestyj integrates with Google Calendar, Outlook, Calendly, Acuity, ServiceTitan, Jobber, athenahealth, and most major scheduling platforms. AI updates your existing calendar—no rip-and-replace, no double entry.",
      },
    ],
  },
  cta: {
    headline: "Ready to Fill Every Appointment Slot?",
    subheadline:
      "Every no-show is paid staff time and lost revenue. Stop losing money to empty calendar slots and start optimizing show rates automatically.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See how AI cuts no-shows in half within 30 days.",
  },
};
