import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

import { proxy } from "@/proxy";

afterEach(() => {
  vi.unstubAllEnvs();
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
