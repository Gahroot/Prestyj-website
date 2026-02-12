#!/usr/bin/env tsx
/**
 * Generate blog thumbnail images for all blog posts
 * Uses the Z-Image API with rate limiting and brand-aligned prompts
 *
 * Usage:
 *   ZIMAGE_API_KEY=your-key npx tsx scripts/generate-blog-images.ts
 */

import { buildBlogThumbnailPrompt } from "../src/lib/media/prompt-builder";
import { generateAndDownload } from "../src/lib/media/z-image";
import type { Industry } from "../src/lib/media/types";

const TARGET_DIR = "public/images/blog";

// Blog posts that need images generated
const blogPosts: Array<{
  slug: string;
  title: string;
  industry: string;
  filename: string;
}> = [
  // Missing roofing images
  {
    slug: "roofing-speed-to-lead-2026",
    title: "Speed-to-Lead for Roofing Contractors: Why 5 Seconds Wins $15,000 Jobs",
    industry: "roofing",
    filename: "roofing-speed-to-lead-2026.jpg",
  },
  {
    slug: "missed-call-text-back-roofers-2026",
    title: "Missed Call Text-Back Solutions for Roofers: Recover Every Lost Lead",
    industry: "roofing",
    filename: "missed-call-text-back-roofers-2026.jpg",
  },
  {
    slug: "ai-storm-response-roofing-2026",
    title: "AI Storm Response for Roofing: Handle Surge Demand Without Hiring",
    industry: "roofing",
    filename: "ai-storm-response-roofing-2026.jpg",
  },
  // Images that likely contain robot/tech imagery - regenerate with brand guidelines
  {
    slug: "ai-lead-response-systems-2026",
    title: "AI Lead Response Systems 2026: The Complete Guide",
    industry: "general",
    filename: "ai-lead-response-systems.jpg",
  },
  {
    slug: "ai-sales-agents-explained",
    title: "AI Sales Agents Explained: What They Are and How They Work",
    industry: "general",
    filename: "ai-sales-agents-explained.jpg",
  },
];

async function main() {
  console.log(`Generating ${blogPosts.length} blog thumbnail images...\n`);

  const results = {
    succeeded: [] as string[],
    failed: [] as Array<{ filename: string; error: string }>,
  };

  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];
    const outputPath = `${TARGET_DIR}/${post.filename}`;

    console.log(
      `[${i + 1}/${blogPosts.length}] Generating: ${post.filename}`
    );
    console.log(`  Industry: ${post.industry}`);
    console.log(`  Title: ${post.title.substring(0, 60)}...`);

    const prompt = buildBlogThumbnailPrompt(post.title, post.industry as Industry);
    console.log(`  Prompt: ${prompt.substring(0, 100)}...`);

    console.log(`  Calling API...`);
    const result = await generateAndDownload(prompt, "16:9", outputPath);

    if (result.success) {
      console.log(`  ✅ Success: ${outputPath}`);
      results.succeeded.push(post.filename);
    } else {
      console.log(`  ❌ Failed: ${result.error}`);
      results.failed.push({ filename: post.filename, error: result.error || "Unknown error" });
    }

    console.log("");

    // Rate limiting - wait between requests
    if (i < blogPosts.length - 1) {
      const waitTime = 1000; // 1 second between requests
      console.log(`  Waiting ${waitTime}ms before next request...`);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Total: ${blogPosts.length}`);
  console.log(`Succeeded: ${results.succeeded.length}`);
  console.log(`Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log("\nFailed images:");
    results.failed.forEach(({ filename, error }) => {
      console.log(`  - ${filename}: ${error}`);
    });
  }

  if (results.failed.length === 0) {
    console.log("\n All images generated successfully!");
  } else {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
