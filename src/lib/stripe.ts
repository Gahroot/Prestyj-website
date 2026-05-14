import Stripe from "stripe";

let cachedClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (cachedClient) return cachedClient;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  cachedClient = new Stripe(key);
  return cachedClient;
}

export type PaidSessionSummary = {
  sessionId: string;
  priceId: string;
  amountTotal: number | null;
  currency: string | null;
  customerEmail: string | null;
  customerName: string | null;
  customerPhone: string | null;
  customerAddress: {
    line1: string | null;
    city: string | null;
    state: string | null;
    postalCode: string | null;
    country: string | null;
  } | null;
};

export type PaidPlanSessionSummary = {
  sessionId: string;
  /** All line item price IDs on the session (setup + monthly for plans). */
  priceIds: string[];
  amountTotal: number | null;
  currency: string | null;
  customerEmail: string | null;
  customerName: string | null;
  /** Session metadata — includes `flow`, `plan`, `buyer_name`. */
  metadata: Record<string, string>;
};

export async function getPaidSession(sessionId: string): Promise<PaidSessionSummary | null> {
  const stripe = getStripe();
  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer_details"],
    });
  } catch {
    return null;
  }

  if (session.payment_status !== "paid") return null;

  const priceId = session.line_items?.data[0]?.price?.id;
  if (!priceId) return null;

  const address = session.customer_details?.address;

  return {
    sessionId: session.id,
    priceId,
    amountTotal: session.amount_total,
    currency: session.currency,
    customerEmail: session.customer_details?.email ?? null,
    customerName: session.customer_details?.name ?? null,
    customerPhone: session.customer_details?.phone ?? null,
    customerAddress: address
      ? {
          line1: address.line1 ?? null,
          city: address.city ?? null,
          state: address.state ?? null,
          postalCode: address.postal_code ?? null,
          country: address.country ?? null,
        }
      : null,
  };
}

/**
 * Retrieves a Stripe Checkout Session created via `mode: "subscription"`
 * (plan direct-buy flow). Treats the session as paid once Stripe marks
 * `payment_status` as `paid` or `no_payment_required` (e.g. 100% coupon).
 * Returns `null` for unknown sessions or sessions that haven't paid yet —
 * the caller is expected to redirect away.
 */
export async function getPaidPlanSession(
  sessionId: string,
): Promise<PaidPlanSessionSummary | null> {
  const stripe = getStripe();
  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer_details"],
    });
  } catch {
    return null;
  }

  if (session.payment_status !== "paid" && session.payment_status !== "no_payment_required") {
    return null;
  }

  const priceIds =
    session.line_items?.data
      .map((item) => item.price?.id)
      .filter((id): id is string => typeof id === "string") ?? [];

  return {
    sessionId: session.id,
    priceIds,
    amountTotal: session.amount_total,
    currency: session.currency,
    customerEmail: session.customer_details?.email ?? null,
    customerName: session.customer_details?.name ?? null,
    metadata: (session.metadata ?? {}) as Record<string, string>,
  };
}
