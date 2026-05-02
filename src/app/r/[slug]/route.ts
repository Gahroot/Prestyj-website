import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const COOKIE_NAME = "affiliate_ref";
const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const destination = new URL("/batch-video-ads", request.nextUrl.origin).toString();

  const affiliate = await prisma.affiliate.findUnique({
    where: { slug, active: true },
  });

  if (!affiliate) {
    return NextResponse.redirect(destination);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    undefined;
  const userAgent = request.headers.get("user-agent") ?? undefined;
  const referer = request.headers.get("referer") ?? undefined;

  // Track click without blocking the redirect
  prisma.click
    .create({ data: { affiliateId: affiliate.id, ip, userAgent, referer } })
    .catch((err) => console.error("[affiliate-click] db error:", err));

  const response = NextResponse.redirect(destination);
  response.cookies.set(COOKIE_NAME, slug, {
    maxAge: COOKIE_MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}
