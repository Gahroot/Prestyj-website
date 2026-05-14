import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const airAiCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-air-ai",
  competitorName: "Air.ai",
  hero: {
    badge: "Voice Agent Comparison",
    title: "Prestyj vs Air.ai:",
    titleAccent: "Vertical Lead Conversion vs General Sales AI",
    subtitle:
      "Air.ai is a premium managed AI sales calling platform built for B2B outbound teams running cold calling and consultative sales. Prestyj is a done-for-you AI lead conversion agent built for real estate teams and home services operators. Here's an honest, side-by-side look at when each one wins.",
    description: "",
    keyStats: [
      { value: "$149-$3,000+/mo", label: "Air.ai tier range" },
      { value: "$1,997+/mo", label: "Prestyj flat pricing" },
      { value: "15 min", label: "Prestyj setup vs days-to-weeks" },
    ],
  },
  stats: [
    {
      value: "10-15 min",
      label: "Air.ai average conversation length",
      description:
        "Best-in-class for consultative outbound sales calls — genuinely impressive on long discovery conversations",
    },
    {
      value: "$1,299-$3,000+",
      label: "Air.ai mid-to-enterprise tiers",
      description: "Custom voices, white-label, and SLA gated behind Business and Enterprise plans",
    },
    {
      value: "B2B outbound",
      label: "Air.ai's primary use case",
      description: "Generic sales tooling — not industry-tuned for real estate or home services",
    },
    {
      value: "78%",
      label: "of buyers work with first responder",
      description:
        "Inbound speed-to-lead matters more than perfect outbound voice for most operators",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month flat, done-for-you",
      features: [
        { text: "Real estate / home services scripts included", included: true },
        { text: "Native CRM integrations (FUB, kvCore, ServiceTitan)", included: true },
        { text: "Inbound + outbound built in", included: true },
        { text: "TCPA + fair housing compliance baked in", included: true },
        { text: "Live in 15 minutes - no migration project", included: true },
        { text: "Predictable flat pricing - no per-minute overage", included: true },
      ],
    },
    competitor: {
      price: "$149-$3,000+",
      priceSubtext: "/month subscription tiers",
      features: [
        { text: "Best-in-class conversation length on long sales calls", included: true },
        { text: "Sophisticated AI models tuned for outbound sales", included: true },
        { text: "Setup, training, and ongoing optimization included", included: true },
        { text: "Generic sales tooling - not industry-specific", included: false },
        { text: "Inbound / receptionist use cases are not the focus", included: false },
        { text: "Real-world conversion often trails demo expectations", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Primary use case",
      prestyj: "Inbound + outbound lead conversion",
      competitor: "B2B outbound sales calling",
      note: "Air.ai is built for cold calling, follow-up, and appointment setting - not receptionist or inbound triage",
    },
    {
      feature: "Industry focus",
      prestyj: "Real estate + home services",
      competitor: "Generic sales (industry-agnostic)",
      note: "Air.ai has no vertical-specific scripts; you bring your own playbook",
    },
    {
      feature: "Pricing model",
      prestyj: "Flat monthly all-in",
      competitor: "Tiered subscription with minute caps",
      note: "Air.ai: $149 (1k min) / $499 (5k) / $1,299 (15k) / $3,000+ (50k+) per month",
    },
    {
      feature: "Time to first live call",
      prestyj: "15 minutes",
      competitor: "Days to weeks",
      note: "Air.ai includes managed setup but custom scripts and CRM wiring extend onboarding",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      false,
      "Air.ai integrates with major CRMs at Professional+ tiers but lacks native real estate / home services schemas",
    ),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
    {
      feature: "Industry-specific scripts",
      prestyj: "Real estate + home services included",
      competitor: "Generic sales templates",
    },
    {
      feature: "Conversation length strength",
      prestyj: "Optimized for 2-7 min qualification calls",
      competitor: "Best-in-class on 10-15 min discovery calls",
    },
    {
      feature: "Compliance (TCPA / Fair Housing)",
      prestyj: "Built-in guardrails",
      competitor: "Your responsibility",
    },
    {
      feature: "Custom voices / white-label",
      prestyj: "Available on Scale tier",
      competitor: "Business tier ($1,299+/mo) and above",
    },
    {
      feature: "Support model",
      prestyj: "Dedicated success manager",
      competitor: "Phone support on Business+, otherwise tiered",
    },
  ],
  whySwitch: {
    title: "Why Operators Choose Prestyj Over Air.ai",
    description:
      "Air.ai is genuinely best-in-class for premium B2B outbound. Prestyj wins when you need vertical-specific inbound + outbound lead conversion with predictable mid-market pricing.",
    reasons: [
      {
        icon: "Target",
        title: "Built for Your Vertical, Not Generic Sales",
        description:
          "Air.ai is sales-team tooling - you bring the playbook. Prestyj ships with real estate (buyer/seller qualification, fair housing language, FUB/kvCore sync) and home services (emergency triage, ServiceTitan dispatch) already trained.",
      },
      {
        icon: "Phone",
        title: "Inbound First, Not Just Outbound",
        description:
          "Air.ai is famous for long outbound discovery calls. Most real estate teams and home services operators bleed money on missed inbound calls - that's the front door Prestyj is designed to answer in under 2 rings.",
      },
      {
        icon: "DollarSign",
        title: "Mid-Market Pricing Without Tier Cliffs",
        description:
          "Air.ai's Business tier ($1,299/mo, 15k min) gets you custom voices and integrations, but Enterprise SLA and white-label start at $3,000+/mo. Prestyj's $1,997/$3,497/$5,997 tiers are flat all-in with no per-minute overage anxiety.",
      },
      {
        icon: "Shield",
        title: "Compliance Built In, Not Bolted On",
        description:
          "Air.ai leaves TCPA consent, fair housing language, and DNC scrubbing to you. Prestyj bakes the guardrails into every script because we have to for our existing real estate and mortgage customers.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Air.ai Alternative Overview",
      description: "The full Air.ai alternatives breakdown",
      href: "/alternatives/air-dot-ai",
      linkText: "See alternatives",
    },
    {
      title: "Prestyj vs Bland AI",
      description: "Compare a developer-first infrastructure platform",
      href: "/compare/prestyj-vs-bland-ai",
      linkText: "Read comparison",
    },
    {
      title: "AI Voice Agent Costs Compared",
      description: "Real per-minute costs across 7 platforms",
      href: "/blog/ai-voice-agent-costs-compared",
      linkText: "Read the breakdown",
    },
  ],
  cta: {
    title: "Skip the Generic Playbook. Start Converting Leads.",
    description:
      "Air.ai is great if you're running heavy B2B outbound with a sales team that already has a winning script. Prestyj answers your real estate or home services leads today - with flat pricing, native CRM sync, and compliance built in.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "See your real estate or home services AI agent live with your phone number. No setup project required.",
  },
});

export const airAiCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-air-ai",
  competitorName: "Air.ai",
  title: "Prestyj vs Air.ai: Vertical Lead Conversion vs General Sales AI (2026 Comparison)",
  description:
    "Compare Prestyj and Air.ai for AI voice agents. Air.ai is $149-$3,000+/mo premium B2B outbound sales calling. Prestyj is $1,997+/mo flat, real estate + home services-tuned, live in 15 minutes. Real numbers inside.",
  keywords: [
    "Air.ai alternative",
    "Air.ai vs Prestyj",
    "Prestyj vs Air.ai",
    "Air.ai pricing",
    "Air.ai review",
    "Air.ai competitors",
    "AI voice agent comparison",
    "done-for-you AI voice agent",
    "Air.ai real estate",
    "Air.ai home services",
  ],
};
