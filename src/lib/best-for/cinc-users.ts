import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const cincUsers: BestForPageContent = createBestForPage({
  slug: "cinc-users",
  niche: {
    name: "CINC Users",
    shortName: "CINC",
    description: "Real estate teams and brokerages using CINC who need AI-powered instant lead response",
  },
  meta: {
    title: "AI Lead Response for CINC Users | Prestyj",
    description:
      "Prestyj adds AI-powered instant lead response to your CINC platform. Respond to every CINC lead in under 60 seconds, qualify buyers and sellers, and book appointments automatically.",
    keywords: [
      "CINC AI lead follow up",
      "AI for CINC users",
      "CINC lead response automation",
      "CINC AI integration real estate",
      "enhance CINC with AI",
      "CINC real estate lead conversion",
    ],
  },
  hero: {
    badge: "Built for CINC Users",
    headlineAccent: "CINC Users",
    subheadline:
      "CINC generates the leads. Prestyj converts them. AI responds to every CINC lead in under 60 seconds — qualifying, engaging, and booking appointments 24/7.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Instant Response on CINC Leads",
      description:
        "Every lead that comes through your CINC platform gets an AI response in under 60 seconds — from paid ads, IDX registrations, or any lead source.",
    },
    {
      icon: "Database" as IconName,
      title: "CINC CRM Sync",
      description:
        "All Prestyj conversations, notes, and booked appointments sync back into your CINC CRM. Your team works in CINC; Prestyj works behind the scenes.",
    },
    {
      icon: "Target" as IconName,
      title: "Smarter Lead Qualification",
      description:
        "AI qualifies every CINC lead before your agents engage — filtering out lookers and surfacing serious buyers and sellers ready for a conversation.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Get More from CINC's Ad Campaigns",
      description:
        "CINC runs your Google PPC ads. Prestyj makes sure every lead from those campaigns gets an instant response — maximizing the ROI on your CINC investment.",
    },
  ],
  painPoints: [
    {
      problem: "CINC leads not converting despite your ad spend",
      solution:
        "Speed to lead is the #1 driver of conversion from paid search leads. AI responds in under 60 seconds to every CINC lead — the moment they submit.",
    },
    {
      problem: "Agents too slow to follow up on CINC lead alerts",
      solution:
        "AI acts before agents even see the notification. By the time your agent gets the alert, AI has already qualified the lead and potentially booked an appointment.",
    },
    {
      problem: "CINC's lead pond going stagnant",
      solution:
        "Reactivation campaigns reach out to your entire dormant CINC database — re-engaging leads who registered but never converted.",
    },
    {
      problem: "Leads on CINC going to competitors because response was slow",
      solution:
        "Google PPC leads are searching right now and will call whoever answers first. AI guarantees you're always first.",
    },
    {
      problem: "No way to handle night and weekend CINC leads",
      solution:
        "AI works 24/7. A Sunday afternoon lead from your CINC Google campaign gets the same instant response as a Tuesday morning lead.",
    },
  ],
  comparison: {
    headers: ["Capability", "CINC + Prestyj", "CINC Alone"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, always",
        others: "Depends on agent availability",
      },
      {
        feature: "Conversational AI",
        prestyj: "Full 2-way AI engagement",
        others: "Automated email drip only",
      },
      {
        feature: "Appointment Booking",
        prestyj: "AI books directly",
        others: "Agent must close the appointment",
      },
      {
        feature: "Weekend Coverage",
        prestyj: "Full 24/7",
        others: "Manual, often missed",
      },
      {
        feature: "Lead Reactivation",
        prestyj: "Automated campaigns to cold leads",
        others: "Manual effort required",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj connect to my CINC account?",
      answer:
        "We integrate via webhook or Zapier. Every new CINC lead triggers an instant AI follow-up. Conversation data and appointment bookings sync back into your CINC CRM.",
    },
    {
      question: "Will Prestyj conflict with CINC's built-in automations?",
      answer:
        "No. Prestyj handles the conversational follow-up layer that CINC's automations don't cover. CINC's email sequences and behavioral tracking continue as normal.",
    },
    {
      question: "Can Prestyj handle leads from all CINC sources — PPC, IDX, and referrals?",
      answer:
        "Yes. Any lead that enters your CINC system can trigger Prestyj's AI follow-up. We can also set rules to only engage certain lead sources if preferred.",
    },
    {
      question: "How does lead routing work for team accounts on CINC?",
      answer:
        "We mirror your CINC routing rules or set up separate AI routing logic. Each agent can have their leads handled according to their own preferences.",
    },
    {
      question: "What's the typical ROI for CINC users who add Prestyj?",
      answer:
        "CINC users typically see a 2–3x improvement in lead-to-appointment rate within the first 60 days. One additional closing per month from improved follow-up typically covers the cost many times over.",
    },
  ],
  cta: {
    headline: "Convert More CINC Leads with AI",
    subheadline:
      "See how Prestyj adds AI-powered instant follow-up to your CINC platform — turning more of your ad spend into booked appointments. Book a demo today.",
    buttonText: "Book a Demo",
  },
});
