import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const synthflowCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-synthflow",
  competitorName: "Synthflow",
  hero: {
    badge: "Voice Agent Comparison",
    title: "Prestyj vs Synthflow:",
    titleAccent: "Done-For-You vs No-Code DIY",
    subtitle:
      "Synthflow is a no-code AI voice agent platform with a visual workflow builder and predictable monthly subscriptions. Prestyj is a done-for-you AI sales agent built for real estate teams and home services operators. Both avoid per-minute billing — but they answer very different questions about how much work you want to do yourself.",
    description: "",
    keyStats: [
      { value: "$39-$799/mo", label: "Synthflow plan range" },
      { value: "$1,997+/mo", label: "Prestyj all-in pricing" },
      { value: "15 min vs 10-20 hrs", label: "Time to live" },
    ],
  },
  stats: [
    {
      value: "$39-$799/mo",
      label: "Synthflow plan range",
      description:
        "Starter $39 (500 min), Pro $299 (3,000 min), Business $799 (10,000 min), Enterprise custom",
    },
    {
      value: "10-20 hrs",
      label: "Typical Synthflow setup time",
      description:
        "No engineering required, but you still build flows, write prompts, and wire integrations",
    },
    {
      value: "$0.18-$0.28/min",
      label: "Synthflow overage rates",
      description:
        "$0.28 (Starter), $0.22 (Pro), $0.18 (Business) - adds up if you blow past plan minutes",
    },
    {
      value: "78%",
      label: "of buyers work with first responder",
      description: "Speed-to-lead matters more than visual workflow flexibility",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month all-in, done-for-you",
      features: [
        { text: "Setup, scripts, voice, integrations included", included: true },
        { text: "Built-in CRM + appointment booking", included: true },
        { text: "Real estate / home services-tuned out of the box", included: true },
        { text: "Live in 15 minutes - no flow-building required", included: true },
        { text: "Predictable monthly billing - no overage surprises", included: true },
        { text: "Dedicated success manager", included: true },
      ],
    },
    competitor: {
      price: "$39-$799",
      priceSubtext: "/month + overages + your build time",
      features: [
        { text: "No-code visual workflow builder", included: true },
        { text: "Predictable monthly subscription (within plan minutes)", included: true },
        { text: "LLM, STT/TTS, telephony, and phone numbers included", included: true },
        { text: "You build flows, scripts, and prompts yourself", included: false },
        { text: "No industry-specific scripts or templates included", included: false },
        { text: "Native CRM integrations limited on lower tiers", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Time to first live call",
      prestyj: "15 minutes",
      competitor: "10-20 hours of DIY build",
      note: "Synthflow is no-code, but you still design flows, write prompts, and connect integrations",
    },
    {
      feature: "Engineering required",
      prestyj: "None",
      competitor: "None (no-code builder)",
      note: "Synthflow's drag-and-drop UI is genuinely accessible to non-developers",
    },
    {
      feature: "Pricing model",
      prestyj: "Flat monthly all-in",
      competitor: "Monthly subscription + per-minute overages",
      note: "Synthflow overages: $0.28/min (Starter), $0.22 (Pro), $0.18 (Business)",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      false,
      "Synthflow has basic Zapier; deeper CRM integrations gated to higher tiers",
    ),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
    {
      feature: "Industry-specific scripts",
      prestyj: "Real estate + home services included",
      competitor: "Generic templates - you customize",
    },
    {
      feature: "Multi-language support",
      prestyj: "English + Spanish included",
      competitor: "Yes - multi-language (DIY setup)",
    },
    {
      feature: "Ongoing prompt/voice optimization",
      prestyj: "Done for you",
      competitor: "You iterate in the builder yourself",
    },
    {
      feature: "Support model",
      prestyj: "Business success manager",
      competitor: "Email support (chat support on Business+)",
    },
  ],
  whySwitch: {
    title: "Why Operators Choose Prestyj Over Synthflow",
    description:
      "Synthflow is a great DIY builder for non-technical teams under $300/mo. Prestyj is a finished product for operators who'd rather pay someone to own the outcome than learn another tool.",
    reasons: [
      {
        icon: "Zap",
        title: "Live in Minutes, Not a Weekend",
        description:
          "Synthflow doesn't need engineers - but it still needs you. Most teams spend 10-20 hours designing flows, writing prompts, and wiring integrations. Prestyj ships pre-built for real estate and home services on day one.",
      },
      {
        icon: "DollarSign",
        title: "No Overage Surprises",
        description:
          "Synthflow's $39-$799/mo plans are predictable until you blow past included minutes. At $0.18-$0.28/min in overages, a busy month can double your bill. Prestyj's flat all-in fee never moves.",
      },
      {
        icon: "Target",
        title: "Built for Your Industry, Not a Blank Canvas",
        description:
          "Synthflow's visual builder is industry-agnostic - you bring the scripts. Prestyj ships with real estate and home services scripts, objection handling, qualification flows, and CRM sync that already convert.",
      },
      {
        icon: "HeartHandshake",
        title: "Done-For-You, Not DIY",
        description:
          "Synthflow gives you a tool. Prestyj gives you an outcome. When something needs tuning, your Prestyj success manager fixes it - not you, after hours, in a builder UI.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Synthflow Alternative Overview",
      description: "The full Synthflow alternatives breakdown",
      href: "/alternatives/synthflow",
      linkText: "See alternatives",
    },
    {
      title: "Prestyj vs Bland AI",
      description: "Compare a developer-first per-minute platform",
      href: "/compare/prestyj-vs-retell-ai",
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
    title: "Skip the Builder. Start Booking.",
    description:
      "Synthflow is a great fit if you want to DIY a voice agent for under $300/mo. Prestyj books appointments today - with a flat monthly price and zero flow-building on your end.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "See your real estate or home services AI agent live with your phone number. No flows to build.",
  },
});

export const synthflowCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-synthflow",
  competitorName: "Synthflow",
  title: "Prestyj vs Synthflow: Done-For-You vs No-Code DIY (2026 Comparison)",
  description:
    "Compare Prestyj and Synthflow for AI voice agents. Synthflow is $39-$799/mo no-code DIY with 10-20 hour setup. Prestyj is flat-fee, done-for-you, live in 15 minutes. Real numbers inside.",
  keywords: [
    "Synthflow alternative",
    "Synthflow vs Prestyj",
    "Prestyj vs Synthflow",
    "Synthflow pricing",
    "Synthflow review",
    "Synthflow competitors",
    "AI voice agent comparison",
    "done-for-you AI voice agent",
    "Synthflow real estate",
    "Synthflow home services",
  ],
};
