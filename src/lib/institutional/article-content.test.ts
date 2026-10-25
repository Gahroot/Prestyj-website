import { describe, expect, it } from "vitest";

import {
  extractFaq,
  extractH2Headings,
  inlineCtaAnchorHeading,
} from "@/lib/institutional/article-content";

const source = `---
title: "X"
date: "2026-01-01"
---

**TL;DR** answer.

## What is the answer?

Body.

\`\`\`md
## Not a heading
\`\`\`

## Second **section**

More.

## Frequently asked questions

### Does it approve accounting?

No. The [fund controller](/about) approves
the package.

### Which systems?

- The ledger
- The bank

## Sources and limitations

Text.
`;

describe("article content parsing", () => {
  it("extracts H2 headings outside code fences", () => {
    expect(extractH2Headings(source)).toEqual([
      "What is the answer?",
      "Second section",
      "Frequently asked questions",
      "Sources and limitations",
    ]);
  });

  it("anchors the inline CTA at the second H2", () => {
    expect(inlineCtaAnchorHeading(source)).toBe("Second section");
    expect(inlineCtaAnchorHeading("## Only one")).toBeNull();
  });

  it("extracts FAQ pairs with plain-text answers", () => {
    expect(extractFaq(source)).toEqual([
      {
        question: "Does it approve accounting?",
        answer: "No. The fund controller approves the package.",
      },
      { question: "Which systems?", answer: "The ledger The bank" },
    ]);
  });

  it("returns no FAQ when the section is absent", () => {
    expect(extractFaq("## Intro\n\n### Q?\n\nA.")).toEqual([]);
  });
});
