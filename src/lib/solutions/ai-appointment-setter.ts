import type { SolutionPageContent } from "./types";

export const aiAppointmentSetter: SolutionPageContent = {
  slug: "ai-appointment-setter",
  meta: {
    title: "AI Appointment Setter | Book 3x More Meetings on Autopilot | Prestyj",
    description:
      "Stop chasing leads. Prestyj's AI appointment setter qualifies prospects, handles objections, and books meetings directly onto your calendar 24/7. Built for real estate agents, home service businesses, and high-volume sales teams.",
    keywords: [
      "AI appointment setter",
      "automated appointment booking",
      "AI lead qualification",
      "24/7 appointment scheduling",
      "AI sales assistant for real estate",
      "appointment setting automation",
      "AI calendar booking software",
      "lead qualification AI",
      "AI appointment booking for sales teams",
      "automated meeting scheduler",
      "real estate AI appointment setter",
      "AI SDR for home services",
    ],
  },
  hero: {
    badge: "AI Appointment Setter",
    headline: "Book 3x More Meetings.",
    headlineAccent: "Without Lifting a Finger.",
    subheadline:
      "Prestyj's AI qualifies every lead, handles objections like a top-performing SDR, and books appointments directly onto your calendar—24 hours a day, 7 days a week. Built for real estate agents, home service businesses, and sales teams that can't afford to miss a lead.",
    stats: [
      { value: "24/7", label: "always-on booking", color: "primary" },
      { value: "3x", label: "more meetings booked", color: "success" },
      { value: "<1min", label: "lead-to-conversation time", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Pipeline Is Leaking Booked Appointments",
    subheadline: "Every hour a lead waits is another hour they're shopping your competitors.",
    points: [
      {
        icon: "Clock",
        title: "Leads go cold in minutes, not hours",
        description:
          "Studies show conversion rates drop 80% after the first 5 minutes. Your team is in meetings, on the road, or off the clock—and the lead you paid $80 to generate is already talking to someone else.",
        color: "destructive",
      },
      {
        icon: "PhoneMissed",
        title: "Manual follow-up is a black hole",
        description:
          "Your reps make 2-3 attempts, then give up. 80% of sales require 5+ touches. Without persistent, automated follow-up, the majority of your pipeline quietly disappears into the void.",
        color: "warning",
      },
      {
        icon: "Calendar",
        title: "Calendar tag eats your day alive",
        description:
          '"Does Tuesday at 2 work?" "No, how about Thursday?" Every appointment takes 4-7 messages to confirm. Your top closers are wasting hours on scheduling instead of selling.',
        color: "primary",
      },
      {
        icon: "DollarSign",
        title: "Hiring SDRs is expensive and unreliable",
        description:
          "A full-time appointment setter costs $50K-$80K loaded, takes 90 days to ramp, and quits within a year. Meanwhile, leads keep coming in nights, weekends, and holidays when no one is working.",
        color: "destructive",
      },
    ],
  },
  benefits: {
    headline: "An AI SDR That Never Sleeps, Never Quits, Never Misses",
    subheadline: "Prestyj's AI appointment setter works every lead, every time, on every channel.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant Lead Engagement",
        description:
          "AI responds to every new lead in under 60 seconds—via SMS, email, or voice. Strike while interest is hot and capture leads before competitors even see them.",
      },
      {
        icon: "Bot",
        title: "Human-Level Qualification",
        description:
          "Trained on your ideal customer profile, AI asks the right discovery questions, scores intent, and only books leads who actually fit. Your reps walk into qualified appointments, not tire-kickers.",
      },
      {
        icon: "Calendar",
        title: "Direct Calendar Booking",
        description:
          "AI checks your team's real availability and books the meeting on the spot—no back-and-forth. Integrates with Google Calendar, Outlook, Calendly, HubSpot, and Salesforce.",
      },
      {
        icon: "MessageSquare",
        title: "Objection Handling Built-In",
        description:
          '"I\'m just looking." "Send me info." "Call me later." AI handles common stalls and objections with proven responses, turning hesitant prospects into booked appointments.',
      },
      {
        icon: "RefreshCw",
        title: "Persistent Multi-Touch Follow-Up",
        description:
          "AI follows up across SMS, email, and voice for days or weeks until the lead books, opts out, or disqualifies—exactly the persistence top SDRs use, without the burnout.",
      },
      {
        icon: "BarChart3",
        title: "Full Pipeline Visibility",
        description:
          "Every conversation logged. Every appointment scored. Every no-show rebooked automatically. Real-time dashboards show what's working and where revenue is being created.",
      },
    ],
  },
  calculator: {
    headline: "Appointment Revenue Calculator",
    subheadline:
      "See how many qualified appointments—and how much revenue—you're leaving on the table.",
    inputs: {
      leads: { label: "New leads per month", placeholder: "300", defaultValue: 300 },
      commission: { label: "Average deal value ($)", placeholder: "5000", defaultValue: 5000 },
    },
    reactivationRate: 0.45,
    conversionRate: 0.35,
    resultLabel: "Additional monthly revenue from booked appointments",
  },
  objections: {
    headline: "Common Concerns About AI Appointment Setting",
    subheadline: "Honest answers for sales leaders evaluating AI vs. human SDRs.",
    objections: [
      {
        objection: "My leads will know they're talking to a bot",
        response:
          "Prestyj's AI uses natural conversational language, learns your brand voice, and handles back-and-forth like a top SDR. In testing, fewer than 5% of leads question whether they're talking to a human—and even when they do, what they care about is getting their meeting booked fast. Speed beats everything.",
      },
      {
        objection: "AI can't qualify leads as well as my best SDR",
        response:
          "Your best SDR works 8 hours a day, has bad days, forgets follow-ups, and takes vacations. AI runs your exact qualification framework on every single lead, 24/7, with perfect consistency. We replicate your top performer's playbook—and then run it 100x more.",
      },
      {
        objection: "We've tried chatbots before and they were terrible",
        response:
          "Old-school chatbots followed rigid decision trees and broke at the first off-script reply. Prestyj is built on modern LLMs trained specifically on appointment-setting conversations, integrated with your CRM and calendar. It's a different category of technology entirely—closer to a junior SDR than a chatbot.",
      },
      {
        objection: "How fast can we actually get this live?",
        response:
          "Most clients are live and booking appointments within 7-14 days. We handle the AI training, CRM integration, calendar sync, and conversation design. You provide your qualification criteria and ICP—we do the rest.",
      },
    ],
  },
  cta: {
    headline: "Ready to Stop Losing Leads to Slow Follow-Up?",
    subheadline:
      "Every lead you don't book within 5 minutes is a lead your competitor books instead. Let Prestyj's AI work your pipeline 24/7—so your closers can focus on closing.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "See a live AI appointment setter qualify and book a meeting in under 90 seconds.",
  },
};
