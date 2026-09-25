import { readFileSync } from "node:fs";
import { z } from "zod";
import { describe, expect, it } from "vitest";
import { observationSchema, buyerPromptObservationSchema } from "./institutional-measurement";

describe("institutional observations", () => {
  it("requires evidence for the partial baseline and preserves remaining unknowns", () => {
    const data = z
      .object({ observations: z.array(observationSchema) })
      .parse(JSON.parse(readFileSync("data/seo/institutional-baseline.json", "utf8")));
    expect(data.observations).toHaveLength(10);
    expect(data.observations.filter((observation) => observation.value !== null)).toHaveLength(4);
    const unknown = data.observations.find(
      (observation) => observation.metric === "bing-institutional-page-view-citations",
    );
    expect(unknown?.value).toBeNull();
    expect(observationSchema.safeParse({ ...unknown, value: 0 }).success).toBe(false);
  });
  it("has eight fixed prompts and no invented observations", () => {
    const data = z
      .object({
        prompts: z.array(z.object({ id: z.string(), text: z.string() })),
        observations: z.array(buyerPromptObservationSchema),
      })
      .parse(JSON.parse(readFileSync("data/seo/institutional-buyer-prompts.json", "utf8")));
    expect(data.prompts).toHaveLength(8);
    expect(new Set(data.prompts.map((prompt) => prompt.id)).size).toBe(8);
    expect(data.observations).toEqual([]);
  });
  it("distinguishes a failed engine request from an observed no-citation answer", () => {
    const base = {
      promptId: "BP-01",
      engine: "fixture",
      engineVersion: "test",
      observedAt: "2026-09-24T12:00:00Z",
      locale: "en-US",
      searchMode: "web",
      evidencePath: "private/test",
      notes: null,
    };
    expect(
      buyerPromptObservationSchema.safeParse({
        ...base,
        outcome: "error",
        citedUrls: [],
        prestyjCited: false,
      }).success,
    ).toBe(false);
    expect(
      buyerPromptObservationSchema.safeParse({
        ...base,
        outcome: "answered",
        citedUrls: [],
        prestyjCited: false,
      }).success,
    ).toBe(true);
  });
});
