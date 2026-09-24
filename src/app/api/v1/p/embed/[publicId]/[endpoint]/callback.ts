import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { tribunalCallbackSchema } from "@/lib/tribunal-embed";

const actionSchema = z.object({ success: z.boolean() });
const configSchema = z.object({ channel_mode: z.enum(["both", "phone"]) });

type BodyResult = { ok: true; text: string } | { ok: false };

async function readBounded(
  body: ReadableStream<Uint8Array> | null,
  limit: number,
  signal: AbortSignal,
): Promise<BodyResult> {
  if (!body) return { ok: false };
  const reader = body.getReader();
  const abort = (): void => {
    void reader.cancel().catch(() => undefined);
  };
  signal.addEventListener("abort", abort, { once: true });
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    signal.throwIfAborted();
    while (true) {
      const chunk = await reader.read();
      signal.throwIfAborted();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > limit) {
        await reader.cancel();
        return { ok: false };
      }
      chunks.push(chunk.value);
    }
    return { ok: true, text: Buffer.concat(chunks).toString("utf8") };
  } finally {
    signal.removeEventListener("abort", abort);
    reader.releaseLock();
  }
}

function json(payload: object, status: number): NextResponse {
  return NextResponse.json(payload, { status, headers: { "cache-control": "no-store" } });
}

function parseJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export async function proxyCallback(
  request: NextRequest,
  targetUrl: string,
  headers: Headers,
): Promise<NextResponse> {
  const started = performance.now();
  const signal = AbortSignal.any([request.signal, AbortSignal.timeout(10_000)]);
  let outcome = "rejected";
  try {
    if (process.env.NEXT_PUBLIC_TRIBUNAL_PHONE_DEMO_ENABLED === "false") {
      return json({ error: "Phone calls are unavailable" }, 503);
    }
    if (request.headers.get("content-type")?.split(";")[0]?.trim() !== "application/json") {
      return json({ error: "Expected JSON" }, 415);
    }
    if (Number(request.headers.get("content-length")) > 4096) {
      return json({ error: "Request is too large" }, 413);
    }
    const body = await readBounded(request.body, 4096, signal);
    if (!body.ok) return json({ error: "Request is too large or empty" }, 413);
    const parsed = tribunalCallbackSchema.safeParse(parseJson(body.text));
    if (!parsed.success)
      return json({ error: "A valid US phone number and affirmative consent are required" }, 400);

    // Recheck availability at the boundary, not only in the browser.
    const configResponse = await fetch(targetUrl.replace(/\/call$/, "/config"), {
      headers,
      cache: "no-store",
      signal,
      redirect: "error",
    });
    const configBody = await readBounded(configResponse.body, 16_384, signal);
    if (
      !configResponse.ok ||
      !configBody.ok ||
      !configSchema.safeParse(parseJson(configBody.text)).success
    ) {
      return json({ error: "Phone calls are unavailable" }, 503);
    }
    const response = await fetch(targetUrl, {
      method: "POST",
      headers,
      cache: "no-store",
      signal,
      redirect: "error",
      // Consent is enforced locally. Preserve the provider's existing contract.
      body: JSON.stringify({ phone_number: parsed.data.phone_number }),
    });
    if (response.status === 429) {
      await response.body?.cancel();
      outcome = "rate-limited";
      return json({ error: "Too many requests. Wait before trying again." }, 429);
    }
    const responseBody = await readBounded(response.body, 16_384, signal);
    const result = responseBody.ok ? actionSchema.safeParse(parseJson(responseBody.text)) : null;
    if (!response.ok || !result?.success || !result.data.success) {
      outcome = "upstream-failure";
      return json({ error: "Call request could not be confirmed" }, 502);
    }
    outcome = "accepted";
    return json({ success: true, message: "Call request accepted" }, 200);
  } catch {
    outcome = signal.aborted ? "timeout-or-cancelled" : "network-failure";
    return json({ error: "Call request could not be confirmed" }, signal.aborted ? 504 : 502);
  } finally {
    // No phone numbers, request bodies, URLs, or provider responses in logs.
    console.info("[tribunal-callback]", {
      endpoint: "call",
      outcome,
      elapsedMs: Math.round(performance.now() - started),
    });
  }
}
