import type { SolutionPageContent } from "./types";

export const facebookAdLeads: SolutionPageContent = {
  slug: "facebook-ad-leads",
  meta: {
    title: "Convert More Facebook Ad Leads with AI | Prestyj",
    description:
      "Stop letting Facebook ad leads go cold. Prestyj's AI responds to every real estate Facebook lead in under 60 seconds, qualifies buyers and sellers, and books appointments automatically.",
    keywords: [
      "convert Facebook ad leads real estate",
      "Facebook ad lead follow up AI",
      "real estate Facebook lead conversion",
      "AI Facebook lead response",
      "Facebook ads real estate ROI",
      "real estate Facebook advertising AI",
    ],
  },
  hero: {
    badge: "Facebook Ad Lead Conversion",
    headline: "Your Facebook Leads Deserve",
    headlineAccent: "An Instant Response.",
    subheadline:
      "You're spending real money on Facebook ads. But slow follow-up is killing your ROI. AI responds to every lead in under 60 seconds — while they're still on their phone and thinking about their home.",
    stats: [
      { value: "< 60s", label: "response to every FB lead", color: "success" },
      { value: "80%", label: "conversion drop after 5 min", color: "destructive" },
      { value: "3x", label: "more appointments from same spend", color: "primary" },
    ],
  },
  painPoints: {
    headline: "Why Your Facebook Leads Aren't Converting",
    subheadline: "It's not the targeting. It's the follow-up.",
    points: [
      {
        icon: "Clock",
        title: "They forget they clicked within minutes",
        description:
          "Facebook leads are scrolling when they see your ad. If you don't engage them in minutes, they're on to the next thing — and your competitor.",
        color: "warning",
      },
      {
        icon: "PhoneMissed",
        title: "Off-hours leads go unanswered",
        description:
          "The best Facebook leads come on evenings and weekends — exactly when your agents aren't available to follow up.",
        color: "destructive",
      },
      {
        icon: "TrendingDown",
        title: "High cost per lead, low conversion to appointment",
        description:
          "Facebook real estate leads average $15–$80 each. Without instant follow-up, you're converting 1–2%. AI gets you to 5–8%.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "Turn Every Facebook Lead into a Conversation",
    subheadline: "AI handles the first response, qualification, and booking — so you only step in for warm leads.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant Response on Every Lead",
        description:
          "The moment a lead submits your Facebook form, AI sends a personalized follow-up. No delays, no gaps, no matter the time of day.",
      },
      {
        icon: "MessageSquare",
        title: "SMS-First Follow-Up",
        description:
          "Facebook leads are on their phones. AI follows up via SMS — which gets 98% open rates — before falling back to email.",
      },
      {
        icon: "Target",
        title: "Smart Qualification",
        description:
          "AI asks whether they're buying or selling, their timeline, price range, and pre-approval status — routing hot leads to your agents immediately.",
      },
      {
        icon: "Calendar",
        title: "Automated Appointment Booking",
        description:
          "Qualified leads book directly onto your agent's calendar through the AI conversation. No manual coordination required.",
      },
      {
        icon: "BarChart3",
        title: "Campaign-Level Conversion Tracking",
        description:
          "See which Facebook campaigns are producing the most appointments and closings — not just the most leads.",
      },
      {
        icon: "RefreshCw",
        title: "Multi-Touch Follow-Up Sequences",
        description:
          "If a lead doesn't respond immediately, AI follows up 5–7 times over 14 days. Most appointments come from the 3rd or 4th touch.",
      },
    ],
  },
  faqs: [
    {
      question: "How does Prestyj connect to my Facebook Lead Ads?",
      answer:
        "We integrate via webhook, Zapier, or direct CRM sync. The moment a lead submits your Facebook form, AI receives the data and fires the follow-up within seconds.",
    },
    {
      question: "What does the AI say in the first message to a Facebook lead?",
      answer:
        "We customize the first message for your offer and market. Typically AI acknowledges what they were looking for, introduces your team by name, and asks a qualifying question to start the conversation.",
    },
    {
      question: "Does this work for both buyer and seller Facebook campaigns?",
      answer:
        "Yes. We set up separate conversation flows for buyer campaigns (searching for homes) and seller campaigns (home valuation, list with us), each with relevant qualifying questions.",
    },
    {
      question: "What's the typical ROI improvement for Facebook advertisers?",
      answer:
        "Teams using Prestyj typically see their lead-to-appointment rate go from 1–3% to 5–10% within 60 days. At $10K average commission, one additional closing per month from improved follow-up covers months of service.",
    },
    {
      question: "Can I track which Facebook ads are generating the most appointments?",
      answer:
        "Yes. Prestyj tracks lead source, response time, qualification outcome, and appointment booked rate by campaign — giving you attribution data your ad platform alone can't provide.",
    },
  ],
  cta: {
    headline: "Stop Wasting Your Facebook Ad Budget",
    subheadline:
      "Every day without instant AI follow-up is another batch of leads going cold. See how Prestyj converts 3x more Facebook leads — book a demo built around your campaigns.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
  },
};
