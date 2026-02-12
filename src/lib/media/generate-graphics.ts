#!/usr/bin/env tsx
/**
 * Generate result graphics, trust badges, and mascot images.
 * Run with: tsx src/lib/media/generate-graphics.ts
 */

import { generateBatch } from "./batch-generator";
import { buildPrompt } from "./prompt-builder";

const categories = {
  mascots: {
    outputDir: "brand",
    items: [
      {
        filename: "mascot-p-1.png",
        prompt: buildPrompt({
          category: "mascot",
          subject: 'Abstract geometric "P" letterform with crystalline facets, glowing purple gradient',
          mood: "confident",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "mascot-p-2.png",
        prompt: buildPrompt({
          category: "mascot",
          subject: 'Abstract geometric "P" letterform, sharp crystalline edges, purple to amber gradient glow',
          mood: "confident",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "mascot-p-3.png",
        prompt: buildPrompt({
          category: "mascot",
          subject: 'Abstract geometric "P" letterform, hexagonal facets, purple glow against dark background',
          mood: "confident",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "mascot-p-4.png",
        prompt: buildPrompt({
          category: "mascot",
          subject: 'Abstract geometric "P" letterform, crystal shard aesthetic, purple and gold highlights',
          mood: "confident",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "mascot-p-5.png",
        prompt: buildPrompt({
          category: "mascot",
          subject: 'Abstract geometric "P" letterform, prismatic facets, deep purple glow, dark charcoal background',
          mood: "confident",
        }),
        aspectRatio: "1:1" as const,
      },
    ],
  },
  badges: {
    outputDir: "badges",
    items: [
      {
        filename: "badge-24-7-response.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "24/7 always on response icon, clock symbol, shield badge shape, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "badge-under-60s.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "Under 60 seconds speed icon, stopwatch or lightning bolt, shield badge shape, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "badge-3x-appointments.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "3x more appointments growth icon, upward trending arrow, shield badge shape, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "badge-enterprise.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "Enterprise ready badge, building or columns icon, shield badge shape, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "badge-hipaa.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "HIPAA compliant badge, medical cross or shield, secure lock icon, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "badge-gdpr.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "GDPR compliant badge, checkmark shield, secure privacy icon, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "badge-secure.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "Secure encrypted badge, padlock icon, shield badge shape, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
      {
        filename: "badge-verified.png",
        prompt: buildPrompt({
          category: "icon-badge",
          subject: "Verified trusted badge, checkmark in circle, premium seal, purple gradient",
          mood: "professional",
        }),
        aspectRatio: "1:1" as const,
      },
    ],
  },
  results: {
    outputDir: "results",
    items: [
      {
        filename: "result-3x-appointments.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: 3x More Appointments, upward growth chart visualization, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-20-leads.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: 20 Qualified Leads, counter graphic showing 20, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-24-7-response.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: 24/7 Response, clock with always-on indicator, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-under-60s.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: Under 60 Seconds, stopwatch or speedometer graphic, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-50k-revenue.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: $50k Revenue Increase, upward money growth chart, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-30-days.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: In 30 Days, calendar timeline graphic, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-qualified-not-just-leads.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: Qualified Not Just Leads, quality filter visualization, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-speed-to-lead.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold headline: Speed To Lead Wins, racing or speed visualization, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-no-show-reduction.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold statistic: Reduced No-Shows by 80%, calendar with checkmarks, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-roi-graphic.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold headline: Positive ROI in Month 1, profit growth chart, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
      {
        filename: "result-guarantee-badge.png",
        prompt: buildPrompt({
          category: "result-graphic",
          subject: "Bold headline: Or We Work For Free, guarantee seal design, dark background with purple accents",
          mood: "confident",
        }),
        aspectRatio: "16:9" as const,
      },
    ],
  },
};

async function main() {
  console.log("Starting graphics generation...\n");

  const allResults: Array<{
    category: string;
    report: Awaited<ReturnType<typeof generateBatch>>;
  }> = [];

  // Generate mascots first (most important)
  console.log("=== GENERATING MASCOTS ===");
  const mascotReport = await generateBatch({
    category: categories.mascots.outputDir,
    items: categories.mascots.items,
    onProgress: (completed, total, current) => {
      console.log(`[${completed + 1}/${total}] Generating ${current}...`);
    },
  });
  allResults.push({ category: "Mascots", report: mascotReport });
  console.log(`Mascots: ${mascotReport.succeeded}/${mascotReport.total} succeeded\n`);

  // Small delay between batches
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Generate badges
  console.log("=== GENERATING TRUST BADGES ===");
  const badgeReport = await generateBatch({
    category: categories.badges.outputDir,
    items: categories.badges.items,
    onProgress: (completed, total, current) => {
      console.log(`[${completed + 1}/${total}] Generating ${current}...`);
    },
  });
  allResults.push({ category: "Badges", report: badgeReport });
  console.log(`Badges: ${badgeReport.succeeded}/${badgeReport.total} succeeded\n`);

  // Small delay between batches
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Generate result graphics
  console.log("=== GENERATING RESULT GRAPHICS ===");
  const resultReport = await generateBatch({
    category: categories.results.outputDir,
    items: categories.results.items,
    onProgress: (completed, total, current) => {
      console.log(`[${completed + 1}/${total}] Generating ${current}...`);
    },
  });
  allResults.push({ category: "Results", report: resultReport });
  console.log(`Results: ${resultReport.succeeded}/${resultReport.total} succeeded\n`);

  // Print final summary
  console.log("\n=== FINAL SUMMARY ===");
  let totalSucceeded = 0;
  let totalFailed = 0;

  for (const { category, report } of allResults) {
    console.log(`${category}:`);
    console.log(`  - ${report.succeeded}/${report.total} succeeded`);
    if (report.errors.length > 0) {
      console.log(`  - Errors:`);
      for (const err of report.errors) {
        console.log(`    * ${err.filename}: ${err.error}`);
      }
    }
    totalSucceeded += report.succeeded;
    totalFailed += report.failed;
  }

  console.log(`\nTotal: ${totalSucceeded}/${totalSucceeded + totalFailed} images generated successfully`);

  if (totalFailed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
