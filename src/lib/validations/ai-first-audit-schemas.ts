/**
 * Zod schemas for the AI-First Audit wizard.
 *
 * Each step has a focused schema. The wizard validates client-side and the
 * API routes re-validate server-side (never trust client). Sub-score
 * fields are constrained to literal 1–5 so TS narrowing carries through
 * to the scoring functions.
 */

import { z } from "zod";
import { BUSINESS_TYPES, REVENUE_BANDS, ROLES, TOOL_CATEGORIES } from "@/lib/ai-first-audit/types";

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
  cost: subScoreSchema,
  frequency: subScoreSchema,
  bottleneck: subScoreSchema,
  repeatability: subScoreSchema,
  judgment: subScoreSchema,
  errorTolerance: subScoreSchema,
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
