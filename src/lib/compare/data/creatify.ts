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

export const creatifyCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-creatify",
  competitorName: "Creatify",
  hero: {
    badge: "AI Ad Generator vs Done-For-You",
    title: "Prestyj vs",
    titleAccent: "Creatify",
    subtitle:
      "Creatify generates AI ads from a URL or script. Batch mode is impressive — until you realize you still have to write every script, every hook, every angle yourself. Prestyj writes the scripts and films YOU.",
    description: "",
    keyStats: [
      { value: "You still write", label: "Creatify scripts" },
      { value: "Done-for-you", label: "Prestyj scripts" },
      { value: "$0 – $49/mo", label: "Creatify plans" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$0 / $19 / $49+",
      priceSubtext: "/month · credits capped per tier",
      features: [
        { text: "AI avatar library + batch mode", included: true },
        { text: "URL-to-video generator", included: true },
        { text: "You write every script yourself", included: false },
        { text: "You bring every hook and angle", included: false },
        { text: "Uses your real face", included: false },
        { text: "Credit caps on every plan", included: false },
      ],
    },
  },
  features: [
    { feature: "Scripts researched and written for you", prestyj: true, competitor: false, note: "Creatify generates visuals from scripts YOU provide" },
    { feature: "Uses your real face and voice", prestyj: true, competitor: false },
    { feature: "Batch output", prestyj: "300-1,000 ads", competitor: "Credit-capped (~100s/mo depending on tier)" },
    { feature: "Vertical-specific pain points (real estate, home services)", prestyj: true, competitor: false },
    { feature: "Turnaround", prestyj: "24 hrs, hands-off", competitor: "Minutes per ad — but script labor is yours" },
    { feature: "Pricing model", prestyj: "One-time $1,497-$3,997", competitor: "Recurring $19-$49+/mo" },
    { feature: "One-take recording session", prestyj: "15-20 min", competitor: "N/A" },
    { feature: "Hook + body + CTA variation engineering", prestyj: true, competitor: "You design it yourself" },
    { feature: "Cost per ad at 500 ads", prestyj: "~$3-5", competitor: "Lower per render, higher when you price your script time" },
    { feature: "Brand trust from real owner on camera", prestyj: true, competitor: false },
  ],
  whySwitch: {
    title: "Why Creatify's Batch Mode Leaves Money on the Table",
    description: "The rendering is automated. The strategy isn't.",
    reasons: [
      {
        icon: "FileText",
        title: "Creatify batch = you still write 500 scripts",
        description:
          "The 'batch' is rendering, not ideation. You're the one researching hooks, pain points, and angles. Prestyj does all of that and then films you.",
      },
      {
        icon: "Users",
        title: "AI ads lack your story",
        description:
          "An AI avatar reading a script you wrote in 10 minutes sounds like an AI avatar reading a script you wrote in 10 minutes. No case study, no quirk, no voice.",
      },
      {
        icon: "Target",
        title: "No vertical research baked in",
        description:
          "Creatify is horizontal. Prestyj's scripts are researched for real estate, home services, and owner-operated businesses — the exact pain points your prospects are searching for.",
      },
      {
        icon: "Clock",
        title: "Credit caps slow you down",
        description:
          "$49/mo gives you a fixed number of renders. Need 500 for a launch? Buy credits or upgrade. Prestyj ships 500-1,000 in a single 24-hour batch.",
      },
      {
        icon: "DollarSign",
        title: "One-time beats recurring",
        description:
          "Over 24 months of Creatify Pro, you've spent more than a Prestyj batch and produced ads that still feel AI-generated.",
      },
    ],
  },
  relatedResources: [
    { title: "vs Arcads", description: "Another AI UGC tool", href: "/compare/prestyj-vs-arcads", linkText: "Read comparison" },
    { title: "vs HeyGen", description: "AI avatar platform compared", href: "/compare/prestyj-vs-heygen", linkText: "Read comparison" },
    { title: "Batch Video Ads", description: "See Prestyj's service", href: "/batch-video-ads", linkText: "Learn more" },
  ],
  cta: {
    title: "Skip the Script-Writing. Just Record.",
    description:
      "Creatify renders. Prestyj researches, scripts, films, and edits. 300-1,000 ads in 24 hours for one flat fee.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const creatifyMetadata: CompareMetadata = {
  slug: "prestyj-vs-creatify",
  competitorName: "Creatify",
  title: "Prestyj vs Creatify: Done-For-You Scripts vs AI Ad Generator",
  description:
    "Creatify renders AI ads from scripts you write. Prestyj writes scripts AND films your real face for 300-1,000 ads in 24 hours. Compare the difference.",
  keywords: ["creatify alternative", "creatify vs prestyj", "ai ad generator alternative", "batch video ads", "ai ugc alternative"],
};
