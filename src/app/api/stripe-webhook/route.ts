import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getResend } from "@/lib/resend";
import { getBatchTierByPriceId } from "@/lib/batch-tiers";
import { getPlanByPriceId, getPlanTierByPriceId } from "@/lib/plan-checkout";
import { PREMIUM_PORTAL_URL } from "@/lib/premium-portal";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const META_PIXEL_ID = "892763637077397";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Prestyj <noreply@prestyj.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestyj.com";

async function sha256(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function fireMetaPurchase(session: Stripe.Checkout.Session, priceId: string): Promise<void> {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!accessToken) {
    console.warn("[stripe-webhook] META_CAPI_ACCESS_TOKEN not set");
    return;
  }

  const batchTier = getBatchTierByPriceId(priceId);
  const planTier = batchTier ? null : getPlanTierByPriceId(priceId);
  const contentId = batchTier?.id ?? planTier?.id;
  const contentName = batchTier
    ? `Batch Video Ads — ${batchTier.name}`
    : planTier
      ? `Prestyj Plan — ${planTier.name}`
      : undefined;
  const sourceUrl = batchTier ? `${SITE_URL}/batch-video-ads` : `${SITE_URL}/pricing`;
  const value = (session.amount_total ?? 0) / 100;
  const currency = (session.currency ?? "usd").toUpperCase();
  const details = session.customer_details;
  const email = details?.email ?? undefined;
  const phone = details?.phone ?? undefined;
  const [firstName = "", ...rest] = (details?.name ?? "").trim().split(/\s+/);
  const lastName = rest.join(" ");
  const city = details?.address?.city ?? undefined;
  const country = details?.address?.country ?? undefined;

  const userData: Record<string, string> = {};
  if (email) userData.em = await sha256(email);
  if (phone) userData.ph = await sha256(phone.replace(/\D/g, ""));
  if (firstName) userData.fn = await sha256(firstName);
  if (lastName) userData.ln = await sha256(lastName);
  if (city) userData.ct = await sha256(city);
  if (country) userData.country = await sha256(country);

  const event = {
    event_name: "Purchase",
    event_time: Math.floor(Date.now() / 1000),
    event_id: session.id,
    action_source: "website",
    event_source_url: sourceUrl,
    user_data: userData,
    custom_data: {
      value,
      currency,
      content_type: "product",
      content_ids: contentId ? [contentId] : undefined,
      content_name: contentName,
    },
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [event] }),
      },
    );
    const json = await res.json();
    if (!res.ok) {
      console.error("[stripe-webhook] Meta CAPI error:", res.status, json);
    } else {
      console.log("[stripe-webhook] Meta CAPI Purchase sent:", {
        session: session.id,
        value,
        currency,
        fbtrace: json.fbtrace_id,
      });
    }
  } catch (error) {
    console.error("[stripe-webhook] Meta CAPI fetch failed:", error);
  }
}

async function sendIntakeFallbackEmail(
  session: Stripe.Checkout.Session,
  priceId: string,
): Promise<void> {
  const to = session.customer_details?.email;
  if (!to) return;

  // Only send the batch-ads intake email for batch-ads purchases. Plan
  // direct-buys land on /onboarding, which already explains next steps.
  const tier = getBatchTierByPriceId(priceId);
  if (!tier) return;
  const tierName = tier.name;
  const adCount = tier.adCount;
  const firstName = (session.customer_details?.name ?? "").split(/\s+/)[0];
  // Send buyers to the premium portal's verified claim flow. The portal
  // verifies the session server-side and walks them through guided onboarding.
  const intakeUrl = `${PREMIUM_PORTAL_URL.replace(/\/$/, "")}/start?session_id=${session.id}`;

  try {
    await getResend().emails.send({
      from: RESEND_FROM_EMAIL,
      to,
      subject: `Your ${tierName} intake link (${adCount} ad scripts)`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111;">
          <h1 style="font-size: 24px; margin: 0 0 16px;">Payment confirmed — one more step</h1>
          <p>Hey${firstName ? ` ${firstName}` : ""},</p>
          <p>Thanks for picking up the <strong>${tierName}</strong> batch. Your order is moving to our new guided portal. To generate your <strong>${adCount} ad scripts</strong>, open your portal and finish onboarding:</p>
          <p style="margin: 24px 0;">
            <a href="${intakeUrl}" style="display: inline-block; background: #7058e3; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Open your portal</a>
          </p>
          <p style="font-size: 13px; color: #555;">If you already finished onboarding, you can ignore this — scripts are on their way. If anything looks off, just reply to this email.</p>
          <p style="font-size: 13px; color: #555; margin-top: 24px;">— Prestyj</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("[stripe-webhook] Resend error:", error);
  }
}

async function sendStarterUpsellEmail(
  session: Stripe.Checkout.Session,
  priceId: string,
): Promise<void> {
  const tier = getBatchTierByPriceId(priceId);
  if (tier?.id !== "starter") return;

  // Skip if the order-bump was already applied at checkout — the upsell is
  // redundant in that case.
  if (session.metadata?.bump_applied === "true") return;

  const to = session.customer_details?.email;
  if (!to) return;

  const subject = "Want 500 ads for +$1,000?";
  const body =
    "Your 100 ads are being made. If you want 500 ads instead — same delivery window — reply YES and we'll send a $1,000 upgrade invoice. Or keep your 100 and we'll talk in a few days.";

  try {
    await getResend().emails.send({
      from: RESEND_FROM_EMAIL,
      to,
      subject,
      text: body,
      replyTo: "hello@prestyj.com",
    });
    console.log("[stripe-webhook] starter upsell email sent:", {
      event: "starter_upsell_email_sent",
      email: to,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("[stripe-webhook] starter upsell email error:", error);
  }
}

async function recordAffiliateConversion(
  session: Stripe.Checkout.Session,
  tierId: string,
): Promise<void> {
  const ref = session.metadata?.affiliate_ref;
  if (!ref) return;

  try {
    const affiliate = await prisma.affiliate.findUnique({
      where: { slug: ref, active: true },
    });
    if (!affiliate) return;

    const amountCents = session.amount_total ?? 0;
    const commissionCents = Math.round(amountCents * affiliate.commissionRate);

    await prisma.$transaction([
      prisma.conversion.create({
        data: {
          affiliateId: affiliate.id,
          stripeSessionId: session.id,
          tier: tierId,
          amountCents,
          commissionCents,
          status: "PENDING",
          ...(session.customer_details?.email && {
            customerEmail: session.customer_details.email,
          }),
        },
      }),
      prisma.affiliate.update({
        where: { id: affiliate.id },
        data: { balanceCents: { increment: commissionCents } },
      }),
    ]);

    console.log("[stripe-webhook] affiliate conversion recorded:", {
      slug: ref,
      session: session.id,
      commissionCents,
    });
  } catch (error) {
    console.error("[stripe-webhook] affiliate conversion error:", error);
  }
}

async function handleRefund(charge: Stripe.Charge): Promise<void> {
  const paymentIntentId =
    typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent?.id;
  if (!paymentIntentId) return;

  try {
    const sessions = await getStripe().checkout.sessions.list({
      payment_intent: paymentIntentId,
      limit: 1,
    });
    const sessionId = sessions.data[0]?.id;
    if (!sessionId) return;

    const conversion = await prisma.conversion.findUnique({
      where: { stripeSessionId: sessionId },
    });
    if (!conversion || conversion.status === "REFUNDED") return;

    await prisma.$transaction([
      prisma.conversion.update({
        where: { id: conversion.id },
        data: { status: "REFUNDED", refundedAt: new Date() },
      }),
      prisma.affiliate.update({
        where: { id: conversion.affiliateId },
        data: { balanceCents: { decrement: conversion.commissionCents } },
      }),
    ]);

    console.log("[stripe-webhook] affiliate conversion refunded:", {
      session: sessionId,
      commissionCents: conversion.commissionCents,
    });
  } catch (error) {
    console.error("[stripe-webhook] refund handler error:", error);
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const stripe = getStripe();
  let priceId: string | undefined;

  try {
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      limit: 1,
    });
    priceId = lineItems.data[0]?.price?.id;
  } catch (error) {
    console.error("[stripe-webhook] listLineItems error:", error);
  }

  if (!priceId) {
    console.warn(
      "[stripe-webhook] No priceId for session",
      session.id,
      "— skipping tier-dependent actions",
    );
    return;
  }

  // Plan checkouts have two line items (setup + monthly) — prefer the setup
  // price for attribution since it's the one-time signal for this purchase.
  let attributionPriceId = priceId;
  if (session.mode === "subscription") {
    try {
      const allLineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 5 });
      const setupPriceId = allLineItems.data
        .map((item) => item.price?.id)
        .find((id) => typeof id === "string" && getPlanByPriceId(id) !== null);
      if (setupPriceId) attributionPriceId = setupPriceId;
    } catch (error) {
      console.error("[stripe-webhook] listLineItems (plan) error:", error);
    }
  }

  const batchTier = getBatchTierByPriceId(attributionPriceId);
  const planTier = batchTier ? null : getPlanTierByPriceId(attributionPriceId);
  const tierId = batchTier?.id ?? planTier?.id ?? "unknown";

  await Promise.allSettled([
    fireMetaPurchase(session, attributionPriceId),
    sendIntakeFallbackEmail(session, attributionPriceId),
    sendStarterUpsellEmail(session, attributionPriceId),
    recordAffiliateConversion(session, tierId),
  ]);
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("[stripe-webhook] STRIPE_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("[stripe-webhook] signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "charge.refunded":
        await handleRefund(event.data.object as Stripe.Charge);
        break;
      default:
        // Ignore events we don't care about
        break;
    }
  } catch (error) {
    console.error("[stripe-webhook] handler error:", error);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
