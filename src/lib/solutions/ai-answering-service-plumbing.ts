import type { SolutionPageContent } from "./types";

export const aiAnsweringServicePlumbing: SolutionPageContent = {
  slug: "ai-answering-service-plumbing",
  meta: {
    title: "AI Answering Service for Plumbing Companies | Emergency Dispatch 24/7 | Prestyj",
    description:
      "AI answering service built for plumbing companies. Handle emergency calls, after-hours dispatch, and multi-truck scheduling. Integrates with ServiceTitan and Jobber. Capture every call and book more jobs.",
    keywords: [
      "AI answering service plumbing",
      "plumbing phone answering service",
      "plumbing emergency dispatch AI",
      "AI dispatcher for plumbing",
      "plumbing after hours answering service",
      "ServiceTitan plumbing AI",
      "Jobber AI integration",
      "plumbing call overflow",
    ],
  },
  hero: {
    badge: "AI Answering Service for Plumbing",
    headline: "Emergency Calls at 3am.",
    headlineAccent: "Answered Instantly.",
    subheadline:
      "Burst pipes, sewer backups, and water heater failures don't wait for business hours. Your customers need help now—and if you don't answer, the company that does gets the job. AI dispatches emergencies 24/7 while your competitors sleep.",
    stats: [
      { value: "$400–1,500", label: "average emergency plumbing job value", color: "success" },
      { value: "85%", label: "of emergency callers hire the first responder", color: "warning" },
      { value: "30 sec", label: "to dispatch emergency to on-call tech", color: "primary" },
    ],
  },
  painPoints: {
    headline: "Every Missed Emergency Is Revenue Gone Forever",
    subheadline: "Plumbing emergencies are high-value, high-urgency—and highly competitive.",
    points: [
      {
        icon: "PhoneMissed",
        title: "85% of emergency callers hire the first company that answers",
        description:
          "A burst pipe at midnight. The homeowner calls three plumbers. Whoever answers first gets the $800–$1,500 job. If you're not first, you're not even in the running. Speed wins in emergencies.",
        color: "destructive",
      },
      {
        icon: "AlertCircle",
        title: "After-hours = highest value calls, lowest coverage",
        description:
          "Emergency plumbing calls after 5pm and on weekends are your most profitable jobs—$400–$1,500 average vs. $150–$300 for routine work. But that's when you have zero staff answering phones.",
        color: "warning",
      },
      {
        icon: "Users",
        title: "Multi-truck operations can't coordinate with voicemail",
        description:
          "Running 3–10 trucks means complex scheduling. A customer with a sewer backup needs the camera truck, not the water heater guy. Voicemail can't triage—it just takes a name and number that gets returned hours later.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "Built for Plumbing Operations",
    subheadline: "AI that understands plumbing workflows, not just generic call answering.",
    benefits: [
      {
        icon: "Zap",
        title: "Emergency Triage & Instant Dispatch",
        description:
          "AI asks: 'Is there active water damage?', 'Is the main shutoff working?', 'Sewer backup or drain clog?'. Emergencies dispatch to your on-call tech in 30 seconds with full job details and customer address.",
      },
      {
        icon: "Calendar",
        title: "Smart Scheduling by Truck & Technician",
        description:
          "AI knows which trucks have which equipment (camera, jetter, snake) and which techs handle which jobs. It schedules the right truck to the right job—no dispatcher needed for routine bookings.",
      },
      {
        icon: "Bot",
        title: "ServiceTitan & Jobber Integration",
        description:
          "Jobs book directly into ServiceTitan or Jobber with customer info, issue type, priority level, and equipment needs. Your dispatchers and techs see new jobs in real-time without manual entry.",
      },
      {
        icon: "Clock",
        title: "24/7 Emergency Coverage",
        description:
          "After-hours, weekends, holidays—AI answers every call, triages emergencies, and dispatches on-call techs. Routine calls get scheduled for business hours. You never miss a burst pipe or sewer backup again.",
      },
      {
        icon: "Target",
        title: "Lead Qualification & Upselling",
        description:
          "AI qualifies every caller: emergency vs. routine, residential vs. commercial, insurance claim or not. For non-emergencies, it offers maintenance plans, water heater inspections, and drain cleaning packages.",
      },
      {
        icon: "BarChart3",
        title: "Revenue Tracking Per Call Source",
        description:
          "See exactly which calls are emergencies vs. routine, which jobs booked, average job value per call source, and revenue per technician. Track ROI down to the individual call.",
      },
    ],
  },
  faqs: [
    {
      question: "How does AI triage plumbing emergency calls?",
      answer:
        "AI asks targeted questions: 'Is there active flooding?', 'Can you shut off the water?', 'Is it a sewer backup or drain clog?', 'What type of water heater do you have—gas or electric?'. Based on answers, AI categorizes: emergency (immediate dispatch), urgent (same-day), or routine (scheduled). Gas leaks and active flooding trigger immediate dispatch with safety instructions to the caller.",
    },
    {
      question: "Does it work with ServiceTitan and Jobber?",
      answer:
        "Yes. Prestyj integrates with both ServiceTitan and Jobber to create new jobs, log customer details, attach call recordings and transcripts, and sync schedules. New bookings appear in your dispatch board in real-time.",
    },
    {
      question: "How does after-hours dispatch work?",
      answer:
        "After-hours calls are answered by AI immediately. If it's an emergency (burst pipe, sewer backup, gas leak), AI pages your on-call technician with job details, customer address, and callback number. Non-emergency calls get scheduled for the next business day. Your tech gets a text with all details—no middleman.",
    },
    {
      question: "Can AI schedule the right truck for the job?",
      answer:
        "Yes. AI matches the job type to the right equipment: camera truck for sewer inspections, jetter truck for main line blockages, standard truck for most repairs. You configure the mapping once, and AI handles the routing automatically.",
    },
    {
      question: "What about commercial plumbing clients?",
      answer:
        "AI handles commercial accounts differently: recognizes commercial callers by phone number or company name, offers priority scheduling, handles multi-location service requests, and routes to your commercial team. Commercial clients get white-glove treatment without your office staff lifting a finger.",
    },
    {
      question: "How much does a plumbing AI answering service cost?",
      answer:
        "Most plumbing companies spend $400–$700/month for AI answering service with 24/7 coverage. At $400–$1,500 per emergency job, capturing just 1–2 missed emergency calls per month pays for the entire service. Compare that to $2,500–$4,000/month for an after-hours answering service that can only take messages.",
    },
    {
      question: "Can AI handle multi-trade companies (plumbing + HVAC + electrical)?",
      answer:
        "Yes. AI routes calls based on trade: plumbing calls to plumbing dispatch, HVAC to HVAC team, electrical to electricians. Multi-trade companies get one AI system that intelligently routes each call to the correct department.",
    },
    {
      question: "How quickly can we be up and running?",
      answer:
        "Typical setup takes 5–7 business days: configure emergency triage logic, train on your services and pricing, connect ServiceTitan/Jobber integration, and test with sample calls. Most plumbing companies are live within a week.",
    },
  ],
  objections: {
    headline: "Plumbing-Specific Concerns",
    subheadline: "We've built this for the trades. Here's how we address the real worries.",
    objections: [
      {
        objection: "Emergency plumbing calls need a human—AI can't assess the situation.",
        response:
          "AI doesn't replace your technicians—it replaces voicemail. Instead of a customer leaving a panicked message that gets returned 2 hours later, AI gathers the critical info in 60 seconds (flooding? gas? shutoff valve?), provides safety instructions, and dispatches your on-call tech with full details. Your tech still does the human assessment on-site. The AI just ensures they get the call.",
      },
      {
        objection: "I already pay an answering service for after-hours calls.",
        response:
          "Traditional answering services take messages—they can't dispatch techs, schedule appointments, or triage emergencies. Your tech still has to call back the customer (who may have already hired someone). AI dispatches emergencies in 30 seconds and books routine calls for business hours. No callback chain, no lost jobs.",
      },
      {
        objection: "My regular customers know my office staff and want to talk to them.",
        response:
          "AI recognizes returning customers by phone number and can transfer VIP clients directly to your office. During business hours, AI handles overflow when your staff is busy. After hours, AI provides professional coverage that protects those customer relationships instead of sending them to voicemail.",
      },
      {
        objection: "I'll just have my techs answer their own after-hours calls.",
        response:
          "Your technicians already work 10–12 hour days. Waking them at 3am for a routine drain clog that could wait until morning burns them out. AI triages the call: emergencies go to on-call tech, routine calls get scheduled for business hours. Your techs sleep through non-emergencies and only wake up for real problems.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Lost Emergency Revenue",
    subheadline: "See how much after-hours and overflow calls are costing you.",
    inputs: {
      leads: {
        label: "Emergency calls per month",
        placeholder: "e.g., 40",
        defaultValue: 40,
      },
      commission: {
        label: "Average emergency job value ($)",
        placeholder: "e.g., 800",
        defaultValue: 800,
      },
    },
    reactivationRate: 0.3,
    conversionRate: 0.85,
    resultLabel: "Annual revenue from captured emergency calls",
  },
  cta: {
    headline: "Stop Losing Emergency Plumbing Jobs to Voicemail",
    subheadline:
      "Every unanswered emergency call goes to your competitor. Capture 100% of calls, dispatch emergencies instantly, and keep your trucks busy 24/7.",
    buttonText: "Start Capturing Plumbing Calls",
    buttonHref: "/book-demo",
    footnote: "ServiceTitan & Jobber integration included. Live in 5–7 business days.",
  },
};
