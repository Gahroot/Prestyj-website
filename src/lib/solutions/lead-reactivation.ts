import type { SolutionPageContent } from "./types";

export const leadReactivation: SolutionPageContent = {
  slug: "lead-reactivation",
  meta: {
    title: "Lead Reactivation AI for Real Estate | Revive Your Dead Database",
    description:
      "Turn your dormant CRM into a revenue machine. Our AI reactivates cold leads with guaranteed measurable increase in booked appointments within 90 days.",
    keywords: [
      "lead reactivation",
      "dead leads",
      "CRM revival",
      "real estate AI",
      "dormant database",
      "lead nurturing",
    ],
  },
  hero: {
    badge: "Lead Reactivation AI",
    headline: "Your Dead Leads Aren't Dead.",
    headlineAccent: "They're Just Waiting.",
    subheadline:
      "Guaranteed measurable increase in booked appointments within 90 days—or we keep working for free. Your CRM is a goldmine. Let's unlock it.",
    stats: [
      { value: "$47K", label: "avg. recovered revenue", color: "success" },
      { value: "23%", label: "reactivation rate", color: "primary" },
      { value: "14 days", label: "to first booking", color: "warning" },
    ],
  },
  painPoints: {
    headline: "You're Sitting on a Fortune",
    subheadline: "But every day those leads sit cold, they slip further away.",
    points: [
      {
        icon: "Database",
        title: "Thousands of leads. Zero follow-up.",
        description:
          "Your CRM is packed with contacts you paid for. But without consistent outreach, they're just names on a spreadsheet.",
        color: "primary",
      },
      {
        icon: "UserX",
        title: "They didn't say no. They just went quiet.",
        description:
          "Life happened. Timing wasn't right. But that doesn't mean they're gone forever—it means they need the right nudge.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "You paid $30-100 per lead. Now you're paying again.",
        description:
          "Every new lead costs money. Meanwhile, you have thousands of paid-for contacts collecting digital dust.",
        color: "destructive",
      },
    ],
  },
  benefits: {
    headline: "Revive Relationships at Scale",
    subheadline: "Our AI does the heavy lifting so you can focus on closing deals.",
    benefits: [
      {
        icon: "RefreshCw",
        title: "Intelligent Re-engagement",
        description:
          "AI crafts personalized outreach based on each lead's history, preferences, and past interactions.",
      },
      {
        icon: "History",
        title: "Perfect Timing",
        description:
          "Smart algorithms detect optimal contact windows based on response patterns and market signals.",
      },
      {
        icon: "MessageSquare",
        title: "Multi-Touch Sequences",
        description:
          "Automated email, text, and voicemail drops that feel personal—not robotic.",
      },
      {
        icon: "Target",
        title: "Intent Detection",
        description:
          "AI identifies buying signals and prioritizes leads showing renewed interest.",
      },
      {
        icon: "Calendar",
        title: "Direct-to-Calendar Booking",
        description:
          "Warm leads book appointments directly into your calendar. No back-and-forth.",
      },
      {
        icon: "BarChart3",
        title: "Transparent ROI Tracking",
        description:
          "Real-time dashboard shows exactly how many leads reactivated and revenue recovered.",
      },
    ],
  },
  objections: {
    headline: "Yeah, but...",
    subheadline: "We've heard every objection. Here's the truth.",
    objections: [
      {
        objection: "My leads are too old—they've moved on.",
        response:
          "23% of 'dead' leads reactivate when contacted properly. And here's the kicker: leads who didn't convert but stayed in touch are 4x more likely to refer friends and family. Old leads are relationship gold.",
      },
      {
        objection: "I already tried reaching out. It didn't work.",
        response:
          "One email isn't outreach—it's a whisper in a windstorm. Studies show it takes 8-12 touches to re-engage a cold lead. Our AI sequences are designed for persistence that converts, not annoys.",
      },
      {
        objection: "What if this annoys my contacts and damages my reputation?",
        response:
          "Our AI monitors sentiment in real-time. Negative responses trigger automatic suppression—no human intervention needed. We protect your reputation while maximizing reactivation.",
      },
      {
        objection: "How do I know it's actually working?",
        response:
          "Real-time dashboard shows every metric: opens, replies, appointments, closings. Plus our 90-day guarantee means if you don't see measurable improvement, we keep working at no additional cost.",
      },
      {
        objection: "I don't have time to manage another tool.",
        response:
          "There's nothing to manage. We import your database, configure your sequences, and run everything. You just show up to appointments. It's literally set-and-forget.",
      },
    ],
  },
  calculator: {
    headline: "See Your Hidden Revenue",
    subheadline: "How much is your dormant database really worth?",
    inputs: {
      leads: {
        label: "Leads in your CRM",
        placeholder: "e.g., 5000",
        defaultValue: 5000,
      },
      commission: {
        label: "Average commission per deal ($)",
        placeholder: "e.g., 12000",
        defaultValue: 12000,
      },
    },
    reactivationRate: 0.23,
    conversionRate: 0.05,
    resultLabel: "Potential recovered revenue",
  },
  cta: {
    headline: "Stop Buying New Leads. Start Working the Ones You Own.",
    subheadline:
      "Your database has untapped potential worth tens of thousands. Let's prove it.",
    buttonText: "Book Your Free Analysis",
    buttonHref: "/book-demo",
    footnote:
      "90-Day Guarantee: Measurable increase in booked appointments or we keep working for free.",
  },
};
