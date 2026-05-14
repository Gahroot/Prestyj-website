import {
  Bot,
  Megaphone,
  Zap,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type DropdownLink = {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export const navLinks = [
  { href: "/platform", label: "Product" },
  { href: "#solutions", label: "Solutions", dropdown: true as const },
  { href: "/results", label: "Customers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export type CtaLink = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export const primaryCta: CtaLink = {
  href: "/book-demo",
  label: "Book a Demo",
  variant: "primary",
};

export const ctaLinks: readonly CtaLink[] = [primaryCta];

export const solutionLinks: DropdownLink[] = [
  {
    href: "/solutions/ai-sales-agents",
    label: "AI Sales Agents",
    description: "Autonomous agents that qualify, follow up, and close.",
    icon: Bot,
  },
  {
    href: "/solutions/ai-marketing-agents",
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
    href: "/solutions/custom-ai-builds",
    label: "Custom AI Builds",
    description: "Bespoke AI agents tailored to your sales and marketing stack.",
    icon: Wrench,
  },
];
