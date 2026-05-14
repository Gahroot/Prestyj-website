import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact-schemas";

const API_BASE_URL = "https://backend-api-production-b536.up.railway.app";

export const runtime = "nodejs";

/**
 * Generic contact form submission.
 *
 * Posts to the same CRM `demo/leads` endpoint as the lead-magnet and
 * founding-cohort flows so every inbound contact lands in one place.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.issues },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — silently accept without forwarding to CRM.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ success: true, message: "Thanks — we'll be in touch." });
  }

  const firstName = data.name.split(" ")[0] ?? data.name;
  const notes = [
    "Contact form submission",
    data.phone ? `Phone: ${data.phone}` : null,
    `Message:\n${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const crmResponse = await fetch(`${API_BASE_URL}/api/v1/p/demo/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        email: data.email,
        notes,
        source: "contact-page",
        trigger_call: false,
        trigger_text: false,
      }),
    });

    if (!crmResponse.ok) {
      const errorText = await crmResponse.text();
      console.error("[contact] CRM error:", errorText);
      return NextResponse.json(
        { error: "Failed to submit. Please email us directly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] submission failed:", err);
    return NextResponse.json(
      { error: "Failed to submit. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks — we'll be in touch shortly.",
  });
}
