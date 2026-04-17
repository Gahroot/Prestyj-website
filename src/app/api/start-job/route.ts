import { NextRequest, NextResponse } from "next/server";
import { getPaidSession } from "@/lib/stripe";
import { getBatchTierByPriceId } from "@/lib/batch-tiers";

export const runtime = "nodejs";

const SCRIPT_GEN_URL =
  "https://script-gen-production-5b56.up.railway.app/generate";
const LEADS_URL =
  "https://backend-api-production-b536.up.railway.app/api/v1/p/leads/ls_VPUWE5hD";

type ScriptPayload = {
  business_name: string;
  target_audience: string;
  pain_points_solutions: Array<{ pain_point: string; solution: string }>;
  offer: string;
  lead_magnet: string;
  top_stats: string[];
  website_url: string;
  landing_page_url?: string;
  city?: string;
  service_area?: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
};

export async function POST(request: NextRequest) {
  let body: {
    session_id?: string;
    script_payload?: ScriptPayload;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const sessionId = body.session_id;
  const scriptPayload = body.script_payload;

  if (!sessionId || typeof sessionId !== "string") {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }
  if (!scriptPayload || typeof scriptPayload !== "object") {
    return NextResponse.json(
      { error: "Missing script_payload" },
      { status: 400 }
    );
  }

  const session = await getPaidSession(sessionId);
  if (!session) {
    return NextResponse.json(
      { error: "Session not found or not paid" },
      { status: 402 }
    );
  }

  const tier = getBatchTierByPriceId(session.priceId);
  if (!tier) {
    return NextResponse.json(
      { error: "Session does not match a known tier" },
      { status: 400 }
    );
  }

  // Fire lead capture to CRM (non-blocking)
  const leadNotes = [
    `[PAID — ${tier.name} — Stripe session ${session.sessionId}]`,
    `Business: ${scriptPayload.business_name}`,
    scriptPayload.city ? `City: ${scriptPayload.city}` : null,
    scriptPayload.service_area
      ? `Service Area: ${scriptPayload.service_area}`
      : null,
    "",
    "--- PAIN POINTS & SOLUTIONS ---",
    scriptPayload.pain_points_solutions
      .map((pp, i) => `${i + 1}. ${pp.pain_point} → ${pp.solution}`)
      .join("\n"),
    "",
    "--- TARGET AUDIENCE ---",
    scriptPayload.target_audience,
    "",
    "--- OFFER ---",
    scriptPayload.offer,
    "",
    "--- LEAD MAGNET ---",
    scriptPayload.lead_magnet,
    "",
    "--- CREDIBILITY ---",
    scriptPayload.top_stats.join("\n"),
    "",
    "--- URLS ---",
    `Website: ${scriptPayload.website_url}`,
    scriptPayload.landing_page_url
      ? `Landing Page: ${scriptPayload.landing_page_url}`
      : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const [firstName = "", ...rest] = scriptPayload.contact_name
    .trim()
    .split(/\s+/);
  const lastName = rest.join(" ");

  fetch(LEADS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      phone_number: scriptPayload.contact_phone,
      email: scriptPayload.contact_email,
      notes: leadNotes,
    }),
  }).catch(() => {});

  try {
    const scriptRes = await fetch(SCRIPT_GEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...scriptPayload,
        payment_reference: session.sessionId,
        tier: tier.id,
      }),
      signal: AbortSignal.timeout(30000),
    });

    const scriptBody = await scriptRes.json().catch(() => ({}));

    if (scriptRes.status !== 202) {
      console.error("[start-job] script-gen non-202:", scriptRes.status, scriptBody);
      return NextResponse.json(
        { error: "Script generation did not start" },
        { status: 502 }
      );
    }

    return NextResponse.json(scriptBody, { status: 202 });
  } catch (error) {
    console.error("[start-job] script-gen error:", error);
    return NextResponse.json(
      { error: "Script generation is unavailable" },
      { status: 502 }
    );
  }
}
