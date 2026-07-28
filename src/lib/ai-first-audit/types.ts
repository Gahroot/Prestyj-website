/** Pure, versioned domain types for the AI-First Audit. */

// Version 1 is retained for historical report links and legacy endpoints.
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

export type SubScore = 1 | 2 | 3 | 4 | 5;
export const SUB_SCORE_VALUES: readonly SubScore[] = [1, 2, 3, 4, 5];

export const HOURS_PER_WEEK_OPTIONS = [
  { value: 1 as SubScore, label: "Less than 1 hr/wk", midpoint: 0.5 },
  { value: 2 as SubScore, label: "1–3 hrs/wk", midpoint: 2 },
  { value: 3 as SubScore, label: "4–8 hrs/wk", midpoint: 6 },
  { value: 4 as SubScore, label: "9–15 hrs/wk", midpoint: 12 },
  { value: 5 as SubScore, label: "More than 15 hrs/wk", midpoint: 20 },
] as const;

export const FREQUENCY_OPTIONS = [
  { value: 1 as SubScore, label: "Monthly or less" },
  { value: 2 as SubScore, label: "Weekly" },
  { value: 3 as SubScore, label: "A few times a week" },
  { value: 4 as SubScore, label: "Daily" },
  { value: 5 as SubScore, label: "Multiple times a day" },
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

export const DATA_AVAILABILITY_OPTIONS = [
  { value: 1 as SubScore, label: "Lives in someone's head" },
  { value: 2 as SubScore, label: "Scattered across places" },
  { value: 3 as SubScore, label: "Partial — some systems" },
  { value: 4 as SubScore, label: "Mostly in our systems" },
  { value: 5 as SubScore, label: "Already in clean systems" },
] as const;

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

export interface AuditTaskInput {
  readonly id: string;
  readonly title: string;
  readonly category: ToolCategory;
  readonly hoursPerWeek: SubScore;
  readonly frequency: SubScore;
  readonly repeatability: SubScore;
  readonly judgment: SubScore;
  readonly dataAvailability: SubScore;
}

export interface ToolRecipe {
  readonly id: string;
  readonly category: ToolCategory;
  readonly displayName: string;
  readonly stack: string;
  readonly starterRecipe: string;
  readonly watchOut: string;
}

export interface TaskPreset {
  readonly id: string;
  readonly title: string;
  readonly category: ToolCategory;
  readonly businessTypes: readonly BusinessType[];
}

export type Quadrant = "automate-first" | "delegate" | "automate-later" | "ignore";

export interface ScoredTask {
  readonly input: AuditTaskInput;
  readonly leverage: number;
  readonly readiness: number;
  readonly rankScore: number;
  readonly quadrant: Quadrant;
  readonly weeklyHoursSaved: number;
  readonly annualDollarsSaved: number;
  readonly recipe: ToolRecipe;
}

export interface DayPlan {
  readonly day: number;
  readonly title: string;
  readonly body: string;
  readonly focusTaskIndex: number | null;
}

export interface AuditResultV1 {
  readonly version: 1;
  readonly context: BusinessContext;
  readonly hourlyCost: number;
  readonly tasks: readonly ScoredTask[];
  readonly topThree: readonly ScoredTask[];
  readonly totalWeeklyHoursSaved: number;
  readonly totalAnnualDollarsSaved: number;
  readonly headlineDollars: number;
  readonly sevenDayPlan: readonly DayPlan[];
  readonly computedAt: string;
}

// Version 2 separates assessment data from contact data so the browser can
// calculate and store a useful preview without personal information.
export const AUDIT_BUSINESS_TYPES = [
  { value: "real-estate-team", label: "Real estate team" },
  { value: "home-services", label: "Home services" },
  { value: "professional-services", label: "Professional services" },
  { value: "agency-consulting", label: "Agency or consulting" },
  { value: "other-service-business", label: "Other service business" },
] as const;

export type AuditBusinessType = (typeof AUDIT_BUSINESS_TYPES)[number]["value"];

export interface AuditProfile {
  readonly businessType: AuditBusinessType;
  readonly hourlyCost: number;
}

export const WORKFLOW_CATEGORIES = [
  "lead-response",
  "missed-calls",
  "estimate-followup",
  "appointment-booking",
  "lead-reactivation",
  "sales-followup",
  "crm-updates",
  "review-requests",
  "ad-production",
  "ad-reporting",
  "listing-leads",
  "open-house-followup",
  "general",
] as const;

export type WorkflowCategory = (typeof WORKFLOW_CATEGORIES)[number];

export interface WorkflowPreset {
  readonly id: string;
  readonly title: string;
  readonly category: WorkflowCategory;
  readonly businessTypes: readonly AuditBusinessType[];
}

export const WEEKLY_HOURS_OPTIONS = [
  { value: "under-1", label: "Less than 1 hour", midpoint: 0.5 },
  { value: "1-3", label: "1 to 3 hours", midpoint: 2 },
  { value: "4-8", label: "4 to 8 hours", midpoint: 6 },
  { value: "9-15", label: "9 to 15 hours", midpoint: 12 },
  { value: "over-15", label: "More than 15 hours", midpoint: 20 },
] as const;

export type WeeklyHoursAnswer = (typeof WEEKLY_HOURS_OPTIONS)[number]["value"];

export const IMPACT_OPTIONS = [
  { value: "little", label: "Little happens", score: 0 },
  { value: "delay", label: "Work gets delayed", score: 33 },
  { value: "wait", label: "Customers or leads wait", score: 67 },
  { value: "loss", label: "Leads, sales, or customers are lost", score: 100 },
] as const;

export type ImpactAnswer = (typeof IMPACT_OPTIONS)[number]["value"];
export type FourPointAnswer = 1 | 2 | 3 | 4;

export interface ReadinessAnswers {
  readonly sameSteps: FourPointAnswer;
  readonly clearRules: FourPointAnswer;
  readonly informationEasyToFind: FourPointAnswer;
}

export interface WorkflowInput {
  readonly id: string;
  readonly title: string;
  readonly category: WorkflowCategory;
  readonly isCustom: boolean;
  readonly weeklyHours: WeeklyHoursAnswer;
  readonly impact: ImpactAnswer;
  readonly readiness: ReadinessAnswers;
}

export interface WorkflowGuide {
  readonly category: WorkflowCategory;
  readonly problem: string;
  readonly agentRole: string;
  readonly agentJob: string;
  readonly firstMove: string;
  readonly guardrail: string;
  readonly successMetric: string;
  readonly readinessFixes: Readonly<{
    sameSteps: string;
    clearRules: string;
    informationEasyToFind: string;
  }>;
}

export type ImpactLabel = "Low" | "Medium" | "High" | "Critical";
export type ReadinessLabel = "Ready now" | "Needs a little prep" | "Needs groundwork";
export type PriorityAction = "Fix first" | "Prepare first" | "Quick win" | "Leave for now";

export interface ScoredWorkflow {
  readonly input: WorkflowInput;
  readonly weeklyHoursMidpoint: number;
  readonly annualTimeCost: number;
  readonly impactScore: number;
  readonly impactLabel: ImpactLabel;
  readonly readinessScore: number;
  readonly readinessLabel: ReadinessLabel;
  readonly normalizedTimeCost: number;
  readonly priorityScore: number;
  readonly priorityAction: PriorityAction;
  readonly guide: WorkflowGuide;
  readonly whyItRanks: string;
}

export interface FirstFixPlanItem {
  readonly title: string;
  readonly body: string;
}

export interface AuditResultV2 {
  readonly version: 2;
  readonly profile: AuditProfile;
  readonly workflows: readonly ScoredWorkflow[];
  readonly topThree: readonly ScoredWorkflow[];
  readonly totalWeeklyHours: number;
  readonly totalAnnualTimeCost: number;
  readonly firstFixPlan: readonly FirstFixPlanItem[];
  readonly computedAt: string;
}

export interface AuditContact {
  readonly firstName: string;
  readonly workEmail: string;
}

export interface AuditConsent {
  readonly followupOptIn: boolean;
}

export type AuditResult = AuditResultV1 | AuditResultV2;
