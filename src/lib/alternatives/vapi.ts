import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const vapi: AlternativePageContent = createAlternativePage({
  slug: "vapi",
  type: "direct-competitor",
  competitor: {
    name: "Vapi",
    shortName: "Vapi",
    pricing: "$0.05/min + provider costs",
    website: "https://vapi.ai",
    description:
      "Developer-first infrastructure platform for building custom voice AI agents with 99.99% uptime and API-native architecture",
  },
  meta: {
    title: "Best Vapi Alternative | Prestyj Receptionist AI",
    description:
      "Looking for a Vapi alternative? Vapi requires technical expertise and complex setup. Prestyj offers a no-code receptionist solution with built-in templates, transparent pricing, and instant deployment. Compare now.",
    keywords: [
      "vapi alternative",
      "best vapi alternative",
      "vapi vs prestyj",
      "vapi competitors",
      "vapi alternatives 2025",
      "voice ai alternative",
      "receptionist ai",
      "ai receptionist software",
      "vapi pricing",
      "voice api platform",
    ],
  },
  hero: {
    badge: "Vapi Alternative",
    subheadline:
      "Vapi is an excellent developer-first infrastructure platform for building custom voice AI. But if you want a business-ready receptionist solution without technical complexity, Prestyj is built for you.",
  },
  industryStats: [
    {
      stat: "89%",
      description: "of businesses need 24/7 receptionist coverage",
    },
    {
      stat: "99.99%",
      description: "Vapi's uptime (but requires infrastructure knowledge)",
    },
    {
      stat: "5 min",
      description: "Prestyj average setup time, no coding required",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Developer Expertise Required",
        prestyj: "None",
        competitor: "Extensive",
        note: "Vapi is API-first; requires engineers and coding",
      },
      {
        feature: "Setup Time",
        prestyj: "5 minutes",
        competitor: "Weeks to months",
        note: "Vapi demands custom integration and configuration",
      },
      {
        feature: "Implementation Complexity",
        prestyj: "No-code visual setup",
        competitor: "API-first with custom code",
        note: "Vapi requires building from infrastructure components",
      },
      {
        feature: "Receptionist Templates",
        prestyj: "Included",
        competitor: false,
        note: "Vapi requires custom building for any use case",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Vapi is infrastructure; you build integrations yourself"
      ),
      {
        feature: "Pricing Transparency",
        prestyj: "Fixed monthly",
        competitor: "Usage-based + add-ons",
        note: "Vapi costs grow with LLM, STT, TTS, telephony providers",
      },
      {
        feature: "Lead Management",
        prestyj: "Complete lifecycle",
        competitor: "Voice call only",
        note: "Prestyj handles qualification, follow-up, and CRM sync",
      },
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Business vs Developer Support",
        prestyj: "Business-focused",
        competitor: "Developer-focused",
        note: "Vapi support is API documentation; Prestyj provides hands-on help",
      },
      {
        feature: "Target Audience",
        prestyj: "Non-technical business teams",
        competitor: "Engineering teams",
        note: "Vapi is for builders; Prestyj is for business users",
      },
    ],
    competitorPricing: {
      price: "$0.05+",
      period: "/minute + provider costs",
      note: "LLM, STT, TTS, telephony billed separately; actual costs much higher",
      pros: [
        "Maximum flexibility and control",
        "Enterprise-grade 99.99% uptime",
        "API-native architecture",
        "100+ language support",
        "Bring your own AI/speech providers",
        "Unlimited customization for developers",
      ],
      cons: [
        "Requires significant engineering resources",
        "Complex multi-tier pricing structure",
        "Hidden costs: LLM, STT, TTS, telephony charges",
        "No built-in receptionist or business features",
        "Setup and maintenance overhead",
        "No industry-specific templates or workflows",
        "Not designed for business users",
        "Developer-only support model",
      ],
    },
    prestyjPricingOverrides: {
      price: "Transparent monthly",
      note: "Everything included, no hidden per-minute charges",
      pros: [
        "Zero developer or technical knowledge needed",
        "Receptionist-specific templates included",
        "Transparent fixed pricing",
        "Complete lead management included",
        "Built-in CRM and workflow automation",
        "Business-focused customer support",
        "Deploy and start handling calls in minutes",
        "Faster implementation and ROI",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Building2",
      title: "Business Solution, Not Infrastructure",
      description:
        "Vapi is infrastructure for engineers. Prestyj is a complete, ready-to-use receptionist solution. You don't need developers—anyone can set it up in minutes.",
    },
    {
      icon: "DollarSign",
      title: "No Hidden Costs or Complexity",
      description:
        "Vapi's per-minute model explodes with usage (+ separate LLM, STT, TTS bills). Prestyj has transparent, predictable monthly pricing with everything included.",
    },
    {
      icon: "Zap",
      title: "Deploy Today, Not in Months",
      description:
        "Vapi requires weeks of engineering work. Prestyj deploys in 5 minutes with built-in receptionist templates. Start answering calls immediately.",
    },
    {
      icon: "Users",
      title: "Designed for Your Business",
      description:
        "Vapi is API infrastructure for custom builds. Prestyj is built specifically for receptionist workflows: call qualifying, voicemail, lead routing, follow-up, and CRM sync.",
    },
    {
      icon: "HeartHandshake",
      title: "Support Built for Business Users",
      description:
        "Vapi offers API docs for developers. Prestyj provides hands-on support because we know your needs aren't technical—they're business-focused.",
    },
  ],
  whenCompetitorFits: [
    "You have a dedicated engineering team",
    "You're building voice AI capabilities into your own product",
    "You need maximum technical control and customization",
    "You want to evaluate different LLM and speech providers",
    "Enterprise scale with complex infrastructure requirements",
    "You can manage multi-provider costs and billing",
    "You need 100+ language support across custom applications",
  ],
  whenPrestyjFits: [
    "You need a receptionist solution, not infrastructure to build one",
    "Your team is non-technical or sales/business focused",
    "You want deployment in minutes, not months",
    "You need predictable pricing without surprise per-minute charges",
    "You want built-in receptionist templates and workflows",
    "You need complete lead management and CRM integration",
    "You prefer hands-on support from business-focused teams",
    "You want faster ROI and time-to-value",
    "SMBs and growing businesses needing cost-effective solutions",
  ],
  relatedResources: [
    {
      href: "/alternatives/bland-ai",
      title: "Prestyj vs Bland AI",
      description: "Another developer-first platform comparison",
    },
    {
      href: "/alternatives/retell",
      title: "Prestyj vs Retell",
      description: "Compare to another voice AI platform",
    },
    {
      href: "/blog/voice-ai-receptionist",
      title: "Voice AI Receptionist Guide",
      description: "Why receptionist AI is different from developer platforms",
    },
  ],
  cta: {
    headline: "Skip the Build. Hire Your AI Receptionist Today.",
    subheadline:
      "Vapi is powerful infrastructure for developers. But if you just need a receptionist that works, Prestyj is ready to answer your calls.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card. No developers. No infrastructure knowledge needed.",
  },
});
