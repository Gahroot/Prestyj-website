#!/usr/bin/env tsx
/**
 * Media generation script - generates all images for Prestyj.com
 *
 * Usage:
 *   npx tsx src/lib/media/generate-all.ts              # Generate all
 *   npx tsx src/lib/media/generate-all.ts best-for     # Generate best-for heroes only
 *   npx tsx src/lib/media/generate-all.ts blog         # Generate blog thumbnails only
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { buildPrompt } from "./prompt-builder";
import { generateAndDownload } from "./z-image";
import type { AspectRatio, Industry } from "./types";
import { readdirSync } from "node:fs";
import { existsSync } from "node:fs";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const INDUSTRY_MAP: Record<string, "roofing" | "hvac" | "plumbing" | "solar" | "real-estate" | "mortgage" | "dental" | "legal" | "insurance" | "general"> = {
  "roofing": "roofing",
  "hvac": "hvac",
  "plumbing": "plumbing",
  "solar": "solar",
  "solar-lead-response": "solar",
  "real-estate-teams": "real-estate",
  "real-estate-franchises": "real-estate",
  "real-estate-investors": "real-estate",
  "real-estate-wholesalers": "real-estate",
  "mortgage-brokers": "mortgage",
  "dental": "dental",
  "ai-voice-receptionist-dental": "dental",
  "law-firms": "legal",
  "ai-voice-receptionist-legal": "legal",
  "insurance-agencies": "insurance",
  "insurance-carriers": "insurance",
  "ai-voice-receptionist-insurance": "insurance",
  "ai-voice-receptionist-medical": "dental",
};

function mapIndustry(slug: string): "roofing" | "hvac" | "plumbing" | "solar" | "real-estate" | "mortgage" | "dental" | "legal" | "insurance" | "general" {
  return INDUSTRY_MAP[slug] || "general";
}

// ---------------------------------------------------------------------------
// Best-for hero images
// ---------------------------------------------------------------------------

const BEST_FOR_SLUGS = [
  "solo-agents", "real-estate-teams", "isa-replacement", "new-agents",
  "real-estate-franchises", "regional-brokerage-networks", "pe-backed-platforms",
  "commercial-real-estate", "real-estate-investors", "insurance-agencies",
  "insurance-carriers", "hvac", "mortgage-brokers", "financial-advisors",
  "wealth-management-firms", "roofing", "property-managers", "solar",
  "dental", "done-for-you-ai", "ai-lead-response", "ai-voice-qualification",
  "ai-appointment-setting", "custom-ai-development", "ai-voice-receptionist",
  "ai-voice-receptionist-dental", "ai-voice-receptionist-legal",
  "ai-voice-receptionist-medical", "ai-voice-receptionist-insurance",
  "law-firms", "plastic-surgery", "plumbing", "auto-dealerships",
  "real-estate-wholesalers", "contractors", "real-estate-coach", "fintech",
  "accounting-firms", "veterinary-clinics", "restaurants", "salons-and-spas",
  "gyms-and-fitness-centers", "retail-stores", "mental-health-clinics",
  "electricians", "auto-repair-shops", "pest-control", "senior-care",
  "window-and-door-manufacturers", "landscaping-lawn-care", "painting-contractors",
  "movers", "siding-contractors", "garage-door", "flooring-contractors",
];

async function generateBestForHeroes(): Promise<void> {
  console.log(`\n📸 Generating ${BEST_FOR_SLUGS.length} best-for hero images...\n`);

  for (let i = 0; i < BEST_FOR_SLUGS.length; i++) {
    const slug = BEST_FOR_SLUGS[i];
    const industry = mapIndustry(slug);
    const filename = `hero-best-for-${slug}.png`;
    const outputPath = `public/images/hero/${filename}`;

    // Skip if exists
    if (existsSync(outputPath)) {
      console.log(`✓ [${i + 1}/${BEST_FOR_SLUGS.length}] ${filename} (exists)`);
      continue;
    }

    const subject = getIndustrySubject(slug);
    const prompt = buildPrompt({
      category: "hero",
      subject,
      industry,
      mood: "dynamic",
    });

    console.log(`[${i + 1}/${BEST_FOR_SLUGS.length}] Generating ${filename}...`);
    const result = await generateAndDownload(prompt, "16:9", outputPath);

    if (result.success) {
      console.log(`  ✓ Generated ${filename}`);
    } else {
      console.log(`  ✗ Failed: ${result.error}`);
    }
  }
}

function getIndustrySubject(slug: string): string {
  const subjects: Record<string, string> = {
    "roofing": "Roofer on residential jobsite during golden hour, examining storm damage, hard hat visible, suburban neighborhood background",
    "hvac": "HVAC technician working on air conditioning unit, residential exterior, tools visible",
    "plumbing": "Plumber under sink with wrench, professional appearance, residential bathroom",
    "solar": "Solar panel installer on rooftop, bright sunny day, safety harness, modern home",
    "solo-agents": "Real estate agent making calls from home office, laptop open, motivated expression",
    "real-estate-teams": "Real estate team huddling before open house, diverse group, front of property",
    "mortgage-brokers": "Loan officer reviewing documents with client at desk, warm office lighting",
    "dental": "Dentist consulting with patient in modern clinic, friendly professional manner",
    "law-firms": "Attorney meeting with client in office, bookshelves background, professional attire",
    "insurance-agencies": "Insurance agent reviewing policy documents with family at kitchen table",
  };
  return subjects[slug] || "Business owner in their element, confident and professional, natural work environment";
}

// ---------------------------------------------------------------------------
// Blog thumbnails
// ---------------------------------------------------------------------------

const BLOG_POSTS = [
  { slug: "roofing-speed-to-lead-2026", industry: "roofing" as Industry },
  { slug: "missed-call-text-back-roofers-2026", industry: "roofing" as Industry },
  { slug: "ai-storm-response-roofing-2026", industry: "roofing" as Industry },
  { slug: "roofing-lead-magnet-2026", industry: "roofing" as Industry },
];

async function generateBlogThumbnails(): Promise<void> {
  console.log(`\n📸 Generating blog thumbnails...\n`);

  for (let i = 0; i < BLOG_POSTS.length; i++) {
    const post = BLOG_POSTS[i];
    const filename = `${post.slug}.jpg`;
    const outputPath = `public/images/blog/${filename}`;

    if (existsSync(outputPath)) {
      console.log(`✓ [${i + 1}/${BLOG_POSTS.length}] ${filename} (exists)`);
      continue;
    }

    const title = post.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const prompt = buildPrompt({
      category: "blog-thumbnail",
      subject: `Editorial image representing: ${title}`,
      industry: post.industry,
      mood: "professional",
    });

    console.log(`[${i + 1}/${BLOG_POSTS.length}] Generating ${filename}...`);
    const result = await generateAndDownload(prompt, "16:9", outputPath);

    if (result.success) {
      console.log(`  ✓ Generated ${filename}`);
    } else {
      console.log(`  ✗ Failed: ${result.error}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Mascot
// ---------------------------------------------------------------------------

async function generateMascot(): Promise<void> {
  console.log(`\n📸 Generating mascot images...\n`);

  const prompts = [
    "Abstract geometric P letterform, glowing purple gradient, dark charcoal background, crystalline facets, no face no humanoid features",
    "Abstract geometric P letterform, purple neon glow, near black background, clean edges, minimal design",
    "Abstract geometric P letterform, iridescent purple surface, dark background, sleek modern aesthetic",
  ];

  for (let i = 0; i < prompts.length; i++) {
    const filename = `mascot-p-${i + 1}.png`;
    const outputPath = `public/images/brand/${filename}`;

    if (existsSync(outputPath)) {
      console.log(`✓ ${filename} (exists)`);
      continue;
    }

    console.log(`Generating ${filename}...`);
    const result = await generateAndDownload(
      prompts[i] + ". NOT: robot, face, eyes, humanoid, cartoon, character",
      "1:1",
      outputPath
    );

    if (result.success) {
      console.log(`  ✓ Generated ${filename}`);
    } else {
      console.log(`  ✗ Failed: ${result.error}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Badges
// ---------------------------------------------------------------------------

async function generateBadges(): Promise<void> {
  console.log(`\n📸 Generating trust badges...\n`);

  const badges = [
    { slug: "24-7-response", text: "24/7 Response" },
    { slug: "under-60s", text: "Under 60s" },
    { slug: "3x-appointments", text: "3x More Appointments" },
    { slug: "enterprise", text: "Enterprise Ready" },
    { slug: "hipaa", text: "HIPAA Compliant" },
    { slug: "gdpr", text: "GDPR Compliant" },
  ];

  for (let i = 0; i < badges.length; i++) {
    const badge = badges[i];
    const filename = `badge-${badge.slug}.png`;
    const outputPath = `public/images/badges/${filename}`;

    if (existsSync(outputPath)) {
      console.log(`✓ ${filename} (exists)`);
      continue;
    }

    const prompt = `Circular badge design with text "${badge.text}", deep purple border, dark background, clean minimalist style, trust badge aesthetic. NOT: robot, face, complex details`;

    console.log(`Generating ${filename}...`);
    const result = await generateAndDownload(prompt, "1:1", outputPath);

    if (result.success) {
      console.log(`  ✓ Generated ${filename}`);
    } else {
      console.log(`  ✗ Failed: ${result.error}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Result graphics
// ---------------------------------------------------------------------------

async function generateResults(): Promise<void> {
  console.log(`\n📸 Generating result graphics...\n`);

  const results = [
    { slug: "3x-appointments", text: "3x More Appointments" },
    { slug: "20-qualified-leads", text: "20 Qualified Leads in 30 Days" },
    { slug: "24-7-response", text: "24/7 Lead Response" },
    { slug: "under-60s", text: "Under 60 Second Response" },
    { slug: "50k-revenue", text: "$50k+ Revenue Increase" },
  ];

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const filename = `result-${result.slug}.png`;
    const outputPath = `public/images/results/${filename}`;

    if (existsSync(outputPath)) {
      console.log(`✓ ${filename} (exists)`);
      continue;
    }

    const prompt = `Data visualization graphic showing "${result.text}", bold typography, dark charcoal background, deep purple accents, clean modern infographic style. NOT: robot, face, photo, realistic`;

    console.log(`Generating ${filename}...`);
    const genResult = await generateAndDownload(prompt, "16:9", outputPath);

    if (genResult.success) {
      console.log(`  ✓ Generated ${filename}`);
    } else {
      console.log(`  ✗ Failed: ${genResult.error}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const category = args[0] || "all";

  console.log("🎨 Prestyj Media Generation");
  console.log("============================\n");

  switch (category) {
    case "best-for":
      await generateBestForHeroes();
      break;
    case "blog":
      await generateBlogThumbnails();
      break;
    case "mascot":
      await generateMascot();
      break;
    case "badges":
      await generateBadges();
      break;
    case "results":
      await generateResults();
      break;
    case "all":
      await generateMascot();
      await generateBadges();
      await generateResults();
      await generateBlogThumbnails();
      await generateBestForHeroes();
      break;
    default:
      console.log(`Unknown category: ${category}`);
      console.log("Usage: npx tsx src/lib/media/generate-all.ts [best-for|blog|mascot|badges|results|all]");
  }

  console.log("\n✨ Generation complete!\n");
}

main().catch(console.error);
