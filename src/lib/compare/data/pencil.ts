import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts researched and written for you", included: true },
  { text: "Your real face and voice on camera", included: true },
  { text: "24-hour turnaround from recording", included: true },
  { text: "50+ distinct hook angles tested", included: true },
  { text: "Industry-specific script research", included: true },
  { text: "One-time payment — no subscription", included: true },
  { text: "Hook + body + CTA variation engineering", included: true },
];

export const pencilCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-pencil",
  competitorName: "Pencil",
  hero: {
    badge: "AI Creative Platform vs Done-For-You Creative",
    title: "Prestyj vs",
    titleAccent: "Pencil",
    subtitle:
      "Pencil is an AI creative platform that generates ad variations from your existing assets. It's fast at remixing — but you still have to provide every original concept, every script, and every hook. Prestyj handles the entire creative pipeline: research, scripts, recording, and production.",
    description: "",
    keyStats: [
      { value: "DIY creative", label: "Pencil approach" },
      { value: "Done-for-you", label: "Prestyj approach" },
      { value: "$49–$499/mo", label: "Pencil plans" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$49 / $149 / $499",
      priceSubtext: "/month · output caps per plan",
      features: [
        { text: "AI-generated ad variations from assets", included: true },
        { text: "Performance prediction scoring", included: true },
        { text: "You create all original concepts", included: false },
        { text: "You write every script and hook", included: false },
        { text: "No real human on camera", included: false },
        { text: "Output caps on every plan", included: false },
        { text: "Brand-specific creative research", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Scripts researched and written for you",
      prestyj: true,
      competitor: false,
      note: "Pencil remixes assets you provide — you create the originals",
    },
    { feature: "Uses your real face and voice", prestyj: true, competitor: false },
    {
      feature: "Creative output volume",
      prestyj: "300-1,000 ads per batch",
      competitor: "Varies by plan, asset-dependent",
    },
    {
      feature: "Industry-specific research (HVAC, real estate, home services)",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Turnaround time",
      prestyj: "24 hours from recording",
      competitor: "Minutes per variation — but you build the source",
    },
    {
      feature: "Pricing model",
      prestyj: "One-time $1,497-$3,997",
      competitor: "Recurring $49-$499/mo",
    },
    {
      feature: "Original creative development",
      prestyj: "Full service",
      competitor: "Self-service",
    },
    {
      feature: "Hook strategy and testing framework",
      prestyj: true,
      competitor: "You design it yourself",
    },
    {
      feature: "Cost per ad at 500 ads",
      prestyj: "~$3-5",
      competitor: "Platform cost + your creative labor",
    },
    { feature: "Brand trust from real owner on camera", prestyj: true, competitor: false },
  ],
  whySwitch: {
    title: "Why Pencil's Remix Model Leaves Strategy on the Table",
    description: "Pencil optimizes creative you already have. Prestyj creates creative you don't.",
    reasons: [
      {
        icon: "FileText",
        title: "Pencil needs your originals — Prestyj creates them",
        description:
          "Pencil generates variations from assets you upload. If you don't have strong original creative, Pencil remixes weak assets into more weak assets. Prestyj builds the originals from scratch with industry-specific research.",
      },
      {
        icon: "Users",
        title: "AI-generated ads lack authentic human presence",
        description:
          "Pencil's AI-generated variations don't put your face on camera. In home services and real estate, trust drives conversion. Your face, your voice, your story — that's what makes prospects call. AI assets can't replicate that trust.",
      },
      {
        icon: "Target",
        title: "No vertical expertise — Pencil is horizontal",
        description:
          "Pencil works across every industry the same way. Prestyj's scripts are researched for real estate, home services, and owner-operated businesses — with hooks based on the specific pain points your prospects search for.",
      },
      {
        icon: "Clock",
        title: "Output caps limit your testing ceiling",
        description:
          "Pencil's plans cap monthly creative output. Need 500 variations for a launch? Upgrade to the $499/mo plan — and you're still limited. Prestyj ships 300-1,000 ads in a single batch with no monthly cap.",
      },
      {
        icon: "DollarSign",
        title: "One-time payment beats SaaS fatigue",
        description:
          "Pencil at $149/mo = $1,788/year for a platform that still requires you to do the creative work. Prestyj: $1,497 once for 300+ fully-produced ads. Over 12 months, you've saved money and produced higher-trust creative.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Creatify",
      description: "Another AI creative tool compared",
      href: "/compare/prestyj-vs-creatify",
      linkText: "Read comparison",
    },
    {
      title: "vs Arcads",
      description: "AI UGC platform compared",
      href: "/compare/prestyj-vs-arcads",
      linkText: "Read comparison",
    },
    {
      title: "Batch Video Ads",
      description: "See Prestyj's core service",
      href: "/batch-video-ads",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Skip the DIY Creative. Get It Done for You.",
    description:
      "Pencil remixed what you make. Prestyj makes everything — research, scripts, recording, production. 300-1,000 ads in 24 hours for one flat fee.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const pencilMetadata: CompareMetadata = {
  slug: "prestyj-vs-pencil",
  competitorName: "Pencil",
  title: "PRESTYJ vs Pencil: Done-For-You vs AI Creative Remix (2026)",
  description:
    "Pencil generates ad variations from assets you create. PRESTYJ handles the entire creative pipeline: research, scripts, filming, and production. 300-1,000 ads in 24 hours, from $1,497 one-time.",
  keywords: [
    "pencil ai alternative",
    "pencil vs prestyj",
    "pencil ai creative platform",
    "ai ad creative tool alternative",
    "creative testing platform compared",
    "batch video ads vs pencil",
  ],
};
