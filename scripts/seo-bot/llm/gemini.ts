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

    const generationConfig: GenerationConfig = {
      maxOutputTokens: req.maxTokens,
    };
    if (typeof req.temperature === "number") {
      generationConfig.temperature = req.temperature;
    }
    if (req.responseFormat === "json") {
      generationConfig.responseMimeType = "application/json";
      if (req.jsonSchema) {
        generationConfig.responseSchema = req.jsonSchema as unknown as GenerationConfig["responseSchema"];
      }
    }

    const modelParams: ModelParams = {
      model: req.model,
      systemInstruction: req.system,
      generationConfig,
    };

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
