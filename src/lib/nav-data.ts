import { Bot, Megaphone, Zap, Phone, Sparkles, FlaskConical, type LucideIcon } from "lucide-react";

export type DropdownLink = {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export const navLinks = [
  { href: "/batch-video-ads", label: "How It Works" },
  { href: "#solutions", label: "Resources", dropdown: true as const },
  { href: "/results", label: "Proof" },
  { href: "/statistics", label: "Stats" },
  { href: "/contact", label: "Contact" },
];

export type CtaLink = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export const primaryCta: CtaLink = {
  href: "/batch-video-ads#pricing",
  label: "Get 300 ads — $1,497",
  variant: "primary",
};

export const secondaryCta: CtaLink = {
  href: "/batch-video-ads",
  label: "See How It Works",
  variant: "secondary",
};

export const ctaLinks: readonly CtaLink[] = [primaryCta, secondaryCta];

// Resource dropdown — keep the homepage navigation focused on the batch video ad offer.
export const solutionLinks: DropdownLink[] = [
  {
    href: "/batch-video-ads",
    label: "Batch Video Ads",
    description: "The full offer: one recording turned into 100–1,000 ads.",
    icon: Megaphone,
  },
  {
    href: "/300-video-ads",
    label: "300 Video Ads",
    description: "The recommended starting pack for 3 customer problems.",
    icon: Zap,
  },
  {
    href: "/500-video-ads",
    label: "500 Video Ads",
    description: "More creative coverage across hooks, bodies, and CTAs.",
    icon: Sparkles,
  },
  {
    href: "/1000-video-ads",
    label: "1,000 Video Ads",
    description: "Maximum batch volume for aggressive testing and launches.",
    icon: Phone,
  },
  {
    href: "/ad-creative-testing-service",
    label: "Creative Testing Service",
    description: "High-volume video ad variations for Meta, TikTok, and YouTube Shorts.",
    icon: FlaskConical,
  },
  {
    href: "/batch-video-ad-roi-calculator",
    label: "ROI Calculator",
    description: "Model how many winning ads a batch needs to find to pay for itself.",
    icon: Bot,
  },
];
