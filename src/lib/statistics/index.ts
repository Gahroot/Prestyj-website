/**
 * Statistics helpers — flatten the nested statCategories tree, look up
 * individual statistics by id, and build citation strings (APA / MLA / BibTeX)
 * for each one.
 *
 * These helpers power:
 *  - /data download endpoints (CSV + JSON)
 *  - /stat/[id] permanent per-statistic pages
 *  - /embed/stat/[id] iframe-embeddable cards
 *  - Citation blocks on the public statistics page
 *
 * The point: every Prestyj statistic gets a citable, embeddable, linkable
 * surface — so when a journalist, blogger, or AI engine references the
 * number, the path of least resistance is to link back to prestyj.com.
 */

import { statCategories, type Statistic, type StatCategory } from "@/lib/statistics-data";

const SITE_URL = "https://prestyj.com";

export interface FlatStatistic extends Statistic {
  categoryId: string;
  categoryTitle: string;
  categorySlug: string;
  permalink: string;
  embedUrl: string;
  categoryPermalink: string;
}

/**
 * Flatten the nested statCategories array into a single list of statistics
 * each annotated with its parent category and permanent URLs.
 */
export function flattenStatistics(categories: StatCategory[] = statCategories): FlatStatistic[] {
  const flat: FlatStatistic[] = [];
  for (const category of categories) {
    for (const stat of category.statistics) {
      flat.push({
        ...stat,
        categoryId: category.id,
        categoryTitle: category.title,
        categorySlug: category.slug,
        permalink: `${SITE_URL}/stat/${stat.id}`,
        embedUrl: `${SITE_URL}/embed/stat/${stat.id}`,
        categoryPermalink: `${SITE_URL}/statistics#${category.slug}`,
      });
    }
  }
  return flat;
}

export function getAllFlatStatistics(): FlatStatistic[] {
  return flattenStatistics(statCategories);
}

export function findStatById(id: string): FlatStatistic | undefined {
  return getAllFlatStatistics().find((s) => s.id === id);
}

export function getAllStatIds(): string[] {
  return getAllFlatStatistics().map((s) => s.id);
}

/**
 * Group statistics by category — used for the dataset landing page and CSV.
 */
export function getStatisticsByCategory(): Array<{
  category: StatCategory;
  statistics: FlatStatistic[];
}> {
  return statCategories.map((category) => ({
    category,
    statistics: flattenStatistics([category]),
  }));
}

// ─── Citation builders ────────────────────────────────────────────────────────
// Generate citation strings in the formats journalists, bloggers, and
// academics actually use. Each format embeds the prestyj.com URL — so any
// "How to cite" copy-paste = a backlink.

interface CitationStrings {
  apa: string;
  mla: string;
  chicago: string;
  bibtex: string;
  markdown: string;
  html: string;
  plaintext: string;
}

export function buildCitation(stat: FlatStatistic): CitationStrings {
  const year = stat.source.year || "2026";
  const sourceName = stat.source.name;
  const description = stat.description.replace(/\s+/g, " ").trim();
  const valueAndDesc = `${stat.value} — ${description}`;

  const apa = `Prestyj. (${stripYearRange(year)}). ${valueAndDesc} (Original source: ${sourceName}). Retrieved from ${stat.permalink}`;

  const mla = `"${valueAndDesc}" Prestyj, ${stripYearRange(year)}, ${stat.permalink}. Original source: ${sourceName}.`;

  const chicago = `Prestyj. "${valueAndDesc}" Original data: ${sourceName}, ${year}. ${stat.permalink}.`;

  const bibtex = [
    `@misc{prestyj-${stat.id},`,
    `  title  = "${stat.value} — ${escapeBibtex(description)}",`,
    `  author = "{Prestyj}",`,
    `  year   = "${stripYearRange(year)}",`,
    `  note   = "Original source: ${escapeBibtex(sourceName)}",`,
    `  url    = "${stat.permalink}"`,
    `}`,
  ].join("\n");

  const markdown = `**${stat.value}** — ${description} ([Prestyj](${stat.permalink}), original source: ${sourceName}, ${year}).`;

  const html = `<strong>${stat.value}</strong> — ${escapeHtml(description)} (<a href="${stat.permalink}" rel="noopener">Prestyj</a>, original source: ${escapeHtml(sourceName)}, ${escapeHtml(year)}).`;

  const plaintext = `${stat.value} — ${description} (Prestyj, ${stat.permalink}; original source: ${sourceName}, ${year}).`;

  return { apa, mla, chicago, bibtex, markdown, html, plaintext };
}

function stripYearRange(year: string): string {
  // "2024–2025" → "2024", "2021, re-cited 2024–2026" → "2021"
  const match = year.match(/\d{4}/);
  return match ? match[0] : year;
}

function escapeBibtex(s: string): string {
  return s.replace(/[{}\\]/g, "");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Embed snippet builders ──────────────────────────────────────────────────

export interface EmbedSnippets {
  iframe: string;
  iframeWithAttribution: string;
  markdown: string;
  plainHtml: string;
}

export function buildStatEmbedSnippets(stat: FlatStatistic): EmbedSnippets {
  const title = `${stat.value} — ${stat.description.slice(0, 80)}${stat.description.length > 80 ? "…" : ""}`;
  const iframe = `<iframe src="${stat.embedUrl}" width="100%" height="260" style="border:0;border-radius:12px;overflow:hidden;max-width:640px" title="${escapeHtml(title)}" loading="lazy"></iframe>`;
  const attribution = `<p style="font-size:12px;color:#555;margin-top:4px">Source: <a href="${stat.permalink}" rel="noopener">${escapeHtml(stat.categoryTitle)} — Prestyj</a></p>`;
  const iframeWithAttribution = `${iframe}\n${attribution}`;
  const markdown = `> **${stat.value}** — ${stat.description}\n>\n> — [${stat.categoryTitle} — Prestyj](${stat.permalink}) (original source: ${stat.source.name}, ${stat.source.year})`;
  const plainHtml = `<blockquote><strong>${stat.value}</strong> — ${escapeHtml(stat.description)}<br><cite>— <a href="${stat.permalink}" rel="noopener">${escapeHtml(stat.categoryTitle)} — Prestyj</a> (original source: ${escapeHtml(stat.source.name)}, ${escapeHtml(stat.source.year)})</cite></blockquote>`;
  return { iframe, iframeWithAttribution, markdown, plainHtml };
}
