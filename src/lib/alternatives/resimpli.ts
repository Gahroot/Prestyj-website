import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const resimpli: AlternativePageContent = createAlternativePage({
  slug: "resimpli",
  type: "direct-competitor",
  competitor: {
    name: "REsimpli",
    pricing: "Starting at $149/mo",
    website: "https://resimpli.com",
    description: "All-in-one software for real estate investors and wholesalers",
  },
  meta: {
    title: "REsimpli Alternatives | Better AI for Real Estate Investors",
    description:
      "REsimpli vs Prestyj comparison. See why investors and wholesalers choose Prestyj for AI-powered deal analysis, lead automation, and smarter wholesaling workflows.",
    keywords: [
      "REsimpli alternatives",
      "REsimpli vs Prestyj",
      "real estate investor software",
      "wholesaling CRM alternative",
      "AI for real estate investors",
    ],
  },
  hero: {
    badge: "REsimpli Alternative",
    subheadline:
      "REsimpli is solid for wholesalers with CRM, skip tracing, and dialer tools. But its AI is basic and it's limited to the wholesaling niche. Prestyj brings advanced AI agents, cross-vertical intelligence, and superior automation to investors and beyond.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_TEXT,
        false,
        "REsimpli has basic auto-responders only"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_VOICE,
        false,
        "Dialer is manual, not AI-powered"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.RESPONSE_24_7,
        false,
        "No autonomous AI response"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.BUILT_IN_CRM, true),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, false),
      buildAlternativeFeature(
        STANDARD_FEATURES.LEAD_QUALIFICATION,
        false,
        "Basic lead tracking only"
      ),
      {
        feature: "Skip Tracing",
        prestyj: false,
        competitor: true,
        note: "REsimpli includes skip tracing; Prestyj integrates with skip trace providers",
      },
      {
        feature: "Deal Analysis & Comps",
        prestyj: true,
        competitor: true,
        note: "REsimpli has built-in comps; Prestyj uses AI-powered deal intelligence",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$149",
      period: "/month",
      note: "Good value for wholesalers but limited AI",
      pros: ["Affordable for investors", "Includes skip tracing and dialer"],
      cons: [
        "AI is basic and limited",
        "Focused only on wholesaling niche",
        "No autonomous lead response",
        "No voice AI capabilities",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Brain",
      title: "More Advanced AI Agents",
      description:
        "REsimpli's automation is rules-based. Prestyj's AI agents understand context, handle objections, and close deals with human-like conversation.",
    },
    {
      icon: "Users",
      title: "Works for Wholesaling AND Investing AND Agents",
      description:
        "REsimpli is wholesaling-only. Prestyj serves investors, wholesalers, agents, title companies, and property managers with one platform.",
    },
    {
      icon: "Zap",
      title: "Better Lead Conversion Automation",
      description:
        "Stop manually dialing and texting. Prestyj's AI responds instantly, qualifies leads, and books appointments while you focus on deals.",
    },
    {
      icon: "Target",
      title: "Cross-Vertical Intelligence",
      description:
        "Prestyj learns from every vertical — wholesale, retail, rental — giving you insights REsimpli's siloed data can't match.",
    },
    {
      icon: "MessageSquare",
      title: "Superior Follow-Up Automation",
      description:
        "REsimpli's follow-up is drip-based. Prestyj uses intelligent, context-aware follow-up that adapts to each lead's behavior and responses.",
    },
    {
      icon: "BarChart3",
      title: "More Comprehensive Analytics",
      description:
        "Track conversion rates, AI performance, pipeline velocity, and ROI across all your channels — not just dialer metrics.",
    },
  ],
  whenCompetitorFits: [
    "You're a wholesaler who only needs skip tracing and a basic dialer",
    "You're on a tight budget and $149/mo is your max",
    "You don't need AI — manual follow-up works fine for your volume",
  ],
  whenPrestyjFits: [
    "You want AI to handle lead response and qualification automatically",
    "You operate across multiple real estate verticals",
    "You're ready to scale beyond manual dialing and texting",
    "You want intelligent follow-up that adapts to each lead",
    "You need analytics that show true pipeline performance",
  ],
  relatedResources: [
    {
      href: "/best-for/real-estate-investors",
      title: "Built for Real Estate Investors",
      description: "How Prestyj serves investors and wholesalers",
    },
    {
      href: "/solutions/lead-conversion",
      title: "Lead Conversion Solutions",
      description: "See how Prestyj converts more leads into deals",
    },
    {
      href: "/alternatives/structurely",
      title: "Structurely Alternatives",
      description: "Compare other AI platforms for real estate",
    },
  ],
});
