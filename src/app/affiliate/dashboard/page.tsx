import { redirect } from "next/navigation";
import { getAffiliateSession } from "@/lib/affiliate-auth";
import { prisma } from "@/lib/prisma";
import { AffiliateDashboardClient } from "./affiliate-dashboard-client";

export default async function AffiliateDashboardPage() {
  const affiliate = await getAffiliateSession();
  if (!affiliate) redirect("/affiliate");

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

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

  const hasApproved = conversions.some(
    (c) => c.status === "APPROVED" && !c.payoutId
  );

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestyj.com";
  const affiliateLink = `${siteUrl}/r/${affiliate.slug}`;

  return (
    <AffiliateDashboardClient
      affiliate={{
        name: affiliate.name,
        slug: affiliate.slug,
        commissionRate: affiliate.commissionRate,
        payoutEmail: affiliate.payoutEmail,
      }}
      stats={{ clicks30d, pendingCents, paidCents }}
      conversions={conversions.map((c) => ({
        id: c.id,
        tier: c.tier,
        amountCents: c.amountCents,
        commissionCents: c.commissionCents,
        status: c.status,
        customerEmail: c.customerEmail,
        createdAt: c.createdAt.toISOString(),
      }))}
      payouts={payouts.map((p) => ({
        id: p.id,
        amountCents: p.amountCents,
        method: p.method,
        status: p.status,
        paidAt: p.paidAt?.toISOString() ?? null,
        createdAt: p.createdAt.toISOString(),
      }))}
      affiliateLink={affiliateLink}
      hasApproved={hasApproved}
    />
  );
}
