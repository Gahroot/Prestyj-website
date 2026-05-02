import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSecret } from "@/lib/admin-auth";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  const { searchParams } = request.nextUrl;
  const affiliateId = searchParams.get("affiliateId");
  const status = searchParams.get("status");

  const conversions = await prisma.conversion.findMany({
    where: {
      ...(affiliateId ? { affiliateId } : {}),
      ...(status ? { status: status as never } : {}),
    },
    include: { affiliate: { select: { name: true, slug: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json({ conversions });
}

export async function PATCH(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  const body = (await request.json()) as Record<string, unknown>;
  const { id, status } = body;

  if (typeof id !== "string" || typeof status !== "string") {
    return NextResponse.json({ error: "id and status required" }, { status: 400 });
  }

  const allowed = ["APPROVED", "REFUNDED"];
  if (!allowed.includes(status)) {
    return NextResponse.json(
      { error: "status must be APPROVED or REFUNDED" },
      { status: 400 }
    );
  }

  const conversion = await prisma.conversion.update({
    where: { id },
    data: {
      status: status as never,
      ...(status === "APPROVED" ? { approvedAt: new Date() } : {}),
      ...(status === "REFUNDED" ? { refundedAt: new Date() } : {}),
    },
  });

  return NextResponse.json({ conversion });
}
