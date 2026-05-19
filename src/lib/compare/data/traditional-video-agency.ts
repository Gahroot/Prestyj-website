import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — no crew, no studio", included: true },
  { text: "Month-to-month, no long-term contract", included: true },
  { text: "Error revisions included", included: true },
];

export const traditionalVideoAgencyCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-traditional-video-agency",
  competitorName: "Traditional Video Agency",
  hero: {
    badge: "Cinematic Production vs Batch UGC Ads",
    title: "Prestyj vs",
    titleAccent: "Traditional Video Agency",
    subtitle:
      "Traditional video agencies ship 1-5 polished, cinematic spots over 8-12 weeks for $10K-$50K+. Beautiful. Brand-safe. And scrolled past on TikTok and Reels — because in 2026, the feed punishes polish and rewards native UGC. Prestyj ships 300-1,000 owner-led ads in 24 hours.",
    description: "",
    keyStats: [
      { value: "8-12 weeks", label: "Agency timeline" },
      { value: "24 hrs", label: "Prestyj turnaround" },
      { value: "1-5 vs 300-1,000", label: "Ads per engagement" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/mo Starter · $3,997 setup · ad budget + AI agents included",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$10,000 – $50,000+",
      priceSubtext: "Per project · 1-5 finished spots · revisions billed hourly",
      features: [
        { text: "Cinematic camera, lighting, audio production", included: true },
        { text: "Pro crew: DP, sound, gaffer, editor, colorist", included: true },
        { text: "High-polish brand video for hero placements", included: true },
        { text: "Ads look like ads — scrolled past on feed", included: false },
        { text: "1-5 spots, not 300-1,000 hooks", included: false },
        { text: "8-12 week turnaround", included: false },
        { text: "Native UGC / selfie-style output", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Ads per engagement",
      prestyj: "300-1,000",
      competitor: "1-5 hero spots",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hrs",
      competitor: "8-12 weeks (pre-pro through delivery)",
    },
    {
      feature: "Native UGC / selfie aesthetic",
      prestyj: true,
      competitor: false,
      note: "Agencies optimize for cinematic polish — exactly what TikTok and Reels punish for direct response",
    },
    {
      feature: "Cost per finished ad",
      prestyj: "$2-$5",
      competitor: "$2,000-$25,000+ per spot",
    },
    {
      feature: "Hook / CTA variation engineering",
      prestyj: true,
      competitor: false,
      note: "Agencies deliver 1 creative direction per spot, not 50 testable hooks",
    },
    {
      feature: "On-location crew required",
      prestyj: false,
      competitor: true,
      note: "Shoot days, travel, location fees, equipment rental",
    },
    {
      feature: "Scripts engineered for paid-social performance",
      prestyj: true,
      competitor: false,
      note: "Agencies write for brand storytelling, not ad-account ROAS",
    },
    {
      feature: "Testable ad volume for media buyers",
      prestyj: "High — 300-1,000 angles",
      competitor: "Low — not enough creative to iterate per quarter",
    },
    {
      feature: "Revisions",
      prestyj: "Error revisions included",
      competitor: "Billed hourly at agency rates ($150-$400/hr)",
    },
    {
      feature: "Fit for performance-marketing workflow",
      prestyj: true,
      competitor: false,
      note: "Built for hero brand spots and TV-style campaigns, not feed-ad volume",
    },
  ],
  whySwitch: {
    title: "Why Traditional Video Agencies Are the Wrong Tool for 2026 Paid Social",
    description:
      "Their craft is genuinely excellent. Their economics weren't designed for the volume that modern Meta and TikTok creative testing demands.",
    reasons: [
      {
        icon: "Clock",
        title: "8-12 weeks of turnaround kills iteration",
        description:
          "Paid-social creative decays in 7-21 days. Agencies take 8-12 weeks to deliver one spot. By the time you launch, the angle is already tired. Prestyj resets the iteration clock to 24 hours per batch.",
      },
      {
        icon: "DollarSign",
        title: "$25K per spot, 2 spots tested",
        description:
          "A $50K agency engagement buys you two angles. A $3,997 Prestyj batch buys you 1,000 — enough to find 10 winners the agency's spots structurally can't find.",
      },
      {
        icon: "Target",
        title: "Polished cinematic ads look like ads",
        description:
          "TikTok, Reels, and Shorts down-rank cinematic polish in direct-response placements. The feed rewards native, phone-shot, talking-head video. Agencies are physically incapable of producing that look — it's not their craft.",
      },
      {
        icon: "TrendingUp",
        title: "No volume = no media-buying leverage",
        description:
          "Top media buyers test 20-50 creatives per week. Agencies hand you 1-2 per quarter. Prestyj hands you 300-1,000 — the exact input volume modern paid social actually requires.",
      },
      {
        icon: "Zap",
        title: "No crew, no travel, no shoot days",
        description:
          "Prestyj is 15-20 minutes on your phone. No production schedules, no location scouts, no 12-hour shoot days, no per diem, no overage hours. Same owner, 1,000 finished ads.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Production Agencies (category)",
      description: "The broader production-agency landscape",
      href: "/compare/prestyj-vs-production-agencies",
      linkText: "Read comparison",
    },
    {
      title: "vs In-House Creative Team",
      description: "The other 'build it yourself' alternative",
      href: "/compare/prestyj-vs-in-house-creative-team",
      linkText: "Read comparison",
    },
    {
      title: "Batch video ads vs traditional video production",
      description: "Side-by-side breakdown of both models",
      href: "/blog/batch-video-ads-vs-traditional-video-production",
      linkText: "Read the deep dive",
    },
    {
      title: "Hidden costs of video production agencies",
      description: "What agency invoices don't tell you",
      href: "/blog/hidden-costs-of-video-production-agencies-2026",
      linkText: "Read the breakdown",
    },
    {
      title: "Batch Video Ads",
      description: "See Prestyj's service",
      href: "/batch-video-ads",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Native Beats Cinematic. Every Time.",
    description:
      "Skip the 12-week shoot cycle. Record once, ship 300-1,000 ads in 24 hours for less than a single agency spot.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const traditionalVideoAgencyMetadata: CompareMetadata = {
  slug: "prestyj-vs-traditional-video-agency",
  competitorName: "Traditional Video Agency",
  title: "Prestyj vs Traditional Video Agency: 1,000 Ads or 2 Polished Spots? (2026)",
  description:
    "Traditional video agencies ship 1-5 cinematic spots in 8-12 weeks for $10K-$50K+. Prestyj ships 300-1,000 native real-face ads in 24 hours for a flat fee. Polished ads get scrolled.",
  keywords: [
    "traditional video agency alternative",
    "video production agency alternative",
    "ad agency alternative",
    "batch video ads vs agency",
    "paid social creative volume",
    "ugc batch ads",
  ],
};
