export const FIRM_TYPES = [
  { value: "fund", label: "Real estate investment fund" },
  { value: "brokerage", label: "Commercial brokerage" },
  { value: "owner-operator", label: "CRE owner-operator" },
  { value: "other", label: "Other business" },
] as const;
export type FirmType = (typeof FIRM_TYPES)[number]["value"];

export const AUM_BANDS = [
  { value: "under-500m", label: "Under $500M" },
  { value: "500m-1b", label: "$500M to $1B" },
  { value: "1b-5b", label: "$1B to $5B" },
  { value: "5b-plus", label: "$5B or more" },
] as const;
export type AumBand = (typeof AUM_BANDS)[number]["value"];

/** Asked only when firm type is "other" (any non-real-estate business). */
export const COMPANY_SIZES = [
  { value: "1-9", label: "1 to 9 employees", minEmployees: 1 },
  { value: "10-49", label: "10 to 49 employees", minEmployees: 10 },
  { value: "50-249", label: "50 to 249 employees", minEmployees: 50 },
  { value: "250-plus", label: "250 or more employees", minEmployees: 250 },
] as const;
export type CompanySize = (typeof COMPANY_SIZES)[number]["value"];

/** Non-real-estate businesses qualify at this headcount or more. Change here only. */
export const MIN_QUALIFIED_EMPLOYEES = 10;

/**
 * ICP rule. Real estate: fund with at least $500M AUM, commercial brokerage, or CRE
 * owner-operator. Any other business: MIN_QUALIFIED_EMPLOYEES or more employees.
 */
export function isQualified(
  firmType: FirmType,
  aumBand?: AumBand | null,
  companySize?: CompanySize | null,
): boolean {
  if (firmType === "brokerage" || firmType === "owner-operator") return true;
  if (firmType === "fund") return Boolean(aumBand) && aumBand !== "under-500m";
  const size = COMPANY_SIZES.find((s) => s.value === companySize);
  return Boolean(size) && (size?.minEmployees ?? 0) >= MIN_QUALIFIED_EMPLOYEES;
}
