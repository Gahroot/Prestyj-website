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

export const fiverrVideoAdsCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-fiverr-video-ads",
  competitorName: "Fiverr Video Ads",
  hero: {
    badge: "Freelance Marketplace vs Batch System",
    title: "Prestyj vs",
    titleAccent: "Fiverr Video Ads",
    subtitle:
      "Fiverr is a lottery. One gig might be brilliant. The next is a template with your logo slapped on. Prestyj is one system, one owner, 300-1,000 scripted ads, shipped in 24 hours.",
    description: "",
    keyStats: [
      { value: "Gig lottery", label: "Fiverr quality" },
      { value: "24 hrs", label: "Prestyj SLA" },
      { value: "300-1,000", label: "Prestyj ads per batch" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$25 – $500+",
      priceSubtext: "per gig · per seller · per revision cycle",
      features: [
        { text: "Marketplace of thousands of sellers", included: true },
        { text: "Low entry price per gig", included: true },
        { text: "No vertical research by default", included: false },
        { text: "Quality varies wildly by seller", included: false },
        { text: "Turnaround unpredictable", included: false },
        { text: "No guaranteed volume system", included: false },
      ],
    },
  },
  features: [
    { feature: "Scripts researched for YOUR pain points", prestyj: true, competitor: false, note: "Fiverr sellers don't research your vertical — you hand them copy" },
    { feature: "Uses your real face", prestyj: true, competitor: "Depends on gig type" },
    { feature: "Ads per engagement", prestyj: "300-1,000", competitor: "1-5 per gig, typically" },
    { feature: "Turnaround SLA", prestyj: "24 hrs, guaranteed", competitor: "3-14 days, often slipped" },
    { feature: "Consistent quality across deliverables", prestyj: true, competitor: false },
    { feature: "Cost for 500 ads", prestyj: "$1,497-$3,997", competitor: "$12,500-$250,000 depending on sellers" },
    { feature: "Hook + body + CTA variation system", prestyj: true, competitor: false },
    { feature: "Single point of accountability", prestyj: true, competitor: false, note: "Fiverr disputes vs. one dedicated Prestyj production team" },
    { feature: "Revision policy", prestyj: "Error revisions included", competitor: "Varies per seller, often capped at 1-3" },
    { feature: "Built for real estate / home services", prestyj: true, competitor: false },
  ],
  whySwitch: {
    title: "Why Fiverr Breaks When You Need Scale",
    description: "Fiverr is fine for a logo. It is not a video ad system.",
    reasons: [
      {
        icon: "AlertTriangle",
        title: "Quality is a coin flip",
        description:
          "You can get a genius editor or a template mill. There is no way to know until delivery. Prestyj is one team, one standard, every batch.",
      },
      {
        icon: "Clock",
        title: "Timelines slip, constantly",
        description:
          "Fiverr sellers juggle dozens of clients. 'Delivery in 3 days' routinely becomes 10. Prestyj locks 24-hour turnaround into the service.",
      },
      {
        icon: "FileText",
        title: "No script research",
        description:
          "Fiverr sellers edit what you give them. They don't research your vertical's pain points, your competitor positioning, or high-intent hook patterns. Prestyj does.",
      },
      {
        icon: "TrendingUp",
        title: "Volume doesn't exist on Fiverr",
        description:
          "Buying 500 ads across Fiverr = coordinating 50+ sellers, 50+ briefs, 50+ revision loops. Prestyj delivers 500+ ads in one batch, one invoice, one 24-hour window.",
      },
      {
        icon: "Shield",
        title: "No accountability when it goes wrong",
        description:
          "Fiverr disputes are slow and seller-friendly. Prestyj is a dedicated production partner with a direct line and revision guarantee.",
      },
    ],
  },
  relatedResources: [
    { title: "vs Production Agencies", description: "Traditional agencies compared", href: "/compare/prestyj-vs-production-agencies", linkText: "Read comparison" },
    { title: "vs UGC Creators", description: "UGC marketplaces compared", href: "/compare/prestyj-vs-ugc-creators", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Stop Rolling the Fiverr Dice.",
    description:
      "One team. 300-1,000 scripted ads. 24-hour turnaround. One flat price.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const fiverrVideoAdsMetadata: CompareMetadata = {
  slug: "prestyj-vs-fiverr-video-ads",
  competitorName: "Fiverr Video Ads",
  title: "Prestyj vs Fiverr Video Ads: Batch System vs Freelance Gig Lottery",
  description:
    "Fiverr sellers vary wildly in quality and timeline. Prestyj delivers 300-1,000 scripted video ads in 24 hours for one flat fee. Compare cost and reliability.",
  keywords: ["fiverr video ads alternative", "fiverr vs prestyj", "freelance video ad alternative", "batch video ads", "scripted video ads"],
};
