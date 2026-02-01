import type { FeatureComparison } from "@/lib/compare/types";
import type { FeatureRow } from "@/lib/alternatives/types";

export const STANDARD_FEATURES = {
  AI_TEXT: { feature: "AI Text Conversations", prestyj: true } as const,
  AI_VOICE: { feature: "AI Voice Assistants", prestyj: true } as const,
  RESPONSE_24_7: { feature: "24/7 Lead Response", prestyj: true } as const,
  BUILT_IN_CRM: { feature: "Built-in CRM", prestyj: true } as const,
  APPOINTMENT_BOOKING: {
    feature: "Appointment Booking",
    prestyj: true,
  } as const,
  LEAD_QUALIFICATION: {
    feature: "Lead Qualification",
    prestyj: true,
  } as const,
  CALENDAR_INTEGRATION: {
    feature: "Calendar Integration",
    prestyj: true,
  } as const,
} as const;

export function buildAlternativeFeature(
  baseFeature: (typeof STANDARD_FEATURES)[keyof typeof STANDARD_FEATURES],
  competitor: boolean | string,
  note?: string
): FeatureRow {
  return { ...baseFeature, competitor, note };
}

export function buildCompareFeature(
  baseFeature: (typeof STANDARD_FEATURES)[keyof typeof STANDARD_FEATURES],
  competitor: boolean | string,
  note?: string
): FeatureComparison {
  return { ...baseFeature, competitor, note };
}
