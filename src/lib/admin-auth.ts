import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";

export async function isAdminAuthed(): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === secret;
}

export function requireAdminSecret(request: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const authHeader = request.headers.get("x-admin-secret");
  return authHeader === secret;
}
