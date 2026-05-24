import { getAllFlatStatistics } from "@/lib/statistics";

/**
 * Public CSV download of every Prestyj statistic.
 *
 * Licensed CC BY 4.0 — anyone using the data must attribute Prestyj
 * (link to prestyj.com). The CSV embeds the permalink for each row so
 * the attribution-as-backlink path is built into the data itself.
 *
 * URL: https://prestyj.com/data/statistics.csv
 */
export const dynamic = "force-static";

const HEADERS = [
  "id",
  "category",
  "value",
  "description",
  "source_name",
  "source_year",
  "source_url",
  "context",
  "permalink",
  "embed_url",
  "license",
  "attribution",
] as const;

const LICENSE = "CC BY 4.0";
const ATTRIBUTION = "Prestyj — https://prestyj.com";

function csvEscape(value: string | undefined | null): string {
  if (value === undefined || value === null) return "";
  const needsQuoting = /[",\r\n]/.test(value);
  const escaped = value.replace(/"/g, '""');
  return needsQuoting ? `"${escaped}"` : escaped;
}

export function GET(): Response {
  const rows = getAllFlatStatistics().map((s) =>
    [
      s.id,
      s.categoryTitle,
      s.value,
      s.description,
      s.source.name,
      s.source.year,
      s.source.url ?? "",
      s.context ?? "",
      s.permalink,
      s.embedUrl,
      LICENSE,
      ATTRIBUTION,
    ]
      .map(csvEscape)
      .join(","),
  );

  const csv = [HEADERS.join(","), ...rows].join("\n") + "\n";

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="prestyj-statistics.csv"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-License": LICENSE,
      "X-Attribution-Required": "https://prestyj.com",
    },
  });
}
