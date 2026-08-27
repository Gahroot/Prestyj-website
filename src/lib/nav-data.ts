import {
  Building2,
  FileSearch2,
  Landmark,
  Megaphone,
  MessagesSquare,
  Scale,
  type LucideIcon,
} from "lucide-react";

export type DropdownLink = {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export const navLinks = [
  { href: "#solutions", label: "Capabilities", dropdown: true as const },
  { href: "/for/investment-funds", label: "Funds" },
  { href: "/for/commercial-brokerages", label: "Brokerages" },
  { href: "/results", label: "Work" },
  { href: "/research", label: "Research" },
];

export type CtaLink = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export const primaryCta: CtaLink = {
  href: "/book-demo",
  label: "Get access",
  variant: "primary",
};

export const secondaryCta: CtaLink = {
  href: "/demo",
  label: "Live agent",
  variant: "secondary",
};

export const ctaLinks: readonly CtaLink[] = [primaryCta, secondaryCta];

export const solutionLinks: DropdownLink[] = [
  {
    href: "/capabilities/deal-diligence",
    label: "Deal diligence",
    description: "Diligence, abstraction, screening, and IC materials with evidence.",
    icon: FileSearch2,
  },
  {
    href: "/capabilities/fund-operations",
    label: "Fund operations",
    description: "Quarter-end, NAV, fees, allocations, and waterfalls.",
    icon: Scale,
  },
  {
    href: "/capabilities/investor-reporting",
    label: "Investor reporting",
    description: "LP answers, statements, letters, and document visibility.",
    icon: MessagesSquare,
  },
  {
    href: "/capabilities/portfolio-intelligence",
    label: "Portfolio intelligence",
    description: "Point-in-time answers across property, lease, debt, and model data.",
    icon: Building2,
  },
  {
    href: "/capabilities/origination",
    label: "Origination",
    description: "Every inquiry answered, qualified, booked, and handed off.",
    icon: Landmark,
  },
  {
    href: "/capabilities/listing-media",
    label: "Listing media",
    description: "Offering, campaign, and ad materials produced under approval.",
    icon: Megaphone,
  },
];
