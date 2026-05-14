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

export const socialMediaAgencyCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-social-media-agency",
  competitorName: "Social Media Agency",
  hero: {
    badge: "AI Content Engine vs Traditional Agency Retainer",
    title: "Prestyj vs",
    titleAccent: "Social Media Agencies",
    subtitle:
      "Traditional social media agencies charge $5,000–$15,000/month to ship 20–30 posts. Prestyj ships 1,500+ posts/month across 7 platforms for $3,000 — same calendar, 50× the volume, no account-manager middleman.",
    description: "",
    keyStats: [
      { value: "1,500+ / 30", label: "Posts per month — Prestyj vs agency" },
      { value: "$3K vs $5K-$15K", label: "Monthly cost" },
      { value: "50×", label: "More volume per dollar" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$3,000/mo",
      priceSubtext: "All-in · 1,500+ posts/mo · 7 platforms",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$5,000 – $15,000+",
      priceSubtext: "/month retainer · 3-month minimum typical",
      features: [
        { text: "Account manager + strategist on calls", included: true },
        { text: "Brand voice workshop + content pillars", included: true },
        {
          text: "20–30 posts per month (1 per business day)",
          included: true,
          note: "Industry standard agency output",
        },
        { text: "1,500+ posts/month at scale", included: false },
        { text: "Daily multi-platform publishing", included: false },
        { text: "Pricing scales with platforms added", included: false },
        { text: "Long-term contract (3–12 months)", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Posts per month",
      prestyj: "1,500+",
      competitor: "20–30",
      note: "Agencies bill creative hours; Prestyj bills outcomes",
    },
    {
      feature: "Platforms covered",
      prestyj: "7 (IG, FB, TikTok, LinkedIn, X, Threads, YouTube)",
      competitor: "Usually 2–3 — extra platforms cost extra",
    },
    { feature: "Monthly cost", prestyj: "$3,000 flat", competitor: "$5,000 – $15,000+" },
    { feature: "Cost per post", prestyj: "~$2", competitor: "$166 – $750" },
    {
      feature: "Turnaround for new content",
      prestyj: "Daily auto-publish",
      competitor: "2–4 week creative cycles",
    },
    {
      feature: "Account managers + status calls",
      prestyj: false,
      competitor: true,
      note: "You're paying for the meeting, not the post",
    },
    {
      feature: "Long-term contract required",
      prestyj: false,
      competitor: true,
      note: "Most agencies require 3–12 month commitment",
    },
    {
      feature: "Industry-specific content (real estate, home services)",
      prestyj: true,
      competitor: "Depends on agency niche",
    },
    {
      feature: "Performance learning loop",
      prestyj: true,
      competitor: "Manual reporting, quarterly optimization",
    },
    {
      feature: "Best-fit user",
      prestyj: "Owner-operators + lean teams that need volume",
      competitor: "Brands with $60K+/yr social budget and approval committees",
    },
    { feature: "You stay in control of approvals", prestyj: true, competitor: true },
  ],
  whySwitch: {
    title: "Why Traditional Social Media Agencies Are Built for the Wrong Decade",
    description:
      "Agencies were designed for an era when 4 posts per week was 'a lot.' Today, the algorithm rewards daily volume across every platform — and an account-manager-heavy retainer can't deliver it without 5× the budget.",
    reasons: [
      {
        icon: "DollarSign",
        title: "$5K–$15K/mo for 30 posts is $166–$750 per post",
        description:
          "Most agencies cap at one post per business day per platform. At $5,000/mo for 30 posts, that's $166 per post. At $15,000/mo across two platforms, you're paying $250–$750 per post. Prestyj averages ~$2 per post at the same monthly spend or less.",
      },
      {
        icon: "TrendingDown",
        title: "30 posts a month doesn't move the algorithm anymore",
        description:
          "Instagram, TikTok, and LinkedIn reward consistent daily volume. 30 posts a month spread across two platforms is roughly 4 posts per week per channel — below the threshold algorithms use to surface your content. Volume is the unlock, not 'great' creative once a week.",
      },
      {
        icon: "Users",
        title: "You're paying for the account team, not the content",
        description:
          "Half the agency invoice covers strategists, account managers, status calls, and quarterly reviews. None of those publish a post. Prestyj replaces the overhead with an AI content engine — same strategic logic, no humans on retainer.",
      },
      {
        icon: "Calendar",
        title: "2–4 week creative cycles vs daily publishing",
        description:
          "Agencies brief, design, route for approval, revise, then schedule — typically a 2–4 week cycle per content drop. Prestyj generates and queues a full week of multi-platform posts every Sunday for you to approve in under 30 minutes.",
      },
      {
        icon: "Handshake",
        title: "No 12-month contract handcuffs",
        description:
          "Most agencies require a 3–12 month commitment plus onboarding fees. Prestyj is month-to-month — if the volume isn't producing leads, you leave. The economics align with your results, not the agency's revenue model.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Hootsuite",
      description: "Enterprise scheduler compared",
      href: "/compare/prestyj-vs-hootsuite",
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
    title: "Get an Agency's Calendar at 1/5 the Cost — and 50× the Volume.",
    description:
      "Skip the retainer, the account manager, and the 12-month contract. Prestyj ships 1,500+ posts/mo across 7 platforms for $3,000 — month-to-month, live in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "Month-to-month. No long-term contract. Live in 24 hours.",
  },
});

export const socialMediaAgencyMetadata: CompareMetadata = {
  slug: "prestyj-vs-social-media-agency",
  competitorName: "Social Media Agency",
  title: "PRESTYJ vs Social Media Agency: 1,500 Posts for $3K or 30 for $15K? (2026)",
  description:
    "Traditional social media agencies charge $5K–$15K/mo for 20–30 posts. PRESTYJ ships 1,500+ posts/month across 7 platforms for $3,000 — month-to-month, no account managers, no contract.",
  keywords: [
    "social media agency alternative",
    "social media agency vs prestyj",
    "social media agency pricing",
    "ai social media agency",
    "done-for-you social media",
    "social media management agency comparison",
  ],
};
