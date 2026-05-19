/**
 * Curated library of 24 task presets the user can toggle on as a starting
 * point. Each task is tagged with the business types it should surface
 * for by default and a tool category that drives recipe selection.
 *
 * Presets are pure data — the wizard filters by business type, lets the
 * user edit titles, add their own, and remove unwanted rows.
 */

import type { TaskPreset, BusinessType } from "./types";

export const TASK_PRESETS: readonly TaskPreset[] = [
  // ---- Cross-business core ----------------------------------------------
  {
    id: "inbox-triage",
    title: "Triaging the team inbox / shared support email",
    category: "inbox-triage",
    businessTypes: ["agency", "coaching", "saas", "professional-services", "ecommerce", "other"],
  },
  {
    id: "missed-call-followup",
    title: "Answering missed calls and after-hours inquiries",
    category: "voice-agent",
    businessTypes: ["home-services", "real-estate", "professional-services", "coaching"],
  },
  {
    id: "lead-research",
    title: "Researching new leads before a sales call",
    category: "research-workflow",
    businessTypes: ["agency", "saas", "coaching", "professional-services", "real-estate"],
  },
  {
    id: "personalized-outbound",
    title: "Writing personalized cold outbound emails",
    category: "outbound-personalization",
    businessTypes: ["agency", "saas", "coaching", "professional-services"],
  },
  {
    id: "weekly-reporting",
    title: "Pulling together the weekly KPI / performance report",
    category: "reporting",
    businessTypes: ["agency", "saas", "ecommerce", "professional-services", "other"],
  },
  {
    id: "scheduling-coordination",
    title: "Coordinating calendars and booking meetings",
    category: "scheduling",
    businessTypes: ["agency", "coaching", "professional-services", "real-estate", "other"],
  },
  {
    id: "applicant-screening",
    title: "Screening inbound job applicants",
    category: "hiring-screen",
    businessTypes: ["agency", "home-services", "real-estate", "ecommerce", "saas", "other"],
  },
  {
    id: "internal-questions",
    title: "Answering the same internal SOP / 'how do I…' questions",
    category: "knowledge-base",
    businessTypes: ["agency", "coaching", "saas", "professional-services", "ecommerce", "other"],
  },

  // ---- Real estate -------------------------------------------------------
  {
    id: "re-speed-to-lead",
    title: "Calling new internet leads within 60 seconds",
    category: "voice-agent",
    businessTypes: ["real-estate"],
  },
  {
    id: "re-lead-reactivation",
    title: "Reactivating cold / aged-out leads from the CRM",
    category: "outbound-personalization",
    businessTypes: ["real-estate"],
  },
  {
    id: "re-listing-prep",
    title: "Pulling comps and prepping listing presentations",
    category: "research-workflow",
    businessTypes: ["real-estate"],
  },

  // ---- Home services -----------------------------------------------------
  {
    id: "hs-quote-followup",
    title: "Following up on quotes that haven't booked",
    category: "outbound-personalization",
    businessTypes: ["home-services"],
  },
  {
    id: "hs-dispatch-coordination",
    title: "Dispatching techs and routing service tickets",
    category: "ops-automation",
    businessTypes: ["home-services"],
  },
  {
    id: "hs-review-requests",
    title: "Asking happy customers for Google reviews",
    category: "ops-automation",
    businessTypes: ["home-services", "professional-services"],
  },

  // ---- Agency / creative -------------------------------------------------
  {
    id: "ag-content-writing",
    title: "Writing first drafts of blog posts / ad copy / captions",
    category: "content-ops",
    businessTypes: ["agency", "coaching", "saas", "ecommerce"],
  },
  {
    id: "ag-creative-qa",
    title: "Reviewing creative deliverables against brand guidelines",
    category: "qa-review",
    businessTypes: ["agency", "ecommerce"],
  },
  {
    id: "ag-client-recaps",
    title: "Writing weekly client recap emails",
    category: "reporting",
    businessTypes: ["agency", "professional-services"],
  },

  // ---- Coaching / consulting --------------------------------------------
  {
    id: "co-discovery-prep",
    title: "Prepping for discovery / strategy calls",
    category: "research-workflow",
    businessTypes: ["coaching"],
  },
  {
    id: "co-followup-notes",
    title: "Writing post-call follow-up notes and next-steps emails",
    category: "content-ops",
    businessTypes: ["coaching", "professional-services"],
  },

  // ---- E-commerce --------------------------------------------------------
  {
    id: "ec-support-tickets",
    title: "Answering 'where's my order?' / refund support tickets",
    category: "support-deflection",
    businessTypes: ["ecommerce"],
  },
  {
    id: "ec-product-descriptions",
    title: "Writing product descriptions and listing copy",
    category: "content-ops",
    businessTypes: ["ecommerce"],
  },

  // ---- SaaS --------------------------------------------------------------
  {
    id: "sa-onboarding-touchpoints",
    title: "Personalized onboarding touchpoints for new signups",
    category: "outbound-personalization",
    businessTypes: ["saas"],
  },
  {
    id: "sa-lead-enrichment",
    title: "Enriching new signups with firmographic data",
    category: "lead-enrichment",
    businessTypes: ["saas"],
  },

  // ---- Professional services --------------------------------------------
  {
    id: "ps-invoice-followup",
    title: "Chasing outstanding invoices / AR follow-up",
    category: "finance-ops",
    businessTypes: ["professional-services", "agency", "home-services"],
  },
] as const;

/**
 * Return the presets tagged for a given business type, plus a small set
 * of cross-business defaults so the wizard always has a useful menu.
 */
export function getPresetsForBusinessType(businessType: BusinessType): readonly TaskPreset[] {
  return TASK_PRESETS.filter((preset) => preset.businessTypes.includes(businessType));
}
