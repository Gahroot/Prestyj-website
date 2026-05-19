/**
 * Resend wrapper for the AI-First Audit 7-day sequence.
 *
 * Day 0 sends immediately with the PDF attachment. Days 1–7 use Resend's
 * `scheduledAt` parameter so we don't need a cron — Resend holds the
 * queue and dispatches at the right moment.
 */

import { getResend } from "@/lib/resend";
import type { AuditResult } from "../types";
import { SEQUENCE, type EmailContext } from "./templates";

const FROM_ADDRESS =
  process.env.AI_FIRST_AUDIT_FROM ??
  process.env.RESEND_FROM_EMAIL ??
  "Prestyj <scripts@prestyj.com>";
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://prestyj.com";

export interface SendAuditEmailsInput {
  readonly auditId: string;
  readonly result: AuditResult;
  readonly shareSlug: string;
  readonly pdf: Buffer;
  readonly to: string;
}

export interface SendAuditEmailsOutput {
  readonly day0Id: string | null;
  readonly scheduledIds: readonly string[];
}

function dayOffsetIso(offsetDays: number, from: Date = new Date()): string {
  const ms = from.getTime() + offsetDays * 24 * 60 * 60 * 1000;
  return new Date(ms).toISOString();
}

export async function sendAuditEmails(input: SendAuditEmailsInput): Promise<SendAuditEmailsOutput> {
  const resend = getResend();
  const ctx: EmailContext = {
    lead: {
      firstName: input.result.context.firstName,
      email: input.to,
    },
    result: input.result,
    shareSlug: input.shareSlug,
    baseUrl: BASE_URL,
  };

  const scheduledIds: string[] = [];
  let day0Id: string | null = null;

  for (const step of SEQUENCE) {
    const rendered = step.render(ctx);

    try {
      if (step.dayOffset === 0) {
        const { data, error } = await resend.emails.send({
          from: FROM_ADDRESS,
          to: input.to,
          subject: rendered.subject,
          html: rendered.html,
          text: rendered.text,
          attachments: [
            {
              filename: "ai-first-audit.pdf",
              content: input.pdf,
            },
          ],
        });
        if (error) {
          console.error("[ai-first-audit/email] day0 send error", {
            auditId: input.auditId,
            error,
          });
        } else if (data) {
          day0Id = data.id;
          console.log("[ai-first-audit/email] day0 sent", {
            auditId: input.auditId,
            resendId: data.id,
          });
        }
      } else {
        const scheduledAt = dayOffsetIso(step.dayOffset);
        const { data, error } = await resend.emails.send({
          from: FROM_ADDRESS,
          to: input.to,
          subject: rendered.subject,
          html: rendered.html,
          text: rendered.text,
          scheduledAt,
        });
        if (error) {
          console.error("[ai-first-audit/email] scheduled send error", {
            auditId: input.auditId,
            event: step.event,
            error,
          });
        } else if (data) {
          scheduledIds.push(data.id);
          console.log("[ai-first-audit/email] scheduled", {
            auditId: input.auditId,
            event: step.event,
            scheduledAt,
            resendId: data.id,
          });
        }
      }
    } catch (err) {
      console.error("[ai-first-audit/email] send threw", {
        auditId: input.auditId,
        event: step.event,
        err,
      });
    }
  }

  return { day0Id, scheduledIds };
}
