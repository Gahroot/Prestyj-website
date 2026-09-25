import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import robots from "../../src/app/robots";
import { articleDateChecks } from "./check-citation-surfaces";

describe("rendered article date agreement", () => {
  it("keeps the static robots response aligned with route protections", () => {
    const text = readFileSync("public/robots.txt", "utf8")
      .split(/\r?\n/)
      .map((line) => line.replace(/#.*/, "").trim())
      .join("\n");
    const rules = robots().rules;
    const rule = Array.isArray(rules) ? rules[0] : rules;
    for (const route of ["/api/", "/admin/", "/embed/"]) {
      expect(rule?.disallow).toContain(route);
      expect(text).toContain(`Disallow: ${route}`);
    }
    expect(text).not.toMatch(/^Disallow: \/$/m);
  });
  const expected = { published: "2026-08-27", modified: "2026-09-24" };
  const html =
    '<time dateTime="2026-08-27">August 27</time><time dateTime="2026-09-24">September 24</time><meta property="article:published_time" content="2026-08-27"/><meta property="article:modified_time" content="2026-09-24"/><script type="application/ld+json">{"@type":"Article","datePublished":"2026-08-27","dateModified":"2026-09-24"}</script>';
  it("accepts only agreement across visible, Open Graph and JSON-LD dates", () => {
    expect(articleDateChecks(html, expected, "fixture").every((check) => check.ok)).toBe(true);
  });
  it("detects the original missing-update bug", () => {
    const old = html
      .replace('<time dateTime="2026-09-24">September 24</time>', "")
      .replace('<meta property="article:modified_time" content="2026-09-24"/>', "")
      .replace(',"dateModified":"2026-09-24"', "");
    expect(articleDateChecks(old, expected, "fixture").filter((check) => !check.ok)).toHaveLength(
      3,
    );
  });
  it("does not accept a metadata value with a matching prefix and invalid suffix", () => {
    expect(
      articleDateChecks(
        html.replace('content="2026-09-24"', 'content="2026-09-24-invalid"'),
        expected,
        "fixture",
      )[1]?.ok,
    ).toBe(false);
  });
});
