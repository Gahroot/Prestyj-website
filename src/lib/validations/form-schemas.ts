import z from "zod";

/**
 * Qualification form validation schema
 * Provides type-safe, robust validation for all form fields
 */
export const qualificationFormSchema = z.object({
  firstName: z.string().min(1, "Name is required").trim(),
  email: z
    .string()
    .min(1, "Work email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Please enter a valid work email address",
    })
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => {
        // Remove all non-digit characters
        const digits = val.replace(/\D/g, "");
        return digits.length === 10;
      },
      { message: "Please enter a valid 10-digit US phone number" },
    ),
  companyName: z.string().min(1, "Company is required").trim(),
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
