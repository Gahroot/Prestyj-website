export const MAX_REDIRECTS = 3;
export const DEFAULT_TIMEOUT_MS = 15_000;

export type SafeFetchOptions = {
  timeoutMs: number;
  maxRedirects?: number;
};

/**
 * fetch with a hard timeout and a small redirect budget. Redirects are followed
 * manually so a hostile server cannot bounce the checker around indefinitely.
 */
export function createSafeFetch(opts: SafeFetchOptions) {
  const maxRedirects = opts.maxRedirects ?? MAX_REDIRECTS;
  return async function safeFetch(input: string | URL | Request, init?: RequestInit): Promise<Response> {
    let url = input instanceof Request ? input.url : String(input);
    let currentInit: RequestInit = { ...init };
    const timeout = AbortSignal.timeout(opts.timeoutMs);
    const signal = init?.signal ? AbortSignal.any([init.signal, timeout]) : timeout;
    for (let hop = 0; ; hop++) {
      const res = await fetch(url, { ...currentInit, signal, redirect: "manual" });
      const location = res.headers.get("location");
      if (res.status < 300 || res.status >= 400 || !location) return res;
      if (hop >= maxRedirects) {
        throw new Error(`Too many redirects (more than ${maxRedirects}) starting at ${String(input)}`);
      }
      await res.body?.cancel().catch(() => undefined);
      url = new URL(location, url).toString();
      if (res.status === 303) currentInit = { ...currentInit, method: "GET", body: undefined };
    }
  };
}

export type SafeFetch = ReturnType<typeof createSafeFetch>;

export async function fetchJson(
  safeFetch: SafeFetch,
  url: string,
): Promise<{ ok: true; status: number; json: unknown } | { ok: false; status?: number; error: string }> {
  try {
    const res = await safeFetch(url, { headers: { accept: "application/json" } });
    if (!res.ok) {
      await res.body?.cancel().catch(() => undefined);
      return { ok: false, status: res.status, error: `HTTP ${res.status}` };
    }
    const text = await res.text();
    try {
      return { ok: true, status: res.status, json: JSON.parse(text) };
    } catch {
      return { ok: false, status: res.status, error: "Response is not valid JSON" };
    }
  } catch (err) {
    return { ok: false, error: errorMessage(err) };
  }
}

export function errorMessage(err: unknown): string {
  if (err instanceof Error) {
    const cause = (err as { cause?: unknown }).cause;
    return cause instanceof Error ? `${err.message} (${cause.message})` : err.message;
  }
  return String(err);
}

/** RFC 9728 / RFC 8414 well-known URL with path insertion. */
export function wellKnownUrl(base: string, suffix: string, withPath: boolean): string {
  const u = new URL(base);
  const path = u.pathname === "/" ? "" : u.pathname.replace(/\/$/, "");
  return `${u.origin}/.well-known/${suffix}${withPath ? path : ""}`;
}

/** Parse the parameters of a `Bearer` WWW-Authenticate challenge. */
export function parseBearerChallenge(header: string | null): Record<string, string> | null {
  if (!header) return null;
  const m = /Bearer\s*(.*)$/i.exec(header);
  if (!m) return null;
  const params: Record<string, string> = {};
  const re = /([a-zA-Z_][\w-]*)\s*=\s*(?:"((?:[^"\\]|\\.)*)"|([^\s,]+))/g;
  for (const p of (m[1] ?? "").matchAll(re)) {
    const key = p[1];
    if (key) params[key.toLowerCase()] = p[2] ?? p[3] ?? "";
  }
  return params;
}
