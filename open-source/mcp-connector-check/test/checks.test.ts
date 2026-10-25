import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { checkConnector } from "../src/checks.js";
import { formatReport } from "../src/report.js";
import type { Report } from "../src/types.js";
import { type Fixture, GOOD_TOKEN, startBadServer, startGoodServer, startRedirectLoop } from "./fixtures.js";

const status = (r: Report, id: string) => r.checks.find((c) => c.id === id)?.status;
const fixedNow = () => new Date("2026-01-01T00:00:00Z");

let good: Fixture;
let bad: Fixture;
let loop: Fixture;

beforeAll(async () => {
  [good, bad, loop] = await Promise.all([startGoodServer(), startBadServer(), startRedirectLoop()]);
});
afterAll(async () => {
  await Promise.all([good.close(), bad.close(), loop.close()]);
});

describe("good server", () => {
  it("passes every check with a token", async () => {
    const r = await checkConnector(good.url, { token: GOOD_TOKEN, now: fixedNow });
    expect(r.summary.fail).toBe(0);
    expect(r.checkedAt).toBe("2026-01-01T00:00:00.000Z");
    for (const id of [
      "reachable", "auth-challenge", "protected-resource-metadata", "authorization-server-metadata", "transport",
      "server-info", "instructions", "tools-count", "tool-descriptions", "tool-input-schemas", "tool-annotations",
      "write-tools-destructive-hint", "tools-payload-size",
    ]) {
      expect(status(r, id), id).toBe("pass");
    }
    expect(status(r, "https")).toBe("warn");
  });

  it("skips session checks without a token but still audits OAuth discovery", async () => {
    const r = await checkConnector(good.url);
    expect(status(r, "auth-challenge")).toBe("pass");
    expect(status(r, "protected-resource-metadata")).toBe("pass");
    expect(status(r, "transport")).toBe("skip");
    expect(status(r, "tools-count")).toBe("skip");
  });

  it("reports a rejected token as a transport failure", async () => {
    const r = await checkConnector(good.url, { token: "wrong" });
    expect(status(r, "transport")).toBe("fail");
  });
});

describe("bad server", () => {
  it("flags the problems", async () => {
    const r = await checkConnector(bad.url);
    expect(status(r, "auth-challenge")).toBe("warn");
    expect(status(r, "protected-resource-metadata")).toBe("skip");
    expect(status(r, "transport")).toBe("pass");
    expect(status(r, "instructions")).toBe("warn");
    expect(status(r, "tool-descriptions")).toBe("fail");
    expect(status(r, "tool-annotations")).toBe("warn");
    const write = r.checks.find((c) => c.id === "write-tools-destructive-hint");
    expect(write?.status).toBe("warn");
    expect(write?.details).toEqual([
      "sendEmail: write-looking name but readOnlyHint: true",
      "delete_record: no destructiveHint",
    ]);
    expect(r.score).toBeLessThan(100);
    expect(formatReport(r)).toContain("[FAIL] Tool descriptions");
  });
});

describe("network safety", () => {
  it("fails plain HTTP on a public host", async () => {
    const r = await checkConnector("http://203.0.113.1/mcp", { timeoutMs: 300 });
    expect(status(r, "https")).toBe("fail");
    expect(status(r, "reachable")).toBe("fail");
  });

  it("stops after a few redirects", async () => {
    const r = await checkConnector(loop.url, { timeoutMs: 2000 });
    const c = r.checks.find((x) => x.id === "reachable");
    expect(c?.status).toBe("fail");
    expect(c?.message).toContain("Too many redirects");
  });

  it("rejects non-http URLs", async () => {
    const r = await checkConnector("ftp://example.com");
    expect(status(r, "url")).toBe("fail");
  });
});

describe("built CLI", () => {
  const run = promisify(execFile);
  it("exits 0 for the good server and 1 for the bad one", async () => {
    const ok = await run("node", ["dist/cli.js", good.url, "--token", GOOD_TOKEN, "--json"]);
    expect((JSON.parse(ok.stdout) as Report).summary.fail).toBe(0);
    await expect(run("node", ["dist/cli.js", bad.url])).rejects.toMatchObject({ code: 1 });
  });
});
