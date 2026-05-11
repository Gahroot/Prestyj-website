/**
 * Validation schemas for the Founding Cohort application form.
 *
 * The form qualifies applicants out client-side before submission:
 * - Monthly ad spend must clear `FOUNDING_COHORT.minMonthlyAdSpendUsd`
 * - They must agree to the testimonial + 14-day spend commitment
 *
 * Anyone failing either gate sees a polite "not a fit right now" message
 * and never reaches the API.
 */

import z from "zod";

export const MONTHLY_AD_SPEND_OPTIONS = [
  { value: "under-1k", label: "Under $1,000/mo", qualifies: false },
  { value: "1k-3k", label: "$1,000–$3,000/mo", qualifies: true },
  { value: "3k-10k", label: "$3,000–$10,000/mo", qualifies: true },
  { value: "10k-25k", label: "$10,000–$25,000/mo", qualifies: true },
  { value: "25k-plus", label: "$25,000+/mo", qualifies: true },
  { value: "not-yet", label: "Not running paid ads yet", qualifies: false },
] as const;

export type MonthlyAdSpendValue =
  (typeof MONTHLY_AD_SPEND_OPTIONS)[number]["value"];

export const PLATFORM_OPTIONS = [
  { value: "meta", label: "Meta (Facebook / Instagram)" },
  { value: "tiktok", label: "TikTok" },
  { value: "youtube", label: "YouTube" },
  { value: "google", label: "Google" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "other", label: "Other" },
] as const;

export type PlatformValue = (typeof PLATFORM_OPTIONS)[number]["value"];

export const CREATIVE_SITUATION_OPTIONS = [
  {
    value: "agency",
    label: "Paying an agency for creative",
  },
  {
    value: "ugc",
    label: "Paying UGC creators",
  },
  {
    value: "in-house",
    label: "In-house editor / team",
  },
  {
    value: "self",
    label: "Filming and editing myself",
  },
  {
    value: "none",
    label: "Running static ads / no video yet",
  },
] as const;

export type CreativeSituationValue =
  (typeof CREATIVE_SITUATION_OPTIONS)[number]["value"];

export const foundingCohortSchema = z.object({
  // Step 1 — Basics
  contactName: z.string().min(2, "Your name is required"),
  contactEmail: z
    .string()
    .refine(
      (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      "Valid email is required",
    ),
  businessName: z.string().min(1, "Business name is required"),
  website: z
    .string()
    .optional()
    .refine(
      (v) =>
        !v ||
        v.length === 0 ||
        /^(https?:\/\/)?[^\s.]+\.[^\s]{2,}$/.test(v.trim()),
      "Enter a valid website URL",
    ),

  // Step 2 — Qualification
  monthlyAdSpend: z.enum([
    "under-1k",
    "1k-3k",
    "3k-10k",
    "10k-25k",
    "25k-plus",
    "not-yet",
  ]),
  platforms: z
    .array(z.enum(["meta", "tiktok", "youtube", "google", "linkedin", "other"]))
    .min(1, "Pick at least one platform"),
  creativeSituation: z.enum([
    "agency",
    "ugc",
    "in-house",
    "self",
    "none",
  ]),

  // Step 3 — Fit
  offer: z
    .string()
    .min(20, "Tell us a sentence or two about your offer (min 20 chars)"),
  whyYou: z
    .string()
    .min(30, "Tell us why you're a fit (min 30 chars)"),

  // Step 4 — Commitment (all required to submit)
  agreeTestimonial: z.literal(true, {
    error: "Required to receive a founding spot",
  }),
  agreeReview: z.literal(true, {
    error: "Required to receive a founding spot",
  }),
  agreeRun14Days: z.literal(true, {
    error: "Required to receive a founding spot",
  }),
  agreeResultsRights: z.literal(true, {
    error: "Required to receive a founding spot",
  }),
});

export type FoundingCohortInput = z.input<typeof foundingCohortSchema>;
export type FoundingCohortOutput = z.output<typeof foundingCohortSchema>;

/**
 * Server-side qualification check. Mirrors the client-side guard so
 * tampered submissions still get rejected.
 */
export function isQualified(input: FoundingCohortOutput): boolean {
  const option = MONTHLY_AD_SPEND_OPTIONS.find(
    (o) => o.value === input.monthlyAdSpend,
  );
  return Boolean(option?.qualifies);
}
