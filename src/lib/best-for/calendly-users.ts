import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const calendlyUsers: BestForPageContent = createBestForPage({
  slug: "calendly-users",
  niche: {
    name: "Calendly Users",
    shortName: "Calendly",
    description:
      "Sales teams and service businesses using Calendly for appointment scheduling and meeting coordination",
  },
  meta: {
    title: "AI Lead Response for Calendly Users | Prestyj",
    description:
      "Enhance your Calendly scheduling with AI that responds to leads in under 60 seconds, qualifies prospects, and books meetings directly — no link-sharing required.",
    keywords: [
      "Calendly AI integration",
      "AI for Calendly",
      "Calendly lead response automation",
      "Calendly AI assistant",
      "AI appointment setting Calendly",
      "Calendly alternative with AI",
    ],
  },
  hero: {
    badge: "Built for Calendly Users",
    headlineAccent: "Calendly Users",
    subheadline:
      "Calendly works when leads book themselves. But 73% of leads never click the link. Prestyj's AI engages them in conversation, qualifies their needs, and books the meeting for them — no link required.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Proactive Meeting Booking",
      description:
        "Instead of waiting for leads to find and click your Calendly link, AI reaches out, qualifies them, and books directly to your calendar — removing the friction that kills conversion.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Calendar Sync with Calendly",
      description:
        "AI reads your Calendly-connected calendar for real-time availability. Booked appointments appear seamlessly alongside your existing Calendly meetings.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Conversation-Driven Scheduling",
      description:
        "AI learns what the prospect needs, matches them to the right meeting type, and books the appropriate Calendly event — without the prospect ever visiting a scheduling page.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Higher Booking Rate Than Link Sharing",
      description:
        "Sending a Calendly link and hoping they book gets 10–20% conversion. AI-driven proactive booking converts 3–5x more leads into actual meetings.",
    },
  ],
  painPoints: [
    {
      problem: "Sending Calendly links but leads never book",
      solution:
        "AI engages the lead in conversation, handles their questions, and books the meeting for them. No link to find, no page to visit, no form to fill out — just a confirmed appointment.",
    },
    {
      problem: "Leads requesting meetings but not following through",
      solution:
        "AI follows up with leads who expressed interest but didn't book. Multi-touch outreach via call and text captures the meetings that passive link-sharing misses.",
    },
    {
      problem: "After-hours inquiries waiting until morning to book",
      solution:
        "AI responds 24/7 and can book Calendly meetings in real-time. A 9 PM inquiry becomes a 10 AM meeting before the prospect changes their mind overnight.",
    },
    {
      problem: "Wrong meeting types getting booked by confused prospects",
      solution:
        "AI qualifies the prospect first, then selects the correct Calendly meeting type — discovery call, demo, consultation — based on their actual needs.",
    },
  ],
  comparison: {
    headers: ["Approach", "Calendly + Prestyj", "Calendly Link Sharing"],
    rows: [
      {
        feature: "Booking Conversion",
        prestyj: "60–80% of engaged leads",
        others: "10–20% who click the link",
      },
      {
        feature: "Lead Engagement",
        prestyj: "AI initiates proactively",
        others: "Passive — waits for prospect action",
      },
      {
        feature: "Qualification",
        prestyj: "Before booking, AI qualifies",
        others: "No qualification — anyone can book",
      },
      {
        feature: "Meeting Type Matching",
        prestyj: "AI selects the right event type",
        others: "Prospect chooses (often incorrectly)",
      },
      {
        feature: "Follow-Up",
        prestyj: "Automated if no response",
        others: "Manual or forgotten",
      },
      {
        feature: "After-Hours",
        prestyj: "Full booking, 24/7",
        others: "Self-serve booking page only",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj work with Calendly?",
      answer:
        "Prestyj connects to your Calendly account via API. AI reads your available time slots, event types, and calendar connections. When AI qualifies a lead, it books the appropriate Calendly event type directly — the meeting appears on your calendar just like any Calendly booking.",
    },
    {
      question: "Does this replace Calendly?",
      answer:
        "No — Prestyj enhances Calendly. Your self-serve booking page still works for prospects who prefer it. Prestyj's AI captures the majority who never click a link by proactively booking them through conversation.",
    },
    {
      question: "Can AI choose the right Calendly event type?",
      answer:
        "Yes. AI qualifies the prospect's needs during the conversation and selects the matching Calendly event — 15-minute intro, 30-minute demo, 60-minute consultation, or any custom event type you've configured.",
    },
    {
      question: "What about Calendly's routing forms?",
      answer:
        "Prestyj's AI qualification replaces the need for routing forms. Instead of asking prospects to fill out a form, AI has a natural conversation and routes to the right meeting type based on their answers.",
    },
    {
      question: "Does it work with Calendly's team scheduling?",
      answer:
        "Absolutely. AI can book with specific team members based on round-robin, availability, or qualification criteria. Team scheduling rules from Calendly are respected.",
    },
  ],
  cta: {
    headline: "Turn More Leads Into Calendly Meetings",
    subheadline:
      "Stop waiting for prospects to click your link. AI engages, qualifies, and books the meeting for them — 3–5x more meetings from the same leads.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Works alongside your existing Calendly setup.",
  },
});
