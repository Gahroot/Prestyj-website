import type { SolutionPageContent } from "./types";

export const aiAnsweringServiceHvac: SolutionPageContent = {
  slug: "ai-answering-service-hvac",
  meta: {
    title: "AI Answering Service for HVAC Companies | Capture Every Service Call | Prestyj",
    description:
      "AI answering service built for HVAC companies. Handle emergency calls, seasonal spikes, and after-hours dispatch. Integrates with ServiceTitan. Capture 100% of calls and book more jobs 24/7.",
    keywords: [
      "AI answering service HVAC",
      "HVAC phone answering service",
      "HVAC call handling AI",
      "AI dispatcher for HVAC",
      "HVAC emergency call answering",
      "ServiceTitan AI integration",
      "HVAC after hours answering service",
      "HVAC seasonal call overflow",
    ],
  },
  hero: {
    badge: "AI Answering Service for HVAC",
    headline: "Every Emergency Call.",
    headlineAccent: "Every Season. Captured.",
    subheadline:
      "Summer heat waves bring 3–5x call volume. Winter freezes bring emergency no-heat calls at 2am. Your human staff can't handle the peaks—AI can. Capture every call, dispatch emergencies instantly, and never lose a job to voicemail.",
    stats: [
      { value: "$300–800", label: "average emergency HVAC job value", color: "success" },
      { value: "3–5x", label: "call volume during summer peaks", color: "warning" },
      { value: "100%", label: "calls answered, 24/7/365", color: "primary" },
    ],
  },
  painPoints: {
    headline: "HVAC Call Volume Kills Revenue",
    subheadline: "Seasonal spikes and after-hours emergencies are your biggest revenue opportunities—and biggest blind spots.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Summer heat wave = 100+ calls/day, 2 people answering",
        description:
          "During July and August, HVAC companies get 3–5x normal call volume. With 2 people on phones, 40–60% of calls go to voicemail. Those callers don't leave messages—they call the next company on Google.",
        color: "destructive",
      },
      {
        icon: "AlertCircle",
        title: "No-heat emergencies at 2am go to voicemail",
        description:
          "Frozen pipes. Broken furnaces. Families freezing at 2am. If nobody answers, they call someone who does. Emergency HVAC jobs are $500–$1,500 each—and they're going to your competitors.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "ServiceTitan says you're losing $150K+/year in missed calls",
        description:
          "Average HVAC company misses 30% of incoming calls. At $300–$800 per job and 10–30 missed calls/week, that's $150,000–$600,000 in annual lost revenue. Your phone is your #1 revenue source—and it's leaking.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI That Understands HVAC Workflows",
    subheadline: "Not a generic answering service—an AI trained on HVAC dispatch and service calls.",
    benefits: [
      {
        icon: "Zap",
        title: "Emergency Call Triage & Priority Routing",
        description:
          "AI identifies true emergencies (no heat, no AC, gas smell, frozen pipes) and routes them to on-call techs immediately. Routine maintenance calls get scheduled during normal business hours.",
      },
      {
        icon: "Calendar",
        title: "Direct-to-ServiceTitan Booking",
        description:
          "AI books appointments directly into ServiceTitan with customer info, equipment type, issue description, and priority level. Your dispatchers see new jobs in real-time—no manual data entry.",
      },
      {
        icon: "Bot",
        title: "Unlimited Concurrent Calls During Peak Season",
        description:
          "When call volume spikes 5x during a heat wave, AI answers every call simultaneously. No hold times, no voicemail, no lost leads. Handle 100+ calls at once with consistent quality.",
      },
      {
        icon: "Clock",
        title: "After-Hours Emergency Dispatch",
        description:
          "AI answers after-hours calls, identifies emergencies, and dispatches on-call technicians with full job details. Non-emergency calls get scheduled for the next business day. You never miss an emergency.",
      },
      {
        icon: "BarChart3",
        title: "Seasonal Demand Forecasting",
        description:
          "AI tracks call patterns and alerts you to volume spikes before they overwhelm your team. Plan technician schedules and inventory based on real-time demand signals.",
      },
      {
        icon: "MessageSquare",
        title: "Follow-Up Automation",
        description:
          "After service calls, AI follows up with customers for satisfaction surveys, maintenance plan offers, and review requests. Turn one-time emergency callers into annual maintenance customers.",
      },
    ],
  },
  faqs: [
    {
      question: "How does AI triage HVAC emergency calls?",
      answer:
        "AI asks targeted questions: 'Is this a no-heat or no-AC situation?', 'Do you smell gas?', 'Are pipes frozen?', 'What's the indoor temperature?'. Based on responses, AI categorizes priority: emergency (immediate dispatch), urgent (same-day scheduling), or routine (next available appointment). Emergencies page your on-call tech within 30 seconds.",
    },
    {
      question: "Does it integrate with ServiceTitan?",
      answer:
        "Yes. Prestyj integrates directly with ServiceTitan to create new jobs, log customer information, attach call recordings and transcripts, and sync appointment schedules. Your dispatchers see everything in real-time without switching tools.",
    },
    {
      question: "How does it handle seasonal call volume spikes?",
      answer:
        "AI handles unlimited concurrent calls, so when volume spikes 3–5x during summer heat waves or winter freezes, every call gets answered. No additional staffing, no overtime, no missed calls. Your team focuses on dispatching and service, not answering phones.",
    },
    {
      question: "Can AI answer questions about pricing and services?",
      answer:
        "Yes. AI is trained on your service menu, pricing ranges, maintenance plans, and common HVAC questions. It provides consistent, accurate answers and qualifies leads based on their needs: emergency repair, maintenance plan, new installation, or replacement estimate.",
    },
    {
      question: "What happens when a caller insists on talking to a human?",
      answer:
        "AI transfers the call to your office or on-call technician immediately, providing full conversation context so the caller doesn't repeat themselves. For routine calls, less than 10% request a human transfer.",
    },
    {
      question: "How much does an HVAC AI answering service cost?",
      answer:
        "Most HVAC companies spend $400–$800/month for AI answering service, compared to $3,000–$5,000/month for after-hours staffing alone. At $300–$800 per captured emergency job, the service pays for itself with 1–3 captured calls per month.",
    },
    {
      question: "Can AI handle multi-trade companies (HVAC + plumbing + electrical)?",
      answer:
        "Yes. AI routes calls based on trade type: HVAC calls to HVAC dispatch, plumbing calls to plumbing team, electrical to electricians. For companies with multiple trades, AI triages and routes each call to the correct department automatically.",
    },
    {
      question: "How quickly can we be up and running?",
      answer:
        "Typical setup takes 5–7 business days: configure call flows, train on your services and pricing, connect ServiceTitan integration, and test with sample calls. You'll be live and capturing calls before the next heat wave or cold snap.",
    },
  ],
  objections: {
    headline: "HVAC-Specific Concerns",
    subheadline: "We've built this for contractors. Here's how we handle the tough questions.",
    objections: [
      {
        objection: "My customers want to talk to a real person who knows their system.",
        response:
          "AI accesses your ServiceTitan customer history and references past service: 'I see you had a compressor replaced last June—how's that system running?' Callers get personalized service without waiting on hold. When they need a human, the transfer is instant with full context.",
      },
      {
        objection: "I already have an after-hours answering service.",
        response:
          "Traditional answering services take messages—they can't dispatch technicians, book appointments, or qualify emergency vs. routine calls. Your on-call tech still has to call back, often to voicemail. AI dispatches emergencies in real-time and books routine calls for business hours. No callback chain, no lost leads.",
      },
      {
        objection: "I can't afford another monthly expense.",
        response:
          "One missed emergency HVAC job costs you $500–$1,500 in revenue. If AI captures even 2 calls per month that would have been missed, it pays for itself 2–3x over. It's not an expense—it's a revenue generator that costs less than one emergency job per month.",
      },
      {
        objection: "Seasonal business means I only need this 3–4 months per year.",
        response:
          "Prestyj has no annual contracts. Use the service during peak seasons and pause during slow months. Though most clients keep it year-round because after-hours emergencies happen in every season—and maintenance plan calls keep volume steady.",
      },
      {
        objection: "My technicians don't want AI dispatching them.",
        response:
          "AI doesn't replace your dispatchers—it supports them. Emergency calls still go through your on-call rotation. AI just ensures those emergency calls actually reach a human instead of voicemail. Your dispatchers get better information faster.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Lost Revenue from Missed Calls",
    subheadline: "See how much missed calls are costing your HVAC business.",
    inputs: {
      leads: {
        label: "Calls received per week",
        placeholder: "e.g., 150",
        defaultValue: 150,
      },
      commission: {
        label: "Average job value ($)",
        placeholder: "e.g., 500",
        defaultValue: 500,
      },
    },
    reactivationRate: 0.3,
    conversionRate: 0.6,
    resultLabel: "Annual revenue recovered from missed calls",
  },
  cta: {
    headline: "Stop Losing HVAC Jobs to Voicemail",
    subheadline:
      "Your competitors answer the calls you miss. Let's fix that—capture every emergency, book every job, and keep your technicians busy year-round.",
    buttonText: "Get Started with HVAC AI Answering",
    buttonHref: "/book-demo",
    footnote: "ServiceTitan integration included. Live in 5–7 business days. No annual contract.",
  },
};
