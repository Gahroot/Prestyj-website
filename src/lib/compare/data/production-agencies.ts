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

export const productionAgenciesCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-production-agencies",
  competitorName: "Production Agencies",
  hero: {
    badge: "Traditional Video Production vs Batch Ads",
    title: "Prestyj vs",
    titleAccent: "Production Agencies",
    subtitle:
      "Production agencies ship polished ads that scream 'ad' and get scrolled past. Native selfie-style batch video earns attention because it looks like everything else on the feed — except it's you, scripted to close.",
    description: "",
    keyStats: [
      { value: "Weeks", label: "Agency timeline" },
      { value: "24 hrs", label: "Prestyj turnaround" },
      { value: "$5K-$50K", label: "Typical agency spend" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$5,000 – $50,000+",
      priceSubtext: "per project · 1-5 finished spots",
      features: [
        { text: "High-polish cinematic production", included: true },
        { text: "Professional crew, lighting, gear", included: true },
        { text: "Ads look like ads (scrolled past)", included: false },
        { text: "1-5 spots, not 300-1,000 angles", included: false },
        { text: "4-12 week turnaround", included: false },
        { text: "Revisions billed hourly", included: false },
      ],
    },
  },
  features: [
    { feature: "Ads per engagement", prestyj: "300-1,000", competitor: "1-5 hero spots" },
    { feature: "Turnaround", prestyj: "24 hrs", competitor: "4-12 weeks" },
    { feature: "Native selfie / UGC aesthetic", prestyj: true, competitor: false, note: "Agencies optimize for polish — which tanks performance on TikTok/Reels" },
    { feature: "Cost per ad", prestyj: "$2-$5", competitor: "$1,000-$10,000+" },
    { feature: "Hook / CTA variation engineering", prestyj: true, competitor: "Usually 1 creative direction per spot" },
    { feature: "On-location crew required", prestyj: false, competitor: true },
    { feature: "Scripts researched for paid-social hooks", prestyj: true, competitor: "Scripts written for brand, not ad-account performance" },
    { feature: "Testable ad volume for media buying", prestyj: "High", competitor: "Low — not enough creative to iterate" },
    { feature: "Remote / no travel", prestyj: true, competitor: "Often requires travel + shoot days" },
    { feature: "Fits performance marketing workflow", prestyj: true, competitor: "Built for brand TV spots, not feed ads" },
  ],
  whySwitch: {
    title: "Why Production Agencies Are the Wrong Tool for Paid Social",
    description: "Their craft is real. Their economics aren't built for batch testing.",
    reasons: [
      {
        icon: "Clock",
        title: "Weeks of turnaround kill iteration",
        description:
          "Paid social creative decays in 7-21 days. Agencies take 4-12 weeks to deliver one spot. By the time you launch, the angle is already tired. Prestyj resets that clock to 24 hours.",
      },
      {
        icon: "DollarSign",
        title: "$10K per spot, 2 spots tested",
        description:
          "A $20K agency engagement buys you two angles. A $3,997 Prestyj batch buys you 1,000 — enough to find 10 winners the agency spots never find.",
      },
      {
        icon: "Target",
        title: "Polished ads look like ads",
        description:
          "TikTok and Reels punish cinematic polish. The feed rewards native, phone-shot, talking-head video. Agencies are physically incapable of producing that — it's not their craft.",
      },
      {
        icon: "TrendingUp",
        title: "No creative volume = no media-buying leverage",
        description:
          "Top media buyers test 20-50 creatives per week. Agencies hand you 1-2. Prestyj hands you 300-1,000 — the exact input volume modern paid social requires.",
      },
      {
        icon: "Zap",
        title: "No crew, no travel, no shoot days",
        description:
          "Prestyj is 15-20 minutes on your phone. No production schedules, no location scouts, no 12-hour shoot days. Same owner, 1,000 finished ads.",
      },
    ],
  },
  relatedResources: [
    { title: "vs Fiverr Video Ads", description: "Freelance video compared", href: "/compare/prestyj-vs-fiverr-video-ads", linkText: "Read comparison" },
    { title: "vs UGC Creators", description: "Hiring creators compared", href: "/compare/prestyj-vs-ugc-creators", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Native Beats Polished. Every Time.",
    description:
      "Skip the 12-week shoot cycle. Record once, get 300-1,000 ads in 24 hours for the cost of a single agency spot.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const productionAgenciesMetadata: CompareMetadata = {
  slug: "prestyj-vs-production-agencies",
  competitorName: "Production Agencies",
  title: "PRESTYJ vs Production Agencies: 1,000 Ads or 2 Polished Spots?",
  description:
    "Agencies ship 1-5 polished spots in 12 weeks for $20K+. PRESTYJ ships 300-1,000 native real-face ads in 24 hours for $1,497. Polished ads get scrolled.",
  keywords: ["video production agency alternative", "ad agency alternative", "batch video ads", "paid social creative volume", "ugc style batch ads"],
};
