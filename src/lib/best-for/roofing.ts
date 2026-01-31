import type { BestForPageContent } from "./types";

export const roofing: BestForPageContent = {
  slug: "roofing",
  niche: {
    name: "Roofing Contractors",
    shortName: "Roofing",
    description: "Roofing contractors and home service businesses looking for AI-powered customer response",
  },
  meta: {
    title: "AI Agents for Roofing Contractors | 24/7 Emergency Response | Prestyj",
    description:
      "AI voice and text agents for roofing companies. Respond to storm damage calls in under 60 seconds, book inspections 24/7, and capture surge demand without missing a lead.",
    keywords: [
      "AI agents for roofing",
      "roofing AI receptionist",
      "AI for roofing contractors",
      "roofing lead response",
      "automated roofing scheduling",
      "storm damage call handling",
    ],
  },
  hero: {
    badge: "Roofing AI",
    headline: "AI Agents Built for",
    headlineAccent: "Roofing Contractors",
    subheadline:
      "Storm hits. Calls surge. Homeowners need answers now. AI responds to every emergency call, books inspections, and qualifies insurance claims—24/7 during storm season.",
  },
  whyBestFor: [
    {
      icon: "CloudRain",
      title: "Handle Storm Surge Demand",
      description:
        "After major weather events, call volume explodes. AI scales instantly to handle 100+ calls simultaneously while competitors miss opportunities.",
    },
    {
      icon: "Phone",
      title: "Never Miss Emergency Calls",
      description:
        "Homeowners call the moment they see damage—often outside business hours. AI answers every call instantly, even at 6 AM after overnight storms.",
    },
    {
      icon: "Calendar",
      title: "Automated Inspection Booking",
      description:
        "AI books roof inspections directly on your schedule. Customers get confirmed times; your estimators get a full pipeline.",
    },
    {
      icon: "FileText",
      title: "Insurance Claim Coordination",
      description:
        "AI captures critical insurance details upfront: policy info, adjuster contact, claim number. Your team arrives prepared for every insurance job.",
    },
  ],
  painPoints: [
    {
      problem: "Storm surge overwhelms phone lines and staff",
      solution:
        "AI handles unlimited concurrent calls. Whether you get 10 calls or 200 calls during storm season, every lead gets answered within 60 seconds.",
    },
    {
      problem: "Crews on roofs can't answer emergency calls",
      solution:
        "AI handles all incoming calls while your crews stay productive. No more climbing down to answer phones or losing leads to voicemail.",
    },
    {
      problem: "After-hours emergency calls go to competitors",
      solution:
        "AI answers 24/7. When homeowners discover leaks at night or on weekends, you're the first to respond—not the roofing company down the street.",
    },
    {
      problem: "Inconsistent lead qualification for insurance vs. cash jobs",
      solution:
        "AI captures the same critical details every time: damage type, urgency, insurance carrier, and homeowner timeline.",
    },
    {
      problem: "Follow-up on estimates falls through during busy season",
      solution:
        "AI automatically follows up on pending estimates via text and voice, keeping your pipeline moving even when your team is slammed.",
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
        feature: "Storm Surge Capacity",
        prestyj: "Unlimited concurrent calls",
        others: "Overwhelmed, busy signals",
      },
      {
        feature: "Coverage Hours",
        prestyj: "24/7/365",
        others: "Business hours or answering service",
      },
      {
        feature: "Emergency Detection",
        prestyj: "Automated triage (active leak vs. shingle damage)",
        others: "Depends on whoever answers",
      },
      {
        feature: "Inspection Booking",
        prestyj: "Instant confirmation",
        others: "Callback required",
      },
      {
        feature: "Insurance Detail Capture",
        prestyj: "Structured data collection",
        others: "Inconsistent or incomplete",
      },
      {
        feature: "Annual Cost",
        prestyj: "Fraction of staff cost",
        others: "$35,000-45,000+ for receptionist",
      },
    ],
  },
  faq: [
    {
      question: "Can AI handle roofing-specific questions?",
      answer:
        "AI is configured to gather the information your estimators need: damage type, roof age, material, insurance details, and urgency. It doesn't diagnose problems—it qualifies the lead and books the inspection.",
    },
    {
      question: "How does AI prioritize active leaks vs. cosmetic damage?",
      answer:
        "AI identifies emergency signals (active leaking, water intrusion, missing shingles after storm) and can trigger immediate notifications to your on-call team while booking priority inspections.",
    },
    {
      question: "Does it integrate with ServiceTitan/Jobber/Housecall Pro?",
      answer:
        "Prestyj integrates with major field service software platforms. Inspection appointments and lead details sync directly to your scheduling and CRM system.",
    },
    {
      question: "What about customers who want to speak to a human?",
      answer:
        "AI seamlessly hands off to your team when needed, providing full call context. For after-hours calls, it can take emergency details or book callbacks for first thing in the morning.",
    },
    {
      question: "How does AI handle insurance vs. cash jobs differently?",
      answer:
        "AI asks insurance-specific questions (carrier, claim number, adjuster) when customers mention insurance, and captures different urgency signals for cash jobs (budget, timeline, financing interest).",
    },
  ],
  cta: {
    headline: "Stop Losing Storm Damage Leads to Voicemail",
    subheadline:
      "Every missed call during storm season is a $15,000 roof job to your competitor. Book a demo to see how AI captures every opportunity.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. Perfect for roofing contractors of all sizes.",
  },
};
