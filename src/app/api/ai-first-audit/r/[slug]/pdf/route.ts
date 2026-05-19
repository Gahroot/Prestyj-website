/**
 * GET /api/ai-first-audit/r/[slug]/pdf
 *
 * Public PDF download for a finalized audit. Looks up by shareSlug
 * (no auth — slugs are unguessable, same threat model as Resend's
 * scheduled emails) and streams the rendered PDF.
 */

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { renderAuditPdf } from "@/lib/ai-first-audit/pdf";
import type { AuditResult } from "@/lib/ai-first-audit/types";

export const runtime = "nodejs";
export const maxDuration = 60;

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const { slug } = await params;

  try {
    const audit = await prisma.aiFirstAudit.findUnique({
      where: { shareSlug: slug },
    });
    if (!audit || audit.status !== "FINALIZED" || !audit.resultJson) {
      return NextResponse.json({ error: "Audit not found" }, { status: 404 });
    }

    const result = audit.resultJson as unknown as AuditResult;
    const pdf = await renderAuditPdf(result);
    const filename = `ai-first-audit-${slug}.pdf`;

    // Convert Node Buffer to Uint8Array — NextResponse body wants BodyInit.
    const body = new Uint8Array(pdf);

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Content-Length": pdf.byteLength.toString(),
        "Cache-Control": "private, max-age=300",
      },
    });
  } catch (err) {
    console.error("[ai-first-audit/pdf] error", { slug, err });
    return NextResponse.json({ error: "Failed to render PDF" }, { status: 500 });
  }
}
