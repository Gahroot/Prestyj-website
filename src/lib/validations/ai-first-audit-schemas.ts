/**
 * Zod schemas for the AI-First Audit wizard.
 *
 * Each step has a focused schema. The wizard validates client-side and the
 * API routes re-validate server-side (never trust client). Sub-score
 * fields are constrained to literal 1–5 so TS narrowing carries through
 * to the scoring functions.
 */

import { z } from "zod";
import {
  AUDIT_BUSINESS_TYPES,
  BUSINESS_TYPES,
  IMPACT_OPTIONS,
  REVENUE_BANDS,
  ROLES,
  TOOL_CATEGORIES,
  WEEKLY_HOURS_OPTIONS,
  WORKFLOW_CATEGORIES,
  type AuditBusinessType,
  type ImpactAnswer,
  type WeeklyHoursAnswer,
  type WorkflowCategory,
} from "@/lib/ai-first-audit/types";

const businessTypeValues = BUSINESS_TYPES.map((b) => b.value) as [string, ...string[]];
const revenueBandValues = REVENUE_BANDS.map((b) => b.value) as [string, ...string[]];
const roleValues = ROLES.map((b) => b.value) as [string, ...string[]];
const toolCategoryValues = [...TOOL_CATEGORIES] as [string, ...string[]];

const emailSchema = z
  .string()
  .trim()
  .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Enter a valid email");

const phoneSchema = z
  .string()
  .trim()
  .refine((v) => /^\+\d{10,15}$/.test(v), "Enter a valid phone number");

export const leadCaptureSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().max(80).optional().nullable(),
  email: emailSchema,
  phone: phoneSchema,
  businessType: z.enum(businessTypeValues),
  revenueBand: z.enum(revenueBandValues),
  role: z.enum(roleValues),
});

export type LeadCaptureInput = z.infer<typeof leadCaptureSchema>;

export const businessContextSchema = z.object({
  hourlyCost: z
    .number()
    .min(15, "Hourly cost must be at least $15")
    .max(500, "Hourly cost must be under $500"),
});

export type BusinessContextInput = z.infer<typeof businessContextSchema>;

const subScoreSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const auditTaskInputSchema = z.object({
  id: z.string().min(1).max(120),
  title: z.string().trim().min(1, "Task title is required").max(160),
  category: z.enum(toolCategoryValues),
  hoursPerWeek: subScoreSchema,
  frequency: subScoreSchema,
  repeatability: subScoreSchema,
  judgment: subScoreSchema,
  dataAvailability: subScoreSchema,
});

export type AuditTaskInputSchema = z.infer<typeof auditTaskInputSchema>;

export const tasksListSchema = z
  .array(auditTaskInputSchema)
  .min(1, "Add at least one task")
  .max(15, "Maximum 15 tasks per audit");

/**
 * Patch shape sent from the wizard on every "Next" — any subset is valid.
 */
export const auditDraftPatchSchema = z.object({
  hourlyCost: z.number().min(15).max(500).optional(),
  tasks: tasksListSchema.optional(),
});

export type AuditDraftPatch = z.infer<typeof auditDraftPatchSchema>;

export const patchRequestSchema = z.object({
  editToken: z.string().min(8).max(64),
  patch: auditDraftPatchSchema,
});

export const finalizeRequestSchema = z.object({
  editToken: z.string().min(8).max(64),
});

const auditBusinessTypeValues = AUDIT_BUSINESS_TYPES.map((item) => item.value) as [
  AuditBusinessType,
  ...AuditBusinessType[],
];
const workflowCategoryValues = [...WORKFLOW_CATEGORIES] as [
  WorkflowCategory,
  ...WorkflowCategory[],
];
const weeklyHoursValues = WEEKLY_HOURS_OPTIONS.map((item) => item.value) as [
  WeeklyHoursAnswer,
  ...WeeklyHoursAnswer[],
];
const impactValues = IMPACT_OPTIONS.map((item) => item.value) as [ImpactAnswer, ...ImpactAnswer[]];
const fourPointAnswerSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
]);

export const auditProfileV2Schema = z
  .object({
    businessType: z.enum(auditBusinessTypeValues),
    hourlyCost: z.number().finite().min(15, "Hourly cost must be at least $15").max(500),
  })
  .strict();

export const readinessAnswersSchema = z
  .object({
    sameSteps: fourPointAnswerSchema,
    clearRules: fourPointAnswerSchema,
    informationEasyToFind: fourPointAnswerSchema,
  })
  .strict();

export const workflowInputV2Schema = z
  .object({
    id: z.string().trim().min(1).max(80).regex(/^[a-zA-Z0-9_-]+$/),
    title: z.string().trim().min(1, "Workflow name is required").max(120),
    category: z.enum(workflowCategoryValues),
    isCustom: z.boolean(),
    weeklyHours: z.enum(weeklyHoursValues),
    impact: z.enum(impactValues),
    readiness: readinessAnswersSchema,
  })
  .strict()
  .superRefine((workflow, context) => {
    if (workflow.isCustom && workflow.category !== "general") {
      context.addIssue({
        code: "custom",
        path: ["category"],
        message: "Custom workflows must use the general category",
      });
    }
  });

export const workflowListV2Schema = z
  .array(workflowInputV2Schema)
  .min(3, "Choose at least 3 workflows")
  .max(5, "Choose no more than 5 workflows")
  .superRefine((workflows, context) => {
    const ids = new Set<string>();
    for (const [index, workflow] of workflows.entries()) {
      if (ids.has(workflow.id)) {
        context.addIssue({
          code: "custom",
          path: [index, "id"],
          message: "Each workflow must be unique",
        });
      }
      ids.add(workflow.id);
    }
  });

export const auditContactV2Schema = z
  .object({
    firstName: z.string().trim().min(1, "First name is required").max(80),
    workEmail: emailSchema.transform((value) => value.toLowerCase()),
  })
  .strict();

export const auditConsentV2Schema = z
  .object({
    followupOptIn: z.boolean(),
  })
  .strict();

export const completeAuditRequestSchema = z
  .object({
    profile: auditProfileV2Schema,
    workflows: workflowListV2Schema,
    contact: auditContactV2Schema,
    consent: auditConsentV2Schema,
    submissionKey: z.string().uuid(),
    companyWebsite: z.string().max(0, "Leave this field empty"),
    completionTimeMs: z.number().int().min(10_000).max(24 * 60 * 60 * 1000),
  })
  .strict();

export type AuditProfileV2Input = z.infer<typeof auditProfileV2Schema>;
export type WorkflowInputV2Schema = z.infer<typeof workflowInputV2Schema>;
export type AuditContactV2Input = z.infer<typeof auditContactV2Schema>;
export type CompleteAuditRequest = z.infer<typeof completeAuditRequestSchema>;
