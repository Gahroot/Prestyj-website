import type { BestForPageContent } from "./types";

export const hvac: BestForPageContent = {
  slug: "hvac",
  niche: {
    name: "HVAC Companies",
    shortName: "HVAC",
    description: "HVAC contractors and home service businesses looking for AI-powered customer response",
  },
  meta: {
    title: "AI Agents for HVAC Companies | 24/7 Service Calls | Prestyj",
    description:
      "AI voice and text agents for HVAC companies. Respond to service requests in under 60 seconds, book appointments 24/7, and never miss an emergency call again.",
    keywords: [
      "AI agents for HVAC",
      "HVAC AI receptionist",
      "AI for HVAC companies",
      "HVAC lead response",
      "automated HVAC scheduling",
      "AI answering service HVAC",
    ],
  },
  hero: {
    badge: "HVAC AI",
    headline: "AI Agents Built for",
    headlineAccent: "HVAC Companies",
    subheadline:
      "AC breaks at midnight. Furnace dies on Saturday. AI answers every call, books service appointments, and dispatches your team—24/7/365.",
  },
  whyBestFor: [
    {
      icon: "Phone",
      title: "Never Miss a Service Call",
      description:
        "Homeowners call when their HVAC breaks—not during business hours. AI answers every call instantly, even at 2 AM on a holiday weekend.",
    },
    {
      icon: "Calendar",
      title: "Automated Appointment Booking",
      description:
        "AI books service appointments directly on your schedule. Customers get confirmed times; you get a full calendar.",
    },
    {
      icon: "AlertCircle",
      title: "Emergency Prioritization",
      description:
        "AI identifies emergencies (no heat in winter, no AC in summer) and prioritizes them appropriately. Urgent calls get flagged for immediate attention.",
    },
    {
      icon: "DollarSign",
      title: "Fraction of Receptionist Cost",
      description:
        "A full-time receptionist costs $35,000-45,000/year. AI provides better coverage 24/7 at a fraction of the cost.",
    },
  ],
  painPoints: [
    {
      problem: "Missing after-hours service calls to competitors",
      solution:
        "AI answers 24/7. When homeowners call at 6 AM with no heat, you're the first to respond—not the HVAC company down the street.",
    },
    {
      problem: "Techs in the field can't answer office calls",
      solution:
        "AI handles all incoming calls while your team focuses on installations and repairs. No more juggling phones between jobs.",
    },
    {
      problem: "Seasonal demand spikes overwhelm your staff",
      solution:
        "AI scales instantly. Whether you get 10 calls or 100 calls, response time stays under 60 seconds.",
    },
    {
      problem: "Inconsistent information gathering from callers",
      solution:
        "AI captures the same critical details every time: equipment type, issue description, address, and urgency level.",
    },
    {
      problem: "Can't afford 24/7 receptionist coverage",
      solution:
        "AI provides round-the-clock coverage without the $45,000+ annual cost of hiring overnight staff.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Often missed or voicemail",
      },
      {
        feature: "Coverage Hours",
        prestyj: "24/7/365",
        others: "Business hours or answering service",
      },
      {
        feature: "Emergency Detection",
        prestyj: "Automated prioritization",
        others: "Depends on whoever answers",
      },
      {
        feature: "Appointment Booking",
        prestyj: "Instant confirmation",
        others: "Callback required",
      },
      {
        feature: "Annual Cost",
        prestyj: "Fraction of staff cost",
        others: "$35,000-45,000+ for receptionist",
      },
      {
        feature: "Peak Demand Handling",
        prestyj: "Unlimited capacity",
        others: "Overwhelmed, missed calls",
      },
      {
        feature: "Consistency",
        prestyj: "100% consistent",
        others: "Varies by person/day",
      },
    ],
  },
  faq: [
    {
      question: "Can AI handle HVAC-specific questions?",
      answer:
        "AI is configured to gather the information your techs need: equipment type, symptoms, age of system, and urgency. It doesn't diagnose problems—it qualifies the call and books the appointment.",
    },
    {
      question: "How does AI handle true emergencies?",
      answer:
        "AI identifies emergency signals (no heat below freezing, no AC in extreme heat, gas smells, flooding) and can trigger immediate notifications to your on-call team while booking priority appointments.",
    },
    {
      question: "Does it integrate with ServiceTitan/Housecall Pro?",
      answer:
        "Prestyj integrates with major HVAC and field service software. Appointments sync directly to your scheduling system.",
    },
    {
      question: "What about customers who want to speak to a human?",
      answer:
        "AI seamlessly hands off to your team when needed, providing full call context. For after-hours calls, it can take messages or book callbacks for the morning.",
    },
    {
      question: "How do HVAC customers react to AI?",
      answer:
        "Today's AI sounds natural and conversational. Most customers care about getting their problem solved fast—and AI does that better than voicemail or waiting until morning.",
    },
  ],
  cta: {
    headline: "Stop Losing Emergency Calls to Voicemail",
    subheadline:
      "Every missed call is revenue to your competitor. Book a demo to see how AI keeps you first in line for every service request.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. Perfect for HVAC contractors of all sizes.",
  },
};
