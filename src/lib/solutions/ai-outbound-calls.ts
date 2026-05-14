import type { SolutionPageContent } from "./types";

export const aiOutboundCalls: SolutionPageContent = {
  slug: "ai-outbound-calls",
  meta: {
    title: "AI Outbound Calling Service | Scale Your Sales Calls 10x | Prestyj",
    description:
      "Prestyj's AI voice agents make thousands of outbound calls daily—reactivating dead leads, following up with past clients, and qualifying prospects. Scale your outbound without hiring SDRs.",
    keywords: [
      "AI outbound calling service",
      "AI voice agent for sales",
      "automated outbound calls",
      "AI cold calling software",
      "lead reactivation AI",
      "AI sales dialer",
      "outbound AI for real estate",
      "AI SDR replacement",
      "automated lead follow-up calls",
      "AI voice agent outbound",
      "AI calling for home services",
      "scalable outbound sales automation",
    ],
  },
  hero: {
    badge: "AI Outbound Calling Solution",
    headline: "10,000 Outbound Calls.",
    headlineAccent: "Zero Hires.",
    subheadline:
      "Prestyj's AI voice agents call your leads, past clients, and prospects—qualifying interest, booking appointments, and routing hot leads to your team in real time. Scale outbound without scaling headcount.",
    stats: [
      { value: "10x", label: "more dials per day", color: "primary" },
      { value: "24/7", label: "calling capacity", color: "success" },
      { value: "85%", label: "lower cost per dial", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your CRM Is Full. Your Pipeline Is Empty.",
    subheadline:
      "Most sales teams sit on thousands of unworked leads because outbound calling doesn't scale with humans.",
    points: [
      {
        icon: "Database",
        title: "Thousands of leads going stale in your CRM",
        description:
          "You've spent millions on lead generation, ads, and marketing. 80% of those contacts never get a second call. Every day they sit untouched, they're worth less.",
        color: "destructive",
      },
      {
        icon: "DollarSign",
        title: "SDRs cost $75K+ and quit every 14 months",
        description:
          "Hire, train, ramp, lose. Repeat. The average SDR makes 50 dials a day, takes 6 months to ramp, and burns out in just over a year. The math doesn't work anymore.",
        color: "warning",
      },
      {
        icon: "History",
        title: "Past clients forgotten, referrals never asked",
        description:
          "Your best source of revenue is sitting in your closed-won list. But nobody has time to call 500 past clients to check in, ask for referrals, or pitch new offers.",
        color: "primary",
      },
      {
        icon: "Clock",
        title: "Speed-to-lead is killing your conversion",
        description:
          "Studies show calling a lead within 5 minutes makes you 21x more likely to convert. Your reps are in meetings, on lunch, or asleep. The lead goes cold in minutes.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI Voice Agents That Actually Sound Human",
    subheadline:
      "Run massive outbound campaigns at a fraction of the cost—without sacrificing conversation quality.",
    benefits: [
      {
        icon: "Phone",
        title: "Thousands of Simultaneous Dials",
        description:
          "While one human dials one number, AI dials thousands in parallel. Burn through your entire CRM in a week instead of a year. Built for real volume.",
      },
      {
        icon: "Bot",
        title: "Natural, Human-Sounding Conversations",
        description:
          "Prestyj's AI handles objections, asks qualifying questions, and adapts to each prospect in real time. No robotic scripts—just intelligent two-way dialogue.",
      },
      {
        icon: "Target",
        title: "Smart Lead Reactivation Campaigns",
        description:
          "Upload your dead lead list and let AI work it. Re-engage prospects from 6, 12, even 24 months ago. Every campaign mines revenue you've already paid for.",
      },
      {
        icon: "Zap",
        title: "Instant Hot-Lead Hand-Off",
        description:
          "When AI identifies a qualified, ready-to-buy prospect, it transfers the call live to your closer—or books the meeting on your calendar instantly.",
      },
      {
        icon: "BarChart3",
        title: "Full Call Analytics & Transcripts",
        description:
          "Every call recorded, transcribed, and scored. See objections, sentiment, and conversion patterns across your entire campaign. Optimize what your reps never could.",
      },
      {
        icon: "Workflow",
        title: "CRM-Native Integration",
        description:
          "Connects to Salesforce, HubSpot, Follow Up Boss, GoHighLevel, and more. AI updates lead status, logs call notes, and triggers your existing workflows automatically.",
      },
    ],
  },
  calculator: {
    headline: "Outbound Revenue Calculator",
    subheadline: "See how much pipeline you can unlock by working your full lead list with AI.",
    inputs: {
      leads: { label: "Unworked leads in your CRM", placeholder: "5000", defaultValue: 5000 },
      commission: { label: "Average deal value ($)", placeholder: "5000", defaultValue: 5000 },
    },
    reactivationRate: 0.35,
    conversionRate: 0.08,
    resultLabel: "Pipeline revenue from lead reactivation",
  },
  objections: {
    headline: "Common Concerns About AI Outbound",
    subheadline: "Honest answers for sales leaders evaluating AI calling.",
    objections: [
      {
        objection: "Prospects will hang up the moment they realize it's AI",
        response:
          "Prestyj's AI agents sound natural, conversational, and helpful—not robotic. We're transparent when asked, but engagement rates are comparable to human SDRs because the AI listens, adapts, and actually answers questions. The dirty secret: most prospects hang up on human cold calls too.",
      },
      {
        objection: "AI can't handle complex objections or qualifying questions",
        response:
          "Modern AI agents are trained on your specific offer, ICP, and objection library. They handle pricing pushback, timing concerns, and competitor comparisons just like a trained SDR. For anything outside scope, AI seamlessly transfers to a human or schedules a follow-up.",
      },
      {
        objection: "We're worried about TCPA and compliance risk",
        response:
          "Prestyj handles compliance natively—DNC list scrubbing, consent verification, calling-window enforcement, and full call recording with disclosure. We help you stay compliant across federal and state regulations, and every call is logged for audit.",
      },
      {
        objection: "Our reps still need to make calls themselves",
        response:
          "AI doesn't replace your closers—it feeds them. AI handles top-of-funnel volume (dialing 5,000 leads, qualifying interest, booking meetings) so your human reps spend their day on warm conversations with sales-ready prospects, not voicemail boxes.",
      },
    ],
  },
  cta: {
    headline: "Stop Letting Leads Die in Your CRM",
    subheadline:
      "Every day you wait, your lead list gets colder and your competitors get louder. See how Prestyj's AI agents can work your entire pipeline this month.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "Hear a live AI outbound call in action. No commitment required.",
  },
};
