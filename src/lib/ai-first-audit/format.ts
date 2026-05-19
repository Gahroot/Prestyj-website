/**
 * Display formatters for the audit wizard + result page + PDF + emails.
 * Mirrors the commission-loss formatters so output stays consistent across
 * the site.
 */

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

const HOURS_FORMATTER = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

export function formatCurrency(amount: number): string {
  return CURRENCY_FORMATTER.format(Math.round(amount));
}

export function formatNumber(num: number): string {
  return NUMBER_FORMATTER.format(num);
}

export function formatHours(hours: number): string {
  return `${HOURS_FORMATTER.format(hours)} hr${hours === 1 ? "" : "s"}`;
}

/**
 * "$56K" style abbreviation for the headline. Keeps the result page
 * one-line on mobile.
 */
export function formatCurrencyCompact(amount: number): string {
  const abs = Math.abs(amount);
  if (abs >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (abs >= 1_000) return `$${Math.round(amount / 1000)}K`;
  return formatCurrency(amount);
}
