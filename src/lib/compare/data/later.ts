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

export const laterCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-later",
  competitorName: "Later",
  hero: {
    badge: "Scheduler vs Content Engine",
    title: "Prestyj vs",
    titleAccent: "Later",
    subtitle:
      "Later schedules the posts you've already made. Prestyj makes them. If your bottleneck is creating 500 vertical ads — not posting them — a scheduler doesn't fix it. Later saves 30 minutes a week. Prestyj saves 4-6 hours.",
    description: "",
    keyStats: [
      { value: "30 min/wk", label: "Later saves on posting" },
      { value: "4-6 hrs/wk", label: "Prestyj saves on creation" },
      { value: "$1,497", label: "One-time, not monthly" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$25 – $200+",
      priceSubtext: "/month (Starter $25, Growth $45, Advanced $80, Agency $200+)",
      features: [
        { text: "Visual content calendar", included: true },
        { text: "Auto-publish to IG, TikTok, FB, LinkedIn", included: true },
        { text: "Link in Bio tool", included: true },
        { text: "Basic analytics", included: true },
        { text: "Creates content for you", included: false },
        { text: "Writes scripts or captions", included: false },
        { text: "Films or edits video", included: false },
        { text: "Recurring subscription", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Creates the actual content",
      prestyj: true,
      competitor: false,
      note: "Later is post-only — you must already have the asset",
    },
    { feature: "Scripts written for you", prestyj: true, competitor: false },
    {
      feature: "Vertical video ads delivered",
      prestyj: "300-1,000",
      competitor: "0 — you upload your own",
    },
    { feature: "Native scheduling/auto-publish", prestyj: "Optional", competitor: true },
    {
      feature: "Time saved per week",
      prestyj: "4-6 hrs (creation + posting)",
      competitor: "~30 min (posting only)",
    },
    { feature: "Hook + CTA variation engineering", prestyj: true, competitor: false },
    {
      feature: "Best-fit user",
      prestyj: "Owner who has no content yet",
      competitor: "Owner with backlog ready to schedule",
    },
    { feature: "Subscription required", prestyj: false, competitor: true },
    {
      feature: "Cost over 12 months (Growth plan)",
      prestyj: "$1,497 one-time",
      competitor: "$540 — and zero content created",
    },
    {
      feature: "Solves the actual bottleneck",
      prestyj: "Yes — content production",
      competitor: "No — only the last 5%",
    },
  ],
  whySwitch: {
    title: "Why Later Doesn't Solve the Real Problem",
    description:
      "Later is a great scheduler. But owner-operators don't fail because posts go out at the wrong time. They fail because nothing got made.",
    reasons: [
      {
        icon: "Calendar",
        title: "Scheduling isn't the bottleneck",
        description:
          "Posting takes 30 minutes a week. Creating 500 vertical ads takes 200+ hours. Later optimizes the wrong end of the funnel.",
      },
      {
        icon: "FileText",
        title: "Empty queue = empty scheduler",
        description:
          "Later only adds value when you already have content. Most owner-operators don't. Prestyj fills the queue with 300-1,000 finished ads in 24 hours.",
      },
      {
        icon: "Clock",
        title: "30 minutes saved vs 4-6 hours saved",
        description:
          "Later saves the time it takes to log into IG and TikTok and click 'post.' Prestyj saves the time it takes to write, film, and edit the post in the first place.",
      },
      {
        icon: "DollarSign",
        title: "Forever-subscription with no asset",
        description:
          "Later's Growth plan is $540/yr. Two and a half years of that equals one Prestyj batch — and Later leaves you with nothing tangible to show.",
      },
      {
        icon: "Zap",
        title: "Use both, in the right order",
        description:
          "Smart owners use Prestyj to create the 500-ad library, then a scheduler to drip it. Later first is backwards — you're paying to schedule air.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Buffer",
      description: "Another social scheduler",
      href: "/compare/prestyj-vs-buffer",
      linkText: "Read comparison",
    },
    {
      title: "vs Hootsuite",
      description: "Enterprise scheduler",
      href: "/compare/prestyj-vs-hootsuite",
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
    title: "Make the Content First.",
    description:
      "A scheduler can't post what doesn't exist. Prestyj ships 300-1,000 finished vertical ads in 24 hours — then schedule them with whatever tool you like.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const laterMetadata: CompareMetadata = {
  slug: "prestyj-vs-later",
  competitorName: "Later",
  title: "PRESTYJ vs Later: Schedule Empty or Schedule 500 Ads? (2026)",
  description:
    "Later schedules content you have to create yourself. PRESTYJ creates 300-1,000 vertical ads in 24 hours, then you schedule them. Saves 4-6 hours/week, not 30 min.",
  keywords: [
    "later alternative",
    "later vs prestyj",
    "social scheduler alternative",
    "content creation service",
    "batch video ads",
  ],
};
