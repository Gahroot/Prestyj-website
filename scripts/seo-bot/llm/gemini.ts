import {
  GoogleGenerativeAI,
  type GenerationConfig,
  type ModelParams,
} from "@google/generative-ai";
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
}

const PRICING: Record<string, PriceTier> = {
  "gemini-2.5-flash": { inputPerM: 0.075, outputPerM: 0.3 },
  "gemini-2.5-pro": { inputPerM: 1.25, outputPerM: 10 },
};

const FALLBACK_PRICING: PriceTier = { inputPerM: 5, outputPerM: 15 };

/**
 * Gemini's responseSchema accepts only a subset of JSON Schema / OpenAPI.
 * Unsupported keywords (additionalProperties, $schema, $id, examples, default,
 * const, etc.) cause a 400 Bad Request. Recursively strip them.
 */
const GEMINI_SCHEMA_ALLOWED = new Set([
  "type",
  "properties",
  "required",
  "items",
  "enum",
  "format",
  "description",
  "nullable",
  "minItems",
  "maxItems",
  "minimum",
  "maximum",
  "minLength",
  "maxLength",
  "pattern",
  "title",
  "anyOf",
  "oneOf",
  "allOf",
  "propertyOrdering",
]);

function sanitizeGeminiSchema(schema: unknown): unknown {
  if (Array.isArray(schema)) {
    return schema.map(sanitizeGeminiSchema);
  }
  if (schema && typeof schema === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(schema as Record<string, unknown>)) {
      if (!GEMINI_SCHEMA_ALLOWED.has(key)) continue;
      out[key] = sanitizeGeminiSchema(val);
    }
    return out;
  }
  return schema;
}

function resolvePricing(model: string): PriceTier {
  if (PRICING[model]) return PRICING[model];
  const prefix = Object.keys(PRICING).find((k) => model.startsWith(k));
  if (prefix) return PRICING[prefix];
  console.warn(
    `[gemini] Unknown pricing for model "${model}"; using conservative fallback ($5/M in, $15/M out).`
  );
  return FALLBACK_PRICING;
}

function computeCost(
  model: string,
  inputTokens: number,
  outputTokens: number
): number {
  const p = resolvePricing(model);
  return (
    (inputTokens * p.inputPerM) / 1_000_000 +
    (outputTokens * p.outputPerM) / 1_000_000
  );
}

export class GeminiProvider implements LLMProvider {
  public readonly name: ProviderName = "gemini";
  private readonly config: ProviderEndpointConfig;
  private clientCache?: GoogleGenerativeAI;

  constructor(config: ProviderEndpointConfig) {
    this.config = config;
  }

  isConfigured(): boolean {
    const key = process.env[this.config.apiKeyEnv];
    return typeof key === "string" && key.length > 0;
  }

  private client(): GoogleGenerativeAI {
    if (this.clientCache) return this.clientCache;
    const apiKey = process.env[this.config.apiKeyEnv];
    if (!apiKey) {
      throw new Error(
        `[gemini] Missing API key in env var ${this.config.apiKeyEnv}`
      );
    }
    this.clientCache = new GoogleGenerativeAI(apiKey);
    return this.clientCache;
  }

  estimateCostUSD(req: LLMRequest, outputTokens: number): number {
    const approxInputTokens = Math.ceil(
      (req.system.length + req.user.length) / 4
    );
    return computeCost(req.model, approxInputTokens, outputTokens);
  }

  async generate(req: LLMRequest): Promise<LLMResponse> {
    const start = Date.now();
    const client = this.client();

    // Gemini 2.5 models default to dynamic "thinking" which eats the
    // maxOutputTokens budget. Bump the budget so the visible response has
    // room. For non-research tasks we disable thinking entirely.
    const isFlash = req.model.includes("flash");
    const needsThinking = req.useWebSearch === true;
    const thinkingBudget = needsThinking
      ? undefined
      : isFlash
        ? 0
        : 512;
    const outputBudget = Math.max(req.maxTokens, 2048);

    const generationConfig: GenerationConfig & {
      thinkingConfig?: { thinkingBudget?: number };
    } = {
      maxOutputTokens: outputBudget,
    };
    if (typeof thinkingBudget === "number") {
      generationConfig.thinkingConfig = { thinkingBudget };
    }
    if (typeof req.temperature === "number") {
      generationConfig.temperature = req.temperature;
    }
    // Google Search grounding is mutually exclusive with JSON mode; prefer search.
    const useSearch = req.useWebSearch === true;
    if (req.responseFormat === "json" && !useSearch) {
      generationConfig.responseMimeType = "application/json";
    }

    const modelParams: ModelParams = {
      model: req.model,
      systemInstruction: req.system,
      generationConfig,
    };
    if (useSearch) {
      (modelParams as unknown as { tools: unknown[] }).tools = [
        { googleSearch: {} },
      ];
    }

    try {
      const model = client.getGenerativeModel(modelParams);
      const result = await model.generateContent(req.user);
      const response = result.response;
      const content = response.text();
      const usageMeta = response.usageMetadata;
      const inputTokens = usageMeta?.promptTokenCount ?? 0;
      const outputTokens = usageMeta?.candidatesTokenCount ?? 0;
      const cachedInputTokens = usageMeta?.cachedContentTokenCount ?? 0;

      return {
        content: content.trim(),
        usage: {
          inputTokens,
          outputTokens,
          cachedInputTokens,
        },
        model: req.model,
        provider: this.name,
        costUSD: computeCost(req.model, inputTokens, outputTokens),
        latencyMs: Date.now() - start,
        raw: response,
      };
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      throw new Error(
        `[gemini] generate failed (model=${req.model}): ${reason}`
      );
    }
  }
}
