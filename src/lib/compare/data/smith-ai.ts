import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const smithAiCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-smith-ai",
  competitorName: "Smith.ai",
  hero: {
    badge: "Receptionist vs AI Agent Comparison",
    title: "Prestyj vs Smith.ai:",
    titleAccent: "AI Sales Agent vs Human-Powered Receptionist",
    subtitle:
      "Smith.ai is one of the best human-staffed virtual receptionist services in the US, with strong AI assist for law firms and professional services. Prestyj is a done-for-you AI sales agent built for real estate and home services. Different categories, different best-fit buyers — here's an honest side-by-side.",
    description: "",
    keyStats: [
      { value: "$285–$1,455/mo", label: "Smith.ai plan range" },
      { value: "$7–$9", label: "Smith.ai per-call overage" },
      { value: "$1,997+/mo", label: "Prestyj flat all-in" },
    ],
  },
  stats: [
    {
      value: "$285/mo",
      label: "Smith.ai Starter (30 calls)",
      description: "Per-call pricing; overages $7–$9 per additional answered call",
    },
    {
      value: "$1,455/mo",
      label: "Smith.ai Pro (200 calls)",
      description: "Still capped — extra calls billed at the overage rate",
    },
    {
      value: "Unlimited",
      label: "Prestyj concurrent calls",
      description: "AI agent answers every inbound call in parallel — no cap, no overages",
    },
    {
      value: "78%",
      label: "of buyers work with the first responder",
      description: "AI answers in &lt;1 ring; live receptionists average 8–20 seconds",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month all-in, unlimited calls",
      features: [
        { text: "Flat monthly fee — no per-call or overage billing", included: true },
        { text: "Unlimited concurrent AI calls (no call cap)", included: true },
        { text: "Built-in CRM + appointment booking", included: true },
        { text: "Real estate / home services scripts included", included: true },
        { text: "Live in 15 minutes", included: true },
        { text: "TCPA + fair housing guardrails built in", included: true },
      ],
    },
    competitor: {
      price: "$285–$1,455",
      priceSubtext: "/month + $7–$9 per overage call",
      features: [
        { text: "Live, professional human receptionists", included: true },
        { text: "Strong fit for law firms and professional services", included: true },
        { text: "24/7 live answering across all plans", included: true },
        { text: "Per-call billing caps (overages compound fast)", included: false },
        { text: "Higher cost ceiling at high call volumes", included: false },
        { text: "No native real estate / home services workflows", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Who answers the call",
      prestyj: "AI voice agent",
      competitor: "Human receptionist (AI-assisted)",
      note: "Smith.ai's core offering is human agents; their AI Receptionist is a separate, lower-cost product",
    },
    {
      feature: "Pricing model",
      prestyj: "Flat monthly all-in",
      competitor: "Per-call tiers + overage",
      note: "Smith.ai bills per answered call; high-volume operators see unpredictable bills",
    },
    {
      feature: "Call cap",
      prestyj: "Unlimited",
      competitor: "30 / 90 / 200 per month",
      note: "Calls above plan limit billed at $7–$9 each",
    },
    {
      feature: "Concurrent call handling",
      prestyj: "Unlimited parallel",
      competitor: "Limited by staffing",
      note: "AI answers every line at once; humans queue or roll to voicemail when busy",
    },
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true, "Both available 24/7"),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      "Basic integrations",
      "Smith.ai integrates with common CRMs; Prestyj ships native deep sync to FUB, kvCore, Sierra, ServiceTitan, etc.",
    ),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
    {
      feature: "Industry-specific scripts",
      prestyj: "Real estate + home services included",
      competitor: "Legal / professional services strength",
      note: "Smith.ai's industry teams are excellent for law firms; Prestyj is purpose-built for real estate + home services",
    },
    {
      feature: "Emotional / empathy-heavy calls",
      prestyj: "Good (AI tone-tuned)",
      competitor: "Excellent (trained humans)",
      note: "Distressed client intake (e.g., family law) is genuinely better with a human voice",
    },
    {
      feature: "Speed-to-answer",
      prestyj: "&lt;1 ring (instant)",
      competitor: "8–20 seconds typical",
    },
    {
      feature: "Setup time",
      prestyj: "15 minutes",
      competitor: "1–2 weeks onboarding",
    },
    {
      feature: "Compliance (TCPA / Fair Housing)",
      prestyj: "Built-in guardrails",
      competitor: "Agent-dependent",
    },
    {
      feature: "Best fit",
      prestyj: "Real estate, home services, high-volume SMBs",
      competitor: "Law firms, professional services, low-volume B2B",
    },
  ],
  whySwitch: {
    title: "When Operators Choose Prestyj Over Smith.ai",
    description:
      "Smith.ai is excellent at what it does — professional human receptionists for businesses that need a human voice. Operators move to Prestyj when call volume, predictable pricing, or CRM-deep workflows matter more than human warmth.",
    reasons: [
      {
        icon: "DollarSign",
        title: "Predictable Cost, No Per-Call Overages",
        description:
          "Smith.ai's $7–$9 per overage call adds up fast. A team taking 400 calls/month on the 200-call Pro tier pays roughly $1,455 + (200 × $8) = $3,055. Prestyj is flat $1,997 with no call cap.",
      },
      {
        icon: "Zap",
        title: "Unlimited Concurrent Calls",
        description:
          "When 12 leads call after a big ad drop, Smith.ai's human team queues or sends to voicemail. Prestyj's AI answers all 12 in parallel — every lead gets a sub-1-ring response.",
      },
      {
        icon: "Target",
        title: "Built for Real Estate + Home Services",
        description:
          "Smith.ai's strength is law firms and professional services. Prestyj ships with FHA-compliant scripts, buyer/seller qualification, ServiceTitan dispatch routing, and emergency triage out of the box.",
      },
      {
        icon: "Puzzle",
        title: "Deep CRM + Booking Workflows",
        description:
          "Smith.ai passes messages and books appointments via basic integrations. Prestyj writes structured lead records, scores qualification, books on your calendar, and triggers your existing nurture sequences automatically.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Smith.ai Alternative Overview",
      description: "The full Smith.ai alternatives breakdown",
      href: "/alternatives/smith-ai",
      linkText: "See alternatives",
    },
    {
      title: "AI vs Human ISA & Answering Services",
      description: "How AI compares to traditional human-staffed answering services",
      href: "/alternatives/human-isa",
      linkText: "Read comparison",
    },
    {
      title: "Prestyj vs Goodcall",
      description: "Another AI receptionist alternative",
      href: "/compare/prestyj-vs-goodcall",
      linkText: "Read comparison",
    },
  ],
  cta: {
    title: "Skip the Per-Call Bill. Start Booking.",
    description:
      "Smith.ai is the right call if you need a human voice for empathy-heavy intakes. If you want unlimited AI calls, flat pricing, and real estate / home services workflows pre-built — Prestyj books appointments today.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "See your AI agent live with your phone number. No call caps, no overages, no onboarding lag.",
  },
});

export const smithAiCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-smith-ai",
  competitorName: "Smith.ai",
  title: "Prestyj vs Smith.ai: AI Sales Agent vs Human Receptionist (2026 Comparison)",
  description:
    "Compare Prestyj and Smith.ai head-to-head. Smith.ai is human receptionists at $285–$1,455/mo + $7–$9 per overage call. Prestyj is flat-fee AI voice agents with unlimited calls. Real numbers inside.",
  keywords: [
    "Smith.ai alternative",
    "Smith.ai vs Prestyj",
    "Prestyj vs Smith.ai",
    "Smith.ai pricing",
    "Smith.ai review",
    "Smith.ai competitors",
    "is Smith.ai worth it",
    "Smith.ai cost per call",
    "virtual receptionist comparison",
    "AI receptionist vs human",
  ],
};
