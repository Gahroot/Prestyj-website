import { NextRequest, NextResponse } from "next/server";
import {
  foundingCohortSchema,
  isQualified,
  type FoundingCohortOutput,
} from "@/lib/validations/founding-cohort-schemas";
import { FOUNDING_COHORT, isCohortOpen } from "@/lib/founding-cohort";
import { getStripe } from "@/lib/stripe";

const API_BASE_URL = "https://backend-api-production-b536.up.railway.app";

export const runtime = "nodejs";

/**
 * Founding Cohort application handler.
 *
 * Three response shapes:
 *
 *   { approved: true, checkoutUrl, ... }
 *     - Cohort open + applicant qualifies + Stripe session minted.
 *     - Form redirects directly to Stripe ($0 due, code pre-applied).
 *
 *   { approved: true, approvedHref, ... }  (fallback, no checkoutUrl)
 *     - Stripe call failed but the lead is captured. Form falls back to
 *       /founding-cohort/approved with the manual code copy flow.
 *
 *   { approved: false, reason: "cohort_full" | "soft_qualify_out", ... }
 *     - Hard close (cohort full) or soft qualify-out (under-$3K spend / not
 *       running ads). Soft path now offers the $497 sample tier and still
 *       captures the lead \u2014 no dead-end.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validation = foundingCohortSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: "Invalid input", details: validation.error.issues },
      { status: 400 },
    );
  }

  const data = validation.data;

  // Push every applicant into the CRM \u2014 qualified or not. Soft qualify-outs
  // are still valuable leads who self-identified as wanting ad creative.
  await logLead(data, isCohortOpen() && isQualified(data) ? "qualified" : "soft");

  // Hard gate \u2014 cohort full. No founding spot, but we still surface the
  // standard pricing path.
  if (!isCohortOpen()) {
    return NextResponse.json(
      {
        approved: false,
        reason: "cohort_full",
        message:
          "All founding cohort spots are filled \u2014 we'll add you to the list for the next cohort. In the meantime, the standard $1,497 batch is available below.",
        fallbackHref: FOUNDING_COHORT.checkoutHref,
      },
      { status: 200 },
    );
  }

  // Soft qualify-out \u2014 under-$3K spenders or not-running-yet. Used to be a
  // hard wall; now we route them to the $497 sample tier.
  if (!isQualified(data)) {
    return NextResponse.json(
      {
        approved: false,
        reason: "soft_qualify_out",
        message:
          "Founding spots need real ad-account data to produce a useful case study, so they're reserved for businesses already spending about $100/day or more. Good news: the $497 sample (100 ads, same engine) is built for exactly your stage \u2014 you can be running in 24 hours.",
        fallbackHref: "/batch-video-ads#pricing",
        fallbackTier: FOUNDING_COHORT.sampleTier,
      },
      { status: 200 },
    );
  }

  // Approved \u2014 mint a Stripe Checkout Session with the FREE300 promo
  // pre-applied. Removes the "paste promo code" friction.
  const checkoutUrl = await mintCheckoutSession(request, data.contactEmail).catch((err) => {
    console.error("[founding-cohort] Stripe session mint failed:", err);
    return null;
  });

  return NextResponse.json({
    approved: true,
    promoCode: FOUNDING_COHORT.promoCode,
    checkoutHref: FOUNDING_COHORT.checkoutHref,
    approvedHref: FOUNDING_COHORT.approvedHref,
    // Present when Stripe mint succeeded. Form sends user straight here.
    // When null, form falls back to the /approved page with manual code.
    checkoutUrl,
  });
}

async function logLead(data: FoundingCohortOutput, status: "qualified" | "soft"): Promise<void> {
  const notes = [
    `Founding Cohort Application (${status})`,
    `Business: ${data.businessName}`,
    `Monthly ad spend: ${data.monthlyAdSpend}`,
    `Platforms: ${data.platforms.join(", ")}`,
    `Creative situation: ${data.creativeSituation}`,
    `Offer: ${data.offer}`,
    `Why now: ${data.whyNow}`,
    data.whyYouDetail ? `Why-you detail: ${data.whyYouDetail}` : null,
    `Agreed to founding-cohort terms: ${data.agreeAll}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const crmResponse = await fetch(`${API_BASE_URL}/api/v1/p/demo/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: data.contactName.split(" ")[0],
        email: data.contactEmail,
        notes,
        source: `founding-cohort-application:${status}`,
        trigger_call: false,
        trigger_text: false,
      }),
    });

    if (!crmResponse.ok) {
      const errorText = await crmResponse.text();
      console.error("[founding-cohort] CRM error:", errorText);
    }
  } catch (err) {
    console.error("[founding-cohort] CRM submission failed:", err);
  }
}

async function mintCheckoutSession(
  request: NextRequest,
  customerEmail: string,
): Promise<string | null> {
  const minimumPriceId = process.env.STRIPE_PRICE_MINIMUM;
  const promotionCodeId = process.env.STRIPE_PROMO_CODE_FREE300;

  if (!minimumPriceId) {
    console.error("[founding-cohort] STRIPE_PRICE_MINIMUM is not configured");
    return null;
  }
  if (!promotionCodeId) {
    console.error("[founding-cohort] STRIPE_PROMO_CODE_FREE300 is not configured");
    return null;
  }

  const stripe = getStripe();
  const origin = request.headers.get("origin") ?? request.nextUrl.origin ?? "https://prestyj.com";
  const affiliateRef = request.cookies.get("affiliate_ref")?.value;

  const checkoutMetadata = {
    tier: "minimum",
    ad_count: "300",
    pain_points: "3",
    flow: "founding_cohort",
    ...(affiliateRef ? { affiliate_ref: affiliateRef } : {}),
  };

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: minimumPriceId, quantity: 1 }],
    customer_email: customerEmail,
    automatic_tax: { enabled: true },
    billing_address_collection: "required",
    phone_number_collection: { enabled: true },
    // Cannot use `allow_promotion_codes` together with `discounts`.
    discounts: [{ promotion_code: promotionCodeId }],
    // Legacy on-site intake. The premium portal (portal.prestyj.com/start) is
    // still in development and not deployed, so buyers finish on-site.
    success_url: `${origin}/intake?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/founding-cohort/approved`,
    metadata: checkoutMetadata,
    payment_intent_data: {
      metadata: checkoutMetadata,
    },
  });

  return session.url ?? null;
}
