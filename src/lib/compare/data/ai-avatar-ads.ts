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

export const aiAvatarAdsCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-ai-avatar-ads",
  competitorName: "AI Avatar Ads",
  hero: {
    badge: "Real Face vs Synthetic Actors",
    title: "Prestyj vs",
    titleAccent: "AI Avatar Ads",
    subtitle:
      "Arcads. HeyGen. Creatify. Synthesia. MakeUGC. All synthetic. Your service business runs on trust — and in 2026, a prospect spotting an AI avatar pretending to be you erodes that trust before the ad finishes playing.",
    description: "",
    keyStats: [
      { value: "Synthetic", label: "AI avatar output" },
      { value: "Real owner", label: "Prestyj output" },
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
      price: "$19 – $220+",
      priceSubtext: "/month · across tools · forever",
      features: [
        { text: "Unlimited AI avatar rendering", included: true },
        { text: "Fast per-render generation", included: true },
        { text: "You script every ad yourself", included: false },
        { text: "Trust leaks the moment AI is spotted", included: false },
        { text: "Platform policy risk (AI disclosure)", included: false },
        { text: "Ongoing subscription cost", included: false },
      ],
    },
  },
  features: [
    { feature: "Uses your real face and voice", prestyj: true, competitor: false },
    { feature: "Scripts written and researched for you", prestyj: true, competitor: false },
    { feature: "Ads per batch", prestyj: "300-1,000", competitor: "Credit / minute capped" },
    { feature: "Pricing model", prestyj: "One-time", competitor: "Recurring SaaS" },
    { feature: "Trust signal to prospects", prestyj: "Strong — real owner", competitor: "Eroding — prospects spot AI" },
    { feature: "Platform AI disclosure risk", prestyj: "None", competitor: "Rising — Meta / TikTok / LinkedIn" },
    { feature: "Turnaround", prestyj: "24 hrs, done-for-you", competitor: "Minutes per render, but script labor is yours" },
    { feature: "Vertical-specific research (real estate, home services)", prestyj: true, competitor: false },
    { feature: "One-take recording session", prestyj: "15-20 min", competitor: "N/A" },
    { feature: "Cost for 500 finished ads", prestyj: "$1,497-$3,997 flat", competitor: "SaaS + your time scripting 500 ads" },
  ],
  whySwitch: {
    title: "Why Real-Face Ads Beat AI Avatars in 2026",
    description: "The entire category has a trust problem that isn't getting better.",
    reasons: [
      {
        icon: "Users",
        title: "Prospects always notice",
        description:
          "In 2024 a few people spotted AI UGC. In 2026 almost everyone does. Lip-sync artifacts, dead-eye micro-expressions, uncanny hand gestures — the tell is obvious and growing.",
      },
      {
        icon: "Shield",
        title: "Trust collapses the moment it's clocked",
        description:
          "For service businesses — real estate, financial, legal, home services — the prospect is buying YOU. A synthetic stand-in is the fastest way to lose the sale before the first call.",
      },
      {
        icon: "AlertTriangle",
        title: "Platform policies are tightening",
        description:
          "Meta, TikTok, LinkedIn, and YouTube are all rolling out AI-content labeling and reduced distribution. Real-face ads sidestep the policy surface area entirely.",
      },
      {
        icon: "FileText",
        title: "You still write every script",
        description:
          "AI avatar tools render. They don't research, position, or write. Prestyj does all three and then films you.",
      },
      {
        icon: "DollarSign",
        title: "One-time beats stacked SaaS forever",
        description:
          "Most brands end up paying for 2-3 AI tools at once. That's $50-$500/mo recurring. One Prestyj batch is less than a year of that stack — and it's a real asset library, not rented avatars.",
      },
      {
        icon: "Target",
        title: "Your face is the moat",
        description:
          "Competitors can license the same AI avatar you use. They can't license your face. Batch ads starring the real you are an asset no one can replicate.",
      },
    ],
  },
  relatedResources: [
    { title: "vs Arcads", description: "Single-tool comparison", href: "/compare/prestyj-vs-arcads", linkText: "Read comparison" },
    { title: "vs HeyGen", description: "Single-tool comparison", href: "/compare/prestyj-vs-heygen", linkText: "Read comparison" },
    { title: "vs Creatify", description: "Single-tool comparison", href: "/compare/prestyj-vs-creatify", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Real Beats Synthetic. Every Time.",
    description:
      "Stop renting an AI actor. Show up as yourself in 300-1,000 scripted ads for one flat fee.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const aiAvatarAdsMetadata: CompareMetadata = {
  slug: "prestyj-vs-ai-avatar-ads",
  competitorName: "AI Avatar Ads",
  title: "Real Faces Beat AI Avatars in Service Ads | PRESTYJ vs AI",
  description:
    "AI avatar ads feel fake. PRESTYJ produces 300-1,000 scripted video ads with your real face in 24 hours - for $1,497, not $5K+ monthly subscriptions.",
  keywords: ["ai avatar ads alternative", "real face ugc", "anti-ai ugc", "batch video ads", "owner-led ads"],
};
