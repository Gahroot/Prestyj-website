/**
 * Generate hero images for all alternative and compare pages.
 *
 * Run with: npx tsx src/lib/media/scripts/generate-alternative-heroes.ts
 */

import { readFileSync } from "node:fs";
import { alternatives } from "@/lib/alternatives";
import type { AlternativePageContent } from "@/lib/alternatives/types";

// Load .env.local manually
const envContent = readFileSync(".env.local", "utf-8");
const match = envContent.match(/ZIMAGE_API_KEY="([^"]+)"/);
if (match) {
  process.env.ZIMAGE_API_KEY = match[1];
}
import {
  buildPrompt,
} from "@/lib/media/prompt-builder";
import type { PromptRequest } from "@/lib/media/types";
import { generateBatchParallel } from "@/lib/media/batch-generator";
import type { BatchItem } from "@/lib/media/batch-generator";
import { mkdir } from "node:fs/promises";

// ---------------------------------------------------------------------------
// Competitor type categorization
// ---------------------------------------------------------------------------

type CompetitorCategory =
  | "isa-human-receptionist"
  | "ai-voice-platform"
  | "real-estate-crm"
  | "text-only-chatbot"
  | "general";

function categorizeCompetitor(slug: string, alt: AlternativePageContent): CompetitorCategory {
  const name = alt.competitor.name.toLowerCase();
  const desc = (alt.competitor.description || "").toLowerCase();

  // ISA/Human Receptionist alternatives
  if (
    slug.includes("isa") ||
    slug.includes("receptionist") ||
    slug.includes("answer-connect") ||
    slug.includes("smith-ai") ||
    name.includes("receptionist") ||
    name.includes("isa") ||
    desc.includes("receptionist")
  ) {
    return "isa-human-receptionist";
  }

  // AI Voice platforms (developer-focused)
  if (
    slug.includes("bland") ||
    slug.includes("vapi") ||
    slug.includes("retell") ||
    slug.includes("synthflow") ||
    slug.includes("goodcall") ||
    slug.includes("poly-ai") ||
    name.includes("voice") ||
    desc.includes("voice") ||
    desc.includes("developer")
  ) {
    return "ai-voice-platform";
  }

  // Real Estate CRMs
  if (
    slug.includes("ylopo") ||
    slug.includes("kvcore") ||
    slug.includes("boomtown") ||
    slug.includes("follow-up") ||
    slug.includes("cinc") ||
    slug.includes("real-geeks") ||
    slug.includes("lofty") ||
    slug.includes("sierra") ||
    slug.includes("homebot") ||
    slug.includes("betterbot") ||
    slug.includes("elise") ||
    slug.includes("smart-alto") ||
    desc.includes("real estate")
  ) {
    return "real-estate-crm";
  }

  // Text-only chatbots (Conversica, Structurely, Drift, Voiceflow)
  if (
    slug.includes("conversica") ||
    slug.includes("structurely") ||
    slug.includes("drift") ||
    slug.includes("voiceflow") ||
    name.includes("conversica") ||
    desc.includes("chat") ||
    desc.includes("text-only")
  ) {
    return "text-only-chatbot";
  }

  return "general";
}

// ---------------------------------------------------------------------------
// Prompt generation by competitor type
// ---------------------------------------------------------------------------

function getAlternativeHeroPrompt(
  slug: string,
  alt: AlternativePageContent
): string {
  const category = categorizeCompetitor(slug, alt);
  const competitorName = alt.competitor.name;

  let subject = "";
  let industry: PromptRequest["industry"] = "general";

  switch (category) {
    case "isa-human-receptionist":
      subject = `Frustrated business owner missing phone calls at their desk. Phone ringing constantly, owner looking overwhelmed with too many incoming lines. Small business office setting. Missed opportunities visible on caller ID.`;
      industry = "general";
      break;

    case "ai-voice-platform":
      subject = `Confused developer or business owner looking at complex code on multiple screens, trying to build an AI voice agent. Overwhelmed by API documentation and technical setup. Laptop with code, notebooks full of notes, frustrated expression. The complexity of developer-focused platforms.`;
      industry = "general";
      break;

    case "real-estate-crm":
      subject = `Real estate agent overwhelmed at their desk, surrounded by paperwork, laptop showing dozens of unresponded leads. Phone ringing, calendar full but no appointments set. Expensive CRM software visible on screen. The pain of lead overwhelm and poor response systems.`;
      industry = "real-estate";
      break;

    case "text-only-chatbot":
      subject = `Business person looking at their phone with no response to customer inquiry. Text message conversation showing unanswered questions from potential customers. The frustration of text-only chatbots that can't handle phone calls. Missed opportunity visible on screen.`;
      industry = "general";
      break;

    default:
      subject = `Business owner frustrated with missed opportunities, looking at phone showing missed calls. Modern office setting, stacks of paperwork, overwhelmed expression. The cost of slow response times.`;
      industry = "general";
      break;
  }

  return buildPrompt({
    category: "hero",
    subject,
    industry,
    mood: "focused",
  });
}

// ---------------------------------------------------------------------------
// Compare page prompt generation
// ---------------------------------------------------------------------------

interface ComparePageInfo {
  slug: string;
  competitorName: string;
  category: CompetitorCategory;
}

const comparePages: ComparePageInfo[] = [
  { slug: "ylopo", competitorName: "Ylopo", category: "real-estate-crm" },
  { slug: "drift", competitorName: "Drift", category: "text-only-chatbot" },
  { slug: "conversica", competitorName: "Conversica", category: "text-only-chatbot" },
  { slug: "structurely", competitorName: "Structurely", category: "text-only-chatbot" },
  { slug: "isa", competitorName: "Human ISA", category: "isa-human-receptionist" },
  { slug: "internal-isa-team", competitorName: "Internal ISA Team", category: "isa-human-receptionist" },
  { slug: "offshore-isa", competitorName: "Offshore ISA", category: "isa-human-receptionist" },
];

function getCompareHeroPrompt(info: ComparePageInfo): string {
  const category = info.category;

  let subject = "";
  let industry: PromptRequest["industry"] = "general";

  switch (category) {
    case "isa-human-receptionist":
      subject = `Business owner reviewing expensive payroll for human staff, comparing costs. Office setting with calculator, spreadsheets showing high overhead. The dilemma of hiring human ISAs vs AI automation.`;
      industry = "general";
      break;

    case "real-estate-crm":
      subject = `Real estate professional comparing two software platforms on laptop screen. Confused expression, sticky notes with pros and cons. The challenge of choosing the right real estate technology. Multiple browser tabs open comparing features.`;
      industry = "real-estate";
      break;

    case "text-only-chatbot":
      subject = `Business decision maker looking at comparison chart on tablet, weighing options between different AI platforms. Professional setting, thoughtful expression considering pros and cons. The importance of choosing the right conversational AI.`;
      industry = "general";
      break;

    default:
      subject = `Business professional thoughtfully comparing options on laptop screen. Modern office, focused expression making an important decision. The clarity that comes from proper comparison.`;
      industry = "general";
      break;
  }

  return buildPrompt({
    category: "hero",
    subject,
    industry,
    mood: "professional",
  });
}

// ---------------------------------------------------------------------------
// Build batch items
// ---------------------------------------------------------------------------

async function main() {
  // Ensure output directory exists
  await mkdir("public/images/hero", { recursive: true });

  const items: BatchItem[] = [];

  // Alternative pages
  console.log("\n=== Alternative Pages ===");
  for (const [slug, alt] of Object.entries(alternatives)) {
    const category = categorizeCompetitor(slug, alt);
    const filename = `hero-alternative-${slug}.png`;
    const prompt = getAlternativeHeroPrompt(slug, alt);

    console.log(`${slug}: ${category}`);
    console.log(`  File: ${filename}`);
    console.log(`  Prompt: ${prompt.substring(0, 100)}...\n`);

    items.push({
      prompt,
      filename,
      aspectRatio: "16:9",
    });
  }

  // Compare pages
  console.log("\n=== Compare Pages ===");
  for (const info of comparePages) {
    const filename = `hero-compare-${info.slug}.png`;
    const prompt = getCompareHeroPrompt(info);

    console.log(`${info.slug}: ${info.category}`);
    console.log(`  File: ${filename}`);
    console.log(`  Prompt: ${prompt.substring(0, 100)}...\n`);

    items.push({
      prompt,
      filename,
      aspectRatio: "16:9",
    });
  }

  // Generate with concurrency of 2 to respect rate limits
  console.log(`\n=== Generating ${items.length} hero images ===`);
  console.log("Using concurrency: 2 (rate limit: 20 req/10sec)\n");

  const report = await generateBatchParallel(
    {
      category: "hero",
      items,
      onProgress: (completed, total, current) => {
        console.log(`[${completed}/${total}] ${current}`);
      },
    },
    2
  );

  // Final report
  console.log("\n=== Generation Report ===");
  console.log(`Category: ${report.category}`);
  console.log(`Total: ${report.total}`);
  console.log(`Succeeded: ${report.succeeded}`);
  console.log(`Failed: ${report.failed}`);

  if (report.errors.length > 0) {
    console.log("\nErrors:");
    for (const err of report.errors) {
      console.log(`  ${err.filename}: ${err.error}`);
    }
  }

  console.log("\n=== Generated Files ===");
  for (const result of report.results) {
    if (result.success) {
      console.log(`  ${result.outputPath}`);
    }
  }
}

main().catch(console.error);
