import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const salonsAndSpas: BestForPageContent = createBestForPage({
  slug: "salons-and-spas",
  niche: {
    name: "Salons and Spas",
    shortName: "Salons & Spas",
    description: "Salons and spas looking for AI-powered appointment booking, client communication, and no-show reduction",
  },
  meta: {
    title: "AI Receptionist for Salons & Spas | Reduce No-Shows | Prestyj",
    description:
      "AI voice and text agents for salons and spas. Reduce no-shows by 70%, automate appointment booking 24/7, handle rescheduling requests, and save front desk staff 20+ hours/week.",
    keywords: [
      "AI receptionist for salons",
      "salon appointment booking AI",
      "spa AI answering service",
      "reduce salon no-shows",
      "hair salon automated scheduling",
      "AI for beauty salons",
      "salon front desk automation",
      "spa receptionist AI",
      "automated appointment reminders",
      "salon call answering service",
    ],
  },
  hero: {
    badge: "Salon & Spa AI",
    headlineAccent: "Salons and Spas",
    subheadline:
      "No-shows cost $75-$200 per appointment. AI reduces no-shows by 70%, handles booking and rescheduling 24/7, and automates client reminders—so your staff can focus on delivering great service.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "CalendarCheck" as IconName,
      title: "Reduce No-Shows by 70%",
      description:
        "Automated reminders via text and voice reduce no-shows from 20-30% down to 6-9%. That's 3-5 recovered appointments per week for the average salon.",
    },
    {
      icon: "Clock" as IconName,
      title: "Save Front Desk 20+ Hours/Week",
      description:
        "AI handles appointment booking, rescheduling, confirmations, and reminder calls. Your team focuses on clients, not phone tag and administrative work.",
    },
    {
      icon: "Phone" as IconName,
      title: "24/7 Appointment Booking",
      description:
        "Clients book appointments evenings, weekends, and early mornings. AI responds instantly, checks stylist availability, and confirms bookings—before they call a competitor.",
    },
    {
      icon: "Sparkles" as IconName,
      title: "Seamless Stylist Matching",
      description:
        "AI learns client preferences, stylist specialties, and availability. New clients get matched with the right stylist based on service type and schedule.",
    },
  ],
  painPoints: [
    {
      problem: "No-shows costing $75-$200 per appointment slot",
      solution:
        "AI sends personalized reminders 48 hours and 24 hours before appointments. Clients confirm, reschedule, or cancel with one click—giving you time to fill the slot.",
    },
    {
      problem: "Front desk overwhelmed with booking calls",
      solution:
        "AI handles all appointment scheduling, rescheduling requests, and availability inquiries. Your staff makes zero booking calls and focuses on in-house clients.",
    },
    {
      problem: "After-hours calls going unanswered, losing new clients",
      solution:
        "New clients call evenings and weekends to book appointments. AI captures every call, qualifies the client's needs, and books appointments instantly into your schedule.",
    },
    {
      problem: "Time-consuming rescheduling and confirmation calls",
      solution:
        "AI manages all appointment changes and sends automated confirmations. Clients can reschedule through text without calling—no hold time, no phone tag.",
    },
    {
      problem: "New clients don't know which stylist to choose",
      solution:
        "AI asks about service needs, hair type, and preferences, then recommends the best-matching stylist based on specialties and availability. First-time bookings convert at higher rates.",
    },
    {
      problem: "Last-minute cancellations leave empty chairs",
      solution:
        "With instant text-based rescheduling and waitlist management, AI can fill last-minute openings automatically. Clients on waitlists get notified and can claim the spot immediately.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "No-Show Rate",
        prestyj: "6-9% (70% reduction)",
        others: "20-30% industry average",
      },
      {
        feature: "Booking Availability",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Confirmation Call Time",
        prestyj: "Zero (fully automated)",
        others: "10-15 hours/week",
      },
      {
        feature: "Rescheduling Process",
        prestyj: "Text-based, instant",
        others: "Phone call, wait time",
      },
      {
        feature: "New Client Response",
        prestyj: "Under 60 seconds",
        others: "Next business day callback",
      },
      {
        feature: "Stylist Matching",
        prestyj: "AI-based on needs",
        others: "Random or staff-dependent",
      },
      {
        feature: "Waitlist Management",
        prestyj: "Automated fill alerts",
        others: "Manual calling if time allows",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI reduce no-shows for salons?",
      answer:
        "AI sends personalized text and voice reminders 48 hours and 24 hours before appointments. Clients can confirm with one tap, request to reschedule, or cancel—giving you time to fill empty slots. Automated reminders reduce no-shows by 70% compared to manual methods.",
    },
    {
      question: "Can AI handle complex scheduling requests?",
      answer:
        "Yes. AI manages multiple service appointments, checks stylist availability for specific time blocks, handles recurring appointment bookings, and coordinates appointments for multiple services in one visit. Complex requests are handled with full context.",
    },
    {
      question: "Does it integrate with salon booking software?",
      answer:
        "Prestyj integrates with major salon and spa software including Mindbody, Vagaro, Booksy, Zenoti, and SalonIQ. Appointments, client data, and conversation notes sync automatically with your existing system.",
    },
    {
      question: "What about clients who prefer speaking to a person?",
      answer:
        "AI seamlessly hands off to your front desk when requested, providing full conversation context and appointment details. For routine bookings, reschedules, and confirmations, most clients appreciate instant text-based service without waiting on hold.",
    },
    {
      question: "How does stylist matching work?",
      answer:
        "AI learns each stylist's specialties (curly hair expertise, color correction, bridal styling, etc.), schedule, and client preferences. When booking, AI asks about the client's needs and recommends the best-fitting stylist with available times.",
    },
    {
      question: "Can AI handle retail product inquiries?",
      answer:
        "Yes. AI can answer questions about retail products, check inventory, and recommend products based on client service history. Products can be added to appointments for pickup or included in automated follow-up communications.",
    },
    {
      question: "How does waitlist management work?",
      answer:
        "When appointments are cancelled or rescheduled, AI automatically notifies clients on the waitlist for that time slot. The first client to accept gets the appointment. This happens instantly, reducing the chance of empty chairs from last-minute changes.",
    },
  ],
  cta: {
    headline: "Stop Losing $75-$200 Per No-Show Appointment",
    subheadline:
      "Reduce no-shows by 70%, capture every new client call, and give your front desk 20 hours back every week. Book a demo to see the impact on your salon or spa.",
    buttonText: "Book Your Demo",
    footnote: "Works with all major salon software. No credit card required.",
  },
});
