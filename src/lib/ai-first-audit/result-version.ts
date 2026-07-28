import type { AuditResult, AuditResultV1, AuditResultV2 } from "./types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasString(value: Record<string, unknown>, key: string): boolean {
  return typeof value[key] === "string";
}

function hasNumber(value: Record<string, unknown>, key: string): boolean {
  return typeof value[key] === "number" && Number.isFinite(value[key]);
}

export function isAuditResultV1(value: unknown): value is AuditResultV1 {
  if (!isRecord(value) || value.version !== 1) return false;
  if (!isRecord(value.context) || !hasString(value.context, "firstName")) return false;
  return (
    hasNumber(value, "hourlyCost") &&
    Array.isArray(value.tasks) &&
    Array.isArray(value.topThree) &&
    Array.isArray(value.sevenDayPlan) &&
    hasString(value, "computedAt")
  );
}

export function isAuditResultV2(value: unknown): value is AuditResultV2 {
  if (!isRecord(value) || value.version !== 2) return false;
  if (!isRecord(value.profile)) return false;
  return (
    hasString(value.profile, "businessType") &&
    hasNumber(value.profile, "hourlyCost") &&
    Array.isArray(value.workflows) &&
    value.workflows.length >= 3 &&
    Array.isArray(value.topThree) &&
    value.topThree.length >= 1 &&
    Array.isArray(value.firstFixPlan) &&
    hasNumber(value, "totalWeeklyHours") &&
    hasNumber(value, "totalAnnualTimeCost") &&
    hasString(value, "computedAt")
  );
}

export function parseAuditResult(value: unknown): AuditResult | null {
  if (isAuditResultV1(value)) return value;
  if (isAuditResultV2(value)) return value;
  return null;
}

export function auditResultVersion(value: unknown): 1 | 2 | null {
  const result = parseAuditResult(value);
  return result?.version ?? null;
}
