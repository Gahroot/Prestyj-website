import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSecret } from "@/lib/admin-auth";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  const payouts = await prisma.payout.findMany({
    include: { affiliate: { select: { name: true, slug: true, email: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json({ payouts });
}

// Create a payout batch for an affiliate covering all their APPROVED conversions
export async function POST(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  const body = (await request.json()) as Record<string, unknown>;
  const { affiliateId, method, reference } = body;

  if (typeof affiliateId !== "string") {
    return NextResponse.json({ error: "affiliateId required" }, { status: 400 });
  }

  const approved = await prisma.conversion.findMany({
    where: { affiliateId, status: "APPROVED", payoutId: null },
  });

  if (approved.length === 0) {
    return NextResponse.json(
      { error: "No approved conversions for this affiliate" },
      { status: 400 }
    );
  }

  const amountCents = approved.reduce((sum, c) => sum + c.commissionCents, 0);

  const payout = await prisma.payout.create({
    data: {
      affiliateId,
      amountCents,
      method: typeof method === "string" ? method : undefined,
      reference: typeof reference === "string" ? reference : undefined,
      status: "PENDING",
    },
  });

  // Link conversions to this payout
  await prisma.conversion.updateMany({
    where: { id: { in: approved.map((c) => c.id) } },
    data: { status: "PAID", payoutId: payout.id },
  });

  return NextResponse.json({ payout }, { status: 201 });
}

// Mark a payout as paid
export async function PATCH(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  const body = (await request.json()) as Record<string, unknown>;
  const { id, status, reference } = body;

  if (typeof id !== "string" || typeof status !== "string") {
    return NextResponse.json({ error: "id and status required" }, { status: 400 });
  }

  const payout = await prisma.payout.update({
    where: { id },
    data: {
      status: status as never,
      ...(status === "PAID" ? { paidAt: new Date() } : {}),
      ...(typeof reference === "string" ? { reference } : {}),
    },
  });

  return NextResponse.json({ payout });
}
