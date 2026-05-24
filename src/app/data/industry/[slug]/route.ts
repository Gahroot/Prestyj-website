import { findIndustrySlice, getAllIndustrySlugs, getStatisticsForIndustry } from "@/lib/statistics/industries";

/**
 * Per-industry slice of the statistics dataset. Returns either CSV or JSON
 * based on the ?format= query parameter (default JSON). Same license + same
 * attribution requirement as the main /data endpoints — each consumer
 * citing this URL must backlink Prestyj.
 *
 * URLs:
 *   /data/industry/hvac           → JSON
 *   /data/industry/hvac?format=csv → CSV
 */

export const dynamic = "force-static";

export function generateStaticParams(): Array<{ slug: string }> {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

const CSV_HEADERS = [
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

function csvEscape(value: string | undefined | null): string {
  if (value == null) return "";
  return /[",\r\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
  const { slug } = await params;
  const slice = findIndustrySlice(slug);
  if (!slice) {
    return new Response(JSON.stringify({ error: "Industry not found", slug }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  const url = new URL(request.url);
  const format = url.searchParams.get("format") === "csv" ? "csv" : "json";
  const rows = getStatisticsForIndustry(slice);

  if (format === "csv") {
    const body =
      [CSV_HEADERS.join(",")]
        .concat(
          rows.map((s) =>
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
              "CC BY 4.0",
              "Prestyj — https://prestyj.com",
            ]
              .map(csvEscape)
              .join(","),
          ),
        )
        .join("\n") + "\n";
    return new Response(body, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `inline; filename="prestyj-${slug}-statistics.csv"`,
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "Access-Control-Allow-Origin": "*",
        "X-License": "CC BY 4.0",
        "X-Attribution-Required": "https://prestyj.com",
      },
    });
  }

  const now = new Date();
  const payload = {
    name: slice.title,
    description: slice.description,
    url: `https://prestyj.com/statistics/${slug}`,
    canonical: `https://prestyj.com/data`,
    industry: { slug, title: slice.title },
    license: "CC BY 4.0",
    license_url: "https://creativecommons.org/licenses/by/4.0/",
    attribution: "Prestyj — https://prestyj.com",
    citation: `Prestyj (2026). ${slice.title}. https://prestyj.com/statistics/${slug}`,
    version: now.toISOString().slice(0, 10),
    last_modified: now.toISOString(),
    total: rows.length,
    statistics: rows,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
      "X-License": "CC BY 4.0",
      "X-Attribution-Required": "https://prestyj.com",
    },
  });
}
