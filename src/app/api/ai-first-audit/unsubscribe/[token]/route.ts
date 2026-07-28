import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

interface RouteContext {
  params: Promise<{ token: string }>;
}

function scheduledIds(value: unknown): readonly string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.length > 0);
}

async function unsubscribe(token: string): Promise<"updated" | "missing"> {
  if (!/^[a-zA-Z0-9]{20,64}$/.test(token)) return "missing";
  const audit = await prisma.aiFirstAudit.findUnique({ where: { unsubscribeToken: token } });
  if (!audit) return "missing";

  const ids = scheduledIds(audit.scheduledEmailIds);
  await prisma.aiFirstAudit.update({
    where: { id: audit.id },
    data: { unsubscribedAt: new Date(), scheduledEmailIds: [], emailsScheduled: false },
  });

  for (const id of ids) {
    try {
      await getResend().emails.cancel(id);
    } catch {
      console.error("[ai-first-audit/unsubscribe] scheduled message cancellation failed", {
        auditId: audit.id,
      });
    }
  }
  return "updated";
}

export async function POST(_request: NextRequest, { params }: RouteContext) {
  const { token } = await params;
  const result = await unsubscribe(token);
  if (result === "missing") {
    return NextResponse.json({ error: "This unsubscribe link is not valid." }, { status: 404 });
  }
  return NextResponse.json({ message: "You will not receive more audit follow-ups." });
}

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const { token } = await params;
  const result = await unsubscribe(token);
  const found = result === "updated";
  const heading = found ? "You are unsubscribed." : "This link is not valid.";
  const message = found
    ? "You will not receive more AI-First Audit follow-ups."
    : "The link may have expired or already been removed.";
  return new NextResponse(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${heading}</title></head><body style="background:#121212;color:#ececec;font-family:Arial,sans-serif;margin:0;padding:48px 24px"><main style="margin:0 auto;max-width:640px"><h1>${heading}</h1><p>${message}</p><p><a style="color:#a895ff" href="/">Return to Prestyj</a></p></main></body></html>`,
    {
      status: found ? 200 : 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    },
  );
}
