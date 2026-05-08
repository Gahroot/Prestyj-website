import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const closeUsers: BestForPageContent = createBestForPage({
  slug: "close-users",
  niche: {
    name: "Close Users",
    shortName: "Close",
    description:
      "Inside sales teams using Close CRM for calling, emailing, and SMS-based pipeline management",
  },
  meta: {
    title: "AI Lead Response for Close CRM Users | Prestyj",
    description:
      "Enhance your Close CRM with AI that responds to leads in under 60 seconds, qualifies via call and SMS, and books meetings — syncing everything back to Close automatically.",
    keywords: [
      "Close CRM AI integration",
      "AI for Close CRM",
      "Close lead response automation",
      "Close AI sales assistant",
      "Close automated calling",
      "AI appointment setting Close CRM",
    ],
  },
  hero: {
    badge: "Built for Close CRM",
    headlineAccent: "Close CRM Users",
    subheadline:
      "Close is built for speed. Prestyj's AI makes it faster. Respond to every lead in under 60 seconds, qualify via call and SMS, and book meetings that sync straight to your Close pipeline — 24/7.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "AI-Powered Calling on Close Leads",
      description:
        "AI makes phone calls to new Close leads within 60 seconds of creation. Multi-channel outreach — call, SMS, email — matches how Close users already work.",
    },
    {
      icon: "Database" as IconName,
      title: "Seamless Close Activity Sync",
      description:
        "Every AI call, text, and conversation note syncs back to Close activity timelines. Reps see the full engagement history before they pick up the phone.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "SMS-First Qualification",
      description:
        "Close users love SMS. Prestyj's AI qualifies leads via text — fast, convenient, and effective. Prospects who prefer SMS get engaged on their terms.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "More Calls with Pre-Qualified Leads",
      description:
        "AI handles initial outreach so your Close power dialers focus on pre-qualified, appointment-ready prospects. More closes per hour of dialing.",
    },
  ],
  painPoints: [
    {
      problem: "Leads going cold before reps can make the first call",
      solution:
        "AI calls every new Close lead in under 60 seconds. When reps check their pipeline, they find prospects who are already engaged and interested — not cold contacts.",
    },
    {
      problem: "Reps burning out on unqualified dials",
      solution:
        "AI pre-qualifies leads before involving your closers. Reps spend their energy on prospects who meet your criteria — no more wasted dials on tire-kickers.",
    },
    {
      problem: "After-hours leads getting lost in the morning shuffle",
      solution:
        "AI responds 24/7 via call and SMS. Overnight leads get engaged immediately; morning pipeline reviews show activity, not blanks.",
    },
    {
      problem: "Scaling outreach means hiring more SDRs",
      solution:
        "AI handles unlimited concurrent outreach. Scale from 100 to 10,000 leads without adding headcount — fixed cost, unlimited capacity.",
    },
  ],
  comparison: {
    headers: ["Capability", "Close + Prestyj", "Close Alone"],
    rows: [
      {
        feature: "First Call Speed",
        prestyj: "Under 60 seconds, automated",
        others: "Rep-dependent, queued in dial list",
      },
      {
        feature: "After-Hours Outreach",
        prestyj: "Full AI calls and SMS, 24/7",
        others: "Queue for next business day",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated before rep involvement",
        others: "Manual rep qualification calls",
      },
      {
        feature: "Meeting Booking",
        prestyj: "AI books to rep calendars directly",
        others: "Manual scheduling during calls",
      },
      {
        feature: "Concurrent Capacity",
        prestyj: "Unlimited simultaneous calls",
        others: "Limited by rep headcount",
      },
      {
        feature: "Cost at Scale",
        prestyj: "Fixed monthly cost",
        others: "Per-SDR salary + commission",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with Close?",
      answer:
        "Prestyj connects via Close API. When leads are created — from web forms, integrations, or imports — Prestyj receives them and initiates AI outreach. All calls, SMS, and conversation data sync back to Close activities and lead records.",
    },
    {
      question: "Does it work with Close's built-in calling and SMS?",
      answer:
        "Prestyj complements Close's native communication tools. AI handles the initial outreach and qualification, then hands off warm leads to reps who use Close's built-in dialer for closing conversations.",
    },
    {
      question: "Can AI use Close's Smart Views for targeting?",
      answer:
        "Yes. Prestyj can target leads based on Close Smart Views — reaching out to specific segments, re-engaging stale leads, or following up with no-response contacts based on your existing filters.",
    },
    {
      question: "How does AI handle leads that don't answer the phone?",
      answer:
        "AI follows a multi-touch cadence — call, then SMS, then email — configured to your preferences. No-answer leads get an automated text within minutes, keeping the conversation alive across channels.",
    },
    {
      question: "Will this work with my Close workflows and automations?",
      answer:
        "Absolutely. Prestyj triggers can fire Close automations — moving leads between statuses, assigning to reps, or starting email sequences based on AI qualification outcomes.",
    },
  ],
  cta: {
    headline: "Supercharge Your Close Pipeline",
    subheadline:
      "AI-powered outreach that fills your Close pipeline with qualified meetings. See how every lead gets contacted in under 60 seconds — 24/7.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for inside sales teams on Close.",
  },
});
