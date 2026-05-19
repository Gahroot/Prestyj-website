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

export const billoCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-billo",
  competitorName: "Billo",
  hero: {
    badge: "UGC Marketplace vs Owner-Face Batch",
    title: "Prestyj vs",
    titleAccent: "Billo",
    subtitle:
      "Billo pairs you with thousands of UGC creators who film your product on their phones. Great for DTC ecom unboxings and demos. Wrong shape for service businesses where YOU are the product — a stranger holding your business card can't sell a listing, a roof, or a coaching package.",
    description: "",
    keyStats: [
      { value: "Stranger on camera", label: "Billo creator" },
      { value: "You on camera", label: "Prestyj" },
      { value: "24 hrs", label: "Prestyj turnaround vs 7-21 days" },
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
      priceSubtext: "Per creator video · plus product shipping costs",
      features: [
        { text: "Marketplace of 10k+ vetted UGC creators", included: true },
        { text: "Product-led DTC ecom unboxing / demo content", included: true },
        { text: "Creator-filmed, not the business owner", included: false },
        { text: "You write briefs, vet creators, ship product, approve rounds", included: false },
        { text: "Volume scales linearly with spend", included: false },
        { text: "Turnaround 7-21 days per round", included: false },
        {
          text: "Compliant fit for licensed verticals (real estate, mortgage, legal)",
          included: false,
        },
      ],
    },
  },
  features: [
    {
      feature: "Uses your real face and voice",
      prestyj: true,
      competitor: false,
      note: "Billo creators are strangers — they hold or use your product",
    },
    {
      feature: "Fit for owner-brand service businesses",
      prestyj: true,
      competitor: false,
      note: "Billo is optimized for physical-product DTC ecom",
    },
    {
      feature: "Scripts written for you",
      prestyj: true,
      competitor: false,
      note: "Billo: you write the brief; creator interprets and improvises",
    },
    {
      feature: "Volume per engagement",
      prestyj: "300-1,000 finished ads",
      competitor: "1 creator = 1-3 deliverables per round",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hrs for the full batch",
      competitor: "7-21 days per creator round",
    },
    {
      feature: "Cost for 500 ads",
      prestyj: "$1,497-$3,997 (flat)",
      competitor: "$50,000-$250,000+ (500 × $99-$500)",
    },
    {
      feature: "Need to ship product / sample",
      prestyj: false,
      competitor: true,
      note: "Standard Billo workflow — adds days and shipping cost per round",
    },
    {
      feature: "Brand consistency across all ads",
      prestyj: "Same owner, same voice",
      competitor: "Every creator differs in look, accent, pace, energy",
    },
    {
      feature: "Creator-quality variance",
      prestyj: "N/A",
      competitor: "High — every brief is a gamble",
    },
    {
      feature: "Fit for real estate / mortgage / insurance / legal",
      prestyj: true,
      competitor: false,
      note: "Licensed verticals can't have a random stranger representing the service",
    },
    {
      feature: "Platform / subscription fee",
      prestyj: "$0 — pay per batch",
      competitor: "Per-video pricing; volume discounts at enterprise tiers",
    },
  ],
  whySwitch: {
    title: "Why Billo Breaks for Owner-Led Service Businesses",
    description:
      "Billo is an excellent product built for one specific shape of customer: DTC ecom brands selling physical products that anyone can demo or wear. Service businesses don't fit that mold — and Billo's marketplace mechanics actively work against you.",
    reasons: [
      {
        icon: "Users",
        title: "A stranger can't sell YOUR service",
        description:
          "A Billo creator holding your business card can't pitch a $400K listing, explain mortgage points, or warranty a roof. For owner-operated service businesses, the owner IS the offer — prospects want to see who they're hiring, not a random person in a kitchen.",
      },
      {
        icon: "Clock",
        title: "Marketplace velocity is slow by design",
        description:
          "You post a brief, creators apply, you pick one, ship product if needed, they film, you review, they revise. Each round is 7-21 days. Prestyj: you record once for 15-20 minutes, 300-1,000 finished ads land in 24 hours.",
      },
      {
        icon: "DollarSign",
        title: "Volume economics destroy the math",
        description:
          "500 Billo videos at $99-$500 each = $50,000-$250,000+ (before product shipping and revision rounds). One Prestyj batch at $3,997 = same volume, same day, your face every time.",
      },
      {
        icon: "Shield",
        title: "Licensed verticals can't use marketplace creators",
        description:
          "Real estate, insurance, legal, mortgage, financial advisory — NAR, state bar, FINRA, and lender compliance break the moment a non-licensed stranger represents your service. Your face is the only compliant face.",
      },
      {
        icon: "Target",
        title: "Brand jitter at scale",
        description:
          "Every Billo round gives you a different person, backdrop, accent, pace, and energy. Hooks A/B test against each other but the brand jitters. Prestyj gives you 300-1,000 ads with one consistent owner-led voice — the algorithm reads it as authority.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Insense",
      description: "The other major UGC marketplace compared",
      href: "/compare/prestyj-vs-insense",
      linkText: "Read comparison",
    },
    {
      title: "vs UGC Marketplaces (category)",
      description: "Billo + Insense + the broader marketplace landscape",
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
    title: "Your Face Closes the Deal — Not a Stranger's.",
    description:
      "Billo makes sense for supplement ecom unboxings. Prestyj makes sense when YOU are the brand — 300-1,000 ads in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const billoMetadata: CompareMetadata = {
  slug: "prestyj-vs-billo",
  competitorName: "Billo",
  title: "Prestyj vs Billo: Stranger UGC or Your Face on Camera? (2026)",
  description:
    "Billo pairs you with UGC creators starting at $99-$500/video. Prestyj films you - the owner - in 300-1,000 scripted ads in 24 hours for a flat fee. Service businesses, see the math.",
  keywords: [
    "billo alternative",
    "billo vs prestyj",
    "billo ugc alternative",
    "ugc marketplace alternative",
    "owner ugc ads",
    "batch video ads",
  ],
};
