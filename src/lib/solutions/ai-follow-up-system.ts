import type { SolutionPageContent } from "./types";

export const aiFollowUpSystem: SolutionPageContent = {
  slug: "ai-follow-up-system",
  meta: {
    title: "AI Follow-Up System | Automated Lead Nurturing That Converts | Prestyj",
    description: "Stop losing deals to slow follow-up. Our AI follow-up system runs automated multi-channel sequences across email, SMS, and phone—nurturing every lead until they're ready to buy. Built for real estate agents, home services, and sales teams.",
    keywords: [
      "AI follow-up system",
      "automated lead nurturing software",
      "multi-channel follow-up automation",
      "AI lead nurture sequences",
      "real estate follow-up automation",
      "sales follow-up AI",
      "automated SMS and email follow-up",
      "AI lead conversion system",
      "home services lead nurturing",
      "long-term lead nurture AI",
      "AI sales cadence automation",
      "drip campaign AI for sales teams",
    ],
  },
  hero: {
    badge: "AI Follow-Up & Nurture Solution",
    headline: "Stop Losing Deals to",
    headlineAccent: "Bad Follow-Up.",
    subheadline: "80% of sales happen between the 5th and 12th contact. Most reps stop at 2. AI runs every follow-up sequence—email, SMS, and phone—until your leads are ready to buy. Built for real estate, home services, and sales teams that refuse to let leads slip away.",
    stats: [
      { value: "80%", label: "of deals require 5+ touches", color: "warning" },
      { value: "12x", label: "more touches per lead", color: "primary" },
      { value: "3-5x", label: "higher conversion rate", color: "success" },
    ],
  },
  painPoints: {
    headline: "Your Pipeline Is Leaking Revenue",
    subheadline: "Every lead that didn't buy today is still a buyer tomorrow—if someone follows up.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Reps give up after 2 attempts",
        description: "Industry data shows 44% of salespeople quit after one follow-up, and 92% give up by the fourth. Meanwhile, 80% of conversions happen between touches 5 and 12. Your reps are walking away from money.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Leads go cold in 48 hours",
        description: "Without consistent multi-channel touches, lead engagement drops 80% within two days. By the time a rep \"circles back next week,\" the prospect has already called your competitor.",
        color: "warning",
      },
      {
        icon: "Database",
        title: "Old leads die in your CRM",
        description: "You've spent thousands acquiring leads who said \"not right now.\" They're sitting in your CRM untouched—worth nothing instead of becoming next quarter's revenue.",
        color: "primary",
      },
      {
        icon: "Layers",
        title: "Single-channel follow-up doesn't work",
        description: "Email-only sequences get ignored. SMS-only feels spammy. Phone-only catches no one. Real conversion requires coordinated touches across all three—something humans can't manage at scale.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "Multi-Channel Follow-Up on Autopilot",
    subheadline: "AI runs the perfect cadence across email, SMS, and phone—from minute one to month twelve.",
    benefits: [
      {
        icon: "Workflow",
        title: "Automated Multi-Channel Sequences",
        description: "AI orchestrates the right message on the right channel at the right time. Email nurture, SMS check-ins, AI voice calls—all coordinated into one intelligent cadence per lead.",
      },
      {
        icon: "Bot",
        title: "AI Voice Calls That Sound Human",
        description: "When a lead needs a phone touch, AI makes the call—conversational, natural, and persistent. It handles objections, books appointments, and routes hot leads to your team in real time.",
      },
      {
        icon: "RefreshCw",
        title: "Long-Term Nurture (12+ Months)",
        description: "Most leads buy 3-12 months after first contact. AI keeps them warm with relevant touches all the way through, so when they're finally ready, you're the one they call.",
      },
      {
        icon: "Sparkles",
        title: "Personalized at Scale",
        description: "Every message references the lead's specific interest, timeline, and previous interactions. 10,000 leads, 10,000 personalized conversations—not one generic blast.",
      },
      {
        icon: "TrendingUp",
        title: "Behavior-Based Triggers",
        description: "Lead opens an email? AI follows up with SMS. Visits your pricing page? AI calls. Goes silent for 30 days? Re-engagement sequence kicks in. Every action triggers the next best move.",
      },
      {
        icon: "BarChart3",
        title: "Full Pipeline Visibility",
        description: "See every touch, every reply, every conversion in one dashboard. Know exactly which sequences drive deals and which leads are heating up—so your team focuses only on closing.",
      },
    ],
  },
  calculator: {
    headline: "Pipeline Recovery Calculator",
    subheadline: "See how much revenue your stalled leads could generate with consistent AI follow-up.",
    inputs: {
      leads: { label: "Unconverted leads in your pipeline", placeholder: "500", defaultValue: 500 },
      commission: { label: "Average deal value ($)", placeholder: "5000", defaultValue: 5000 },
    },
    reactivationRate: 0.4,
    conversionRate: 0.15,
    resultLabel: "Recoverable revenue from existing leads",
  },
  objections: {
    headline: "Common Concerns About AI Follow-Up",
    subheadline: "Honest answers for sales leaders considering automated nurture.",
    objections: [
      {
        objection: "Automated follow-up feels impersonal and spammy",
        response: "Spammy follow-up is generic, repetitive, and ignores context. AI follow-up does the opposite: every message references the lead's specific situation, adapts based on their replies, and stops the moment they convert or opt out. Leads consistently rate AI sequences as more responsive than human reps because they're never forgotten and never get the same message twice.",
      },
      {
        objection: "Our sales reps need to own the relationship",
        response: "They still do. AI handles the touches reps don't have time for—the 8th email, the 30-day check-in, the 6-month nurture. The moment a lead replies with buying intent, AI hands them off to a real rep with full conversation history. Your team focuses on closing, not chasing.",
      },
      {
        objection: "We already have a CRM with email automation",
        response: "Most CRMs send email drips—and stop there. Prestyj orchestrates email, SMS, and AI voice calls together, with behavior-based branching and conversational replies. We integrate with your existing CRM (HubSpot, Salesforce, Follow Up Boss, GoHighLevel) so you keep your data and add the engine that actually converts.",
      },
      {
        objection: "What about compliance with TCPA and SMS regulations?",
        response: "Compliance is built in. Every contact is opt-in tracked, quiet hours are enforced by jurisdiction, opt-out keywords are honored instantly, and full audit logs are maintained. Your team gets aggressive follow-up without legal risk.",
      },
    ],
  },
  cta: {
    headline: "Turn Cold Leads Into Closed Deals",
    subheadline: "Your competitors are stopping at touch #2. With AI follow-up, you'll be there at touch #5, #8, and #12—when the deal actually happens. See it work on your pipeline in 15 minutes.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See live AI follow-up sequences across email, SMS, and phone.",
  },
};
