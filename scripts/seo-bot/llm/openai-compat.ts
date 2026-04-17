import OpenAI from "openai";
import type { ChatCompletionCreateParamsNonStreaming } from "openai/resources/chat/completions/completions";
import type {
  LLMProvider,
  LLMRequest,
  LLMResponse,
  ProviderEndpointConfig,
  ProviderName,
} from "../types";

interface PriceTier {
  inputPerM: number;
  outputPerM: number;
  cachedInputPerM?: number;
}

const PRICING: Record<string, PriceTier> = {
  "deepseek-chat": { inputPerM: 0.27, outputPerM: 1.1 },
  "deepseek-reasoner": { inputPerM: 0.55, outputPerM: 2.19 },
  "qwen-plus": { inputPerM: 0.4, outputPerM: 1.2 },
  "qwen-max": { inputPerM: 1.6, outputPerM: 6.4 },
  "kimi-k2": { inputPerM: 0.6, outputPerM: 2.5 },
  "kimi-k2-0905-preview": { inputPerM: 0.6, outputPerM: 2.5 },
  "moonshot-v1-8k": { inputPerM: 0.6, outputPerM: 2.5 },
  "llama-3.3-70b-versatile": { inputPerM: 0.59, outputPerM: 0.79 },
  "llama-3.1-70b-versatile": { inputPerM: 0.59, outputPerM: 0.79 },
};

const FALLBACK_PRICING: PriceTier = { inputPerM: 5, outputPerM: 15 };

const OPENROUTER_MARKUP = 1.05;

function isOpenRouter(baseURL?: string): boolean {
  return typeof baseURL === "string" && baseURL.includes("openrouter.ai");
}

function resolvePricing(model: string): PriceTier {
  if (PRICING[model]) return PRICING[model];
  const prefix = Object.keys(PRICING).find((k) => model.startsWith(k));
  if (prefix) return PRICING[prefix];
  console.warn(
    `[openai-compat] Unknown pricing for model "${model}"; using conservative fallback ($5/M in, $15/M out).`
  );
  return FALLBACK_PRICING;
}

function computeCost(
  model: string,
  inputTokens: number,
  cachedInputTokens: number,
  outputTokens: number,
  openRouterPassthroughCost?: number
): number {
  if (typeof openRouterPassthroughCost === "number") {
    return openRouterPassthroughCost * OPENROUTER_MARKUP;
  }
  const p = resolvePricing(model);
  const cachedRate = p.cachedInputPerM ?? p.inputPerM;
  const uncachedInput = Math.max(0, inputTokens - cachedInputTokens);
  return (
    (uncachedInput * p.inputPerM) / 1_000_000 +
    (cachedInputTokens * cachedRate) / 1_000_000 +
    (outputTokens * p.outputPerM) / 1_000_000
  );
}

interface OpenRouterGenerationResponse {
  data?: {
    total_cost?: number;
  };
}

async function fetchOpenRouterCost(
  client: OpenAI,
  generationId: string
): Promise<number | undefined> {
  try {
    const result = await client.get<OpenRouterGenerationResponse>(
      `/generation?id=${encodeURIComponent(generationId)}`
    );
    const cost = result?.data?.total_cost;
    return typeof cost === "number" ? cost : undefined;
  } catch {
    return undefined;
  }
}

export class OpenAICompatProvider implements LLMProvider {
  public readonly name: ProviderName = "openai-compat";
  private readonly config: ProviderEndpointConfig;
  private clientCache?: OpenAI;

  constructor(config: ProviderEndpointConfig) {
    this.config = config;
  }

  isConfigured(): boolean {
    const key = process.env[this.config.apiKeyEnv];
    return typeof key === "string" && key.length > 0;
  }

  private client(): OpenAI {
    if (this.clientCache) return this.clientCache;
    const apiKey = process.env[this.config.apiKeyEnv];
    if (!apiKey) {
      throw new Error(
        `[openai-compat] Missing API key in env var ${this.config.apiKeyEnv}`
      );
    }
    this.clientCache = new OpenAI({
      apiKey,
      baseURL: this.config.baseURL,
    });
    return this.clientCache;
  }

  estimateCostUSD(req: LLMRequest, outputTokens: number): number {
    const approxInputTokens = Math.ceil(
      (req.system.length + req.user.length) / 4
    );
    return computeCost(req.model, approxInputTokens, 0, outputTokens);
  }

  async generate(req: LLMRequest): Promise<LLMResponse> {
    const start = Date.now();
    const client = this.client();

    const params: ChatCompletionCreateParamsNonStreaming = {
      model: req.model,
      max_tokens: req.maxTokens,
      messages: [
        { role: "system", content: req.system },
        { role: "user", content: req.user },
      ],
    };
    if (typeof req.temperature === "number") {
      params.temperature = req.temperature;
    }
    if (req.responseFormat === "json") {
      params.response_format = { type: "json_object" };
    }

    try {
      const completion = await client.chat.completions.create(params);
      const choice = completion.choices[0];
      const content = choice?.message?.content ?? "";
      const usage = completion.usage;
      const inputTokens = usage?.prompt_tokens ?? 0;
      const outputTokens = usage?.completion_tokens ?? 0;
      const cachedInputTokens =
        usage?.prompt_tokens_details?.cached_tokens ?? 0;

      let openRouterCost: number | undefined;
      if (isOpenRouter(this.config.baseURL) && completion.id) {
        openRouterCost = await fetchOpenRouterCost(client, completion.id);
      }

      return {
        content: content.trim(),
        usage: {
          inputTokens,
          outputTokens,
          cachedInputTokens,
        },
        model: completion.model ?? req.model,
        provider: this.name,
        costUSD: computeCost(
          req.model,
          inputTokens,
          cachedInputTokens,
          outputTokens,
          openRouterCost
        ),
        latencyMs: Date.now() - start,
        raw: completion,
      };
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      throw new Error(
        `[openai-compat] generate failed (model=${req.model}, baseURL=${this.config.baseURL ?? "default"}): ${reason}`
      );
    }
  }
}
