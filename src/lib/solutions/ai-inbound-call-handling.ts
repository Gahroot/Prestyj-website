import type { SolutionPageContent } from "./types";

export const aiInboundCallHandling: SolutionPageContent = {
  slug: "ai-inbound-call-handling",
  meta: {
    title: "AI Inbound Call Handling | Answer Every Call 24/7 | Prestyj",
    description:
      "AI answers every incoming call instantly, qualifies callers, routes to the right team, and books appointments 24/7. Built for HVAC, plumbing, dental, and legal practices with high call volumes.",
    keywords: [
      "AI inbound call handling",
      "AI phone answering service",
      "automated call routing",
      "24/7 AI receptionist",
      "AI call answering for HVAC",
      "AI receptionist for dental practices",
      "automated appointment booking phone",
      "AI virtual receptionist for law firms",
      "high call volume automation",
      "AI call qualification software",
      "inbound call automation",
      "AI answering service for plumbers",
    ],
  },
  hero: {
    badge: "AI Inbound Call Handling",
    headline: "Every Call Answered.",
    headlineAccent: "Every Caller Helped.",
    subheadline:
      "AI answers 100% of your incoming calls in under 3 seconds, qualifies the caller, routes complex cases to your team, and books appointments straight into your calendar. No more missed calls, no more voicemail, no more lost revenue.",
    stats: [
      { value: "<3s", label: "answer time", color: "success" },
      { value: "100%", label: "calls handled", color: "primary" },
      { value: "24/7", label: "availability", color: "warning" },
    ],
  },
  painPoints: {
    headline: "High Call Volumes Are Costing You Customers",
    subheadline: "Every unanswered call is a customer choosing your competitor instead.",
    points: [
      {
        icon: "PhoneMissed",
        title: "27% of calls go unanswered",
        description:
          "When your front desk is on another line or it's after hours, callers don't leave voicemails—they call the next business on Google. Each missed call is $300-$5,000 in lost revenue.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Long hold times drive callers away",
        description:
          "Studies show 60% of callers hang up after 1 minute on hold. During peak hours your team can't keep up, and the customers you've worked hardest to attract walk away frustrated.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "Hiring more receptionists is unsustainable",
        description:
          "A full-time receptionist costs $45K+ per year and still can't cover nights, weekends, or sick days. You'd need 4-5 staff to truly never miss a call—and you'd still pay for downtime.",
        color: "primary",
      },
      {
        icon: "TrendingDown",
        title: "Inconsistent call handling tanks conversions",
        description:
          "Some staff qualify leads well, others rush through. Some upsell, others don't. Without a consistent script, your conversion rate swings 30-50% depending on who picks up the phone.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Handles Every Call Like Your Best Receptionist",
    subheadline: "Faster, more consistent, and available 24/7—at a fraction of the cost.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant Answer, Zero Hold Time",
        description:
          'Every call answered in under 3 seconds, every time. No phone tree mazes, no "please hold," no callbacks. Callers get help the moment they need it.',
      },
      {
        icon: "Bot",
        title: "Natural Human-Like Conversations",
        description:
          "Modern voice AI sounds genuinely conversational—not robotic. Callers get their questions answered naturally, often without realizing they're talking to AI.",
      },
      {
        icon: "Workflow",
        title: "Smart Call Routing",
        description:
          "AI identifies caller intent—new patient, billing question, emergency, sales inquiry—and routes to the right person, department, or workflow with full context already gathered.",
      },
      {
        icon: "Calendar",
        title: "Appointments Booked On The Call",
        description:
          "AI checks your live calendar, offers real openings, and books the appointment directly. No callbacks, no scheduling tag, no double bookings.",
      },
      {
        icon: "RefreshCw",
        title: "Unlimited Concurrent Calls",
        description:
          "Handle 1 call or 500 calls at the same moment with zero degradation. Peak season floods, post-marketing spikes, and emergency events—AI scales instantly.",
      },
      {
        icon: "BarChart3",
        title: "Full Call Analytics & Recordings",
        description:
          "Every call transcribed, summarized, and tagged. See call volumes by hour, top caller intents, conversion rates, and exactly why some calls didn't convert.",
      },
    ],
  },
  calculator: {
    headline: "Lost Revenue Calculator",
    subheadline: "See how much you're losing every month from missed and mishandled calls.",
    inputs: {
      leads: { label: "Inbound calls per month", placeholder: "500", defaultValue: 500 },
      commission: { label: "Average customer value ($)", placeholder: "1500", defaultValue: 1500 },
    },
    reactivationRate: 0.27,
    conversionRate: 0.55,
    resultLabel: "Additional monthly revenue with AI call handling",
  },
  objections: {
    headline: "Common Concerns About AI Call Handling",
    subheadline: "Honest answers for businesses considering AI for inbound calls.",
    objections: [
      {
        objection: "Our customers expect to talk to a human",
        response:
          "What customers actually expect is to get help quickly. The latest voice AI is indistinguishable from a polite, well-trained receptionist for 80%+ of calls. For complex cases, AI gathers context and warm-transfers to a human—giving callers a faster, smoother experience than waiting on hold.",
      },
      {
        objection: "Our calls are too complex for AI",
        response:
          "AI doesn't need to handle every call—it needs to handle the right ones. Appointment booking, hours questions, intake screening, billing inquiries, and routing typically make up 70-80% of inbound volume. AI handles those flawlessly and routes the truly complex calls to your team with a full summary of what the caller needs.",
      },
      {
        objection: "We already have an answering service",
        response:
          "Traditional answering services take messages and forward them. AI takes action: it qualifies the caller, books the appointment in your calendar, sends confirmation texts, and only escalates when needed. You get bookings, not callback slips—and at a lower cost.",
      },
      {
        objection: "What if the AI makes a mistake?",
        response:
          "AI is trained on your business specifics, has guardrails for what it can and can't say, and escalates to a human anytime confidence is low. Every call is recorded and reviewable. In practice, AI is more consistent than human staff because it never has a bad day, forgets a script, or rushes a caller.",
      },
    ],
  },
  cta: {
    headline: "Stop Losing Calls. Stop Losing Customers.",
    subheadline:
      "Hear our AI handle a real inbound call in under 60 seconds. See exactly how it would answer, qualify, and book for your business.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. Live demo with your actual call scenarios.",
  },
};
