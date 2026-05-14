import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const followUpBoss: AlternativePageContent = createAlternativePage({
  slug: "follow-up-boss",
  type: "direct-competitor",
  competitor: {
    name: "Follow Up Boss",
    shortName: "FUB",
    pricing: "Starting at $69/mo per user",
    website: "https://followupboss.com",
    description: "Popular real estate CRM with 250+ integrations but no native AI agents",
  },
  meta: {
    title: "Follow Up Boss Alternatives | AI-Powered Real Estate CRM",
    description:
      "Follow Up Boss vs Prestyj comparison. See why teams switch from FUB to Prestyj for AI-powered lead conversion, native AI agents, and automated pipeline management.",
    keywords: [
      "Follow Up Boss alternatives",
      "Follow Up Boss vs Prestyj",
      "FUB alternative",
      "AI CRM real estate",
      "real estate CRM with AI",
    ],
  },
  hero: {
    badge: "Follow Up Boss Alternative",
    subheadline:
      "Follow Up Boss is a great CRM — but it relies on third-party integrations for AI. Prestyj combines a powerful CRM with native AI agents, marketing automation, and transaction coordination in one platform.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, false, "Requires third-party integration"),
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_VOICE,
        false,
        "Requires third-party integration",
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.RESPONSE_24_7,
        false,
        "Only with added AI integration",
      ),
      buildAlternativeFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, false, "Requires AI add-on"),
      {
        feature: "Marketing Automation",
        prestyj: true,
        competitor: false,
        note: "FUB has no native marketing automation",
      },
      {
        feature: "Transaction Coordination",
        prestyj: true,
        competitor: false,
        note: "FUB focuses on CRM and follow-up only",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$69",
      period: "/user/month",
      note: "CRM only — AI tools cost extra",
      pros: ["Excellent CRM with 250+ integrations", "Great team collaboration features"],
      cons: [
        "No native AI agents — requires bolt-on tools",
        "No built-in marketing automation",
        "No transaction coordination",
        "Per-user pricing adds up for teams",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "Native AI Agents vs. Bolt-On Integrations",
      description:
        "Stop patching together third-party AI tools. Prestyj's AI agents are built directly into the platform — no integrations, no breakage, no extra cost.",
    },
    {
      icon: "Brain",
      title: "AI That Works IN Your CRM, Not Alongside It",
      description:
        "Prestyj's AI lives inside your CRM, automatically logging conversations, updating lead scores, and moving deals through your pipeline.",
    },
    {
      icon: "Puzzle",
      title: "No Need for 5+ Tool Subscriptions",
      description:
        "FUB + AI tool + marketing tool + transaction tool = $$$. Prestyj replaces your entire stack with one platform and one subscription.",
    },
    {
      icon: "MessageSquare",
      title: "Marketing Automation Built-In",
      description:
        "Prestyj includes automated email sequences, SMS campaigns, and retargeting — no need for a separate marketing platform.",
    },
    {
      icon: "ClipboardList",
      title: "Transaction Coordination Included",
      description:
        "Manage deals from contract to close with built-in transaction management. FUB stops at follow-up; Prestyj sees it through.",
    },
    {
      icon: "Users",
      title: "One Platform vs. CRM + AI Tool + Marketing Tool",
      description:
        "Simplify your tech stack. One login, one bill, one support team — and everything works together seamlessly.",
    },
  ],
  whenCompetitorFits: [
    "You love your current CRM and only need basic follow-up",
    "You already have dedicated AI, marketing, and transaction tools",
    "You want the cheapest CRM and don't mind managing multiple subscriptions",
  ],
  whenPrestyjFits: [
    "You want native AI agents that work inside your CRM",
    "You're tired of managing 4+ separate tools and bills",
    "You need marketing automation and transaction management included",
    "You want a single platform your whole team can learn quickly",
    "You value done-for-you setup over DIY integrations",
  ],
  relatedResources: [
    {
      href: "/best-for/real-estate-teams",
      title: "Built for Real Estate Teams",
      description: "How Prestyj scales with teams of any size",
    },
    {
      href: "/solutions/sales-automation",
      title: "Sales Automation",
      description: "See how Prestyj automates your entire sales pipeline",
    },
    {
      href: "/alternatives/structurely",
      title: "Structurely Alternatives",
      description: "Compare other AI chatbot platforms for real estate",
    },
  ],
});
