import { describe, expect, it } from "vitest";

import { workSamples } from "@/lib/institutional/work-samples";
import { capabilities } from "@/lib/institutional/capabilities";

describe("illustrative homepage work samples", () => {
  it("provides distinct workflows and distinct source IDs within each workflow", () => {
    expect(workSamples).toHaveLength(3);
    expect(new Set(workSamples.map((sample) => sample.id)).size).toBe(workSamples.length);
    for (const sample of workSamples) {
      expect(new Set(sample.sources.map((source) => source.id)).size).toBe(sample.sources.length);
    }
  });

  it("resolves every displayed finding to a nonempty supporting excerpt", () => {
    for (const sample of workSamples) {
      expect(sample.sources.length).toBeGreaterThan(0);
      for (const finding of sample.findings) {
        const source = sample.sources.find((item) => item.id === finding.sourceId);
        expect(source, `${sample.id}: ${finding.label}`).toBeDefined();
        expect(source?.excerpt.length).toBeGreaterThan(0);
        expect(source?.location.length).toBeGreaterThan(0);
      }
    }
  });

  it("labels all examples as illustrative and retains a human review boundary", () => {
    for (const sample of workSamples) {
      expect(sample.subtitle).toContain("Illustrative");
      expect(sample.review.length).toBeGreaterThan(30);
    }
  });

  it("links to existing institutional capabilities", () => {
    const routes = capabilities.map((capability) => `/capabilities/${capability.slug}`);
    for (const sample of workSamples) expect(routes).toContain(sample.href);
  });
});
