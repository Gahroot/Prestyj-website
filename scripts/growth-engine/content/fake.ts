/** Deterministic fake LLM, fetcher and repo gates for tests and `cycle --fake-llm`. */
import type { Fetcher } from "./factcheck";
import type { GateResult, RepoGates } from "./gates";
import type { ContentLlm, LlmRequest, LlmResult } from "./llm";

const TERMS = [
  "lease abstract",
  "rent roll",
  "estoppel",
  "CAM reconciliation",
  "capital call",
  "loan covenant",
];

export function fakeArticleBody(options: { extra?: string } = {}): string {
  const paras: string[] = [];
  for (let i = 0; i < 24; i++) {
    const term = TERMS[i % TERMS.length] ?? "rent roll";
    paras.push(
      `Checkpoint ${i + 1} covers the ${term} step number ${i + 1}. The reviewer compares field ${i + 7} with the system of record and records the decision ${i + 3} in the exception queue. Each prepared figure keeps its source attached so the approver at stage ${i + 11} can trace it without rebuilding the schedule. When evidence for item ${i + 13} is missing, the agent stops at the review gate and names the owner for batch ${i + 17}. Nothing at checkpoint ${i + 1} is released until the responsible person signs the packet labelled ${term} ${i + 19}.`,
    );
  }
  return `A watchlist agent should prepare covenant and lease exceptions with the source attached, while the asset manager keeps approval. It reads the system of record, flags what changed, and routes each item through a review gate.

## What should the agent prepare each month?

${paras.slice(0, 6).join("\n\n")}

## How should reviewers handle conflicting records?

${paras.slice(6, 12).join("\n\n")}

## Which controls keep the work reviewable?

${paras.slice(12, 18).join("\n\n")}

## Illustrative example (synthetic)

${paras.slice(18, 24).join("\n\n")}
${options.extra ?? ""}
## Frequently asked questions

### Does the agent approve exceptions?

No. It prepares the packet and the named reviewer decides.

### Which systems does it read?

The property and accounting systems the firm already runs, read-only by default.

### What happens when a source is missing?

The item enters the exception queue with the gap described.

## Review and limitations

Asset management reviews every flagged item. This article is general guidance and does not cover legal interpretation of loan documents.

## Sources

- https://example.org/source-one — background on lease administration.
- https://example.org/source-two — background on covenant monitoring.

See how this works on your own records in a [workflow demo](/book-demo).
`;
}

export type FakeLlmOptions = {
  slug?: string;
  title?: string;
  body?: string;
  factcheck?: {
    claims: {
      claim: string;
      quote: string;
      core: boolean;
      supported: boolean;
      replacement: string | null;
    }[];
  };
  failWith?: Error;
};

export function createFakeLlm(options: FakeLlmOptions = {}): ContentLlm & { calls: LlmRequest[] } {
  const calls: LlmRequest[] = [];
  return {
    calls,
    async complete(request): Promise<LlmResult> {
      calls.push(request);
      if (options.failWith) throw options.failWith;
      const usage = {
        inputTokens: 1000,
        outputTokens: 500,
        webSearches: request.webSearchMaxUses ? 1 : 0,
      };
      if (request.purpose === "research")
        return {
          ...usage,
          text: JSON.stringify([
            {
              query: "How should an asset manager monitor loan covenants with AI?",
              audience: "owner-operator",
              evidence: "Fake research item",
              score: 50,
            },
          ]),
        };
      if (request.purpose === "factcheck")
        return {
          ...usage,
          text: JSON.stringify(
            options.factcheck ?? {
              claims: [
                {
                  claim: "c",
                  quote: "q",
                  core: true,
                  supported: true,
                  sourceUrl: "https://example.org/source-one",
                  replacement: null,
                },
              ],
            },
          ),
        };
      const slug = options.slug ?? "covenant-watchlist-agent-review";
      const meta = {
        slug,
        title: options.title ?? "Covenant Watchlists With Reviewable Exception Packets",
        description:
          "How an agent can prepare covenant and lease exception packets from the system of record while asset managers keep approval and release.",
        keywords: ["covenant monitoring", "lease exceptions"],
        category: "Portfolio intelligence",
        capabilities: ["portfolio-intelligence"],
        topics: ["exceptions", "review-controls"],
        registryTitle: "A covenant watchlist needs reviewable exception packets",
        registryDescription:
          "What an agent prepares for covenant and lease monitoring, and what the asset manager keeps.",
        changeSummary: "fake draft",
      };
      return {
        ...usage,
        text: `<<<META>>>\n${JSON.stringify(meta)}\n<<<BODY>>>\n${options.body ?? fakeArticleBody()}`,
      };
    },
  };
}

export const fakeFetcher: Fetcher = async (url) => ({
  ok: true,
  text: `<html><body><p>Reference page at ${url}. ${"Lease administration and covenant monitoring guidance. ".repeat(20)}</p></body></html>`,
});

const pass = (name: string): GateResult => ({ name, passed: true, details: [] });
export const passingRepoGates: RepoGates = {
  typecheck: async () => pass("typecheck"),
  institutionalCheck: async () => pass("institutional-check"),
  registryTests: async () => pass("registry-tests"),
};
