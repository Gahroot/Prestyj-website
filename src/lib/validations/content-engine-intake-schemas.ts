/**
 * Validation schemas for the Done-For-You Social Media intake form.
 * Collects brand kit info upfront so onboarding can start before the demo.
 */

import z from "zod";

const HEX_REGEX = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const URL_OR_HANDLE = /^[A-Za-z0-9._\-/:@#]+$/;

const optionalTrimmed = (max = 500) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .or(z.literal("").transform(() => undefined));

/* -------------------------------------------------------------------------- */
/*  Step 1 — Business basics                                                  */
/* -------------------------------------------------------------------------- */

export const businessBasicsSchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(2, "Business name is required")
    .max(120, "Keep it under 120 characters"),
  industry: z.enum(
    [
      "real-estate",
      "home-services",
      "agency",
      "coaching",
      "ecommerce",
      "saas",
      "professional-services",
      "fitness",
      "beauty",
      "restaurant",
      "other",
    ],
    { message: "Please select your industry" }
  ),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal(""))
    .transform((v) => (v ? v : undefined))
    .refine(
      (v) => v === undefined || /^https?:\/\/[^\s]+\.[^\s]+/.test(v),
      "Please enter a valid URL (https://…)"
    ),
  contactName: z.string().trim().min(2, "Your name is required").max(80),
  contactEmail: z
    .string()
    .trim()
    .toLowerCase()
    .refine(
      (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      "Please enter a valid email"
    ),
});

/* -------------------------------------------------------------------------- */
/*  Step 2 — Audience & voice                                                 */
/* -------------------------------------------------------------------------- */

export const audienceVoiceSchema = z.object({
  targetAudience: z
    .string()
    .trim()
    .min(10, "Tell us a little about who you serve (min 10 chars)")
    .max(1000, "Keep it under 1000 characters"),
  brandVoice: z
    .string()
    .trim()
    .min(10, "A short brand voice note helps us match your tone")
    .max(1000, "Keep it under 1000 characters"),
  keyOffers: z
    .string()
    .trim()
    .min(5, "List at least one offer or product")
    .max(1000, "Keep it under 1000 characters"),
});

/* -------------------------------------------------------------------------- */
/*  Step 3 — Platforms & social handles                                       */
/* -------------------------------------------------------------------------- */

export const PLATFORM_OPTIONS = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "tiktok", label: "TikTok" },
  { value: "youtube", label: "YouTube" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "threads", label: "Threads" },
  { value: "x", label: "X (Twitter)" },
  { value: "pinterest", label: "Pinterest" },
] as const;

export type PlatformValue = (typeof PLATFORM_OPTIONS)[number]["value"];

export const platformsSocialSchema = z.object({
  currentPlatforms: z
    .array(
      z.enum(
        PLATFORM_OPTIONS.map((p) => p.value) as [PlatformValue, ...PlatformValue[]]
      )
    )
    .min(1, "Select at least one platform you currently use"),
  socialHandles: z
    .object({
      instagram: optionalTrimmed(120),
      facebook: optionalTrimmed(120),
      tiktok: optionalTrimmed(120),
      youtube: optionalTrimmed(120),
      linkedin: optionalTrimmed(120),
      threads: optionalTrimmed(120),
      x: optionalTrimmed(120),
      pinterest: optionalTrimmed(120),
    })
    .refine(
      (handles) =>
        Object.values(handles).every(
          (v) => !v || URL_OR_HANDLE.test(v)
        ),
      { message: "Handles can include letters, numbers, and . _ - / : @ #" }
    ),
});

/* -------------------------------------------------------------------------- */
/*  Step 4 — Brand kit (colors + logo)                                        */
/* -------------------------------------------------------------------------- */

const hexField = z
  .string()
  .trim()
  .refine((v) => HEX_REGEX.test(v), "Use a valid hex (e.g. #7058e3)")
  .transform((v) => (v.startsWith("#") ? v : `#${v}`));

const optionalHex = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .transform((v) => (v ? v : undefined))
  .refine((v) => v === undefined || HEX_REGEX.test(v), {
    message: "Use a valid hex (e.g. #7058e3)",
  })
  .transform((v) => (v && !v.startsWith("#") ? `#${v}` : v));

export const brandKitSchema = z.object({
  primaryColor: hexField,
  secondaryColor: optionalHex,
  accentColor: optionalHex,
  logoDataUrl: z
    .string()
    .optional()
    .refine(
      (v) => !v || v.startsWith("data:image/"),
      "Logo must be an image file"
    )
    .refine(
      (v) => !v || v.length < 4 * 1024 * 1024 * 1.4, // ~4MB after base64 expansion
      "Logo file is too large (max 3MB)"
    ),
  logoFileName: optionalTrimmed(200),
  logoNotes: optionalTrimmed(500),
});

/* -------------------------------------------------------------------------- */
/*  Combined schema (used by the API)                                         */
/* -------------------------------------------------------------------------- */

export const contentEngineIntakeSchema = businessBasicsSchema
  .extend(audienceVoiceSchema.shape)
  .extend(platformsSocialSchema.shape)
  .extend(brandKitSchema.shape);

export type ContentEngineIntakeInput = z.input<
  typeof contentEngineIntakeSchema
>;

export type ContentEngineIntakeOutput = z.output<
  typeof contentEngineIntakeSchema
>;

export const INDUSTRY_OPTIONS = [
  { value: "real-estate", label: "Real Estate" },
  { value: "home-services", label: "Home Services" },
  { value: "agency", label: "Agency / Marketing" },
  { value: "coaching", label: "Coaching / Consulting" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "saas", label: "SaaS / Software" },
  { value: "professional-services", label: "Professional Services" },
  { value: "fitness", label: "Fitness / Wellness" },
  { value: "beauty", label: "Beauty / Cosmetics" },
  { value: "restaurant", label: "Restaurant / Hospitality" },
  { value: "other", label: "Other" },
] as const;
