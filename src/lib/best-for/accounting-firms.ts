import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const accountingFirms: BestForPageContent = createBestForPage({
  slug: "accounting-firms",
  niche: {
    name: "Accounting Firms & Tax Preparers",
    shortName: "Accounting Firms",
    description: "CPA firms, tax preparers, and accounting practices needing AI receptionist and lead response",
  },
  meta: {
    title: "Accounting AI Receptionist & Tax Preparer Answering Service | Prestyj",
    description:
      "Never miss a client call during tax season. AI-powered answering service for accounting firms and tax preparers. Unlimited simultaneous calls, one recovered client pays for your annual service.",
    keywords: [
      "accounting AI receptionist",
      "tax preparer answering service",
      "CPA firm phone system",
      "accounting firm call answering",
      "tax season answering service",
      "AI receptionist for accountants",
      "accounting practice phone coverage",
    ],
  },
  hero: {
    badge: "Built for Accounting Firms",
    headlineAccent: "Accounting Firms & Tax Preparers",
    subheadline:
      "Stop losing clients to missed calls during tax season. AI answers every call immediately—unlimited simultaneous lines, 24/7 coverage, and one recovered client typically pays for your entire annual service.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "PhoneIncoming" as IconName,
      title: "Unlimited Simultaneous Calls",
      description:
        "Tax season brings call spikes no human can handle. AI answers 50+ calls simultaneously—no busy signals, no voicemail, every client gets immediate response when they need you most.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "One Recovered Client Pays for Everything",
      description:
        "The average accounting client is worth $2,000-5,000 annually. Recover just one missed client and you've covered your entire year of AI service. Everything else is pure ROI.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Seasonal Demand, No Seasonal Hiring",
      description:
        "Scale from 10 calls to 10,000 calls instantly. No temporary staff, no training, no overwhelmed receptionists. AI handles January-April volume spikes without breaking a sweat.",
    },
    {
      icon: "Clock" as IconName,
      title: "24/7 Coverage for Working Clients",
      description:
        "Your clients work 9-5 and call about their taxes at 7pm. AI is always available—evenings, weekends, tax deadline extensions. Capture leads when your office is closed.",
    },
  ],
  painPoints: [
    {
      problem: "Tax season call volume overwhelms your staff",
      solution:
        "AI handles unlimited simultaneous calls. No busy signals, no dropped calls, no frustrated clients. Even on April 14th, every caller gets immediate human-like response.",
    },
    {
      problem: "Missed calls from potential new clients go to competitors",
      solution:
        "AI answers every call, qualifies the prospect's needs (business vs. individual, tax situation, timeline), and books consultations. Never lose a new client to voicemail again.",
    },
    {
      problem: "After-hours callers reach voicemail and don't leave messages",
      solution:
        "AI provides immediate, helpful response 24/7. Current clients get their questions answered, prospects get booked, and everyone feels taken care of—no voicemail required.",
    },
    {
      problem: "Hiring seasonal staff is expensive and time-consuming",
      solution:
        "No hiring, no training, no management headaches. AI scales instantly from slow season to tax season chaos. One flat rate covers the entire year—no seasonal surcharges.",
    },
    {
      problem: "Receptionists can't answer complex tax questions",
      solution:
        "AI handles general inquiries, collects relevant information, and seamlessly routes complex questions to the right accountant. Clients get answers without interrupting your billable work.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Traditional Answering Services"],
    rows: [
      {
        feature: "Cost Structure",
        prestyj: "Flat monthly, unlimited calls",
        others: "$2-4 per minute + peak season surcharges",
      },
      {
        feature: "Simultaneous Call Capacity",
        prestyj: "Unlimited (50+ at once)",
        others: "Limited by staff size",
      },
      {
        feature: "Tax Questions",
        prestyj: "Handles basic inquiries, routes complex ones",
        others: "Takes messages only",
      },
      {
        feature: "Appointment Scheduling",
        prestyj: "Books directly into your calendar",
        others: "Message taking, no booking",
      },
      {
        feature: "Client Information Capture",
        prestyj: "Tax situation, timeline, services needed",
        others: "Name and number only",
      },
      {
        feature: "Seasonal Scalability",
        prestyj: "Instant (no ramp-up needed)",
        others: "Requires hiring and training",
      },
      {
        feature: "After-Hours Coverage",
        prestyj: "Included, 24/7/365",
        others: "Extra charges, limited availability",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI handle complex tax questions from clients?",
      answer:
        "AI handles common questions about documents needed, appointment availability, deadlines, and basic process information. For complex tax situations or specific advice questions, AI seamlessly transfers to the appropriate accountant or schedules a consultation.",
    },
    {
      question: "What happens during peak tax season when call volume explodes?",
      answer:
        "That's exactly what AI is built for. Unlike human staff who can only handle one call at a time, AI answers unlimited calls simultaneously. Whether it's 10 calls or 1,000 calls in an hour, every caller gets immediate, helpful response.",
    },
    {
      question: "How does AI know which accountant to transfer calls to?",
      answer:
        "AI routes calls based on your firm's structure: business vs. individual tax, senior accountant vs. junior partner, specific tax specialties. We configure the routing logic to match how your firm actually operates.",
    },
    {
      question: "Can this integrate with our practice management software?",
      answer:
        "Yes. We integrate with major accounting platforms including QuickBooks ProAdvisor, Xero, Thomson Reuters, and custom CRMs. Client information, consultation bookings, and call notes sync automatically.",
    },
    {
      question: "What's the ROI for a small accounting firm?",
      answer:
        "The average client retention value for accounting firms is $2,000-5,000 annually. If AI helps you recover just one missed client per year, you've covered your entire annual service cost. Most firms recover 5-10+ clients they would have otherwise lost.",
    },
    {
      question: "Do we still need human staff if we have AI?",
      answer:
        "AI handles intake, scheduling, and basic inquiries—freeing your staff to focus on high-value tax work. Most firms find AI reduces reception workload by 80% while improving client satisfaction. Your team does what they're trained for: accounting.",
    },
  ],
  cta: {
    headline: "Never Miss a Tax Season Call Again",
    subheadline:
      "See how accounting firms use AI to handle unlimited simultaneous calls, recover missed clients, and scale through tax season without seasonal hiring. One recovered client typically pays for your entire year of service.",
    buttonText: "Book Your Demo",
    footnote: "Unlimited simultaneous calls. 24/7 coverage. Live in 1-2 weeks.",
  },
});
