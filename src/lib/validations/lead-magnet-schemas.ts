/**
 * Validation schemas for lead magnet forms
 */

import { z } from "zod";

/**
 * Team Commission Calculator Schema
 * For real estate teams calculating commission losses
 */
export const teamCalculatorSchema = z.object({
  // Team metrics
  teamSize: z.number()
    .min(2, "Team size must be at least 2 agents")
    .max(1000, "Please contact us for enterprise teams (1000+ agents)"),

  monthlyLeads: z.number()
    .min(10, "Minimum 10 leads per month")
    .max(100000, "Please enter a realistic lead volume"),

  avgCommission: z.number()
    .min(1000, "Average commission seems low")
    .max(1000000, "Please enter realistic commission amount"),

  closeRate: z.number()
    .min(0.1, "Close rate must be at least 0.1%")
    .max(100, "Close rate cannot exceed 100%"),

  responseTime: z.enum([
    "under-1-min",
    "5-min",
    "30-min",
    "1-hour",
    "4-hour",
    "24-hour",
  ]),

  // Contact info
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  companyName: z.string().optional(),
  role: z.enum(["team-lead", "broker", "isa-manager", "other"]),
});

export type TeamCalculatorInput = z.infer<typeof teamCalculatorSchema>;

/**
 * Response time options for dropdown
 */
export const responseTimeOptions = [
  { value: "under-1-min", label: "Under 1 minute" },
  { value: "5-min", label: "5 minutes" },
  { value: "30-min", label: "30 minutes" },
  { value: "1-hour", label: "1 hour" },
  { value: "4-hour", label: "4 hours (industry average)" },
  { value: "24-hour", label: "24+ hours" },
] as const;

/**
 * Role options for dropdown
 */
export const roleOptions = [
  { value: "team-lead", label: "Team Lead" },
  { value: "broker", label: "Broker/Owner" },
  { value: "isa-manager", label: "ISA Manager" },
  { value: "other", label: "Other" },
] as const;
