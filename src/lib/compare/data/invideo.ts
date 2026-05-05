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

export const invideoCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-invideo",
  competitorName: "InVideo",
  hero: {
    badge: "Stock Footage AI vs Real Owner Face",
    title: "Prestyj vs",
    titleAccent: "InVideo",
    subtitle:
      "InVideo stitches stock footage and AI voiceover into generic videos. For service businesses, prospects need to see the actual owner — not a montage of stock B-roll. Prestyj puts your real face in 300-1,000 ads in 24 hours.",
    description: "",
    keyStats: [
      { value: "Stock + AI voice", label: "InVideo output" },
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
      price: "$25 – $60+",
      priceSubtext: "/month · export & stock-asset caps",
      features: [
        { text: "AI text-to-video from prompts", included: true },
        { text: "Large stock footage / music library", included: true },
        { text: "Drag-and-drop template editor", included: true },
        { text: "Uses your real face on camera", included: false },
        { text: "Writes direct-response ad scripts", included: false },
        { text: "Engineers hook/CTA variations", included: false },
      ],
    },
  },
  features: [
    { feature: "Uses your real face and voice", prestyj: true, competitor: false, note: "InVideo is stock footage + AI voiceover by default" },
    { feature: "Scripts written for you", prestyj: true, competitor: false },
    { feature: "Ads per batch", prestyj: "300-1,000", competitor: "Limited by export minutes per plan" },
    { feature: "Turnaround", prestyj: "24 hrs, done-for-you", competitor: "Per-render minutes — but you build every video" },
    { feature: "Monthly subscription required", prestyj: false, competitor: true },
    { feature: "Cost per ad at 500 ads", prestyj: "~$3-5", competitor: "Subscription + dozens of hours of editing labor" },
    { feature: "Vertical-specific ad scripts (real estate, home services)", prestyj: true, competitor: false },
    { feature: "Generic stock footage risk (looks like everyone else)", prestyj: false, competitor: true },
    { feature: "AI content disclosure / policy risk", prestyj: false, competitor: true, note: "Meta and TikTok increasingly flag AI-voiced content" },
    { feature: "One-take recording", prestyj: "15-20 min", competitor: "N/A — you assemble in the editor" },
  ],
  whySwitch: {
    title: "Why InVideo Falls Short for Service-Business Ads",
    description: "InVideo is a flexible video editor with AI assist. It's not a batch ad system that puts the actual owner on camera.",
    reasons: [
      {
        icon: "Users",
        title: "Stock footage doesn't sell trust",
        description:
          "Realtors, advisors, contractors, and lawyers convert when a prospect sees the real human they'd be hiring. A drone clip of a city skyline plus AI voiceover is the opposite of that.",
      },
      {
        icon: "FileText",
        title: "You still write every script",
        description:
          "InVideo's AI helps assemble video, but you bring the angle, the hook, the CTA, and the offer. Prestyj's script team researches your vertical and ships 300-1,000 ad-ready scripts.",
      },
      {
        icon: "Sparkles",
        title: "Templates produce sameness, not variation",
        description:
          "Most InVideo outputs look like every other small-business explainer because they share the same templates and stock libraries. Prestyj's variation comes from real, original creative direction.",
      },
      {
        icon: "Shield",
        title: "AI-content platform risk is rising",
        description:
          "Meta, TikTok, and YouTube are tightening AI-disclosure rules in 2026. Real-face UGC ads sit safely outside that policy storm.",
      },
      {
        icon: "Zap",
        title: "Done-for-you vs do-it-yourself",
        description:
          "InVideo is software you operate, frame by frame. Prestyj is a service: scripts, recording guidance, edits, captions, hooks, and CTAs — all done.",
      },
    ],
  },
  relatedResources: [
    { title: "vs HeyGen", description: "AI avatars vs your real face", href: "/compare/prestyj-vs-heygen", linkText: "Read comparison" },
    { title: "vs Synthesia", description: "Avatar video vs UGC video", href: "/compare/prestyj-vs-synthesia", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Skip the Stock Footage. Be the Ad.",
    description:
      "InVideo gives you a powerful editor and a stack of templates. Prestyj gives you 300-1,000 finished ads with your real face in 24 hours.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const invideoMetadata: CompareMetadata = {
  slug: "prestyj-vs-invideo",
  competitorName: "InVideo",
  title: "PRESTYJ vs InVideo: Stock Footage AI vs Your Real Face (2026)",
  description:
    "InVideo stitches stock footage with AI voiceover for $25-$60/mo. PRESTYJ films the real you for 300-1,000 vertical ads in 24 hours, $1,497 one-time.",
  keywords: ["invideo alternative", "invideo vs prestyj", "ai video creation alternative", "real face ugc ads", "batch video ads"],
};
