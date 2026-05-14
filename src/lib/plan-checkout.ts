/**
 * Stripe price configuration for the subscription pricing tiers
 * (Starter / Pro / Scale) defined in `src/lib/pricing-data.ts`.
 *
 * Each direct-buyable plan maps to two Stripe price IDs:
 *   - `setupPriceEnv`: one-time price (the setup fee, charged once)
 *   - `monthlyPriceEnv`: recurring price (the monthly subscription)
 *
 * Both are added as line items in a `mode: "subscription"` Checkout session,
 * so the customer is billed setup + first month immediately and then the
 * monthly recurs on its own cadence. This keeps a single source of truth
 * for what the customer is paying and avoids a separate "first invoice"
 * dance.
 *
 * Used by `src/app/api/checkout/route.ts` and `src/app/start/[plan]/page.tsx`.
 */
import type { TierId } from "@/lib/pricing-data";
import { getPricingTier } from "@/lib/pricing-data";

type PlanPriceConfig = {
  setupPriceEnv: string;
  monthlyPriceEnv: string;
};

/**
 * Env var names per tier. We resolve at call time so missing envs surface as
 * a runtime error in the API route — not as a build-time crash on the
 * marketing site.
 */
const PLAN_PRICE_ENV: Record<TierId, PlanPriceConfig> = {
  starter: {
    setupPriceEnv: "STRIPE_PRICE_PLAN_STARTER_SETUP",
    monthlyPriceEnv: "STRIPE_PRICE_PLAN_STARTER_MONTHLY",
  },
  pro: {
    setupPriceEnv: "STRIPE_PRICE_PLAN_PRO_SETUP",
    monthlyPriceEnv: "STRIPE_PRICE_PLAN_PRO_MONTHLY",
  },
  scale: {
    setupPriceEnv: "STRIPE_PRICE_PLAN_SCALE_SETUP",
    monthlyPriceEnv: "STRIPE_PRICE_PLAN_SCALE_MONTHLY",
  },
};

export type PlanCheckoutPrices = {
  setupPriceId: string;
  monthlyPriceId: string;
};

/**
 * Returns the resolved Stripe price IDs for a given plan, or `null` when
 * either env var is not configured. Callers should treat `null` as "this
 * tier isn't wired for direct-buy yet — fall back to /book-demo".
 */
export function getPlanCheckoutPrices(tier: TierId): PlanCheckoutPrices | null {
  const config = PLAN_PRICE_ENV[tier];
  const setupPriceId = process.env[config.setupPriceEnv];
  const monthlyPriceId = process.env[config.monthlyPriceEnv];
  if (!setupPriceId || !monthlyPriceId) return null;
  return { setupPriceId, monthlyPriceId };
}

/**
 * Reverse lookup: identify which tier a Stripe price belongs to. Used by
 * the webhook to attribute conversions when a plan checkout completes.
 * Checks both setup and monthly price IDs.
 */
export function getPlanByPriceId(priceId: string): TierId | null {
  for (const tier of Object.keys(PLAN_PRICE_ENV) as TierId[]) {
    const prices = getPlanCheckoutPrices(tier);
    if (!prices) continue;
    if (prices.setupPriceId === priceId || prices.monthlyPriceId === priceId) {
      return tier;
    }
  }
  return null;
}

/**
 * Convenience helper used by the webhook and onboarding page to fetch the
 * full pricing tier object from a Stripe price ID.
 */
export function getPlanTierByPriceId(priceId: string) {
  const id = getPlanByPriceId(priceId);
  return id ? getPricingTier(id) : null;
}
