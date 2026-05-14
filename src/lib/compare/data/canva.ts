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

export const canvaCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-canva",
  competitorName: "Canva",
  hero: {
    badge: "Templates vs Finished Posts",
    title: "Prestyj vs",
    titleAccent: "Canva",
    subtitle:
      "Canva gives you templates and a scheduler. Prestyj gives you 300-1,000 finished, on-brand vertical video ads with scripts written, filmed, and edited for you. Templates are a starting line. Prestyj is the finish line.",
    description: "",
    keyStats: [
      { value: "Templates", label: "What Canva ships" },
      { value: "Finished ads", label: "What Prestyj ships" },
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
      price: "$15",
      priceSubtext: "/month ($120/yr) · Teams $10/user/mo",
      features: [
        { text: "Massive template + stock library", included: true },
        { text: "Basic Content Planner / scheduler", included: true },
        { text: "AI image + magic-resize tools", included: true },
        { text: "You design every post yourself", included: false },
        { text: "You write every caption + script", included: false },
        { text: "Doesn't film or edit videos for you", included: false },
        { text: "Recurring subscription", included: false },
      ],
    },
  },
  features: [
    { feature: "Scripts written for you", prestyj: true, competitor: false },
    {
      feature: "Filmed video ads delivered",
      prestyj: "300-1,000",
      competitor: false,
      note: "Canva is design-first, not video-first",
    },
    {
      feature: "Templates available",
      prestyj: "N/A — finished assets",
      competitor: "Hundreds of thousands",
    },
    { feature: "Native scheduling", prestyj: "Optional", competitor: "Yes (Content Planner)" },
    { feature: "Hook + CTA variation engineering", prestyj: true, competitor: false },
    { feature: "Vertical-specific (real estate, home services)", prestyj: true, competitor: false },
    {
      feature: "Time per 500 ads",
      prestyj: "15-20 min recording",
      competitor: "Hundreds of hours of design + filming",
    },
    {
      feature: "Best-fit user",
      prestyj: "Owner-operators wanting finished ads",
      competitor: "Designers + marketers wanting tools",
    },
    { feature: "Subscription required", prestyj: false, competitor: true },
    {
      feature: "Output format",
      prestyj: "Ready-to-run vertical MP4 ads",
      competitor: "Editable design files",
    },
  ],
  whySwitch: {
    title: "Why Canva Isn't a Content Engine for Owner-Operators",
    description:
      "Canva is the best design tool ever made. It's still a tool — and tools require an operator with hours to spare.",
    reasons: [
      {
        icon: "Sparkles",
        title: "Templates ≠ finished content",
        description:
          "Canva hands you a starting point. You still have to swap copy, source footage, brand it, write the caption, and schedule it. Prestyj hands you 500 finished ads.",
      },
      {
        icon: "Wrench",
        title: "Canva isn't a video production house",
        description:
          "Canva can edit a quick clip, but it doesn't write your script, direct the take, or batch 500 unique vertical ads. That's not the product.",
      },
      {
        icon: "Calendar",
        title: "A scheduler with nothing to schedule",
        description:
          "Canva's Content Planner only matters if you have a backlog of posts. Most owner-operators don't. Prestyj fills the queue first; scheduling is the easy part.",
      },
      {
        icon: "DollarSign",
        title: "Subscription forever, content never",
        description:
          "$15/mo for Canva Pro is cheap — until you realize five years of it equals one Prestyj batch and you still haven't shipped 500 ads.",
      },
      {
        icon: "Target",
        title: "Built for designers, not service businesses",
        description:
          "Canva's defaults are aesthetic, not conversion-driven. Prestyj scripts are written by people who run real estate, home services, and B2B service ads daily.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Later",
      description: "Pure social scheduler",
      href: "/compare/prestyj-vs-later",
      linkText: "Read comparison",
    },
    {
      title: "vs Buffer",
      description: "Another social scheduler",
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
    title: "Skip the Templates. Get the Ads.",
    description:
      "Canva gives you a blank canvas. Prestyj gives you 300-1,000 finished, scripted, filmed, edited vertical ads in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const canvaMetadata: CompareMetadata = {
  slug: "prestyj-vs-canva",
  competitorName: "Canva",
  title: "PRESTYJ vs Canva: Finished Ads or Just Templates? (2026)",
  description:
    "Canva gives you templates and a scheduler — you still design every post. PRESTYJ ships 300-1,000 finished vertical video ads in 24 hours, one-time price.",
  keywords: [
    "canva alternative",
    "canva vs prestyj",
    "social media content tool",
    "done for you ads",
    "batch video ads",
  ],
};
