import { describe, expect, it } from "vitest";

import {
  getWorkflowProof,
  primaryCapability,
  proofStageLabel,
} from "@/lib/conversion/workflow-proof";
import { researchArticles } from "@/lib/institutional/research";

describe("getWorkflowProof", () => {
  it("returns 1-3 stage-labeled items for every registered article", () => {
    for (const article of researchArticles) {
      const items = getWorkflowProof(article.capabilities, 3);
      expect(items.length, article.slug).toBeGreaterThanOrEqual(1);
      expect(items.length).toBeLessThanOrEqual(3);
      expect(primaryCapability(article)).toBe(article.capabilities[0]);
    }
  });

  it("labels synthetic samples as fixtures, never as results", () => {
    const fixtures = getWorkflowProof(["fund-operations"], 3).filter((i) =>
      i.key.startsWith("sample:"),
    );
    expect(fixtures.length).toBeGreaterThan(0);
    for (const item of fixtures) {
      expect(item.stage).toBe("Fixture");
      expect(proofStageLabel(item.stage)).toMatch(/fixture/i);
      expect(item.summary).toMatch(/not customer data/);
    }
  });

  it("keeps reference architecture labeled as such", () => {
    const [record] = getWorkflowProof(["portfolio-intelligence"], 1);
    expect(record?.stage).toBe("Reference architecture");
  });
});
