/**
 * Validation schemas for the Founding Cohort application form.
 *
 * The form qualifies applicants out client-side before submission:
 * - Monthly ad spend must clear `FOUNDING_COHORT.minMonthlyAdSpendUsd`
 * - They must agree to the single combined founding-cohort agreement
 *
 * Sub-threshold applicants used to hit a hard wall — they now get a soft
 * qualify-out that still captures the lead and routes them to the $497
 * sample tier (`FOUNDING_COHORT.sampleTier`).
 */

import z from "zod";

export const MONTHLY_AD_SPEND_OPTIONS = [
  { value: "under-1k", label: "Under $1,000/mo", qualifies: false },
  { value: "1k-3k", label: "$1,000–$3,000/mo", qualifies: false },
  { value: "3k-10k", label: "$3,000–$10,000/mo", qualifies: true },
  { value: "10k-25k", label: "$10,000–$25,000/mo", qualifies: true },
  { value: "25k-plus", label: "$25,000+/mo", qualifies: true },
  { value: "not-yet", label: "Not running paid ads yet", qualifies: false },
] as const;

export type MonthlyAdSpendValue = (typeof MONTHLY_AD_SPEND_OPTIONS)[number]["value"];

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

export type CreativeSituationValue = (typeof CREATIVE_SITUATION_OPTIONS)[number]["value"];

/**
 * Why-now options for the fit step. Removes the blank-page "why you?" text
 * field that was killing step-3 completion. Optional free-text follows.
 */
export const WHY_NOW_OPTIONS = [
  { value: "creative-not-converting", label: "My current ads aren’t converting" },
  { value: "burned-on-ugc", label: "Burned out paying UGC creators / agencies" },
  { value: "never-tried-video", label: "Never tried video at volume" },
  { value: "scaling-need-volume", label: "Scaling — need more creative volume" },
  { value: "other", label: "Something else" },
] as const;

export type WhyNowValue = (typeof WHY_NOW_OPTIONS)[number]["value"];

export const foundingCohortSchema = z.object({
  // Step 1 — Basics (website dropped — not needed for the application,
  // can be derived from email domain if we want it later).
  contactName: z.string().min(2, "Your name is required"),
  contactEmail: z
    .string()
    .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Enter your work email"),
  businessName: z.string().min(1, "Business name is required"),

  // Step 2 — Qualification
  monthlyAdSpend: z.enum(["under-1k", "1k-3k", "3k-10k", "10k-25k", "25k-plus", "not-yet"]),
  platforms: z
    .array(z.enum(["meta", "tiktok", "youtube", "google", "linkedin", "other"]))
    .min(1, "Pick at least one platform"),
  creativeSituation: z.enum(["agency", "ugc", "in-house", "self", "none"]),

  // Step 3 — Fit
  offer: z.string().min(20, "Tell us a sentence or two about your offer (min 20 chars)"),
  whyNow: z.enum([
    "creative-not-converting",
    "burned-on-ugc",
    "never-tried-video",
    "scaling-need-volume",
    "other",
  ]),
  whyYouDetail: z.string().optional(),

  // Step 4 — Single combined agreement (was 4 separate checkboxes).
  // Bundles testimonial + Google review + 14-day run + results rights.
  agreeAll: z.literal(true, {
    error: "Please confirm the founding-cohort terms to claim your spot",
  }),
});

export type FoundingCohortInput = z.input<typeof foundingCohortSchema>;
export type FoundingCohortOutput = z.output<typeof foundingCohortSchema>;

/**
 * Server-side qualification check. Mirrors the client-side guard so
 * tampered submissions still get rejected.
 */
export function isQualified(input: FoundingCohortOutput): boolean {
  const option = MONTHLY_AD_SPEND_OPTIONS.find((o) => o.value === input.monthlyAdSpend);
  return Boolean(option?.qualifies);
}
