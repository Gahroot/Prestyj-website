/**
 * PATCH /api/ai-first-audit/[id]
 *
 * Token-gated partial save. Body: { editToken, patch }. Merges the patch
 * into `tasksJson` / `hourlyCost`. Fully idempotent — the wizard fires
 * this on every "Next" so a user can bail mid-flow and still have their
 * progress in the database.
 *
 * Finalized audits are read-only; we reject patches once status=FINALIZED.
 */

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";
import { patchRequestSchema } from "@/lib/validations/ai-first-audit-schemas";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = patchRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.issues },
      { status: 400 },
    );
  }

  const { editToken, patch } = parsed.data;

  try {
    const audit = await prisma.aiFirstAudit.findUnique({ where: { id } });
    if (!audit) {
      return NextResponse.json({ error: "Audit not found" }, { status: 404 });
    }
    if (audit.editToken !== editToken) {
      return NextResponse.json({ error: "Invalid edit token" }, { status: 403 });
    }
    if (audit.status === "FINALIZED") {
      return NextResponse.json(
        { error: "Audit is finalized and cannot be edited" },
        { status: 409 },
      );
    }

    const updateData: Prisma.AiFirstAuditUpdateInput = {};
    if (patch.tasks !== undefined) {
      updateData.tasksJson = patch.tasks as unknown as Prisma.InputJsonValue;
    }
    if (patch.hourlyCost !== undefined) {
      updateData.hourlyCost = patch.hourlyCost;
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ ok: true, auditId: audit.id });
    }

    await prisma.aiFirstAudit.update({
      where: { id: audit.id },
      data: updateData,
    });

    return NextResponse.json({ ok: true, auditId: audit.id });
  } catch (err) {
    console.error("[ai-first-audit/PATCH] error", err);
    return NextResponse.json({ error: "Failed to save progress" }, { status: 500 });
  }
}
