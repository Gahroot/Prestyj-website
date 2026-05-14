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

export const capcutCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-capcut",
  competitorName: "CapCut",
  hero: {
    badge: "DIY Video Editor vs Done-For-You Ads",
    title: "Prestyj vs",
    titleAccent: "CapCut",
    subtitle:
      "CapCut is a free editor built for creators who like editing. Prestyj is a service for business owners who don't have time to write scripts, film, edit, and export 500 vertical ads. Same face. Wildly different workload.",
    description: "",
    keyStats: [
      { value: "Free", label: "CapCut price" },
      { value: "$1,497+", label: "Prestyj one-time" },
      { value: "0 → 500 ads", label: "Hours saved per batch" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "Free – $19.99",
      priceSubtext: "/month for Pro features",
      features: [
        { text: "Free tier with watermark-free exports", included: true },
        { text: "Massive template + effect library", included: true },
        { text: "You write every script", included: false },
        { text: "You film every clip", included: false },
        { text: "You cut, caption, and export every ad", included: false },
        { text: "Owned by ByteDance — data + policy uncertainty", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Scripts written for you",
      prestyj: true,
      competitor: false,
      note: "CapCut has zero scriptwriting — it's an editor",
    },
    { feature: "Filming + directing handled", prestyj: true, competitor: false },
    { feature: "Editing + captions + exports", prestyj: true, competitor: "You do all of it" },
    {
      feature: "Ads delivered per batch",
      prestyj: "300-1,000",
      competitor: "However many you have time to make",
    },
    {
      feature: "Time investment per 500 ads",
      prestyj: "15-20 min recording",
      competitor: "200+ hours of editing",
    },
    { feature: "Hook + CTA variation engineering", prestyj: true, competitor: false },
    {
      feature: "Vertical-specific ad strategy",
      prestyj: true,
      competitor: false,
      note: "CapCut is platform-agnostic — no real estate / home services lens",
    },
    {
      feature: "Best-fit user",
      prestyj: "Owner-operators with no time",
      competitor: "Solo creators editing their own content",
    },
    {
      feature: "Subscription required",
      prestyj: false,
      competitor: "Pro is $19.99/mo if you want premium assets",
    },
    {
      feature: "Turnaround on a 500-ad batch",
      prestyj: "24 hours",
      competitor: "Weeks of nights and weekends",
    },
  ],
  whySwitch: {
    title: "Why CapCut Isn't a Real Ad System for Business Owners",
    description:
      "CapCut is incredible software. It is not a content team. If you don't have hours to script, film, and edit, the editor doesn't matter.",
    reasons: [
      {
        icon: "Clock",
        title: "An editor doesn't make the ad — you do",
        description:
          "CapCut hands you tools. You still have to write 500 scripts, film 500 takes, cut 500 timelines, and caption 500 exports. Most owners abandon by ad #4.",
      },
      {
        icon: "FileText",
        title: "Zero scriptwriting included",
        description:
          "CapCut has templates, not strategy. Prestyj's team researches your vertical and writes every hook, body, and CTA before you ever press record.",
      },
      {
        icon: "Building2",
        title: "Built for creators, not service businesses",
        description:
          "CapCut's templates assume you're a TikTok creator chasing trends. Realtors, contractors, and advisors need ads that build trust — different game entirely.",
      },
      {
        icon: "Zap",
        title: "Done-for-you vs DIY forever",
        description:
          "Prestyj is a one-time, 24-hour delivery. CapCut is a forever-DIY treadmill. You record 15 minutes; we ship 500 finished ads.",
      },
      {
        icon: "AlertTriangle",
        title: "ByteDance ownership = ongoing policy risk",
        description:
          "CapCut is owned by TikTok's parent. U.S. policy and data rules around it keep shifting. Prestyj delivers raw MP4 files you own forever.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Canva",
      description: "Design tool with scheduling",
      href: "/compare/prestyj-vs-canva",
      linkText: "Read comparison",
    },
    {
      title: "vs Fiverr Video Ads",
      description: "Freelance ad gigs",
      href: "/compare/prestyj-vs-fiverr-video-ads",
      linkText: "Read comparison",
    },
    {
      title: "Batch Video Ads",
      description: "See Prestyj's service",
      href: "/batch-video-ads",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Stop Editing. Start Shipping.",
    description:
      "CapCut is free, but your time isn't. Prestyj delivers 300-1,000 finished vertical ads in 24 hours so you can run ads — not edit them.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const capcutMetadata: CompareMetadata = {
  slug: "prestyj-vs-capcut",
  competitorName: "CapCut",
  title: "PRESTYJ vs CapCut: Done-For-You Ads vs DIY Editor (2026)",
  description:
    "CapCut is a free editor — you still write, film, and cut every ad. PRESTYJ ships 300-1,000 finished vertical ads in 24 hours from one 15-min recording.",
  keywords: [
    "capcut alternative",
    "capcut vs prestyj",
    "video editor alternative",
    "done for you video ads",
    "batch video ads",
  ],
};
