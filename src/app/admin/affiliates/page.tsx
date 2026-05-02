import { redirect } from "next/navigation";
import { isAdminAuthed } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { AdminAffiliatesClient } from "./admin-affiliates-client";

export default async function AdminAffiliatesPage() {
  const authed = await isAdminAuthed();
  if (!authed) redirect("/admin/login");

  const affiliates = await prisma.affiliate.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { clicks: true, conversions: true } },
    },
  });

  const conversions = await prisma.conversion.findMany({
    where: { status: { in: ["PENDING", "APPROVED"] } },
    include: { affiliate: { select: { name: true, slug: true } } },
    orderBy: { createdAt: "desc" },
  });

  const payouts = await prisma.payout.findMany({
    where: { status: "PENDING" },
    include: { affiliate: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  const adminSecret = process.env.ADMIN_SECRET ?? "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestyj.com";

  return (
    <AdminAffiliatesClient
      adminSecret={adminSecret}
      siteUrl={siteUrl}
      affiliates={affiliates.map((a) => ({
        id: a.id,
        name: a.name,
        email: a.email,
        slug: a.slug,
        commissionRate: a.commissionRate,
        balanceCents: a.balanceCents,
        active: a.active,
        payoutEmail: a.payoutEmail,
        createdAt: a.createdAt.toISOString(),
        clickCount: a._count.clicks,
        conversionCount: a._count.conversions,
      }))}
      conversions={conversions.map((c) => ({
        id: c.id,
        affiliateName: c.affiliate.name,
        affiliateSlug: c.affiliate.slug,
        tier: c.tier,
        amountCents: c.amountCents,
        commissionCents: c.commissionCents,
        status: c.status,
        customerEmail: c.customerEmail,
        createdAt: c.createdAt.toISOString(),
      }))}
      pendingPayouts={payouts.map((p) => ({
        id: p.id,
        affiliateName: p.affiliate.name,
        affiliateEmail: p.affiliate.email,
        amountCents: p.amountCents,
        method: p.method,
        status: p.status,
        createdAt: p.createdAt.toISOString(),
      }))}
    />
  );
}
