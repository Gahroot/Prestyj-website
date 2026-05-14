import type { SolutionPageContent } from "./types";

export const aiLeadResponse: SolutionPageContent = {
  slug: "ai-lead-response",
  meta: {
    title: "AI Lead Response | Contact Every Lead in Under 60 Seconds | Prestyj",
    description:
      "Stop losing leads to slow follow-up. AI responds to every web form, call, text, and email in under 60 seconds—24/7. Built for businesses spending real money on lead generation.",
    keywords: [
      "AI lead response automation",
      "instant lead follow-up software",
      "speed to lead AI",
      "automated lead response system",
      "real estate lead response AI",
      "lead response time automation",
      "AI sales development representative",
      "multi-channel lead response",
      "missed call text back",
      "web form auto response AI",
      "lead generation ROI software",
      "24/7 lead qualification AI",
    ],
  },
  hero: {
    badge: "AI Lead Response Solution",
    headline: "Every Lead Contacted.",
    headlineAccent: "In Under 60 Seconds.",
    subheadline:
      "You spend thousands on ads, SEO, and lead lists. Then leads sit for hours. AI responds instantly across every channel—web forms, calls, texts, emails—qualifies the lead, and books the meeting. 24/7, every day.",
    stats: [
      { value: "<60s", label: "response time, every channel", color: "success" },
      { value: "8x", label: "higher contact rate", color: "primary" },
      { value: "21x", label: "more likely to qualify", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Slow Lead Response Is Killing Your ROI",
    subheadline:
      "The leads you paid for are converting somewhere else—because they got an answer first.",
    points: [
      {
        icon: "Clock",
        title: "Your leads go cold in 5 minutes",
        description:
          "Studies show contacting a lead within 5 minutes makes them 21x more likely to qualify than waiting 30 minutes. Most businesses take hours. By then, they've already talked to a competitor.",
        color: "destructive",
      },
      {
        icon: "DollarSign",
        title: "You're burning ad spend on leads you never reach",
        description:
          "If you spend $20K/month on lead generation and reach 30% of leads, you wasted $14K. Slow response doesn't just lose deals—it destroys the ROI of every marketing dollar you spend.",
        color: "warning",
      },
      {
        icon: "PhoneMissed",
        title: "Leads come in 24/7, your team doesn't",
        description:
          "Over 50% of leads submit forms or call outside business hours. By Monday morning, weekend leads are stale and three competitors deep. Email auto-responders don't book meetings.",
        color: "primary",
      },
      {
        icon: "Layers",
        title: "Channels are fragmented and dropping leads",
        description:
          "Web form goes to one inbox, calls to another, texts to a personal cell, emails to support. Leads slip through the cracks because no single system catches and follows up across every channel.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "Instant, Multi-Channel Lead Response—On Autopilot",
    subheadline:
      "AI engages every lead the moment they raise their hand, on whatever channel they used.",
    benefits: [
      {
        icon: "Zap",
        title: "Sub-60 Second Response, Always",
        description:
          "Web form submitted at 2am? Lead replies in 47 seconds. Missed call on Sunday? Text goes out instantly. AI never sleeps, never takes lunch, and never lets a lead go cold.",
      },
      {
        icon: "Workflow",
        title: "Unified Across Every Channel",
        description:
          "Web forms, inbound calls, SMS, email, chat, Facebook leads, Google LSA—AI responds on the same channel the lead used and continues the conversation across all of them seamlessly.",
      },
      {
        icon: "Bot",
        title: "Intelligent Lead Qualification",
        description:
          "AI asks the questions your SDRs would ask: budget, timeline, needs, intent. Qualified leads get booked on your calendar. Unqualified leads get nurtured—not handed to your closers.",
      },
      {
        icon: "Calendar",
        title: "Books Meetings Directly",
        description:
          "Don't just respond—convert. AI checks calendar availability and books qualified leads straight into your reps' schedules with all context, notes, and lead details attached.",
      },
      {
        icon: "RefreshCw",
        title: "Persistent, Polite Follow-Up",
        description:
          "8 out of 10 deals require 5+ touches. AI follows up automatically across multiple channels and days—exactly as long as you want it to—without anyone on your team lifting a finger.",
      },
      {
        icon: "BarChart3",
        title: "Full Visibility & CRM Sync",
        description:
          "Every conversation logged, every outcome tracked, every lead synced to your CRM (HubSpot, Salesforce, GoHighLevel, and more). See exactly which channels and campaigns convert.",
      },
    ],
  },
  calculator: {
    headline: "Lead Response ROI Calculator",
    subheadline: "See how much pipeline you're losing to slow response—and what AI recovers.",
    inputs: {
      leads: { label: "Leads generated per month", placeholder: "300", defaultValue: 300 },
      commission: { label: "Average deal value ($)", placeholder: "5000", defaultValue: 5000 },
    },
    reactivationRate: 0.55,
    conversionRate: 0.25,
    resultLabel: "Additional monthly revenue with AI",
  },
  objections: {
    headline: "Common Concerns About AI Lead Response",
    subheadline: "Real answers for sales and marketing leaders evaluating AI follow-up.",
    objections: [
      {
        objection: "Leads will know it's AI and disengage",
        response:
          "Modern conversational AI is genuinely indistinguishable from a fast, friendly SDR. And what leads actually care about is getting a real, helpful response in seconds—not 4 hours later. An AI that responds in 30 seconds beats a human who never replies.",
      },
      {
        objection: "We already have SDRs doing follow-up",
        response:
          "AI doesn't replace your team—it makes them 10x more effective. Instead of grinding through 200 cold leads, your SDRs get handed pre-qualified, calendar-booked appointments. They close more deals, faster, with less burnout.",
      },
      {
        objection: "Our sales process is too complex for AI",
        response:
          "AI handles the top of funnel: respond, qualify, book. It doesn't pitch your enterprise contract or run a discovery call. It captures intent, gathers context, and routes the right leads to humans with full conversation history—so your reps start every call already informed.",
      },
      {
        objection: "We tried marketing automation and it didn't move the needle",
        response:
          "Drip emails and form auto-responders aren't lead response—they're noise. AI lead response is conversational, real-time, and multi-channel. It actually talks back to leads, answers questions, and books meetings. That's why it converts 8-12x better than traditional automation.",
      },
    ],
  },
  cta: {
    headline: "Stop Paying for Leads You Never Contact",
    subheadline:
      "Every minute a lead waits, your conversion rate drops. See how AI responds to every lead in under 60 seconds—and turns your existing pipeline into booked meetings.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote:
      "No commitment required. See AI lead response in action across web, phone, SMS, and email.",
  },
};
