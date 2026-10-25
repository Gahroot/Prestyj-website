import { z } from "zod";

import rawExperiments from "@/lib/conversion/cta-experiments.json";

/**
 * CTA A/B experiments. The JSON file is edited by the growth engine to promote winners
 * (status/weight). Copy may contain `{workflow}`, replaced with the workflow name.
 */
export const ctaPlacementSchema = z.enum([
  "article-inline",
  "article-end",
  "page-end",
  "book-demo",
]);
export type CtaPlacement = z.infer<typeof ctaPlacementSchema>;

export const ctaVariantSchema = z.object({
  id: z.string().min(1),
  headline: z.string().min(1),
  body: z.string(),
  buttonLabel: z.string().min(1),
  weight: z.number().nonnegative(),
  status: z.enum(["testing", "winner", "retired"]),
});
export type CtaVariant = z.infer<typeof ctaVariantSchema>;

export const ctaExperimentSchema = z.object({
  id: z.string().min(1),
  placement: ctaPlacementSchema,
  variants: z.array(ctaVariantSchema).min(1),
});
export type CtaExperiment = z.infer<typeof ctaExperimentSchema>;

export const ctaExperimentsFileSchema = z.object({ experiments: z.array(ctaExperimentSchema) });

export function parseCtaExperiments(data: unknown): readonly CtaExperiment[] {
  return ctaExperimentsFileSchema.parse(data).experiments;
}

export const ctaExperiments: readonly CtaExperiment[] = parseCtaExperiments(rawExperiments);

export function getExperimentForPlacement(
  placement: CtaPlacement,
  experiments: readonly CtaExperiment[] = ctaExperiments,
): CtaExperiment | undefined {
  return experiments.find((experiment) => experiment.placement === placement);
}

/** FNV-1a 32-bit hash: stable across runtimes. */
export function hashString(value: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/** Variant shown before a visitor id exists (server render): winner, else first active. */
export function defaultVariant(experiment: CtaExperiment): CtaVariant | undefined {
  return (
    experiment.variants.find((variant) => variant.status === "winner") ??
    experiment.variants.find((variant) => variant.status !== "retired")
  );
}

/**
 * Deterministic per-visitor bucketing by weight among non-retired variants.
 * A winner overrides bucketing. Zero total weight falls back to the first active variant.
 */
export function pickVariant(experiment: CtaExperiment, visitorId: string): CtaVariant | undefined {
  const winner = experiment.variants.find((variant) => variant.status === "winner");
  if (winner) return winner;
  const active = experiment.variants.filter((variant) => variant.status !== "retired");
  const total = active.reduce((sum, variant) => sum + variant.weight, 0);
  if (total <= 0) return active[0];
  const point = (hashString(`${experiment.id}:${visitorId}`) / 0x100000000) * total;
  let cumulative = 0;
  for (const variant of active) {
    cumulative += variant.weight;
    if (point < cumulative) return variant;
  }
  return active[active.length - 1];
}

export function fillCtaCopy(text: string, workflow: string): string {
  return text.replaceAll("{workflow}", workflow);
}
