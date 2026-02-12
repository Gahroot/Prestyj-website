import {
  BRAND_PERSONA,
  CATEGORY_MODIFIERS,
  DEFAULT_MOOD,
  INDUSTRY_SUBJECTS,
  MOOD_MODIFIERS,
  NEGATIVE_CONSTRAINTS,
  PHOTOGRAPHY_STYLE,
} from "./brand-guidelines";
import type { PromptRequest } from "./types";

/**
 * Builds a complete image generation prompt from brand guidelines,
 * category defaults, industry context, and mood modifiers.
 */
export function buildPrompt(request: PromptRequest): string {
  const {
    category,
    subject,
    industry = "general",
    mood = DEFAULT_MOOD[category],
    customModifiers = [],
  } = request;

  const isGraphic =
    category === "result-graphic" ||
    category === "icon-badge" ||
    category === "mascot";

  const parts: string[] = [];

  // Core subject
  parts.push(subject);

  // Industry context (skip for graphics/mascot)
  if (!isGraphic && industry) {
    parts.push(INDUSTRY_SUBJECTS[industry]);
  }

  // Photography style (skip for graphics)
  if (!isGraphic) {
    parts.push(
      `${PHOTOGRAPHY_STYLE.aesthetic} aesthetic, ${PHOTOGRAPHY_STYLE.lighting}`
    );
  }

  // Category-specific composition
  parts.push(CATEGORY_MODIFIERS[category]);

  // Mood
  parts.push(MOOD_MODIFIERS[mood]);

  // Custom modifiers
  if (customModifiers.length > 0) {
    parts.push(customModifiers.join(", "));
  }

  // Brand alignment reminder
  parts.push(`brand: ${BRAND_PERSONA.voice}`);

  // Negative constraints
  const negatives = `NOT: ${NEGATIVE_CONSTRAINTS.join(", ")}`;

  return `${parts.join(". ")}. ${negatives}`;
}

/**
 * Builds a prompt specifically for testimonial portraits.
 */
export function buildTestimonialPrompt(
  name: string,
  role: string,
  industry: PromptRequest["industry"] = "general"
): string {
  return buildPrompt({
    category: "testimonial-portrait",
    subject: `Professional headshot of ${name}, ${role}`,
    industry,
    mood: "warm",
  });
}

/**
 * Builds a prompt for how-it-works step illustrations.
 */
export function buildHowItWorksPrompt(
  stepTitle: string,
  stepDescription: string
): string {
  return buildPrompt({
    category: "industry-shot",
    subject: `${stepTitle}: ${stepDescription}`,
    industry: "general",
    mood: "dynamic",
  });
}

/**
 * Builds a prompt for blog featured images.
 */
export function buildBlogThumbnailPrompt(
  title: string,
  industry: PromptRequest["industry"] = "general"
): string {
  return buildPrompt({
    category: "blog-thumbnail",
    subject: `Editorial image representing: ${title}`,
    industry,
    mood: "professional",
  });
}
