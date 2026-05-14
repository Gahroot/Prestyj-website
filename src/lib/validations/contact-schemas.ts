/**
 * Validation schema for the generic /contact form.
 *
 * Used by both the client form (`src/components/sections/contact/contact-form.tsx`)
 * and the server route (`src/app/api/contact/route.ts`) so the contract stays in sync.
 */

import z from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z
    .string()
    .trim()
    .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Enter your work email"),
  // Phone is optional — submitter may prefer email-only contact.
  phone: z.string().trim().max(32, "Phone number is too long").optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (10+ characters)")
    .max(4000, "Message is too long"),
  // Honeypot — bots fill hidden fields, humans don't.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
