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

export const opusClipCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-opus-clip",
  competitorName: "Opus Clip",
  hero: {
    badge: "Repurposing Tool vs Net-New Ad Batches",
    title: "Prestyj vs",
    titleAccent: "Opus Clip",
    subtitle:
      "Opus Clip slices your existing long-form videos into short clips. If you don't have hours of long-form footage, it has nothing to clip. Prestyj generates 300-1,000 brand-new vertical ads from one 15-minute recording session.",
    description: "",
    keyStats: [
      { value: "Hours of footage", label: "Opus Clip input" },
      { value: "15-20 minutes", label: "Prestyj input" },
      { value: "Net-new ads", label: "Prestyj output" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$15 – $79+",
      priceSubtext: "/month · upload-minute caps per plan",
      features: [
        { text: "Auto-clips long videos into shorts", included: true },
        { text: "AI captions and reframing", included: true },
        { text: "Virality scoring", included: true },
        { text: "Requires existing long-form footage", included: false },
        { text: "Writes net-new ad scripts", included: false },
        { text: "Engineers hooks/CTAs for ads", included: false },
      ],
    },
  },
  features: [
    { feature: "Works without existing long-form footage", prestyj: true, competitor: false, note: "Opus Clip is a repurposer — no source video, no clips" },
    { feature: "Scripts written for you", prestyj: true, competitor: false, note: "Opus uses whatever you said in the original video" },
    { feature: "Ads per batch", prestyj: "300-1,000", competitor: "Limited by minutes you upload" },
    { feature: "Recording required", prestyj: "15-20 min one-take", competitor: "Hours of pre-existing podcasts/streams/webinars" },
    { feature: "Hook + CTA variations engineered", prestyj: true, competitor: "Whatever was in your original — no rewrites" },
    { feature: "Turnaround", prestyj: "24 hrs, done-for-you", competitor: "Minutes per render — but you supply the source" },
    { feature: "Monthly subscription required", prestyj: false, competitor: true },
    { feature: "Vertical-specific ad scripts (real estate, home services)", prestyj: true, competitor: false },
    { feature: "Cost per ad at 500 ads", prestyj: "~$3-5", competitor: "Subscription + the cost of producing source footage" },
    { feature: "Done-for-you service", prestyj: true, competitor: false },
  ],
  whySwitch: {
    title: "Why Opus Clip Doesn't Solve the Owner-Operator Ad Problem",
    description: "Opus Clip is brilliant for podcasters and streamers. It is not a creative engine for service businesses with no long-form library.",
    reasons: [
      {
        icon: "FileText",
        title: "No long-form footage = no clips",
        description:
          "Opus Clip needs hours of source video to slice. Most realtors, advisors, and contractors don't run a podcast. Prestyj only needs you on camera for 15-20 minutes — once.",
      },
      {
        icon: "Target",
        title: "Repurposed clips ≠ direct-response ads",
        description:
          "A clip from your Zoom webinar isn't engineered to stop a scroll, hook a cold prospect, and drive a CTA. Prestyj scripts every ad as a direct-response unit: hook, value, CTA.",
      },
      {
        icon: "Sparkles",
        title: "Variation comes from scripting, not slicing",
        description:
          "Opus can output many clips, but they're all flavors of the same monologue. Prestyj writes 300-1,000 distinct hook/body/CTA combinations so you can actually test creative.",
      },
      {
        icon: "DollarSign",
        title: "Subscription stacks with the cost of source content",
        description:
          "Opus Clip is $15-$79+/mo, but the real cost is producing the long-form video it needs. Prestyj is one payment and one short recording session — no podcast empire required.",
      },
      {
        icon: "Zap",
        title: "Done-for-you vs do-it-yourself",
        description:
          "Opus Clip is software you operate. Prestyj is a service that handles scripts, edits, captions, hooks, and CTAs end-to-end.",
      },
    ],
  },
  relatedResources: [
    { title: "vs HeyGen", description: "AI avatars vs your real face", href: "/compare/prestyj-vs-heygen", linkText: "Read comparison" },
    { title: "vs UGC Creators", description: "Hired creators vs the actual owner", href: "/compare/prestyj-vs-ugc-creators", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "No Podcast Required. Just 15 Minutes on Camera.",
    description:
      "Opus Clip needs hours of footage you don't have. Prestyj needs one short recording session — and ships 300-1,000 finished ads in 24 hours.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const opusClipMetadata: CompareMetadata = {
  slug: "prestyj-vs-opus-clip",
  competitorName: "Opus Clip",
  title: "PRESTYJ vs Opus Clip: Repurpose vs Create From Scratch (2026)",
  description:
    "Opus Clip needs hours of long-form footage to slice. PRESTYJ creates 300-1,000 net-new vertical ads from one 15-minute recording session — no podcast required.",
  keywords: ["opus clip alternative", "opus clip vs prestyj", "video repurposing alternative", "batch video ads", "vertical video ads"],
};
