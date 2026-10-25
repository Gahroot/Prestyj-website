import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { qualificationFormSchema } from "@/lib/validations/form-schemas";

const API_BASE_URL = "https://backend-api-production-b536.up.railway.app";

export const runtime = "nodejs";

const bodySchema = z.object({
  data: qualificationFormSchema,
  attribution: z.record(z.string().regex(/^pj_[a-z_]+$/), z.string().max(300)).default({}),
});

/**
 * Records a /book-demo qualification as a CRM lead, so visitors who qualify but
 * do not finish booking are not lost. Never triggers an automated call or text.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { data, attribution } = parsed.data;
  const notes = [
    "Workflow demo request (/book-demo)",
    data.workflow ? `Workflow: ${data.workflow}` : null,
    ...Object.entries(attribution).map(([key, value]) => `${key}: ${value}`),
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/p/demo/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: data.firstName.split(" ")[0] ?? data.firstName,
        last_name: data.firstName.split(" ").slice(1).join(" ") || undefined,
        email: data.email,
        notes,
        source: "institutional-book-demo",
        trigger_call: false,
        trigger_text: false,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("[demo-request] CRM rejected submission", response.status);
      return NextResponse.json({ error: "CRM unavailable" }, { status: 502 });
    }
  } catch (error) {
    console.error("[demo-request] submission failed:", error);
    return NextResponse.json({ error: "CRM unavailable" }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
