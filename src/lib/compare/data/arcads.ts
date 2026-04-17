import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — not AI", included: true },
  { text: "No monthly subscription", included: true },
  { text: "Error revisions included", included: true },
];

export const arcadsCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-arcads",
  competitorName: "Arcads",
  hero: {
    badge: "AI Avatar vs Real Face",
    title: "Prestyj vs",
    titleAccent: "Arcads",
    subtitle:
      "Arcads generates AI actor UGC at scale. Prestyj turns your real face into 300-1,000 scripted ads in 24 hours. In 2026, prospects clock AI avatars in seconds — and the moment they do, the ad is dead.",
    description: "",
    keyStats: [
      { value: "AI actors", label: "What Arcads uses" },
      { value: "You on camera", label: "What Prestyj uses" },
      { value: "24 hrs", label: "Prestyj turnaround" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$110 – $220+",
      priceSubtext: "/month · subscription required",
      features: [
        { text: "Unlimited AI avatar generation", included: true },
        { text: "Multiple AI actor options", included: true },
        { text: "You write every script yourself", included: false },
        { text: "Uses your real face/voice", included: false },
        { text: "AI uncanny valley risk on every ad", included: false },
        { text: "Ongoing subscription with no cap", included: false },
      ],
    },
  },
  features: [
    { feature: "Uses your real face and voice", prestyj: true, competitor: false, note: "Arcads is 100% AI-generated actors" },
    { feature: "Scripts written for you", prestyj: true, competitor: false, note: "Arcads requires you to bring every script" },
    { feature: "Ads per package", prestyj: "300-1,000", competitor: "Unlimited*", note: "*Subject to render credits and your own script output" },
    { feature: "Turnaround time", prestyj: "24 hrs", competitor: "Minutes per ad", note: "But you still need time to write every script yourself" },
    { feature: "Pricing model", prestyj: "One-time", competitor: "Monthly SaaS" },
    { feature: "One-take recording session", prestyj: "15-20 min", competitor: "N/A — no recording" },
    { feature: "Cost per ad (at 500 ads)", prestyj: "~$3-5", competitor: "Depends on tier + script labor" },
    { feature: "Risk of 'AI UGC' disclosure / platform flagging", prestyj: "None", competitor: "Growing — Meta + TikTok are tightening" },
    { feature: "Built-in vertical research (real estate, home services)", prestyj: true, competitor: false },
    { feature: "Brand trust preserved", prestyj: true, competitor: "At risk" },
  ],
  whySwitch: {
    title: "Why Owners Pick Real Face Over Arcads Avatars",
    description: "Arcads is a great tool. It is not a great fit for businesses whose owner IS the brand.",
    reasons: [
      {
        icon: "Users",
        title: "Arcads avatars hit the uncanny valley",
        description:
          "Lip-sync glitches, unnatural micro-expressions, stock gestures. Your prospects have scrolled past 10,000 AI UGC ads this month. They know. And the moment they know, they stop trusting.",
      },
      {
        icon: "FileText",
        title: "Arcads doesn't write your scripts",
        description:
          "The avatar is the easy part. The hook, the pain point, the CTA — you still have to write those. Prestyj hands you 300-1,000 scripts researched for your vertical.",
      },
      {
        icon: "DollarSign",
        title: "Subscriptions never stop",
        description:
          "Arcads is $110-220+/mo forever. Prestyj is one payment, done. At month 12 you've paid Arcads more than a Prestyj batch — and you still have no ads unless you keep paying.",
      },
      {
        icon: "Shield",
        title: "Your face = your moat",
        description:
          "If you're a realtor, advisor, contractor, or founder, your face is the offer. An AI actor pitching your service isn't your brand — it's a generic avatar reading lines.",
      },
      {
        icon: "Target",
        title: "Platforms are cracking down on synthetic UGC",
        description:
          "Meta and TikTok are increasingly labeling or down-ranking AI-generated creator content. Real-face ads sidestep the entire policy surface area.",
      },
    ],
  },
  relatedResources: [
    { title: "vs HeyGen", description: "Another AI avatar platform compared", href: "/compare/prestyj-vs-heygen", linkText: "Read comparison" },
    { title: "vs AI Avatar Ads (category)", description: "All AI avatar tools at once", href: "/compare/prestyj-vs-ai-avatar-ads", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See the Prestyj service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Your Face. 1,000 Ads. One Payment.",
    description:
      "Arcads rents you an AI actor. Prestyj gives you 300-1,000 scripted ads starring the real you, in 24 hours.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const arcadsMetadata: CompareMetadata = {
  slug: "prestyj-vs-arcads",
  competitorName: "Arcads",
  title: "PRESTYJ vs Arcads: Real Faces or AI Avatars? (2026)",
  description:
    "Arcads makes AI avatar ads. PRESTYJ makes real-face video ads from your selfie footage. 300-1,000 ads in 24 hours, starting at $1,497. See which wins.",
  keywords: ["arcads alternative", "arcads vs prestyj", "ai avatar ads alternative", "real face ugc", "batch video ads"],
};
