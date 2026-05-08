import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const hubspotUsers: BestForPageContent = createBestForPage({
  slug: "hubspot-users",
  niche: {
    name: "HubSpot Users",
    shortName: "HubSpot",
    description:
      "Marketing and sales teams using HubSpot CRM for inbound lead management, marketing automation, and deal tracking",
  },
  meta: {
    title: "AI Lead Response for HubSpot Users | Prestyj",
    description:
      "Enhance your HubSpot CRM with AI that responds to inbound leads in under 60 seconds, qualifies prospects, and books meetings — syncing everything back to HubSpot automatically.",
    keywords: [
      "HubSpot AI integration",
      "AI for HubSpot",
      "HubSpot lead response automation",
      "HubSpot AI chatbot alternative",
      "HubSpot automated qualification",
      "AI appointment setting HubSpot",
    ],
  },
  hero: {
    badge: "Built for HubSpot",
    headlineAccent: "HubSpot Users",
    subheadline:
      "HubSpot captures the leads. Prestyj's AI converts them. Respond to every inbound lead in under 60 seconds, qualify automatically, and book meetings that sync straight to your HubSpot deal pipeline.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Instant Response on All HubSpot Leads",
      description:
        "Every contact submission, form fill, and landing page conversion triggers AI follow-up in under 60 seconds. Speed that no human SDR team can match at scale.",
    },
    {
      icon: "Database" as IconName,
      title: "Bi-Directional HubSpot Sync",
      description:
        "AI conversations, qualification data, and booked meetings sync to HubSpot contact and deal records in real-time. Your marketing team sees what's working; sales reps see the full context.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Beyond HubSpot Chatbot",
      description:
        "HubSpot's chatbot follows rules. Prestyj's AI has real conversations — handling objections, answering questions, and adapting to each prospect's needs to move toward a booked meeting.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Marketing Attribution Intact",
      description:
        "Prestyj preserves HubSpot's attribution data. Original campaign source, UTM parameters, and contact properties stay intact — your marketing ROI reporting stays accurate.",
    },
  ],
  painPoints: [
    {
      problem: "Inbound leads going cold before sales follows up",
      solution:
        "AI contacts every HubSpot lead in under 60 seconds. By the time a rep opens the contact record, the prospect has already been qualified and is ready for a meeting.",
    },
    {
      problem: "HubSpot chatbot can't handle complex conversations",
      solution:
        "HubSpot's rule-based chatbot hits a wall with real objections. Prestyj's AI adapts, asks follow-up questions, and handles the nuanced conversations that move deals forward.",
    },
    {
      problem: "SDRs overwhelmed by lead volume from campaigns",
      solution:
        "AI handles top-of-funnel qualification at unlimited scale. SDRs focus on warm, pre-qualified prospects instead of working through a backlog of uncontacted leads.",
    },
    {
      problem: "After-hours form submissions losing interest overnight",
      solution:
        "AI responds 24/7. A prospect downloading your ebook at 10 PM gets a personalized follow-up before they've finished reading it.",
    },
  ],
  comparison: {
    headers: ["Capability", "HubSpot + Prestyj", "HubSpot Alone"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "SDR-dependent, business hours",
      },
      {
        feature: "Conversation Quality",
        prestyj: "AI adapts to each prospect",
        others: "Rule-based chatbot or manual SDR",
      },
      {
        feature: "Qualification",
        prestyj: "Automated, consistent criteria",
        others: "Varies by SDR skill and availability",
      },
      {
        feature: "Meeting Booking",
        prestyj: "AI books directly to rep calendars",
        others: "Manual scheduling or chatbot handoff",
      },
      {
        feature: "Campaign Attribution",
        prestyj: "Fully preserved in HubSpot",
        others: "N/A — native HubSpot",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited leads simultaneously",
        others: "Limited by SDR headcount",
      },
      {
        feature: "After-Hours",
        prestyj: "Full qualification and booking",
        others: "Chatbot or email autoresponder",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with HubSpot?",
      answer:
        "Prestyj connects via HubSpot API and webhooks. When a contact is created — from forms, chat, ads, or imports — Prestyj receives it instantly and begins AI follow-up. All data syncs back to contact records, deals, and activity timelines in HubSpot.",
    },
    {
      question: "Does Prestyj work with HubSpot Marketing Hub and Sales Hub?",
      answer:
        "Yes. Prestyj integrates with both Marketing Hub and Sales Hub. Marketing-generated leads get instant AI response; sales contacts get AI-driven outreach and meeting booking. Data flows across both hubs seamlessly.",
    },
    {
      question: "How is Prestyj different from HubSpot's Sequences tool?",
      answer:
        "HubSpot Sequences sends automated emails on a schedule. Prestyj's AI has real-time, two-way conversations — adapting to responses, handling objections, and booking meetings during the interaction. Sequences are follow-up; Prestyj is front-line engagement.",
    },
    {
      question: "Will Prestyj mess up my HubSpot lead scoring?",
      answer:
        "No. Prestyj enriches your lead scoring by adding engagement data from AI conversations. Prospects who respond to AI with high-intent signals get higher scores, making your existing lead scoring model more accurate.",
    },
    {
      question: "Does it preserve marketing attribution from campaigns?",
      answer:
        "Absolutely. Prestyj doesn't overwrite original source data. UTM parameters, campaign associations, and first-touch attribution stay intact in HubSpot. Your marketing team's reporting remains accurate.",
    },
  ],
  cta: {
    headline: "Turn HubSpot Leads Into Booked Meetings",
    subheadline:
      "Instant response, automated qualification, more closed deals. See how AI + HubSpot accelerates your revenue pipeline — without adding headcount.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for marketing and sales teams on HubSpot.",
  },
});
