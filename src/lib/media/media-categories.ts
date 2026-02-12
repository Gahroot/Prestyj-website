import type { CategoryConfig, MediaCategory } from "./types";

/**
 * Category configuration: default aspect ratios and output directories.
 */
export const CATEGORIES: Record<MediaCategory, CategoryConfig> = {
  hero: {
    category: "hero",
    defaultAspectRatio: "16:9",
    outputDir: "public/images/hero",
    description: "Section hero backgrounds and feature images",
  },
  "testimonial-portrait": {
    category: "testimonial-portrait",
    defaultAspectRatio: "1:1",
    outputDir: "public/images/testimonials",
    description: "Realistic professional headshots",
  },
  "industry-shot": {
    category: "industry-shot",
    defaultAspectRatio: "16:9",
    outputDir: "public/images/industry",
    description: "Professionals in work environments",
  },
  "result-graphic": {
    category: "result-graphic",
    defaultAspectRatio: "16:9",
    outputDir: "public/images/results",
    description: "Stats, ROI, data visualizations with brand colors",
  },
  "blog-thumbnail": {
    category: "blog-thumbnail",
    defaultAspectRatio: "16:9",
    outputDir: "public/images/blog",
    description: "Blog featured images",
  },
  "social-media": {
    category: "social-media",
    defaultAspectRatio: "16:9",
    outputDir: "public/images/social",
    description: "OG images and social cards",
  },
  "icon-badge": {
    category: "icon-badge",
    defaultAspectRatio: "1:1",
    outputDir: "public/images/badges",
    description: "Trust badges and certifications",
  },
  mascot: {
    category: "mascot",
    defaultAspectRatio: "1:1",
    outputDir: "public/images/brand",
    description: 'Abstract geometric "P" brand mark',
  },
};

/**
 * Generates a kebab-case filename for a media asset.
 */
export function generateFilename(
  category: MediaCategory,
  subject: string,
  extension = "png"
): string {
  const slug = subject
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

  return `${category}-${slug}.${extension}`;
}

/**
 * Returns the full output path for a media asset.
 */
export function getOutputPath(
  category: MediaCategory,
  filename: string
): string {
  return `${CATEGORIES[category].outputDir}/${filename}`;
}

/**
 * Returns the public URL path (relative to site root) for a media asset.
 */
export function getPublicPath(
  category: MediaCategory,
  filename: string
): string {
  // Strip the leading "public" from outputDir
  const dir = CATEGORIES[category].outputDir.replace(/^public/, "");
  return `${dir}/${filename}`;
}
