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

export const billoCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-billo",
  competitorName: "Billo",
  hero: {
    badge: "UGC Marketplace vs Owner-Face Ads",
    title: "Prestyj vs",
    titleAccent: "Billo",
    subtitle:
      "Billo connects you with UGC creators who film your product. Great for ecom. Fatal for service businesses where YOU are the product. A stranger can't close a listing, pitch a bid, or sell trust in your name.",
    description: "",
    keyStats: [
      { value: "Stranger on camera", label: "Billo" },
      { value: "You on camera", label: "Prestyj" },
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
      price: "$99 – $500+",
      priceSubtext: "per video · per creator",
      features: [
        { text: "Access to ~10k+ UGC creators", included: true },
        { text: "Product-focused creator library", included: true },
        { text: "Creator filmed, not YOU", included: false },
        { text: "You brief / approve every creator", included: false },
        { text: "Volume is linear with spend", included: false },
        { text: "Turnaround measured in weeks", included: false },
      ],
    },
  },
  features: [
    { feature: "Uses your real face and voice", prestyj: true, competitor: false, note: "Billo creators are strangers holding your product" },
    { feature: "Works for owner-brand service businesses", prestyj: true, competitor: false, note: "Billo is optimized for physical-product ecom" },
    { feature: "Scripts written for you", prestyj: true, competitor: "Partial (briefs, not finished scripts)" },
    { feature: "Volume per engagement", prestyj: "300-1,000 ads", competitor: "1 creator = 1-3 deliverables" },
    { feature: "Turnaround", prestyj: "24 hrs", competitor: "7-21 days per creator round" },
    { feature: "Cost for 500 ads", prestyj: "$1,497-$3,997 (flat)", competitor: "$50,000+ (500 × $99+)" },
    { feature: "Consistency across all ads", prestyj: "Same owner, same brand", competitor: "Every creator looks different" },
    { feature: "Need to ship product to creator", prestyj: false, competitor: true },
    { feature: "Creator quality variance", prestyj: "N/A", competitor: "High — you gamble every brief" },
    { feature: "Real estate / financial / legal fit", prestyj: true, competitor: "Poor — UGC creators can't represent licensed services" },
  ],
  whySwitch: {
    title: "Why a UGC Marketplace Breaks for Service Businesses",
    description: "Billo is built for physical products. Your service isn't one.",
    reasons: [
      {
        icon: "Users",
        title: "A stranger can't sell YOUR service",
        description:
          "A UGC creator holding your logo can't pitch a $400K listing, explain a mortgage rate, or promise a roofing warranty. For owner-operated service businesses, the owner IS the ad.",
      },
      {
        icon: "Clock",
        title: "Billo is slow — by design",
        description:
          "You post a brief, creators apply, you pick, they film, you review, they revise. Weeks per round. Prestyj: you record once, 300-1,000 ads land in 24 hours.",
      },
      {
        icon: "DollarSign",
        title: "Volume economics don't work",
        description:
          "500 Billo videos at $99-$500 each = $50,000-$250,000. One Prestyj batch at $3,997 = same volume, same day.",
      },
      {
        icon: "Shield",
        title: "Licensed verticals can't use stranger creators",
        description:
          "Real estate, insurance, legal, finance — compliance teams will not let a random UGC creator claim expertise in your product. Your face is the only compliant face.",
      },
      {
        icon: "Target",
        title: "Brand consistency at scale",
        description:
          "Every Billo video has a different person, backdrop, pace, and energy. Prestyj gives you 300-1,000 ads with one consistent owner-led voice.",
      },
    ],
  },
  relatedResources: [
    { title: "vs UGC Creators (category)", description: "All UGC routes compared", href: "/compare/prestyj-vs-ugc-creators", linkText: "Read comparison" },
    { title: "vs Fiverr Video Ads", description: "Freelance video sellers compared", href: "/compare/prestyj-vs-fiverr-video-ads", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Your Product Is You. Act Like It.",
    description:
      "Billo makes sense for supplement ecom. Prestyj makes sense when your face closes the deal.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const billoMetadata: CompareMetadata = {
  slug: "prestyj-vs-billo",
  competitorName: "Billo",
  title: "PRESTYJ vs Billo: Your Face or a Stranger's? (2026)",
  description:
    "Billo hires strangers to hold your product. PRESTYJ films you - the owner - in 300-1,000 scripted ads in 24 hours. $1,497 flat vs $50K+ for UGC.",
  keywords: ["billo alternative", "billo vs prestyj", "ugc marketplace alternative", "owner ugc", "service business video ads"],
};
