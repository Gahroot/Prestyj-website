import { generateAndDownload } from "./z-image";
import type { AspectRatio, GenerationResult } from "./types";

export interface BatchItem {
  prompt: string;
  filename: string;
  aspectRatio?: AspectRatio;
}

export interface BatchConfig {
  category: string; // For logging
  items: BatchItem[];
  onProgress?: (completed: number, total: number, current: string) => void;
}

export interface BatchReport {
  category: string;
  total: number;
  succeeded: number;
  failed: number;
  results: GenerationResult[];
  errors: Array<{ filename: string; error: string }>;
}

/**
 * Generates a batch of images sequentially with progress tracking.
 * Handles rate limiting internally via the Z-Image client.
 */
export async function generateBatch(config: BatchConfig): Promise<BatchReport> {
  const { category, items, onProgress } = config;
  const results: GenerationResult[] = [];
  const errors: Array<{ filename: string; error: string }> = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const outputPath = `public/images/${category}/${item.filename}`;

    // Update progress callback
    if (onProgress) {
      onProgress(i, items.length, item.filename);
    }

    const result = await generateAndDownload(
      item.prompt,
      item.aspectRatio || "16:9",
      outputPath
    );

    results.push(result);

    if (!result.success && result.error) {
      errors.push({ filename: item.filename, error: result.error });
    }
  }

  return {
    category,
    total: items.length,
    succeeded: results.filter((r) => r.success).length,
    failed: errors.length,
    results,
    errors,
  };
}

/**
 * Generates items in parallel batches for faster execution.
 * Uses concurrency limit to avoid overwhelming the API.
 */
export async function generateBatchParallel(
  config: BatchConfig,
  concurrency = 3
): Promise<BatchReport> {
  const { category, items, onProgress } = config;
  const results: GenerationResult[] = [];
  const errors: Array<{ filename: string; error: string }> = [];
  let completed = 0;

  // Process items in chunks
  for (let i = 0; i < items.length; i += concurrency) {
    const chunk = items.slice(i, i + concurrency);

    const chunkResults = await Promise.all(
      chunk.map(async (item) => {
        const outputPath = `public/images/${category}/${item.filename}`;
        const result = await generateAndDownload(
          item.prompt,
          item.aspectRatio || "16:9",
          outputPath
        );
        completed++;
        if (onProgress) {
          onProgress(completed, items.length, item.filename);
        }
        return result;
      })
    );

    results.push(...chunkResults);

    for (const result of chunkResults) {
      if (!result.success && result.error) {
        errors.push({
          filename: result.outputPath.split("/").pop() || "unknown",
          error: result.error,
        });
      }
    }
  }

  return {
    category,
    total: items.length,
    succeeded: results.filter((r) => r.success).length,
    failed: errors.length,
    results,
    errors,
  };
}
