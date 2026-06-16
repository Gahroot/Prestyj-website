import { NextRequest, NextResponse } from "next/server";

const TRIBUNAL_API_BASE = (
  process.env.TRIBUNAL_API_BASE ?? "https://backend-api-production-b536.up.railway.app"
).replace(/\/+$/, "");

const ALLOWED_ENDPOINTS = new Set([
  "config",
  "token",
  "tool-call",
  "transcript",
  "call",
  "chat",
  "text",
]);

interface RouteContext {
  params: Promise<{ publicId: string; endpoint: string }>;
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isSafePublicId(publicId: string): boolean {
  return /^ag_[A-Za-z0-9]+$/.test(publicId);
}

function buildForwardHeaders(request: NextRequest): Headers {
  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  const origin = request.headers.get("origin") ?? new URL(request.url).origin;

  if (contentType) headers.set("content-type", contentType);
  headers.set("accept", request.headers.get("accept") ?? "application/json");
  headers.set("origin", origin);

  const userAgent = request.headers.get("user-agent");
  if (userAgent) headers.set("user-agent", userAgent);

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) headers.set("x-forwarded-for", forwardedFor);

  return headers;
}

async function proxyTribunalEmbedRequest(
  request: NextRequest,
  method: "GET" | "POST",
  { params }: RouteContext,
): Promise<NextResponse> {
  const { publicId, endpoint } = await params;

  if (!isSafePublicId(publicId) || !ALLOWED_ENDPOINTS.has(endpoint)) {
    return NextResponse.json({ error: "Unsupported AI concierge request" }, { status: 404 });
  }

  const targetUrl = `${TRIBUNAL_API_BASE}/api/v1/p/embed/${encodeURIComponent(
    publicId,
  )}/${endpoint}`;

  try {
    const requestInit: RequestInit = {
      method,
      headers: buildForwardHeaders(request),
      cache: "no-store",
    };

    if (method === "POST") {
      requestInit.body = await request.text();
    }

    const upstreamResponse = await fetch(targetUrl, requestInit);

    const responseBody = await upstreamResponse.text();
    const response = new NextResponse(responseBody, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
    });

    response.headers.set(
      "content-type",
      upstreamResponse.headers.get("content-type") ?? "application/json",
    );
    response.headers.set("cache-control", "no-store");
    return response;
  } catch (error) {
    console.error("[tribunal-embed-proxy] request failed", error);
    return NextResponse.json(
      { error: "AI concierge is temporarily unavailable" },
      { status: 502 },
    );
  }
}

export async function GET(
  request: NextRequest,
  context: RouteContext,
): Promise<NextResponse> {
  return proxyTribunalEmbedRequest(request, "GET", context);
}

export async function POST(
  request: NextRequest,
  context: RouteContext,
): Promise<NextResponse> {
  return proxyTribunalEmbedRequest(request, "POST", context);
}
