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

export const ugcCreatorsCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-ugc-creators",
  competitorName: "UGC Creators",
  hero: {
    badge: "Hired Creators vs Owner-Led Ads",
    title: "Prestyj vs",
    titleAccent: "UGC Creators",
    subtitle:
      "Billo. Insense. Influee. Freelance. Hiring UGC creators means hoping a stranger can pitch your business better than you can. For service businesses, your face is your offer — and no one sells it like you do.",
    description: "",
    keyStats: [
      { value: "Strangers", label: "UGC creators" },
      { value: "You", label: "Prestyj star" },
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
      price: "$75 – $500+",
      priceSubtext: "per video · per creator · per round",
      features: [
        { text: "Large pool of creators (any platform)", included: true },
        { text: "Diverse faces and demographics", included: true },
        { text: "Creator filmed, not owner", included: false },
        { text: "Scripts/briefs are your job", included: false },
        { text: "Weeks per sourcing round", included: false },
        { text: "Volume linearly priced", included: false },
      ],
    },
  },
  features: [
    { feature: "Uses YOUR face (owner / founder)", prestyj: true, competitor: false },
    { feature: "Scripts researched and written", prestyj: true, competitor: "You brief; they improv" },
    { feature: "Volume per engagement", prestyj: "300-1,000", competitor: "1-3 per creator" },
    { feature: "Cost for 500 ads", prestyj: "$1,497-$3,997 flat", competitor: "$37,500-$250,000+" },
    { feature: "Turnaround", prestyj: "24 hrs", competitor: "2-4 weeks per creator round" },
    { feature: "Sourcing / vetting time", prestyj: "None", competitor: "Significant — shortlists, calls, contracts" },
    { feature: "Works for licensed services (realty, finance, legal)", prestyj: true, competitor: false, note: "Creators can't make expertise claims on your behalf" },
    { feature: "Consistency across ads", prestyj: "Same owner, same brand", competitor: "Every creator looks and sounds different" },
    { feature: "Usage rights cost", prestyj: "Included, perpetual", competitor: "Often time-limited, extra fees to extend" },
    { feature: "Platform trust signal", prestyj: "Strong — real owner", competitor: "Mixed — prospects notice paid creator vibe" },
  ],
  whySwitch: {
    title: "Why Hiring UGC Creators Fails for Owner Brands",
    description: "Creators are great for ecom products. They're the wrong lever for service businesses.",
    reasons: [
      {
        icon: "Users",
        title: "A stranger can't pitch YOUR business",
        description:
          "You have specific stories, deals, numbers, and objection-handling that no hired creator can fake. When the owner talks, it's unmistakable. When a creator talks, it's an ad.",
      },
      {
        icon: "Clock",
        title: "Sourcing eats weeks",
        description:
          "Post brief, review applicants, negotiate rates, ship product, wait for drafts, request revisions, extend usage rights. 2-4 weeks minimum. Prestyj: 24 hours.",
      },
      {
        icon: "DollarSign",
        title: "Volume is brutal",
        description:
          "At $100-$500 a creator, getting 500 ads costs more than most SMBs will ever spend on ads themselves. Prestyj flat-prices the entire batch.",
      },
      {
        icon: "Shield",
        title: "Regulated services can't use hired creators",
        description:
          "A random UGC creator claiming your mortgage rate, legal strategy, or investment performance is a compliance nightmare. Your face is the only safe one.",
      },
      {
        icon: "Target",
        title: "Owner-led ads convert differently",
        description:
          "Prospects buy from people they perceive as the expert. That's you. Creator ads work when the product sells itself. Your service doesn't — you do.",
      },
    ],
  },
  relatedResources: [
    { title: "vs Billo", description: "Specific UGC marketplace", href: "/compare/prestyj-vs-billo", linkText: "Read comparison" },
    { title: "vs Fiverr Video Ads", description: "Freelance video compared", href: "/compare/prestyj-vs-fiverr-video-ads", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "You Are the Offer.",
    description:
      "Stop paying strangers to pretend they care about your business. 300-1,000 ads starring you, shipped in 24 hours.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const ugcCreatorsMetadata: CompareMetadata = {
  slug: "prestyj-vs-ugc-creators",
  competitorName: "UGC Creators",
  title: "PRESTYJ vs UGC Creators: Your Face Sells, Theirs Doesn't",
  description:
    "A stranger can't pitch your $400K listing or mortgage rate. PRESTYJ films the real you in 300-1,000 scripted ads in 24 hours. $1,497 flat, not $50K+.",
  keywords: ["ugc creator alternative", "hire ugc creator vs", "owner led ads", "batch video ads", "service business ugc"],
};
