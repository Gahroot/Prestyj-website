import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { BATCH_TIERS, getBatchTierPriceId, isBatchTierId } from "@/lib/batch-tiers";
import { getPlanCheckoutPrices } from "@/lib/plan-checkout";
import { getPricingTier, isDirectBuyTier } from "@/lib/pricing-data";

export const runtime = "nodejs";

/**
 * Checkout API. Handles two shapes of request:
 *
 *   1. Batch video ad packages — `{ tier: "minimum" | "pro" | "max" }`
 *      One-time payment. Redirects to /intake (existing flow).
 *
 *   2. Subscription pricing tiers — `{ plan: "starter" | "pro", name, email }`
 *      Mode: "subscription". Charges setup fee + first month immediately,
 *      then recurs monthly. Redirects to /onboarding so the buyer sees a
 *      concrete next-step screen, not a fake thank-you cliff.
 *
 * Tiers without a direct-buy path (e.g. Scale) return 400 and the marketing
 * site should route those buyers to /book-demo.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payload = body as {
    tier?: unknown;
    plan?: unknown;
    name?: unknown;
    email?: unknown;
    bump?: unknown;
  };

  // Subscription plan checkout (Starter / Pro / Scale where enabled).
  if (payload.plan !== undefined) {
    return handlePlanCheckout(request, payload);
  }

  // Existing batch video ad checkout.
  return handleBatchCheckout(request, payload.tier, payload.bump === true);
}

async function handleBatchCheckout(request: NextRequest, tierId: unknown, bump: boolean) {
  if (!isBatchTierId(tierId)) {
    console.error("[checkout] Unknown tier requested:", { tier: tierId });
    return NextResponse.json(
      {
        error: "That plan isn't available — please pick another or contact us.",
        debug: "Unknown tier",
      },
      { status: 400 },
    );
  }

  const priceId = getBatchTierPriceId(tierId);
  if (!priceId) {
    console.error("[checkout] Tier is not configured for checkout:", { tier: tierId });
    return NextResponse.json(
      {
        error: "This plan requires a sales call — please book a demo.",
        debug: "Tier is not configured for checkout",
      },
      { status: 500 },
    );
  }

  const tier = BATCH_TIERS[tierId];
  const origin = request.headers.get("origin") ?? request.nextUrl.origin ?? "https://prestyj.com";
  const affiliateRef = request.cookies.get("affiliate_ref")?.value;

  // Order bump: starter buyers can upgrade 100 → 300 ads for +$1,000.
  // Only valid on the starter tier.
  const bumpApplied = bump && tier.id === "starter";
  const bumpPriceId = process.env.STRIPE_PRICE_STARTER_BUMP_TO_300;
  if (bumpApplied && !bumpPriceId) {
    console.error("[checkout] Bump requested but STRIPE_PRICE_STARTER_BUMP_TO_300 is unset", {
      tier: tier.id,
    });
    return NextResponse.json(
      {
        error:
          "We couldn't apply the upgrade. Please try again or contact us at hello@prestyj.com.",
        debug: "STRIPE_PRICE_STARTER_BUMP_TO_300 is not configured",
      },
      { status: 500 },
    );
  }

  const lineItems: { price: string; quantity: number }[] = [{ price: priceId, quantity: 1 }];
  if (bumpApplied && bumpPriceId) {
    lineItems.push({ price: bumpPriceId, quantity: 1 });
  }

  const adCount = bumpApplied ? "300" : String(tier.adCount);
  const painPoints = bumpApplied ? "3" : String(tier.painPoints);
  const checkoutMetadata = {
    tier: tier.id,
    ad_count: adCount,
    pain_points: painPoints,
    ...(bumpApplied ? { bump_applied: "true" } : {}),
    ...(affiliateRef ? { affiliate_ref: affiliateRef } : {}),
  };

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      automatic_tax: { enabled: true },
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      // Legacy on-site intake flow. The premium portal
      // (portal.prestyj.com/start) is still in development and not deployed,
      // so paid batch buyers go through /intake until the portal cutover.
      success_url: `${origin}/intake?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: checkoutMetadata,
      payment_intent_data: {
        metadata: checkoutMetadata,
      },
    });

    if (!session.url) {
      console.error("[checkout] Stripe did not return a checkout URL:", {
        tier: tier.id,
        sessionId: session.id,
      });
      return NextResponse.json(
        {
          error: "We couldn't start checkout. Please try again or contact us at hello@prestyj.com.",
          debug: "Stripe did not return a checkout URL",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] Stripe error:", error);
    return NextResponse.json(
      {
        error: "We couldn't start checkout. Please try again or contact us at hello@prestyj.com.",
        debug: error instanceof Error ? error.message : "Failed to create checkout session",
      },
      { status: 500 },
    );
  }
}

async function handlePlanCheckout(
  request: NextRequest,
  payload: { plan?: unknown; name?: unknown; email?: unknown },
) {
  const planId = payload.plan;
  if (!isDirectBuyTier(planId)) {
    console.error("[checkout] Plan not available for direct-buy:", { plan: planId });
    return NextResponse.json(
      {
        error: "This plan requires a quick scoping call. Please book a demo.",
        debug: "Plan is not direct-buy enabled",
      },
      { status: 400 },
    );
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
  }

  const prices = getPlanCheckoutPrices(planId);
  if (!prices) {
    console.error("[checkout] Plan prices not configured:", { plan: planId });
    return NextResponse.json(
      {
        error: "We can't start checkout for this plan right now — please book a demo.",
        debug: "Plan prices not configured",
      },
      { status: 500 },
    );
  }

  const tier = getPricingTier(planId);
  const origin = request.headers.get("origin") ?? request.nextUrl.origin ?? "https://prestyj.com";
  const affiliateRef = request.cookies.get("affiliate_ref")?.value;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email,
      // Setup fee (one-time) + monthly subscription. Both are charged on
      // the first invoice; the monthly recurs on its own from there.
      line_items: [
        { price: prices.setupPriceId, quantity: 1 },
        { price: prices.monthlyPriceId, quantity: 1 },
      ],
      automatic_tax: { enabled: true },
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      success_url: `${origin}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: {
        flow: "plan_direct_buy",
        plan: tier.id,
        plan_name: tier.name,
        buyer_name: name,
        ...(affiliateRef ? { affiliate_ref: affiliateRef } : {}),
      },
      subscription_data: {
        metadata: {
          flow: "plan_direct_buy",
          plan: tier.id,
          plan_name: tier.name,
          buyer_name: name,
          ...(affiliateRef ? { affiliate_ref: affiliateRef } : {}),
        },
      },
    });

    if (!session.url) {
      console.error("[checkout] Stripe did not return a checkout URL:", {
        plan: tier.id,
        sessionId: session.id,
      });
      return NextResponse.json(
        {
          error: "We couldn't start checkout. Please try again or contact us at hello@prestyj.com.",
          debug: "Stripe did not return a checkout URL",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] Stripe plan error:", error);
    return NextResponse.json(
      {
        error: "We couldn't start checkout. Please try again or contact us at hello@prestyj.com.",
        debug: error instanceof Error ? error.message : "Failed to create checkout session",
      },
      { status: 500 },
    );
  }
}
