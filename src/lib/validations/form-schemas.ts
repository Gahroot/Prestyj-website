import { z } from "zod";

/**
 * Qualification form validation schema
 * Provides type-safe, robust validation for all form fields
 */
export const qualificationFormSchema = z.object({
  businessType: z.string().min(1, "Please select a business type"),
  revenue: z.string().min(1, "Please select a revenue range"),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().min(1, "Please select a budget range"),
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
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
      { message: "Please enter a valid 10-digit US phone number" }
    ),
  companyName: z.string().trim().optional(),
  projectDetails: z.string().trim().optional(),
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
  email: z.string().email().optional(),
  company_name: z.string().optional(),
  notes: z.string().optional(),
  source: z.string(),
  trigger_call: z.boolean(),
  trigger_text: z.boolean(),
});

export type LeadPayload = z.infer<typeof leadPayloadSchema>;
