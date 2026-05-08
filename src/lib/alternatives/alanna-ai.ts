import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const alannaAi: AlternativePageContent = createAlternativePage({
  slug: "alanna-ai",
  type: "direct-competitor",
  competitor: {
    name: "Alanna.ai",
    pricing: "Custom pricing",
    website: "https://alanna.ai",
    description: "AI assistant for title companies — text-based communication & document processing",
  },
  meta: {
    title: "Alanna.ai Alternatives | Better AI for Title Companies",
    description:
      "Alanna.ai vs Prestyj comparison. See why title companies choose Prestyj for more comprehensive AI automation beyond just chat-based communication.",
    keywords: [
      "Alanna.ai alternatives",
      "Alanna.ai vs Prestyj",
      "title company AI",
      "title automation software",
      "AI for title agents",
    ],
  },
  hero: {
    badge: "Alanna.ai Alternative",
    subheadline:
      "Alanna.ai handles text-based communication for title companies, but it's limited to one channel and one vertical. Prestyj offers voice + text + email AI agents, cross-vertical capabilities, and full pipeline automation for title and beyond.",
  },
  industryStats: "standard",
  comparison: {
    features: [
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_TEXT,
        true,
        "Alanna.ai is text-only"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_VOICE,
        false,
        "No voice AI capabilities"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.RESPONSE_24_7,
        true,
        "Limited to text channel only"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Alanna.ai integrates with title production systems, not a true CRM"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.APPOINTMENT_BOOKING,
        false,
        "No appointment scheduling"
      ),
      buildAlternativeFeature(
        STANDARD_FEATURES.LEAD_QUALIFICATION,
        false,
        "Focused on order updates, not lead conversion"
      ),
      {
        feature: "Document Generation",
        prestyj: true,
        competitor: true,
        note: "Alanna.ai specializes in document automation for title",
      },
      {
        feature: "Cross-Vertical Support",
        prestyj: true,
        competitor: false,
        note: "Alanna.ai is title-only",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "Custom",
      period: "pricing",
      note: "Title-focused with opaque enterprise pricing",
      pros: ["Deep title industry expertise", "Strong document automation"],
      cons: [
        "Text-only — no voice AI",
        "Limited to title companies only",
        "Custom pricing is opaque",
        "No true CRM or pipeline management",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "Voice + Text + Email AI Agents",
      description:
        "Alanna.ai is text-only. Prestyj gives your title company AI agents on every channel — voice calls, SMS, and email — so no prospect or client is missed.",
    },
    {
      icon: "Users",
      title: "Works Across Title AND Other RE Verticals",
      description:
        "If your business touches multiple verticals — title, escrow, referrals — Prestyj serves them all. Alanna.ai is strictly title-only.",
    },
    {
      icon: "Zap",
      title: "More Comprehensive Automation",
      description:
        "Beyond order updates, Prestyj automates lead intake, referral follow-up, appointment scheduling, and pipeline management for title companies.",
    },
    {
      icon: "Puzzle",
      title: "Better Integration Ecosystem",
      description:
        "Prestyj connects with your existing CRM, calendar, and marketing tools. Alanna.ai's integrations are limited to title production systems.",
    },
    {
      icon: "Shield",
      title: "Advanced Fraud Detection Capabilities",
      description:
        "Prestyj's AI can flag suspicious activity and verify identities during conversations — adding a layer of security Alanna.ai doesn't provide.",
    },
    {
      icon: "ClipboardList",
      title: "Full Pipeline Automation Not Just Communication",
      description:
        "Alanna.ai sends updates. Prestyj manages your entire pipeline — from referral intake to closing — with AI handling every step.",
    },
  ],
  whenCompetitorFits: [
    "You're a title company that only needs text-based order updates",
    "You already have a full tech stack and just want a chatbot add-on",
    "You want a vendor with deep, narrow title industry expertise",
  ],
  whenPrestyjFits: [
    "You want voice AI for incoming calls and lead response",
    "Your business serves title plus other real estate verticals",
    "You need full pipeline automation, not just communication",
    "You want AI that handles referrals, scheduling, and follow-up",
    "You prefer transparent pricing over custom enterprise quotes",
  ],
  relatedResources: [
    {
      href: "/best-for/title-companies",
      title: "Built for Title Companies",
      description: "How Prestyj serves title and escrow businesses",
    },
    {
      href: "/solutions/pipeline-automation",
      title: "Pipeline Automation",
      description: "See how Prestyj automates your entire workflow",
    },
    {
      href: "/alternatives/structurely",
      title: "Structurely Alternatives",
      description: "Compare other AI communication platforms",
    },
  ],
});
