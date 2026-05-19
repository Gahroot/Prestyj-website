import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — not a stranger", included: true },
  { text: "Month-to-month, no long-term contract", included: true },
  { text: "Error revisions included", included: true },
];

export const insenseCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-insense",
  competitorName: "Insense",
  hero: {
    badge: "UGC + Creator Ads Platform vs Owner-Face Batch",
    title: "Prestyj vs",
    titleAccent: "Insense",
    subtitle:
      "Insense connects you with 20k+ vetted UGC creators and runs Meta + TikTok Spark Ads through their handles. Built for ecom DTC brands at scale. Wrong shape when YOU are the product — a creator can't credibly pitch your listing, your roof, or your coaching program.",
    description: "",
    keyStats: [
      { value: "Creator-led", label: "Insense model" },
      { value: "Owner-led", label: "Prestyj model" },
      { value: "24 hrs", label: "Prestyj turnaround vs 2-3 weeks" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/mo Starter · ad budget + batch video ads + AI agents · we handle production",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$500+/mo platform fee",
      priceSubtext: "Plus $150-$500+/video per creator · Spark Ads / whitelisting extra",
      features: [
        { text: "20k+ vetted UGC creators", included: true },
        { text: "Spark Ads + creator whitelisting integrated", included: true },
        { text: "Ecom DTC creator ads at scale", included: true },
        { text: "Creator-filmed, not the business owner", included: false },
        { text: "You write briefs, vet creators, ship product, approve rounds", included: false },
        { text: "Turnaround measured in weeks per round", included: false },
        { text: "Compliant fit for licensed service verticals", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Uses your real face and voice",
      prestyj: true,
      competitor: false,
      note: "Insense creators are vetted strangers — they represent your brand, not you",
    },
    {
      feature: "Fit for owner-brand service businesses",
      prestyj: true,
      competitor: false,
      note: "Insense is optimized for DTC ecom and product-led brands",
    },
    {
      feature: "Spark Ads / creator whitelisting",
      prestyj: "N/A — you own the creative",
      competitor: true,
      note: "Insense's standout feature for ecom — irrelevant if YOU need to be on camera",
    },
    {
      feature: "Scripts written for you",
      prestyj: true,
      competitor: false,
      note: "Insense: you brief; creators interpret",
    },
    {
      feature: "Volume per engagement",
      prestyj: "300-1,000 finished ads",
      competitor: "1 creator = 1-3 deliverables per round",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hrs for the full batch",
      competitor: "2-3 weeks per creator round",
    },
    {
      feature: "Cost for 500 ads",
      prestyj: "$1,497-$3,997 (flat)",
      competitor: "$75,000-$250,000+ (500 × $150-$500) + platform fee",
    },
    {
      feature: "Platform / subscription fee",
      prestyj: "$0 — pay per batch",
      competitor: "$500+/mo platform fee on top of per-video cost",
    },
    {
      feature: "Need to ship product to creator",
      prestyj: false,
      competitor: true,
      note: "Adds days and shipping cost per round",
    },
    {
      feature: "Brand consistency across all ads",
      prestyj: "Same owner, same voice",
      competitor: "Every creator differs in look, accent, pace, energy",
    },
    {
      feature: "Fit for real estate / mortgage / insurance / legal",
      prestyj: true,
      competitor: false,
      note: "Licensed verticals can't have a stranger claim expertise",
    },
  ],
  whySwitch: {
    title: "Why Insense's Model Breaks for Service Businesses",
    description:
      "Insense is a strong product for one specific buyer: DTC ecom brands running creator-led Spark Ads. Service businesses where the owner IS the brand have the opposite problem — you need YOUR face at scale, not a marketplace of strangers.",
    reasons: [
      {
        icon: "Users",
        title: "Spark Ads through a creator's handle ≠ your brand",
        description:
          "Insense's killer feature is running paid ads through a creator's TikTok or Instagram handle. That's perfect for ecom social proof. For a realtor, contractor, or coach, prospects need to see and trust YOU — running ads through a creator's account dilutes the only asset that converts.",
      },
      {
        icon: "DollarSign",
        title: "Platform fee plus per-video cost compounds",
        description:
          "$500+/mo Insense subscription + $150-$500 per creator video stacks fast. For 500 ads, you're at $75K-$250K+ of variable cost on top of the platform. Prestyj is a flat batch fee with 300-1,000 finished ads.",
      },
      {
        icon: "Clock",
        title: "Weeks per round kills paid-social iteration",
        description:
          "Brief → applications → selection → shipping → filming → review → revisions. Each Insense round is 2-3 weeks. Paid social creative decays in 7-21 days — by the time the ads launch, the angle is tired. Prestyj resets that to 24 hours.",
      },
      {
        icon: "Shield",
        title: "Licensed verticals can't use stranger creators",
        description:
          "Real estate, mortgage, insurance, legal, financial advisory — NAR, FINRA, and state-bar compliance break the moment a non-licensed creator implies expertise. Your face is the only compliant face in regulated services.",
      },
      {
        icon: "Target",
        title: "Creator-marketplace variance vs single-owner consistency",
        description:
          "Every Insense brief produces a different person, accent, pace, and energy. The algorithm sees jitter, not authority. Prestyj gives you 300-1,000 ads from one consistent owner — the exact pattern Meta and TikTok ranking rewards.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Billo",
      description: "The other major UGC marketplace compared",
      href: "/compare/prestyj-vs-billo",
      linkText: "Read comparison",
    },
    {
      title: "vs UGC Marketplaces (category)",
      description: "Billo + Insense + the marketplace landscape",
      href: "/compare/prestyj-vs-ugc-marketplaces",
      linkText: "Read comparison",
    },
    {
      title: "Hidden costs of UGC creators (Billo, Insense)",
      description: "What marketplace pricing actually adds up to",
      href: "/blog/hidden-costs-of-ugc-creators-billo-insense-2026",
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
    title: "Skip the Spark Ads. Be the Ad.",
    description:
      "Insense is built for ecom creator marketing. Prestyj is built for owner-led service businesses — 300-1,000 ads of the real you in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const insenseMetadata: CompareMetadata = {
  slug: "prestyj-vs-insense",
  competitorName: "Insense",
  title: "Prestyj vs Insense: Creator Spark Ads or Your Owner Face? (2026)",
  description:
    "Insense runs creator Spark Ads from $500/mo + $150-$500/video. Prestyj films you - the owner - in 300-1,000 scripted ads in 24 hours for a flat fee. See the service-business math.",
  keywords: [
    "insense alternative",
    "insense vs prestyj",
    "insense ugc alternative",
    "ugc marketplace alternative",
    "spark ads alternative",
    "batch video ads",
  ],
};
