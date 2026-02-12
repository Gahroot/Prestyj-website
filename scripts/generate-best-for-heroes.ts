/**
 * Generate hero images for all 56 best-for pages
 *
 * Run with: npx tsx scripts/generate-best-for-heroes.ts
 */

import { config } from "dotenv";
config({ path: ".env.local" });
import { buildPrompt } from "../src/lib/media/prompt-builder";
import { generateBatchParallel } from "../src/lib/media/batch-generator";
import type { Industry } from "../src/lib/media/types";
import { getAllBestForSlugs } from "../src/lib/best-for";

// Industry mapping based on slug patterns
const INDUSTRY_MAP: Record<string, "roofing" | "hvac" | "plumbing" | "solar" | "real-estate" | "mortgage" | "dental" | "legal" | "insurance" | "general"> = {
  // Real estate variants
  "real-estate-teams": "real-estate",
  "real-estate-franchises": "real-estate",
  "real-estate-investors": "real-estate",
  "real-estate-wholesalers": "real-estate",
  "solo-agents": "real-estate",
  "isa-replacement": "real-estate",
  "new-agents": "real-estate",
  "regional-brokerage-networks": "real-estate",
  "pe-backed-platforms": "real-estate",
  "commercial-real-estate": "real-estate",
  "real-estate-coach": "real-estate",

  // Home services
  roofing: "roofing",
  hvac: "hvac",
  plumbing: "plumbing",
  solar: "solar",
  "window-and-door-manufacturers": "general", // No specific window industry in brand-guidelines
  "landscaping-lawn-care": "general",
  "painting-contractors": "general",
  movers: "general",
  "siding-contractors": "general",
  "garage-door": "general",
  "flooring-contractors": "general",
  electricians: "general",
  "pest-control": "general",
  contractors: "general",

  // Professional services
  "mortgage-brokers": "mortgage",
  dental: "dental",
  "law-firms": "legal",
  "insurance-agencies": "insurance",
  "insurance-carriers": "insurance",

  // Medical/Specialized
  "plastic-surgery": "general",
  "mental-health-clinics": "general",
  "veterinary-clinics": "general",
  "senior-care": "general",

  // Business/Finance
  "financial-advisors": "general",
  "wealth-management-firms": "general",
  "fintech": "general",
  "accounting-firms": "general",

  // Automotive
  "auto-dealerships": "general",
  "auto-repair-shops": "general",

  // Local business
  restaurants: "general",
  "salons-and-spas": "general",
  "gyms-and-fitness-centers": "general",
  "retail-stores": "general",
  "property-managers": "general",

  // AI/Technology variants
  "done-for-you-ai": "general",
  "ai-lead-response": "general",
  "ai-voice-qualification": "general",
  "ai-appointment-setting": "general",
  "custom-ai-development": "general",
  "ai-voice-receptionist": "general",
  "ai-voice-receptionist-dental": "dental",
  "ai-voice-receptionist-legal": "legal",
  "ai-voice-receptionist-medical": "general",
  "ai-voice-receptionist-insurance": "insurance",
};

// Industry-specific subject descriptions for hero images
const HERO_SUBJECTS: Record<string, string> = {
  // Real estate
  "real-estate": "Real estate agent on front porch with homebuyers, sold sign visible, suburban neighborhood, golden hour lighting",
  "solo-agents": "Real estate agent confident on phone, walking toward house with clients, modern suburban street",
  "real-estate-teams": "Team of real estate agents high-fiving at closing table, documents spread out, office celebration",
  "isa-replacement": "Real estate agent reviewing lead list on tablet, focused expression, modern office setting",
  "new-agents": "New real estate agent shaking hands with first client, warm welcoming front porch scene",
  "real-estate-franchises": "Multiple real estate agents collaborating in brokerage office, branding on wall, professional environment",
  "regional-brokerage-networks": "Group of real estate professionals in conference room, presentation on screen, collaborative meeting",
  "pe-backed-platforms": "Modern real estate office interior, team at desks with monitors, professional bustling environment",
  "commercial-real-estate": "Commercial agent with client in front of office building, business district, professional attire",
  "real-estate-investors": "Real estate investor examining property, clipboard in hand, residential street, analytical expression",
  "real-estate-wholesalers": "Real estate professional on phone walking from house to car, suburban neighborhood, action shot",
  "real-estate-coach": "Real estate coach mentoring agent in office, pointing at screen, collaborative learning environment",

  // Home services
  roofing: "Roofer on residential rooftop during golden hour, examining shingle damage, hard hat and tool belt visible, suburban neighborhood background",
  hvac: "HVAC technician servicing outdoor AC unit, residential home exterior, tools in hand, focused professional",
  plumbing: "Plumber under kitchen sink with wrench and tools, residential interior, homeowner watching nearby",
  solar: "Solar panel installer on residential rooftop, bright sunny day, safety harness, panels being installed",

  // Other home services
  "window-and-door-manufacturers": "Window installer measuring frame, residential home exterior, tape measure and tools",
  "landscaping-lawn-care": "Landscaping professional mowing lawn with commercial mower, residential property, sunny day",
  "painting-contractors": "Painter on ladder, roller in hand, fresh painted wall, residential interior",
  movers: "Movers carrying boxes into moving truck, residential driveway, professional uniforms",
  "siding-contractors": "Contractor installing vinyl siding, residential exterior, ladder and tools",
  "garage-door": "Technician repairing garage door spring, residential garage, tools and equipment",
  "flooring-contractors": "Flooring installer laying hardwood planks, residential interior, measuring tools visible",
  electricians: "Electrician working on electrical panel, residential interior, tools and safety gear",
  "pest-control": "Pest control technician treating home exterior, uniform and equipment visible",
  contractors: "General contractor reviewing plans with homeowner at kitchen table, residential interior",

  // Professional services
  "mortgage-brokers": "Loan officer at desk reviewing mortgage documents with couple, warm office setting, papers spread out",
  dental: "Dentist consulting with patient in modern clinic, clean bright setting, friendly professional interaction",
  "law-firms": "Attorney meeting with client in office, bookshelves in background, professional attire, confidential discussion",

  // Insurance
  "insurance-agencies": "Insurance agent reviewing policy with family at their kitchen table, warm home setting",
  "insurance-carriers": "Insurance professionals in modern office, reviewing data on screens, collaborative environment",

  // Medical/Specialized
  "plastic-surgery": "Medical professional consulting with patient, modern clinic setting, warm professional atmosphere",
  "mental-health-clinics": "Therapist in session with client, comfortable office setting, warm lighting",
  "veterinary-clinics": "Veterinarian examining pet with owner present, modern clinic, caring interaction",
  "senior-care": "Caregiver assisting senior patient, warm home-like setting, compassionate interaction",

  // Business/Finance
  "financial-advisors": "Financial advisor reviewing portfolio with client, office setting, charts on screen",
  "wealth-management-firms": "Wealth management team in conference room, presentation materials, professional environment",
  fintech: "Modern fintech office, professionals at desks with multiple monitors, collaborative startup atmosphere",
  "accounting-firms": "Accountant reviewing tax documents with client, office setting, papers and calculator",

  // Automotive
  "auto-dealerships": "Car salesperson showing vehicle to customer on lot, new cars in background, outdoor scene",
  "auto-repair-shops": "Auto mechanic working on vehicle in bay, tools visible, shop environment",

  // Local business
  restaurants: "Restaurant owner greeting guests at host stand, bustling dining room background, warm atmosphere",
  "salons-and-spas": "Salon professional styling client's hair, modern salon interior, mirrors and products visible",
  "gyms-and-fitness-centers": "Fitness trainer working with client on gym floor, modern facility, motivating interaction",
  "retail-stores": "Retail owner arranging merchandise in shop, well-organized store interior",
  "property-managers": "Property manager showing rental unit to prospective tenant, residential interior",

  // AI/Technology
  "done-for-you-ai": "Business owner reviewing results on laptop, modern office, confident expression",
  "ai-lead-response": "Business professional on phone with lead notification on tablet, responsive action scene",
  "ai-voice-qualification": "Office professional reviewing call analytics on computer screen, focused analysis",
  "ai-appointment-setting": "Calendar view on screen with professional reviewing appointments, organized desk scene",
  "custom-ai-development": "Developers collaborating on code, modern office, multiple screens",
  "ai-voice-receptionist": "Business phone system in action, professional office, incoming call handling scene",
  "ai-voice-receptionist-dental": "Dental office reception area, phone system visible, professional greeting scene",
  "ai-voice-receptionist-legal": "Law firm reception area, professional phone setup, attorney in background",
  "ai-voice-receptionist-medical": "Medical clinic reception desk, phone system, professional healthcare environment",
  "ai-voice-receptionist-insurance": "Insurance agency office, reception desk with phone, professional atmosphere",
};

// Subject descriptions for any slugs not explicitly defined above
const DEFAULT_SUBJECTS: Record<string, string> = {
  default: "Business owner at desk reviewing results, modern office environment, confident expression, natural lighting"
};

function getSubjectForSlug(slug: string): string {
  // First check if we have a specific subject
  if (HERO_SUBJECTS[slug]) {
    return HERO_SUBJECTS[slug];
  }

  // Check industry for generic subject
  const industry = INDUSTRY_MAP[slug] || "general";

  // Generate based on industry
  const industrySubjects: Record<string, string> = {
    "real-estate": "Real estate agent with clients, residential property scene, professional interaction",
    "roofing": "Roofer on jobsite with tools, residential property, professional service scene",
    "hvac": "HVAC technician servicing equipment, residential setting, professional service",
    "plumbing": "Plumber with tools, residential service environment, professional at work",
    "solar": "Solar installer at work, residential rooftop, professional installation scene",
    "mortgage": "Loan officer with client, office setting, professional consultation",
    "dental": "Dental professional with patient, modern clinic, care environment",
    "legal": "Attorney with client, office setting, professional consultation",
    "insurance": "Insurance professional with client, consultation setting",
    "general": "Business owner at work, modern office, confident professional",
  };

  return industrySubjects[industry] || industrySubjects["general"];
}

function getIndustryForSlug(slug: string): Industry {
  return (INDUSTRY_MAP[slug] || "general") as Industry;
}

async function main() {
  const slugs = getAllBestForSlugs();

  console.log(`Generating hero images for ${slugs.length} best-for pages...\n`);

  const items = slugs.map((slug) => {
    const industry = getIndustryForSlug(slug);
    const subject = getSubjectForSlug(slug);

    const prompt = buildPrompt({
      category: "hero",
      subject,
      industry,
      mood: "dynamic",
    });

    return {
      prompt,
      filename: `hero-best-for-${slug}.png`,
      aspectRatio: "16:9" as const,
    };
  });

  console.log("Prepared generation items:");
  items.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item.filename}`);
  });
  console.log();

  // Generate with progress tracking
  const report = await generateBatchParallel({
    category: "hero",
    items,
    onProgress: (completed, total, current) => {
      console.log(`[${completed}/${total}] Generated ${current}`);
    },
  });

  console.log("\n=== GENERATION COMPLETE ===");
  console.log(`Category: ${report.category}`);
  console.log(`Total: ${report.total}`);
  console.log(`Succeeded: ${report.succeeded}`);
  console.log(`Failed: ${report.failed}`);

  if (report.errors.length > 0) {
    console.log("\nErrors:");
    report.errors.forEach((err) => {
      console.log(`  - ${err.filename}: ${err.error}`);
    });
  }

  console.log("\nGenerated files:");
  report.results
    .filter((r) => r.success)
    .forEach((r) => {
      console.log(`  ✓ ${r.outputPath}`);
    });
}

main().catch(console.error);
