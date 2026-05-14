/**
 * Canonical integration list for Prestyj.
 *
 * Single source of truth — every page that visually lists supported integrations
 * (platform page, demo page, FAQ copy, etc.) reads from here. Don't list an
 * integration on a page without adding it here first.
 *
 * Honesty policy: `status: "live"` means we have a production-grade native
 * connector deployed for current customers. `status: "available"` means we
 * build the connector as part of onboarding when a customer needs it — the
 * platform supports it via API/webhook, but it isn't a one-click toggle. Any
 * tool that doesn't fit either bucket doesn't belong on this list — tell the
 * prospect "if it has an API we can connect to it" instead.
 */

import { Database, Home, Wrench, Calendar, Phone, Zap, type LucideIcon } from "lucide-react";

export type IntegrationStatus = "live" | "available";

export type IntegrationCategoryId =
  | "real-estate-crm"
  | "home-services-crm"
  | "general-crm"
  | "calendars"
  | "communication"
  | "automation";

export interface Integration {
  /** Display name as it appears on marketing pages. */
  name: string;
  /** Category bucket — drives the grouped UI on the platform page. */
  category: IntegrationCategoryId;
  /**
   * `live` = production connector in use today.
   * `available` = built during onboarding via API/webhook, not pre-wired.
   */
  status: IntegrationStatus;
}

export interface IntegrationCategory {
  id: IntegrationCategoryId;
  /** Section heading shown on the platform page. */
  label: string;
  /** One-line description for the category card. */
  description: string;
  /** Audience this category is most relevant to (used for ordering, not gating). */
  audience: "real-estate" | "home-services" | "all";
  icon: LucideIcon;
}

export const integrationCategories: IntegrationCategory[] = [
  {
    id: "real-estate-crm",
    label: "Real Estate CRMs",
    description:
      "Buyer/seller leads, showings, and qualification notes sync straight into the CRM your agents already live in.",
    audience: "real-estate",
    icon: Home,
  },
  {
    id: "home-services-crm",
    label: "Home Services CRMs",
    description:
      "Jobs, dispatch context, and customer history flow into the field service platform your dispatchers already run.",
    audience: "home-services",
    icon: Wrench,
  },
  {
    id: "general-crm",
    label: "General CRMs",
    description:
      "For teams running a horizontal sales motion — pipelines, deals, and contacts stay in sync both ways.",
    audience: "all",
    icon: Database,
  },
  {
    id: "calendars",
    label: "Calendars",
    description: "AI agents book against real availability — no double-booking, no overbooking.",
    audience: "all",
    icon: Calendar,
  },
  {
    id: "communication",
    label: "Communication",
    description:
      "Power voice agents, SMS agents, and inbound receptionists on numbers you control.",
    audience: "all",
    icon: Phone,
  },
  {
    id: "automation",
    label: "Automation & Workflow",
    description: "Trigger and extend agent workflows across the rest of your stack.",
    audience: "all",
    icon: Zap,
  },
];

/**
 * The canonical integration list.
 *
 * Only `Follow Up Boss` is marked `live` today — it's the connector we run for
 * current customers. Everything else is `available`, meaning we build the
 * connector as part of onboarding using the vendor's documented API or
 * webhooks. Adding "coming soon" pills on the UI is driven entirely by this
 * `status` field — don't fork the truth.
 */
export const integrations: Integration[] = [
  // Real Estate CRMs
  { name: "Follow Up Boss", category: "real-estate-crm", status: "live" },
  { name: "kvCORE", category: "real-estate-crm", status: "available" },
  { name: "Sierra Interactive", category: "real-estate-crm", status: "available" },
  { name: "CINC", category: "real-estate-crm", status: "available" },
  { name: "Real Geeks", category: "real-estate-crm", status: "available" },

  // Home Services CRMs
  { name: "ServiceTitan", category: "home-services-crm", status: "available" },
  { name: "Jobber", category: "home-services-crm", status: "available" },
  { name: "Housecall Pro", category: "home-services-crm", status: "available" },

  // General CRMs
  { name: "HubSpot", category: "general-crm", status: "available" },
  { name: "Salesforce", category: "general-crm", status: "available" },
  { name: "Pipedrive", category: "general-crm", status: "available" },

  // Calendars
  { name: "Google Calendar", category: "calendars", status: "available" },
  { name: "Outlook", category: "calendars", status: "available" },

  // Communication
  { name: "Twilio", category: "communication", status: "available" },

  // Automation
  { name: "Zapier", category: "automation", status: "available" },
  { name: "Make", category: "automation", status: "available" },
];

// ─── Selectors ────────────────────────────────────────────────────────────────

export function getIntegrationsByCategory(category: IntegrationCategoryId): Integration[] {
  return integrations.filter((i) => i.category === category);
}

export function getLiveIntegrations(): Integration[] {
  return integrations.filter((i) => i.status === "live");
}

export function getAvailableIntegrations(): Integration[] {
  return integrations.filter((i) => i.status === "available");
}

/**
 * Grouped view used by the platform page so a real-estate visitor sees their
 * CRMs grouped at the top and a home-services visitor sees theirs alongside.
 * Categories with zero integrations are omitted.
 */
export interface IntegrationGroup {
  category: IntegrationCategory;
  integrations: Integration[];
}

export function getIntegrationGroups(): IntegrationGroup[] {
  return integrationCategories
    .map((category) => ({
      category,
      integrations: getIntegrationsByCategory(category.id),
    }))
    .filter((group) => group.integrations.length > 0);
}

/**
 * Comma-separated name list, used inside prose copy (FAQ answers, etc.).
 * Filter by category to keep copy tight and audience-appropriate.
 */
export function listIntegrationNames(
  options: { categories?: IntegrationCategoryId[]; max?: number } = {},
): string {
  const { categories, max } = options;
  const names = integrations
    .filter((i) => (categories ? categories.includes(i.category) : true))
    .map((i) => i.name);
  return (max ? names.slice(0, max) : names).join(", ");
}
