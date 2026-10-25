import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  CodexUsageLimitError,
  createCodexLlm,
  fileSessionStore,
  parseCodexStream,
  withFallback,
  type CodexSession,
} from "./codex";
import { LlmAuthError, type ContentLlm, type LlmRequest } from "./llm";

const jwt = (accountId: string): string =>
  `h.${Buffer.from(JSON.stringify({ "https://api.openai.com/auth": { chatgpt_account_id: accountId } })).toString("base64url")}.s`;

const session = (over: Partial<CodexSession> = {}): CodexSession => ({
  accessToken: jwt("acct-1"),
  refreshToken: "refresh-old-token",
  expiresAt: Date.now() + 3_600_000,
  accountId: "acct-1",
  seededAt: 1,
  ...over,
});

const sse = (...events: unknown[]): string =>
  events.map((e) => `data: ${JSON.stringify(e)}\n`).join("\n");
const answer = (text: string) =>
  sse(
    { type: "response.output_item.done", item: { type: "web_search_call" } },
    {
      type: "response.output_item.done",
      item: { type: "message", content: [{ type: "output_text", text: "draft thinking" }] },
    },
    {
      type: "response.output_item.done",
      item: { type: "message", content: [{ type: "output_text", text }] },
    },
    { type: "response.completed", response: { usage: { input_tokens: 120, output_tokens: 30 } } },
  );

const request: LlmRequest = {
  purpose: "write",
  model: "gpt-6.1-sol",
  system: "sys",
  prompt: "hi",
  maxTokens: 100,
  webSearchMaxUses: 2,
};

function memoryStore(initial: CodexSession | null) {
  let current = initial;
  const saved: CodexSession[] = [];
  return {
    saved,
    store: {
      load: () => current,
      save: (s: CodexSession) => {
        current = s;
        saved.push(s);
      },
    },
  };
}

describe("codex stream parsing", () => {
  it("returns the last message text, usage and web search count", () => {
    const parsed = parseCodexStream(answer("final answer"));
    expect(parsed).toMatchObject({
      text: "final answer",
      inputTokens: 120,
      outputTokens: 30,
      webSearches: 1,
      error: null,
    });
  });
  it("reports a failed response", () => {
    expect(
      parseCodexStream(sse({ type: "response.failed", response: { error: { message: "boom" } } }))
        .error,
    ).toBe("boom");
  });
});

describe("codex provider", () => {
  it("sends the subscription request shape and web search tool", async () => {
    const fetcher = vi.fn(async () => new Response(answer("ok"), { status: 200 }));
    const { store } = memoryStore(session());
    const llm = createCodexLlm({
      store,
      reasoning: { write: "high" },
      fetcher: fetcher as unknown as typeof fetch,
    });
    expect((await llm.complete(request)).text).toBe("ok");
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://chatgpt.com/backend-api/codex/responses");
    const headers = init.headers as Record<string, string>;
    expect(headers["chatgpt-account-id"]).toBe("acct-1");
    const body = JSON.parse(String(init.body));
    expect(body).toMatchObject({
      model: "gpt-6.1-sol",
      store: false,
      stream: true,
      instructions: "sys",
      reasoning: { effort: "high" },
      tools: [{ type: "web_search" }],
    });
  });

  it("refreshes an expired session first and saves the rotated refresh token", async () => {
    const fetcher = vi.fn(async (url: string) =>
      url.includes("oauth/token")
        ? new Response(
            JSON.stringify({
              access_token: jwt("acct-1"),
              refresh_token: "refresh-new-token",
              expires_in: 3600,
            }),
            { status: 200 },
          )
        : new Response(answer("ok"), { status: 200 }),
    );
    const { store, saved } = memoryStore(session({ expiresAt: Date.now() - 1000 }));
    const llm = createCodexLlm({
      store,
      reasoning: {},
      fetcher: fetcher as unknown as typeof fetch,
    });
    await llm.complete(request);
    expect(saved.at(-1)?.refreshToken).toBe("refresh-new-token");
    expect(saved.at(-1)?.seededAt).toBe(1);
  });

  it("refreshes once on 401 and retries", async () => {
    let calls = 0;
    const fetcher = vi.fn(async (url: string) => {
      if (url.includes("oauth/token"))
        return new Response(
          JSON.stringify({
            access_token: jwt("acct-1"),
            refresh_token: "r2-token-x",
            expires_in: 3600,
          }),
          { status: 200 },
        );
      calls++;
      return calls === 1
        ? new Response("", { status: 401 })
        : new Response(answer("after retry"), { status: 200 });
    });
    const { store } = memoryStore(session());
    const llm = createCodexLlm({
      store,
      reasoning: {},
      fetcher: fetcher as unknown as typeof fetch,
    });
    expect((await llm.complete(request)).text).toBe("after retry");
  });

  it("raises an auth error when there is no session, and a usage-limit error on 429", async () => {
    const none = createCodexLlm({ store: memoryStore(null).store, reasoning: {} });
    await expect(none.complete(request)).rejects.toBeInstanceOf(LlmAuthError);
    const limited = createCodexLlm({
      store: memoryStore(session()).store,
      reasoning: {},
      fetcher: (async () =>
        new Response("usage_limit_reached", { status: 429 })) as unknown as typeof fetch,
    });
    await expect(limited.complete(request)).rejects.toBeInstanceOf(CodexUsageLimitError);
  });
});

describe("fallback", () => {
  it("switches to the fallback with its own model id and alerts once", async () => {
    const primary: ContentLlm = {
      complete: async () => {
        throw new CodexUsageLimitError("limit");
      },
    };
    const seen: string[] = [];
    const fallback: ContentLlm = {
      complete: async (r) => {
        seen.push(r.model);
        return { text: "fb", inputTokens: 1, outputTokens: 1, webSearches: 0 };
      },
    };
    const alerts: string[] = [];
    const llm = withFallback(
      primary,
      fallback,
      async (m) => {
        alerts.push(m);
      },
      (p) => (p === "write" ? "claude-fable-5-1" : "claude-sonnet-5-5"),
    );
    await llm.complete(request);
    await llm.complete({ ...request, purpose: "factcheck", model: "gpt-6-astra" });
    expect(seen).toEqual(["claude-fable-5-1", "claude-sonnet-5-5"]);
    expect(alerts).toHaveLength(1);
  });
  it("does not hide ordinary errors behind the fallback", async () => {
    const primary: ContentLlm = {
      complete: async () => {
        throw new Error("bad json");
      },
    };
    const fallback: ContentLlm = {
      complete: async () => ({ text: "", inputTokens: 0, outputTokens: 0, webSearches: 0 }),
    };
    await expect(
      withFallback(primary, fallback, async () => undefined).complete(request),
    ).rejects.toThrow("bad json");
  });
});

describe("session file store", () => {
  it("prefers a newer seed (fresh login) over the stored rotated session", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "codex-"));
    const file = path.join(dir, "s.json");
    writeFileSync(file, JSON.stringify(session({ refreshToken: "stored-rotated", seededAt: 5 })));
    expect(
      fileSessionStore(
        file,
        JSON.stringify(session({ refreshToken: "old-seed-x", seededAt: 5 })),
      ).load()?.refreshToken,
    ).toBe("stored-rotated");
    expect(
      fileSessionStore(
        file,
        JSON.stringify(session({ refreshToken: "new-login-x", seededAt: 9 })),
      ).load()?.refreshToken,
    ).toBe("new-login-x");
    expect(JSON.parse(readFileSync(file, "utf8")).refreshToken).toBe("new-login-x");
  });
});

describe("inline citations from web-search models", () => {
  it("moves them into ## Sources and keeps the prose clean", async () => {
    const { moveInlineCitations } = await import("./write");
    const body = `Advisers are accountable. ([sec.gov](https://www.sec.gov/a?utm_source=openai)) More text.\n\n## Sources\n\n- https://ilpa.org/x — supports y`;
    const out = moveInlineCitations(body);
    expect(out).toContain("Advisers are accountable. More text.");
    expect(out).not.toContain("([sec.gov]");
    expect(out).toMatch(
      /## Sources[\s\S]*https:\/\/ilpa\.org\/x[\s\S]*- https:\/\/www\.sec\.gov\/a$/,
    );
  });
});
