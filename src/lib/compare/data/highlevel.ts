import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "1,500+ posts/month across 7 platforms", included: true },
  {
    text: "Daily publishing — Instagram, FB, TikTok, LinkedIn, X, Threads, YouTube",
    included: true,
  },
  { text: "Industry-specific scripts + captions written for you", included: true },
  { text: "Weekly content calendar — approve in minutes", included: true },
  { text: "Hooks, carousels, short-form video, image posts", included: true },
  { text: "Branded to your business — not generic templates", included: true },
  { text: "Analytics + performance learning loop", included: true },
  { text: "No long-term contract", included: true },
];

export const highlevelCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-highlevel",
  competitorName: "HighLevel",
  hero: {
    badge: "Done-For-You Content vs DIY SaaS Platform",
    title: "Prestyj vs",
    titleAccent: "HighLevel",
    subtitle:
      "HighLevel (GoHighLevel) is a powerful all-in-one SaaS for agencies — CRM, funnels, automation, and a social media planner. But the social planner is a scheduler, not a creator. You still have to write every post, design every graphic, and edit every video. Prestyj ships 1,500+ finished posts/month across 7 platforms — done for you.",
    description: "",
    keyStats: [
      { value: "$97-$497/mo", label: "HighLevel SaaS — plus your content team" },
      { value: "$3,000/mo", label: "Prestyj — 1,500+ posts done-for-you" },
      { value: "0 posts created", label: "By any HighLevel tier" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/mo Starter · $3,997 setup · ad budget + AI agents included",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$97 – $497+",
      priceSubtext: "/month (Starter $97, Unlimited $297, SaaS Pro $497, Agency Pro $497+)",
      features: [
        { text: "All-in-one CRM + marketing automation", included: true },
        { text: "Social media planner (scheduling tool)", included: true },
        { text: "Funnels, websites, email/SMS workflows", included: true },
        { text: "White-label SaaS resale (Pro tiers)", included: true },
        { text: "Creates actual social media content", included: false },
        { text: "Writes scripts, captions, hooks", included: false },
        { text: "Edits or produces video posts", included: false },
        { text: "Done-for-you content engine", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Creates the actual posts (scripts + visuals + video)",
      prestyj: true,
      competitor: false,
      note: "HighLevel is infrastructure — content is your job (or your agency's)",
    },
    {
      feature: "Posts per month",
      prestyj: "1,500+",
      competitor: "0 (you supply all content)",
    },
    {
      feature: "Platforms published to",
      prestyj: "IG, FB, TikTok, LinkedIn, X, Threads, YouTube",
      competitor: "FB, IG, LinkedIn, GMB, TikTok (scheduling only)",
    },
    {
      feature: "Industry-specific scripts written for you",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Short-form video editing",
      prestyj: "Included",
      competitor: "Not included",
    },
    {
      feature: "Weekly content calendar generated for you",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Best-fit user",
      prestyj: "Owner-operators + lean teams without a content team",
      competitor: "Agencies + SaaSpreneurs running CRM/funnels for clients",
    },
    {
      feature: "Monthly cost (real total)",
      prestyj: "$3,000 flat",
      competitor: "$97-$497 SaaS + $2K-$8K for content team or agency",
    },
    {
      feature: "Cost per post (at advertised volume)",
      prestyj: "~$2",
      competitor: "Variable — depends entirely on your content cost",
    },
    {
      feature: "Replaces your social media agency",
      prestyj: true,
      competitor: false,
      note: "HighLevel replaces your CRM + marketing stack, not your content team",
    },
    {
      feature: "Works alongside HighLevel CRM",
      prestyj: "Yes — posts drive leads into your HighLevel pipeline",
      competitor: "N/A — it IS the CRM",
    },
  ],
  whySwitch: {
    title: "Why HighLevel's Social Planner Is Plumbing, Not Production",
    description:
      "HighLevel is one of the best SaaS platforms ever built — for the CRM, funnel, and automation layer. The social planner is excellent infrastructure, but it doesn't make a single piece of content. If you don't have a content team feeding it, your queue stays empty.",
    reasons: [
      {
        icon: "FileText",
        title: "The social planner schedules — it doesn't write or film",
        description:
          "HighLevel's social tool lets you queue posts to FB, IG, LinkedIn, GMB, and TikTok from one inbox. Powerful. But every post still needs a script, a caption, a graphic, or a video — and HighLevel doesn't make any of those. You're paying for plumbing, not water.",
      },
      {
        icon: "DollarSign",
        title: "HighLevel SaaS is cheap. The content gap is expensive.",
        description:
          "Starter is $97/mo, Unlimited $297, SaaS Pro $497. Then you hire a social media manager ($4K-$8K/mo) or contract an agency ($5K-$15K/mo) to actually produce posts. Prestyj is $3K/mo all-in for 1,500+ finished posts — and feeds them straight into your HighLevel scheduler if you want.",
      },
      {
        icon: "Users",
        title: "Built for agencies running on someone else's content",
        description:
          "HighLevel's design assumes you're an agency managing clients who supply their own content, or you have an in-house team. If you're a solo operator or lean team, the dashboard is overkill and the empty content queue is the actual bottleneck.",
      },
      {
        icon: "Calendar",
        title: "30 posts a month doesn't move the algorithm",
        description:
          "Most agencies using HighLevel ship 20-30 posts/month per client. Instagram, TikTok, and LinkedIn algorithms reward daily volume across every format. Prestyj produces ~50 posts/day across 7 platforms — the volume the algorithm actually rewards.",
      },
      {
        icon: "Handshake",
        title: "Prestyj + HighLevel = best of both",
        description:
          "You don't have to choose. Keep HighLevel as your CRM, funnel builder, and automation engine. Plug Prestyj in as the content layer. Posts go out daily, leads land in your HighLevel pipeline, and your workflows take over from there.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Social Media Agency",
      description: "Traditional retainer agencies compared",
      href: "/compare/prestyj-vs-social-media-agency",
      linkText: "Read comparison",
    },
    {
      title: "vs Sprout Social",
      description: "Per-seat scheduler compared",
      href: "/compare/prestyj-vs-sprout-social",
      linkText: "Read comparison",
    },
    {
      title: "AI Content Department",
      description: "The AI agent for social media \u2014 see how it works",
      href: "/ai-content-department",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Keep HighLevel. Fill the Queue.",
    description:
      "HighLevel handles the pipeline. Prestyj fills it with 1,500+ posts/month across 7 platforms — done for you, branded to you, delivered daily.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "Month-to-month. No long-term contract. Live in 24 hours.",
  },
});

export const highlevelMetadata: CompareMetadata = {
  slug: "prestyj-vs-highlevel",
  competitorName: "HighLevel",
  title: "Prestyj vs HighLevel: SaaS Scheduler or Done-For-You Content Engine? (2026)",
  description:
    "HighLevel costs $97-$497/mo for CRM + a social scheduler — but creates zero posts. Prestyj ships 1,500+ posts/month across 7 platforms for $3,000 — done for you, fed into HighLevel if you want.",
  keywords: [
    "highlevel alternative",
    "gohighlevel social media",
    "highlevel vs prestyj",
    "highlevel social planner",
    "done-for-you social media for highlevel users",
    "ai content for highlevel",
  ],
};
