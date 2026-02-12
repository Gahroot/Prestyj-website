import type { SolutionPageContent } from "./types";

export const roofing: SolutionPageContent = {
  slug: "roofing",
  meta: {
    title: "AI Lead Response for Roofing Contractors | 24/7 Storm Response | Prestyj",
    description:
      "Never miss another storm lead. AI answers every call in under 60 seconds, qualifies storm damage, and books inspections 24/7. Scale infinitely during hail and wind events.",
    keywords: [
      "AI for roofing contractors",
      "roofing lead response",
      "storm damage call handling",
      "roofing appointment scheduling",
      "AI answering service for roofers",
      "hail damage lead response",
      "24/7 roofing response",
    ],
  },
  hero: {
    badge: "Roofing AI Solution",
    headline: "Every Storm Call",
    headlineAccent: "Answered. Every Job Booked.",
    subheadline:
      "Hail hits at 2 AM. Phones ring off the hook by 6 AM. Your crews are on roofs. AI answers every call, qualifies leads, and books inspections automatically—24/7.",
    stats: [
      { value: "60s", label: "avg. response time", color: "success" },
      { value: "100%", label: "call answer rate", color: "primary" },
      { value: "3-5x", label: "more jobs captured", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Storm Season Is Your Revenue Season",
    subheadline: "But only contractors who answer first capture the jobs.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Crews can't answer phones",
        description:
          "You're 30 feet up, working with both hands. Every missed call is a $15,000-25,000 job handed to competitors.",
        color: "destructive",
      },
      {
        icon: "TrendingDown",
        title: "Storm surge overwhelms staff",
        description:
          "500 calls in one morning. Your 2 office staff can't keep up. Busy signals, voicemail, frustration.",
        color: "warning",
      },
      {
        icon: "Clock",
        title: "After-hours calls go unanswered",
        description:
          "40% of storm calls come evenings and weekends. Closed until Monday means competitors get those jobs.",
        color: "primary",
      },
      {
        icon: "DollarSign",
        title: "Every missed call costs thousands",
        description:
          "Storm damage jobs average $15,000+. Missing just 5 calls per storm day costs $75,000 in lost revenue.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI-Powered 24/7 Response",
    subheadline: "Capture every storm lead without hiring more staff.",
    benefits: [
      {
        icon: "Zap",
        title: "Sub-60 Second Response",
        description:
          "Every call answered instantly. No voicemail, no busy signals, no waiting. Homeowners call until someone answers—make that someone you.",
      },
      {
        icon: "Bot",
        title: "Intelligent Storm Qualification",
        description:
          "AI asks the right questions: damage type, urgency, insurance status, service area. Identifies emergencies for immediate dispatch.",
      },
      {
        icon: "Calendar",
        title: "Automated Inspection Booking",
        description:
          "Qualified leads book directly into your calendar. Crews wake up to scheduled appointments instead of a callback marathon.",
      },
      {
        icon: "RefreshCw",
        title: "Unlimited Storm Surge Capacity",
        description:
          "50 calls? 500 calls? 1,000 calls? AI handles all of them simultaneously. No hiring, no training, no overwhelm.",
      },
      {
        icon: "Mail",
        title: "Multi-Channel Follow-Up",
        description:
          "Phone answered, SMS confirmation sent, email details delivered. Coordinated communication that feels personal and professional.",
      },
      {
        icon: "Shield",
        title: "Emergency Triage Built-In",
        description:
          "Active leaks, structural damage, exposed roof deck—AI flags emergencies immediately and routes for urgent dispatch.",
      },
    ],
  },
  calculator: {
    headline: "Storm Revenue Calculator",
    subheadline: "See what you're leaving on the table with slow response.",
    inputs: {
      leads: {
        label: "Storm leads per month",
        placeholder: "100",
        defaultValue: 100,
      },
      commission: {
        label: "Average job value ($)",
        placeholder: "15000",
        defaultValue: 15000,
      },
    },
    reactivationRate: 0.7, // 70% capture rate with AI vs. typical 30-40% without
    conversionRate: 0.65, // 65% convert from qualified leads
    resultLabel: "Additional monthly revenue with AI",
  },
  objections: {
    headline: "Common Concerns About AI Response",
    subheadline: "Real answers for roofing contractors considering AI.",
    objections: [
      {
        objection: "Homeowners will know they're talking to AI and hang up",
        response:
          "Modern AI uses natural language that sounds genuinely human. Many contractors find disclosure works best ('This is an AI assistant for Apex Roofing'), but the key is instant, helpful response—which homeowners care about more than who they're talking to.",
      },
      {
        objection: "AI can't handle complex roofing questions",
        response:
          "AI isn't designed to handle everything—it's designed to qualify leads and book appointments. For technical questions about roof systems, materials, or engineering, AI seamlessly hands off to your team with full conversation context.",
      },
      {
        objection: "We already have an answering service",
        response:
          "Answering services take messages and deliver them hours later. AI answers instantly, conducts conversations, qualifies leads, and books appointments on the spot. During storms when minutes matter, the difference is massive.",
      },
      {
        objection: "Storms are unpredictable—we can't plan for them",
        response:
          "Exactly. That's why you need 24/7 response that scales automatically. Instead of scrambling to hire and train during storm season, AI is ready day one—handling 10 calls or 1,000 calls equally well.",
      },
    ],
  },
  cta: {
    headline: "Ready for Your Best Storm Season Ever?",
    subheadline:
      "Every storm lead you capture is $15,000-25,000 in revenue. Stop missing calls and start booking inspections automatically.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See how AI responds to storm leads in under 60 seconds.",
  },
};
