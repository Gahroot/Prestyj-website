import Anthropic from "@anthropic-ai/sdk";
import type {
  Message,
  MessageCreateParamsNonStreaming,
  TextBlockParam,
  Tool,
} from "@anthropic-ai/sdk/resources/messages/messages";
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
  cachedInputPerM: number;
}

const PRICING: Record<string, PriceTier> = {
  "claude-sonnet-4-6": { inputPerM: 3, outputPerM: 15, cachedInputPerM: 0.3 },
  "claude-sonnet-4-5": { inputPerM: 3, outputPerM: 15, cachedInputPerM: 0.3 },
  "claude-haiku-4-5": { inputPerM: 1, outputPerM: 5, cachedInputPerM: 0.1 },
  "claude-haiku-4-5-20251001": {
    inputPerM: 1,
    outputPerM: 5,
    cachedInputPerM: 0.1,
  },
};

const FALLBACK_PRICING: PriceTier = {
  inputPerM: 5,
  outputPerM: 15,
  cachedInputPerM: 0.5,
};

function resolvePricing(model: string): PriceTier {
  if (PRICING[model]) return PRICING[model];
  const prefix = Object.keys(PRICING).find((k) => model.startsWith(k));
  if (prefix) return PRICING[prefix];
  console.warn(
    `[anthropic] Unknown pricing for model "${model}"; using conservative fallback ($5/M in, $15/M out).`
  );
  return FALLBACK_PRICING;
}

function computeCost(
  model: string,
  inputTokens: number,
  cachedInputTokens: number,
  outputTokens: number
): number {
  const p = resolvePricing(model);
  const uncachedInput = Math.max(0, inputTokens - cachedInputTokens);
  return (
    (uncachedInput * p.inputPerM) / 1_000_000 +
    (cachedInputTokens * p.cachedInputPerM) / 1_000_000 +
    (outputTokens * p.outputPerM) / 1_000_000
  );
}

function extractText(msg: Message): string {
  const parts: string[] = [];
  for (const block of msg.content) {
    if (block.type === "text") {
      parts.push(block.text);
    } else if (block.type === "tool_use") {
      parts.push(JSON.stringify(block.input));
    }
  }
  return parts.join("").trim();
}

export class AnthropicProvider implements LLMProvider {
  public readonly name: ProviderName = "anthropic";
  private readonly config: ProviderEndpointConfig;
  private clientCache?: Anthropic;

  constructor(config: ProviderEndpointConfig) {
    this.config = config;
  }

  isConfigured(): boolean {
    const key = process.env[this.config.apiKeyEnv];
    return typeof key === "string" && key.length > 0;
  }

  private client(): Anthropic {
    if (this.clientCache) return this.clientCache;
    const apiKey = process.env[this.config.apiKeyEnv];
    if (!apiKey) {
      throw new Error(
        `[anthropic] Missing API key in env var ${this.config.apiKeyEnv}`
      );
    }
    this.clientCache = new Anthropic({
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

    const wantsJson = req.responseFormat === "json";
    const systemText = wantsJson
      ? `${req.system}\n\nRespond with only valid JSON. Do not wrap the output in markdown code fences. Do not include any prose before or after the JSON.`
      : req.system;

    const systemBlock: TextBlockParam = {
      type: "text",
      text: systemText,
    };
    if (req.cacheSystem) {
      systemBlock.cache_control = { type: "ephemeral" };
    }

    const params: MessageCreateParamsNonStreaming = {
      model: req.model,
      max_tokens: req.maxTokens,
      system: [systemBlock],
      messages: [{ role: "user", content: req.user }],
    };

    if (typeof req.temperature === "number") {
      params.temperature = req.temperature;
    }

    if (wantsJson && req.jsonSchema) {
      const tool: Tool = {
        name: "emit_structured_response",
        description:
          "Emit the final response as a JSON object conforming to the provided schema.",
        input_schema: req.jsonSchema as unknown as Tool.InputSchema,
      };
      params.tools = [tool];
      params.tool_choice = { type: "tool", name: "emit_structured_response" };
    }

    let msg: Message;
    try {
      msg = await client.messages.create(params);
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      throw new Error(
        `[anthropic] generate failed (model=${req.model}): ${reason}`
      );
    }

    const inputTokens = msg.usage.input_tokens ?? 0;
    const outputTokens = msg.usage.output_tokens ?? 0;
    const cachedInputTokens = msg.usage.cache_read_input_tokens ?? 0;
    const cacheCreationTokens = msg.usage.cache_creation_input_tokens ?? 0;
    const totalInputForCost = inputTokens + cacheCreationTokens;

    return {
      content: extractText(msg),
      usage: {
        inputTokens: totalInputForCost,
        outputTokens,
        cachedInputTokens,
      },
      model: msg.model,
      provider: this.name,
      costUSD: computeCost(
        req.model,
        totalInputForCost,
        cachedInputTokens,
        outputTokens
      ),
      latencyMs: Date.now() - start,
      raw: msg,
    };
  }
}
