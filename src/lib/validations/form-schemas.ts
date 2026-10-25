import z from "zod";

import { AUM_BANDS, FIRM_TYPES } from "@/lib/attribution/qualification";
import { capabilities } from "@/lib/institutional/capabilities";

const firmTypeValues = FIRM_TYPES.map((type) => type.value) as [
  (typeof FIRM_TYPES)[number]["value"],
  ...(typeof FIRM_TYPES)[number]["value"][],
];
const aumBandValues = AUM_BANDS.map((band) => band.value) as [
  (typeof AUM_BANDS)[number]["value"],
  ...(typeof AUM_BANDS)[number]["value"][],
];

/**
 * Booking qualification form: only what is needed to qualify and route the request.
 * AUM band is required for funds only.
 */
export const qualificationFormSchema = z
  .object({
    firstName: z.string().trim().min(1, "Name is required"),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, "Work email is required")
      .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
        message: "Please enter a valid work email address",
      }),
    firmType: z.enum(firmTypeValues, { message: "Choose your firm type" }),
    aumBand: z.enum(aumBandValues).optional(),
    workflow: z.string().refine((val) => val === "" || capabilities.some((c) => c.slug === val)),
  })
  .refine((data) => data.firmType !== "fund" || Boolean(data.aumBand), {
    message: "Choose assets under management",
    path: ["aumBand"],
  });

export type QualificationFormData = z.infer<typeof qualificationFormSchema>;

/**
 * Lead payload validation schema
 * Validates data before sending to API
 */
export const leadPayloadSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().optional(),
  phone_number: z.string().length(10),
  email: z
    .string()
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), { message: "Enter your work email" })
    .optional(),
  company_name: z.string().optional(),
  notes: z.string().optional(),
  source: z.string(),
  trigger_call: z.boolean(),
  trigger_text: z.boolean(),
});

export type LeadPayload = z.infer<typeof leadPayloadSchema>;
