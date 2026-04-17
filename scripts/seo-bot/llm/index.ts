import type {
  AppConfig,
  LLMProvider,
  ProviderEndpointConfig,
  ProviderName,
} from "../types";
import { AnthropicProvider } from "./anthropic";
import { GeminiProvider } from "./gemini";
import { OpenAICompatProvider } from "./openai-compat";

export { AnthropicProvider } from "./anthropic";
export { GeminiProvider } from "./gemini";
export { OpenAICompatProvider } from "./openai-compat";
export { runABTest } from "./ab-test";

export type ConfiguredProvider = ProviderEndpointConfig & { type: ProviderName };

function buildProvider(cfg: ConfiguredProvider): LLMProvider {
  switch (cfg.type) {
    case "anthropic":
      return new AnthropicProvider(cfg);
    case "gemini":
      return new GeminiProvider(cfg);
    case "openai-compat":
      return new OpenAICompatProvider(cfg);
    default: {
      const exhaustive: never = cfg.type;
      throw new Error(
        `[llm] Unknown provider type "${String(exhaustive)}" — update router switch.`
      );
    }
  }
}

export function getProvider(config: AppConfig, name: string): LLMProvider {
  const cfg = config.providers[name];
  if (!cfg) {
    throw new Error(
      `[llm] Provider "${name}" not found in config. Available: ${Object.keys(
        config.providers
      ).join(", ")}`
    );
  }
  const provider = buildProvider(cfg);
  if (!provider.isConfigured()) {
    throw new Error(
      `[llm] Provider "${name}" is not configured: env var ${cfg.apiKeyEnv} is missing or empty.`
    );
  }
  return provider;
}

export function tryGetProvider(
  config: AppConfig,
  name: string
): LLMProvider | undefined {
  const cfg = config.providers[name];
  if (!cfg) return undefined;
  const provider = buildProvider(cfg);
  return provider.isConfigured() ? provider : undefined;
}

export function listConfiguredProviders(config: AppConfig): string[] {
  return Object.entries(config.providers)
    .filter(([, cfg]) => {
      const key = process.env[cfg.apiKeyEnv];
      return typeof key === "string" && key.length > 0;
    })
    .map(([name]) => name);
}
