import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const retell: AlternativePageContent = createAlternativePage({
  slug: "retell",
  type: "direct-competitor",
  competitor: {
    name: "Retell AI",
    shortName: "Retell",
    pricing: "$0.07-0.31/min (after add-ons)",
    website: "https://retellai.com",
    description:
      "Developer platform for building AI voice agents with drag-and-drop builder",
  },
  meta: {
    title: "Best Retell AI Alternative for Real Estate | Prestyj",
    description:
      "Looking for a Retell AI alternative? Compare Prestyj vs Retell: done-for-you setup vs DIY, predictable pricing vs per-minute billing. See why real estate teams are switching.",
    keywords: [
      "retell ai alternative",
      "retell alternative",
      "retell ai competitors",
      "AI voice agent platform",
      "real estate AI voice",
      "retell ai pricing",
    ],
  },
  hero: {
    badge: "Retell AI Alternative",
    subheadline:
      "Retell is a powerful developer platform for building AI voice agents. But if you want done-for-you lead response without the technical complexity, there's a better option.",
  },
  industryStats: [
    {
      stat: "78%",
      description: "of buyers work with the first agent who responds",
    },
    {
      stat: "$1,200-1,800",
      description: "Retell cost for 10,000 minutes/month (with add-ons)",
    },
    {
      stat: "47 sec",
      description: "average Prestyj response time",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Technical Setup Required",
        prestyj: "None (done-for-you)",
        competitor: "Significant",
        note: "Retell requires developer resources",
      },
      {
        feature: "Pricing Model",
        prestyj: "Predictable monthly",
        competitor: "Per-minute + add-ons",
        note: "Retell costs stack: $0.07/min base + LLM + telephony",
      },
      {
        feature: "Real Estate Optimized",
        prestyj: true,
        competitor: false,
        note: "Prestyj is built specifically for real estate",
      },
      {
        feature: "Lead Reactivation",
        prestyj: true,
        competitor: false,
        note: "Prestyj specializes in reviving dead leads",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Retell requires external CRM integration"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Appointment Booking",
        prestyj: true,
        competitor: "Build it yourself",
      },
      {
        feature: "Ongoing Optimization",
        prestyj: "Done-for-you",
        competitor: "Self-managed",
      },
    ],
    competitorPricing: {
      price: "$0.07-0.31",
      period: "/minute",
      note: "Plus LLM, telephony, transcription costs",
      pros: [
        "Powerful developer platform",
        "Highly customizable",
        "Multi-language support",
        "Low-latency (600ms)",
      ],
      cons: [
        "Requires technical expertise to build",
        "Costs stack up quickly with add-ons",
        "No built-in CRM or lead management",
        "You manage everything yourself",
        "Not optimized for any specific industry",
      ],
    },
    prestyjPricingOverrides: {
      price: "Predictable pricing",
      note: "Based on your needs",
      pros: [
        "Zero technical setup required",
        "Built specifically for real estate",
        "Lead reactivation included",
        "Built-in CRM included",
        "Done-for-you management",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Wrench",
      title: "No Technical Setup Required",
      description:
        "Retell is a developer platform—you need engineers to build your solution. Prestyj is done-for-you. We handle everything so you can focus on closing deals.",
    },
    {
      icon: "DollarSign",
      title: "Predictable Pricing",
      description:
        "Retell's per-minute pricing + LLM costs + telephony can quickly exceed $1,500/month for moderate usage. Prestyj offers predictable monthly pricing.",
    },
    {
      icon: "Home",
      title: "Built for Real Estate",
      description:
        "Prestyj is specifically designed for real estate lead qualification. No building required—just plug in and start converting leads.",
    },
    {
      icon: "RefreshCw",
      title: "Lead Reactivation Included",
      description:
        "Don't just handle new leads—revive the thousands of dead leads in your database. Prestyj specializes in done-for-you lead reactivation.",
    },
  ],
  whenCompetitorFits: [
    "You have engineering resources to build custom voice agents",
    "You need highly customized conversational flows",
    "You want to build AI voice features into your own product",
    "You prefer complete control over every technical component",
    "You're building for multiple industries, not just real estate",
  ],
  whenPrestyjFits: [
    "You want done-for-you AI lead response without technical complexity",
    "You need a solution specifically optimized for real estate",
    "You want to reactivate dead leads, not just respond to new ones",
    "You prefer predictable monthly pricing over per-minute billing",
    "You want lead management and CRM built-in",
    "You don't have engineering resources to build and maintain AI systems",
  ],
  relatedResources: [
    {
      href: "/alternatives/vapi",
      title: "Prestyj vs Vapi",
      description: "Compare to another AI voice platform",
    },
    {
      href: "/alternatives/structurely",
      title: "Prestyj vs Structurely",
      description: "Compare to real estate AI assistant",
    },
    {
      href: "/blog/build-vs-buy-ai-sales-agents-real-estate",
      title: "Build vs Buy AI",
      description: "CFO's guide to the real costs",
    },
  ],
  cta: {
    headline: "Skip the Build. Start Converting.",
    subheadline:
      "Why spend months building when you can start converting leads today? Book a demo to see Prestyj in action.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. No technical setup needed.",
  },
});
