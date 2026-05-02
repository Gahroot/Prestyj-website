import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSecret } from "@/lib/admin-auth";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  const affiliates = await prisma.affiliate.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { clicks: true, conversions: true } },
    },
  });

  return NextResponse.json({ affiliates });
}

export async function POST(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    name,
    email,
    slug,
    commissionRate = 0.2,
    payoutEmail,
    payoutNotes,
  } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof slug !== "string"
  ) {
    return NextResponse.json(
      { error: "name, email, and slug are required" },
      { status: 400 }
    );
  }

  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json(
      { error: "slug must be lowercase alphanumeric with hyphens only" },
      { status: 400 }
    );
  }

  try {
    const affiliate = await prisma.affiliate.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        slug: slug.trim().toLowerCase(),
        commissionRate: typeof commissionRate === "number" ? commissionRate : 0.2,
        payoutEmail:
          typeof payoutEmail === "string" ? payoutEmail.trim() : undefined,
        payoutNotes:
          typeof payoutNotes === "string" ? payoutNotes.trim() : undefined,
      },
    });
    return NextResponse.json({ affiliate }, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes("Unique constraint")) {
      return NextResponse.json(
        { error: "Email or slug already in use" },
        { status: 409 }
      );
    }
    throw err;
  }
}

export async function PATCH(request: NextRequest) {
  if (!requireAdminSecret(request)) return unauthorized();

  const body = (await request.json()) as Record<string, unknown>;
  const { id, ...data } = body;

  if (typeof id !== "string") {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }

  const affiliate = await prisma.affiliate.update({
    where: { id },
    data: {
      ...(typeof data.name === "string" ? { name: data.name } : {}),
      ...(typeof data.commissionRate === "number"
        ? { commissionRate: data.commissionRate }
        : {}),
      ...(typeof data.active === "boolean" ? { active: data.active } : {}),
      ...(typeof data.payoutEmail === "string"
        ? { payoutEmail: data.payoutEmail }
        : {}),
      ...(typeof data.payoutNotes === "string"
        ? { payoutNotes: data.payoutNotes }
        : {}),
    },
  });

  return NextResponse.json({ affiliate });
}
