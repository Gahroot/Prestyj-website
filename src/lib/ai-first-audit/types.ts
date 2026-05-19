/**
 * Domain types for the AI-First Audit wizard.
 *
 * No React, no I/O — pure data shapes shared between the wizard UI,
 * server routes, scoring logic, email templates, and PDF rendering.
 */

// -------------------------------------------------------------------------
// Business context
// -------------------------------------------------------------------------

export const BUSINESS_TYPES = [
  { value: "real-estate", label: "Real Estate Team / Brokerage" },
  { value: "home-services", label: "Home Services (HVAC, roofing, plumbing, etc.)" },
  { value: "agency", label: "Marketing / Creative Agency" },
  { value: "coaching", label: "Coaching / Consulting" },
  { value: "ecommerce", label: "E-Commerce / DTC Brand" },
  { value: "saas", label: "SaaS / Software" },
  { value: "professional-services", label: "Professional Services (legal, accounting, finance)" },
  { value: "other", label: "Other" },
] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number]["value"];

export const REVENUE_BANDS = [
  { value: "under-500k", label: "Under $500K", suggestedHourlyCost: 45 },
  { value: "500k-1m", label: "$500K – $1M", suggestedHourlyCost: 55 },
  { value: "1m-3m", label: "$1M – $3M", suggestedHourlyCost: 65 },
  { value: "3m-10m", label: "$3M – $10M", suggestedHourlyCost: 85 },
  { value: "over-10m", label: "Over $10M", suggestedHourlyCost: 110 },
] as const;

export type RevenueBand = (typeof REVENUE_BANDS)[number]["value"];

export const ROLES = [
  { value: "owner", label: "Owner / CEO / Founder" },
  { value: "operator", label: "COO / Operator / Integrator" },
  { value: "marketing", label: "Head of Marketing" },
  { value: "sales", label: "Head of Sales" },
  { value: "other", label: "Other" },
] as const;

export type Role = (typeof ROLES)[number]["value"];

export interface BusinessContext {
  readonly firstName: string;
  readonly lastName: string | null;
  readonly email: string;
  readonly phone: string | null;
  readonly businessType: BusinessType;
  readonly revenueBand: RevenueBand;
  readonly role: Role;
}

// -------------------------------------------------------------------------
// Task scoring inputs (the rubric the wizard collects per task)
// -------------------------------------------------------------------------

/**
 * 1–5 score on the leverage (Y) axis and readiness (X) axis components.
 * Each sub-score maps deterministically from a plain-language radio choice.
 */
export type SubScore = 1 | 2 | 3 | 4 | 5;

export const SUB_SCORE_VALUES: readonly SubScore[] = [1, 2, 3, 4, 5];

/** Hours/week the task currently consumes — used for both leverage and savings math. */
export const HOURS_PER_WEEK_OPTIONS = [
  { value: 1 as SubScore, label: "Less than 1 hr/wk", midpoint: 0.5 },
  { value: 2 as SubScore, label: "1–3 hrs/wk", midpoint: 2 },
  { value: 3 as SubScore, label: "4–8 hrs/wk", midpoint: 6 },
  { value: 4 as SubScore, label: "9–15 hrs/wk", midpoint: 12 },
  { value: 5 as SubScore, label: "More than 15 hrs/wk", midpoint: 20 },
] as const;

export const COST_OPTIONS = [
  { value: 1 as SubScore, label: "Under $25/hr" },
  { value: 2 as SubScore, label: "$25 – $50/hr" },
  { value: 3 as SubScore, label: "$50 – $100/hr" },
  { value: 4 as SubScore, label: "$100 – $150/hr" },
  { value: 5 as SubScore, label: "Over $150/hr" },
] as const;

export const FREQUENCY_OPTIONS = [
  { value: 1 as SubScore, label: "Monthly or less" },
  { value: 2 as SubScore, label: "Weekly" },
  { value: 3 as SubScore, label: "A few times a week" },
  { value: 4 as SubScore, label: "Daily" },
  { value: 5 as SubScore, label: "Multiple times a day" },
] as const;

export const BOTTLENECK_OPTIONS = [
  { value: 1 as SubScore, label: "Not really" },
  { value: 2 as SubScore, label: "A little" },
  { value: 3 as SubScore, label: "Sometimes" },
  { value: 4 as SubScore, label: "Often slows revenue" },
  { value: 5 as SubScore, label: "Actively blocks revenue" },
] as const;

export const REPEATABILITY_OPTIONS = [
  { value: 1 as SubScore, label: "Unique every time" },
  { value: 2 as SubScore, label: "Mostly unique" },
  { value: 3 as SubScore, label: "Mixed" },
  { value: 4 as SubScore, label: "Mostly the same" },
  { value: 5 as SubScore, label: "Same every time" },
] as const;

export const JUDGMENT_OPTIONS = [
  { value: 1 as SubScore, label: "High-stakes human judgment" },
  { value: 2 as SubScore, label: "Significant judgment" },
  { value: 3 as SubScore, label: "Moderate judgment" },
  { value: 4 as SubScore, label: "Light judgment" },
  { value: 5 as SubScore, label: "Rules-based / mechanical" },
] as const;

export const ERROR_TOLERANCE_OPTIONS = [
  { value: 1 as SubScore, label: "Zero errors allowed" },
  { value: 2 as SubScore, label: "Low tolerance" },
  { value: 3 as SubScore, label: "Medium tolerance" },
  { value: 4 as SubScore, label: "High tolerance" },
  { value: 5 as SubScore, label: "Easy to catch & fix" },
] as const;

export const DATA_AVAILABILITY_OPTIONS = [
  { value: 1 as SubScore, label: "Lives in someone's head" },
  { value: 2 as SubScore, label: "Scattered across places" },
  { value: 3 as SubScore, label: "Partial — some systems" },
  { value: 4 as SubScore, label: "Mostly in our systems" },
  { value: 5 as SubScore, label: "Already in clean systems" },
] as const;

export interface AuditTaskInput {
  readonly id: string;
  readonly title: string;
  readonly category: ToolCategory;
  readonly hoursPerWeek: SubScore;
  readonly cost: SubScore;
  readonly frequency: SubScore;
  readonly bottleneck: SubScore;
  readonly repeatability: SubScore;
  readonly judgment: SubScore;
  readonly errorTolerance: SubScore;
  readonly dataAvailability: SubScore;
}

// -------------------------------------------------------------------------
// Tool taxonomy + recipes
// -------------------------------------------------------------------------

export const TOOL_CATEGORIES = [
  "inbox-triage",
  "voice-agent",
  "research-workflow",
  "outbound-personalization",
  "content-ops",
  "ops-automation",
  "data-entry",
  "reporting",
  "scheduling",
  "hiring-screen",
  "knowledge-base",
  "finance-ops",
  "support-deflection",
  "qa-review",
  "lead-enrichment",
] as const;

export type ToolCategory = (typeof TOOL_CATEGORIES)[number];

export interface ToolRecipe {
  readonly id: string;
  readonly category: ToolCategory;
  readonly displayName: string;
  readonly stack: string;
  readonly starterRecipe: string;
  readonly watchOut: string;
}

// -------------------------------------------------------------------------
// Task library presets
// -------------------------------------------------------------------------

export interface TaskPreset {
  readonly id: string;
  readonly title: string;
  readonly category: ToolCategory;
  /** Which business types should surface this preset by default. */
  readonly businessTypes: readonly BusinessType[];
}

// -------------------------------------------------------------------------
// Scoring output
// -------------------------------------------------------------------------

export type Quadrant = "automate-first" | "delegate" | "automate-later" | "ignore";

export interface ScoredTask {
  readonly input: AuditTaskInput;
  readonly leverage: number; // 4–20
  readonly readiness: number; // 4–20
  readonly rankScore: number; // composite for top-3 ordering
  readonly quadrant: Quadrant;
  readonly weeklyHoursSaved: number;
  readonly annualDollarsSaved: number;
  readonly recipe: ToolRecipe;
}

// -------------------------------------------------------------------------
// 7-day plan
// -------------------------------------------------------------------------

export interface DayPlan {
  readonly day: number; // 1–7
  readonly title: string;
  readonly body: string;
  /** Which top-task this day primarily addresses (0–2), or null for org-wide days. */
  readonly focusTaskIndex: number | null;
}

// -------------------------------------------------------------------------
// Aggregate audit result (persisted to AiFirstAudit.resultJson)
// -------------------------------------------------------------------------

export interface AuditResult {
  readonly version: 1;
  readonly context: BusinessContext;
  readonly hourlyCost: number;
  readonly tasks: readonly ScoredTask[];
  readonly topThree: readonly ScoredTask[];
  readonly totalWeeklyHoursSaved: number;
  readonly totalAnnualDollarsSaved: number;
  /** Rounded to nearest $1K for the headline. */
  readonly headlineDollars: number;
  readonly sevenDayPlan: readonly DayPlan[];
  readonly computedAt: string; // ISO timestamp
}
