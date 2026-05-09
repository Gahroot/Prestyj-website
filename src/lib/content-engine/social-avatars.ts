import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  HardHat,
  Camera,
  ShoppingBag,
  TrendingUp,
  Scale,
  Smile,
  PiggyBank,
  UtensilsCrossed,
  Dumbbell,
  User,
  Sparkles,
  Home,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface SocialAvatar {
  /** Best-for slug, e.g. "social-content-for-coaches" */
  slug: string;
  /** Short display label for the card title */
  label: string;
  /** Single-line description of who this avatar is for */
  description: string;
  /** Lucide icon to render */
  icon: LucideIcon;
}

/**
 * Canonical list of every "Social Content for ___" avatar page in /best-for/.
 * Used to render the avatar grid on the canonical /done-for-you-social-media
 * page and its variants, and to cross-link from each avatar page back up
 * to the canonical service page.
 */
export const socialAvatars: SocialAvatar[] = [
  {
    slug: "social-content-for-agencies",
    label: "Agencies",
    description: "Marketing, creative, and growth agencies scaling client content.",
    icon: Briefcase,
  },
  {
    slug: "social-content-for-coaches",
    label: "Coaches",
    description: "Business, life, and executive coaches filling high-ticket pipelines.",
    icon: GraduationCap,
  },
  {
    slug: "social-content-for-consultants",
    label: "Consultants",
    description: "Independent consultants building authority across LinkedIn and beyond.",
    icon: Lightbulb,
  },
  {
    slug: "social-content-for-contractors",
    label: "Contractors",
    description: "Home service contractors winning local jobs through social.",
    icon: HardHat,
  },
  {
    slug: "social-content-for-creators",
    label: "Creators",
    description: "Content creators scaling output across every major platform.",
    icon: Camera,
  },
  {
    slug: "social-content-for-dentists",
    label: "Dentists",
    description: "Dental practices booking new patients with consistent content.",
    icon: Smile,
  },
  {
    slug: "social-content-for-ecommerce-brands",
    label: "Ecommerce Brands",
    description: "DTC and ecommerce brands turning content into revenue.",
    icon: ShoppingBag,
  },
  {
    slug: "social-content-for-financial-advisors",
    label: "Financial Advisors",
    description: "Advisors growing AUM through compliant, on-brand content.",
    icon: TrendingUp,
  },
  {
    slug: "social-content-for-gyms-fitness",
    label: "Gyms & Fitness",
    description: "Gyms, studios, and fitness brands filling membership rosters.",
    icon: Dumbbell,
  },
  {
    slug: "social-content-for-insurance-agents",
    label: "Insurance Agents",
    description: "Insurance agencies generating quotes with always-on social.",
    icon: Shield,
  },
  {
    slug: "social-content-for-law-firms",
    label: "Law Firms",
    description: "Law firms building authority and signing high-value cases.",
    icon: Scale,
  },
  {
    slug: "social-content-for-med-spas",
    label: "Med Spas",
    description: "Med spas booking treatments with high-converting content.",
    icon: Sparkles,
  },
  {
    slug: "social-content-for-mortgage-brokers",
    label: "Mortgage Brokers",
    description: "Mortgage brokers building referral pipelines through social.",
    icon: Home,
  },
  {
    slug: "social-content-for-personal-brands",
    label: "Personal Brands",
    description: "Solopreneur thought leaders scaling reach without burning out.",
    icon: User,
  },
  {
    slug: "social-content-for-real-estate-teams",
    label: "Real Estate Teams",
    description: "Teams and brokerages filling pipelines with listing-ready content.",
    icon: Home,
  },
  {
    slug: "social-content-for-restaurants",
    label: "Restaurants",
    description: "Restaurants driving foot traffic and reservations from social.",
    icon: UtensilsCrossed,
  },
  {
    slug: "social-content-for-saas-founders",
    label: "SaaS Founders",
    description: "SaaS founders scaling distribution without hiring a team.",
    icon: PiggyBank,
  },
];

/** Set of avatar slugs for fast lookup. */
export const socialAvatarSlugSet = new Set(socialAvatars.map((a) => a.slug));

/** True when a best-for slug belongs to the social-content avatar series. */
export function isSocialAvatarSlug(slug: string): boolean {
  return socialAvatarSlugSet.has(slug);
}
