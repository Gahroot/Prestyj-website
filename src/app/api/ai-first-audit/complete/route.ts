import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { computeResultV2 } from "@/lib/ai-first-audit/compute-result";
import { formatCurrency } from "@/lib/ai-first-audit/format";
import { sendAuditEmailsV2 } from "@/lib/ai-first-audit/email/send";
import { isAuditResultV2 } from "@/lib/ai-first-audit/result-version";
import type { AuditResultV2 } from "@/lib/ai-first-audit/types";
import { prisma } from "@/lib/prisma";
import { completeAuditRequestSchema } from "@/lib/validations/ai-first-audit-schemas";

export const runtime = "nodejs";

const CRM_BASE_URL = "https://backend-api-production-b536.up.railway.app";

function token(length: number): string {
  return crypto.randomUUID().replaceAll("-", "").slice(0, length);
}

async function forwardToCrm(input: {
  firstName: string;
  email: string;
  businessType: string;
  result: AuditResultV2;
}): Promise<void> {
  const top = input.result.topThree[0];
  if (!top) return;
  try {
    const response = await fetch(`${CRM_BASE_URL}/api/v1/p/demo/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: input.firstName,
        email: input.email,
        source: "lead-magnet-ai-first-audit",
        trigger_call: false,
        trigger_text: false,
        notes: [
          "Lead Magnet: ai-first-audit-v2",
          `Business Type: ${input.businessType}`,
          `Top Workflow: ${top.input.title}`,
          `Recommended Agent: ${top.guide.agentRole}`,
          `Estimated Yearly Time Cost: ${formatCurrency(top.annualTimeCost)}`,
          `Readiness: ${top.readinessLabel}`,
        ].join("\n"),
      }),
    });
    if (!response.ok) {
      console.error("[ai-first-audit/complete] CRM request failed", { status: response.status });
    }
  } catch {
    console.error("[ai-first-audit/complete] CRM request failed");
  }
}

async function findCompletedBySubmissionKey(submissionKey: string) {
  return prisma.aiFirstAudit.findUnique({
    where: { submissionKey },
    include: { lead: true },
  });
}

async function retryReportEmail(
  audit: NonNullable<Awaited<ReturnType<typeof findCompletedBySubmissionKey>>>,
): Promise<"sent" | "failed" | "already-requested"> {
  if (!isAuditResultV2(audit.resultJson) || !audit.unsubscribeToken) return "already-requested";
  try {
    const delivery = await sendAuditEmailsV2({
      auditId: audit.id,
      to: audit.lead.email,
      firstName: audit.lead.firstName,
      result: audit.resultJson,
      shareSlug: audit.shareSlug,
      unsubscribeToken: audit.unsubscribeToken,
      followupOptIn: false,
    });
    return delivery.reportSent ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = completeAuditRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check the highlighted fields and try again", details: parsed.error.issues },
      { status: 400 },
    );
  }

  const input = parsed.data;
  const existing = await findCompletedBySubmissionKey(input.submissionKey);
  if (existing?.resultJson) {
    return NextResponse.json({
      reportUrl: `/ai-first-audit/r/${existing.shareSlug}`,
      emailDelivery: await retryReportEmail(existing),
    });
  }

  const result = computeResultV2(input.profile, input.workflows);
  const shareSlug = token(14);
  const unsubscribeToken = token(32);

  try {
    const audit = await prisma.$transaction(async (transaction) => {
      const matchedLead = await transaction.leadMagnetLead.findFirst({
        where: { email: input.contact.workEmail, source: "ai-first-audit" },
        orderBy: { createdAt: "desc" },
      });
      const lead = matchedLead
        ? await transaction.leadMagnetLead.update({
            where: { id: matchedLead.id },
            data: {
              firstName: input.contact.firstName,
              businessType: input.profile.businessType,
            },
          })
        : await transaction.leadMagnetLead.create({
            data: {
              email: input.contact.workEmail,
              firstName: input.contact.firstName,
              businessType: input.profile.businessType,
              revenueBand: null,
              role: null,
              source: "ai-first-audit",
            },
          });

      return transaction.aiFirstAudit.create({
        data: {
          leadId: lead.id,
          shareSlug,
          editToken: token(24),
          hourlyCost: input.profile.hourlyCost,
          tasksJson: input.workflows as unknown as Prisma.InputJsonValue,
          resultJson: result as unknown as Prisma.InputJsonValue,
          status: "FINALIZED",
          finalizedAt: new Date(),
          followupOptInAt: input.consent.followupOptIn ? new Date() : null,
          unsubscribeToken,
          submissionKey: input.submissionKey,
        },
      });
    });

    await forwardToCrm({
      firstName: input.contact.firstName,
      email: input.contact.workEmail,
      businessType: input.profile.businessType,
      result,
    });

    let emailDelivery: "sent" | "failed" = "failed";
    try {
      const delivery = await sendAuditEmailsV2({
        auditId: audit.id,
        to: input.contact.workEmail,
        firstName: input.contact.firstName,
        shareSlug: audit.shareSlug,
        unsubscribeToken,
        followupOptIn: input.consent.followupOptIn,
        result,
      });
      emailDelivery = delivery.reportSent ? "sent" : "failed";
      await prisma.aiFirstAudit.update({
        where: { id: audit.id },
        data: {
          emailsScheduled: delivery.scheduledIds.length > 0,
          scheduledEmailIds: delivery.scheduledIds as Prisma.InputJsonValue,
        },
      });
    } catch {
      console.error("[ai-first-audit/complete] report email failed", { auditId: audit.id });
    }

    return NextResponse.json({
      reportUrl: `/ai-first-audit/r/${audit.shareSlug}`,
      emailDelivery,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      const repeated = await findCompletedBySubmissionKey(input.submissionKey);
      if (repeated?.resultJson) {
        return NextResponse.json({
          reportUrl: `/ai-first-audit/r/${repeated.shareSlug}`,
          emailDelivery: await retryReportEmail(repeated),
        });
      }
    }
    console.error("[ai-first-audit/complete] persistence failed");
    return NextResponse.json({ error: "We could not save the report. Try again." }, { status: 500 });
  }
}
