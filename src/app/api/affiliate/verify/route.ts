import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/affiliate-auth";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestyj.com";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const failUrl = `${SITE_URL}/affiliate?error=invalid`;

  if (!token) return NextResponse.redirect(failUrl);

  const record = await prisma.magicToken.findUnique({
    where: { token, type: "LOGIN" },
  });

  if (!record || record.usedAt || record.expiresAt < new Date()) {
    return NextResponse.redirect(failUrl);
  }

  // Mark login token as used
  await prisma.magicToken.update({
    where: { id: record.id },
    data: { usedAt: new Date() },
  });

  // Create a long-lived session token
  const sessionToken = crypto.randomBytes(32).toString("hex");
  await prisma.magicToken.create({
    data: {
      affiliateId: record.affiliateId,
      token: sessionToken,
      type: "SESSION",
      expiresAt: new Date(Date.now() + SESSION_MAX_AGE * 1000),
    },
  });

  const response = NextResponse.redirect(`${SITE_URL}/affiliate/dashboard`);
  response.cookies.set(SESSION_COOKIE, sessionToken, {
    maxAge: SESSION_MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}
