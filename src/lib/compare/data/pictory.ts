import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — not stock footage", included: true },
  { text: "Month-to-month, no long-term contract", included: true },
  { text: "Error revisions included", included: true },
];

export const pictoryCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-pictory",
  competitorName: "Pictory",
  hero: {
    badge: "Text-to-Video Tool vs Owner-Face Batch",
    title: "Prestyj vs",
    titleAccent: "Pictory",
    subtitle:
      "Pictory turns scripts, blog posts, or articles into stock-footage videos with AI voiceover or captions. Great for repurposing long-form content into faceless social posts. For paid ads where prospects need to trust the owner on camera, stock-footage explainers underperform UGC every time.",
    description: "",
    keyStats: [
      { value: "Stock + AI voice", label: "Pictory output" },
      { value: "Your real face", label: "Prestyj output" },
      { value: "24 hrs", label: "Prestyj turnaround" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/mo Starter · $3,997 setup · ad budget + AI agents included",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$25 – $119+",
      priceSubtext: "/month · video minutes capped per tier",
      features: [
        { text: "Script / article / blog → video automation", included: true },
        { text: "Stock footage + AI voiceover library", included: true },
        { text: "Auto-caption + transcript editing", included: true },
        { text: "Your real face on camera", included: false },
        { text: "Ad-ready hooks + CTAs (not just explainers)", included: false },
        { text: "Scripts researched for your vertical", included: false },
        { text: "Built for paid-social UGC ads (not faceless content)", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Uses your real face and voice",
      prestyj: true,
      competitor: false,
      note: "Pictory builds faceless videos from stock footage + AI voice or captions",
    },
    {
      feature: "Scripts researched and written for you",
      prestyj: true,
      competitor: false,
      note: "Pictory converts YOUR scripts/articles into video; ideation stays with you",
    },
    {
      feature: "Output type",
      prestyj: "Native UGC ads (talking-head, vertical)",
      competitor: "Faceless explainers, social repurposing, captioned content",
    },
    {
      feature: "Built for paid social ads",
      prestyj: true,
      competitor: false,
      note: "Pictory is positioned for organic content, repurposing, and YouTube/LinkedIn explainers",
    },
    {
      feature: "Output per engagement",
      prestyj: "300-1,000 finished ads",
      competitor: "Limited by monthly video minute cap per plan",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hrs, done-for-you",
      competitor: "Minutes per render, but script + editing work is yours",
    },
    {
      feature: "Pricing model",
      prestyj: "One-time / month-to-month",
      competitor: "Recurring SaaS subscription with minute caps",
    },
    {
      feature: "Vertical-specific ad hooks (real estate, home services)",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Brand trust from owner-on-camera",
      prestyj: true,
      competitor: false,
      note: "Faceless stock-footage ads don't build personal brand for service businesses",
    },
    {
      feature: "Cost per finished ad at 500 ads",
      prestyj: "~$3-5",
      competitor: "Variable; minute caps force higher-tier plans or overage",
    },
  ],
  whySwitch: {
    title: "Why Pictory Isn't Built for Owner-Led Paid Ads",
    description:
      "Pictory is a strong tool for one job: turning long-form text into faceless, captioned, stock-footage videos. That format works for organic social repurposing and educational content. It doesn't work for performance ads where the owner's face IS the conversion event.",
    reasons: [
      {
        icon: "Users",
        title: "Faceless stock ads underperform owner UGC",
        description:
          "Paid social rewards native, talking-head UGC. Stock-footage videos with AI voice or captions read as 'content marketing' — they educate, they don't convert. For owner-operated service businesses, the moment a prospect sees your face is the moment trust starts.",
      },
      {
        icon: "FileText",
        title: "Pictory needs YOUR script — Prestyj writes it",
        description:
          "Pictory's whole pitch is 'paste your script or article, get a video.' The hook, the angle, the pain point — that work is still yours. Prestyj's script team researches your vertical and delivers 300-1,000 ad-ready scripts.",
      },
      {
        icon: "Target",
        title: "Built for repurposing, not direct response",
        description:
          "Pictory's strengths are blog-to-video, podcast-to-clip, transcript editing. None of that is the same problem as 'I need 500 scroll-stopping ads to feed my Meta account this quarter.'",
      },
      {
        icon: "Clock",
        title: "Minute caps throttle volume",
        description:
          "Every Pictory tier caps the minutes of video you can produce per month. Need 500 vertical ads? You're upgrading or buying overage. Prestyj ships 300-1,000 in one 24-hour batch.",
      },
      {
        icon: "DollarSign",
        title: "Recurring SaaS vs flat batch fee",
        description:
          "$25-$119+/mo forever, plus your time writing scripts, plus the conversion lift you leave on the table by going faceless. A single Prestyj batch ships ad volume that would take months of Pictory work — with the real you on camera.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Creatify",
      description: "Another AI ad generator compared",
      href: "/compare/prestyj-vs-creatify",
      linkText: "Read comparison",
    },
    {
      title: "vs Synthesia",
      description: "Enterprise AI avatar tool compared",
      href: "/compare/prestyj-vs-synthesia",
      linkText: "Read comparison",
    },
    {
      title: "vs AI Avatar Ads (category)",
      description: "All AI ad-generation tools compared",
      href: "/compare/prestyj-vs-ai-avatar-ads",
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
    title: "Faceless Doesn't Convert. Real Faces Do.",
    description:
      "Pictory is built for content repurposing. Prestyj is built for paid ads — 300-1,000 ads starring the real you, in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const pictoryMetadata: CompareMetadata = {
  slug: "prestyj-vs-pictory",
  competitorName: "Pictory",
  title: "Prestyj vs Pictory: Faceless Stock Video or Real-Face UGC Ads? (2026)",
  description:
    "Pictory turns scripts and articles into faceless stock-footage videos from $25/mo. Prestyj films the real you in 300-1,000 native UGC ads in 24 hours. See which converts.",
  keywords: [
    "pictory alternative",
    "pictory vs prestyj",
    "text-to-video alternative",
    "ai video generator alternative",
    "real face ugc ads",
    "batch video ads",
  ],
};
