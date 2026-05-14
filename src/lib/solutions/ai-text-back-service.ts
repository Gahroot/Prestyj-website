import type { SolutionPageContent } from "./types";

export const aiTextBackService: SolutionPageContent = {
  slug: "ai-text-back-service",
  meta: {
    title: "AI Text Back Service | Instant SMS Replies to Every Caller | Prestyj",
    description:
      "Never let a missed call cost you a customer again. AI instantly texts back every missed call and inquiry with personalized messages that engage leads until you can respond. Built for contractors, real estate agents, and service businesses.",
    keywords: [
      "AI text back service",
      "missed call text back automation",
      "automated SMS reply service",
      "instant text response for missed calls",
      "AI SMS auto-responder",
      "missed call automation for contractors",
      "text back service for real estate agents",
      "automated text reply for service businesses",
      "AI texting service for small business",
      "SMS lead engagement automation",
      "personalized auto-text replies",
      "missed call recovery system",
    ],
  },
  hero: {
    badge: "AI Text Back Service",
    headline: "Every Missed Call Gets",
    headlineAccent: "An Instant Text Back.",
    subheadline:
      "When you can't pick up, AI does. Within seconds of a missed call or inquiry, callers receive a personalized SMS that keeps them engaged until you're free—so leads never go cold and competitors never get the chance.",
    stats: [
      { value: "10s", label: "avg. text-back time", color: "success" },
      { value: "98%", label: "SMS open rate", color: "primary" },
      { value: "3x", label: "more leads recovered", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Missed Calls Are Lost Customers",
    subheadline: "If you don't respond fast, the next business on the list will.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Missed calls become missed revenue",
        description:
          "62% of calls to small businesses go unanswered. Every one is a customer with money in hand—and no patience to wait. They call the next name on Google before your voicemail finishes.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Callbacks come too late",
        description:
          "By the time you wrap up a job site visit or showing, hours have passed. The lead has already booked someone else. Speed-to-lead beats every other factor in conversion.",
        color: "warning",
      },
      {
        icon: "MessageSquare",
        title: "Generic auto-replies feel cold",
        description:
          '"Sorry we missed you" texts don\'t engage anyone. Without personalization or next steps, callers ignore them and move on. A bad auto-text is worse than no text at all.',
        color: "primary",
      },
      {
        icon: "TrendingDown",
        title: "Lead engagement drops off a cliff",
        description:
          "Lead interest decays by the minute. After 5 minutes the odds of qualifying a lead drop 80%. Without an instant response, your marketing dollars walk out the door.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "Smart SMS Replies That Actually Convert",
    subheadline:
      "Personalized, context-aware text-backs that keep every lead warm until you can take over.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant Response in Seconds",
        description:
          "The moment a call is missed or a text inquiry comes in, AI fires off a personalized reply—usually within 10 seconds. Leads feel heard before they have time to call your competitor.",
      },
      {
        icon: "Sparkles",
        title: "Personalized, Not Robotic",
        description:
          "Messages reference the caller's name, the source of their inquiry, and the service they're asking about. AI adapts tone for contractors, agents, or service pros so it always sounds like you.",
      },
      {
        icon: "Bot",
        title: "Two-Way Conversations",
        description:
          "AI doesn't just send one text and disappear. It answers questions, gathers job details, qualifies the lead, and keeps them engaged through a natural back-and-forth conversation.",
      },
      {
        icon: "Calendar",
        title: "Books Appointments On The Spot",
        description:
          "When a lead is ready, AI checks your calendar and books the consultation, showing, or service call directly—no human needed. You wake up to a calendar full of qualified appointments.",
      },
      {
        icon: "Workflow",
        title: "Works With Your Existing Number",
        description:
          "No new phone number, no port-out hassle. AI text-back layers onto your current business line so customers keep texting the number they already know.",
      },
      {
        icon: "BarChart3",
        title: "Full Visibility & Handoff",
        description:
          "Every conversation is logged, tagged, and handed off to you in your CRM the moment a lead needs human attention. No leads slip through the cracks.",
      },
    ],
  },
  calculator: {
    headline: "Lost Lead Recovery Calculator",
    subheadline: "See how much revenue you're leaving on the table from unanswered calls.",
    inputs: {
      leads: { label: "Missed calls / inquiries per month", placeholder: "150", defaultValue: 150 },
      commission: { label: "Average customer value ($)", placeholder: "2500", defaultValue: 2500 },
    },
    reactivationRate: 0.55,
    conversionRate: 0.35,
    resultLabel: "Additional monthly revenue from recovered leads",
  },
  objections: {
    headline: "Common Concerns About AI Text Back",
    subheadline: "Real answers for business owners considering automated SMS replies.",
    objections: [
      {
        objection: "Customers will know it's a bot and ignore it",
        response:
          "Modern AI writes like a thoughtful assistant, not a chatbot. Messages are personalized with the caller's name, the reason they reached out, and a clear next step. In testing, customers respond at the same rate they would to a human—because what they care about is getting answers fast.",
      },
      {
        objection: "I don't want AI saying the wrong thing to my customers",
        response:
          "You control the voice, tone, and guardrails. AI is trained on your services, pricing ranges, scheduling rules, and FAQs. For anything outside its scope, it captures the question and hands off to you with full context—no risky improvisation.",
      },
      {
        objection: "I already have a missed-call text-back tool",
        response:
          "Most tools send one canned message and stop. Prestyj's AI holds a real conversation: it qualifies the lead, answers questions, books appointments, and keeps the lead warm for hours or days if needed. It's the difference between a digital answering machine and a digital receptionist.",
      },
      {
        objection: "What if a lead needs to talk to a human?",
        response:
          "AI is designed to know its limits. The moment a lead asks something complex, requests a callback, or expresses urgency, AI alerts you instantly with a full transcript so you can step in seamlessly. You stay in control without having to monitor every message.",
      },
    ],
  },
  cta: {
    headline: "Stop Losing Leads to Voicemail.",
    subheadline:
      "Every missed call is a customer your competitor is texting back right now. Turn on AI text-back and recover the revenue you're already paying to generate.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "See AI text back live in under 10 minutes. No commitment required.",
  },
};
