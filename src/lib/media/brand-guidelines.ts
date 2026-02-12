import type { Industry, MediaCategory, Mood } from "./types";

/**
 * PRESTYJ Brand Visual Identity
 *
 * Brand positioning: "20 qualified appointments in 30 days or we work for free"
 * Target: $1M+ businesses (roofing, windows, real estate, mortgage) with closers looking to scale.
 * Psyche: Tony Robbins-like — results-focused, human-connected, NOT AI-focused.
 */

// ---------------------------------------------------------------------------
// Brand persona
// ---------------------------------------------------------------------------

export const BRAND_PERSONA = {
  name: "PRESTYJ",
  tagline: "20 qualified appointments in 30 days or we work for free",
  voice: "confident, results-driven, human-first",
  audience: "$1M+ businesses with closers who want to scale revenue",
  avoidance: [
    "AI-focused messaging",
    "robot imagery",
    "circuit boards",
    "futuristic sci-fi",
    "stock photo aesthetics",
    "corporate sterile",
  ],
} as const;

// ---------------------------------------------------------------------------
// Photography style
// ---------------------------------------------------------------------------

export const PHOTOGRAPHY_STYLE = {
  aesthetic: "Shot on iPhone",
  lighting: "natural, warm, golden-hour preferred",
  feel: "candid not posed, real environments, genuine expressions",
  subjects:
    "business owners, roofers on jobsites, agents at closings, loan officers with clients",
  technicalNotes: [
    "Shallow depth of field when appropriate",
    "Warm color temperature (5500-6500K feel)",
    "Natural skin tones, no heavy retouching",
    "Environmental context — show the workspace",
    "Eye-level or slightly below (empowering angle)",
  ],
} as const;

// ---------------------------------------------------------------------------
// Graphics style
// ---------------------------------------------------------------------------

export const GRAPHICS_STYLE = {
  palette: {
    primary: "deep purple (#7c3aed)",
    accent: "amber/gold highlights",
    background: "dark charcoal/near-black",
    text: "white and light gray",
  },
  typography: "bold, modern sans-serif, high contrast",
  elements: [
    "Clean data visualizations",
    "Bold stat callouts",
    "Geometric accents",
    "Subtle gradients (purple → darker purple)",
  ],
} as const;

// ---------------------------------------------------------------------------
// Mascot / brand mark concept
// ---------------------------------------------------------------------------

export const MASCOT_CONCEPT = {
  name: "The Agent",
  description:
    'Sophisticated geometric abstract "P" mark. Glowing purple, no face or humanoid features. Conveys speed, intelligence, and precision.',
  usage: "Watermark or accent element. Never the primary subject.",
  constraints: [
    "No cartoon features",
    "No humanoid form",
    "No face or eyes",
    "Abstract geometric only",
    "Purple glow / gradient",
  ],
} as const;

// ---------------------------------------------------------------------------
// Negative prompt (appended to every generation)
// ---------------------------------------------------------------------------

export const NEGATIVE_CONSTRAINTS = [
  "stock photo",
  "studio lighting",
  "white background",
  "robot",
  "circuit board",
  "sci-fi",
  "futuristic",
  "cyborg",
  "artificial",
  "corporate sterile",
  "clipart",
  "cartoon",
  "anime",
  "watermark",
  "text overlay",
  "lens flare",
  "over-saturated",
  "HDR look",
] as const;

// ---------------------------------------------------------------------------
// Industry subject descriptions
// ---------------------------------------------------------------------------

export const INDUSTRY_SUBJECTS: Record<Industry, string> = {
  roofing:
    "roofer on a jobsite, hard hat, ladder, residential roof, suburban neighborhood",
  windows:
    "window installer measuring a window frame, residential home, tools in hand",
  "real-estate":
    "real estate agent shaking hands with homebuyer, front porch of a home, sold sign",
  mortgage:
    "loan officer at a desk reviewing documents with a couple, warm office setting",
  solar:
    "solar panel installer on a rooftop, bright sunny day, safety harness",
  hvac: "HVAC technician working on an air conditioning unit, residential exterior",
  plumbing:
    "plumber under a kitchen sink with wrench, homeowner watching nearby",
  dental:
    "dentist in modern practice speaking with a patient, clean clinical setting",
  medical:
    "medical professional in a clinic speaking with a patient, clean modern healthcare setting",
  legal:
    "attorney in an office meeting with a client, bookshelves, professional attire",
  insurance:
    "insurance agent reviewing policy with a family at their kitchen table",
  "home-services":
    "home services professional arriving at a front door, branded van in driveway",
  general:
    "business owner at their desk, confident smile, modern office environment",
};

// ---------------------------------------------------------------------------
// Mood modifiers
// ---------------------------------------------------------------------------

export const MOOD_MODIFIERS: Record<Mood, string> = {
  triumphant: "victorious energy, celebration, achievement, big smiles",
  focused: "deep concentration, determination, precision, intensity",
  candid: "natural moment, unposed, authentic interaction, real emotion",
  dynamic: "movement, action, energy, momentum",
  warm: "welcoming, approachable, friendly, trustworthy",
  confident:
    "self-assured posture, direct eye contact, commanding presence",
  professional:
    "polished appearance, organized workspace, business attire",
};

// ---------------------------------------------------------------------------
// Category-specific prompt modifiers
// ---------------------------------------------------------------------------

export const CATEGORY_MODIFIERS: Record<MediaCategory, string> = {
  hero: "wide cinematic composition, dramatic natural lighting, environmental context, rule of thirds, leading lines",
  "testimonial-portrait":
    "tight headshot, shoulders up, natural background blur, warm directional light, genuine smile, professional appearance",
  "industry-shot":
    "environmental portrait, subject in their natural workspace, tools of the trade visible, authentic working conditions",
  "result-graphic":
    "clean data visualization, bold typography, dark background with purple accents, stat callout, modern infographic style",
  "blog-thumbnail":
    "editorial composition, slightly desaturated, text-safe negative space on one side, magazine cover feel",
  "social-media":
    "eye-catching composition, vibrant but not oversaturated, text-safe area, optimized for feed scroll",
  "icon-badge":
    "centered geometric design, clean edges, minimal detail, solid background, badge or seal aesthetic",
  mascot:
    'abstract geometric "P" letterform, glowing purple gradient, dark background, no face, no humanoid features, crystalline facets',
};

// ---------------------------------------------------------------------------
// Default mood per category
// ---------------------------------------------------------------------------

export const DEFAULT_MOOD: Record<MediaCategory, Mood> = {
  hero: "dynamic",
  "testimonial-portrait": "warm",
  "industry-shot": "focused",
  "result-graphic": "confident",
  "blog-thumbnail": "professional",
  "social-media": "dynamic",
  "icon-badge": "professional",
  mascot: "confident",
};
