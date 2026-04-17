import type {
  AppConfig,
  DedupContext,
  LLMProvider,
  ResearchBrief,
  TaskExecutionResult,
} from "../types";
import { buildDailyBrief } from "../research/daily-brief";

export interface DailyResearchInput {
  config: AppConfig;
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  taskPrompt: string;
  dedupContext: DedupContext;
  date?: Date;
}

export interface DailyResearchResult extends TaskExecutionResult {
  brief?: ResearchBrief;
}

export async function runDailyResearch(
  input: DailyResearchInput
): Promise<DailyResearchResult> {
  const start = Date.now();
  try {
    const brief = await buildDailyBrief({
      config: input.config,
      provider: input.provider,
      model: input.model,
      systemPrompt: input.systemPrompt,
      taskPrompt: input.taskPrompt,
      dedupContext: input.dedupContext,
      date: input.date ?? new Date(),
    });
    return {
      task: "dailyResearch",
      success: true,
      costUSD: 0,
      latencyMs: Date.now() - start,
      brief,
    };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    return {
      task: "dailyResearch",
      success: false,
      error: `dailyResearch failed: ${reason}`,
      costUSD: 0,
      latencyMs: Date.now() - start,
    };
  }
}
