/**
 * ChatGPT/Codex subscription provider (same transport EZ Coder uses): the Codex
 * Responses endpoint with a ChatGPT OAuth session, so model calls draw on the
 * subscription instead of a metered API key.
 *
 * Session storage: refresh tokens ROTATE on every refresh, so exactly one place may
 * hold a session. The engine keeps its own session in a JSON file (Railway volume
 * `/data/codex-session.json`, or CODEX_SESSION_FILE). `CODEX_SESSION_JSON` seeds
 * it; a seed with a newer `seededAt` than the file replaces it (that is how a fresh
 * login from `npm run growth:codex-login` is picked up).
 */
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { LlmAuthError, type ContentLlm, type LlmRequest } from "./llm";

export const CODEX_CLIENT_ID = "app_EMoamEEZ73f0CkXaXp7hrann";
export const CODEX_TOKEN_URL = "https://auth.openai.com/oauth/token";
const CODEX_RESPONSES_URL = "https://chatgpt.com/backend-api/codex/responses";
const CODEX_CLIENT_VERSION = "0.161.0";
const REFRESH_MARGIN_MS = 5 * 60_000;

export const codexSessionSchema = z.object({
  accessToken: z.string().min(20),
  refreshToken: z.string().min(10),
  expiresAt: z.number(),
  accountId: z.string().min(1),
  seededAt: z.number().default(0),
});
export type CodexSession = z.infer<typeof codexSessionSchema>;

/** Usage limit reached on the subscription; callers may fall back to another provider. */
export class CodexUsageLimitError extends Error {}

export type SessionStore = { load(): CodexSession | null; save(session: CodexSession): void };

export function defaultSessionFile(): string {
  if (process.env.CODEX_SESSION_FILE) return process.env.CODEX_SESSION_FILE;
  return existsSync("/data") ? "/data/codex-session.json" : "";
}

export function fileSessionStore(
  file: string,
  seedJson = process.env.CODEX_SESSION_JSON,
): SessionStore {
  const parse = (raw: string | undefined): CodexSession | null => {
    if (!raw?.trim()) return null;
    const parsed = codexSessionSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  };
  const save = (session: CodexSession): void => {
    if (!file) return;
    mkdirSync(path.dirname(file), { recursive: true });
    const tmp = `${file}.tmp`;
    writeFileSync(tmp, JSON.stringify(session), { mode: 0o600 });
    renameSync(tmp, file);
  };
  return {
    load() {
      const stored = file && existsSync(file) ? parse(readFileSync(file, "utf8")) : null;
      const seed = parse(seedJson);
      if (seed && (!stored || seed.seededAt > stored.seededAt)) {
        save(seed);
        return seed;
      }
      return stored ?? seed;
    },
    save,
  };
}

export function accountIdFromToken(accessToken: string): string | null {
  try {
    const payload = JSON.parse(
      Buffer.from(accessToken.split(".")[1] ?? "", "base64url").toString(),
    );
    const id = payload?.["https://api.openai.com/auth"]?.chatgpt_account_id;
    return typeof id === "string" && id ? id : null;
  } catch {
    return null;
  }
}

export async function refreshCodexSession(
  session: CodexSession,
  fetcher: typeof fetch = fetch,
): Promise<CodexSession> {
  const res = await fetcher(CODEX_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: session.refreshToken,
      client_id: CODEX_CLIENT_ID,
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok)
    throw new LlmAuthError(
      `ChatGPT/Codex session refresh failed (${res.status}); run \`npm run growth:codex-login\` to sign in again`,
    );
  const data = (await res.json()) as {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
  };
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? session.refreshToken,
    expiresAt: Date.now() + data.expires_in * 1000,
    accountId: accountIdFromToken(data.access_token) ?? session.accountId,
    seededAt: session.seededAt,
  };
}

type SseEvent = { type?: string; delta?: string; item?: CodexItem; response?: CodexResponse };
type CodexItem = { type?: string; content?: { type?: string; text?: string }[]; action?: unknown };
type CodexResponse = {
  usage?: { input_tokens?: number; output_tokens?: number };
  error?: { message?: string };
  incomplete_details?: { reason?: string };
};

/** Parse the SSE body: final answer = text of the last message item (after any web searches). */
export function parseCodexStream(body: string): {
  text: string;
  inputTokens: number;
  outputTokens: number;
  webSearches: number;
  error: string | null;
} {
  const events: SseEvent[] = [];
  for (const line of body.split("\n")) {
    if (!line.startsWith("data:")) continue;
    try {
      events.push(JSON.parse(line.slice(5)) as SseEvent);
    } catch {
      // keep-alive or partial line
    }
  }
  const items = events
    .filter((e) => e.type === "response.output_item.done")
    .map((e) => e.item ?? {});
  const messages = items.filter((item) => item.type === "message");
  const last = messages.at(-1);
  let text = (last?.content ?? [])
    .filter((part) => part.type === "output_text")
    .map((part) => part.text ?? "")
    .join("");
  if (!text)
    text = events
      .filter((e) => e.type === "response.output_text.delta")
      .map((e) => e.delta ?? "")
      .join("");
  const end = events.find(
    (e) =>
      e.type === "response.completed" ||
      e.type === "response.failed" ||
      e.type === "response.incomplete",
  );
  const usage = end?.response?.usage ?? {};
  const failed = events.find((e) => e.type === "response.failed" || e.type === "error");
  return {
    text,
    inputTokens: usage.input_tokens ?? 0,
    outputTokens: usage.output_tokens ?? 0,
    webSearches: items.filter((item) => item.type === "web_search_call").length,
    error: failed
      ? (failed.response?.error?.message ?? JSON.stringify(failed).slice(0, 300))
      : null,
  };
}

export function createCodexLlm(opts: {
  store: SessionStore;
  reasoning: { [K in LlmRequest["purpose"]]?: "low" | "medium" | "high" | undefined };
  fetcher?: typeof fetch;
}): ContentLlm {
  const fetcher = opts.fetcher ?? fetch;
  let session = opts.store.load();
  const ensureFresh = async (force = false): Promise<CodexSession> => {
    if (!session)
      throw new LlmAuthError(
        "No ChatGPT/Codex session; run `npm run growth:codex-login` (or set CODEX_SESSION_JSON)",
      );
    if (force || session.expiresAt - REFRESH_MARGIN_MS < Date.now()) {
      session = await refreshCodexSession(session, fetcher);
      opts.store.save(session);
    }
    return session;
  };
  const call = async (request: LlmRequest, current: CodexSession): Promise<Response> =>
    fetcher(CODEX_RESPONSES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
        Authorization: `Bearer ${current.accessToken}`,
        "chatgpt-account-id": current.accountId,
        "OpenAI-Beta": "responses=experimental",
        originator: "codex_cli_rs",
        "User-Agent": `codex_cli_rs/${CODEX_CLIENT_VERSION}`,
      },
      body: JSON.stringify({
        model: request.model,
        store: false,
        stream: true,
        instructions: request.system,
        input: [{ role: "user", content: [{ type: "input_text", text: request.prompt }] }],
        ...(request.webSearchMaxUses ? { tools: [{ type: "web_search" }] } : {}),
        reasoning: { effort: opts.reasoning[request.purpose] ?? "medium" },
        prompt_cache_key: `prestyj-growth-${request.purpose}`,
      }),
      signal: AbortSignal.timeout(15 * 60_000),
    });
  return {
    async complete(request) {
      let current = await ensureFresh();
      let res = await call(request, current);
      if (res.status === 401) {
        current = await ensureFresh(true);
        res = await call(request, current);
      }
      if (res.status === 401 || res.status === 403)
        throw new LlmAuthError(`ChatGPT/Codex rejected the session (${res.status})`);
      if (res.status === 429) {
        const detail = (await res.text()).slice(0, 300);
        throw new CodexUsageLimitError(`ChatGPT/Codex usage limit reached: ${detail}`);
      }
      if (!res.ok) throw new Error(`Codex API ${res.status}: ${(await res.text()).slice(0, 300)}`);
      const parsed = parseCodexStream(await res.text());
      if (parsed.error) throw new Error(`Codex response failed: ${parsed.error}`);
      return {
        text: parsed.text,
        inputTokens: parsed.inputTokens,
        outputTokens: parsed.outputTokens,
        // Searches are included in the subscription; report none so no per-search cost is booked.
        webSearches: 0,
      };
    },
  };
}

/** Try `primary`; on auth failure or usage limit, alert once and use `fallback` for the rest of the run. */
export function withFallback(
  primary: ContentLlm,
  fallback: ContentLlm | null,
  onFallback: (reason: string) => Promise<void>,
  /** Model id the fallback provider should use for each purpose. */
  fallbackModel: (purpose: LlmRequest["purpose"]) => string = () => "",
): ContentLlm {
  let usePrimary = true;
  return {
    async complete(request) {
      if (usePrimary) {
        try {
          return await primary.complete(request);
        } catch (error) {
          if (
            !fallback ||
            !(error instanceof LlmAuthError || error instanceof CodexUsageLimitError)
          )
            throw error;
          usePrimary = false;
          await onFallback(error.message);
        }
      }
      const model = fallbackModel(request.purpose);
      return fallback!.complete(model ? { ...request, model } : request);
    },
  };
}
