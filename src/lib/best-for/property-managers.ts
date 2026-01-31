import type { BestForPageContent } from "./types";

export const propertyManagers: BestForPageContent = {
  slug: "property-managers",
  niche: {
    name: "Property Managers",
    shortName: "Property Management",
    description: "Property management companies handling tenant calls, maintenance requests, and showings 24/7",
  },
  meta: {
    title: "AI Agents for Property Managers | 24/7 Tenant & Maintenance Support | Prestyj",
    description:
      "AI voice and text agents for property management. Handle tenant calls 24/7, triage maintenance emergencies, schedule showings, and qualify prospects. Stop after-hours interruptions.",
    keywords: [
      "AI for property management",
      "property management AI agents",
      "AI tenant support",
      "automated maintenance triage",
      "AI showing scheduling",
      "property management automation",
    ],
  },
  hero: {
    badge: "Property Management AI",
    headline: "AI Agents Built for",
    headlineAccent: "Property Managers",
    subheadline:
      "Maintenance emergencies don't wait for business hours. AI handles tenant calls 24/7, triages urgent vs routine requests, and books showings while you focus on operations.",
  },
  whyBestFor: [
    {
      icon: "Clock",
      title: "24/7 Tenant Support",
      description:
        "Maintenance issues happen at midnight. Prospective tenants call on weekends. AI answers every call, every time—no more after-hours disruptions to your personal life.",
    },
    {
      icon: "AlertTriangle",
      title: "Intelligent Emergency Triage",
      description:
        "AI distinguishes between true emergencies (burst pipe, no heat) and routine requests (light bulb out). Critical issues escalate immediately; others are scheduled appropriately.",
    },
    {
      icon: "Calendar",
      title: "Automated Showing Coordination",
      description:
        "Prospective tenants can schedule showings instantly without phone tag. AI checks availability, books appointments, and sends confirmations—reducing no-shows and vacancy days.",
    },
    {
      icon: "Users",
      title: "Prospect Qualification",
      description:
        "AI pre-qualifies applicants by gathering move-in date, income verification, credit score range, and rental history before you invest time in showings.",
    },
  ],
  painPoints: [
    {
      problem: "After-hours calls disrupting your evenings and weekends",
      solution:
        "AI handles all tenant calls 24/7. True emergencies reach you immediately; routine requests are logged and scheduled for normal hours.",
    },
    {
      problem: "Showing no-shows wasting time and extending vacancies",
      solution:
        "AI sends automated confirmations and reminders, pre-qualifies prospects, and makes rescheduling easy—reducing no-show rates by up to 60%.",
    },
    {
      problem: "Maintenance requests getting lost or delayed",
      solution:
        "Every maintenance call is logged, categorized, and routed appropriately. Tenants get immediate acknowledgment; you get organized work orders.",
    },
    {
      problem: "Spending hours on unqualified rental applicants",
      solution:
        "AI qualifies prospects upfront: income, credit range, move-in timeline, pet requirements. Only show units to tenants who meet your criteria.",
    },
    {
      problem: "Can't afford full-time staff but overwhelmed by call volume",
      solution:
        "AI handles unlimited concurrent calls for a fraction of hiring costs. No payroll, no benefits, no scheduling conflicts—just consistent coverage.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "After-Hours Coverage",
        prestyj: "24/7/365 automated",
        others: "On-call rotation or voicemail",
      },
      {
        feature: "Emergency Triage",
        prestyj: "Instant AI assessment",
        others: "Manual callback and evaluation",
      },
      {
        feature: "Showing Scheduling",
        prestyj: "Instant automated booking",
        others: "Phone tag over multiple days",
      },
      {
        feature: "Monthly Cost",
        prestyj: "Fraction of staff cost",
        others: "$2,500-4,000+ per employee",
      },
      {
        feature: "Prospect Qualification",
        prestyj: "100% consistent criteria",
        others: "Varies by staff member",
      },
      {
        feature: "Call Capacity",
        prestyj: "Unlimited concurrent calls",
        others: "One call at a time per person",
      },
      {
        feature: "Request Tracking",
        prestyj: "Automatic logging & CRM",
        others: "Manual entry prone to errors",
      },
    ],
  },
  faq: [
    {
      question: "How does AI determine what's a true maintenance emergency?",
      answer:
        "Prestyj AI is trained on property management best practices. It recognizes urgent keywords (burst pipe, no heat/AC, gas leak, lockout, fire) and escalates immediately. Non-urgent requests (light bulb, cosmetic issues, minor repairs) are logged for normal business hours.",
    },
    {
      question: "Can AI collect rent payments or application fees?",
      answer:
        "AI can direct tenants to your payment portal, send payment reminders, and confirm receipt. For compliance reasons, actual payment processing integrates with your existing property management software.",
    },
    {
      question: "What if a tenant insists on speaking to a human?",
      answer:
        "AI can transfer to you anytime or take a detailed message with callback scheduling. You control escalation rules—some managers want all emergencies transferred, others prefer AI to gather info first.",
    },
    {
      question: "Does AI integrate with property management software?",
      answer:
        "Yes. Prestyj integrates with major platforms like Buildium, AppFolio, Propertyware, and Rent Manager. Maintenance requests, showing appointments, and prospect data sync automatically.",
    },
    {
      question: "How quickly can I get set up?",
      answer:
        "Most property managers are live within 3-5 days. We configure AI to your portfolio, maintenance protocols, and showing availability so you can start reducing after-hours calls immediately.",
    },
  ],
  cta: {
    headline: "Stop Letting After-Hours Calls Control Your Life",
    subheadline:
      "Property management doesn't have to mean 24/7 personal availability. Book a demo to see how AI handles tenant calls while you focus on growing your portfolio.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. See your call volume transformation in minutes.",
  },
};
