import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const goodcallCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-goodcall",
  competitorName: "Goodcall",
  hero: {
    badge: "AI Phone Agent Comparison",
    title: "Prestyj vs Goodcall:",
    titleAccent: "Budget Receptionist vs Full Sales Agent",
    subtitle:
      "Goodcall is a budget-friendly AI phone assistant for solo operators who just need someone to answer the phone. Prestyj is a done-for-you AI sales agent for real estate teams and home services companies with real lead volume. Here's an honest look at when each one wins.",
    description: "",
    keyStats: [
      { value: "$19-$99/mo", label: "Goodcall plan range" },
      { value: "$1,997+/mo", label: "Prestyj all-in pricing" },
      { value: "Solo vs Team", label: "Different buyer entirely" },
    ],
  },
  stats: [
    {
      value: "$19-$99/mo",
      label: "Goodcall plan range",
      description:
        "Starter $19, Premium $49, Growth $99 per line — budget-friendly for solo operators",
    },
    {
      value: "Mobile-app",
      label: "Goodcall setup model",
      description:
        "No-code, app-based configuration — designed for solopreneurs without IT support",
    },
    {
      value: "Generic",
      label: "Goodcall industry tuning",
      description:
        "General SMB tool — no real estate scripts, no home services dispatch, no fair housing guardrails",
    },
    {
      value: "78%",
      label: "of buyers work with first responder",
      description:
        "For lead-heavy industries, qualification depth matters more than basic call answering",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month all-in, done-for-you",
      features: [
        { text: "Real estate + home services scripts included", included: true },
        { text: "Native CRM sync (FUB, kvCore, ServiceTitan, HCP)", included: true },
        { text: "Lead qualification and appointment booking", included: true },
        { text: "TCPA + fair housing compliance built in", included: true },
        { text: "Live in 15 minutes with dedicated success manager", included: true },
        { text: "Designed for $2M+ teams with real lead volume", included: true },
      ],
    },
    competitor: {
      price: "$19-$99",
      priceSubtext: "/month per line (Starter / Premium / Growth)",
      features: [
        { text: "Genuinely affordable for solo operators", included: true },
        { text: "Easy no-code, app-based setup", included: true },
        { text: "Free tier available (very limited)", included: true },
        { text: "Industry-specific scripts (real estate, home services)", included: false },
        { text: "Native CRM for lead qualification workflows", included: false },
        { text: "Built-in fair housing and TCPA guardrails", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Target buyer",
      prestyj: "$2M+ real estate teams, home services SMBs",
      competitor: "Solo operators, sub-$500K SMBs",
      note: "Different buyer profile — both are correct answers for their fit",
    },
    {
      feature: "Monthly price (typical)",
      prestyj: "$1,997 / $3,497 / $5,997 flat",
      competitor: "$19 / $49 / $99 per line",
      note: "Goodcall's pricing is a fraction of Prestyj's — and the feature depth reflects that",
    },
    {
      feature: "Time to live",
      prestyj: "15 minutes (done-for-you)",
      competitor: "30-60 minutes (self-serve in app)",
      note: "Both are fast — Goodcall is self-configured, Prestyj is configured for you",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true),
    buildCompareFeature(
      STANDARD_FEATURES.AI_TEXT,
      true,
      "Goodcall offers basic message taking; not full SMS qualification",
    ),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      false,
      "Goodcall has limited CRM integrations and no native lead pipeline",
    ),
    buildCompareFeature(
      STANDARD_FEATURES.APPOINTMENT_BOOKING,
      true,
      "Goodcall does basic booking; Prestyj books and qualifies",
    ),
    {
      feature: "Industry-specific scripts",
      prestyj: "Real estate + home services pre-built",
      competitor: "Generic SMB template",
      note: "Goodcall is industry-agnostic by design",
    },
    {
      feature: "Lead qualification depth",
      prestyj: "Vertical-tuned (ARV, motivation, urgency, fit)",
      competitor: "Basic Q&A and message capture",
    },
    {
      feature: "Compliance guardrails",
      prestyj: "TCPA + fair housing built in",
      competitor: "Operator responsibility",
    },
    {
      feature: "Done-for-you optimization",
      prestyj: "Scripts written and A/B tested for you",
      competitor: "Self-managed in mobile app",
    },
    {
      feature: "Support model",
      prestyj: "Dedicated success manager",
      competitor: "Email + help center",
    },
    {
      feature: "Best fit",
      prestyj: "Established teams with real lead volume",
      competitor: "Solo operators needing basic call answering",
    },
  ],
  whySwitch: {
    title: "Why Lead-Heavy Teams Outgrow Goodcall",
    description:
      "Goodcall is genuinely the right answer for a solopreneur paying $49/mo for a phone assistant. It's the wrong answer for a $2M+ real estate team or HVAC company that needs qualification, CRM sync, and compliance done right.",
    reasons: [
      {
        icon: "Target",
        title: "Built for Your Industry, Not Every Industry",
        description:
          "Goodcall is a generalist SMB tool. Prestyj ships pre-trained on real estate (buyer/seller qualification, FHA-compliant language, FUB/kvCore sync) and home services (emergency triage, dispatch routing, ServiceTitan/HCP patterns).",
      },
      {
        icon: "Users",
        title: "Real Lead Qualification, Not Just Message Taking",
        description:
          "Goodcall answers and takes a message. Prestyj qualifies on motivation, timeline, budget, and fit — then books the appointment directly in your CRM. The difference shows up in your booked-rate, not your answer-rate.",
      },
      {
        icon: "Shield",
        title: "Compliance That Doesn't Land on Your Desk",
        description:
          "TCPA consent, fair housing language, and DNC scrubbing are non-negotiable for real estate and home services. Prestyj has those guardrails baked in. With Goodcall, compliance is your problem.",
      },
      {
        icon: "HeartHandshake",
        title: "Done-For-You Operations, Not DIY",
        description:
          "Goodcall asks you to configure everything in the app. Prestyj assigns a success manager who writes scripts, monitors performance, and optimizes for your booked-appointment rate — so you spend zero hours on AI ops.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Goodcall Alternative Overview",
      description: "The full Goodcall alternatives breakdown",
      href: "/alternatives/goodcall",
      linkText: "See alternatives",
    },
    {
      title: "Prestyj vs Smith.ai",
      description: "Compare another receptionist-style competitor",
      href: "/compare/prestyj-vs-smith-ai",
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
    title: "Outgrown Basic Call Answering? See the Difference.",
    description:
      "Goodcall is a great $49/mo phone assistant. Prestyj is a full AI sales agent for teams with real lead volume, real CRM workflows, and real compliance requirements. Book a demo to hear yours live.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "See your real estate or home services AI agent live with your phone number. No engineers required.",
  },
});

export const goodcallCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-goodcall",
  competitorName: "Goodcall",
  title: "Prestyj vs Goodcall: Budget Receptionist vs Full Sales Agent (2026 Comparison)",
  description:
    "Compare Prestyj and Goodcall for AI phone agents. Goodcall is $19-$99/mo for solo operators. Prestyj is $1,997+/mo done-for-you for real estate teams and home services. Honest side-by-side inside.",
  keywords: [
    "Goodcall alternative",
    "Goodcall vs Prestyj",
    "Prestyj vs Goodcall",
    "Goodcall pricing",
    "Goodcall review",
    "Goodcall competitors",
    "is Goodcall worth it",
    "AI phone agent comparison",
    "Goodcall real estate",
    "Goodcall home services",
  ],
};
