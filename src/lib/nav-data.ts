import { Bot, Megaphone, Zap, Phone, Sparkles, FlaskConical, type LucideIcon } from "lucide-react";

export type DropdownLink = {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export const navLinks = [
  { href: "/platform", label: "Product" },
  { href: "#solutions", label: "Solutions", dropdown: true as const },
  { href: "/batch-video-ads", label: "Batch Video Ads" },
  { href: "/results", label: "Founding Customers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export type CtaLink = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export const primaryCta: CtaLink = {
  href: "/batch-video-ads",
  label: "Get 100 ads — $497",
  variant: "primary",
};

export const secondaryCta: CtaLink = {
  href: "/book-demo",
  label: "Book a Demo",
  variant: "secondary",
};

export const ctaLinks: readonly CtaLink[] = [primaryCta, secondaryCta];

// Solution dropdown — references only canonical surviving solution slugs that
// align with the "AI agents for marketing & sales" core positioning.
export const solutionLinks: DropdownLink[] = [
  {
    href: "/solutions/sales-automation",
    label: "AI Sales Agents",
    description: "Autonomous agents that qualify, follow up, and close.",
    icon: Bot,
  },
  {
    href: "/solutions/marketing-automation",
    label: "AI Marketing Agents",
    description: "Agents that run campaigns, content, and outreach 24/7.",
    icon: Megaphone,
  },
  {
    href: "/solutions/ai-lead-response",
    label: "AI Lead Response & Booking",
    description: "Sub-60-second response and calendar booking on autopilot.",
    icon: Zap,
  },
  {
    href: "/solutions/ai-virtual-receptionist",
    label: "AI Voice Receptionist",
    description: "24/7 AI voice agent that answers, qualifies, and books.",
    icon: Phone,
  },
  {
    href: "/ad-creative-testing-service",
    label: "Creative Testing Service",
    description: "High-volume video ad variations for Meta, TikTok, and YouTube Shorts.",
    icon: FlaskConical,
  },
  {
    href: "/ai-first-audit",
    label: "The AI-First Audit",
    description: "Free 6-minute audit — find your top 3 tasks to automate first.",
    icon: Sparkles,
  },
];
