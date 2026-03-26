import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const realGeeksUsers: BestForPageContent = createBestForPage({
  slug: "real-geeks-users",
  niche: {
    name: "Real Geeks Users",
    shortName: "Real Geeks",
    description: "Real estate agents and teams using Real Geeks who want AI-powered lead response",
  },
  meta: {
    title: "AI Lead Response for Real Geeks Users | Prestyj",
    description:
      "Prestyj adds AI-powered instant lead response to Real Geeks. Respond to every lead in under 60 seconds, qualify buyers and sellers, and book appointments — syncing with your Real Geeks CRM.",
    keywords: [
      "Real Geeks AI integration",
      "AI for Real Geeks users",
      "Real Geeks lead response automation",
      "Real Geeks AI lead follow up",
      "enhance Real Geeks with AI",
      "Real Geeks real estate lead conversion",
    ],
  },
  hero: {
    badge: "Built for Real Geeks Users",
    headlineAccent: "Real Geeks Users",
    subheadline:
      "Real Geeks drives traffic and captures leads. Prestyj converts them — with AI that responds in under 60 seconds, qualifies every lead, and books appointments directly to your calendar.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Instant Follow-Up on Real Geeks Leads",
      description:
        "Every Real Geeks lead — IDX registration, home valuation request, or contact form — gets an AI response in under 60 seconds.",
    },
    {
      icon: "Database" as IconName,
      title: "Real Geeks CRM Sync",
      description:
        "Prestyj conversations, lead status updates, and appointments sync directly into your Real Geeks CRM. No manual data entry.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Real Conversations, Not Just Drips",
      description:
        "Real Geeks has email drip campaigns. Prestyj adds real two-way AI conversations via SMS and email — the kind that actually get responses and book appointments.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Convert Home Valuation Leads",
      description:
        "Seller leads from your Real Geeks home valuation pages are high-intent. AI engages them immediately with market insights and books listing appointments.",
    },
  ],
  painPoints: [
    {
      problem: "Real Geeks IDX registrations not turning into conversations",
      solution:
        "AI reaches out the moment someone registers — while they're still actively searching. This window is your best shot at converting, and AI never misses it.",
    },
    {
      problem: "Home valuation leads going cold before you call them",
      solution:
        "Seller leads want information fast. AI engages them immediately, provides preliminary insights, and books a listing consultation before the urgency fades.",
    },
    {
      problem: "Real Geeks email drips getting ignored",
      solution:
        "Text messages have 98% open rates vs. 20% for email. Prestyj's AI follows up via SMS first — which is where real estate conversations happen.",
    },
    {
      problem: "No weekend or evening coverage for Real Geeks leads",
      solution:
        "AI works 24/7. Saturday and Sunday leads get the same instant response as weekday leads. You never miss a lead again.",
    },
    {
      problem: "Large Real Geeks database with mostly cold, unconverted leads",
      solution:
        "Reactivation campaigns reach out to your entire dormant Real Geeks database — many clients get 20%+ response rates from leads they had written off.",
    },
  ],
  comparison: {
    headers: ["Capability", "Real Geeks + Prestyj", "Real Geeks Alone"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, always",
        others: "Depends on when you check the app",
      },
      {
        feature: "Conversational AI",
        prestyj: "Full 2-way SMS + email conversation",
        others: "One-way drip email sequences",
      },
      {
        feature: "Seller Lead Engagement",
        prestyj: "Instant outreach with market context",
        others: "Generic follow-up email",
      },
      {
        feature: "Appointment Booking",
        prestyj: "AI books directly to your calendar",
        others: "Manual — you call and close",
      },
      {
        feature: "24/7 Coverage",
        prestyj: "Complete",
        others: "Business hours only",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with Real Geeks?",
      answer:
        "We connect via webhook or Zapier. Every new lead in Real Geeks triggers an instant AI follow-up. Conversation notes and appointment data sync back into your Real Geeks CRM.",
    },
    {
      question: "Can Prestyj handle both buyer and seller leads from Real Geeks?",
      answer:
        "Yes. We set up different conversation flows for buyer leads (IDX registrations) and seller leads (home valuation requests) — each with relevant qualifying questions.",
    },
    {
      question: "Does Prestyj replace Real Geeks' drip campaigns?",
      answer:
        "Prestyj works alongside Real Geeks' email drips. Prestyj handles SMS and conversational follow-up while Real Geeks continues sending property alerts and email nurture.",
    },
    {
      question: "Can I reactivate old leads from my Real Geeks database?",
      answer:
        "Yes. Export your cold leads from Real Geeks, and we'll run targeted reactivation campaigns via SMS and email. Most clients get 15–25% response rates from dormant leads.",
    },
    {
      question: "How long does Real Geeks integration take to set up?",
      answer:
        "Most Real Geeks integrations are live within 7–10 business days — including AI training, integration setup, and initial campaign testing.",
    },
  ],
  cta: {
    headline: "Convert More Real Geeks Leads with AI",
    subheadline:
      "See how Prestyj adds AI-powered instant follow-up to Real Geeks — turning more of your IDX traffic and ad spend into booked appointments. Book a demo today.",
    buttonText: "Book a Demo",
  },
});
