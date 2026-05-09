import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "1,500+ posts/month across 7 platforms", included: true },
  { text: "Daily publishing — Instagram, FB, TikTok, LinkedIn, X, Threads, YouTube", included: true },
  { text: "Industry-trained scripts, captions, hooks, carousels", included: true },
  { text: "Brand voice locked in once — applied to every post", included: true },
  { text: "Weekly content calendar — approve in 30 minutes", included: true },
  { text: "One owner, one engine, one invoice", included: true },
  { text: "Analytics + performance learning loop built in", included: true },
  { text: "Live in 24 hours — month-to-month", included: true },
];

export const fiverrSocialMediaCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-fiverr-social-media",
  competitorName: "Fiverr Social Media",
  hero: {
    badge: "Predictable Engine vs Freelancer Lottery",
    title: "Prestyj vs",
    titleAccent: "Fiverr Social Media",
    subtitle:
      "Fiverr is a marketplace lottery — one gig is on-brand, the next is a Canva template with the wrong logo. Prestyj is a single content engine: 1,500+ posts/month, 7 platforms, locked brand voice, one owner, one invoice.",
    description: "",
    keyStats: [
      { value: "Gig lottery", label: "Fiverr quality" },
      { value: "1,500+ / 30–60", label: "Posts per month — Prestyj vs Fiverr stack" },
      { value: "1 vs 5–15", label: "Owners on the account" },
      { value: "24 hrs", label: "Prestyj live SLA" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$3,000/mo",
      priceSubtext: "All-in · 1,500+ posts/mo · 7 platforms · one team",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$5 – $500+",
      priceSubtext: "per gig · per seller · per platform · per revision",
      features: [
        { text: "Marketplace of thousands of sellers", included: true },
        { text: "Low entry price per gig", included: true },
        { text: "No locked brand voice across sellers", included: false, note: "Each gig restarts from your brief" },
        { text: "Quality varies wildly seller-to-seller", included: false },
        { text: "No guaranteed daily volume", included: false },
        { text: "No multi-platform calendar coordination", included: false },
        { text: "Turnaround unpredictable — 3–14 days typical", included: false },
        { text: "Disputes handled by Fiverr, not the seller", included: false },
      ],
    },
  },
  features: [
    { feature: "Posts per month", prestyj: "1,500+", competitor: "30–60 across stitched-together gigs", note: "Fiverr social media gigs typically deliver 10–30 posts per package" },
    { feature: "Platforms covered in one engagement", prestyj: "7 (IG, FB, TikTok, LinkedIn, X, Threads, YouTube)", competitor: "1–2 per gig — extra platforms = extra sellers" },
    { feature: "Brand voice consistency", prestyj: true, competitor: false, note: "Every Fiverr seller restarts from your brief — voice drifts post-to-post" },
    { feature: "Single point of accountability", prestyj: true, competitor: false, note: "5–15 sellers per content stack vs one Prestyj team" },
    { feature: "Cost per post", prestyj: "~$2", competitor: "$3–$50+ depending on gig tier" },
    { feature: "Monthly cost for 1,500 posts", prestyj: "$3,000 flat", competitor: "$15,000–$75,000+ across coordinated gigs" },
    { feature: "Turnaround SLA", prestyj: "Daily auto-publish", competitor: "3–14 days per gig, often slipped" },
    { feature: "Revision policy", prestyj: "Included in calendar approval", competitor: "Capped 1–3 per gig, varies per seller" },
    { feature: "Performance learning loop", prestyj: true, competitor: false, note: "Sellers don't see your account analytics" },
    { feature: "Built for real estate / home services verticals", prestyj: true, competitor: false },
    { feature: "Approval workflow", prestyj: "One weekly calendar, 30 min review", competitor: "Per-gig review across multiple inboxes" },
    { feature: "Scales without re-vetting talent", prestyj: true, competitor: false, note: "Adding output on Fiverr = vetting and onboarding new sellers" },
  ],
  whySwitch: {
    title: "Why Fiverr Breaks the Moment You Need a Real Social Engine",
    description:
      "Fiverr is fine for a one-off graphic. It is not a content department. Here's what fails the moment you try to run real social media volume through a freelancer marketplace.",
    reasons: [
      {
        icon: "AlertTriangle",
        title: "Quality is a coin flip — every gig, every time",
        description:
          "You can land a brilliant editor or a template mill. There's no way to know until delivery — and the next gig from the same seller can be different again. Prestyj is one engine, one standard, every post.",
      },
      {
        icon: "Users",
        title: "5–15 freelancers ≠ a team",
        description:
          "Running real social media through Fiverr means stitching together a graphic designer, a video editor, a copywriter, a scheduler, and a strategist — across multiple sellers per platform. Nobody owns the outcome. Prestyj is one owner, one calendar, one invoice.",
      },
      {
        icon: "Sparkles",
        title: "Brand voice resets every gig",
        description:
          "Each Fiverr seller starts from your brief — no shared style guide, no memory of last month's hooks, no consistent voice. By post 30, your feed looks like five different brands. Prestyj locks brand voice once and applies it across 1,500+ posts/month.",
      },
      {
        icon: "Clock",
        title: "Timelines slip — and the algorithm punishes gaps",
        description:
          "Fiverr sellers juggle dozens of clients. '3-day delivery' routinely becomes 10. Instagram, TikTok, and LinkedIn reward daily consistency — every dark day costs reach. Prestyj publishes on schedule, every day, across every platform.",
      },
      {
        icon: "TrendingUp",
        title: "Volume doesn't exist on Fiverr",
        description:
          "Buying 1,500 posts/month on Fiverr means coordinating 50+ gigs, 50+ briefs, 50+ revision loops, and 50+ payment cycles. Prestyj delivers 1,500+ posts/month under one engagement — same calendar, same voice, one approval.",
      },
      {
        icon: "Shield",
        title: "No accountability when it goes wrong",
        description:
          "Fiverr disputes are slow, seller-friendly, and capped at refund — never recovery of your launch window. Prestyj is a dedicated production partner with a direct line, a revision guarantee, and skin in your performance.",
      },
    ],
  },
  relatedResources: [
    { title: "vs Social Media Agency", description: "Agency retainer compared", href: "/compare/prestyj-vs-social-media-agency", linkText: "Read comparison" },
    { title: "vs Junior Social Hire", description: "$55K hire compared", href: "/compare/prestyj-vs-junior-social-hire", linkText: "Read comparison" },
    { title: "vs Fiverr Video Ads", description: "Freelance video gigs compared", href: "/compare/prestyj-vs-fiverr-video-ads", linkText: "Read comparison" },
    { title: "Done-For-You Social Media", description: "See Prestyj's content engine", href: "/done-for-you-social-media", linkText: "Learn more" },
  ],
  cta: {
    title: "Stop Rolling the Fiverr Dice on Your Brand.",
    description:
      "One engine. One brand voice. 1,500+ posts/month across 7 platforms. $3,000/mo, month-to-month, live in 24 hours.",
    buttonText: "See How It Works",
    buttonHref: "/done-for-you-social-media",
    disclaimer: "Month-to-month. Live in 24 hours. One owner, one invoice.",
  },
});

export const fiverrSocialMediaMetadata: CompareMetadata = {
  slug: "prestyj-vs-fiverr-social-media",
  competitorName: "Fiverr Social Media",
  title: "Prestyj vs Fiverr Social Media: Predictable Engine vs Freelancer Lottery (2026)",
  description:
    "Fiverr social media is a coin flip — 5–15 sellers, drifting brand voice, slipping timelines. Prestyj is one engine: 1,500+ posts/mo across 7 platforms, locked brand voice, $3K/mo, live in 24 hours.",
  keywords: [
    "fiverr social media alternative",
    "fiverr vs prestyj",
    "fiverr social media management",
    "freelance social media alternative",
    "ai social media department",
    "done-for-you social media",
    "social media freelancer comparison",
  ],
};
