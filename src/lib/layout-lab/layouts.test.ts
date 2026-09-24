import { describe, expect, it } from "vitest";

import {
  layoutFamilies,
  layoutLabContent,
  layouts,
  type LayoutReference,
} from "@/lib/layout-lab/layouts";

const validReferences = new Set<LayoutReference>([
  "Apple",
  "Cherre",
  "Dealpath",
  "Harvey",
  "Hebbia",
  "Juniper Square",
  "Linear",
  "Northspyre",
  "Palantir",
  "Rogo",
  "Sanity",
  "Vanta",
]);

const requiredSections = new Set([
  "positioning",
  "work",
  "evidence",
  "outcomes",
  "controls",
  "proof",
  "conversion",
]);

describe("layout lab recipes", () => {
  it("defines 24 uniquely numbered and slugged concepts", () => {
    expect(layouts).toHaveLength(24);
    expect(new Set(layouts.map(({ number }) => number)).size).toBe(24);
    expect(new Set(layouts.map(({ slug }) => slug)).size).toBe(24);
  });

  it("balances four concepts across every family", () => {
    for (const family of layoutFamilies) {
      expect(layouts.filter((layout) => layout.family === family.slug)).toHaveLength(4);
    }
  });

  it("provides complete comparison metadata", () => {
    for (const layout of layouts) {
      expect(layout.title.length).toBeGreaterThan(0);
      expect(layout.scanPath).toHaveLength(3);
      expect(layout.scanPath.every(Boolean)).toBe(true);
      expect(layout.bestFit.length).toBeGreaterThan(0);
      expect(layout.references.length).toBeGreaterThan(0);
      expect(layout.references.every((reference) => validReferences.has(reference))).toBe(true);
      expect(new Set(layout.sectionOrder)).toEqual(requiredSections);
    }
  });

  it("selects only available canonical content", () => {
    for (const layout of layouts) {
      expect(layoutLabContent.capabilities[layout.featured.capability]).toBeDefined();
      expect(layoutLabContent.outcomes[layout.featured.outcome]).toBeDefined();
      expect(layoutLabContent.proofRecords[layout.featured.proof]).toBeDefined();
    }
  });
});
