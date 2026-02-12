#!/usr/bin/env tsx
/**
 * Generate main site core images
 *
 * This script generates:
 * - Main hero image
 * - How It Works industry shots (4)
 * - Solution page heroes (3)
 * - Testimonial portraits (6)
 */

import { readFileSync } from "node:fs";

// Load .env.local manually to populate process.env
try {
  const envContent = readFileSync(".env.local", "utf-8");
  for (const line of envContent.split("\n")) {
    const [key, ...valueParts] = line.split("=");
    if (key && !key.startsWith("#") && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join("=").trim();
    }
  }
} catch (e) {
  console.warn("Could not load .env.local, using existing environment variables");
}

import { buildPrompt } from "../src/lib/media/prompt-builder";
import { generateBatch } from "../src/lib/media/batch-generator";
import type { AspectRatio } from "../src/lib/media/types";

// ============================================================================
// Image Generation Configuration
// ============================================================================

interface ImageConfig {
  prompt: string;
  filename: string;
  aspectRatio?: AspectRatio;
}

const BATCH_DELAY_MS = 2000; // Delay between batches to be safe with rate limits

// ============================================================================
// A. Main Hero Image
// ============================================================================

const mainHeroImages: ImageConfig[] = [
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Business owner celebrating a closed deal, natural lighting, genuine expression of success",
      industry: "general",
      mood: "triumphant",
    }),
    filename: "hero-main.png",
    aspectRatio: "16:9",
  },
];

// ============================================================================
// B. How It Works Industry Shots
// ============================================================================

const howItWorksImages: ImageConfig[] = [
  {
    prompt: buildPrompt({
      category: "industry-shot",
      subject: "Business owner responding to lead on phone immediately, focused expression, professional setting",
      industry: "roofing",
      mood: "dynamic",
    }),
    filename: "industry-shot-speed-to-lead.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "industry-shot",
      subject: "Professional reviewing lead qualifications on tablet, analyzing data, modern office environment",
      industry: "real-estate",
      mood: "focused",
    }),
    filename: "industry-shot-smart-qualification.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "industry-shot",
      subject: "Appointment being booked with client, handshake or calendar moment, professional interaction",
      industry: "general",
      mood: "warm",
    }),
    filename: "industry-shot-appointment-booking.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "industry-shot",
      subject: "Business professional following up with previous missed lead, phone conversation, determined expression",
      industry: "mortgage",
      mood: "focused",
    }),
    filename: "industry-shot-lead-recovery.png",
    aspectRatio: "16:9",
  },
];

// ============================================================================
// C. Solution Page Heroes
// ============================================================================

const solutionHeroImages: ImageConfig[] = [
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate agent responding quickly to client inquiry, professional urgency, mobile device in hand",
      industry: "real-estate",
      mood: "dynamic",
    }),
    filename: "hero-speed-to-lead.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Business professional reviewing database of previous clients, reconnection moment, office setting",
      industry: "general",
      mood: "confident",
    }),
    filename: "hero-lead-reactivation.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Roofer on residential jobsite, answering phone while on ladder or near roof, stormy sky context",
      industry: "roofing",
      mood: "dynamic",
    }),
    filename: "hero-roofing.png",
    aspectRatio: "16:9",
  },
];

// ============================================================================
// D. Testimonial Portraits
// ============================================================================

const testimonialImages: ImageConfig[] = [
  {
    prompt: buildPrompt({
      category: "testimonial-portrait",
      subject: "Professional headshot of Marcus Chen, roofing contractor, outdoors near jobsite",
      industry: "roofing",
      mood: "warm",
    }),
    filename: "testimonial-marcus-chen.png",
    aspectRatio: "1:1",
  },
  {
    prompt: buildPrompt({
      category: "testimonial-portrait",
      subject: "Professional headshot of Sarah Martinez, real estate agent, modern office background",
      industry: "real-estate",
      mood: "warm",
    }),
    filename: "testimonial-sarah-martinez.png",
    aspectRatio: "1:1",
  },
  {
    prompt: buildPrompt({
      category: "testimonial-portrait",
      subject: "Professional headshot of Dr. James Wilson, dentist, clinical setting",
      industry: "dental",
      mood: "warm",
    }),
    filename: "testimonial-james-wilson.png",
    aspectRatio: "1:1",
  },
  {
    prompt: buildPrompt({
      category: "testimonial-portrait",
      subject: "Professional headshot of Jennifer Park, loan officer, bank office setting",
      industry: "mortgage",
      mood: "warm",
    }),
    filename: "testimonial-jennifer-park.png",
    aspectRatio: "1:1",
  },
  {
    prompt: buildPrompt({
      category: "testimonial-portrait",
      subject: "Professional headshot of Mike Thompson, HVAC business owner, near service vehicle",
      industry: "hvac",
      mood: "warm",
    }),
    filename: "testimonial-mike-thompson.png",
    aspectRatio: "1:1",
  },
  {
    prompt: buildPrompt({
      category: "testimonial-portrait",
      subject: "Professional headshot of Amanda Rivera, personal injury attorney, law office background",
      industry: "legal",
      mood: "confident",
    }),
    filename: "testimonial-amanda-rivera.png",
    aspectRatio: "1:1",
  },
];

// ============================================================================
// Main Execution
// ============================================================================

interface GenerationReport {
  category: string;
  total: number;
  succeeded: number;
  failed: number;
  errors: Array<{ filename: string; error: string }>;
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function printReport(report: GenerationReport): void {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`Category: ${report.category}`);
  console.log(`Total: ${report.total}`);
  console.log(`Succeeded: ${report.succeeded}`);
  console.log(`Failed: ${report.failed}`);
  if (report.errors.length > 0) {
    console.log(`\nErrors:`);
    for (const err of report.errors) {
      console.log(`  - ${err.filename}: ${err.error}`);
    }
  }
  console.log(`${"=".repeat(60)}\n`);
}

async function main(): Promise<void> {
  console.log("Starting main site core image generation...\n");

  const allReports: GenerationReport[] = [];

  // A. Main Hero Image
  console.log("Generating main hero image...");
  const heroReport = await generateBatch({
    category: "hero",
    items: mainHeroImages.map((img) => ({
      prompt: img.prompt,
      filename: img.filename,
      aspectRatio: img.aspectRatio || "16:9",
    })),
    onProgress: (completed, total, current) => {
      console.log(`  [${completed}/${total}] ${current}`);
    },
  });
  printReport(heroReport);
  allReports.push(heroReport);
  await sleep(BATCH_DELAY_MS);

  // B. How It Works Industry Shots
  console.log("Generating how-it-works industry shots...");
  const industryReport = await generateBatch({
    category: "industry",
    items: howItWorksImages.map((img) => ({
      prompt: img.prompt,
      filename: img.filename,
      aspectRatio: img.aspectRatio || "16:9",
    })),
    onProgress: (completed, total, current) => {
      console.log(`  [${completed}/${total}] ${current}`);
    },
  });
  printReport(industryReport);
  allReports.push(industryReport);
  await sleep(BATCH_DELAY_MS);

  // C. Solution Page Heroes
  console.log("Generating solution page heroes...");
  const solutionReport = await generateBatch({
    category: "solutions",
    items: solutionHeroImages.map((img) => ({
      prompt: img.prompt,
      filename: img.filename,
      aspectRatio: img.aspectRatio || "16:9",
    })),
    onProgress: (completed, total, current) => {
      console.log(`  [${completed}/${total}] ${current}`);
    },
  });
  printReport(solutionReport);
  allReports.push(solutionReport);
  await sleep(BATCH_DELAY_MS);

  // D. Testimonial Portraits
  console.log("Generating testimonial portraits...");
  const testimonialReport = await generateBatch({
    category: "testimonials",
    items: testimonialImages.map((img) => ({
      prompt: img.prompt,
      filename: img.filename,
      aspectRatio: img.aspectRatio || "1:1",
    })),
    onProgress: (completed, total, current) => {
      console.log(`  [${completed}/${total}] ${current}`);
    },
  });
  printReport(testimonialReport);
  allReports.push(testimonialReport);

  // Final Summary
  console.log("\n" + "=".repeat(60));
  console.log("FINAL SUMMARY");
  console.log("=".repeat(60));

  const totalImages = allReports.reduce((sum, r) => sum + r.total, 0);
  const totalSucceeded = allReports.reduce((sum, r) => sum + r.succeeded, 0);
  const totalFailed = allReports.reduce((sum, r) => sum + r.failed, 0);

  console.log(`Total images requested: ${totalImages}`);
  console.log(`Successfully generated: ${totalSucceeded}`);
  console.log(`Failed: ${totalFailed}`);

  console.log("\nGenerated files:");
  console.log("  Main hero:");
  for (const img of mainHeroImages) {
    console.log(`    - public/images/hero/${img.filename}`);
  }
  console.log("  Industry shots:");
  for (const img of howItWorksImages) {
    console.log(`    - public/images/industry/${img.filename}`);
  }
  console.log("  Solution heroes:");
  for (const img of solutionHeroImages) {
    console.log(`    - public/images/solutions/${img.filename}`);
  }
  console.log("  Testimonials:");
  for (const img of testimonialImages) {
    console.log(`    - public/images/testimonials/${img.filename}`);
  }

  if (totalFailed > 0) {
    console.log("\nAll errors:");
    for (const report of allReports) {
      for (const err of report.errors) {
        console.log(`  - ${report.category}/${err.filename}: ${err.error}`);
      }
    }
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
