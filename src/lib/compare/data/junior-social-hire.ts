import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "1,500+ posts/month across 7 platforms", included: true },
  { text: "Runs 24/7/365 — no PTO, no sick days, no Slack-DM excuses", included: true },
  {
    text: "Daily publishing — Instagram, FB, TikTok, LinkedIn, X, Threads, YouTube",
    included: true,
  },
  { text: "Industry-trained scripts, captions, hooks, carousels", included: true },
  { text: "Weekly content calendar — approve in 30 minutes", included: true },
  { text: "Analytics + performance learning loop built in", included: true },
  { text: "Live in 24 hours — no 6-week onboarding ramp", included: true },
  { text: "Month-to-month — cancel anytime, no severance", included: true },
];

export const juniorSocialHireCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-junior-social-hire",
  competitorName: "Junior Social Media Manager",
  hero: {
    badge: "AI Department vs Junior Hire",
    title: "Prestyj vs",
    titleAccent: "Hiring a Junior Social Media Manager",
    subtitle:
      "Founders keep hiring a $55K/yr junior to run social — and watching them ship 20 posts/month, take PTO, and quit inside 6 months. Prestyj is a $3K/mo AI content department that runs 24/7, ships 1,500+ posts/month, and never gives notice.",
    description: "",
    keyStats: [
      { value: "$3K/mo vs $55K/yr", label: "AI department vs salaried hire" },
      { value: "1,500+ vs 20–40", label: "Posts per month — Prestyj vs junior" },
      { value: "24/7 vs 9–5 + PTO", label: "Coverage" },
      { value: "6 mo", label: "Median tenure of a junior social hire" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$3,000/mo",
      priceSubtext: "All-in AI content department · live in 24 hours",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "~$75K all-in/yr",
      priceSubtext: "$55K salary + benefits, payroll tax, software, equipment",
      features: [
        {
          text: "$55,000 base salary",
          included: true,
          note: "BLS median for junior social media coordinator",
        },
        { text: "+$12K–$20K benefits, payroll tax, 401k", included: true },
        { text: "+$3K–$5K software (Canva, scheduler, stock, AI tools)", included: true },
        {
          text: "Ships 20–40 posts/month across 1–2 platforms",
          included: true,
          note: "Realistic junior output",
        },
        { text: "Out 15–25 days/yr (PTO, sick, holidays)", included: false },
        { text: "Median tenure under 18 months — often quits at 6", included: false },
        { text: "6-week ramp before producing usable content", included: false },
        { text: "Severance, recruiter fees, rehire cycle on exit", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Annual cost (fully loaded)",
      prestyj: "$36,000",
      competitor: "$70,000–$80,000",
      note: "Salary + benefits + payroll tax + software + equipment",
    },
    {
      feature: "Posts per month",
      prestyj: "1,500+",
      competitor: "20–40",
      note: "Junior coordinators average 1–2 posts per business day across 1–2 platforms",
    },
    { feature: "Cost per post", prestyj: "~$2", competitor: "$150–$300" },
    {
      feature: "Platforms covered",
      prestyj: "7 (IG, FB, TikTok, LinkedIn, X, Threads, YouTube)",
      competitor: "1–2 they're comfortable with",
    },
    { feature: "Coverage", prestyj: "24/7/365", competitor: "Mon–Fri, 9–5, minus PTO" },
    {
      feature: "Time to first post",
      prestyj: "24 hours",
      competitor: "4–6 weeks (recruit + onboard + ramp)",
    },
    { feature: "Sick days, PTO, holidays", prestyj: "None", competitor: "15–25 days/yr" },
    {
      feature: "Turnover risk",
      prestyj: "Zero",
      competitor: "Quits in ~6 months on average",
      note: "Junior marketing roles have the highest turnover in the org chart",
    },
    { feature: "Recruiting + severance cost", prestyj: "$0", competitor: "$8K–$15K per cycle" },
    {
      feature: "Management overhead",
      prestyj: "Approve calendar in 30 min/wk",
      competitor: "Hiring, 1:1s, reviews, performance plans, rehiring",
    },
    {
      feature: "Performance learning loop",
      prestyj: true,
      competitor: "Manual — if they know how",
    },
    {
      feature: "Industry-specific scripts (real estate / home services)",
      prestyj: true,
      competitor: "Generic until trained — by you",
    },
    {
      feature: "Scales with your business",
      prestyj: "Same price, more output",
      competitor: "Need a second hire",
    },
  ],
  whySwitch: {
    title: "Why Founders Are Skipping the Junior Hire Entirely",
    description:
      "The $55K junior social hire is the most predictable bad spend in early-stage marketing. Here's the math founders are running before they post the job.",
    reasons: [
      {
        icon: "DollarSign",
        title: "$55K salary is really ~$75K — and they ship 30 posts/mo",
        description:
          "Base salary is the smallest line item. Add 22%–35% in benefits, payroll tax, and 401k match, then $3K–$5K in software (Canva Pro, scheduler, stock, AI tools, laptop). Real cost lands at $70K–$80K/yr for 20–40 posts/month on 1–2 platforms. That's $150–$300 per post. Prestyj averages ~$2 per post at less than half the spend.",
      },
      {
        icon: "Clock",
        title: "They take PTO. The algorithm doesn't.",
        description:
          "A junior hire is out 15–25 days a year between PTO, sick days, and holidays — plus weekends. Instagram, TikTok, and LinkedIn algorithms reward daily consistency. Every dark day costs reach. Prestyj publishes Saturday at 7am the same way it publishes Tuesday at 2pm.",
      },
      {
        icon: "TrendingDown",
        title: "Median tenure is under 18 months. Often 6.",
        description:
          "Junior marketing roles have the highest turnover in the org chart. Most leave inside a year for a $10K bump elsewhere. When they do, you eat $8K–$15K in recruiter fees, lose the brand voice they built, and restart the 4–6 week ramp with someone new. Prestyj never gives notice.",
      },
      {
        icon: "Zap",
        title: "24-hour live vs 6-week ramp",
        description:
          "From job posting to first usable post: post the role (2 weeks), interview (2 weeks), notice period (2–4 weeks), onboarding + brand training (2–4 weeks). You're 2–3 months in before content ships. Prestyj is publishing inside 24 hours of kickoff — same brand voice, same approval workflow, no human onboarding.",
      },
      {
        icon: "Users",
        title: "You hired a creator and got a coordinator",
        description:
          "$55K hires a coordinator, not a creative director. They'll schedule what you write, repost trending audio, and ask you for the strategy. The strategy work — hooks, angles, content pillars, performance review — still falls on the founder. Prestyj brings the playbook with it.",
      },
      {
        icon: "RefreshCw",
        title: "Scaling means a second hire. Or just more Prestyj.",
        description:
          "Want to add YouTube? LinkedIn thought leadership? A second brand? With a junior, that's another $75K hire or unrealistic expectations on the first. Prestyj scales output across 7 platforms at the same monthly price — the AI department grows; the invoice doesn't.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Social Media Agency",
      description: "Agency retainer vs AI content engine",
      href: "/compare/prestyj-vs-social-media-agency",
      linkText: "Read comparison",
    },
    {
      title: "vs Sprout Social",
      description: "Scheduler vs full content department",
      href: "/compare/prestyj-vs-sprout-social",
      linkText: "Read comparison",
    },
    {
      title: "AI Content Department",
      description: "The AI agent for social media \u2014 replaces a junior hire",
      href: "/ai-content-department",
      linkText: "See the platform",
    },
  ],
  cta: {
    title: "Skip the $55K Hire. Get a Content Department for $3K/mo.",
    description:
      "Prestyj ships 1,500+ posts/month across 7 platforms — 24/7, month-to-month, live in 24 hours. No PTO, no severance, no 6-month exit. Just calendar approvals and outcomes.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "Month-to-month. Live in 24 hours. Cancel anytime — no severance.",
  },
});

export const juniorSocialHireMetadata: CompareMetadata = {
  slug: "prestyj-vs-junior-social-hire",
  competitorName: "Junior Social Media Manager",
  title:
    "Prestyj vs Hiring a Junior Social Media Manager: $3K/mo AI Department vs $55K/yr Hire (2026)",
  description:
    "Hiring a junior social media manager costs $70K–$80K all-in for 20–40 posts/month — and they quit in 6 months. Prestyj is a $3K/mo AI content department: 1,500+ posts, 7 platforms, 24/7, live in 24 hours.",
  keywords: [
    "junior social media manager cost",
    "hire social media manager vs ai",
    "social media manager salary",
    "ai social media department",
    "in-house vs ai social media",
    "social media coordinator alternative",
    "founder social media hire",
    "prestyj vs hiring",
  ],
};
