export type IconName =
  | "Clock"
  | "PhoneMissed"
  | "DollarSign"
  | "TrendingDown"
  | "Zap"
  | "Bot"
  | "Calendar"
  | "MessageSquare"
  | "BarChart3"
  | "Shield"
  | "RefreshCw"
  | "Users"
  | "Target"
  | "Mail"
  | "Phone"
  | "Sparkles"
  | "TrendingUp"
  | "AlertCircle"
  | "Database"
  | "UserX"
  | "History"
  | "Heart"
  | "CheckCircle";

export interface SolutionHero {
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  stats: Array<{
    value: string;
    label: string;
    color: "primary" | "success" | "warning" | "destructive";
  }>;
}

export interface SolutionPainPoint {
  icon: IconName;
  title: string;
  description: string;
  color: "primary" | "success" | "warning" | "destructive";
}

export interface SolutionPainPoints {
  headline: string;
  subheadline: string;
  points: SolutionPainPoint[];
}

export interface SolutionBenefit {
  icon: IconName;
  title: string;
  description: string;
}

export interface SolutionBenefits {
  headline: string;
  subheadline: string;
  benefits: SolutionBenefit[];
}

export interface SolutionCTA {
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonHref: string;
  footnote?: string;
}

export interface SolutionTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionObjection {
  objection: string;
  response: string;
}

export interface SolutionObjections {
  headline: string;
  subheadline: string;
  objections: SolutionObjection[];
}

export interface SolutionCalculator {
  headline: string;
  subheadline: string;
  inputs: {
    leads: { label: string; placeholder: string; defaultValue: number };
    commission: { label: string; placeholder: string; defaultValue: number };
  };
  reactivationRate: number;
  conversionRate: number;
  resultLabel: string;
}

export interface SolutionPageContent {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords?: string[];
  };
  hero: SolutionHero;
  painPoints: SolutionPainPoints;
  benefits: SolutionBenefits;
  testimonials?: SolutionTestimonial[];
  faqs?: SolutionFAQ[];
  objections?: SolutionObjections;
  calculator?: SolutionCalculator;
  cta: SolutionCTA;
}
