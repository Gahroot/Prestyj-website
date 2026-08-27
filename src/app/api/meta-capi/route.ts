import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { MARKETING_CONSENT_STORAGE_KEY } from "@/lib/consent";

const eventSchema = z.object({
  eventName: z
    .string()
    .min(1)
    .max(80)
    .regex(/^[A-Za-z0-9_ -]+$/),
  eventId: z.string().min(1).max(100),
  email: z.string().email().max(254).optional(),
  phone: z.string().max(40).optional(),
  firstName: z.string().max(100).optional(),
  lastName: z.string().max(100).optional(),
  sourceUrl: z
    .string()
    .url()
    .refine((value) => {
      const host = new URL(value).hostname;
      return host === "prestyj.com" || host.endsWith(".prestyj.com");
    })
    .optional(),
  customData: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
});

const PIXEL_ID = "892763637077397";

async function sha256(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(request: NextRequest) {
  if (request.cookies.get(MARKETING_CONSENT_STORAGE_KEY)?.value !== "granted") {
    return NextResponse.json({ error: "Marketing consent required" }, { status: 403 });
  }

  try {
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
    if (!accessToken) {
      console.warn("[META CAPI] META_CAPI_ACCESS_TOKEN is not set — skipping server event");
      return NextResponse.json({ ok: true });
    }

    const parsed = eventSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }
    const { eventName, eventId, email, phone, firstName, lastName, sourceUrl, customData } =
      parsed.data;

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

    const event: Record<string, unknown> = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: sourceUrl,
      action_source: "website",
      user_data: userData,
    };

    if (customData && Object.keys(customData).length > 0) {
      event.custom_data = customData;
    }

    const capiResponse = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [event] }),
      },
    );

    const capiBody = await capiResponse.json();

    if (!capiResponse.ok) {
      console.error("[META CAPI] Error response:", {
        status: capiResponse.status,
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
