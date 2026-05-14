import type { FeatureComparison } from "@/lib/compare/types";
import type { FeatureRow } from "@/lib/alternatives/types";

// Each feature description is concrete and falsifiable. Avoid vague labels
// like "AI Text" — say what the agent actually does. Pages that need a
// more specific row should write their own instead of stretching these.
export const STANDARD_FEATURES = {
  AI_TEXT: {
    feature: "Two-way SMS conversations that qualify leads",
    prestyj: true,
  } as const,
  AI_VOICE: {
    feature: "AI voice agent answers and screens calls",
    prestyj: true,
  } as const,
  RESPONSE_24_7: {
    feature: "Responds to new leads in under 60 seconds, 24/7",
    prestyj: true,
  } as const,
  BUILT_IN_CRM: {
    feature: "Built-in CRM with conversation history and lead status",
    prestyj: true,
  } as const,
  APPOINTMENT_BOOKING: {
    feature: "Books meetings directly onto your calendar",
    prestyj: true,
  } as const,
  LEAD_QUALIFICATION: {
    feature: "Asks qualifying questions and tags lead quality",
    prestyj: true,
  } as const,
  CALENDAR_INTEGRATION: {
    feature: "Two-way sync with Google Calendar and Outlook",
    prestyj: true,
  } as const,
} as const;

export function buildAlternativeFeature(
  baseFeature: (typeof STANDARD_FEATURES)[keyof typeof STANDARD_FEATURES],
  competitor: boolean | string,
  note?: string,
): FeatureRow {
  return { ...baseFeature, competitor, ...(note !== undefined && { note }) };
}

export function buildCompareFeature(
  baseFeature: (typeof STANDARD_FEATURES)[keyof typeof STANDARD_FEATURES],
  competitor: boolean | string,
  note?: string,
): FeatureComparison {
  return { ...baseFeature, competitor, ...(note !== undefined && { note }) };
}
