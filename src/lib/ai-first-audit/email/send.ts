import { getResend } from "@/lib/resend";
import type { AuditResultV1, AuditResultV2 } from "../types";
import {
  buildAuditEmailSequenceV2,
  type AuditEmailContextV2,
  type RenderedEmail,
  unsubscribeUrl,
} from "./templates";

const FROM_ADDRESS =
  process.env.AI_FIRST_AUDIT_FROM ??
  process.env.RESEND_FROM_EMAIL ??
  "Prestyj <scripts@prestyj.com>";
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://prestyj.com";

export interface SendAuditEmailsInput {
  readonly auditId: string;
  readonly result: AuditResultV1;
  readonly shareSlug: string;
  readonly pdf: Buffer;
  readonly to: string;
}

export interface SendAuditEmailsOutput {
  readonly day0Id: string | null;
  readonly scheduledIds: readonly string[];
}

export interface SendAuditEmailsV2Input {
  readonly auditId: string;
  readonly to: string;
  readonly firstName: string;
  readonly result: AuditResultV2;
  readonly shareSlug: string;
  readonly unsubscribeToken: string;
  readonly followupOptIn: boolean;
  readonly now?: Date;
}

export interface SendAuditEmailsV2Output {
  readonly reportSent: boolean;
  readonly reportEmailId: string | null;
  readonly scheduledIds: readonly string[];
}

function scheduledAt(dayOffset: number, from: Date): string {
  return new Date(from.getTime() + dayOffset * 24 * 60 * 60 * 1000).toISOString();
}

function legacyEmail(input: SendAuditEmailsInput): RenderedEmail {
  const url = `${BASE_URL}/ai-first-audit/r/${input.shareSlug}`;
  return {
    subject: "Your AI-First Audit is ready",
    text: `Your saved AI-First Audit is ready.\n\nView it here: ${url}`,
    html: `<h1>Your AI-First Audit is ready.</h1><p><a href="${url}">View your saved audit</a></p>`,
  };
}

/** Legacy version 1 delivery remains available for the historical finalize route. */
export async function sendAuditEmails(input: SendAuditEmailsInput): Promise<SendAuditEmailsOutput> {
  const email = legacyEmail(input);
  const { data, error } = await getResend().emails.send(
    {
      from: FROM_ADDRESS,
      to: input.to,
      subject: email.subject,
      html: email.html,
      text: email.text,
      attachments: [{ filename: "ai-first-audit.pdf", content: input.pdf }],
    },
    { idempotencyKey: `ai-first-audit-v1-${input.auditId}` },
  );
  if (error) throw new Error("Legacy audit email failed");
  return { day0Id: data?.id ?? null, scheduledIds: [] };
}

export async function sendAuditEmailsV2(
  input: SendAuditEmailsV2Input,
): Promise<SendAuditEmailsV2Output> {
  const context: AuditEmailContextV2 = {
    firstName: input.firstName,
    result: input.result,
    shareSlug: input.shareSlug,
    unsubscribeToken: input.unsubscribeToken,
    baseUrl: BASE_URL,
  };
  const sequence = buildAuditEmailSequenceV2(context);
  const report = sequence[0];
  if (!report) throw new Error("Report email template is missing");

  const { data: reportData, error: reportError } = await getResend().emails.send(
    {
      from: FROM_ADDRESS,
      to: input.to,
      subject: report.subject,
      html: report.html,
      text: report.text,
    },
    { idempotencyKey: `ai-first-audit-v2-report-${input.auditId}` },
  );

  const scheduledIds: string[] = [];
  if (input.followupOptIn) {
    const listUnsubscribe = unsubscribeUrl(context);
    for (const step of sequence.slice(1)) {
      const { data, error } = await getResend().emails.send(
        {
          from: FROM_ADDRESS,
          to: input.to,
          subject: step.subject,
          html: step.html,
          text: step.text,
          scheduledAt: scheduledAt(step.dayOffset, input.now ?? new Date()),
          headers: {
            "List-Unsubscribe": `<${listUnsubscribe}>`,
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        },
        { idempotencyKey: `ai-first-audit-v2-${step.kind}-${input.auditId}` },
      );
      if (!error && data) scheduledIds.push(data.id);
    }
  }

  return {
    reportSent: !reportError,
    reportEmailId: reportData?.id ?? null,
    scheduledIds,
  };
}
