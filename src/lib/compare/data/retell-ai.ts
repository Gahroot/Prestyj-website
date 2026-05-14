import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const retellAiCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-retell-ai",
  competitorName: "Retell AI",
  hero: {
    badge: "Voice Agent Comparison",
    title: "Prestyj vs Retell AI:",
    titleAccent: "Done-For-You vs Developer Platform",
    subtitle:
      "Retell AI is a developer-first voice platform with cleaner bundled pricing than Bland or Vapi - popular with Series A SaaS teams embedding voice. Prestyj is a done-for-you AI sales agent built for real estate teams and home services operators. Here's an honest, side-by-side look at when each one wins.",
    description: "",
    keyStats: [
      { value: "$0.07-0.11/min", label: "Retell AI base rate" },
      { value: "$1,997+/mo", label: "Prestyj all-in pricing" },
      { value: "15 min", label: "Prestyj setup vs 3-8 weeks" },
    ],
  },
  stats: [
    {
      value: "$0.07-0.11/min",
      label: "Retell AI advertised rate",
      description: "Real fully-loaded cost typically runs $0.12-0.22/min after LLM and telephony",
    },
    {
      value: "3-8 weeks",
      label: "Typical Retell AI time-to-production",
      description:
        "API integration, prompt design, CRM wiring, QA - simpler than Vapi/Bland but still engineering work",
    },
    {
      value: "$3K-9K",
      label: "Engineering setup cost",
      description: "30-60 hours at $150/hr for a production-ready Retell deployment",
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
      price: "$0.07-0.11",
      priceSubtext: "/min + LLM + telephony + engineering",
      features: [
        { text: "Strong WebRTC and browser voice support", included: true },
        { text: "Simpler config than Vapi or Bland", included: true },
        { text: "Clean SDKs for embedding voice in SaaS products", included: true },
        { text: "Requires engineering team to ship", included: false },
        { text: "No included scripts, workflows, or CRM", included: false },
        { text: "Per-minute pricing compounds at scale", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Time to first live call",
      prestyj: "15 minutes",
      competitor: "3-8 weeks",
      note: "Retell is simpler than Vapi/Bland but still requires API integration, prompt design, and CRM wiring",
    },
    {
      feature: "Engineering required",
      prestyj: "None",
      competitor: "Dedicated team (lighter than Vapi)",
      note: "Retell's bundled STT/TTS reduces setup vs Vapi/Bland, but you still build agent + integrations",
    },
    {
      feature: "Pricing model",
      prestyj: "Flat monthly all-in",
      competitor: "Per-minute + LLM + telephony",
      note: "Retell: $0.07-0.11/min platform (STT/TTS bundled) + LLM ($0.03-0.08) + telephony ($0.01-0.02)",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(STANDARD_FEATURES.AI_TEXT, true),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      false,
      "Retell is infrastructure only - bring your own CRM integration",
    ),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
    {
      feature: "Industry-specific scripts",
      prestyj: "Real estate + home services included",
      competitor: "Build from scratch",
    },
    {
      feature: "WebRTC / browser embedding",
      prestyj: "Not the primary use case",
      competitor: "Yes - strong default (SaaS embedding)",
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
    title: "Why Operators Choose Prestyj Over Retell AI",
    description:
      "Retell is clean, well-engineered infrastructure. Prestyj is a finished product. Most operators don't need infrastructure - they need leads converting today.",
    reasons: [
      {
        icon: "Zap",
        title: "Live in Minutes, Not Months",
        description:
          "Retell is faster to set up than Vapi or Bland, but it's still 3-8 weeks before your first production call once you wire CRM, scripts, and compliance. Prestyj is configured for real estate and home services on day one - your AI agent answers the next inbound lead.",
      },
      {
        icon: "DollarSign",
        title: "Predictable Cost, No Per-Minute Surprises",
        description:
          "Retell's $0.07-0.11/min platform fee plus LLM, telephony, and engineering typically lands at $2,500-4,500+/month for moderate volume. Prestyj's flat all-in monthly fee makes budgeting trivial.",
      },
      {
        icon: "Target",
        title: "Built for Your Industry, Not a Blank Canvas",
        description:
          "Retell is an SDK - you design the agent. Prestyj ships with real estate / home services scripts, objection handling, qualification flows, and CRM sync that already convert.",
      },
      {
        icon: "HeartHandshake",
        title: "Business Support, Not Just API Docs",
        description:
          "When something breaks at 6pm on a Friday, Retell points you at documentation. Prestyj assigns a success manager whose job is your booked appointment rate.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Retell AI Alternative Overview",
      description: "The full Retell AI alternatives breakdown",
      href: "/alternatives/retell-ai",
      linkText: "See alternatives",
    },
    {
      title: "Prestyj vs Bland AI",
      description: "Compare another developer-first voice platform",
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
    title: "Skip the Build. Start Booking.",
    description:
      "Retell is great if you have an engineering team and want to embed voice in a SaaS product. Prestyj books appointments today - with a flat monthly price and zero infrastructure work on your end.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "See your real estate or home services AI agent live with your phone number. No engineers required.",
  },
});

export const retellAiCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-retell-ai",
  competitorName: "Retell AI",
  title: "Prestyj vs Retell AI: Done-For-You vs Developer Platform (2026 Comparison)",
  description:
    "Compare Prestyj and Retell AI for AI voice agents. Retell is $0.07-0.11/min developer infrastructure with 3-8 week setup. Prestyj is flat-fee, done-for-you, live in 15 minutes. Real numbers inside.",
  keywords: [
    "Retell AI alternative",
    "Retell AI vs Prestyj",
    "Prestyj vs Retell AI",
    "Retell AI pricing",
    "Retell AI review",
    "Retell AI competitors",
    "AI voice agent comparison",
    "done-for-you AI voice agent",
    "Retell AI real estate",
    "Retell AI home services",
  ],
};
