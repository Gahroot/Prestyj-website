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

export const hootsuiteCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-hootsuite",
  competitorName: "Hootsuite",
  hero: {
    badge: "Enterprise Scheduler vs Content Engine",
    title: "Prestyj vs",
    titleAccent: "Hootsuite",
    subtitle:
      "Hootsuite is enterprise social management — dashboards, approvals, analytics, $99 to $739+ a month. It still doesn't write your scripts, film your face, or edit a single ad. Prestyj does. One-time. Done in 24 hours.",
    description: "",
    keyStats: [
      { value: "$99-$739+", label: "Hootsuite per month" },
      { value: "$1,497", label: "Prestyj one-time" },
      { value: "0 ads created", label: "By any scheduler" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$99 – $739+",
      priceSubtext: "/month (Pro $99, Team $249, Business $739+, Enterprise custom)",
      features: [
        { text: "Multi-channel scheduling + bulk upload", included: true },
        { text: "Inbox, approvals, team workflows", included: true },
        { text: "Advanced analytics + listening", included: true },
        { text: "OwlyWriter AI for caption ideas", included: true },
        { text: "Creates actual video content", included: false },
        { text: "Writes ad scripts", included: false },
        { text: "Films + edits anything", included: false },
        { text: "Affordable for solo owner-operators", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Creates the actual content",
      prestyj: true,
      competitor: false,
      note: "Hootsuite is enterprise scheduling + analytics — not production",
    },
    { feature: "Scripts written for you", prestyj: true, competitor: false },
    {
      feature: "Vertical video ads delivered",
      prestyj: "300-1,000",
      competitor: "0 — you upload your own",
    },
    {
      feature: "Entry price",
      prestyj: "$1,497 one-time",
      competitor: "$99/mo = $1,188/yr just to start",
    },
    {
      feature: "Annual cost (Team plan)",
      prestyj: "$1,497 one-time",
      competitor: "~$2,988/yr — and still no content",
    },
    {
      feature: "Best-fit user",
      prestyj: "Owner-operators + lean teams",
      competitor: "10+ person marketing teams with content already produced",
    },
    { feature: "Hook + CTA variation engineering", prestyj: true, competitor: false },
    { feature: "Approvals + team workflows", prestyj: "N/A — solo-friendly", competitor: true },
    { feature: "Subscription required", prestyj: false, competitor: true },
    {
      feature: "Solves the actual bottleneck",
      prestyj: "Yes — production",
      competitor: "No — assumes content already exists",
    },
  ],
  whySwitch: {
    title: "Why Hootsuite Is Overkill — and Underpowered — for Owner-Operators",
    description:
      "Hootsuite is built for large teams that already produce content at scale. If you're a solo realtor, contractor, or advisor, you're paying enterprise pricing to schedule a queue you can't fill.",
    reasons: [
      {
        icon: "DollarSign",
        title: "$99-$739/mo to schedule, not create",
        description:
          "Hootsuite Pro starts at $99/mo. Team is $249. Business is $739+. None of those tiers writes a script, films a take, or exports a single vertical ad.",
      },
      {
        icon: "Users",
        title: "Built for 10-person marketing teams",
        description:
          "Approvals, role permissions, multi-stakeholder dashboards — incredible if you have a content team. Useless dead weight if it's just you and your phone.",
      },
      {
        icon: "FileText",
        title: "OwlyWriter AI ≠ ad scripts",
        description:
          "OwlyWriter generates caption ideas. Prestyj writes 300-1,000 full vertical-ad scripts — hook, body, CTA — researched against your industry and audience.",
      },
      {
        icon: "TrendingDown",
        title: "Per-year cost dwarfs a Prestyj batch",
        description:
          "Hootsuite Team is roughly $2,988/yr — twice a Prestyj batch — and at the end of the year you have analytics, not 500 ads.",
      },
      {
        icon: "Zap",
        title: "Create the asset library first",
        description:
          "Buy the content engine before the enterprise dashboard. Prestyj ships 300-1,000 finished ads in 24 hours; you can schedule them with a $0 tool if you want.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Later",
      description: "Lower-priced scheduler",
      href: "/compare/prestyj-vs-later",
      linkText: "Read comparison",
    },
    {
      title: "vs Buffer",
      description: "Simpler scheduler option",
      href: "/compare/prestyj-vs-buffer",
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
    title: "Stop Paying Enterprise Prices for an Empty Queue.",
    description:
      "Hootsuite is great if you already have a content team. If you don't, Prestyj ships 300-1,000 finished vertical ads in 24 hours — for less than a year of Hootsuite Team.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const hootsuiteMetadata: CompareMetadata = {
  slug: "prestyj-vs-hootsuite",
  competitorName: "Hootsuite",
  title: "PRESTYJ vs Hootsuite: $739/mo Scheduler or 500 Finished Ads? (2026)",
  description:
    "Hootsuite costs $99-$739/mo and still doesn't create your content. PRESTYJ ships 300-1,000 vertical video ads in 24 hours for $1,497 one-time — less than a year of Hootsuite.",
  keywords: [
    "hootsuite alternative",
    "hootsuite vs prestyj",
    "enterprise social scheduler alternative",
    "content creation service",
    "batch video ads",
  ],
};
