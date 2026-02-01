import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const commercialRealEstate: BestForPageContent = createBestForPage({
  slug: "commercial-real-estate",
  niche: {
    name: "Commercial Real Estate",
    shortName: "CRE",
    description: "Commercial real estate brokerages with longer sales cycles and multi-stakeholder deals",
  },
  meta: {
    title: "Best AI Lead Response for Commercial Real Estate | Prestyj",
    description:
      "Discover why CRE brokerages choose Prestyj. Handle multi-stakeholder qualification, longer sales cycles, and complex property inquiries with AI built for commercial deals.",
    keywords: [
      "commercial real estate AI",
      "CRE lead response",
      "commercial real estate lead qualification",
      "office leasing AI",
      "industrial real estate lead management",
      "retail real estate AI",
      "CRE broker AI assistant",
    ],
  },
  hero: {
    badge: "Built for Commercial Real Estate",
    headlineAccent: "Commercial Real Estate",
    subheadline:
      "Handle the complexity of CRE deals: multi-stakeholder qualification, longer sales cycles, and property-specific inquiries at enterprise scale.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Building2" as IconName,
      title: "Multi-Stakeholder Qualification",
      description:
        "CRE deals involve decision-makers across finance, operations, and executive teams. AI qualifies each stakeholder appropriately and routes to the right broker.",
    },
    {
      icon: "Clock" as IconName,
      title: "Long-Cycle Lead Nurturing",
      description:
        "Commercial deals take months or years. AI maintains engagement throughout extended sales cycles without dropping leads or losing context.",
    },
    {
      icon: "Target" as IconName,
      title: "Property-Type Specialization",
      description:
        "Office, industrial, retail, and multifamily require different qualification approaches. AI adapts conversations to property type and tenant requirements.",
    },
    {
      icon: "BarChart3" as IconName,
      title: "Portfolio-Level Pipeline Visibility",
      description:
        "See deal flow across property types, markets, and brokers. Understand where leads are in extended sales cycles and forecast more accurately.",
    },
  ],
  painPoints: [
    {
      problem: "CRE inquiries require nuanced qualification that generic AI can't handle",
      solution:
        "AI trained on commercial real estate conversations understands tenant requirements, lease structures, and business use cases. Qualification goes beyond 'are you pre-approved?'",
    },
    {
      problem: "Leads drop off during 6-18 month sales cycles",
      solution:
        "Automated long-cycle nurturing keeps prospects engaged. AI maintains context across months of conversation and re-engages when timing improves.",
    },
    {
      problem: "Different property types need different qualification approaches",
      solution:
        "Office prospects get different questions than industrial users or retail tenants. AI adapts qualification flows to property type and deal structure.",
    },
    {
      problem: "Multiple decision-makers involved in every deal",
      solution:
        "AI identifies and qualifies multiple stakeholders per opportunity—CFO concerns differ from facilities management priorities. Route appropriately to brokers.",
    },
    {
      problem: "After-hours inquiries from time-zone-shifted corporate prospects",
      solution:
        "24/7 response ensures international corporate tenants and investors get immediate engagement regardless of when they reach out.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Residential-Focused AI Platforms"],
    rows: [
      {
        feature: "CRE Qualification Logic",
        prestyj: "Built for commercial deals",
        others: "Residential scripts don't fit CRE",
      },
      {
        feature: "Multi-Stakeholder Handling",
        prestyj: "Identifies and qualifies all decision-makers",
        others: "Single-buyer assumption",
      },
      {
        feature: "Long Sales Cycle Support",
        prestyj: "18+ month engagement tracking",
        others: "30-90 day follow-up cycles",
      },
      {
        feature: "Property Type Adaptation",
        prestyj: "Office, industrial, retail, multifamily flows",
        others: "Generic property qualification",
      },
      {
        feature: "Lease vs Sale Understanding",
        prestyj: "Handles both with appropriate qualification",
        others: "Purchase-focused qualification",
      },
      {
        feature: "Corporate Tenant Requirements",
        prestyj: "Square footage, buildout, timing, approval process",
        others: "Homebuyer qualification questions",
      },
      {
        feature: "Investment Inquiry Handling",
        prestyj: "Cap rate, NOI, 1031 exchange qualification",
        others: "Not designed for investment properties",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI handle complex CRE qualification?",
      answer:
        "CRE qualification goes beyond timeline and budget. AI asks about square footage needs, buildout requirements, lease term preferences, approval processes, and current lease expirations. Different flows for tenants vs. investors.",
    },
    {
      question: "Can AI maintain engagement over 12+ month sales cycles?",
      answer:
        "Yes. AI tracks where each prospect is in their decision process, maintains conversation context across months, and re-engages appropriately when timing changes or lease expirations approach.",
    },
    {
      question: "How do you handle multiple stakeholders in one deal?",
      answer:
        "AI identifies different roles (CFO, facilities, operations, legal) and qualifies each appropriately. All stakeholder information consolidates into one opportunity record for broker follow-up.",
    },
    {
      question: "What property types does the AI understand?",
      answer:
        "Office (Class A/B/C), industrial (warehouse, flex, manufacturing), retail (inline, pad, anchor), and multifamily investment. Each has tailored qualification and nurturing approaches.",
    },
    {
      question: "How does this work for investment property inquiries?",
      answer:
        "Investment leads get investor-specific qualification: acquisition criteria, cap rate requirements, 1031 exchange timelines, fund mandates, and hold period preferences.",
    },
  ],
  cta: {
    headline: "Handle CRE Complexity at Scale",
    subheadline:
      "See how commercial real estate brokerages use Prestyj to qualify complex deals, nurture long sales cycles, and engage multiple stakeholders—all with AI built for CRE.",
    buttonText: "Book a CRE Demo",
    footnote: "See property-type specific qualification in action.",
  },
});
