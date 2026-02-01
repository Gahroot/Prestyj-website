import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const ylopo: AlternativePageContent = createAlternativePage({
  slug: "ylopo",
  type: "direct-competitor",
  competitor: {
    name: "Ylopo",
    pricing: "$600-1,200/mo + ad spend",
    website: "https://ylopo.com",
    description:
      "AI-powered lead generation and nurturing platform for real estate teams",
  },
  meta: {
    title: "Best Ylopo Alternative for Real Estate Agents | Prestyj",
    description:
      "Looking for a Ylopo alternative? Compare Prestyj vs Ylopo: simpler pricing, built-in CRM, no required ad spend. See why agents are switching.",
    keywords: [
      "ylopo alternative",
      "ylopo vs prestyj",
      "ylopo competitors",
      "real estate AI platform",
      "AI lead nurturing",
    ],
  },
  hero: {
    badge: "Ylopo Alternative",
    subheadline:
      "Both platforms offer AI-powered lead engagement for real estate professionals. Here's an honest comparison to help you make the right choice for your business.",
  },
  industryStats: "standard", // Uses STANDARD_INDUSTRY_STATS automatically
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Ylopo requires separate CRM integration"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, true),
      {
        feature: "No Ad Spend Required",
        prestyj: true,
        competitor: false,
        note: "Ylopo pricing requires additional ad spend",
      },
      buildAlternativeFeature(STANDARD_FEATURES.CALENDAR_INTEGRATION, true),
    ],
    competitorPricing: {
      price: "$395",
      period: "/month",
      note: "+ Required ad spend",
      pros: ["AI trained on 50M+ conversations"],
      cons: [
        "Additional ad spend required on top of monthly fee",
        "Separate CRM integration costs may apply",
      ],
    },
    // prestyjPricing automatically built with defaults (cons: [])
  },
  whySwitch: [
    {
      icon: "DollarSign",
      title: "Simpler Pricing Structure",
      description:
        "No required ad spend on top of monthly fees. Prestyj offers transparent, custom pricing tailored to your needs.",
    },
    {
      icon: "Zap",
      title: "All-in-One Platform",
      description:
        "Built-in CRM eliminates the need for separate integrations. Everything you need in one place.",
    },
    {
      icon: "Clock",
      title: "Faster Implementation",
      description:
        "Get up and running quickly without complex third-party CRM setup and configuration.",
    },
    {
      icon: "Users",
      title: "Dedicated Support",
      description:
        "Personalized onboarding and ongoing support to ensure your success with the platform.",
    },
  ],
  whenCompetitorFits: [
    "You already have a CRM you love and want to keep",
    "You're running large-scale paid advertising campaigns",
    "You need their specific IDX website integration",
    "You're part of a large team that's already using Ylopo",
  ],
  whenPrestyjFits: [
    "You want an all-in-one solution without juggling multiple tools",
    "You're tired of paying for ad spend on top of platform fees",
    "You want to reactivate your existing dead leads (not just generate new ones)",
    "You need instant AI response without complex setup",
    "You're a solo agent or small team looking for simplicity",
  ],
  relatedResources: [
    {
      href: "/alternatives/human-isa",
      title: "AI vs Human ISA",
      description: "Compare AI agents to traditional inside sales agents",
    },
    {
      href: "/blog/why-leads-go-cold",
      title: "Why 80% of Leads Go Cold",
      description: "The data behind lead response times",
    },
    {
      href: "/results",
      title: "See Real Results",
      description: "Case studies from agents using Prestyj",
    },
  ],
  // CTA automatically uses STANDARD_DEMO template
});
