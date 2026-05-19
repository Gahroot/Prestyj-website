import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — no hires, no managers", included: true },
  { text: "Month-to-month, no long-term contract", included: true },
  { text: "Error revisions included", included: true },
];

export const inHouseCreativeTeamCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-in-house-creative-team",
  competitorName: "In-House Creative Team",
  hero: {
    badge: "Build a Team vs Done-For-You Batch",
    title: "Prestyj vs",
    titleAccent: "In-House Creative Team",
    subtitle:
      "Building an in-house creative team means a videographer, editor, scriptwriter, and creative director on payroll — $300K-$600K+ all-in annually before they ship a single ad. Prestyj is one flat batch fee, 300-1,000 finished ads in 24 hours, and the only person on camera is you.",
    description: "",
    keyStats: [
      { value: "$300K-$600K+/yr", label: "In-house all-in cost" },
      { value: "Flat batch fee", label: "Prestyj cost" },
      { value: "0 hires", label: "Prestyj headcount" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/mo Starter · $3,997 setup · ad budget + AI agents included",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$300K – $600K+",
      priceSubtext:
        "Annual fully-loaded cost · salary + benefits + gear + software + management time",
      features: [
        { text: "Full creative control and IP ownership", included: true },
        { text: "Always-on team for ongoing brand work", included: true },
        { text: "Compounding institutional knowledge over time", included: true },
        { text: "Recruiting, onboarding, and management overhead", included: false },
        { text: "Ramp-up time before first ads ship (months)", included: false },
        { text: "Fully variable output — turnover resets everything", included: false },
        { text: "Volume bottlenecked by 1-2 humans", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Time-to-first-ad",
      prestyj: "24 hours",
      competitor: "3-6 months (hire, ramp, first usable output)",
    },
    {
      feature: "Monthly output capacity",
      prestyj: "300-1,000 ads per batch",
      competitor: "10-40 finished ads (one editor's realistic ceiling)",
    },
    {
      feature: "Fully-loaded annual cost",
      prestyj: "Flat batch fee × however many batches",
      competitor: "$300K-$600K+ (salaries + benefits + gear + software + PM overhead)",
    },
    {
      feature: "Scripts researched for your vertical",
      prestyj: true,
      competitor: "Depends on hire quality",
    },
    {
      feature: "You record once and we handle everything",
      prestyj: true,
      competitor: false,
      note: "In-house = ongoing creative meetings, briefs, reviews, revisions, 1:1s",
    },
    {
      feature: "Management overhead",
      prestyj: "Zero",
      competitor: "Hiring, 1:1s, performance reviews, PTO coverage, turnover",
    },
    {
      feature: "Output continuity through turnover",
      prestyj: "100%",
      competitor: "Resets every time someone leaves",
    },
    {
      feature: "Hook / CTA variation engineering at scale",
      prestyj: true,
      competitor: "Bottlenecked by team capacity",
    },
    {
      feature: "Cost per finished ad at 1,000/yr",
      prestyj: "~$3-5",
      competitor: "$300-$600+ per ad (loaded cost ÷ realistic output)",
    },
    {
      feature: "Pause / resume flexibility",
      prestyj: "Pause anytime",
      competitor: "Layoffs, severance, recruiting again to restart",
    },
  ],
  whySwitch: {
    title: "Why Hiring an In-House Creative Team Loses the Math",
    description:
      "An in-house team makes sense at enterprise scale or when video IS the product. For 99% of owner-operated service businesses, the loaded cost and ramp time aren't recoverable.",
    reasons: [
      {
        icon: "DollarSign",
        title: "Fully-loaded cost is 1.4-1.6x salary",
        description:
          "A senior video editor ($90K-$130K) plus a scriptwriter ($70K-$100K) plus a creative director ($150K-$220K) plus benefits, equipment, software licenses, and PM overhead = $300K-$600K+ annually. That's before they ship one ad.",
      },
      {
        icon: "Clock",
        title: "Months of ramp before usable output",
        description:
          "Recruit (1-3 months) → onboard → learn your offer, brand, and ad accounts (1-3 months) → first usable ads. Prestyj's first batch lands in 24 hours of kickoff.",
      },
      {
        icon: "TrendingDown",
        title: "Volume bottlenecked by human capacity",
        description:
          "One full-time editor realistically ships 10-40 finished ads per month. Modern Meta and TikTok creative testing needs 50-200/week. The math doesn't work — you're paying $300K+ for an output that can't feed the algorithm.",
      },
      {
        icon: "Users",
        title: "Turnover resets institutional knowledge",
        description:
          "Average creative-team tenure is 18-24 months. When the editor or scriptwriter leaves, you re-recruit, re-onboard, and the next person rebuilds the playbook. Prestyj's system is in our team, not in any one hire.",
      },
      {
        icon: "RefreshCw",
        title: "No flexibility to pause or scale",
        description:
          "A bad quarter means layoffs, severance, morale damage, and recruiting again to restart. Prestyj is month-to-month — pause when you don't need it, scale when you do.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Traditional Video Agency",
      description: "The 'outsource it' alternative compared",
      href: "/compare/prestyj-vs-traditional-video-agency",
      linkText: "Read comparison",
    },
    {
      title: "vs Production Agencies (category)",
      description: "Broader production-agency landscape",
      href: "/compare/prestyj-vs-production-agencies",
      linkText: "Read comparison",
    },
    {
      title: "vs In-House Video for CMOs",
      description: "Enterprise CMO angle on in-house",
      href: "/compare/prestyj-vs-in-house-video-for-cmos",
      linkText: "Read comparison",
    },
    {
      title: "Batch video ads vs in-house creative team",
      description: "Conversion-rate breakdown of both models",
      href: "/blog/batch-video-ads-vs-in-house-creative-team-conversion-rates-2026",
      linkText: "Read the deep dive",
    },
    {
      title: "True cost of in-house video production",
      description: "Loaded-cost math for in-house teams",
      href: "/blog/true-cost-of-in-house-video-production-2026",
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
    title: "Skip the $400K Hire. Just Record.",
    description:
      "An in-house team takes months to ship and 6-figures to keep. Prestyj ships 300-1,000 ads in 24 hours — for the cost of one editor's monthly salary.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const inHouseCreativeTeamMetadata: CompareMetadata = {
  slug: "prestyj-vs-in-house-creative-team",
  competitorName: "In-House Creative Team",
  title: "Prestyj vs In-House Creative Team: $400K Hire or Flat Batch Fee? (2026)",
  description:
    "In-house creative teams cost $300K-$600K+/yr fully loaded and ship 10-40 ads/month. Prestyj ships 300-1,000 ads in 24 hours for a flat batch fee. See the math.",
  keywords: [
    "in-house creative team alternative",
    "in-house creative team cost",
    "in-house video team alternative",
    "outsource creative team",
    "batch video ads vs in-house",
    "creative team roi",
  ],
};
