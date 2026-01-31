import { NextRequest, NextResponse } from "next/server";
import {
  submitUrl,
  submitUrls,
  submitAllUrls,
  getAllUrls,
  getIndexNowKey,
} from "@/lib/indexnow";

/**
 * POST /api/indexnow
 *
 * Submit URLs to IndexNow for instant indexing on Bing, Yandex, etc.
 *
 * Body options:
 * - { "all": true } - Submit all site URLs
 * - { "url": "https://prestyj.com/blog/example" } - Submit single URL
 * - { "urls": ["url1", "url2"] } - Submit multiple URLs
 *
 * Headers:
 * - Authorization: Bearer {INDEXNOW_API_KEY} (required for security)
 */
export async function POST(request: NextRequest) {
  // Verify authorization
  const authHeader = request.headers.get("authorization");
  const apiKey = getIndexNowKey();

  if (!apiKey) {
    return NextResponse.json(
      { error: "IndexNow API key not configured on server" },
      { status: 500 }
    );
  }

  // Simple bearer token auth using the IndexNow key
  if (authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Submit all URLs
    if (body.all === true) {
      const result = await submitAllUrls();
      return NextResponse.json(result, {
        status: result.success ? 200 : 500,
      });
    }

    // Submit single URL
    if (typeof body.url === "string") {
      const result = await submitUrl(body.url);
      return NextResponse.json(result, {
        status: result.success ? 200 : 500,
      });
    }

    // Submit multiple URLs
    if (Array.isArray(body.urls)) {
      const result = await submitUrls(body.urls);
      return NextResponse.json(result, {
        status: result.success ? 200 : 500,
      });
    }

    return NextResponse.json(
      { error: "Invalid request body. Use { all: true }, { url: string }, or { urls: string[] }" },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

/**
 * GET /api/indexnow
 *
 * Get list of all URLs that would be submitted
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const apiKey = getIndexNowKey();

  if (!apiKey) {
    return NextResponse.json(
      { error: "IndexNow API key not configured on server" },
      { status: 500 }
    );
  }

  if (authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urls = getAllUrls();

  return NextResponse.json({
    count: urls.length,
    urls,
  });
}
