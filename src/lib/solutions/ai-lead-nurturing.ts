import type { SolutionPageContent } from "./types";

export const aiLeadNurturing: SolutionPageContent = {
  slug: "ai-lead-nurturing",
  meta: {
    title: "AI Lead Nurturing | Automated Long-Term Lead Engagement | Prestyj",
    description: "Stop losing long-cycle leads to follow-up fatigue. AI nurtures every lead with personalized, multi-channel communication for weeks or months until they're ready to buy. Built for real estate, home services, and high-ticket sales.",
    keywords: [
      "AI lead nurturing software",
      "automated lead follow-up",
      "long sales cycle automation",
      "real estate lead nurturing",
      "AI drip campaigns",
      "personalized lead engagement",
      "automated SMS follow-up",
      "lead reactivation AI",
      "multi-channel lead nurture",
      "AI for high-ticket sales",
      "home services lead nurturing",
      "long-term lead engagement automation",
    ],
  },
  hero: {
    badge: "AI Lead Nurturing Solution",
    headline: "Nurture Every Lead.",
    headlineAccent: "Close When They're Ready.",
    subheadline: "Most leads aren't ready to buy today—but they will be in 3, 6, or 12 months. AI keeps every lead warm with personalized, multi-channel follow-up over weeks and months, so you close the ones your competitors forgot about.",
    stats: [
      { value: "80%", label: "of sales need 5+ touches", color: "warning" },
      { value: "12mo", label: "avg. nurture window", color: "primary" },
      { value: "3-4x", label: "more closed deals", color: "success" },
    ],
  },
  painPoints: {
    headline: "Long Sales Cycles Kill Conversion",
    subheadline: "Most leads go cold not because they aren't interested—but because nobody followed up long enough.",
    points: [
      {
        icon: "History",
        title: "Leads go cold after 2-3 follow-ups",
        description: "Your team gives up after a few unanswered calls. But research shows 80% of sales require 5+ touches. The leads you abandon are the ones your competitor closes 6 months later.",
        color: "destructive",
      },
      {
        icon: "UserX",
        title: "Manual follow-up doesn't scale",
        description: "Tracking 500+ leads across 12-month nurture cycles is impossible for any human team. Reminders get missed, notes get lost, and leads fall through the cracks every single week.",
        color: "warning",
      },
      {
        icon: "Database",
        title: "Your CRM is a graveyard of dead leads",
        description: "Thousands of past inquiries sit untouched in your pipeline. Each one cost you $50-500 in marketing spend, and they're rotting because nobody has time to re-engage them.",
        color: "primary",
      },
      {
        icon: "MessageSquare",
        title: "Generic drip emails get ignored",
        description: "Templated email blasts feel like spam. Modern buyers expect personalized, relevant communication—not the same newsletter their inbox already deletes automatically.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Nurtures Like Your Best Salesperson",
    subheadline: "Personalized, persistent, multi-channel follow-up that runs for months without dropping the ball.",
    benefits: [
      {
        icon: "Workflow",
        title: "Long-Cycle Nurture Sequences",
        description: "AI runs intelligent follow-up campaigns over weeks, months, or even years. Every lead gets consistent touches at the right cadence—until they're ready to buy or explicitly opt out.",
      },
      {
        icon: "Sparkles",
        title: "Hyper-Personalized Messaging",
        description: "AI tailors every message based on the lead's source, interests, behavior, and prior conversations. No generic templates—each touch feels like it was written just for them.",
      },
      {
        icon: "Layers",
        title: "Multi-Channel Coordination",
        description: "Email, SMS, voice, and retargeting work together as one orchestrated nurture flow. AI picks the right channel at the right time based on how each lead engages.",
      },
      {
        icon: "RefreshCw",
        title: "Database Reactivation",
        description: "Wake up thousands of cold leads in your CRM. AI re-engages old inquiries with relevant offers and conversational outreach, recovering revenue from leads you wrote off.",
      },
      {
        icon: "Target",
        title: "Buying-Signal Detection",
        description: "AI monitors every reply, click, and conversation for intent signals. The moment a lead shows readiness, your sales team gets a hot handoff with full context—no opportunity missed.",
      },
      {
        icon: "BarChart3",
        title: "Continuous Optimization",
        description: "Every campaign learns from response data: which messages convert, which timing works, which channels each segment prefers. Performance compounds month over month.",
      },
    ],
  },
  calculator: {
    headline: "Lead Nurture Revenue Calculator",
    subheadline: "See how much revenue is sitting in your unworked pipeline right now.",
    inputs: {
      leads: { label: "Unworked leads in your database", placeholder: "2000", defaultValue: 2000 },
      commission: { label: "Average deal value ($)", placeholder: "8000", defaultValue: 8000 },
    },
    reactivationRate: 0.35,
    conversionRate: 0.15,
    resultLabel: "Recoverable revenue from nurture",
  },
  objections: {
    headline: "Common Concerns About AI Lead Nurturing",
    subheadline: "Real answers for sales leaders evaluating long-cycle automation.",
    objections: [
      {
        objection: "Our leads will know it's automated",
        response: "Modern AI nurture isn't a robotic drip campaign. It writes personalized messages based on each lead's history, responds intelligently to replies, and adapts tone over time. Most leads can't tell—and the ones who can don't care, because the messages are actually relevant and helpful.",
      },
      {
        objection: "We already use HubSpot/Mailchimp drip campaigns",
        response: "Traditional drip tools send the same templated sequence to everyone. AI nurturing is conversational and dynamic—it adapts each message based on what the lead does, replies in real time across SMS and email, and identifies buying signals automatically. It's the difference between broadcasting and having an actual conversation.",
      },
      {
        objection: "We don't want to annoy our leads",
        response: "AI calibrates cadence by engagement. Highly responsive leads get more frequent touches; quiet leads get a slower drumbeat with valuable content. Unsubscribe and opt-out signals are honored instantly. The result is actually less spammy than most manual campaigns because every message is relevant.",
      },
      {
        objection: "Our sales cycle is too unique for AI",
        response: "AI doesn't replace your sales playbook—it executes it at scale. We build the nurture logic around your specific stages, objections, content, and timing. Whether your cycle is 3 months or 3 years, the AI runs your strategy consistently across thousands of leads without the dropoffs.",
      },
    ],
  },
  cta: {
    headline: "Ready to Stop Losing Long-Cycle Leads?",
    subheadline: "Every lead you stop following up with is revenue you handed to a competitor with more patience. Let AI nurture your pipeline until every lead is ready to buy.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "See how AI nurtures leads across weeks and months in a 20-minute demo.",
  },
};
