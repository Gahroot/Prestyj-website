import type { SolutionPageContent } from "./types";

export const aiDialer: SolutionPageContent = {
  slug: "ai-dialer",
  meta: {
    title: "AI Dialer | Make 1,000+ Sales Calls Per Day | Prestyj",
    description:
      "Scale outbound calling with an AI dialer that makes 1,000+ calls per day, holds natural voice conversations, handles voicemails, and transfers hot leads to your reps in real-time. Built for sales teams, call centers, ISAs, and home services.",
    keywords: [
      "AI dialer",
      "AI powered auto dialer",
      "outbound AI calling software",
      "AI cold calling software",
      "AI voice dialer for sales teams",
      "predictive AI dialer",
      "AI dialer for real estate ISAs",
      "AI dialer for call centers",
      "AI dialer for home services",
      "automated outbound calling AI",
      "AI voicemail drop software",
      "live transfer AI dialer",
    ],
  },
  hero: {
    badge: "AI Dialer Solution",
    headline: "1,000+ Sales Calls a Day.",
    headlineAccent: "Hot Leads Live-Transferred.",
    subheadline:
      "Stop paying reps to leave voicemails. Our AI dialer makes calls at scale, holds natural voice conversations, qualifies prospects, and transfers hot leads to your closers in real-time. Built for sales teams, call centers, real estate ISAs, and home services.",
    stats: [
      { value: "1,000+", label: "calls per day, per AI agent", color: "primary" },
      { value: "10x", label: "more conversations vs. human dialers", color: "success" },
      { value: "<2s", label: "live transfer to your reps", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Manual Dialing Is Killing Your Pipeline",
    subheadline:
      "Sales teams burn hours every day on dead numbers, voicemails, and unqualified prospects.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Reps spend 80% of their time not selling",
        description:
          "Between dialing, leaving voicemails, and chasing dead numbers, your closers only spend 12-15 minutes per hour in real conversations. You're paying $60K+ salaries for data entry.",
        color: "destructive",
      },
      {
        icon: "TrendingDown",
        title: "Lead lists go stale before reps can call",
        description:
          "Speed-to-lead matters. By the time your team works through a list of 500 leads, the first 100 have already been called by 3 competitors—or forgotten you entirely.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "Hiring more dialers doesn't scale",
        description:
          "Adding a SDR costs $50K-80K/year before commissions. Training takes 90 days. Turnover is 35%. You can't hire your way out of an outbound volume problem.",
        color: "primary",
      },
      {
        icon: "Clock",
        title: "Hot leads cool while reps are on other calls",
        description:
          'When a prospect says "yes, I\'m interested" but your closer is busy, that lead waits—or worse, gets a callback an hour later when the buying intent is gone.',
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Dials, Talks, and Transfers",
    subheadline:
      "Replace the grunt work of outbound calling. Keep your closers doing what they do best—closing.",
    benefits: [
      {
        icon: "Phone",
        title: "Massive Outbound Volume",
        description:
          "One AI agent makes 1,000+ dials per day. Run 10 agents in parallel and hit 10,000+ calls without adding a single human dialer to your headcount.",
      },
      {
        icon: "Bot",
        title: "Natural Voice Conversations",
        description:
          "AI doesn't sound like a robot. It opens the call, runs your qualification script, handles objections, and adapts in real-time using natural conversational voice.",
      },
      {
        icon: "Zap",
        title: "Live Hot-Lead Transfers",
        description:
          "When a prospect is qualified and interested, AI warm-transfers them to an available rep in under 2 seconds—with full call context. Your closers only talk to ready buyers.",
      },
      {
        icon: "MessageSquare",
        title: "Smart Voicemail Handling",
        description:
          "AI detects voicemails and drops a pre-recorded message in your voice, then schedules an automatic follow-up. No more reps reading the same voicemail script 200 times a day.",
      },
      {
        icon: "Calendar",
        title: "Direct Calendar Booking",
        description:
          "For prospects who aren't ready for a transfer, AI books a discovery call straight onto your rep's calendar based on availability—no scheduling ping-pong.",
      },
      {
        icon: "BarChart3",
        title: "Full Call Analytics & Recordings",
        description:
          "Every call is recorded, transcribed, and scored. See connect rates, talk time, objection patterns, and conversion data across every campaign in one dashboard.",
      },
    ],
  },
  calculator: {
    headline: "Outbound Volume Calculator",
    subheadline: "See how much pipeline you'd generate if AI made every call instead of your reps.",
    inputs: {
      leads: { label: "Leads dialed per month", placeholder: "5000", defaultValue: 5000 },
      commission: { label: "Average deal value ($)", placeholder: "2500", defaultValue: 2500 },
    },
    reactivationRate: 0.35,
    conversionRate: 0.15,
    resultLabel: "Additional monthly revenue with AI dialer",
  },
  objections: {
    headline: "Common Concerns About AI Dialers",
    subheadline:
      "Real answers from sales leaders, ISA managers, and call center operators using AI dialers today.",
    objections: [
      {
        objection: "Prospects will hang up on an AI voice",
        response:
          "Modern voice AI is indistinguishable from a trained SDR on a cold call. Connect-to-conversation rates with our AI dialer match or beat human dialers in head-to-head tests. And when a prospect is interested, they're transferred to a human in under 2 seconds—so they're talking to your closer well before any concern about \"who they're talking to\" matters.",
      },
      {
        objection: "AI will hurt our brand if it sounds bad",
        response:
          "You control the script, the voice, the persona, and the disclosure. We let you A/B test voices, openings, and qualification flows before scaling. Most clients find AI is more consistent and more on-script than their human team—it never has a bad day, never goes off-message, and never forgets the talk track.",
      },
      {
        objection: "Compliance—TCPA, DNC, state laws",
        response:
          "Built-in DNC scrubbing, TCPA-compliant calling windows, state-specific time-zone enforcement, and automatic disclosure on request. Every call is recorded and auditable. We handle the compliance plumbing so your team can focus on conversion.",
      },
      {
        objection: "We already use a power dialer or predictive dialer",
        response:
          "Power dialers still need humans on every call. Our AI dialer is the human—it dials, talks, qualifies, and only loops in your reps when there's a hot lead ready to transfer. Stack it on top of your existing CRM and dialer infrastructure, or replace them entirely.",
      },
    ],
  },
  cta: {
    headline: "Ready to 10x Your Outbound Calls?",
    subheadline:
      "Stop paying closers to leave voicemails. Let AI do the dialing, the qualifying, and the voicemail drops—then transfer only the hot leads to your team.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. Hear a live AI dialer call in under 10 minutes.",
  },
};
