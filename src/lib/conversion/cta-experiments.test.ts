import { describe, expect, it } from "vitest";

import raw from "@/lib/conversion/cta-experiments.json";
import {
  ctaExperiments,
  fillCtaCopy,
  getExperimentForPlacement,
  parseCtaExperiments,
  pickVariant,
  type CtaExperiment,
} from "@/lib/conversion/cta-experiments";

const base = (overrides: Partial<CtaExperiment["variants"][number]>[]): CtaExperiment => ({
  id: "exp",
  placement: "article-inline",
  variants: overrides.map((o, i) => ({
    id: String.fromCharCode(97 + i),
    headline: "h",
    body: "b",
    buttonLabel: "go",
    weight: 50,
    status: "testing",
    ...o,
  })),
});

const visitors = Array.from({ length: 2000 }, (_, i) => `visitor-${i}`);

describe("cta-experiments.json", () => {
  it("validates and covers both article placements with two variants", () => {
    expect(parseCtaExperiments(raw)).toHaveLength(ctaExperiments.length);
    for (const placement of ["article-inline", "article-end"] as const) {
      expect(getExperimentForPlacement(placement)?.variants.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("rejects unknown placements and statuses", () => {
    expect(() =>
      parseCtaExperiments({ experiments: [{ ...base([{}]), placement: "hero" }] }),
    ).toThrow();
    expect(() =>
      parseCtaExperiments({ experiments: [base([{ status: "paused" as never }])] }),
    ).toThrow();
  });

  it("uses institutional vocabulary and no hype", () => {
    const copy = JSON.stringify(raw).toLowerCase();
    expect(copy).toMatch(/finished work product|source attached|review rules/);
    expect(copy).not.toMatch(/revolutionary|10x|game-chang|custom ai|ai automation|—/);
  });
});

describe("pickVariant", () => {
  it("is deterministic per visitor", () => {
    const exp = base([{}, {}]);
    expect(pickVariant(exp, "v1")).toEqual(pickVariant(exp, "v1"));
  });

  it("splits roughly by weight", () => {
    const exp = base([{ weight: 80 }, { weight: 20 }]);
    const a = visitors.filter((v) => pickVariant(exp, v)?.id === "a").length / visitors.length;
    expect(a).toBeGreaterThan(0.75);
    expect(a).toBeLessThan(0.85);
  });

  it("never serves retired variants and lets a winner override", () => {
    const retired = base([{ status: "retired", weight: 100 }, {}]);
    expect(visitors.every((v) => pickVariant(retired, v)?.id === "b")).toBe(true);
    const winner = base([{}, { status: "winner", weight: 0 }]);
    expect(visitors.every((v) => pickVariant(winner, v)?.id === "b")).toBe(true);
  });

  it("falls back to the first active variant at zero weight", () => {
    expect(pickVariant(base([{ weight: 0 }, { weight: 0 }]), "x")?.id).toBe("a");
  });
});

it("fills the {workflow} token", () => {
  expect(fillCtaCopy("Book a {workflow} demo", "fund operations")).toBe(
    "Book a fund operations demo",
  );
});
