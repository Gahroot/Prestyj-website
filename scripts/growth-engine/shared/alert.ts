/**
 * Exception log + email alerts for the growth engine.
 * Every component calls `raiseException`; critical ones are emailed immediately.
 * Email uses Resend (RESEND_API_KEY). Missing key → logged only, never thrown.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { Resend } from "resend";
import { EXCEPTIONS_FILE, exceptionSchema, type GrowthException } from "./contracts";

export const ALERT_TO = process.env.GROWTH_ALERT_EMAIL ?? "nolan@prestyj.com";
export const ALERT_FROM = process.env.GROWTH_ALERT_FROM ?? "Prestyj Growth Engine <growth@prestyj.com>";

export async function sendEmail(subject: string, html: string, text: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn(`[alert] RESEND_API_KEY missing; email not sent: ${subject}`);
    return false;
  }
  const { error } = await new Resend(key).emails.send({
    from: ALERT_FROM,
    to: ALERT_TO,
    subject,
    html,
    text,
  });
  if (error) {
    console.error(`[alert] Resend error: ${error.message}`);
    return false;
  }
  return true;
}

function readExceptions(root: string): GrowthException[] {
  const file = path.join(root, EXCEPTIONS_FILE);
  if (!existsSync(file)) return [];
  return exceptionSchema.array().parse(JSON.parse(readFileSync(file, "utf8")));
}

export async function raiseException(
  input: Omit<GrowthException, "id" | "raisedAt" | "resolvedAt">,
  root = process.cwd(),
): Promise<GrowthException> {
  const raisedAt = new Date().toISOString();
  const entry: GrowthException = {
    ...input,
    id: `${raisedAt.replace(/[^0-9]/g, "").slice(0, 14)}-${input.component}`,
    raisedAt,
    resolvedAt: null,
  };
  const file = path.join(root, EXCEPTIONS_FILE);
  mkdirSync(path.dirname(file), { recursive: true });
  const all = [...readExceptions(root), entry].slice(-500);
  writeFileSync(file, `${JSON.stringify(all, null, 2)}\n`);
  console[input.severity === "info" ? "log" : "warn"](
    `[exception:${input.severity}] ${input.component}: ${input.message}`,
  );
  if (input.severity === "critical") {
    const subject = `[Prestyj growth engine] ${input.component} needs attention`;
    await sendEmail(subject, `<p>${escapeHtml(input.message)}</p>`, input.message);
  }
  return entry;
}

export function openExceptions(root = process.cwd()): GrowthException[] {
  return readExceptions(root).filter((e) => e.resolvedAt === null);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
