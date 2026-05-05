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

export const adcreativeAiCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-adcreative-ai",
  competitorName: "AdCreative.ai",
  hero: {
    badge: "Static Image Ads vs Real-Face Video Ads",
    title: "Prestyj vs",
    titleAccent: "AdCreative.ai",
    subtitle:
      "AdCreative.ai generates static banner and image ads from your brand kit. In 2026, vertical video with a real human face is what wins on Meta, TikTok, and Reels. Prestyj ships 300-1,000 of those in 24 hours.",
    description: "",
    keyStats: [
      { value: "Static images", label: "AdCreative.ai output" },
      { value: "Vertical video", label: "Prestyj output" },
      { value: "Real owner face", label: "Prestyj advantage" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$29 – $209+",
      priceSubtext: "/month · download credits per plan",
      features: [
        { text: "AI-generated static ad images & banners", included: true },
        { text: "Brand kit & template variations", included: true },
        { text: "Conversion-score predictions", included: true },
        { text: "Produces vertical video ads", included: false },
        { text: "Includes you on camera", included: false },
        { text: "Writes spoken hook/CTA scripts", included: false },
      ],
    },
  },
  features: [
    { feature: "Output format", prestyj: "Vertical video (9:16)", competitor: "Static images & banners" },
    { feature: "Includes your real face", prestyj: true, competitor: false },
    { feature: "Spoken scripts written for you", prestyj: true, competitor: false, note: "AdCreative.ai writes short headline copy, not video scripts" },
    { feature: "Ads per batch", prestyj: "300-1,000 video ads", competitor: "Limited by monthly download credits" },
    { feature: "Built for Reels / TikTok / Shorts", prestyj: true, competitor: false, note: "Static images underperform vs video on vertical-feed placements" },
    { feature: "Turnaround", prestyj: "24 hrs, done-for-you", competitor: "Seconds per image — but it's still a static image" },
    { feature: "Monthly subscription required", prestyj: false, competitor: true },
    { feature: "Cost over 12 months (Premium tier)", prestyj: "$1,497 once", competitor: "$2,500+ for a year of static creative" },
    { feature: "Vertical-specific scripts (real estate, home services)", prestyj: true, competitor: false },
    { feature: "Owner-led trust signal", prestyj: true, competitor: false },
  ],
  whySwitch: {
    title: "Why Static Image Ads Are Losing in 2026",
    description: "AdCreative.ai is a great tool for what it does — banner and image ads. The problem is that vertical video with a real human face has eaten the feed.",
    reasons: [
      {
        icon: "TrendingUp",
        title: "Vertical video dominates the feed",
        description:
          "Meta and TikTok both prioritize 9:16 video in 2026, and ad platforms reward video creatives with lower CPMs. Static images are increasingly the format that loses the auction.",
      },
      {
        icon: "Users",
        title: "Service businesses sell on the human, not the headline",
        description:
          "Realtors, advisors, contractors, and lawyers convert when a prospect sees the actual owner. AdCreative.ai can render your headline 50 ways — it can't put your face on camera.",
      },
      {
        icon: "FileText",
        title: "Headlines aren't ad scripts",
        description:
          "AdCreative.ai generates short ad copy. Prestyj's script team writes hook + body + CTA video scripts engineered for cold-traffic, vertical-format ads in your specific vertical.",
      },
      {
        icon: "DollarSign",
        title: "Subscription credits cap your output",
        description:
          "AdCreative.ai's plans run $29-$209+/mo with download caps. Prestyj is one payment, no caps, no monthly bill — and the asset is a 300-1,000-ad library you own forever.",
      },
      {
        icon: "Target",
        title: "Direct-response wants motion + a face",
        description:
          "The highest-performing creatives on Meta and TikTok in 2026 are owner-led, vertical, talking-head video. Prestyj is purpose-built for that exact format.",
      },
    ],
  },
  relatedResources: [
    { title: "vs HeyGen", description: "AI avatars vs real face", href: "/compare/prestyj-vs-heygen", linkText: "Read comparison" },
    { title: "vs Pencil", description: "AI ad creative platform compared", href: "/compare/prestyj-vs-pencil", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Static Loses. Video With a Real Face Wins.",
    description:
      "AdCreative.ai will keep cranking out static banners. Prestyj ships 300-1,000 vertical video ads with your real face in 24 hours, for a one-time price.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const adcreativeAiMetadata: CompareMetadata = {
  slug: "prestyj-vs-adcreative-ai",
  competitorName: "AdCreative.ai",
  title: "PRESTYJ vs AdCreative.ai: Static Images or Real-Face Video Ads? (2026)",
  description:
    "AdCreative.ai makes static image ads for $29-$209/mo. PRESTYJ ships 300-1,000 vertical video ads with your real face in 24 hours for $1,497 one-time.",
  keywords: ["adcreative.ai alternative", "adcreative ai vs prestyj", "ai ad creative alternative", "video ads vs static ads", "batch video ads"],
};
