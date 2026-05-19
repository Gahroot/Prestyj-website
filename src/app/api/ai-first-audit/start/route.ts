/**
 * POST /api/ai-first-audit/start
 *
 * Creates a `LeadMagnetLead` + `AiFirstAudit` (DRAFT). Forwards the lead
 * to the CRM (same demo/leads endpoint the existing lead-magnet route
 * uses) and sets an httpOnly cookie holding the edit token so subsequent
 * partial saves don't have to round-trip it through the client.
 *
 * Idempotent on email — repeated submits from the same email create new
 * audits but reuse the lead row. That's deliberate: we want every audit
 * attempt tracked but don't want duplicate lead rows clogging the CRM.
 */

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadCaptureSchema } from "@/lib/validations/ai-first-audit-schemas";
import { REVENUE_BANDS } from "@/lib/ai-first-audit/types";

const CRM_BASE_URL = "https://backend-api-production-b536.up.railway.app";
const COOKIE_NAME = "ai_first_audit_token";

function generateToken(length: number): string {
  return crypto.randomUUID().replace(/-/g, "").slice(0, length);
}

function suggestedHourlyCost(revenueBand: string): number {
  const band = REVENUE_BANDS.find((b) => b.value === revenueBand);
  return band?.suggestedHourlyCost ?? 65;
}

async function forwardToCrm(payload: {
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  businessType: string;
  revenueBand: string;
  role: string;
}): Promise<void> {
  try {
    const notes = [
      "Lead Magnet: ai-first-audit",
      `Business Type: ${payload.businessType}`,
      `Revenue Band: ${payload.revenueBand}`,
      `Role: ${payload.role}`,
    ].join("\n");

    const res = await fetch(`${CRM_BASE_URL}/api/v1/p/demo/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: payload.firstName,
        last_name: payload.lastName ?? undefined,
        email: payload.email,
        phone: payload.phone ?? undefined,
        notes,
        source: "lead-magnet-ai-first-audit",
        trigger_call: false,
        trigger_text: false,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[ai-first-audit/start] CRM forward failed", {
        status: res.status,
        body: body.slice(0, 200),
      });
    }
  } catch (err) {
    console.error("[ai-first-audit/start] CRM forward error", err);
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = leadCaptureSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.issues },
      { status: 400 },
    );
  }

  const input = parsed.data;

  try {
    const lead = await prisma.leadMagnetLead.create({
      data: {
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName ?? null,
        phone: input.phone,
        businessType: input.businessType,
        revenueBand: input.revenueBand,
        role: input.role,
        source: "ai-first-audit",
      },
    });

    const editToken = generateToken(24);
    const shareSlug = generateToken(10);

    const audit = await prisma.aiFirstAudit.create({
      data: {
        leadId: lead.id,
        editToken,
        shareSlug,
        hourlyCost: suggestedHourlyCost(input.revenueBand),
        tasksJson: [],
      },
    });

    // Fire-and-forget CRM forward — don't block lead capture on CRM availability.
    void forwardToCrm({
      firstName: input.firstName,
      lastName: input.lastName ?? null,
      email: input.email,
      phone: input.phone,
      businessType: input.businessType,
      revenueBand: input.revenueBand,
      role: input.role,
    });

    const response = NextResponse.json({
      auditId: audit.id,
      editToken,
      shareSlug,
      suggestedHourlyCost: audit.hourlyCost,
    });

    response.cookies.set(COOKIE_NAME, editToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("[ai-first-audit/start] persistence error", err);
    return NextResponse.json(
      { error: "Failed to start audit. Please try again." },
      { status: 500 },
    );
  }
}
