import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const blandAiCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-bland-ai",
  competitorName: "Bland AI",
  hero: {
    badge: "Voice Agent Comparison",
    title: "Prestyj vs Bland AI:",
    titleAccent: "Done-For-You vs Developer Platform",
    subtitle:
      "Bland AI is a powerful developer-first voice platform built for engineers shipping custom agents. Prestyj is a done-for-you AI sales agent built for real estate teams and home services operators. Here's an honest, side-by-side look at when each one wins.",
    description: "",
    keyStats: [
      { value: "$0.09/min", label: "Bland AI base rate" },
      { value: "$1,997+/mo", label: "Prestyj all-in pricing" },
      { value: "15 min", label: "Prestyj setup vs 4-12 weeks" },
    ],
  },
  stats: [
    {
      value: "$0.09/min",
      label: "Bland AI advertised rate",
      description:
        "Real fully-loaded cost typically runs $0.14-0.22/min after LLM, telephony, and engineering",
    },
    {
      value: "4-12 weeks",
      label: "Typical Bland AI time-to-production",
      description: "API integration, prompt engineering, voice tuning, CRM wiring, QA",
    },
    {
      value: "$10K-22K",
      label: "Engineering setup cost",
      description: "70-150 hours at $150/hr for a production-ready Bland deployment",
    },
    {
      value: "78%",
      label: "of buyers work with first responder",
      description: "Speed-to-lead matters more than perfect voice cloning",
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
        { text: "Live in 15 minutes - no engineers required", included: true },
        { text: "Predictable monthly billing - no per-minute surprises", included: true },
        { text: "Dedicated success manager", included: true },
      ],
    },
    competitor: {
      price: "$0.09",
      priceSubtext: "/min + LLM + STT/TTS + engineering",
      features: [
        { text: "Best-in-class voice infrastructure and latency", included: true },
        { text: "Unlimited customization via API and webhooks", included: true },
        { text: "HIPAA-compliant infrastructure available", included: true },
        { text: "Requires dedicated engineering team", included: false },
        { text: "No included scripts, workflows, or CRM", included: false },
        { text: "Per-minute pricing compounds at scale", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Time to first live call",
      prestyj: "15 minutes",
      competitor: "4-12 weeks",
      note: "Bland requires API integration, prompt design, voice tuning, telephony setup, and QA",
    },
    {
      feature: "Engineering required",
      prestyj: "None",
      competitor: "Dedicated team",
      note: "Bland is API-first - you build the agent, integrations, and ops yourself",
    },
    {
      feature: "Pricing model",
      prestyj: "Flat monthly all-in",
      competitor: "Per-minute + provider fees",
      note: "Bland: $0.09/min base + LLM ($0.03-0.08) + telephony + monitoring",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      false,
      "Bland is infrastructure only - bring your own CRM integration",
    ),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
    {
      feature: "Industry-specific scripts",
      prestyj: "Real estate + home services included",
      competitor: "Build from scratch",
    },
    {
      feature: "Multi-language support",
      prestyj: "English + Spanish included",
      competitor: "Yes - 100+ languages (DIY)",
    },
    {
      feature: "Ongoing prompt/voice optimization",
      prestyj: "Done for you",
      competitor: "Your engineering team",
    },
    {
      feature: "Support model",
      prestyj: "Business success manager",
      competitor: "Developer docs + Slack/email",
    },
  ],
  whySwitch: {
    title: "Why Operators Choose Prestyj Over Bland AI",
    description:
      "Bland is brilliant infrastructure. Prestyj is a finished product. Most operators don't need infrastructure - they need leads converting today.",
    reasons: [
      {
        icon: "Zap",
        title: "Live in Minutes, Not Months",
        description:
          "Bland's developer-first model means 4-12 weeks before your first production call. Prestyj is configured for real estate and home services on day one - your AI agent answers the next inbound lead.",
      },
      {
        icon: "DollarSign",
        title: "Predictable Cost, No Per-Minute Surprises",
        description:
          "Bland's $0.09/min base plus LLM, STT/TTS, telephony, and engineering typically lands at $3,000-5,000+/month for moderate volume. Prestyj's flat all-in monthly fee makes budgeting trivial.",
      },
      {
        icon: "Target",
        title: "Built for Your Industry, Not a Blank Canvas",
        description:
          "Bland is a Lego set - you design the agent. Prestyj ships with real estate / home services scripts, objection handling, qualification flows, and CRM sync that already convert.",
      },
      {
        icon: "HeartHandshake",
        title: "Business Support, Not Just API Docs",
        description:
          "When something breaks at 6pm on a Friday, Bland points you at documentation. Prestyj assigns a success manager whose job is your booked appointment rate.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Bland AI Alternative Overview",
      description: "The full Bland AI alternatives breakdown",
      href: "/alternatives/bland-ai",
      linkText: "See alternatives",
    },
    {
      title: "Prestyj vs Vapi",
      description: "Compare another developer-first voice platform",
      href: "/compare/prestyj-vs-vapi",
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
    title: "Skip the Build. Start Booking.",
    description:
      "Bland is great if you have an engineering team and a quarter to spare. Prestyj books appointments today - with a flat monthly price and zero infrastructure work on your end.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "See your real estate or home services AI agent live with your phone number. No engineers required.",
  },
});

export const blandAiCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-bland-ai",
  competitorName: "Bland AI",
  title: "Prestyj vs Bland AI: Done-For-You vs Developer Platform (2026 Comparison)",
  description:
    "Compare Prestyj and Bland AI for AI voice agents. Bland is $0.09/min developer infrastructure with 4-12 week setup. Prestyj is flat-fee, done-for-you, live in 15 minutes. Real numbers inside.",
  keywords: [
    "Bland AI alternative",
    "Bland AI vs Prestyj",
    "Prestyj vs Bland AI",
    "Bland AI pricing",
    "Bland AI review",
    "Bland AI competitors",
    "AI voice agent comparison",
    "done-for-you AI voice agent",
    "Bland AI real estate",
    "Bland AI home services",
  ],
};
