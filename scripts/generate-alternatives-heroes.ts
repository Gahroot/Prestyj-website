#!/usr/bin/env tsx
/**
 * Generate alternative and compare page hero images
 *
 * This script generates:
 * - 37 alternative page hero images
 * - 7 compare page hero images
 *
 * Total: 44 hero images
 */

import { readFileSync } from "node:fs";

// Load .env.local for API key
try {
  const envContent = readFileSync(".env.local", "utf-8");
  for (const line of envContent.split("\n")) {
    const [key, ...valueParts] = line.split("=");
    if (key && !key.startsWith("#") && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join("=").trim();
    }
  }
} catch (e) {
  console.warn("Could not load .env.local");
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

const BATCH_DELAY_MS = 2000;

// ============================================================================
// A. Alternative Page Hero Images (37)
//
// Categories:
// - ISA-related (human-isa, internal-isa, isa-service, offshore-isa)
// - Real estate platforms (ylopo, cinc, kvcore, boomtown, real-geeks, sierra-interactive, follow-up-boss, homebot, betterbot, lofty)
// - Enterprise AI (drift, conversica, structurely)
// - Voice AI platforms (retell, vapi, bland-ai, bland-ai-alt, air-dot-ai, synthflow, eliseai, smart-alto, goodcall, poly-ai, cloudtalk, dialpad, ringcentral, voiceflow)
// - Receptionist/answering (ruby-receptionist, smith-ai, answer-connect, my-ai-front-desk)
// - Other (lindy)
// ============================================================================

const alternativeHeroImages: ImageConfig[] = [
  // ISA-related alternatives (focus on cost, missed calls, limited availability)
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Business owner frustrated with missed calls while phone rings unanswered, office setting, after-hours darkness visible through window",
      industry: "real-estate",
      mood: "focused",
    }),
    filename: "hero-alternative-human-isa.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Office manager overwhelmed by phones, multiple lines ringing, stacks of resumes showing ISA turnover, stressful environment",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-internal-isa.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "ISA service representative reading from script, phone headset, busy call center environment, generic approach",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-isa-service.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Offshore call center with cultural disconnect, representative struggling with US real estate terminology, confusing communication",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-offshore-isa.png",
    aspectRatio: "16:9",
  },

  // Real estate platform alternatives (focus on complexity, expensive)
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate agent confused by complex dashboard, multiple screens, expensive software subscription visible, frustration",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-ylopo.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate team manager with tablet showing expensive enterprise software, complex setup, training manuals visible, overwhelmed",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-cinc.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate broker reviewing expensive lead gen software bill, looking concerned, complex interface, office setting",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-kvcore.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate team at large brokerage, expensive platform licenses on screen, enterprise complexity, onboarding overwhelm",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-boomtown.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Solo agent with laptop, expensive CRM subscription visible, confused by complex features meant for teams, simple home office",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-real-geeks.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate team looking at Sierra Interactive dashboard, complex reporting features, expensive enterprise tier, training session",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-sierra-interactive.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Agent happy with their CRM but frustrated by manual lead follow-up, phone with unanswered notifications, missed opportunities",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-follow-up-boss.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate agent using Homebot dashboard, expensive monthly subscription visible, limited automation, manual work",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-homebot.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Agent reviewing Betterbot pricing on screen, expensive subscription, limited features compared to full solution",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-betterbot.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate professional using Lofty platform, generic AI chatbot interface, expensive monthly cost, limited customization",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-lofty.png",
    aspectRatio: "16:9",
  },

  // Enterprise AI alternatives (focus on 12-week implementation, expensive, not real estate)
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Enterprise team in 12-week implementation meeting, complex project timeline on whiteboard, expensive consulting, frustration",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-drift.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "VP of sales reviewing Conversica contract, expensive minimums, long implementation, generic not real estate specific",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-conversica.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate franchise operator outgrowing Structurely, hitting seat limits and lead caps, need for enterprise scale",
      industry: "real-estate",
      mood: "focused",
    }),
    filename: "hero-alternative-structurely.png",
    aspectRatio: "16:9",
  },

  // Voice AI platforms (focus on technical complexity, not done-for-you)
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Developer configuring Retell voice AI, code on screen, technical setup required, not done-for-you solution",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-retell.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Technical team setting up Vapi voice API, complex configuration, coding required, not for non-technical users",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-vapi.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Developer building voice AI with Bland.ai, code screen, technical implementation, DIY approach vs done-for-you",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-bland-ai.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Same as Bland.ai - developer building voice AI, DIY technical approach vs managed service",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-bland-ai-alt.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Developer configuring AirDotAI voice agent, API integration, technical setup, not turnkey solution",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-air-dot-ai.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Technical user building Synthflow voice workflows, drag-drop interface but still requires setup, not done-for-you",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-synthflow.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Real estate team using EliseAI AI assistant, expensive enterprise pricing, complex setup, not simple implementation",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-eliseai.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Agent reviewing SmartAlto AI platform, expensive subscription, learning curve, not instant deployment",
      industry: "real-estate",
      mood: "candid",
    }),
    filename: "hero-alternative-smart-alto.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Small business owner trying Goodcall AI phone agent, limited features, requires technical setup, not full service",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-goodcall.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Enterprise evaluating PolyAI voice assistant, expensive implementation, technical integration required",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-poly-ai.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "IT team configuring CloudTalk cloud phone system, complex setup, not AI-focused solution",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-cloudtalk.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Sales team using Dialpad for calls, expensive per-seat pricing, not AI lead response focused",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-dialpad.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Office using RingCentral phone system, expensive per-seat, traditional voip not AI automation",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-ring-central.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Developer building Voiceflow chatbot, visual workflow builder, requires ongoing maintenance, not done-for-you",
      industry: "general",
      mood: "focused",
    }),
    filename: "hero-alternative-voiceflow.png",
    aspectRatio: "16:9",
  },

  // Receptionist/answering service alternatives (focus on business hours only, expensive)
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Receptionist at desk during business hours, phone visible, after-hours darkness showing missed calls, limited availability",
      industry: "legal",
      mood: "candid",
    }),
    filename: "hero-alternative-ruby-receptionist.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Hybrid receptionist service, expensive per-minute fees adding up, human handoff delays, unpredictable costs",
      industry: "legal",
      mood: "candid",
    }),
    filename: "hero-alternative-smith-ai.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Answer Connect call center, expensive per-minute billing, business hours only, message taking not qualification",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-answer-connect.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "My AI Front Desk tablet interface, limited AI capabilities, expensive subscription, not full service solution",
      industry: "medical",
      mood: "candid",
    }),
    filename: "hero-alternative-my-ai-front-desk.png",
    aspectRatio: "16:9",
  },

  // Other
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Professional using Lindy AI assistant, generic productivity AI, not specialized for real estate lead response",
      industry: "general",
      mood: "candid",
    }),
    filename: "hero-alternative-lindy.png",
    aspectRatio: "16:9",
  },
];

// ============================================================================
// B. Compare Page Hero Images (7)
// ============================================================================

const compareHeroImages: ImageConfig[] = [
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Split scene: human ISA at desk during business hours vs AI handling calls at night, comparison of availability",
      industry: "real-estate",
      mood: "dynamic",
    }),
    filename: "hero-compare-prestyj-vs-isa.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Enterprise real estate office comparison: complex Drift implementation timeline vs Prestyj quick deployment",
      industry: "real-estate",
      mood: "dynamic",
    }),
    filename: "hero-compare-prestyj-vs-drift.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Conversica enterprise AI vs Prestyj real estate-specific solution, comparison of implementation and focus",
      industry: "real-estate",
      mood: "dynamic",
    }),
    filename: "hero-compare-prestyj-vs-conversica.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Internal ISA team management challenge: hiring, training, turnover vs AI consistent performance",
      industry: "real-estate",
      mood: "focused",
    }),
    filename: "hero-compare-prestyj-vs-internal-isa-team.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Offshore ISA comparison: quality control challenges and TCPA compliance risks vs AI consistency",
      industry: "real-estate",
      mood: "focused",
    }),
    filename: "hero-compare-prestyj-vs-offshore-isa.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Ylopo vs Prestyj comparison: ad spend requirements and platform focus, real estate agents evaluating options",
      industry: "real-estate",
      mood: "dynamic",
    }),
    filename: "hero-compare-prestyj-vs-ylopo.png",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt({
      category: "hero",
      subject: "Structurely small team platform vs Prestyj enterprise scale, franchise operations comparison",
      industry: "real-estate",
      mood: "dynamic",
    }),
    filename: "hero-compare-prestyj-vs-structurely.png",
    aspectRatio: "16:9",
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
  console.log("Starting alternative and compare page hero generation...\n");
  console.log(`Total images to generate: ${alternativeHeroImages.length + compareHeroImages.length}`);
  console.log(`  - Alternatives: ${alternativeHeroImages.length}`);
  console.log(`  - Compares: ${compareHeroImages.length}\n`);

  const allReports: GenerationReport[] = [];

  // A. Alternative Page Heroes
  console.log("Generating alternative page hero images...");
  const alternativeReport = await generateBatch({
    category: "hero",
    items: alternativeHeroImages.map((img) => ({
      prompt: img.prompt,
      filename: img.filename,
      aspectRatio: img.aspectRatio || "16:9",
    })),
    onProgress: (completed, total, current) => {
      console.log(`  [${completed}/${total}] ${current}`);
    },
  });
  printReport(alternativeReport);
  allReports.push(alternativeReport);
  await sleep(BATCH_DELAY_MS);

  // B. Compare Page Heroes
  console.log("Generating compare page hero images...");
  const compareReport = await generateBatch({
    category: "hero",
    items: compareHeroImages.map((img) => ({
      prompt: img.prompt,
      filename: img.filename,
      aspectRatio: img.aspectRatio || "16:9",
    })),
    onProgress: (completed, total, current) => {
      console.log(`  [${completed}/${total}] ${current}`);
    },
  });
  printReport(compareReport);
  allReports.push(compareReport);

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
  console.log("  Alternative heroes:");
  for (const img of alternativeHeroImages) {
    console.log(`    - public/images/hero/${img.filename}`);
  }
  console.log("  Compare heroes:");
  for (const img of compareHeroImages) {
    console.log(`    - public/images/hero/${img.filename}`);
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
