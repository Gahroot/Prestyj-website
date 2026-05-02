import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getResend } from "@/lib/resend";
import crypto from "crypto";

export const runtime = "nodejs";

const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Prestyj <noreply@prestyj.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestyj.com";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body as { email?: unknown })?.email;
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const affiliate = await prisma.affiliate.findUnique({
    where: { email: email.trim().toLowerCase(), active: true },
  });

  // Return success even if not found to avoid email enumeration
  if (!affiliate) {
    return NextResponse.json({ ok: true });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

  await prisma.magicToken.create({
    data: {
      affiliateId: affiliate.id,
      token,
      type: "LOGIN",
      expiresAt,
    },
  });

  const verifyUrl = `${SITE_URL}/api/affiliate/verify?token=${token}`;

  await getResend().emails.send({
    from: RESEND_FROM_EMAIL,
    to: affiliate.email,
    subject: "Your Prestyj affiliate login link",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; color: #111;">
        <h2 style="margin: 0 0 16px;">Sign in to your affiliate dashboard</h2>
        <p>Hey ${affiliate.name.split(" ")[0]}, click the link below to access your dashboard. This link expires in 15 minutes.</p>
        <p style="margin: 24px 0;">
          <a href="${verifyUrl}" style="display: inline-block; background: #7058e3; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Open dashboard</a>
        </p>
        <p style="font-size: 13px; color: #666;">If you didn't request this, you can ignore it.</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
