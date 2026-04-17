import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LLMProvider, LLMRequest, LLMResponse } from "../types";

export interface ABTestVariant {
  provider: LLMProvider;
  model: string;
  label: string;
}

export interface ABTestOptions {
  saveDir?: string;
  taskName?: string;
}

export interface ABTestResult {
  label: string;
  response?: LLMResponse;
  error?: string;
}

function isoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function sanitizeLabel(label: string): string {
  return label.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
}

function formatMarkdown(
  variant: ABTestVariant,
  result: ABTestResult,
  req: LLMRequest
): string {
  const lines: string[] = [];
  lines.push(`# A/B Test Variant: ${variant.label}`);
  lines.push("");
  lines.push(`- **Provider**: ${variant.provider.name}`);
  lines.push(`- **Model**: ${variant.model}`);
  if (result.response) {
    const r = result.response;
    lines.push(`- **Latency**: ${r.latencyMs} ms`);
    lines.push(`- **Cost**: $${r.costUSD.toFixed(6)}`);
    lines.push(
      `- **Tokens**: in=${r.usage.inputTokens} out=${r.usage.outputTokens} cached=${r.usage.cachedInputTokens}`
    );
  }
  if (result.error) {
    lines.push(`- **Error**: ${result.error}`);
  }
  lines.push("");
  lines.push("## Request");
  lines.push("");
  lines.push("### System");
  lines.push("");
  lines.push("```");
  lines.push(req.system);
  lines.push("```");
  lines.push("");
  lines.push("### User");
  lines.push("");
  lines.push("```");
  lines.push(req.user);
  lines.push("```");
  lines.push("");
  lines.push("## Response");
  lines.push("");
  if (result.response) {
    lines.push(result.response.content);
  } else {
    lines.push(`_(no response: ${result.error ?? "unknown error"})_`);
  }
  lines.push("");
  return lines.join("\n");
}

export async function runABTest(
  req: LLMRequest,
  variants: ABTestVariant[],
  options: ABTestOptions = {}
): Promise<ABTestResult[]> {
  const settled = await Promise.all(
    variants.map(async (variant): Promise<ABTestResult> => {
      try {
        const response = await variant.provider.generate({
          ...req,
          model: variant.model,
        });
        return { label: variant.label, response };
      } catch (err) {
        const reason = err instanceof Error ? err.message : String(err);
        return { label: variant.label, error: reason };
      }
    })
  );

  if (options.saveDir) {
    await mkdir(options.saveDir, { recursive: true });
    const date = isoDate();
    const task = sanitizeLabel(options.taskName ?? "ab-test");
    await Promise.all(
      settled.map(async (result, idx) => {
        const variant = variants[idx];
        const label = sanitizeLabel(result.label);
        const filename = `${date}-${task}-${label}.md`;
        const filePath = path.join(options.saveDir as string, filename);
        const md = formatMarkdown(variant, result, req);
        await writeFile(filePath, md, "utf8");
      })
    );
  }

  return settled;
}
