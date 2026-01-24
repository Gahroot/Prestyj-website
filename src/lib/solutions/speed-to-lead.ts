import type { SolutionPageContent } from "./types";

export const speedToLead: SolutionPageContent = {
  slug: "speed-to-lead",
  meta: {
    title: "Speed to Lead AI for Real Estate | Respond in Under 60 Seconds",
    description:
      "Never lose another lead to slow response times. Our AI responds to every inquiry in under 60 seconds, 24/7. Increase your conversion rate by 3x.",
    keywords: ["speed to lead", "real estate AI", "lead response time", "instant lead response"],
  },
  hero: {
    badge: "Speed to Lead Solution",
    headline: "First to Respond.",
    headlineAccent: "First to Close.",
    subheadline:
      "78% of buyers choose the first agent who responds. Your AI agent answers every lead in under 60 seconds—while your competition is still checking their phone.",
    stats: [
      { value: "47s", label: "avg. response time", color: "success" },
      { value: "78%", label: "choose first responder", color: "primary" },
      { value: "3x", label: "more conversions", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Every Minute Costs You Money",
    subheadline: "The data is clear: slow response times are killing your business.",
    points: [
      {
        icon: "Clock",
        title: "5 minutes is too late",
        description:
          "After just 5 minutes, lead qualification drops by 80%. Most agents take over an hour to respond.",
        color: "warning",
      },
      {
        icon: "PhoneMissed",
        title: "Missed calls = missed deals",
        description:
          "You're at showings, in meetings, or asleep. Meanwhile, leads are calling your competitors.",
        color: "destructive",
      },
      {
        icon: "TrendingDown",
        title: "Your ROI is tanking",
        description:
          "You spend thousands on lead gen, then let leads go cold. It's like burning money.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "Win Every Race to the Lead",
    subheadline: "Your AI agent ensures you're always first—without lifting a finger.",
    benefits: [
      {
        icon: "Zap",
        title: "Sub-60 Second Response",
        description: "Every lead gets an instant, personalized response. Day or night.",
      },
      {
        icon: "Bot",
        title: "Intelligent Qualification",
        description: "AI asks the right questions and identifies serious buyers automatically.",
      },
      {
        icon: "Calendar",
        title: "Auto-Book Appointments",
        description: "Qualified leads get booked directly into your calendar.",
      },
      {
        icon: "MessageSquare",
        title: "Multi-Channel Coverage",
        description: "Phone, text, email, web chat—all covered by your AI agent.",
      },
      {
        icon: "BarChart3",
        title: "Lead Scoring",
        description: "Know which leads to prioritize based on AI-powered insights.",
      },
      {
        icon: "Shield",
        title: "Never Miss a Lead",
        description: "24/7 coverage means you capture every opportunity.",
      },
    ],
  },
  cta: {
    headline: "Stop Losing the Speed Game",
    subheadline:
      "Your next client is filling out a form right now. Will you be first to respond?",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "See your AI agent in action. No commitment required.",
  },
};
