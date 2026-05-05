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

export const sproutSocialCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-sprout-social",
  competitorName: "Sprout Social",
  hero: {
    badge: "Enterprise Scheduler vs Done-For-You Ad Batches",
    title: "Prestyj vs",
    titleAccent: "Sprout Social",
    subtitle:
      "Sprout Social schedules, listens, and reports. It does not create a single ad for you. Prestyj ships 300-1,000 finished vertical video ads with your real face in 24 hours — for less than 6 months of Sprout's mid-tier seat.",
    description: "",
    keyStats: [
      { value: "$249-$499", label: "Sprout per seat / month" },
      { value: "$0", label: "Ads Sprout creates for you" },
      { value: "300-1,000", label: "Ads Prestyj ships in 24 hrs" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$249 – $499+",
      priceSubtext: "/seat/month · enterprise tiers higher",
      features: [
        { text: "Multi-network publishing & scheduling", included: true },
        { text: "Social listening & analytics", included: true },
        { text: "Inbox / DM management", included: true },
        { text: "Creates ad content for you", included: false },
        { text: "Records you on camera", included: false },
        { text: "Per-seat pricing that compounds", included: false },
      ],
    },
  },
  features: [
    { feature: "Creates finished ads for you", prestyj: true, competitor: false, note: "Sprout schedules content you've already made — it doesn't make any" },
    { feature: "Scripts written for you", prestyj: true, competitor: false },
    { feature: "Includes your real face on camera", prestyj: true, competitor: false },
    { feature: "Ads per batch", prestyj: "300-1,000", competitor: "0 — you bring your own creative" },
    { feature: "Turnaround", prestyj: "24 hrs, done-for-you", competitor: "N/A — content production not included" },
    { feature: "Monthly per-seat subscription", prestyj: false, competitor: true, note: "Sprout charges per user, so a 5-person team can run $1,200-$2,500/mo" },
    { feature: "Cost over 12 months (single seat)", prestyj: "$1,497 once", competitor: "$2,988 – $5,988+" },
    { feature: "Vertical-specific ad scripts (real estate, home services)", prestyj: true, competitor: false },
    { feature: "Reporting & social listening", prestyj: false, competitor: true, note: "If you need listening, keep Sprout — but pair it with Prestyj for the actual ads" },
    { feature: "One-take recording", prestyj: "15-20 min", competitor: "N/A" },
  ],
  whySwitch: {
    title: "Why Sprout Social Isn't Solving Your Real Problem",
    description: "Sprout is excellent at managing posts you already have. The hard part — creating 500 scroll-stopping ads with your face — isn't on its menu.",
    reasons: [
      {
        icon: "FileText",
        title: "Sprout schedules. It doesn't create.",
        description:
          "Every single post, video, and ad you publish through Sprout, you (or an agency) have to produce first. The bottleneck for owner-operator brands is creative volume, not scheduling.",
      },
      {
        icon: "DollarSign",
        title: "Per-seat pricing punishes growing teams",
        description:
          "Sprout's Standard plan starts at $249/seat/mo and Advanced jumps to $499/seat/mo. Add 3-5 seats and you're past $1,000/mo — for a tool that produces zero ads.",
      },
      {
        icon: "Users",
        title: "Service businesses sell trust, not posts",
        description:
          "Realtors, advisors, contractors, and lawyers convert when prospects see the actual owner on camera. A scheduler can't put your face on 500 hooks.",
      },
      {
        icon: "Zap",
        title: "Done-for-you creative beats DIY workflows",
        description:
          "Sprout is software that organizes your work. Prestyj is a service that does the work — scripts, filming guidance, edits, hooks, CTAs — in one 24-hour batch.",
      },
      {
        icon: "BarChart3",
        title: "Analytics on nothing is still nothing",
        description:
          "Sprout's reporting only matters if you're publishing enough creative volume to learn from. Prestyj gives you the volume — Sprout (or any free scheduler) can publish it.",
      },
    ],
  },
  relatedResources: [
    { title: "vs HeyGen", description: "AI avatars vs your real face", href: "/compare/prestyj-vs-heygen", linkText: "Read comparison" },
    { title: "vs AI Agency", description: "Done-for-you ads vs retainer agencies", href: "/compare/prestyj-vs-ai-agency", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Stop Paying to Schedule. Start Paying for Ads That Convert.",
    description:
      "Keep Sprout if you love the dashboard. But the ads you publish through it? Prestyj ships 300-1,000 of them in 24 hours, for a one-time price.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const sproutSocialMetadata: CompareMetadata = {
  slug: "prestyj-vs-sprout-social",
  competitorName: "Sprout Social",
  title: "PRESTYJ vs Sprout Social: A Scheduler Won't Create Your Ads (2026)",
  description:
    "Sprout Social is $249-$499/seat/mo and creates zero ads. PRESTYJ ships 300-1,000 vertical video ads with your real face in 24 hours for $1,497 one-time.",
  keywords: ["sprout social alternative", "sprout social vs prestyj", "social media management alternative", "batch video ads", "owner-operator marketing"],
};
