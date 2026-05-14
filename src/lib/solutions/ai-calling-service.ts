import type { SolutionPageContent } from "./types";

export const aiCallingService: SolutionPageContent = {
  slug: "ai-calling-service",
  meta: {
    title: "AI Calling Service for Businesses | 24/7 Inbound & Outbound Calls | Prestyj",
    description:
      "AI voice agents that handle inbound and outbound calls 24/7. Qualify leads, book appointments, and follow up automatically. Built for home services, real estate teams, and growing small businesses.",
    keywords: [
      "AI calling service",
      "AI voice agent for business",
      "automated phone answering AI",
      "AI outbound calling software",
      "24/7 AI receptionist",
      "AI lead qualification calls",
      "AI appointment booking calls",
      "AI cold calling service",
      "conversational AI phone agent",
      "AI call handling for small business",
      "AI calling for real estate",
      "AI calling for home services",
    ],
  },
  hero: {
    badge: "AI Calling Service",
    headline: "AI Voice Agents That Answer, Qualify, and",
    headlineAccent: "Book Calls 24/7.",
    subheadline:
      "Stop losing leads to voicemail and missed calls. Prestyj's AI calling service handles inbound and outbound calls with natural conversation—qualifying leads, booking appointments, and following up automatically. Built for home services, real estate teams, and small businesses ready to scale.",
    stats: [
      { value: "24/7", label: "always-on coverage", color: "primary" },
      { value: "<5s", label: "avg. pickup time", color: "success" },
      { value: "10x", label: "more calls handled", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Phone Is Costing You Money",
    subheadline:
      "Every unanswered call, slow callback, and dropped follow-up is revenue walking out the door.",
    points: [
      {
        icon: "PhoneMissed",
        title: "62% of calls go unanswered",
        description:
          "Most small businesses miss the majority of inbound calls during peak hours, after 5pm, and on weekends. Each missed call is a lead actively choosing your competitor instead.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Slow callbacks kill conversion",
        description:
          "Leads contacted within 5 minutes are 21x more likely to convert than those contacted after 30 minutes. Your team can't keep up—but AI never sleeps, never breaks, never forgets.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "Hiring more reps doesn't scale",
        description:
          "A full-time receptionist costs $40k+ and only covers 40 hours a week. Adding outbound callers, training, turnover, and benefits multiplies fast—and they still can't make 500 calls a day.",
        color: "primary",
      },
      {
        icon: "UserX",
        title: "Outbound calling burns out teams",
        description:
          "Manual cold calling, lead follow-up, and appointment confirmations crush morale. Your best people quit doing dial-and-smile work that AI can do tirelessly and at 10x the volume.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Sounds Human and Works Like a Team",
    subheadline:
      "Inbound, outbound, follow-up, and qualification—all handled by AI voice agents that integrate with your stack.",
    benefits: [
      {
        icon: "Phone",
        title: "Inbound Call Answering",
        description:
          "Every inbound call answered in under 5 seconds with natural conversation. AI greets callers, captures intent, qualifies, and routes—no hold music, no missed leads.",
      },
      {
        icon: "Zap",
        title: "Outbound Calling at Scale",
        description:
          "Run 500+ outbound calls a day for lead follow-up, appointment confirmations, reactivation campaigns, and surveys. AI handles the dials so your team only talks to ready buyers.",
      },
      {
        icon: "Bot",
        title: "Smart Lead Qualification",
        description:
          "AI asks the qualifying questions that matter—budget, timeline, decision-maker, urgency—then scores and routes hot leads to your team with full call summaries and transcripts.",
      },
      {
        icon: "Calendar",
        title: "Live Appointment Booking",
        description:
          "AI checks real-time calendar availability and books appointments directly into Google Calendar, Calendly, or your CRM. Confirmations and reminders go out automatically by SMS and email.",
      },
      {
        icon: "Workflow",
        title: "CRM & Tool Integrations",
        description:
          "Plugs into HubSpot, Salesforce, GoHighLevel, ServiceTitan, Follow Up Boss, and more. Every call logged, every lead enriched, every workflow triggered automatically.",
      },
      {
        icon: "BarChart3",
        title: "Full Call Analytics",
        description:
          "Recordings, transcripts, sentiment analysis, and conversion tracking on every call. See exactly which scripts, offers, and lists drive the most booked appointments.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Missed Call Revenue",
    subheadline:
      "See how much revenue AI calling can recover from missed calls and slow follow-up.",
    inputs: {
      leads: { label: "Inbound calls per month", placeholder: "300", defaultValue: 300 },
      commission: { label: "Average customer value ($)", placeholder: "2500", defaultValue: 2500 },
    },
    reactivationRate: 0.55,
    conversionRate: 0.35,
    resultLabel: "Additional monthly revenue with AI calling",
  },
  objections: {
    headline: "Common Questions About AI Calling",
    subheadline: "Honest answers for businesses evaluating AI voice agents.",
    objections: [
      {
        objection: "Won't callers know it's AI and hang up?",
        response:
          "Today's AI voice agents use natural speech, real-time interruption handling, and conversational tone—most callers don't realize they're talking to AI. We're also fully transparent: AI identifies itself when asked. What customers actually care about is getting an immediate, helpful answer, and that's exactly what they get.",
      },
      {
        objection: "Can AI handle complex or unusual calls?",
        response:
          "AI is built to handle the 80% of calls that follow predictable patterns—qualification, booking, FAQs, follow-ups. For complex situations, AI captures the context and warm-transfers or escalates to your team with a full summary. You stay in control of the high-value conversations.",
      },
      {
        objection: "How long does it take to set up?",
        response:
          "Most businesses are live in 7-14 days. We build your AI agent on your scripts, train it on your services and FAQs, integrate with your CRM and calendar, and run real-call testing before launch. You don't write any code—we handle the entire build.",
      },
      {
        objection: "Is this compliant with calling regulations?",
        response:
          "Yes. Prestyj's outbound AI calling supports TCPA-compliant workflows, opt-out handling, calling-window rules, DNC list scrubbing, and call recording disclosures. We help you stay compliant by design, not as an afterthought.",
      },
    ],
  },
  cta: {
    headline: "Ready to Stop Missing Calls and Start Booking Them?",
    subheadline:
      "See your custom AI calling agent live in a 20-minute demo. We'll show you a real call, your custom script, and the ROI for your specific business.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. Hear an AI agent handle real calls in your industry.",
  },
};
