import type { LucideIcon } from "lucide-react";

// ─── Section-level data types ──────────────────────────────────────────

export interface HeroBadge {
  icon?: LucideIcon;
  text: string;
}

export interface HeroCTA {
  label: string;
  href: string;
  variant?: "default" | "outline";
  eventName: string;
  eventLabel: string;
}

export interface HeroConfig {
  badge: HeroBadge;
  headline: string;
  headlineAccent: string;
  subhead: string;
  subheadAccent: string;
  ctas: HeroCTA[];
  videoSrc?: string;
  videoPoster?: string;
  videoAriaLabel?: string;
  platforms: string[];
}

export interface ProblemCard {
  title: string;
  detail: string;
}

export interface ProblemConfig {
  headline: string;
  subhead: string;
  pains: ProblemCard[];
}

export interface SolutionPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionConfig {
  headline: string;
  subhead: string;
  pillars: SolutionPillar[];
}

export interface HowItWorksStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

export interface HowItWorksConfig {
  headline: string;
  subhead: string;
  steps: HowItWorksStep[];
}

export interface ProofStat {
  value: string;
  label: string;
}

export interface ProofBarConfig {
  stats: ProofStat[];
}

export interface ProofScreenshot {
  src: string;
  fallback: string;
  alt: string;
  caption: string;
}

export interface ProofScreenshotsConfig {
  headline: string;
  subhead: string;
  shots: ProofScreenshot[];
}

export interface LiveAccount {
  platform: string;
  url: string;
  icon: LucideIcon;
  handle: string;
  description: string;
}

export interface LiveAccountsConfig {
  headline: string;
  headlineAccent: string;
  subhead: string;
  accounts: LiveAccount[];
}

export interface InstagramEmbed {
  embedUrl: string;
  label: string;
}

export interface TikTokEmbed {
  videoId: string;
  url: string;
  caption: string;
}

export interface LiveFeedConfig {
  badgeIcon?: LucideIcon;
  badgeText: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  instagramPosts: InstagramEmbed[];
  instagramHandle: string;
  tiktokPosts: TikTokEmbed[];
  tiktokHandle: string;
}

export interface ComparisonCell {
  feature: string;
  prestyj: string | true;
  agency: string | false;
  freelancer: string | false;
  inHouse: string | false;
}

export interface ComparisonConfig {
  headline: string;
  subhead: string;
  rows: ComparisonCell[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqConfig {
  headline: string;
  subhead: string;
  faqs: FaqItem[];
}

export interface CTAConfig {
  headline: string;
  subhead: string;
  buttonLabel: string;
  buttonHref: string;
  eventName: string;
  eventLabel: string;
  footnote: string;
  sparkColor: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  setupFee: number;
  monthlyPrice: number;
  accounts: string;
  postsTarget: string;
  guarantee: string;
  highlights: string[];
  cta: string;
  isPro?: boolean;
}

export interface PricingAddon {
  title: string;
  description: string;
}

export interface PricingGuarantee {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingConfig {
  headline: string;
  subhead: string;
  tiers: PricingTier[];
  customCta: {
    headline: string;
    description: string;
    buttonLabel: string;
    href: string;
    eventName: string;
    eventLabel: string;
  };
  addons: PricingAddon[];
  guarantees: PricingGuarantee[];
}

export interface VideoWalkthroughConfig {
  badgeIcon?: LucideIcon;
  badgeText: string;
  headline: string;
  subhead: string;
  embedUrl: string;
  iframeTitle: string;
}

// ─── Top-level page config ─────────────────────────────────────────────

export interface ContentEnginePageConfig {
  hero: HeroConfig;
  problem: ProblemConfig;
  solution: SolutionConfig;
  howItWorks: HowItWorksConfig;
  proofBar: ProofBarConfig;
  proofScreenshots: ProofScreenshotsConfig;
  liveAccounts: LiveAccountsConfig;
  liveFeed: LiveFeedConfig;
  comparison: ComparisonConfig;
  faq: FaqConfig;
  cta: CTAConfig;
  pricing: PricingConfig;
  videoWalkthrough: VideoWalkthroughConfig;
}
