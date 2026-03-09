import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = "892763637077397";

async function sha256(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(request: NextRequest) {
  try {
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
    if (!accessToken) {
      console.warn("[META CAPI] META_CAPI_ACCESS_TOKEN is not set — skipping server event");
      return NextResponse.json({ ok: true });
    }

    const body = await request.json();
    const { eventName, eventId, email, phone, firstName, lastName, sourceUrl } =
      body as {
        eventName: string;
        eventId: string;
        email?: string;
        phone?: string;
        firstName?: string;
        lastName?: string;
        sourceUrl?: string;
      };

    // Build user_data with hashed PII
    const userData: Record<string, string> = {};

    if (email) userData.em = await sha256(email);
    if (phone) userData.ph = await sha256(phone.replace(/\D/g, ""));
    if (firstName) userData.fn = await sha256(firstName);
    if (lastName) userData.ln = await sha256(lastName);

    // Extract IP and User-Agent from request headers for match quality
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const clientUserAgent = request.headers.get("user-agent") || undefined;

    if (clientIp) userData.client_ip_address = clientIp;
    if (clientUserAgent) userData.client_user_agent = clientUserAgent;

    const event = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: sourceUrl,
      action_source: "website",
      user_data: userData,
    };

    const capiResponse = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [event] }),
      }
    );

    const capiBody = await capiResponse.json();

    if (!capiResponse.ok) {
      console.error("[META CAPI] Error response:", {
        status: capiResponse.status,
        body: capiBody,
        eventName,
        eventId,
      });
    } else {
      console.log("[META CAPI] Success:", {
        eventName,
        eventId,
        fbtrace: capiBody.fbtrace_id,
        eventsReceived: capiBody.events_received,
      });
    }
  } catch (error) {
    console.error("[META CAPI] Fetch failed:", error);
  }

  return NextResponse.json({ ok: true });
}
