/**
 * Industry slicing for the statistics dataset.
 *
 * Each industry slug maps to:
 *  - A human title used for hub page hero + dataset metadata
 *  - A list of always-included stat ids (industry-specific data)
 *  - A keyword regex used to harvest cross-cutting stats (speed-to-lead,
 *    AI adoption, video advertising) that mention the industry by name
 *  - A canonical CTA target on prestyj.com
 *
 * Powers /statistics/<industry>, /data/<industry>.csv, /data/<industry>.json,
 * and the per-industry redistribution bundles.
 */

import { getAllFlatStatistics, type FlatStatistic } from "./index";

export interface IndustrySlice {
  slug: string;
  title: string;
  description: string;
  keywordPattern: RegExp;
  alwaysInclude: string[];
  primaryCta: { label: string; href: string };
}

export const industrySlices: IndustrySlice[] = [
  {
    slug: "hvac",
    title: "HVAC Marketing & Lead Response Statistics",
    description:
      "Speed-to-lead benchmarks, AI receptionist adoption, video-ad performance, and cost-per-lead data specifically relevant to HVAC contractors and service businesses.",
    keywordPattern:
      /\b(hvac|heating|cooling|service business|contractor|home service|cooling|air conditioning|trades?)\b/i,
    alwaysInclude: [
      "bva-winner-rate-home-services",
      "bva-cost-per-ad-variation",
      "fatigue-cpm-creep-14-days",
      "reactivation-home-services-recovered-revenue",
      "lead-response-ai-time-to-contact",
    ],
    primaryCta: { label: "Free batch video ads for HVAC", href: "/free-ads/hvac" },
  },
  {
    slug: "plumbing",
    title: "Plumbing Marketing & Lead Response Statistics",
    description:
      "Lead response, missed-call recovery, AI receptionist ROI, and ad-creative benchmarks for plumbing contractors.",
    keywordPattern: /\b(plumb|drain|water heater|leak|sewer)\b/i,
    alwaysInclude: [
      "bva-winner-rate-home-services",
      "bva-cost-per-ad-variation",
      "reactivation-home-services-recovered-revenue",
      "lead-response-ai-cost-per-lead-engaged",
    ],
    primaryCta: { label: "AI agents for plumbers", href: "/free-ads/plumbers" },
  },
  {
    slug: "roofing",
    title: "Roofing Marketing & Lead Response Statistics",
    description:
      "Storm-response speed-to-lead, ad creative testing, and AI adoption benchmarks specifically for roofing contractors.",
    keywordPattern: /\broof/i,
    alwaysInclude: [
      "bva-winner-rate-home-services",
      "bva-creative-volume-top-accounts",
      "fatigue-cpm-creep-14-days",
      "reactivation-home-services-recovered-revenue",
      "lead-response-ai-time-to-contact",
    ],
    primaryCta: { label: "AI agents for roofers", href: "/free-ads/roofers" },
  },
  {
    slug: "real-estate",
    title: "Real Estate Marketing & Lead Response Statistics",
    description:
      "ISA response benchmarks, lead reactivation conversion, AI sales-agent adoption, and cost-per-lead data for brokerages and individual agents.",
    keywordPattern: /\b(real estate|broker|agent|listing|mls|home buyer|seller|isa|brokerage)\b/i,
    alwaysInclude: [
      "reactivation-dormant-crm-volume",
      "reactivation-cost-savings",
      "reactivation-multichannel-rate",
      "lead-response-ai-time-to-contact",
      "lead-response-ai-roi-six-months",
      "fatigue-cpm-creep-14-days",
    ],
    primaryCta: { label: "Real estate ROI calculator", href: "/real-estate-roi-calculator" },
  },
  {
    slug: "solar",
    title: "Solar Marketing & Lead Response Statistics",
    description:
      "Speed-to-lead, AI follow-up automation, and ad creative benchmarks for solar installers and EPC contractors.",
    keywordPattern: /\b(solar|photovoltaic|panels?)\b/i,
    alwaysInclude: [
      "bva-winner-rate-home-services",
      "fatigue-cpm-creep-14-days",
      "lead-response-ai-time-to-contact",
      "lead-response-ai-roi-six-months",
    ],
    primaryCta: { label: "AI agents for solar", href: "/free-ads/solar-companies" },
  },
  {
    slug: "dental",
    title: "Dental Practice Marketing & Lead Response Statistics",
    description:
      "Patient response benchmarks, missed-call recovery, AI receptionist ROI, and PPC CPL data for dental practices.",
    keywordPattern: /\bdent(al|ist)/i,
    alwaysInclude: [
      "lead-response-ai-time-to-contact",
      "lead-response-ai-cost-per-lead-engaged",
      "lead-response-ai-roi-six-months",
      "fatigue-cpm-creep-14-days",
    ],
    primaryCta: { label: "AI agents for dentists", href: "/free-ads/dentists" },
  },
  {
    slug: "mortgage",
    title: "Mortgage Broker Marketing & Lead Response Statistics",
    description:
      "Lead response curves, AI cold outreach, and ad creative ROI benchmarks for mortgage brokers and lenders.",
    keywordPattern: /\bmortgag/i,
    alwaysInclude: [
      "reactivation-dormant-crm-volume",
      "reactivation-cost-savings",
      "lead-response-ai-time-to-contact",
      "lead-response-ai-roi-six-months",
      "fatigue-cpm-creep-14-days",
    ],
    primaryCta: { label: "AI agents for mortgage", href: "/free-ads/mortgage-brokers" },
  },
  {
    slug: "electricians",
    title: "Electrician Marketing & Lead Response Statistics",
    description:
      "Speed-to-lead, AI receptionist economics, and Google Ads CPL benchmarks for electrical contractors.",
    keywordPattern: /\belectric(ian|al)?\b/i,
    alwaysInclude: [
      "bva-winner-rate-home-services",
      "reactivation-home-services-recovered-revenue",
      "lead-response-ai-time-to-contact",
      "lead-response-ai-cost-per-lead-engaged",
    ],
    primaryCta: { label: "AI agents for electricians", href: "/free-ads/electricians" },
  },
  {
    slug: "pest-control",
    title: "Pest Control Marketing & Lead Response Statistics",
    description: "Lead response and AI adoption benchmarks for pest control operators.",
    keywordPattern: /\bpest\b/i,
    alwaysInclude: [
      "bva-winner-rate-home-services",
      "bva-cost-per-tested-angle",
      "fatigue-refresh-extends-life",
      "lead-response-ai-time-to-contact",
    ],
    primaryCta: { label: "Batch video ads for pest control", href: "/batch-video-ads" },
  },
  {
    slug: "med-spas",
    title: "Med Spa Marketing & Lead Response Statistics",
    description:
      "Patient inquiry response, AI booking automation, and beauty/wellness ad benchmarks for med spas.",
    keywordPattern: /\b(med spa|aesthetic|botox|laser)\b/i,
    alwaysInclude: [
      "fatigue-cpm-creep-14-days",
      "fatigue-refresh-extends-life",
      "lead-response-ai-time-to-contact",
      "lead-response-hybrid-conversion-lift",
    ],
    primaryCta: { label: "AI agents for med spas", href: "/free-ads/med-spas" },
  },
  {
    slug: "law-firms",
    title: "Law Firm Marketing & Lead Response Statistics",
    description:
      "Legal-industry CPL benchmarks (the highest in Google Ads at $131.63), lead response data, and AI intake adoption for law firms.",
    keywordPattern: /\b(law|legal|attorney|lawyer)\b/i,
    alwaysInclude: ["ind-cpl-legal"],
    primaryCta: { label: "AI agents for law firms", href: "/free-ads/law-firms" },
  },
  {
    slug: "auto-dealers",
    title: "Auto Dealer Marketing & Lead Response Statistics",
    description:
      "Automotive industry has the lowest CPL and highest conversion rate on Google Ads — full benchmark data plus speed-to-lead and AI receptionist statistics.",
    keywordPattern: /\b(auto|dealer|automotive|vehicle)\b/i,
    alwaysInclude: ["ind-cpl-auto", "ind-auto-conv"],
    primaryCta: { label: "AI agents for auto dealers", href: "/free-ads/auto-dealers" },
  },
  {
    slug: "agencies",
    title: "Marketing Agency Lead Response & Ad Creative Statistics",
    description:
      "Cost-per-tested-angle benchmarks, batch video-ad ROI, and AI adoption data for marketing agency owners and media buyers.",
    keywordPattern: /\b(agenc(y|ies)|media buyer|cmo|campaign)\b/i,
    alwaysInclude: [
      "bva-cost-per-ad-variation",
      "bva-cost-per-tested-angle",
      "bva-creative-volume-top-accounts",
      "fatigue-refresh-extends-life",
      "social-dfy-real-loaded-cost",
      "social-effective-cost-per-post",
    ],
    primaryCta: { label: "Batch video ads for agencies", href: "/free-ads/agencies" },
  },
];

const CROSS_CUTTING_IDS = [
  "stl-21x",
  "stl-391",
  "stl-78pct",
  "stl-100x",
  "stl-8x-drop",
  "stl-only-01pct",
  "stl-77pct-no-response",
  "stl-82pct-10min",
  "stl-instant-66",
  "stl-50pct-first",
  "lead-response-ai-time-to-contact",
  "lead-response-ai-cost-per-lead-engaged",
];

/**
 * Selects the statistics relevant to a given industry. Combines:
 *  - alwaysInclude id list,
 *  - keyword-pattern matches over description/context/category,
 *  - a default set of cross-cutting speed-to-lead statistics so every
 *    industry page has weight even when zero industry-specific rows match.
 */
export function getStatisticsForIndustry(slice: IndustrySlice): FlatStatistic[] {
  const all = getAllFlatStatistics();
  const byId = new Map(all.map((s) => [s.id, s]));
  const picked = new Map<string, FlatStatistic>();

  for (const id of slice.alwaysInclude) {
    const stat = byId.get(id);
    if (stat) picked.set(id, stat);
  }

  for (const stat of all) {
    const haystack = `${stat.description} ${stat.context ?? ""} ${stat.categoryTitle}`;
    if (slice.keywordPattern.test(haystack)) picked.set(stat.id, stat);
  }

  for (const id of CROSS_CUTTING_IDS) {
    const stat = byId.get(id);
    if (stat) picked.set(id, stat);
  }

  return Array.from(picked.values());
}

export function findIndustrySlice(slug: string): IndustrySlice | undefined {
  return industrySlices.find((s) => s.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industrySlices.map((s) => s.slug);
}
