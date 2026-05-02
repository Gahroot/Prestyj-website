import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import type { Affiliate } from "@prisma/client";

export const SESSION_COOKIE = "affiliate_session";
export const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

export async function getAffiliateSession(): Promise<Affiliate | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const record = await prisma.magicToken.findUnique({
    where: { token, type: "SESSION" },
    include: { affiliate: true },
  });

  if (!record || record.expiresAt < new Date()) return null;

  return record.affiliate;
}
