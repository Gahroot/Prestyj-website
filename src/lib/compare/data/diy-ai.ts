import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const diyAiCompareData: ComparePageData = createComparePage({
  slug: "ai-consultant-vs-diy-ai",
  competitorName: "DIY AI Platforms",
  hero: {
    badge: "Cost & Implementation Guide",
    title: "Done-for-You AI vs. DIY Platforms:",
    titleAccent: "The True Cost Comparison",
    subtitle:
      "Developer platforms charge per minute. Prestyj delivers results. See the hidden costs of DIY AI during storm season and why service businesses choose done-for-you implementation.",
    description: "",
    keyStats: [
      {
        value: "$2,700+",
        label: "Actual DIY cost for 30K minutes",
      },
      {
        value: "8-16 weeks",
        label: "Average DIY implementation time",
      },
      {
        value: "Days",
        label: "Prestyj implementation time",
      },
      {
        value: "$0",
        label: "Per-minute fees with Prestyj",
      },
    ],
  },
  stats: [
    {
      value: "$2,700-5,000+",
      label: "Monthly DIY cost during storm season",
      description:
        "Platform fees + LLM + STT + TTS + telephony add up fast when call volume spikes",
    },
    {
      value: "8-16 weeks",
      label: "Time to production",
      description:
        "Build, test, optimize—and that's assuming you have a dedicated engineering team",
    },
    {
      value: "Days",
      label: "Prestyj implementation",
      description:
        "We handle everything: setup, integration, training, and ongoing optimization",
    },
  ],
  pricing: {
    prestyj: {
      price: "Custom flat pricing",
      priceSubtext: "Predictable monthly cost, zero per-minute fees",
      features: [
        { text: "Done-for-you implementation", included: true },
        { text: "Unlimited minutes & calls", included: true },
        { text: "Ongoing optimization included", included: true },
        { text: "No hidden fees (LLM, STT, TTS, telephony)", included: true },
        { text: "Dedicated support team", included: true },
      ],
    },
    competitor: {
      price: "$0.05-0.09/min",
      priceSubtext: "+ separate bills for LLM, STT, TTS, telephony",
      features: [
        { text: "Build it yourself", included: true, note: "Requires dev team" },
        { text: "Unlimited minutes", included: true, note: "At per-minute rates" },
        { text: "Self-managed optimization", included: true },
        { text: "Multiple separate bills", included: true },
        { text: "Developer documentation", included: true },
      ],
    },
  },
  features: [
    {
      feature: "Implementation Time",
      prestyj: "Days",
      competitor: "8-16 weeks",
      note: "Requires dedicated engineering resources",
    },
    {
      feature: "Technical Expertise Required",
      prestyj: "None",
      competitor: true,
      note: "DIY requires API integration, prompt engineering, infrastructure",
    },
    {
      feature: "Pricing Model",
      prestyj: "Flat monthly rate",
      competitor: "$0.05-0.09/minute + usage fees",
    },
    {
      feature: "Hidden Fees",
      prestyj: "None included",
      competitor: true,
      note: "LLM costs, STT/TTS fees, telephony charges billed separately",
    },
    {
      feature: "Storm Season Cost Spike",
      prestyj: "Flat rate (no spike)",
      competitor: "$2,700-5,000+/month",
      note: "30K minutes × $0.09 = $2,700 platform only",
    },
    {
      feature: "Ongoing Optimization",
      prestyj: "Included",
      competitor: "Self-managed",
      note: "You're responsible for improving prompts and handling edge cases",
    },
    {
      feature: "CRM Integration",
      prestyj: true,
      competitor: "DIY integration",
      note: "Requires custom development work",
    },
    {
      feature: "Emergency Triage",
      prestyj: true,
      competitor: "DIY configuration",
      note: "You build and maintain the logic",
    },
    {
      feature: "Multilingual Support",
      prestyj: true,
      competitor: "Available",
      note: "Requires additional configuration and testing",
    },
    {
      feature: "Support Model",
      prestyj: "Dedicated team",
      competitor: "Developer community",
      note: "DIY platforms rely on docs and forums",
    },
  ],
  whySwitch: {
    title: "Why Service Businesses Choose Done-for-You Over DIY",
    description:
      "The math looks attractive on the homepage. The bill tells a different story.",
    reasons: [
      {
        icon: "DollarSign",
        title: "The Hidden Fee Trap",
        description:
          "Developer platforms advertise $0.05-0.09/minute. What they don't highlight: you'll pay separate bills for the LLM (GPT-4), speech-to-text, text-to-speech, and telephony. Real monthly cost: $2,700-5,000+ for 30,000 minutes.",
      },
      {
        icon: "TrendingUp",
        title: "Storm Season = Budget Disaster",
        description:
          "When your phone rings non-stop during a heatwave or storm, per-minute billing explodes. $0.09/min × 30,000 minutes = $2,700 just for the platform—before LLM, STT, TTS, and phone line fees. Prestyj stays flat.",
      },
      {
        icon: "Clock",
        title: "8-16 Weeks vs. Days",
        description:
          "DIY means hiring developers, building integrations, writing prompts, testing edge cases, and ongoing maintenance. Prestyj handles everything in days—not months. Your team focuses on jobs, not API documentation.",
      },
      {
        icon: "RefreshCw",
        title: "Ongoing Optimization is On You",
        description:
          "DIY platforms give you the tools; you're responsible for improving performance, handling new scenarios, and maintaining the system. Prestyj continuously optimizes based on real calls—no engineering required.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Best for ServiceTitan Users",
      description:
        "Deep integration with ServiceTitan for seamless job booking.",
      href: "/best-for/servicetitan-users",
      linkText: "Learn more",
    },
    {
      title: "Best for HVAC Companies",
      description:
        "Built for high call volume during peak heating and cooling seasons.",
      href: "/best-for/hvac",
      linkText: "Explore HVAC solution",
    },
    {
      title: "Best for Plumbing Contractors",
      description:
        "Emergency triage and immediate dispatch for plumbing emergencies.",
      href: "/best-for/plumbing",
      linkText: "Explore plumbing solution",
    },
    {
      title: "Home Services Solution",
      description:
        "Complete AI workforce for contractors and home service businesses.",
      href: "/solutions/home-services",
      linkText: "View the solution",
    },
  ],
  cta: {
    title: "Ready for Done-for-You AI?",
    titleAccent: "Done-for-You",
    description:
      "Stop worrying about per-minute fees, API integrations, and prompt engineering. Get a production-ready AI workforce in days—not months.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "No commitment required. See your implementation timeline and flat-rate pricing.",
  },
});

export const diyAiMetadata: CompareMetadata = {
  slug: "ai-consultant-vs-diy-ai",
  competitorName: "DIY AI Platforms",
  title:
    "Done-for-You AI vs DIY Platforms: True Cost Comparison for Service Businesses | 2026",
  description:
    "Compare done-for-you AI implementation vs DIY developer platforms. See the hidden costs of per-minute pricing during storm season and why service businesses choose Prestyj.",
  keywords: [
    "done-for-you AI vs DIY",
    "AI consultant vs DIY platforms",
    "AI agency vs build yourself",
    "AI implementation cost comparison",
    "AI for service businesses",
    "Vapi vs Bland vs Retell alternatives",
    "AI voice agent pricing",
    "per-minute AI pricing dangers",
  ],
};
