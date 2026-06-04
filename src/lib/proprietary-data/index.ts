import { findStatById, type FlatStatistic } from "@/lib/statistics";
import type { ProprietaryDataBlock, ProprietaryStatRef } from "./types";

export type { ProprietaryDataBlock, ProprietaryStatRef } from "./types";

export interface ResolvedProprietaryStat {
  stat: FlatStatistic;
  analysis: string;
}

export interface ResolvedProprietaryDataBlock {
  heading: string;
  intro: string;
  stats: ResolvedProprietaryStat[];
  footnote?: string;
}

/**
 * Resolve a ProprietaryDataBlock's stat ids against src/lib/statistics-data.
 * Unknown ids are dropped (so a renamed stat never ships a blank card), and the
 * block is returned only when at least one stat resolves.
 */
export function resolveProprietaryData(
  block: ProprietaryDataBlock | undefined,
): ResolvedProprietaryDataBlock | undefined {
  if (!block) return undefined;

  const stats: ResolvedProprietaryStat[] = [];
  for (const ref of block.stats) {
    const stat = findStatById(ref.statId);
    if (stat) stats.push({ stat, analysis: ref.analysis });
  }

  if (stats.length === 0) return undefined;

  return {
    heading: block.heading,
    intro: block.intro,
    stats,
    ...(block.footnote !== undefined ? { footnote: block.footnote } : {}),
  };
}

/** Returns the stat ids referenced by a block (for validation/audits). */
export function referencedStatIds(block: ProprietaryDataBlock): string[] {
  return block.stats.map((s: ProprietaryStatRef) => s.statId);
}
