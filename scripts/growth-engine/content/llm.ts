import Anthropic from "@anthropic-ai/sdk";
import { priceFor, type ContentConfig } from "./config";

export type LlmPurpose = "research" | "write" | "factcheck";

export type LlmRequest = {
  purpose: LlmPurpose;
  model: string;
  system: string;
  prompt: string;
  maxTokens: number;
  /** Enables the Anthropic server-side web search tool with this many uses. */
  webSearchMaxUses?: number;
};

export type LlmResult = {
  text: string;
  inputTokens: number;
  outputTokens: number;
  webSearches: number;
};

/** Injectable model boundary. Tests pass a fake; production uses Anthropic. */
export type ContentLlm = { complete(request: LlmRequest): Promise<LlmResult> };

export class LlmAuthError extends Error {}
export class BudgetExceededError extends Error {}

export function createAnthropicLlm(apiKey: string, config: ContentConfig): ContentLlm {
  const client = new Anthropic({ apiKey });
  return {
    async complete(request) {
      try {
        const tools = request.webSearchMaxUses
          ? [
              {
                type: config.webSearch.toolType,
                name: "web_search",
                max_uses: request.webSearchMaxUses,
              } as unknown as Anthropic.Messages.ToolUnion,
            ]
          : undefined;
        const stream = client.messages.stream({
          model: request.model,
          max_tokens: request.maxTokens,
          system: request.system,
          messages: [{ role: "user", content: request.prompt }],
          ...(tools ? { tools } : {}),
        });
        const message = await stream.finalMessage();
        // After server-side tool use, the answer is the text written after the last tool block.
        const lastTool = message.content.reduce(
          (last, block, index) => (block.type === "text" ? last : index),
          -1,
        );
        const text = message.content
          .slice(lastTool + 1)
          .flatMap((block) => (block.type === "text" ? [block.text] : []))
          .join("");
        if (message.stop_reason === "max_tokens")
          console.warn(
            `[content] ${request.purpose}: output hit max_tokens (${request.maxTokens})`,
          );
        const usage = message.usage;
        return {
          text,
          inputTokens:
            usage.input_tokens +
            (usage.cache_creation_input_tokens ?? 0) +
            (usage.cache_read_input_tokens ?? 0),
          outputTokens: usage.output_tokens,
          webSearches: usage.server_tool_use?.web_search_requests ?? 0,
        };
      } catch (error) {
        if (
          error instanceof Anthropic.AuthenticationError ||
          error instanceof Anthropic.PermissionDeniedError
        )
          throw new LlmAuthError(`Anthropic rejected the API key (${error.status})`);
        throw error;
      }
    },
  };
}

/** Wraps an LLM with per-run cost accounting and a hard spend cap. */
export class MeteredLlm {
  spentUsd = 0;
  constructor(
    private readonly inner: ContentLlm,
    private readonly config: ContentConfig,
  ) {}

  costOf(
    model: string,
    result: Pick<LlmResult, "inputTokens" | "outputTokens" | "webSearches">,
  ): number {
    const price = priceFor(this.config, model);
    return (
      (result.inputTokens * price.inputPerM + result.outputTokens * price.outputPerM) / 1_000_000 +
      result.webSearches * this.config.pricing.webSearchPerUse
    );
  }

  async complete(request: LlmRequest): Promise<LlmResult & { costUsd: number }> {
    // Worst case: the full output budget plus a generous input allowance.
    const worst = this.costOf(request.model, {
      inputTokens:
        Math.ceil(request.prompt.length / 3) + 20_000 * (request.webSearchMaxUses ? 1 : 0),
      outputTokens: request.maxTokens,
      webSearches: request.webSearchMaxUses ?? 0,
    });
    if (this.spentUsd + worst > this.config.caps.maxCostPerRunUsd)
      throw new BudgetExceededError(
        `Run budget $${this.config.caps.maxCostPerRunUsd} would be exceeded (spent $${this.spentUsd.toFixed(2)}, next call up to $${worst.toFixed(2)})`,
      );
    const result = await this.inner.complete(request);
    const costUsd = this.costOf(request.model, result);
    this.spentUsd += costUsd;
    return { ...result, costUsd };
  }
}

/** Every balanced top-level JSON object/array substring of `text`, in order (string-aware). */
function balancedCandidates(text: string): string[] {
  const out: string[] = [];
  for (let start = 0; start < text.length; start++) {
    const open = text[start];
    if (open !== "{" && open !== "[") continue;
    const stack: string[] = [];
    let inString = false;
    let end = -1;
    for (let i = start; i < text.length; i++) {
      const ch = text[i];
      if (inString) {
        if (ch === "\\") i++;
        else if (ch === '"') inString = false;
        continue;
      }
      if (ch === '"') inString = true;
      else if (ch === "{" || ch === "[") stack.push(ch === "{" ? "}" : "]");
      else if (ch === "}" || ch === "]") {
        if (stack.pop() !== ch) break;
        if (!stack.length) {
          end = i;
          break;
        }
      }
    }
    if (end > start) {
      out.push(text.slice(start, end + 1));
      start = end;
    }
  }
  return out;
}

/**
 * Pull a JSON value out of model text. Prefers the last ```json fenced block that parses,
 * then the longest balanced JSON block that parses (last wins ties), so prose,
 * citations or a recap before/after the JSON do not break parsing.
 */
export function extractJson(text: string): unknown {
  const fenced = [...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/g)].map((m) => m[1] ?? "");
  for (const block of fenced.reverse()) {
    try {
      return JSON.parse(block.trim());
    } catch {
      // try the balanced scan below
    }
  }
  const candidates = balancedCandidates(text);
  let best: { length: number; value: unknown } | null = null;
  for (const candidate of candidates) {
    try {
      const value: unknown = JSON.parse(candidate);
      if (!best || candidate.length >= best.length) best = { length: candidate.length, value };
    } catch {
      // keep looking
    }
  }
  if (best) return best.value;
  throw new Error(
    candidates.length || fenced.length
      ? "Unparseable JSON in model output"
      : "No JSON in model output",
  );
}
