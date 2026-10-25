#!/usr/bin/env npx tsx
/**
 * Sign the growth engine into the owner's ChatGPT/Codex subscription (same browser
 * login EZ Coder and the Codex CLI use) and hand the new session to Railway.
 *
 *   npm run growth:codex-login              # browser login → Railway variable CODEX_SESSION_JSON
 *   npm run growth:codex-login -- --file p  # browser login → local session file p (no Railway)
 *
 * This creates a SEPARATE session from EZ Coder's, so neither logs the other out.
 * The token is never printed.
 */
import { spawnSync } from "node:child_process";
import { createHash, randomBytes } from "node:crypto";
import http from "node:http";
import {
  accountIdFromToken,
  CODEX_CLIENT_ID,
  CODEX_TOKEN_URL,
  fileSessionStore,
  type CodexSession,
} from "./codex";

const REDIRECT_URI = "http://localhost:1455/auth/callback";
const RAILWAY = {
  project: "e847adf4-bb57-40ff-bc4c-d845fb7b4417",
  environment: "production",
  service: "growth-cron",
};

function waitForCode(state: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url ?? "/", "http://localhost:1455");
      if (url.pathname !== "/auth/callback") {
        res.writeHead(404).end();
        return;
      }
      const code = url.searchParams.get("code");
      const ok = code && url.searchParams.get("state") === state;
      res.writeHead(ok ? 200 : 400, { "Content-Type": "text/html" });
      res.end(
        ok
          ? "<p>Prestyj growth engine signed in. You can close this tab.</p>"
          : "<p>Login failed.</p>",
      );
      server.close();
      if (ok) resolve(code);
      else reject(new Error("Login callback was missing the code or had the wrong state"));
    });
    server.on("error", reject);
    server.listen(1455, "127.0.0.1");
    setTimeout(() => {
      server.close();
      reject(new Error("Timed out waiting for the browser login (5 minutes)"));
    }, 5 * 60_000).unref();
  });
}

async function main(): Promise<void> {
  const fileIndex = process.argv.indexOf("--file");
  const file = fileIndex === -1 ? null : process.argv[fileIndex + 1];
  const verifier = randomBytes(32).toString("base64url");
  const challenge = createHash("sha256").update(verifier).digest("base64url");
  const state = randomBytes(16).toString("hex");
  const url = new URL("https://auth.openai.com/oauth/authorize");
  for (const [key, value] of Object.entries({
    response_type: "code",
    client_id: CODEX_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: "openid profile email offline_access",
    code_challenge: challenge,
    code_challenge_method: "S256",
    state,
    prompt: "login",
    id_token_add_organizations: "true",
    codex_cli_simplified_flow: "true",
    originator: "codex_cli_rs",
  }))
    url.searchParams.set(key, value);

  const pending = waitForCode(state);
  console.log("Opening the ChatGPT sign-in page. Approve it in your browser...");
  spawnSync("open", [url.toString()]);
  console.log(`If no browser opened, visit:\n${url.toString()}\n`);
  const code = await pending;

  const res = await fetch(CODEX_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CODEX_CLIENT_ID,
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: verifier,
    }),
  });
  if (!res.ok) throw new Error(`Token exchange failed (${res.status})`);
  const data = (await res.json()) as {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  };
  const accountId = accountIdFromToken(data.access_token);
  if (!accountId) throw new Error("Signed-in token has no ChatGPT account id");
  const session: CodexSession = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: Date.now() + data.expires_in * 1000,
    accountId,
    seededAt: Date.now(),
  };

  if (file) {
    fileSessionStore(file, "").save(session);
    console.log(`Session saved to ${file}.`);
    return;
  }
  const set = spawnSync(
    "railway",
    [
      "variable",
      "set",
      "CODEX_SESSION_JSON",
      "--stdin",
      "--skip-deploys",
      "--project",
      RAILWAY.project,
      "--environment",
      RAILWAY.environment,
      "--service",
      RAILWAY.service,
    ],
    { input: JSON.stringify(session), encoding: "utf8" },
  );
  if (set.status !== 0) throw new Error(`railway variable set failed: ${set.stderr.slice(0, 300)}`);
  console.log("Signed in. Railway will use this session from its next run.");
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
