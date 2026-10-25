import { describe, expect, it } from "vitest";
import { copiedPassages, originalityGate } from "./gates";
import { clipAtWord } from "./write";

const source =
  "The ILPA Reporting Template promotes more uniform reporting practices in the private equity industry related to fees, expenses and carried interest. Other unrelated text follows here.";

describe("originality gate", () => {
  it("fails on a long unquoted passage copied from a source", () => {
    const body = `Intro.\n\nThe ILPA Reporting Template promotes more uniform reporting practices in the private equity industry related to fees, expenses and carried interest.\n\n## Sources\n- x`;
    expect(copiedPassages(body, [source], 20)).toHaveLength(1);
    expect(originalityGate(body, [source], 20).passed).toBe(false);
  });

  it("passes paraphrase, short quotes and copied text inside the Sources section", () => {
    const body = `ILPA's template standardises how GPs report fees, expenses and carry. ILPA says it "promotes more uniform reporting practices in the private equity industry related to fees, expenses and carried interest".\n\n## Sources\n- The ILPA Reporting Template promotes more uniform reporting practices in the private equity industry related to fees, expenses and carried interest.`;
    expect(originalityGate(body, [source], 20).passed).toBe(true);
  });
});

describe("soft metadata limits", () => {
  it("clips overlong text at a word boundary within the limit", () => {
    const long = "A mapping-and-exceptions approach ".repeat(10).trim();
    const out = clipAtWord(long, 200);
    expect(out.length).toBeLessThanOrEqual(200);
    expect(out.endsWith(".")).toBe(true);
    expect(clipAtWord("short text", 200)).toBe("short text");
  });
});
