/**
 * Validation schema for the 2-field plan intake (`/start/[plan]`).
 *
 * The intake is intentionally minimal — just enough to start a Stripe
 * subscription checkout. Stripe then collects the full billing address,
 * phone, and payment method on its hosted page.
 */
import z from "zod";

export const planStartSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Please enter your work email"),
});

export type PlanStartInput = z.infer<typeof planStartSchema>;
