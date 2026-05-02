import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAffiliateSession } from "@/lib/affiliate-auth";

export const runtime = "nodejs";

export async function GET() {
  const affiliate = await getAffiliateSession();
  if (!affiliate) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const [clicks30d, conversions, payouts] = await Promise.all([
    prisma.click.count({
      where: { affiliateId: affiliate.id, createdAt: { gte: thirtyDaysAgo } },
    }),
    prisma.conversion.findMany({
      where: { affiliateId: affiliate.id },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    prisma.payout.findMany({
      where: { affiliateId: affiliate.id },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
  ]);

  const pendingCents = conversions
    .filter((c) => c.status === "PENDING" || c.status === "APPROVED")
    .reduce((sum, c) => sum + c.commissionCents, 0);

  const paidCents = payouts
    .filter((p) => p.status === "PAID")
    .reduce((sum, p) => sum + p.amountCents, 0);

  return NextResponse.json({
    affiliate: {
      name: affiliate.name,
      email: affiliate.email,
      slug: affiliate.slug,
      commissionRate: affiliate.commissionRate,
    },
    stats: {
      clicks30d,
      totalConversions: conversions.filter((c) => c.status !== "REFUNDED")
        .length,
      pendingCents,
      paidCents,
    },
    conversions,
    payouts,
  });
}
