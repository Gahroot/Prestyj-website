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

export const bufferCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-buffer",
  competitorName: "Buffer",
  hero: {
    badge: "Scheduler vs Content Engine",
    title: "Prestyj vs",
    titleAccent: "Buffer",
    subtitle:
      "Buffer queues your posts. Prestyj makes them. If you have nothing to queue, the cleanest scheduler in the world is just an empty calendar. Buffer saves 30 minutes a week. Prestyj saves 4-6 hours of writing, filming, and editing.",
    description: "",
    keyStats: [
      { value: "Queue tool", label: "What Buffer is" },
      { value: "Content engine", label: "What Prestyj is" },
      { value: "300-1,000 ads", label: "Per Prestyj batch" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "Free – $120+",
      priceSubtext: "/month (Free, Essentials $6/ch, Team $12/ch, Agency $120+)",
      features: [
        { text: "Free plan for 3 channels", included: true },
        { text: "Queue + auto-publish across major platforms", included: true },
        { text: "AI Assistant for caption rewrites", included: true },
        { text: "Engagement + analytics dashboards", included: true },
        { text: "Creates the actual content", included: false },
        { text: "Writes scripts or films video", included: false },
        { text: "Per-channel pricing scales fast", included: false },
        { text: "Recurring subscription", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Creates the actual content",
      prestyj: true,
      competitor: false,
      note: "Buffer's AI rewrites captions — it doesn't make video",
    },
    { feature: "Scripts written for you", prestyj: true, competitor: false },
    {
      feature: "Vertical video ads delivered",
      prestyj: "300-1,000",
      competitor: "0 — you upload your own",
    },
    { feature: "Native scheduling/auto-publish", prestyj: "Optional", competitor: true },
    {
      feature: "Pricing structure",
      prestyj: "One-time, flat",
      competitor: "Per channel, per month — adds up",
    },
    {
      feature: "Time saved per week",
      prestyj: "4-6 hrs (creation + posting)",
      competitor: "~30 min (posting only)",
    },
    { feature: "Hook + CTA variation engineering", prestyj: true, competitor: false },
    {
      feature: "Best-fit user",
      prestyj: "Owner with no content backlog",
      competitor: "Owner with content already made",
    },
    { feature: "Subscription required", prestyj: false, competitor: true },
    {
      feature: "Solves the actual bottleneck",
      prestyj: "Yes — production",
      competitor: "No — only the publish step",
    },
  ],
  whySwitch: {
    title: "Why Buffer Can't Replace a Content Team",
    description:
      "Buffer is a beautifully simple scheduler. But schedulers don't write hooks, hold a camera, or cut 500 vertical ads.",
    reasons: [
      {
        icon: "Calendar",
        title: "Buffer optimizes the last 5%",
        description:
          "Posting is the smallest part of social. Writing, filming, and editing 500 vertical ads is the 95%. Buffer doesn't touch the part that's actually killing you.",
      },
      {
        icon: "FileText",
        title: "AI captions ≠ ad scripts",
        description:
          "Buffer's AI Assistant can punch up a caption you already wrote. Prestyj writes 300-1,000 full vertical-ad scripts — hook, body, and CTA — built for your industry.",
      },
      {
        icon: "DollarSign",
        title: "Per-channel pricing quietly explodes",
        description:
          "Buffer Essentials is $6/channel/month. Add IG, TikTok, FB, LinkedIn, YouTube and you're at $30/mo before you've created a single post. Prestyj is one fixed payment.",
      },
      {
        icon: "Wrench",
        title: "Buffer doesn't film, edit, or render",
        description:
          "It's a queue. Prestyj is a service: scripts written, owner filmed, captions burned in, 300-1,000 finished MP4s delivered in 24 hours.",
      },
      {
        icon: "Zap",
        title: "Right order: create first, schedule second",
        description:
          "Smart owners book Prestyj to fill the library, then use Buffer (or any scheduler) to drip it. Subscribing to Buffer first is paying to queue nothing.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Later",
      description: "Similar scheduler, different pricing",
      href: "/compare/prestyj-vs-later",
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
    title: "Fill the Queue Before You Schedule It.",
    description:
      "Buffer is a great scheduler — for content that already exists. Prestyj delivers 300-1,000 finished vertical ads in 24 hours so your queue is never empty.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const bufferMetadata: CompareMetadata = {
  slug: "prestyj-vs-buffer",
  competitorName: "Buffer",
  title: "PRESTYJ vs Buffer: Empty Queue or 500 Finished Ads? (2026)",
  description:
    "Buffer schedules posts you still have to create. PRESTYJ ships 300-1,000 vertical ads in 24 hours for one flat price — then schedule them anywhere.",
  keywords: [
    "buffer alternative",
    "buffer vs prestyj",
    "social scheduler alternative",
    "content creation service",
    "batch video ads",
  ],
};
