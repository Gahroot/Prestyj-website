import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const retellAi: AlternativePageContent = createAlternativePage({
  slug: "retell-ai",
  type: "direct-competitor",
  competitor: {
    name: "Retell AI",
    shortName: "Retell",
    pricing: "$0.07-0.31/min (after add-ons)",
    website: "https://retellai.com",
    description:
      "Developer platform for building AI voice agents with API-first architecture and drag-and-drop workflow builder",
  },
  meta: {
    title: "Retell AI Alternative: Done-For-You vs DIY | Prestyj",
    description:
      "Looking for a Retell AI alternative? Compare Prestyj vs Retell AI: done-for-you implementation vs DIY platform, predictable pricing vs per-minute billing, white-glove setup vs self-managed development.",
    keywords: [
      "retell ai alternative",
      "retell alternative",
      "retell ai competitors",
      "retell ai pricing",
      "ai voice agent platform",
      "diy voice ai vs done for you",
      "retellai alternative",
      "voice ai receptionist",
    ],
  },
  hero: {
    badge: "Retell AI Alternative",
    subheadline:
      "Retell AI is a powerful developer platform for building custom voice agents. But if you're a business owner who wants results without managing another technical project, there's a better way.",
  },
  industryStats: [
    {
      stat: "67%",
      description: "of callers hang up when not reached immediately",
    },
    {
      stat: "$0.07-0.31",
      description: "Retell cost per minute (before LLM, phone, and API fees)",
    },
    {
      stat: "15 min",
      description: "Prestyj setup time (no developers required)",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Setup Approach",
        prestyj: "Done-for-you service",
        competitor: "DIY platform",
        note: "Retell requires you to build, configure, and maintain everything",
      },
      {
        feature: "Technical Expertise Required",
        prestyj: "None",
        competitor: "Advanced",
        note: "Retell needs developers for API integration and workflow building",
      },
      {
        feature: "Pricing Model",
        prestyj: "Predictable monthly",
        competitor: "Per-minute + add-ons",
        note: "Retell costs stack: base $0.07/min + LLM + telephony + transcription",
      },
      {
        feature: "Time to Live",
        prestyj: "Same day",
        competitor: "Weeks to months",
        note: "Retell requires development, testing, and iteration",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Retell requires external CRM integration and data management"
      ),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      {
        feature: "Ongoing Maintenance",
        prestyj: "Handled for you",
        competitor: "Self-managed",
        note: "You monitor, debug, and optimize Retell workflows yourself",
      },
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Support Focus",
        prestyj: "Business outcomes",
        competitor: "Technical/API support",
        note: "Retell helps with code issues; Prestyj helps with business results",
      },
      {
        feature: "Industry Optimization",
        prestyj: "Pre-configured workflows",
        competitor: "Build from scratch",
        note: "Retell is a blank canvas—no industry-specific templates",
      },
    ],
    competitorPricing: {
      price: "$0.07-0.31",
      period: "/minute",
      note: "Plus LLM (GPT-4, Claude, etc.), telephony, transcription, and any API costs. 10,000 minutes/month = $700-3,100+ before add-ons.",
      pros: [
        "Powerful API-first platform",
        "Highly customizable workflows",
        "Drag-and-drop builder for non-devs",
        "Low-latency (~600ms response)",
        "Multi-language support",
        "Bring your own LLM provider",
        "Good for embedding AI into products",
      ],
      cons: [
        "Requires technical expertise to implement",
        "Per-minute pricing gets expensive at scale",
        "No built-in CRM or lead management",
        "You handle all maintenance and optimization",
        "No industry-specific templates or workflows",
        "Hidden costs stack up (LLM, phone, transcription)",
        "Time-intensive to build and iterate",
        "Support focused on developers, not business users",
      ],
    },
    prestyjPricingOverrides: {
      price: "Predictable monthly",
      note: "Based on your call volume and needs—all-inclusive pricing",
      pros: [
        "Zero technical setup required",
        "Done-for-you implementation",
        "Built-in lead management and CRM",
        "Industry-optimized workflows included",
        "White-glove onboarding and support",
        "Ongoing optimization handled for you",
        "Transparent pricing with no surprises",
        "Business-focused support team",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Wrench",
      title: "Skip the DIY Project",
      description:
        "Retell AI is a tool for builders—you need developers, API integration, and ongoing maintenance. Prestyj is a done-for-you service. We handle everything so you can focus on running your business.",
    },
    {
      icon: "DollarSign",
      title: "Predictable Pricing, Not Per-Minute Surprises",
      description:
        "Retell's per-minute model plus separate LLM, telephony, and transcription costs creates unpredictable bills. Prestyj offers transparent monthly pricing—you know exactly what you'll pay.",
    },
    {
      icon: "Zap",
      title: "Live in Days, Not Months",
      description:
        "With Retell, you're building a custom project—design, develop, test, iterate. That takes weeks or months. Prestyj goes live the same day with pre-configured receptionist workflows.",
    },
    {
      icon: "Users",
      title: "Business Support, Not API Docs",
      description:
        "Retell provides technical support for developers. Prestyj provides business support—we help optimize call handling, improve conversion, and grow your results.",
    },
    {
      icon: "Target",
      title: "Built for Results, Not Just Technology",
      description:
        "Retell is a platform—you define what success looks like and build toward it. Prestyj is a service—our success is your results: more appointments, better lead qualification, happier callers.",
    },
  ],
  whenCompetitorFits: [
    "You have an in-house development team with API experience",
    "You're building AI voice features into your own product",
    "You need complete control over every technical component",
    "You want to evaluate and switch between different LLM providers",
    "Your use case requires highly customized conversational flows",
    "You're comfortable managing infrastructure, monitoring, and optimization",
    "You have the time and resources for a multi-month implementation",
  ],
  whenPrestyjFits: [
    "You want results, not another technical project to manage",
    "You don't have developers or want to avoid hiring them",
    "You need a solution working in days, not months",
    "You want transparent, predictable monthly pricing",
    "You need lead management, CRM, and workflows built-in",
    "You want ongoing optimization handled by experts",
    "You prefer business-focused support over technical documentation",
    "You're focused on business outcomes, not infrastructure",
  ],
  relatedResources: [
    {
      href: "/alternatives/vapi",
      title: "Prestyj vs Vapi",
      description: "Compare to another developer-focused voice AI platform",
    },
    {
      href: "/alternatives/bland-ai",
      title: "Prestyj vs Bland AI",
      description: "Compare to another DIY voice agent platform",
    },
    {
      href: "/blog/build-vs-buy-ai-sales-agents",
      title: "Build vs Buy AI Sales Agents",
      description: "The real cost comparison of DIY vs. done-for-you",
    },
  ],
  cta: {
    headline: "Skip the Build. Get Results.",
    subheadline:
      "Retell AI is powerful if you want to build it yourself. But if you want a done-for-you receptionist that just works—without developers, APIs, or months of setup—talk to us.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No developers required. No credit card needed. See it live with your phone number.",
  },
});
