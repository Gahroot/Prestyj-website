import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getResend } from "@/lib/resend";
import { getBatchTierByPriceId } from "@/lib/batch-tiers";

export const runtime = "nodejs";

const META_PIXEL_ID = "892763637077397";
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Prestyj <noreply@prestyj.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestyj.com";

async function sha256(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function fireMetaPurchase(
  session: Stripe.Checkout.Session,
  priceId: string
): Promise<void> {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!accessToken) {
    console.warn("[stripe-webhook] META_CAPI_ACCESS_TOKEN not set");
    return;
  }

  const tier = getBatchTierByPriceId(priceId);
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
    event_source_url: `${SITE_URL}/batch-video-ads`,
    user_data: userData,
    custom_data: {
      value,
      currency,
      content_type: "product",
      content_ids: tier ? [tier.id] : undefined,
      content_name: tier ? `Batch Video Ads — ${tier.name}` : undefined,
    },
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [event] }),
      }
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
  priceId: string
): Promise<void> {
  const to = session.customer_details?.email;
  if (!to) return;

  const tier = getBatchTierByPriceId(priceId);
  const tierName = tier?.name ?? "Batch";
  const adCount = tier?.adCount ?? 300;
  const firstName = (session.customer_details?.name ?? "").split(/\s+/)[0];
  const intakeUrl = `${SITE_URL}/intake?session_id=${session.id}`;

  try {
    await getResend().emails.send({
      from: RESEND_FROM_EMAIL,
      to,
      subject: `Your ${tierName} intake link (${adCount} ad scripts)`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111;">
          <h1 style="font-size: 24px; margin: 0 0 16px;">Payment confirmed — one more step</h1>
          <p>Hey${firstName ? ` ${firstName}` : ""},</p>
          <p>Thanks for picking up the <strong>${tierName}</strong> batch. To generate your <strong>${adCount} ad scripts</strong>, fill out the intake form here:</p>
          <p style="margin: 24px 0;">
            <a href="${intakeUrl}" style="display: inline-block; background: #7058e3; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Open intake form</a>
          </p>
          <p style="font-size: 13px; color: #555;">If you already completed the form, you can ignore this — scripts are on their way. If anything looks off, just reply to this email.</p>
          <p style="font-size: 13px; color: #555; margin-top: 24px;">— Prestyj</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("[stripe-webhook] Resend error:", error);
  }
}

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session
): Promise<void> {
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
      "— skipping tier-dependent actions"
    );
    return;
  }

  await Promise.allSettled([
    fireMetaPurchase(session, priceId),
    sendIntakeFallbackEmail(session, priceId),
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
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error("[stripe-webhook] signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(
          event.data.object as Stripe.Checkout.Session
        );
        break;
      case "charge.refunded":
        console.log(
          "[stripe-webhook] charge.refunded:",
          (event.data.object as Stripe.Charge).id
        );
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
