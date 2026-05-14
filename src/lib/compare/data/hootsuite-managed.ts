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

export const hootsuiteManagedCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-hootsuite-managed",
  competitorName: "Hootsuite Managed Services",
  hero: {
    badge: "AI Content Engine vs Hootsuite's Enterprise Agency Tier",
    title: "Prestyj vs",
    titleAccent: "Hootsuite Managed",
    subtitle:
      "Hootsuite's managed services — its agency / done-for-you tier — bundles their software with strategists, creative staff, and account managers. Pricing typically lands $7,000-$20,000+/month with annual contracts. Prestyj ships 1,500+ posts/month across 7 platforms for $3,000 — no account team, no annual contract, no creative bottleneck.",
    description: "",
    keyStats: [
      { value: "$7K-$20K+/mo", label: "Hootsuite Managed Services" },
      { value: "$3K/mo", label: "Prestyj all-in" },
      { value: "50× volume", label: "Posts/month at half the cost" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$3,000/mo",
      priceSubtext: "All-in · 1,500+ posts/mo · 7 platforms · Month-to-month",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "$7,000 – $20,000+",
      priceSubtext: "/month · 12-month contract typical · custom-quoted",
      features: [
        { text: "Hootsuite Enterprise software included", included: true },
        { text: "Dedicated strategist + account manager", included: true },
        { text: "Creative team for graphics + copy", included: true },
        { text: "Social listening + advanced analytics", included: true },
        { text: "20-60 posts/month typical scope", included: true, note: "Custom-scoped" },
        { text: "1,500+ posts/month at scale", included: false },
        { text: "Daily multi-platform short-form video volume", included: false },
        { text: "Month-to-month commitment", included: false },
        { text: "Sub-$5K monthly all-in cost", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Posts produced per month",
      prestyj: "1,500+",
      competitor: "20-60 (agency-scoped)",
      note: "Hootsuite managed scopes look like a traditional agency calendar",
    },
    {
      feature: "Platforms covered",
      prestyj: "7 (IG, FB, TikTok, LinkedIn, X, Threads, YouTube)",
      competitor: "Typically 2-4 — extra channels expand scope",
    },
    {
      feature: "Monthly cost (all-in)",
      prestyj: "$3,000 flat",
      competitor: "$7,000 – $20,000+ custom",
    },
    {
      feature: "Cost per post",
      prestyj: "~$2",
      competitor: "$140 – $1,000+",
    },
    {
      feature: "Short-form vertical video volume",
      prestyj: "Daily across all platforms",
      competitor: "Limited — production-cycle bound",
    },
    {
      feature: "Account managers + strategist calls",
      prestyj: false,
      competitor: true,
      note: "Half the invoice covers people, not posts",
    },
    {
      feature: "Annual / 12-month contract required",
      prestyj: false,
      competitor: true,
    },
    {
      feature: "Industry vertical fit (real estate, home services)",
      prestyj: "Pre-trained per vertical",
      competitor: "Generic — built for enterprise brands",
    },
    {
      feature: "Approval cycle",
      prestyj: "Weekly batch, ~30 min to approve",
      competitor: "2-4 week creative cycles per drop",
    },
    {
      feature: "Best-fit user",
      prestyj: "Owner-operators + lean teams needing daily volume",
      competitor: "Enterprise brands with multi-stakeholder approval",
    },
    {
      feature: "You stay in control of approvals",
      prestyj: true,
      competitor: true,
    },
  ],
  whySwitch: {
    title: "Why Enterprise Managed Services Charge 5-7× More for 50× Less Volume",
    description:
      "Hootsuite Managed Services is an excellent fit for Fortune 1000 brands with global teams, multi-stakeholder approval chains, and 6-figure annual social budgets. It is dramatically overpriced and under-volumed for SMBs and owner-operators who need to flood the feed daily.",
    reasons: [
      {
        icon: "DollarSign",
        title: "$7K-$20K/mo gets you 20-60 posts — not 1,500",
        description:
          "Managed services scope like a traditional agency: one creative strategist, two content producers, one account manager, monthly editorial calendar. Output lands at 20-60 posts/month across 2-4 platforms. At $10,000/mo that's $167-$500 per post. Prestyj averages ~$2 per post.",
      },
      {
        icon: "Users",
        title: "You're paying for an account team, not the algorithm",
        description:
          "A typical managed-services engagement bills you for a strategist, a copywriter, a designer, a community manager, and an account manager. None of those people post 50 times a day on TikTok. Prestyj replaces the team overhead with an AI content engine optimized for daily multi-platform volume.",
      },
      {
        icon: "Handshake",
        title: "12-month annual contracts lock the budget",
        description:
          "Hootsuite Managed Services typically requires a 12-month annual commitment — sometimes longer for white-glove enterprise scopes. Prestyj is month-to-month. If the volume isn't producing leads in 60 days, you walk.",
      },
      {
        icon: "Calendar",
        title: "Production cycles can't keep up with short-form video",
        description:
          "Managed services run 2-4 week creative cycles — brief, design, route for approval, revise, schedule. That cadence built for branded campaigns can't generate 30 vertical TikTok hooks a week. Prestyj generates and queues a full week of multi-platform short-form video every Sunday for ~30-minute approval.",
      },
      {
        icon: "Target",
        title: "Built for enterprise brands, not owner-operated SMBs",
        description:
          "Managed services excel at brand voice consistency for a Fortune 500 with 14 stakeholders. For a real estate team, contractor, mortgage broker, or solo founder, the approval-heavy model is the wrong cost structure. You need volume, vertical, and velocity — not a quarterly business review.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Hootsuite (software tiers)",
      description: "Hootsuite Pro/Team/Business compared",
      href: "/compare/prestyj-vs-hootsuite",
      linkText: "Read comparison",
    },
    {
      title: "vs Social Media Agency",
      description: "Traditional agency retainers compared",
      href: "/compare/prestyj-vs-social-media-agency",
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
    title: "50× the Volume for Half the Price — Month-to-Month.",
    description:
      "Skip the annual contract and the account-manager middleman. Prestyj ships 1,500+ posts/month across 7 platforms for $3,000 — live in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "Month-to-month. No long-term contract. Live in 24 hours.",
  },
});

export const hootsuiteManagedMetadata: CompareMetadata = {
  slug: "prestyj-vs-hootsuite-managed",
  competitorName: "Hootsuite Managed Services",
  title: "PRESTYJ vs Hootsuite Managed Services: $3K All-In or $20K Agency Retainer? (2026)",
  description:
    "Hootsuite Managed Services (agency tier) runs $7K-$20K+/month with annual contracts for 20-60 posts. PRESTYJ ships 1,500+ posts/month across 7 platforms for $3,000 — month-to-month.",
  keywords: [
    "hootsuite managed services alternative",
    "hootsuite agency tier pricing",
    "hootsuite enterprise managed services",
    "hootsuite done for you social media",
    "alternatives to hootsuite managed services",
  ],
};
