import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — not a stranger or AI", included: true },
  { text: "Month-to-month, no long-term contract", included: true },
  { text: "Error revisions included", included: true },
];

export const ugcMarketplacesCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-ugc-marketplaces",
  competitorName: "UGC Marketplaces (Billo, Insense)",
  hero: {
    badge: "UGC Marketplaces vs Owner-Face Batch Ads",
    title: "Prestyj vs",
    titleAccent: "UGC Marketplaces",
    subtitle:
      "Billo and Insense pair you with UGC creators who film your product. Great for ecom DTC brands. Wrong shape for service businesses where YOU are the product. A stranger holding your logo can't pitch a $400K listing or close a roofing bid.",
    description: "",
    keyStats: [
      { value: "Stranger on camera", label: "UGC marketplaces" },
      { value: "You on camera", label: "Prestyj" },
      { value: "24 hrs", label: "Prestyj turnaround vs 1-3 weeks" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/mo Starter · ad budget + batch video ads + AI agents · we handle production",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$99 – $500+ / video",
      priceSubtext: "Per creator · plus product shipping · Insense $500/mo platform fee",
      features: [
        { text: "Access to 10k+ vetted UGC creators (Billo) / 20k+ (Insense)", included: true },
        { text: "Product-led ecom UGC at scale", included: true },
        { text: "Creator-filmed, not the business owner", included: false },
        { text: "You brief, vet, ship product, and approve every round", included: false },
        { text: "Volume is linear with spend", included: false },
        { text: "Turnaround measured in weeks per round", included: false },
        { text: "Fit for licensed verticals (real estate, mortgage, legal)", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Uses your real face and voice",
      prestyj: true,
      competitor: false,
      note: "UGC marketplace creators are strangers holding your product or logo",
    },
    {
      feature: "Works for owner-brand service businesses",
      prestyj: true,
      competitor: false,
      note: "Both Billo and Insense are optimized for physical-product ecom",
    },
    {
      feature: "Scripts written for you",
      prestyj: true,
      competitor: "Partial — you write briefs, creators interpret",
    },
    {
      feature: "Volume per engagement",
      prestyj: "300-1,000 finished ads",
      competitor: "1 creator = 1-3 deliverables",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hrs (entire batch)",
      competitor: "7-21 days per creator round",
    },
    {
      feature: "Cost for 500 ads",
      prestyj: "$1,497-$3,997 (flat)",
      competitor: "$50,000-$250,000+ (500 × $99-$500)",
    },
    {
      feature: "Need to ship product / sample to creator",
      prestyj: false,
      competitor: true,
      note: "Standard for both Billo and Insense — adds days and shipping cost",
    },
    {
      feature: "Consistency across all ads",
      prestyj: "Same owner, same brand voice",
      competitor: "Every creator differs in look, pace, energy",
    },
    {
      feature: "Creator quality variance",
      prestyj: "N/A",
      competitor: "High — you gamble every brief",
    },
    {
      feature: "Fit for real estate / mortgage / insurance / legal",
      prestyj: true,
      competitor: "Poor — UGC creators can't represent licensed services",
    },
    {
      feature: "Platform / subscription fee",
      prestyj: "$0 — pay per batch",
      competitor: "Insense ~$500/mo; Billo per-video",
    },
  ],
  whySwitch: {
    title: "Why UGC Marketplaces Break for Service Businesses",
    description:
      "Billo and Insense are excellent products. They're built for one specific shape of customer: DTC ecom brands selling physical products that anyone can unbox, demo, or wear. Service businesses don't fit that shape.",
    reasons: [
      {
        icon: "Users",
        title: "A stranger can't sell YOUR service",
        description:
          "A UGC creator holding your business card can't pitch a $400K listing, explain a mortgage rate, or promise a roofing warranty. For owner-operated service businesses, the owner IS the ad. Prospects want to see who they're hiring, not a random person in a kitchen.",
      },
      {
        icon: "Clock",
        title: "Marketplace velocity is slow by design",
        description:
          "You post a brief, creators apply, you pick, ship product if needed, they film, you review, they revise. Per Billo and Insense workflows, one round runs 7-21 days. Prestyj: you record once for 15-20 minutes, 300-1,000 finished ads land in 24 hours.",
      },
      {
        icon: "DollarSign",
        title: "Volume economics destroy the comparison",
        description:
          "500 UGC marketplace videos at $99-$500 each = $50,000-$250,000+ (before platform fees, product shipping, and revision rounds). One Prestyj batch at $3,997 = same volume, same day, your face every time.",
      },
      {
        icon: "Shield",
        title: "Licensed verticals can't use stranger creators",
        description:
          "Real estate, insurance, legal, mortgage, financial advisory — compliance and brand teams will not approve a random UGC creator claiming expertise. NAR, state bar, FINRA, and lender compliance all break the moment a non-licensed stranger represents your service. Your face is the only compliant face.",
      },
      {
        icon: "Target",
        title: "Brand consistency at scale",
        description:
          "Every Billo or Insense round produces a different person, backdrop, accent, pace, and energy. Hooks A/B test against each other but the brand jitters. Prestyj gives you 300-1,000 ads with one consistent owner-led voice — the algorithm reads it as authority, not chaos.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs UGC Creators (category)",
      description: "All UGC routes compared",
      href: "/compare/prestyj-vs-ugc-creators",
      linkText: "Read comparison",
    },
    {
      title: "vs Production Agencies",
      description: "Traditional video production compared",
      href: "/compare/prestyj-vs-production-agencies",
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
    title: "Your Product Is You. Act Like It.",
    description:
      "UGC marketplaces make sense for supplement ecom. Prestyj makes sense when your face closes the deal — 300-1,000 ads in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const ugcMarketplacesMetadata: CompareMetadata = {
  slug: "prestyj-vs-ugc-marketplaces",
  competitorName: "UGC Marketplaces (Billo, Insense)",
  title: "Prestyj vs UGC Marketplaces (Billo, Insense): Stranger or Your Face? (2026)",
  description:
    "Billo and Insense pair you with UGC creators starting at $99-$500/video. Prestyj films you - the owner - in 300-1,000 scripted ads in 24 hours. $1,497 flat vs $50K+ for marketplace UGC.",
  keywords: [
    "ugc marketplace alternative",
    "billo vs insense vs prestyj",
    "service business ugc",
    "owner ugc",
    "real estate ugc creator",
    "batch video ads",
  ],
};
