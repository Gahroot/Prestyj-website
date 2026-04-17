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

export const heygenCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-heygen",
  competitorName: "HeyGen",
  hero: {
    badge: "AI Avatar Platform vs Real Owner Face",
    title: "Prestyj vs",
    titleAccent: "HeyGen",
    subtitle:
      "HeyGen makes talking AI avatars. Prestyj makes you — the real business owner — show up in 300-1,000 scripted ads in 24 hours. For service businesses, your face is the offer. An avatar never closes.",
    description: "",
    keyStats: [
      { value: "AI avatar", label: "HeyGen output" },
      { value: "Your real face", label: "Prestyj output" },
      { value: "One-time", label: "Prestyj pricing" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$29 – $89+",
      priceSubtext: "/month · enterprise tiers $1,000+/mo",
      features: [
        { text: "Large library of AI avatars", included: true },
        { text: "Text-to-video in 40+ languages", included: true },
        { text: "You write every script", included: false },
        { text: "Uses your real face", included: false },
        { text: "Minute caps per plan", included: false },
        { text: "Recurring subscription", included: false },
      ],
    },
  },
  features: [
    { feature: "Uses your real face and voice", prestyj: true, competitor: "Optional avatar clone (awkward)", note: "HeyGen's 'Instant Avatar' of you still has AI lip-sync artifacts" },
    { feature: "Scripts written for you", prestyj: true, competitor: false, note: "HeyGen is BYO-script — every single one" },
    { feature: "Ads per batch", prestyj: "300-1,000", competitor: "Limited by credits/minutes per plan" },
    { feature: "Turnaround", prestyj: "24 hrs, done-for-you", competitor: "Minutes per render — but script + direction is yours" },
    { feature: "Monthly subscription required", prestyj: false, competitor: true },
    { feature: "Cost per ad at 500 ads", prestyj: "~$3-5", competitor: "Variable — plus your script-writing labor" },
    { feature: "Vertical-specific scripts (real estate, home services)", prestyj: true, competitor: false },
    { feature: "Platform policy risk (AI disclosure)", prestyj: "None", competitor: "Rising — Meta / TikTok AI content rules" },
    { feature: "One-take recording", prestyj: "15-20 min", competitor: "N/A (or 2-min avatar training clip)" },
    { feature: "Variation engineering (hooks, CTAs)", prestyj: true, competitor: "You build every variation" },
  ],
  whySwitch: {
    title: "Why HeyGen Falls Short for Owner-Operator Brands",
    description: "HeyGen is a brilliant general tool. It is not a batch ad system for your face.",
    reasons: [
      {
        icon: "Users",
        title: "HeyGen's avatar of YOU still looks AI",
        description:
          "Even their 'Instant Avatar' trained on your footage has telltale micro-artifacts in the lips, eyes, and gestures. Prospects pattern-match AI instantly in 2026.",
      },
      {
        icon: "FileText",
        title: "You write 500 scripts. Every time.",
        description:
          "HeyGen doesn't know your vertical, your pain points, or your pricing. Prestyj's script team researches your market and delivers 300-1,000 scripts built for your prospects.",
      },
      {
        icon: "DollarSign",
        title: "The subscription never caps",
        description:
          "HeyGen Business is $89/mo. Enterprise and Scale run well past $1,000/mo. One Prestyj batch is less than a year of mid-tier HeyGen — and it's a real, finished asset library.",
      },
      {
        icon: "Target",
        title: "Service businesses run on trust",
        description:
          "Realtors, advisors, lawyers, contractors — your face IS the product. An AI avatar saying your words is the fastest way to leak trust before a prospect even books.",
      },
      {
        icon: "Zap",
        title: "Done-for-you vs do-it-yourself",
        description:
          "HeyGen is software. Prestyj is a service. You record 15 minutes once. We handle the rest.",
      },
    ],
  },
  relatedResources: [
    { title: "vs Arcads", description: "Another AI avatar tool", href: "/compare/prestyj-vs-arcads", linkText: "Read comparison" },
    { title: "vs AI Avatar Ads (category)", description: "All AI avatar tools compared", href: "/compare/prestyj-vs-ai-avatar-ads", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Skip the Avatar. Be the Ad.",
    description:
      "HeyGen ships software. Prestyj ships 300-1,000 finished ads starring you in 24 hours — for a one-time price.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const heygenMetadata: CompareMetadata = {
  slug: "prestyj-vs-heygen",
  competitorName: "HeyGen",
  title: "PRESTYJ vs HeyGen: Your Real Face or an AI Clone? (2026)",
  description:
    "HeyGen's avatar of you still looks AI. PRESTYJ films the actual you - 300-1,000 scripted ads in 24 hours for $1,497 one-time, not $89/mo forever.",
  keywords: ["heygen alternative", "heygen vs prestyj", "ai avatar ad alternative", "real owner ugc", "batch video ads"],
};
