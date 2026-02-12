import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

import type {
  AspectRatio,
  GenerationResult,
  ZImageCreateResponse,
  ZImageDetailResponse,
} from "./types";

const BASE_URL = "https://api.kie.ai/api/v1/jobs";

// ---------------------------------------------------------------------------
// Token-bucket rate limiter (20 requests per 10 seconds)
// ---------------------------------------------------------------------------

class RateLimiter {
  private tokens: number;
  private lastRefill: number;
  private readonly maxTokens = 20;
  private readonly refillIntervalMs = 10_000;

  constructor() {
    this.tokens = this.maxTokens;
    this.lastRefill = Date.now();
  }

  async acquire(): Promise<void> {
    this.refill();
    if (this.tokens > 0) {
      this.tokens--;
      return;
    }
    // Wait until next refill
    const waitMs = this.refillIntervalMs - (Date.now() - this.lastRefill);
    await new Promise((resolve) => setTimeout(resolve, Math.max(waitMs, 100)));
    this.refill();
    this.tokens--;
  }

  private refill(): void {
    const now = Date.now();
    const elapsed = now - this.lastRefill;
    if (elapsed >= this.refillIntervalMs) {
      this.tokens = this.maxTokens;
      this.lastRefill = now;
    }
  }
}

const rateLimiter = new RateLimiter();

// ---------------------------------------------------------------------------
// API helpers
// ---------------------------------------------------------------------------

function getApiKey(): string {
  const key = process.env.ZIMAGE_API_KEY;
  if (!key) {
    throw new Error(
      "ZIMAGE_API_KEY is not set. Add it to .env.local"
    );
  }
  return key;
}

function mapAspectRatio(ratio: AspectRatio): string {
  const map: Record<AspectRatio, string> = {
    "16:9": "16:9",
    "1:1": "1:1",
    "4:3": "4:3",
    "9:16": "9:16",
  };
  return map[ratio];
}

// ---------------------------------------------------------------------------
// Core API functions
// ---------------------------------------------------------------------------

/**
 * Creates an image generation task via Z-Image API.
 * Returns the taskId for polling.
 */
export async function generateImage(
  prompt: string,
  aspectRatio: AspectRatio
): Promise<string> {
  await rateLimiter.acquire();

  const response = await fetch(`${BASE_URL}/createTask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getApiKey()}`,
    },
    body: JSON.stringify({
      prompt,
      aspectRatio: mapAspectRatio(aspectRatio),
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Z-Image API error: ${response.status} ${response.statusText}`
    );
  }

  const result = (await response.json()) as ZImageCreateResponse;
  return result.data.taskId;
}

/**
 * Polls for task completion with exponential backoff.
 * Returns the image URL when complete.
 */
export async function waitForCompletion(taskId: string): Promise<string> {
  const maxAttempts = 60;
  let delayMs = 2000;
  const maxDelayMs = 15_000;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await rateLimiter.acquire();

    const response = await fetch(
      `${BASE_URL}/getDetail?taskId=${encodeURIComponent(taskId)}`,
      {
        headers: {
          Authorization: `Bearer ${getApiKey()}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Z-Image poll error: ${response.status} ${response.statusText}`
      );
    }

    const result = (await response.json()) as ZImageDetailResponse;

    if (result.data.status === "success" && result.data.imageUrl) {
      return result.data.imageUrl;
    }

    if (result.data.status === "failed") {
      throw new Error(`Z-Image generation failed for task ${taskId}`);
    }

    // Exponential backoff
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    delayMs = Math.min(delayMs * 1.5, maxDelayMs);
  }

  throw new Error(
    `Z-Image generation timed out after ${maxAttempts} attempts for task ${taskId}`
  );
}

/**
 * Downloads an image from a URL and saves it to the specified path.
 */
export async function downloadImage(
  imageUrl: string,
  outputPath: string
): Promise<void> {
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(
      `Failed to download image: ${response.status} ${response.statusText}`
    );
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  // Ensure output directory exists
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
}

/**
 * Full pipeline: generate → poll → download.
 * Returns a result object with success/failure info.
 */
export async function generateAndDownload(
  prompt: string,
  aspectRatio: AspectRatio,
  outputPath: string
): Promise<GenerationResult> {
  try {
    const taskId = await generateImage(prompt, aspectRatio);
    const imageUrl = await waitForCompletion(taskId);
    await downloadImage(imageUrl, outputPath);
    return { success: true, outputPath, prompt };
  } catch (error) {
    return {
      success: false,
      outputPath,
      prompt,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
