/**
 * POST /api/ai-first-audit/[id]/finalize
 *
 * Loads the DRAFT audit, validates the stored tasks, computes the result,
 * persists `resultJson` + `status=FINALIZED`, renders the PDF, fires the
 * day-0 transactional send, and schedules days 1–7 via Resend
 * `scheduledAt`. Returns the public share slug for redirect.
 *
 * Idempotent on `emailsScheduled` — re-finalizing an already-finalized
 * audit won't re-fire the sequence.
 */

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { finalizeRequestSchema, tasksListSchema } from "@/lib/validations/ai-first-audit-schemas";
import { computeResult } from "@/lib/ai-first-audit/compute-result";
import type {
  BusinessContext,
  AuditResult,
  AuditTaskInput,
  BusinessType,
  RevenueBand,
  Role,
} from "@/lib/ai-first-audit/types";
import { renderAuditPdf } from "@/lib/ai-first-audit/pdf";
import { sendAuditEmails } from "@/lib/ai-first-audit/email/send";

export const runtime = "nodejs";
export const maxDuration = 60;

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function POST(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = finalizeRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.issues },
      { status: 400 },
    );
  }

  try {
    const audit = await prisma.aiFirstAudit.findUnique({
      where: { id },
      include: { lead: true },
    });
    if (!audit) {
      return NextResponse.json({ error: "Audit not found" }, { status: 404 });
    }
    if (audit.editToken !== parsed.data.editToken) {
      return NextResponse.json({ error: "Invalid edit token" }, { status: 403 });
    }

    // If already finalized, just return the existing slug — keep idempotency.
    if (audit.status === "FINALIZED" && audit.resultJson) {
      return NextResponse.json({ shareSlug: audit.shareSlug });
    }

    const tasksParsed = tasksListSchema.safeParse(audit.tasksJson);
    if (!tasksParsed.success) {
      return NextResponse.json(
        { error: "Audit has no valid tasks scored yet", details: tasksParsed.error.issues },
        { status: 400 },
      );
    }
    const tasks: AuditTaskInput[] = tasksParsed.data.map((t) => ({
      id: t.id,
      title: t.title,
      category: t.category as AuditTaskInput["category"],
      hoursPerWeek: t.hoursPerWeek,
      cost: t.cost,
      frequency: t.frequency,
      bottleneck: t.bottleneck,
      repeatability: t.repeatability,
      judgment: t.judgment,
      errorTolerance: t.errorTolerance,
      dataAvailability: t.dataAvailability,
    }));

    const context: BusinessContext = {
      firstName: audit.lead.firstName,
      lastName: audit.lead.lastName,
      email: audit.lead.email,
      phone: audit.lead.phone,
      businessType: audit.lead.businessType as BusinessType,
      revenueBand: audit.lead.revenueBand as RevenueBand,
      role: audit.lead.role as Role,
    };

    const result: AuditResult = computeResult(context, tasks, audit.hourlyCost);

    // Persist result + finalize status first. Email sends are best-effort.
    await prisma.aiFirstAudit.update({
      where: { id: audit.id },
      data: {
        resultJson: result as unknown as object,
        status: "FINALIZED",
        finalizedAt: new Date(),
      },
    });

    // Best-effort email + PDF. Don't fail the user's flow if Resend is down.
    if (!audit.emailsScheduled) {
      try {
        const pdf = await renderAuditPdf(result);
        await sendAuditEmails({
          auditId: audit.id,
          result,
          shareSlug: audit.shareSlug,
          pdf,
          to: audit.lead.email,
        });
        await prisma.aiFirstAudit.update({
          where: { id: audit.id },
          data: { emailsScheduled: true },
        });
      } catch (err) {
        console.error("[ai-first-audit/finalize] email/PDF failed", {
          auditId: audit.id,
          err,
        });
        // Continue — the share link still works without the email.
      }
    }

    return NextResponse.json({ shareSlug: audit.shareSlug });
  } catch (err) {
    console.error("[ai-first-audit/finalize] error", err);
    return NextResponse.json({ error: "Failed to finalize audit" }, { status: 500 });
  }
}
