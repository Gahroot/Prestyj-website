import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { getAffiliateSession } from "@/lib/affiliate-auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "ngrout70@gmail.com";
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Prestyj <noreply@prestyj.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestyj.com";

export async function POST() {
  const affiliate = await getAffiliateSession();
  if (!affiliate) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const approved = await prisma.conversion.findMany({
    where: { affiliateId: affiliate.id, status: "APPROVED", payoutId: null },
  });

  if (approved.length === 0) {
    return NextResponse.json(
      { error: "No approved conversions available for payout" },
      { status: 400 }
    );
  }

  const totalCents = approved.reduce((sum, c) => sum + c.commissionCents, 0);
  const totalFormatted = `$${(totalCents / 100).toFixed(2)}`;

  await getResend().emails.send({
    from: RESEND_FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `Payout request — ${affiliate.name} (${totalFormatted})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111;">
        <h2 style="margin: 0 0 16px;">Affiliate payout request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; color: #555;">Affiliate</td><td style="padding: 6px 0; font-weight: 600;">${affiliate.name}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Email</td><td style="padding: 6px 0;">${affiliate.email}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Payout email</td><td style="padding: 6px 0;">${affiliate.payoutEmail ?? "not set"}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Amount</td><td style="padding: 6px 0; font-weight: 600; font-size: 18px;">${totalFormatted}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Conversions</td><td style="padding: 6px 0;">${approved.length}</td></tr>
        </table>
        ${affiliate.payoutNotes ? `<p style="color: #555;"><strong>Notes:</strong> ${affiliate.payoutNotes}</p>` : ""}
        <p style="margin: 24px 0;">
          <a href="${SITE_URL}/admin/affiliates" style="display: inline-block; background: #7058e3; color: #fff; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: 600;">Open admin panel</a>
        </p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
