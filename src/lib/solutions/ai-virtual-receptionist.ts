import type { SolutionPageContent } from "./types";

export const aiVirtualReceptionist: SolutionPageContent = {
  slug: "ai-virtual-receptionist",
  meta: {
    title: "AI Virtual Receptionist | 24/7 Front Desk Coverage | Prestyj",
    description:
      "Replace your front desk with an AI virtual receptionist that greets callers, answers questions, routes calls intelligently, and books appointments 24/7. Built for medical offices, law firms, real estate brokerages, and professional services.",
    keywords: [
      "AI virtual receptionist",
      "24/7 virtual receptionist service",
      "AI receptionist for medical offices",
      "law firm virtual receptionist",
      "real estate AI answering service",
      "automated call routing AI",
      "AI front desk software",
      "virtual receptionist for professional services",
      "after-hours receptionist AI",
      "AI appointment booking receptionist",
      "intelligent call routing system",
      "AI phone answering service",
    ],
  },
  hero: {
    badge: "AI Virtual Receptionist",
    headline: "A Front Desk That Never",
    headlineAccent: "Sleeps, Misses, or Quits.",
    subheadline:
      "Greet every caller, route every call, and book every appointment—24/7. AI handles your phones with the warmth of a great receptionist and the consistency of software. Built for medical offices, law firms, real estate brokerages, and professional services.",
    stats: [
      { value: "24/7", label: "always available", color: "primary" },
      { value: "100%", label: "of calls answered", color: "success" },
      { value: "<5s", label: "pickup time", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Front Desk Is a Bottleneck",
    subheadline:
      "Receptionists are expensive, hard to retain, and impossible to scale—and every dropped call costs you a client.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Calls go to voicemail at lunch and after 5pm",
        description:
          "Patients, clients, and prospects call when it's convenient for them—not when your receptionist is at her desk. After-hours and lunch-hour callers don't leave messages, they call your competitor.",
        color: "destructive",
      },
      {
        icon: "Users",
        title: "Front desk turnover is brutal",
        description:
          "Hiring, training, and replacing receptionists costs $4,000-7,000 per turnover. The average tenure is under 18 months, leaving you constantly retraining—or worse, leaving the desk uncovered.",
        color: "warning",
      },
      {
        icon: "Clock",
        title: "Hold times kill client experience",
        description:
          "When one receptionist is on a call, everyone else hears hold music—or hangs up. 60% of callers won't wait more than 60 seconds, and they form their first impression of your business in those 60 seconds.",
        color: "primary",
      },
      {
        icon: "AlertCircle",
        title: "Misrouted calls frustrate everyone",
        description:
          '"Let me transfer you..." then a cold transfer to the wrong person, or worse—a dead end. Inconsistent routing wastes attorney, doctor, and agent time on calls that should never have reached them.',
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "An AI Receptionist That Actually Sounds Like One",
    subheadline:
      "Natural conversations, intelligent routing, and seamless booking—all without a salary, benefits, or sick days.",
    benefits: [
      {
        icon: "Phone",
        title: "Warm, Professional Greetings",
        description:
          'Every caller is greeted by name when possible, with a natural voice trained on your brand tone. No robotic phone trees, no "press 1 for..."—just a real conversation that gets them to the right outcome.',
      },
      {
        icon: "Workflow",
        title: "Intelligent Call Routing",
        description:
          "AI understands intent—billing question, new patient intake, urgent legal matter, listing inquiry—and routes to the correct person, department, or voicemail with full context already captured.",
      },
      {
        icon: "Calendar",
        title: "Live Appointment Booking",
        description:
          "Books directly into your calendar based on provider availability, appointment type, and patient/client preferences. Handles new patient intake, consultations, and follow-ups without lifting a finger on your end.",
      },
      {
        icon: "MessageSquare",
        title: "Answers FAQs Instantly",
        description:
          "Office hours, location, parking, insurance accepted, intake forms, fee structures—AI answers the 80% of repetitive questions that drown your front desk, freeing them for high-value work.",
      },
      {
        icon: "RefreshCw",
        title: "Unlimited Concurrent Calls",
        description:
          'Whether 5 callers ring in at once or 50, every single one is answered immediately. No hold queues, no busy signals, no "please call back later." Scale your phones without scaling your headcount.',
      },
      {
        icon: "Shield",
        title: "HIPAA & Compliance Ready",
        description:
          "Built with healthcare and legal compliance in mind: encrypted call data, BAAs available, secure intake handling, and configurable retention policies for medical, legal, and financial verticals.",
      },
    ],
  },
  calculator: {
    headline: "Front Desk ROI Calculator",
    subheadline: "See how much a 24/7 AI receptionist saves compared to staffing your front desk.",
    inputs: {
      leads: { label: "Inbound calls per month", placeholder: "800", defaultValue: 800 },
      commission: {
        label: "Average client/patient value ($)",
        placeholder: "1200",
        defaultValue: 1200,
      },
    },
    reactivationRate: 0.35,
    conversionRate: 0.55,
    resultLabel: "Additional monthly revenue from captured calls",
  },
  objections: {
    headline: "Common Concerns About AI Receptionists",
    subheadline: "Real answers for practices and firms considering AI for the front desk.",
    objections: [
      {
        objection: "Our patients/clients expect to talk to a real person",
        response:
          "They expect to be helped quickly and professionally—and that's exactly what AI delivers. Modern conversational AI sounds genuinely human, handles complex requests, and escalates to a real person when needed. In blind tests, most callers can't tell the difference, and they overwhelmingly prefer a 5-second answer over a 5-minute hold.",
      },
      {
        objection: "We have privacy and HIPAA requirements",
        response:
          "Prestyj's AI receptionist is built for regulated industries. We sign BAAs for healthcare clients, encrypt all call data in transit and at rest, support configurable retention policies, and never train on your private conversations. Compliance is baked in, not bolted on.",
      },
      {
        objection: "What if it can't handle a complicated call?",
        response:
          "AI handles the 80% of routine calls perfectly—greetings, FAQs, scheduling, routing, intake. For the 20% that need human judgment, it warm-transfers to the right person with the full context already captured, so your team picks up exactly where the AI left off. Nothing slips through.",
      },
      {
        objection: "We already have a receptionist—why replace her?",
        response:
          "You don't have to. Most clients use AI to extend their front desk: it covers lunch, after-hours, weekends, and call overflow during peak times. Your receptionist focuses on in-office visitors and high-touch work, while AI ensures no call ever goes unanswered. It's a force multiplier, not a replacement.",
      },
    ],
  },
  cta: {
    headline: "Ready to Upgrade Your Front Desk?",
    subheadline:
      "Stop losing callers to voicemail, hold music, and turnover. Give every caller a warm, professional experience—24 hours a day, 7 days a week.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "Hear a live AI receptionist in action. No commitment required.",
  },
};
