import { Resend } from "resend";

let cachedClient: Resend | null = null;

export function getResend(): Resend {
  if (cachedClient) return cachedClient;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  cachedClient = new Resend(key);
  return cachedClient;
}
