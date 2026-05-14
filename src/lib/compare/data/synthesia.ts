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

export const synthesiaCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-synthesia",
  competitorName: "Synthesia",
  hero: {
    badge: "Enterprise AI Avatar vs Real Owner UGC",
    title: "Prestyj vs",
    titleAccent: "Synthesia",
    subtitle:
      "Synthesia is the enterprise standard for AI avatar videos — perfect for L&D and internal training. For paid ads, prospects need to see the real you. Prestyj ships 300-1,000 UGC-style ads with your real face in 24 hours.",
    description: "",
    keyStats: [
      { value: "AI avatar", label: "Synthesia output" },
      { value: "Real owner face", label: "Prestyj output" },
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
      price: "$22 – $67+",
      priceSubtext: "/month · enterprise tiers $1,000+/mo",
      features: [
        { text: "230+ stock AI avatars", included: true },
        { text: "Text-to-video in 140+ languages", included: true },
        { text: "Custom avatar of you (extra $$)", included: true },
        { text: "You write every script", included: false },
        { text: "Real face on camera (not avatar)", included: false },
        { text: "Direct-response ad-ready output", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Uses your real face and voice",
      prestyj: true,
      competitor: "Optional custom avatar (still AI)",
      note: "Even Synthesia's Personal Avatar has visible AI lip-sync and gesture artifacts",
    },
    {
      feature: "Scripts written for you",
      prestyj: true,
      competitor: false,
      note: "Synthesia is BYO-script",
    },
    {
      feature: "Ads per batch",
      prestyj: "300-1,000",
      competitor: "Limited by minutes/credits per plan",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hrs, done-for-you",
      competitor: "Minutes per render — but script + direction is yours",
    },
    { feature: "Monthly subscription required", prestyj: false, competitor: true },
    {
      feature: "Built for paid social ads",
      prestyj: true,
      competitor: false,
      note: "Synthesia is positioned for L&D, training, and corporate comms",
    },
    {
      feature: "Vertical-specific ad scripts (real estate, home services)",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "AI content disclosure / policy risk on Meta & TikTok",
      prestyj: "None",
      competitor: "Rising — AI avatar disclosure rules tightening in 2026",
    },
    {
      feature: "Cost per ad at 500 ads",
      prestyj: "~$3-5",
      competitor: "Variable — plus your script labor and avatar setup",
    },
    {
      feature: "One-take recording",
      prestyj: "15-20 min",
      competitor: "N/A (or short avatar training clip)",
    },
  ],
  whySwitch: {
    title: "Why Synthesia Isn't Built for Your Paid Ads",
    description:
      "Synthesia is the right tool for enterprise training videos. It's the wrong tool for owner-operator paid social ads.",
    reasons: [
      {
        icon: "Users",
        title: "AI avatars leak trust in feed ads",
        description:
          "Prospects pattern-match AI avatars in under a second in 2026. For service businesses where the owner IS the offer, an avatar is the fastest way to lose a booking before it happens.",
      },
      {
        icon: "Building2",
        title: "Synthesia is built for L&D, not direct response",
        description:
          "Its templates, voice library, and avatar set are tuned for corporate training and internal comms — not scroll-stopping hooks, fast cuts, and ad-style CTAs.",
      },
      {
        icon: "FileText",
        title: "You still write 500 scripts",
        description:
          "Synthesia generates video from your scripts. It doesn't research your vertical or write your hooks. Prestyj's script team delivers 300-1,000 ad-ready scripts built for your prospects.",
      },
      {
        icon: "Shield",
        title: "Avatar ads sit in the platform-policy crosshairs",
        description:
          "Meta, TikTok, and YouTube are all rolling out stricter AI-disclosure and synthetic-media rules. UGC-style real-face ads sidestep that risk entirely.",
      },
      {
        icon: "DollarSign",
        title: "Enterprise tiers compound forever",
        description:
          "Synthesia Starter and Creator plans cap minutes hard; Enterprise contracts run well into the thousands per month. One Prestyj batch is a one-time line item with no minute caps.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs HeyGen",
      description: "Another AI avatar platform compared",
      href: "/compare/prestyj-vs-heygen",
      linkText: "Read comparison",
    },
    {
      title: "vs AI Avatar Ads (category)",
      description: "All AI avatar tools compared",
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
    title: "Skip the Avatar. Be the Ad.",
    description:
      "Synthesia is great for training videos. Prestyj ships 300-1,000 finished ads starring the real you in 24 hours — for a one-time price.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const synthesiaMetadata: CompareMetadata = {
  slug: "prestyj-vs-synthesia",
  competitorName: "Synthesia",
  title: "PRESTYJ vs Synthesia: AI Avatar or Real Owner Face? (2026)",
  description:
    "Synthesia's AI avatars are built for training, not paid ads. PRESTYJ films the real you — 300-1,000 vertical ads in 24 hours for $1,497 one-time, no subscription.",
  keywords: [
    "synthesia alternative",
    "synthesia vs prestyj",
    "ai avatar video alternative",
    "real face ugc ads",
    "batch video ads",
  ],
};
