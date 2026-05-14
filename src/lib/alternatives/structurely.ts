import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const structurely: AlternativePageContent = createAlternativePage({
  slug: "structurely",
  type: "direct-competitor",
  competitor: {
    name: "Structurely",
    pricing: "Starting at $299/mo",
    website: "https://structurely.com",
    description: "AI chatbot for real estate lead qualification via text and voice",
  },
  meta: {
    title: "Structurely Alternatives | Better AI for Real Estate Lead Conversion",
    description:
      "Comparing Structurely vs Prestyj. See why real estate teams choose Prestyj for AI-powered lead conversion, voice agents, and full-pipeline automation.",
    keywords: [
      "Structurely alternatives",
      "Structurely vs Prestyj",
      "AI chatbot real estate",
      "AI ISA alternative",
      "real estate AI texting",
    ],
  },
  hero: {
    badge: "Structurely Alternative",
    subheadline:
      "Structurely is a powerful chatbot for lead qualification. But if you need a complete pipeline solution — CRM, marketing automation, and transaction management — Prestyj delivers what Structurely can't.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Structurely requires a separate CRM like Follow Up Boss",
      ),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "Marketing Automation",
        prestyj: true,
        competitor: false,
        note: "Structurely has no built-in marketing automation",
      },
      {
        feature: "Transaction Management",
        prestyj: true,
        competitor: false,
        note: "Structurely is limited to lead qualification only",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$299",
      period: "/month",
      note: "AI texting & calling only",
      pros: ["Affordable entry price", "Good for basic lead qualification"],
      cons: [
        "Requires separate CRM subscription",
        "No marketing automation",
        "No transaction management",
        "Limited to lead qualification only",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "Beyond Chatbot — Full Pipeline Automation",
      description:
        "Structurely qualifies leads. Prestyj manages your entire pipeline from first contact to close with CRM, marketing, and transaction tools built in.",
    },
    {
      icon: "Database",
      title: "Built-in CRM vs. Needing Follow Up Boss Separately",
      description:
        "Stop paying for two tools. Prestyj includes a full CRM so your leads, conversations, and deals live in one place.",
    },
    {
      icon: "MessageSquare",
      title: "Voice + Text + Email + Marketing in One",
      description:
        "Structurely handles text and voice. Prestyj unifies every channel — plus marketing automation — so nothing falls through the cracks.",
    },
    {
      icon: "Target",
      title: "Lead Scoring with Deal Intelligence",
      description:
        "Prestyj scores leads using real deal data, not just conversation signals. Know which prospects are actually ready to buy.",
    },
    {
      icon: "Users",
      title: "Works for ALL Real Estate Verticals",
      description:
        "Structurely is built for agents. Prestyj serves agents, investors, wholesalers, title companies, and property managers alike.",
    },
    {
      icon: "DollarSign",
      title: "Transparent Pricing with No Hidden Add-Ons",
      description:
        "No surprise charges for extra integrations. Prestyj's pricing is clear and includes everything you need to run your pipeline.",
    },
  ],
  whenCompetitorFits: [
    "You only need AI texting/chatbot and nothing else",
    "You already have a full CRM and marketing stack you're happy with",
    "You want the cheapest possible AI ISA solution",
  ],
  whenPrestyjFits: [
    "You need more than just a chatbot — you want full pipeline management",
    "You want CRM + AI + marketing automation in one platform",
    "You manage leads across multiple real estate verticals",
    "You're tired of stitching together 3+ tools to run your business",
    "You want lead scoring and deal intelligence built in",
  ],
  relatedResources: [
    {
      href: "/best-for/real-estate-agents",
      title: "Built for Real Estate Agents",
      description: "How Prestyj serves solo agents and growing teams",
    },
    {
      href: "/solutions/lead-reactivation",
      title: "Lead Conversion Solutions",
      description: "See how Prestyj converts more leads into appointments",
    },
    {
      href: "/alternatives/human-isa",
      title: "AI vs Human ISA",
      description: "Compare AI agents to traditional inside sales agents",
    },
  ],
});
