import type { AlternativePageContent } from "./types";
import { createAlternativePage } from "@/lib/content-factory";

export const lofty: AlternativePageContent = createAlternativePage({
  slug: "lofty",
  type: "integration-partner",
  competitor: {
    name: "Lofty (formerly Chime)",
    shortName: "Lofty",
    pricing: "$500-1,500+/mo",
    website: "https://golofty.com",
    description:
      "AI-powered CRM platform with lead generation, texting, and automation for real estate",
  },
  meta: {
    title: "Lofty Alternative | Add AI Voice Calling to Lofty CRM | Prestyj",
    description:
      "Not looking to replace Lofty? Add AI-powered instant voice response and lead reactivation to your existing Lofty setup. Voice calling is the missing piece.",
    keywords: [
      "lofty alternative",
      "chime alternative",
      "lofty CRM alternative",
      "lofty AI",
      "chime CRM alternative",
      "lofty integration",
      "real estate CRM AI voice",
      "lofty voice calling",
    ],
  },
  hero: {
    badge: "Lofty Integration",
    subheadline:
      "You don't need to replace Lofty. Add instant AI voice response and dead lead reactivation while keeping the CRM you already have.",
  },
  industryStats: "reactivation",
  comparison: {
    features: [
      {
        feature: "CRM & Lead Management",
        prestyj: false,
        competitor: true,
        note: "Lofty excels at this—keep using it",
      },
      {
        feature: "AI Text Messaging",
        prestyj: false,
        competitor: true,
        note: "Lofty has strong text automation",
      },
      {
        feature: "Instant AI Voice Calling",
        prestyj: true,
        competitor: false,
        note: "Add sub-60-second voice response to your Lofty leads",
      },
      {
        feature: "Dead Lead Reactivation",
        prestyj: true,
        competitor: false,
        note: "Revive your cold Lofty database with AI voice outreach",
      },
      {
        feature: "24/7 Voice Engagement",
        prestyj: true,
        competitor: false,
        note: "AI voice responds nights and weekends",
      },
      {
        feature: "Lead Generation",
        prestyj: false,
        competitor: true,
        note: "Lofty provides lead gen tools",
      },
      {
        feature: "IDX Website",
        prestyj: false,
        competitor: true,
      },
      {
        feature: "AI Appointment Booking",
        prestyj: true,
        competitor: false,
        note: "Voice AI automatically books qualified leads to your calendar",
      },
    ],
    competitorPricing: {
      price: "$500-1,500+",
      period: "/month",
      note: "Powerful CRM with AI texting, but voice calling is missing",
      pros: [
        "AI-powered texting and automation",
        "Lead generation and marketing tools",
        "IDX website included",
        "Comprehensive CRM features",
      ],
      cons: [
        "No built-in AI voice calling",
        "Text-only automation misses phone-first leads",
        "Dead leads require manual outreach",
        "High price point for full features",
      ],
    },
    prestyjPricingOverrides: {
      price: "Custom pricing",
      note: "Integrates with your Lofty CRM",
      pros: [
        "Instant AI voice response for Lofty leads",
        "Dead lead reactivation via voice campaigns",
        "24/7 automated voice engagement",
        "Syncs appointments back to Lofty",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "Voice Calling is the Missing Piece",
      description:
        "Lofty handles text well, but many leads want to talk. Add AI voice calling to engage phone-first buyers instantly.",
    },
    {
      icon: "Zap",
      title: "Instant Voice Response",
      description:
        "When a lead hits Lofty, AI calls them in under 60 seconds. No more speed-to-lead problems for voice engagement.",
    },
    {
      icon: "RefreshCw",
      title: "Revive Your Dead Database",
      description:
        "Those thousands of old leads in Lofty? AI voice outreach can re-engage them and find the ones ready to transact now.",
    },
    {
      icon: "Handshake",
      title: "Seamless Integration",
      description:
        "Prestyj works alongside Lofty—qualified leads and booked appointments sync back to your CRM.",
    },
  ],
  whenCompetitorFits: [
    "You need a CRM with lead generation and marketing (keep using Lofty!)",
    "You want AI text messaging automation",
    "You need an IDX website",
    "Your team is already trained on Lofty workflows",
  ],
  whenPrestyjFits: [
    "You want to add instant AI voice calling to your Lofty leads",
    "You have dead leads in Lofty you want to reactivate via voice",
    "You need 24/7 voice engagement without hiring staff",
    "Your market prefers phone calls over text",
    "You're happy with Lofty but want to add voice AI",
  ],
  relatedResources: [
    {
      href: "/alternatives/follow-up-boss",
      title: "Prestyj + Follow Up Boss",
      description: "Add AI response to FUB",
    },
    {
      href: "/solutions/lead-reactivation",
      title: "Lead Reactivation",
      description: "How we revive dead CRM databases",
    },
    {
      href: "/solutions/speed-to-lead",
      title: "Speed to Lead",
      description: "Why instant response wins deals",
    },
  ],
  cta: {
    headline: "Ready to Add Voice AI to Your Lofty CRM?",
    subheadline:
      "Keep the CRM you love. Add the AI voice response you're missing. See how Prestyj integrates with Lofty.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote:
      "Works alongside your existing Lofty setup. No migration required.",
  },
});
