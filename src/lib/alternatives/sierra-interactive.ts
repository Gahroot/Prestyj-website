import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const sierraInteractive: AlternativePageContent = createAlternativePage({
  slug: "sierra-interactive",
  type: "direct-competitor",
  competitor: {
    name: "Sierra Interactive",
    pricing: "Starting at $399/mo",
    website: "https://sierrainteractive.com",
    description: "Real estate CRM and lead management platform for teams",
  },
  meta: {
    title: "Sierra Interactive Alternatives | AI-Powered Real Estate CRM",
    description:
      "Sierra Interactive vs Prestyj comparison. See why real estate teams switch to Prestyj for AI-powered lead conversion, autonomous AI agents, and smarter pipeline automation.",
    keywords: [
      "Sierra Interactive alternatives",
      "Sierra Interactive vs Prestyj",
      "real estate CRM with AI",
      "AI lead management platform",
      "real estate team automation",
    ],
  },
  hero: {
    badge: "Sierra Interactive Alternative",
    subheadline:
      "Sierra Interactive offers a solid CRM and team management tools, but its AI is limited to basic drip campaigns. Prestyj replaces outdated automation with autonomous AI agents that qualify leads, respond instantly, and book appointments 24/7.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_TEXT,
        false,
        "Sierra has basic auto-responders only"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_VOICE,
        false,
        "No voice AI capabilities"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.RESPONSE_24_7,
        false,
        "Limited to scheduled drip campaigns"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.APPOINTMENT_BOOKING,
        false,
        "No AI-powered appointment scheduling"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.LEAD_QUALIFICATION,
        false,
        "Basic lead scoring, no AI qualification"
      ),
      {
        feature: "Team Management Tools",
        prestyj: true,
        competitor: true,
        note: "Sierra has strong team features; Prestyj matches with AI-enhanced routing",
      },
      {
        feature: "Autonomous AI Agents",
        prestyj: true,
        competitor: false,
        note: "Sierra relies on traditional drip campaigns",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$399",
      period: "/month",
      note: "CRM and lead management focused",
      pros: ["Good team management features", "Solid CRM for real estate teams"],
      cons: [
        "AI is limited to basic drip campaigns",
        "No autonomous AI agents",
        "No voice AI for lead response",
        "Traditional automation, not true AI",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Brain",
      title: "Autonomous AI Agents vs. Basic Drip Campaigns",
      description:
        "Sierra's drip campaigns send the same message to everyone. Prestyj's AI agents have real conversations, answer questions, and adapt to each lead's needs.",
    },
    {
      icon: "Clock",
      title: "AI That Qualifies Leads 24/7",
      description:
        "Don't let leads wait for business hours. Prestyj's AI responds instantly at 2 AM, qualifies the prospect, and books the appointment — no human needed.",
    },
    {
      icon: "MessageSquare",
      title: "Built-in Marketing Automation",
      description:
        "Prestyj includes intelligent email and SMS campaigns that adapt based on lead behavior. Sierra's marketing is basic and static.",
    },
    {
      icon: "Phone",
      title: "Voice AI for Immediate Lead Response",
      description:
        "When a lead calls, Prestyj answers with a human-like AI voice agent. Sierra has no voice AI — missed calls become missed deals.",
    },
    {
      icon: "Target",
      title: "Smarter Lead Scoring & Routing",
      description:
        "Prestyj's AI scores leads in real time and routes hot prospects to the right agent instantly. Sierra's routing is rules-based and slower.",
    },
    {
      icon: "Zap",
      title: "Modern Platform with Faster Innovation",
      description:
        "Prestyj ships new AI capabilities weekly. Sierra's feature set evolves slowly, leaving you with yesterday's technology.",
    },
  ],
  whenCompetitorFits: [
    "You want a traditional CRM with reliable team management features",
    "You prefer manual follow-up and don't trust AI with your leads",
    "You're already deeply integrated with Sierra's ecosystem",
  ],
  whenPrestyjFits: [
    "You want AI agents that actually converse with leads, not just send drips",
    "You need 24/7 lead response without hiring night staff",
    "You want voice AI to capture every incoming call",
    "You prefer a platform that innovates quickly with new AI features",
    "You want intelligent lead routing based on real conversation data",
  ],
  relatedResources: [
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate Teams",
      description: "How Prestyj scales with teams of any size",
    },
    {
      href: "/solutions/lead-conversion",
      title: "Lead Conversion Solutions",
      description: "See how Prestyj converts more leads into appointments",
    },
    {
      href: "/alternatives/follow-up-boss",
      title: "Follow Up Boss Alternatives",
      description: "Compare other CRM platforms for real estate teams",
    },
  ],
});
