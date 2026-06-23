import {
  Bot,
  Clapperboard,
  Headphones,
  Megaphone,
  Mic2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type DropdownLink = {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export const navLinks = [
  { href: "/#ai-concierge", label: "Live AI" },
  { href: "#solutions", label: "Solutions", dropdown: true as const },
  { href: "/pricing", label: "Pricing" },
  { href: "/batch-video-ads", label: "Video Ads" },
  { href: "/contact", label: "Contact" },
];

export type CtaLink = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export const primaryCta: CtaLink = {
  href: "/#ai-concierge",
  label: "Talk to the AI",
  variant: "primary",
};

export const secondaryCta: CtaLink = {
  href: "/book-demo",
  label: "Book a call",
  variant: "secondary",
};

export const ctaLinks: readonly CtaLink[] = [primaryCta, secondaryCta];

export const solutionLinks: DropdownLink[] = [
  {
    href: "/ai-voice-agents",
    label: "AI voice agents",
    description: "Phone and browser agents for qualification, routing, and booking.",
    icon: Mic2,
  },
  {
    href: "/ai-receptionist",
    label: "AI receptionist",
    description: "Answer calls, recover missed leads, schedule, and escalate cleanly.",
    icon: Headphones,
  },
  {
    href: "/ai-sales-agents",
    label: "AI sales agents",
    description: "Speed-to-lead, follow-up, qualification, reminders, and handoff.",
    icon: Bot,
  },
  {
    href: "/ai-marketing-agents",
    label: "AI marketing agents",
    description: "Campaign workflows, lead magnets, creative testing, and reporting.",
    icon: Megaphone,
  },
  {
    href: "/batch-video-ads",
    label: "Batch video ads",
    description: "One recording turned into hundreds of ad variants for testing.",
    icon: Clapperboard,
  },
  {
    href: "/done-for-you-ai-agents",
    label: "Done-for-you AI",
    description: "Custom agents, workflows, and automations for marketing and sales.",
    icon: Workflow,
  },
];
