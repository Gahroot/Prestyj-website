import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { getResend } from "@/lib/resend";
import {
  contentEngineIntakeSchema,
  PLATFORM_OPTIONS,
  INDUSTRY_OPTIONS,
} from "@/lib/validations/content-engine-intake-schemas";

export const runtime = "nodejs";
export const maxDuration = 30;

const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Prestyj <noreply@prestyj.com>";
const INTAKE_NOTIFICATION_TO =
  process.env.INTAKE_NOTIFICATION_EMAIL ??
  process.env.RESEND_NOTIFICATION_EMAIL ??
  "hello@prestyj.com";
const INTAKE_STORAGE_DIR =
  process.env.INTAKE_STORAGE_DIR ?? path.join(process.cwd(), ".data", "intake");

function labelFor<T extends string>(
  value: T,
  options: ReadonlyArray<{ value: string; label: string }>,
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#555;vertical-align:top;width:200px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;white-space:pre-wrap;">${escapeHtml(value)}</td>
    </tr>`;
}

async function persistSubmission(
  id: string,
  data: Record<string, unknown>,
): Promise<string | null> {
  // Best-effort write to disk for local/self-hosted environments.
  // On read-only serverless filesystems this will fail silently — the
  // email send remains the source of record.
  try {
    await fs.mkdir(INTAKE_STORAGE_DIR, { recursive: true });
    const file = path.join(INTAKE_STORAGE_DIR, `${id}.json`);
    await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
    return file;
  } catch (err) {
    console.warn("[content-engine-intake] could not persist to disk:", err);
    return null;
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contentEngineIntakeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const submittedAt = new Date().toISOString();
  const submissionId = `intake_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const platformsLabel = data.currentPlatforms.map((p) => labelFor(p, PLATFORM_OPTIONS)).join(", ");
  const industryLabel = labelFor(data.industry, INDUSTRY_OPTIONS);

  const handles = Object.entries(data.socialHandles)
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => `${labelFor(k, PLATFORM_OPTIONS)}: ${v}`)
    .join("\n");

  const colorsBlock = [
    `Primary: ${data.primaryColor}`,
    data.secondaryColor ? `Secondary: ${data.secondaryColor}` : null,
    data.accentColor ? `Accent: ${data.accentColor}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  // Persist a structured copy (best-effort).
  const storedAt = await persistSubmission(submissionId, {
    submissionId,
    submittedAt,
    ...data,
  });

  // Build email
  const subject = `New Content Swarm Intake: ${data.businessName} (${industryLabel})`;
  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:680px;margin:0 auto;padding:24px;color:#111;">
      <h2 style="margin:0 0 4px;">New Content Swarm Intake</h2>
      <p style="margin:0 0 20px;color:#666;font-size:13px;">Submitted ${escapeHtml(submittedAt)} · ID ${escapeHtml(submissionId)}</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        ${row("Business", data.businessName)}
        ${row("Industry", industryLabel)}
        ${row("Website", data.website ?? "")}
        ${row("Contact Name", data.contactName)}
        ${row("Contact Email", data.contactEmail)}
        ${row("Target Audience", data.targetAudience)}
        ${row("Brand Voice", data.brandVoice)}
        ${row("Key Offers", data.keyOffers)}
        ${row("Current Platforms", platformsLabel)}
        ${row("Social Handles", handles || "—")}
        ${row("Brand Colors", colorsBlock)}
        ${row("Logo File", data.logoFileName ?? (data.logoDataUrl ? "Attached" : "—"))}
        ${row("Logo Notes", data.logoNotes ?? "")}
      </table>
      <p style="margin-top:20px;color:#888;font-size:12px;">
        ${storedAt ? `Stored: ${escapeHtml(storedAt)}` : "Not persisted to disk (serverless environment)."}
      </p>
    </div>
  `;

  const attachments = data.logoDataUrl
    ? [
        {
          filename: data.logoFileName ?? "logo",
          content: data.logoDataUrl.split(",")[1] ?? "",
        },
      ]
    : undefined;

  try {
    await getResend().emails.send({
      from: RESEND_FROM_EMAIL,
      to: INTAKE_NOTIFICATION_TO,
      replyTo: data.contactEmail,
      subject,
      html,
      ...(attachments !== undefined && { attachments }),
    });

    const firstNameForSubject = data.contactName.split(" ")[0] ?? data.contactName;
    // Confirmation to the submitter.
    await getResend().emails.send({
      from: RESEND_FROM_EMAIL,
      to: data.contactEmail,
      subject: `We got your brand kit, ${firstNameForSubject} — what happens next`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#111;">
          <h2 style="margin:0 0 12px;">Your brand kit is in 🎉</h2>
          <p>Hey ${escapeHtml(firstNameForSubject)}, thanks for sending over the details for <strong>${escapeHtml(data.businessName)}</strong>. Our team will review your brand kit before our call so we can hit the ground running.</p>
          <p><strong>Next step:</strong> book a 30-minute strategy call so we can walk you through your custom plan and get you live in 24 hours.</p>
          <p style="margin:24px 0;">
            <a href="https://prestyj.com/book-demo?intake=success" style="display:inline-block;background:#7058e3;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600;">Book your strategy call</a>
          </p>
          <p style="font-size:13px;color:#666;">Reply to this email if anything changes — we'll update your file before the call.</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("[content-engine-intake] email send failed:", err);
    return NextResponse.json(
      {
        error: "Failed to send intake notification",
        message: err instanceof Error ? err.message : "Unknown error",
        submissionId,
      },
      { status: 502 },
    );
  }

  console.log(
    `[content-engine-intake] received submission ${submissionId} for ${data.businessName}`,
  );

  return NextResponse.json({
    success: true,
    submissionId,
    message: "Intake received. Confirmation email sent.",
  });
}
