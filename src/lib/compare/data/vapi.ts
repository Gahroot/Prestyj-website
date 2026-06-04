import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const vapiCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-vapi",
  competitorName: "Vapi",
  hero: {
    badge: "Voice Agent Comparison",
    title: "Prestyj vs Vapi:",
    titleAccent: "Done-For-You vs Voice Infrastructure",
    subtitle:
      "Vapi is a developer-first voice infrastructure platform built for engineers embedding voice into SaaS products and shipping highly customized agents. Prestyj is a done-for-you AI sales agent built for real estate teams and home services operators. Here's an honest, side-by-side look at when each one wins.",
    description: "",
    keyStats: [
      { value: "$0.05/min", label: "Vapi advertised platform fee" },
      { value: "$1,997+/mo", label: "Prestyj all-in pricing" },
      { value: "15 min", label: "Prestyj setup vs 40-80 engineering hours" },
    ],
  },
  stats: [
    {
      value: "$0.05/min",
      label: "Vapi advertised platform rate",
      description:
        "Real fully-loaded cost typically runs $0.14-0.22/min after LLM, TTS, STT, and telephony",
    },
    {
      value: "40-80 hrs",
      label: "Typical Vapi setup engineering",
      description:
        "API integration, prompt design, voice tuning, CRM wiring, BYO provider keys, QA",
    },
    {
      value: "$4K-12K",
      label: "Engineering setup cost",
      description: "40-80 hours at $100-150/hr for a production-ready Vapi deployment",
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
      price: "$0.05",
      priceSubtext: "/min + LLM + STT/TTS + telephony + engineering",
      features: [
        { text: "Best-in-class WebRTC voice infrastructure", included: true },
        { text: "Bring-your-own OpenAI / ElevenLabs / Deepgram keys", included: true },
        { text: "Excellent for multi-channel orchestration + embedding", included: true },
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
      competitor: "40-80 engineering hours",
      note: "Vapi requires API integration, BYO provider keys, prompt design, voice tuning, telephony setup, and QA",
    },
    {
      feature: "Engineering required",
      prestyj: "None",
      competitor: "Dedicated team",
      note: "Vapi is API-first - you build the agent, integrations, and ops yourself",
    },
    {
      feature: "Pricing model",
      prestyj: "Flat monthly all-in",
      competitor: "Per-minute + BYO provider fees",
      note: "Vapi: $0.05/min platform fee + LLM ($0.04-0.08) + ElevenLabs + Deepgram + Twilio",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      false,
      "Vapi is infrastructure only - bring your own CRM integration",
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
      competitor: "Developer docs + Discord/email",
    },
  ],
  whySwitch: {
    title: "Why Operators Choose Prestyj Over Vapi",
    description:
      "Vapi is brilliant voice infrastructure for engineering teams. Prestyj is a finished product for operators. Most teams don't need infrastructure - they need leads converting today.",
    reasons: [
      {
        icon: "Zap",
        title: "Live in Minutes, Not Engineering Sprints",
        description:
          "Vapi's developer-first model means 40-80 hours of engineering before your first production call. Prestyj is configured for real estate and home services on day one - your AI agent answers the next inbound lead.",
      },
      {
        icon: "DollarSign",
        title: "Predictable Cost, No Per-Minute Surprises",
        description:
          "Vapi's $0.05/min platform fee plus BYO LLM, ElevenLabs, Deepgram, Twilio, and engineering typically lands at $2,200-3,700/month for moderate volume. Prestyj's flat all-in monthly fee makes budgeting trivial.",
      },
      {
        icon: "Target",
        title: "Built for Your Industry, Not a Blank Canvas",
        description:
          "Vapi is voice infrastructure - you design the agent. Prestyj ships with real estate / home services scripts, objection handling, qualification flows, and CRM sync that already convert.",
      },
      {
        icon: "HeartHandshake",
        title: "Business Support, Not Just API Docs",
        description:
          "When something breaks at 6pm on a Friday, Vapi points you at documentation. Prestyj assigns a success manager whose job is your booked appointment rate.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Vapi Alternative Overview",
      description: "The full Vapi alternatives breakdown",
      href: "/alternatives/vapi",
      linkText: "See alternatives",
    },
    {
      title: "Prestyj vs Bland AI",
      description: "Compare another developer-first voice platform",
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
    title: "Skip the Build. Start Booking.",
    description:
      "Vapi is great if you have an engineering team building embedded voice into your product. Prestyj books appointments today - with a flat monthly price and zero infrastructure work on your end.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "See your real estate or home services AI agent live with your phone number. No engineers required.",
  },
});

export const vapiCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-vapi",
  competitorName: "Vapi",
  title: "Prestyj vs Vapi: Done-For-You vs Voice Infrastructure (2026 Comparison)",
  description:
    "Compare Prestyj and Vapi for AI voice agents. Vapi is $0.05/min voice infrastructure with 40-80 hours of engineering setup. Prestyj is flat-fee, done-for-you, live in 15 minutes. Real numbers inside.",
  keywords: [
    "Vapi alternative",
    "Vapi vs Prestyj",
    "Prestyj vs Vapi",
    "Vapi pricing",
    "Vapi review",
    "Vapi competitors",
    "Vapi.ai comparison",
    "AI voice agent comparison",
    "done-for-you AI voice agent",
    "Vapi real estate",
    "Vapi home services",
  ],
};
