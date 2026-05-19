import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

const PRESTYJ_PRICING_FEATURES = [
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — not AI", included: true },
  { text: "Month-to-month, no long-term contract", included: true },
  { text: "Error revisions included", included: true },
];

export const pencilCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-pencil",
  competitorName: "Pencil",
  hero: {
    badge: "AI Ad Generator vs Real-Face Batch",
    title: "Prestyj vs",
    titleAccent: "Pencil",
    subtitle:
      "Pencil (now Pencil Pro by Brandtech) auto-generates static and video ad variants from your brand assets. Useful for enterprise creative teams iterating on banners. For owner-led service businesses that need scroll-stopping UGC, Pencil renders polished assets — not the real you talking to camera.",
    description: "",
    keyStats: [
      { value: "Brand-asset remixes", label: "Pencil output" },
      { value: "Your real face", label: "Prestyj output" },
      { value: "24 hrs", label: "Prestyj turnaround" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/mo Starter · $3,997 setup · ad budget + AI agents included",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "Custom enterprise",
      priceSubtext: "Quote-based · typically $1,000s–$10,000s/mo for enterprise plans",
      features: [
        { text: "AI generation of brand-asset variants", included: true },
        { text: "Static + short-form video output", included: true },
        { text: "Predictive performance scoring", included: true },
        { text: "Real owner on camera (UGC-style)", included: false },
        { text: "Scripts researched + written for you", included: false },
        {
          text: "Built for owner-led service businesses (real estate, home services)",
          included: false,
        },
        { text: "Flat one-time pricing — no enterprise SaaS retainer", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Uses your real face and voice",
      prestyj: true,
      competitor: false,
      note: "Pencil composites existing brand assets — no live owner-on-camera UGC",
    },
    {
      feature: "Scripts researched and written for you",
      prestyj: true,
      competitor: false,
      note: "Pencil remixes copy from your brand inputs; ideation stays with your team",
    },
    {
      feature: "Output per engagement",
      prestyj: "300-1,000 vertical UGC ads",
      competitor: "Variant counts vary by plan; usually static-heavy",
    },
    {
      feature: "Native UGC / selfie aesthetic",
      prestyj: true,
      competitor: false,
      note: "Pencil's strength is polished brand-consistent display creative",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hrs",
      competitor: "Minutes per render, but brand setup + approval flows add days/weeks",
    },
    {
      feature: "Pricing model",
      prestyj: "One-time / month-to-month",
      competitor: "Enterprise SaaS retainer",
    },
    {
      feature: "Fit for owner-operator service businesses",
      prestyj: true,
      competitor: false,
      note: "Pencil is built for enterprise brand + agency creative teams",
    },
    {
      feature: "Vertical-specific hooks (real estate, home services)",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Requires existing brand library / DAM",
      prestyj: false,
      competitor: true,
    },
    {
      feature: "Cost per finished ad at 500 ads",
      prestyj: "~$3-5",
      competitor: "Highly variable; enterprise license cost amortizes across teams",
    },
  ],
  whySwitch: {
    title: "Why Pencil Is the Wrong Shape for Owner-Led UGC Ads",
    description:
      "Pencil is a great product for enterprise brand teams remixing display and short-form variants from an existing asset library. That isn't what owner-operated service businesses need to win on TikTok, Reels, and Shorts.",
    reasons: [
      {
        icon: "Building2",
        title: "Pencil targets enterprise brand teams, not owner-operators",
        description:
          "Its workflow assumes you have a brand library, a DAM, a creative ops team, and an agency-style approval chain. Solo founders, realtors, and contractors don't have any of that. Prestyj replaces that whole stack — you record once, we ship.",
      },
      {
        icon: "Users",
        title: "Remixed brand assets don't feel like UGC",
        description:
          "Feed algorithms reward native, talking-head, selfie-style creative. Pencil produces polished brand-consistent variants — exactly the look TikTok and Reels punish for owner-led service categories.",
      },
      {
        icon: "FileText",
        title: "Ideation still lives with your team",
        description:
          "Pencil generates variants from inputs you provide. The hook, the angle, the script — that work is still yours. Prestyj's script team researches your vertical and delivers 300-1,000 ad-ready scripts.",
      },
      {
        icon: "DollarSign",
        title: "Enterprise SaaS pricing vs flat batch fee",
        description:
          "Pencil is quoted as an enterprise platform. By the time you've paid one annual contract, a Prestyj batch has already produced 1,000 finished ads for a flat fee.",
      },
      {
        icon: "Target",
        title: "Your face is the offer in service businesses",
        description:
          "When you're the broker, the contractor, the coach — prospects need to see and trust YOU. Pencil's strength is brand-asset remixing; Prestyj's strength is putting the real you in 1,000 finished ads.",
      },
    ],
  },
  relatedResources: [
    {
      title: "vs Arcads",
      description: "AI UGC avatars compared",
      href: "/compare/prestyj-vs-arcads",
      linkText: "Read comparison",
    },
    {
      title: "vs Creatify",
      description: "AI ad generator compared",
      href: "/compare/prestyj-vs-creatify",
      linkText: "Read comparison",
    },
    {
      title: "Batch video ad services compared",
      description: "Full landscape of batch video options",
      href: "/blog/batch-video-ad-services-costs-compared-2026",
      linkText: "Read the guide",
    },
    {
      title: "Batch Video Ads",
      description: "See Prestyj's service",
      href: "/batch-video-ads",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Real Face Beats Remixed Brand Assets.",
    description:
      "Pencil rearranges what you already have. Prestyj puts the real you in 300-1,000 native-style ads — in 24 hours.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "One-time payment. No subscription. 24-hour turnaround.",
  },
});

export const pencilMetadata: CompareMetadata = {
  slug: "prestyj-vs-pencil",
  competitorName: "Pencil",
  title: "Prestyj vs Pencil: AI Brand Variants or Real-Face UGC? (2026)",
  description:
    "Pencil remixes enterprise brand assets into ad variants. Prestyj films the real you — 300-1,000 native UGC ads in 24 hours for a flat fee. See which fits owner-led businesses.",
  keywords: [
    "pencil alternative",
    "pencil vs prestyj",
    "pencil pro alternative",
    "brandtech pencil alternative",
    "ai ad generator alternative",
    "batch video ads",
  ],
};
