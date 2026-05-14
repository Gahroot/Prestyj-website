import type { SolutionPageContent } from "./types";

export const aiClosingAssistant: SolutionPageContent = {
  slug: "ai-closing-assistant",
  meta: {
    title: "AI Closing Assistant | Close More Deals with AI Coaching | Prestyj",
    description:
      "Close more deals with an AI sales assistant that coaches reps in real-time, handles objections, automates follow-up, and manages the entire closing process. Built for real estate agents, sales teams, and home services closers.",
    keywords: [
      "AI closing assistant",
      "AI sales coaching software",
      "real-time sales coaching AI",
      "AI objection handling",
      "automated sales follow-up",
      "AI for real estate agents",
      "AI sales assistant for closers",
      "deal closing automation",
      "AI sales enablement",
      "sales conversion AI",
      "AI follow-up automation",
      "closing process automation",
    ],
  },
  hero: {
    badge: "AI Closing Assistant",
    headline: "Close More Deals.",
    headlineAccent: "Coach Every Rep in Real Time.",
    subheadline:
      "Your reps work hard but leave deals on the table. AI coaches them mid-conversation, handles objections, and automates every follow-up until the contract is signed. Built for real estate agents, sales teams, and home service closers.",
    stats: [
      { value: "37%", label: "higher close rate", color: "success" },
      { value: "24/7", label: "follow-up coverage", color: "primary" },
      { value: "10x", label: "faster ramp time", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Deals Don't Die From Bad Leads—They Die in the Close",
    subheadline:
      "Most sales teams have plenty of pipeline. What they lack is the discipline and coaching to convert it.",
    points: [
      {
        icon: "TrendingDown",
        title: "Reps freeze on objections",
        description:
          'When a prospect says "it\'s too expensive" or "I need to think about it," most reps fold. Without real-time coaching, the same objections kill deal after deal.',
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Follow-up falls through the cracks",
        description:
          "80% of deals require 5+ touches, but the average rep gives up after 2. Hot prospects go cold while your team chases the next shiny lead.",
        color: "warning",
      },
      {
        icon: "UserX",
        title: "New hires take 6+ months to ramp",
        description:
          "Top closers are made, not born. Without consistent coaching at every call, new reps flounder for months while your top 20% carry the team.",
        color: "primary",
      },
      {
        icon: "AlertCircle",
        title: "No visibility into what's killing deals",
        description:
          "You see the lost-deal report at month-end, but by then it's too late. You need to know which objections are stalling deals while there's still time to save them.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Closes Alongside Your Reps",
    subheadline:
      "Real-time coaching, automated follow-up, and full closing-process management—built into every conversation.",
    benefits: [
      {
        icon: "Sparkles",
        title: "Real-Time Call Coaching",
        description:
          "AI listens to every sales call live and whispers winning responses to objections, pricing pushback, and stalls—turning average reps into top performers on day one.",
      },
      {
        icon: "Shield",
        title: "Objection Handling Playbook",
        description:
          'Trained on thousands of closed deals in your industry. AI surfaces the exact rebuttal that worked when prospects said "too expensive," "need to think," or "call me next quarter."',
      },
      {
        icon: "RefreshCw",
        title: "Automated Multi-Touch Follow-Up",
        description:
          "AI sends personalized email, SMS, and voicemail drops on the perfect cadence until the deal closes or dies. No more leads forgotten in a CRM.",
      },
      {
        icon: "Workflow",
        title: "End-to-End Closing Process",
        description:
          "From verbal yes to signed contract: AI sends agreements, chases signatures, schedules closing calls, and keeps every deal moving until revenue hits the books.",
      },
      {
        icon: "BarChart3",
        title: "Deal-Level Coaching Insights",
        description:
          "Every call analyzed for talk ratio, objection patterns, and missed opportunities. Managers see exactly which reps need help on which objections—before deals die.",
      },
      {
        icon: "Zap",
        title: "Instant Rep Ramp-Up",
        description:
          "New hires close like veterans because AI coaches them through every call. Cut ramp time from 6 months to 6 weeks and stop losing money on under-performing reps.",
      },
    ],
  },
  calculator: {
    headline: "Closing Revenue Calculator",
    subheadline:
      "See how much more revenue your team would close with AI coaching and follow-up on every deal.",
    inputs: {
      leads: { label: "Qualified opportunities per month", placeholder: "100", defaultValue: 100 },
      commission: { label: "Average deal value ($)", placeholder: "8000", defaultValue: 8000 },
    },
    reactivationRate: 0.45,
    conversionRate: 0.37,
    resultLabel: "Additional monthly revenue with AI closing assistant",
  },
  objections: {
    headline: "Common Concerns About AI Closing Assistants",
    subheadline: "Real answers for sales leaders considering AI coaching for their team.",
    objections: [
      {
        objection: "My top reps don't need coaching",
        response:
          "Your top reps benefit most. AI handles their follow-up automatically, freeing them to spend 100% of their time on live conversations. Top performers using AI close 25-40% more because they stop losing deals to admin work and forgotten follow-ups.",
      },
      {
        objection: "Real-time coaching will distract reps mid-call",
        response:
          "AI prompts are subtle and contextual—surfaced as on-screen suggestions only when the prospect raises an objection or stall pattern. Reps choose what to use. Most say it feels like having their best manager whispering in their ear at exactly the right moment.",
      },
      {
        objection: "Our sales process is too unique for AI",
        response:
          "Prestyj's closing AI is trained on your specific playbook, ICP, pricing, and historical wins. It learns from your top closers and your industry. Whether you sell real estate, roofing, solar, or SaaS, AI adapts to how your team actually closes.",
      },
      {
        objection: "We already use a CRM with automation",
        response:
          "CRMs track activity. AI closing assistants drive activity. Your CRM tells you a deal is stuck. AI tells your rep exactly what to say to unstick it, then automates the follow-up sequence to close it. They work together—AI fills the coaching and execution gap your CRM was never built for.",
      },
    ],
  },
  cta: {
    headline: "Ready to Close More Deals on Autopilot?",
    subheadline:
      "Every objection your reps fumble and every follow-up they miss is revenue lost. Give your team an AI closing assistant that coaches, follows up, and closes—on every deal, every time.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "See how AI coaches a real sales call and closes a deal in under 15 minutes.",
  },
};
