/** Service-account OAuth (JWT bearer grant) via node:crypto — no SDK needed. */
import { createSign } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { fetchJson } from "./util";

const keySchema = z.object({
  type: z.literal("service_account"),
  client_email: z.string(),
  private_key: z.string(),
  token_uri: z.literal("https://oauth2.googleapis.com/token"),
});
export type ServiceAccount = z.infer<typeof keySchema>;

/** GSC_SERVICE_ACCOUNT_JSON (raw JSON) or .secrets/gsc-service-account.json; null if absent. */
export function loadServiceAccount(root: string): ServiceAccount | null {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  const file = path.join(root, ".secrets/gsc-service-account.json");
  const text = raw && raw.trim() ? raw : existsSync(file) ? readFileSync(file, "utf8") : null;
  if (!text) return null;
  const parsed = keySchema.safeParse(JSON.parse(text));
  if (!parsed.success) throw new Error("Unsupported service-account credential shape");
  return parsed.data;
}

function b64url(input: string | Buffer): string {
  return Buffer.from(input).toString("base64url");
}

export async function getAccessToken(
  key: ServiceAccount,
  scope: string,
  now = new Date(),
): Promise<string> {
  const iat = Math.floor(now.getTime() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({ iss: key.client_email, scope, aud: key.token_uri, iat, exp: iat + 3600 }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const assertion = `${header}.${claims}.${b64url(signer.sign(key.private_key))}`;
  const body = await fetchJson(key.token_uri, {
    label: "Google token endpoint",
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }).toString(),
  });
  const token = z.object({ access_token: z.string() }).parse(body).access_token;
  return token;
}
