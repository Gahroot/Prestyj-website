export const FIRM_TYPES = [
  { value: "fund", label: "Real estate investment fund" },
  { value: "brokerage", label: "Commercial brokerage" },
  { value: "owner-operator", label: "CRE owner-operator" },
  { value: "other", label: "Other" },
] as const;
export type FirmType = (typeof FIRM_TYPES)[number]["value"];

export const AUM_BANDS = [
  { value: "under-500m", label: "Under $500M" },
  { value: "500m-1b", label: "$500M to $1B" },
  { value: "1b-5b", label: "$1B to $5B" },
  { value: "5b-plus", label: "$5B or more" },
] as const;
export type AumBand = (typeof AUM_BANDS)[number]["value"];

/** ICP rule: fund with at least $500M AUM, commercial brokerage, or CRE owner-operator. */
export function isQualified(firmType: FirmType, aumBand?: AumBand | null): boolean {
  if (firmType === "brokerage" || firmType === "owner-operator") return true;
  if (firmType === "fund") return Boolean(aumBand) && aumBand !== "under-500m";
  return false;
}
