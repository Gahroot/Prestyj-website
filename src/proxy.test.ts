import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

import { proxy } from "@/proxy";
import { institutionalBlogSlugs } from "@/lib/institutional/site-map";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("institutional blog redirects", () => {
  it.each([
    "branded-calling-pricing-comparison-2026",
    "evaluate-institutional-real-estate-ai-vendors",
    "unknown-article",
  ])("redirects %s once before page rendering, retaining security and privacy", (slug) => {
    const response = proxy(
      new NextRequest(`https://prestyj.com/blog/${slug}?next=https://example.com`, {
        headers: { "sec-gpc": "1" },
      }),
    );
    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe("https://prestyj.com/blog");
    expect(response.headers.get("x-frame-options")).toBe("DENY");
    expect(response.headers.get("content-security-policy")).toContain("frame-ancestors 'none'");
    expect(response.cookies.get("prestyj-gpc")?.value).toBe("1");
  });

  it.each([
    "/blog",
    ...institutionalBlogSlugs.map((slug) => `/blog/${slug}`),
    "/blog/category/funds",
    "/research",
  ])("leaves %s to its existing route", (route) => {
    const response = proxy(new NextRequest(`https://prestyj.com${route}`));
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-middleware-next")).toBe("1");
  });
});

describe("content security policy", () => {
  it("does not upgrade localhost assets during development", () => {
    vi.stubEnv("NODE_ENV", "development");

    const response = proxy(new NextRequest("http://localhost:3001/layout-lab/analyst-desk"));

    expect(response.headers.get("content-security-policy")).not.toContain(
      "upgrade-insecure-requests",
    );
  });

  it("keeps insecure request upgrades enabled in production", () => {
    vi.stubEnv("NODE_ENV", "production");

    const response = proxy(new NextRequest("https://prestyj.com/"));

    expect(response.headers.get("content-security-policy")).toContain("upgrade-insecure-requests");
  });
});
