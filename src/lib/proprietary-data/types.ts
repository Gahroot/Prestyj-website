/**
 * Proprietary-data injection for programmatic pages.
 *
 * After the near-duplicate prune (see scripts/seo/find-near-duplicate-pages.ts),
 * every surviving canonical programmatic page is expected to carry a block of
 * Prestyj-owned statistics plus original analysis. The point is genuine
 * differentiation: each page binds a *distinct* set of proprietary numbers from
 * src/lib/statistics-data and an original interpretation of those numbers to a
 * query no sibling page already covers — which is what survives Google's
 * site-level scaled-content quality filter.
 *
 * `statId` references an id in src/lib/statistics-data (resolved via
 * findStatById). `analysis` is page-specific original interpretation of that
 * number for the page's exact audience and query — never reused verbatim across
 * pages.
 */

export interface ProprietaryStatRef {
  /** id of a Statistic in src/lib/statistics-data (resolved by findStatById). */
  statId: string;
  /** Original, page-specific interpretation of the number. Must be unique per page. */
  analysis: string;
}

export interface ProprietaryDataBlock {
  /** The distinct query this block answers (used as the section heading). */
  heading: string;
  /** One-paragraph framing of why these specific numbers matter for this page. */
  intro: string;
  /** 2–4 proprietary statistics, each with original analysis. */
  stats: ProprietaryStatRef[];
  /** Optional methodology / sourcing note rendered under the grid. */
  footnote?: string;
}
