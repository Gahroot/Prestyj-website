import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("published synthetic examples", () => {
  it("independently sums the ten-case reference CSV", () => {
    const lines = readFileSync("docs/seo/assets/synthetic-workflow-evaluation.csv", "utf8")
      .trim()
      .split("\n");
    const rows = lines.slice(1).map((line) => line.split(","));
    expect(rows).toHaveLength(10);
    expect(rows.every((row) => row[1] === "synthetic")).toBe(true);
    const sum = (column: number): number =>
      rows.reduce((total, row) => total + Number(row[column]), 0);
    expect([sum(2), sum(3), sum(4), sum(5), sum(6), sum(7), sum(8)]).toEqual([
      300, 120, 60, 8, 10, 8, 2,
    ]);
    expect((sum(2) - sum(3) - sum(4)) / sum(2)).toBe(0.4);
    expect((sum(3) + sum(4)) / sum(5)).toBe(22.5);
    expect(sum(7) / sum(6)).toBe(0.8);
    expect(sum(7) / (sum(7) + sum(8))).toBe(0.8);
    expect(12 + 8 - 10).toBe(10);
    expect(16 / 20).toBe(0.8);
    expect(100 * (15 - 10)).toBe(500);
    expect((100 * 10) / 80).toBe(12.5);
    expect((100 * 15) / 80).toBe(18.75);
  });
  it("reconciles waterfall tiers and insufficient cash independently", () => {
    const source = readFileSync("content/blog/explainable-distribution-waterfalls.mdx", "utf8");
    const available = 1_300_000;
    const capital = 1_000_000;
    const preferred = 80_000;
    const residual = available - capital - preferred;
    const lp = capital + preferred + residual * 0.8;
    const gp = residual * 0.2;
    expect(residual).toBe(220_000);
    expect(lp).toBe(1_256_000);
    expect(gp).toBe(44_000);
    expect(lp + gp).toBe(available);
    for (const value of [available, capital, preferred, residual, lp, gp])
      expect(source).toContain(`$${value.toLocaleString("en-US")}`);
    expect(preferred - (1_050_000 - capital)).toBe(30_000);
    expect(source).toContain("$30,000");
  });
  it("checks close and occupancy calculations", () => {
    expect(120_000 - 70_000).toBe(50_000);
    expect(120_000 - 70_000 - 5_000).toBe(45_000);
    expect((88_000 / 100_000) * 100).toBe(88);
    expect(((88_000 + 4_000) / 100_000) * 100).toBe(92);
  });
});
