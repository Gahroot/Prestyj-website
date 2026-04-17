import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import {
  BATCH_TIERS,
  getBatchTierPriceId,
  isBatchTierId,
} from "@/lib/batch-tiers";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const tierId = (body as { tier?: unknown })?.tier;
  if (!isBatchTierId(tierId)) {
    return NextResponse.json({ error: "Unknown tier" }, { status: 400 });
  }

  const priceId = getBatchTierPriceId(tierId);
  if (!priceId) {
    return NextResponse.json(
      { error: "Tier is not configured for checkout" },
      { status: 500 }
    );
  }

  const tier = BATCH_TIERS[tierId];
  const origin =
    request.headers.get("origin") ??
    request.nextUrl.origin ??
    "https://prestyj.com";

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      automatic_tax: { enabled: true },
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      success_url: `${origin}/intake?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/batch-video-ads#pricing`,
      metadata: {
        tier: tier.id,
        ad_count: String(tier.adCount),
        pain_points: String(tier.painPoints),
      },
      payment_intent_data: {
        metadata: {
          tier: tier.id,
          ad_count: String(tier.adCount),
          pain_points: String(tier.painPoints),
        },
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
