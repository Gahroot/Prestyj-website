import {
  Video,
  Zap,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Megaphone,
  Workflow,
  Layers,
  Grid2x2,
  GitCompare,
  Users,
  Building2,
  Building,
  PhoneCall,
  Landmark,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

export type DropdownLink = {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export const navLinks = [
  { href: "/batch-video-ads", label: "Batch Video Ads", highlight: true },
  { href: "/results", label: "Results" },
  { href: "/pricing", label: "Pricing" },
];

export const ctaLinks = [
  { href: "/lead-magnet", label: "Free Playbook", variant: "secondary" as const },
  { href: "/book-demo", label: "Book Demo", variant: "primary" as const },
];

export const solutionLinks: DropdownLink[] = [
  {
    href: "/batch-video-ads",
    label: "Batch Video Ads",
    description: "300–1,000 scripted vertical video ads in 24 hours.",
    icon: Video,
  },
  {
    href: "/solutions/speed-to-lead",
    label: "Speed to Lead",
    description: "Respond to ad leads in under 60 seconds.",
    icon: Zap,
  },
  {
    href: "/solutions/lead-reactivation",
    label: "Dead Lead Reactivation",
    description: "Re-engage cold leads at scale.",
    icon: RefreshCw,
  },
  {
    href: "/solutions/ai-lead-generation",
    label: "AI Lead Generation",
    description: "Find and qualify buyers and sellers 24/7.",
    icon: Sparkles,
  },
  {
    href: "/solutions/sales-automation",
    label: "Sales Automation",
    description: "Automate your entire sales pipeline.",
    icon: TrendingUp,
  },
  {
    href: "/solutions/marketing-automation",
    label: "Marketing Automation",
    description: "Nurture leads on autopilot.",
    icon: Megaphone,
  },
  {
    href: "/solutions/business-automation",
    label: "Business Automation",
    description: "Automate back-office operations.",
    icon: Workflow,
  },
  {
    href: "/platform",
    label: "Platform & Technology",
    description: "How Prestyj works under the hood.",
    icon: Layers,
  },
];

export const solutionCategories = [
  { href: "/solutions/ai-lead-generation", label: "AI Lead Generation" },
  { href: "/best-for/ai-lead-response", label: "AI Lead Response" },
  { href: "/best-for/ai-sales-agent", label: "AI Sales Agent" },
  { href: "/best-for/ai-voice-receptionist", label: "AI Receptionist" },
  { href: "/solutions/lead-reactivation", label: "Lead Reactivation" },
  { href: "/solutions/sales-automation", label: "Sales Automation" },
  { href: "/solutions/marketing-automation", label: "Marketing Automation" },
  { href: "/best-for/conversion-rate-optimization", label: "Conversion Optimization" },
  { href: "/solutions/business-automation", label: "Business Automation" },
  { href: "/best-for/ai-customer-engagement", label: "AI Customer Engagement" },
];

export const alternativeLinks: DropdownLink[] = [
  { href: "/alternatives", label: "All Alternatives", description: "Compare Prestyj to every option.", icon: Grid2x2 },
  { href: "/alternatives/ylopo", label: "Prestyj vs Ylopo", description: "AI lead nurture compared.", icon: GitCompare },
  { href: "/alternatives/human-isa", label: "Prestyj vs Human ISA", description: "AI vs hiring an ISA.", icon: GitCompare },
  { href: "/alternatives/internal-isa", label: "Prestyj vs Internal ISA Team", description: "AI vs an in-house team.", icon: GitCompare },
  { href: "/alternatives/drift", label: "Prestyj vs Drift", description: "Real estate vs generic chat.", icon: GitCompare },
  { href: "/alternatives/structurely", label: "Prestyj vs Structurely", description: "Lead qualification compared.", icon: GitCompare },
  { href: "/alternatives/cinc", label: "Prestyj vs CINC", description: "Lead platforms compared.", icon: GitCompare },
  { href: "/alternatives/conversica", label: "Prestyj vs Conversica", description: "Enterprise AI compared.", icon: GitCompare },
  { href: "/alternatives/retell", label: "Prestyj vs Retell AI", description: "Voice AI for real estate.", icon: GitCompare },
  { href: "/alternatives/vapi", label: "Prestyj vs Vapi", description: "Voice API compared.", icon: GitCompare },
  { href: "/alternatives/real-geeks", label: "Prestyj vs Real Geeks", description: "IDX vs AI conversion.", icon: GitCompare },
  { href: "/alternatives/follow-up-boss", label: "Prestyj + Follow Up Boss", description: "Prestyj layered on FUB.", icon: GitCompare },
];

export const bestForLinks: DropdownLink[] = [
  { href: "/best-for", label: "All Use Cases", description: "Every team type we serve.", icon: Grid2x2 },
  { href: "/best-for/real-estate-teams", label: "Real Estate Teams", description: "10–50 agent teams.", icon: Users },
  { href: "/best-for/real-estate-franchises", label: "Real Estate Franchises", description: "Multi-office franchises.", icon: Building2 },
  { href: "/best-for/regional-brokerage-networks", label: "Regional Brokerages", description: "Brokerage networks.", icon: Building },
  { href: "/best-for/isa-replacement", label: "ISA Replacement", description: "Replace or augment your ISA.", icon: PhoneCall },
  { href: "/best-for/follow-up-boss-users", label: "Follow Up Boss Users", description: "Supercharge your FUB stack.", icon: RefreshCw },
  { href: "/best-for/commercial-real-estate", label: "Commercial Real Estate", description: "CRE team workflows.", icon: Landmark },
  { href: "/best-for/property-managers", label: "Property Managers", description: "Property management ops.", icon: KeyRound },
];
