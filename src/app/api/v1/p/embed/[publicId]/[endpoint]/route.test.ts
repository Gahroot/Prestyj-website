import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

const context = { params: Promise.resolve({ publicId: "ag_L2rFuSnp", endpoint: "call" }) };
function request(body: unknown): NextRequest {
  return new NextRequest("http://localhost/api/v1/p/embed/ag_L2rFuSnp/call", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}
afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("callback proxy boundary", () => {
  it.each([
    { phone_number: "2125550123" },
    { phone_number: "2125550123", consent: false },
    { phone_number: "wrong", consent: true },
    { phone_number: "2125550123", consent: true, unexpected: "data" },
  ])("rejects invalid requests before upstream", async (body) => {
    const upstream = vi.fn();
    vi.stubGlobal("fetch", upstream);
    expect((await POST(request(body), context)).status).toBe(400);
    expect(upstream).not.toHaveBeenCalled();
  });
  it("forwards only the accepted provider payload and returns safe success copy", async () => {
    const upstream = vi
      .fn()
      .mockResolvedValueOnce(Response.json({ channel_mode: "both" }))
      .mockResolvedValueOnce(Response.json({ success: true, message: "private details" }));
    vi.stubGlobal("fetch", upstream);
    const response = await POST(
      request({ phone_number: "(212) 555-0123", consent: true }),
      context,
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true, message: "Call request accepted" });
    expect(upstream.mock.calls[1]?.[1]).toMatchObject({
      method: "POST",
      body: JSON.stringify({ phone_number: "+12125550123" }),
      redirect: "error",
    });
  });
  it.each([429, 500])("handles provider status %s", async (status) => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce(Response.json({ channel_mode: "phone" }))
        .mockResolvedValueOnce(Response.json({ secret: "not public" }, { status })),
    );
    const response = await POST(request({ phone_number: "2125550123", consent: true }), context);
    expect(response.status).toBe(status === 429 ? 429 : 502);
    expect(await response.text()).not.toContain("not public");
  });
  it("does not call an unavailable channel", async () => {
    const upstream = vi.fn().mockResolvedValue(Response.json({ channel_mode: "browser" }));
    vi.stubGlobal("fetch", upstream);
    expect(
      (await POST(request({ phone_number: "2125550123", consent: true }), context)).status,
    ).toBe(503);
    expect(upstream).toHaveBeenCalledTimes(1);
  });
  it("rejects oversized streamed bodies without relying on content-length", async () => {
    const upstream = vi.fn();
    vi.stubGlobal("fetch", upstream);
    expect(
      (await POST(request({ phone_number: "2".repeat(5000), consent: true }), context)).status,
    ).toBe(413);
    expect(upstream).not.toHaveBeenCalled();
  });
  it("fails closed on network failure without automatic retry", async () => {
    const upstream = vi.fn().mockRejectedValue(new Error("private detail"));
    vi.stubGlobal("fetch", upstream);
    const response = await POST(request({ phone_number: "2125550123", consent: true }), context);
    expect(response.status).toBe(502);
    expect(await response.text()).not.toContain("private detail");
    expect(upstream).toHaveBeenCalledTimes(1);
  });
  it("preserves the public agent allowlist", async () => {
    const upstream = vi.fn();
    vi.stubGlobal("fetch", upstream);
    const response = await POST(request({ phone_number: "2125550123", consent: true }), {
      params: Promise.resolve({ publicId: "unknown", endpoint: "call" }),
    });
    expect(response.status).toBe(404);
    expect(upstream).not.toHaveBeenCalled();
  });
  it("stops an already-cancelled request", async () => {
    const controller = new AbortController();
    controller.abort();
    const upstream = vi.fn();
    vi.stubGlobal("fetch", upstream);
    const cancelled = new NextRequest("http://localhost/call", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ phone_number: "2125550123", consent: true }),
      signal: controller.signal,
    });
    expect((await POST(cancelled, context)).status).toBe(504);
    expect(upstream).not.toHaveBeenCalled();
  });
});
