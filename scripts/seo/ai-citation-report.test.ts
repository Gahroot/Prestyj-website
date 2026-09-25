import { describe, expect, it } from "vitest";
import {
  parseCitationCsv,
  snapshotMetadataSchema,
  normalizeCitationUrl,
  classifyCitationUrl,
  comparisonReason,
  snapshotFreshness,
  renderCitationReport,
  escapeReportCell,
  sumCitations,
  type CitationSnapshot,
} from "./ai-citation-report";

function snapshot(folder = "2026-09-08"): CitationSnapshot {
  return {
    folder,
    metadata: snapshotMetadataSchema.parse({
      source: "bing-ai-performance",
      exportDate: "2026-09-08",
      reportingStart: "2026-09-01",
      reportingEnd: "2026-09-07",
      filters: { country: "all", property: "prestyj.com" },
      coverage: { queries: "sampled", pages: "complete", scope: "supported Bing AI surfaces" },
    }),
    queries: [{ label: "buyer question", citations: 5 }],
    pages: [{ label: "https://www.prestyj.com/blog/ai-assisted-quarter-end-close", citations: 7 }],
  };
}
describe("Bing-format citation parsing", () => {
  it("handles BOM, quotes, commas, doubled quotes, CRLF and embedded newlines", () => {
    expect(
      parseCitationCsv(
        '\uFEFF"Grounding Query","Citations"\r\n"a, ""quoted""\nquery","12"\r\n',
        "queries",
      ),
    ).toEqual([{ label: 'a, "quoted"\nquery', citations: 12 }]);
  });
  it.each(["-1", "1.5", "NaN", "", "9007199254740992", "1e3", "+2"])(
    "rejects invalid count %s",
    (count) => {
      expect(() =>
        parseCitationCsv(`Page,Citations\nhttps://prestyj.com/,${count}`, "pages"),
      ).toThrow();
    },
  );
  it.each([
    "Query,Citations\nx,1",
    'Grounding Query,Citations\n"unfinished,1',
    'Grounding Query,Citations\n"x"bad,1',
    "Grounding Query,Citations\nx,1,2",
    "Grounding Query,Citations\nx,1\nx,2",
    "Grounding Query,Citations\n\n",
  ])("rejects malformed CSV", (csv) => {
    expect(() => parseCitationCsv(csv, "queries")).toThrow();
  });
  it("bounds input and safe integer sums", () => {
    expect(() => parseCitationCsv("x".repeat(2_000_001), "queries")).toThrow("size limit");
    expect(() =>
      sumCitations([
        { label: "a", citations: Number.MAX_SAFE_INTEGER },
        { label: "b", citations: 1 },
      ]),
    ).toThrow();
  });
  it("normalizes host variants and classifies only registered institutional URLs", () => {
    expect(
      normalizeCitationUrl(
        "http://www.prestyj.com/blog/ai-assisted-quarter-end-close/?utm_source=x#part",
      ),
    ).toBe("https://prestyj.com/blog/ai-assisted-quarter-end-close");
    expect(classifyCitationUrl("https://www.prestyj.com/blog/ai-assisted-quarter-end-close")).toBe(
      "institutional",
    );
    expect(classifyCitationUrl("https://prestyj.com/blog/old-realtor-post")).toBe(
      "legacy-or-unregistered",
    );
    expect(classifyCitationUrl("https://example.com/research")).toBe("external");
  });
});
describe("honest comparison gates", () => {
  it("requires metadata and compatible non-overlapping windows", () => {
    const a = snapshot();
    const b = snapshot("2026-09-15");
    if (!b.metadata) throw new Error("Missing fixture");
    b.metadata.reportingStart = "2026-09-08";
    b.metadata.reportingEnd = "2026-09-14";
    b.metadata.exportDate = "2026-09-15";
    expect(comparisonReason(a, b)).toBeNull();
    expect(comparisonReason({ ...a, metadata: null }, b)).toContain("unknown");
    b.metadata.filters = { country: "US" };
    expect(comparisonReason(a, b)).toContain("Filters");
    b.metadata.filters = a.metadata?.filters ?? null;
    b.metadata.source = "other";
    expect(comparisonReason(a, b)).toContain("Sources");
    b.metadata.source = "bing-ai-performance";
    b.metadata.coverage = null;
    expect(comparisonReason(a, b)).toContain("Coverage");
    expect(comparisonReason(a, a)).toContain("overlap");
  });
  it("rejects invalid dates and partial windows", () => {
    expect(
      snapshotMetadataSchema.safeParse({ ...snapshot().metadata, reportingEnd: "2026-02-30" })
        .success,
    ).toBe(false);
    expect(
      snapshotMetadataSchema.safeParse({ ...snapshot().metadata, reportingStart: null }).success,
    ).toBe(false);
  });
  it("reports stale/unknown snapshots rather than treating folder dates as windows", () => {
    expect(snapshotFreshness(snapshot(), "2026-11-01")).toBe("stale");
    expect(snapshotFreshness(snapshot(), "2026-09-24")).toBe("current");
    expect(snapshotFreshness({ ...snapshot(), metadata: null }, "2026-09-24")).toBe("unknown");
  });
  it("escapes report cells and never adds page and query views", () => {
    const value = { ...snapshot(), metadata: null };
    value.queries = [{ label: "<b>|[link](https://example.com)\nnext", citations: 5 }];
    const report = renderCitationReport([value], "2026-09-24");
    expect(report).toContain("MUST NOT be added");
    expect(report).toContain("No trend calculated");
    expect(report).not.toContain("| 12 |");
    expect(report).not.toContain("<b>");
    expect(report).not.toContain("[link]");
    expect(escapeReportCell("a|b\nc")).toBe("a&#124;b c");
  });
});
