import { readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { z } from "zod";
import { researchArticles } from "../../src/lib/institutional/research";
import {
  institutionalIndexablePaths,
  indexableStaticRoutes,
} from "../../src/lib/institutional/site-map";
import { getArticleDates, rssArticleDate } from "../../src/lib/institutional/article-metadata";
import { contentLedgerSchema } from "./institutional-ledger";
import { parseArticle } from "./check-institutional-content";

const SITE = "https://prestyj.com";
export type SurfaceCheck = { ok: boolean; label: string; detail: string };
function attributes(tag: string): Record<string, string> {
  return Object.fromEntries(
    Array.from(tag.matchAll(/([\w:-]+)=["']([^"']*)["']/g), (match) => [
      match[1] ?? "",
      match[2] ?? "",
    ]),
  );
}
function meta(html: string, name: string): string | undefined {
  return Array.from(html.matchAll(/<meta\b[^>]*>/gi), (match) => attributes(match[0])).find(
    (attrs) => attrs.property === name || attrs.name === name,
  )?.content;
}
function articleJson(html: string): Record<string, unknown> | undefined {
  for (const match of html.matchAll(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    const data: unknown = JSON.parse(match[1] ?? "");
    const objects = Array.isArray(data) ? data : [data];
    for (const object of objects) {
      const parsed = z.record(z.string(), z.unknown()).safeParse(object);
      if (parsed.success && parsed.data["@type"] === "Article") return parsed.data;
    }
  }
  return undefined;
}
export function articleDateChecks(
  html: string,
  expected: { published: string; modified: string },
  slug: string,
): SurfaceCheck[] {
  const json = articleJson(html);
  const dateOnly = (value: unknown): string =>
    typeof value === "string" && /^\d{4}-\d{2}-\d{2}(?:T[\d:.]+Z)?$/.test(value)
      ? value.slice(0, 10)
      : "";
  const times = Array.from(
    html.matchAll(/<time\b[^>]*dateTime=["']([^"']+)["'][^>]*>/gi),
    (match) => match[1],
  );
  return [
    {
      ok:
        times.includes(expected.published) &&
        (expected.modified === expected.published || times.includes(expected.modified)),
      label: `${slug} visible dates`,
      detail: `${expected.published} / ${expected.modified}`,
    },
    {
      ok:
        dateOnly(meta(html, "article:published_time")) === expected.published &&
        dateOnly(meta(html, "article:modified_time")) === expected.modified,
      label: `${slug} Open Graph dates`,
      detail: "Publication and modification match source",
    },
    {
      ok:
        dateOnly(json?.datePublished) === expected.published &&
        dateOnly(json?.dateModified) === expected.modified,
      label: `${slug} Article JSON-LD dates`,
      detail: "Publication and modification match source",
    },
  ];
}
async function responseText(response: Response): Promise<string> {
  if (Number(response.headers.get("content-length")) > 6_000_000)
    throw new Error("Surface exceeds body limit");
  const reader = response.body?.getReader();
  if (!reader) return "";
  let bytes = 0;
  let text = "";
  const decoder = new TextDecoder();
  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    bytes += chunk.value.byteLength;
    if (bytes > 6_000_000) {
      await reader.cancel();
      throw new Error("Surface exceeds body limit");
    }
    text += decoder.decode(chunk.value, { stream: true });
  }
  return text + decoder.decode();
}

export async function checkCitationSurfaces(baseUrl: string): Promise<SurfaceCheck[]> {
  const base = new URL(baseUrl);
  if (
    base.username ||
    base.password ||
    !(
      (base.protocol === "http:" && ["127.0.0.1", "localhost"].includes(base.hostname)) ||
      (base.protocol === "https:" && ["prestyj.com", "www.prestyj.com"].includes(base.hostname))
    )
  )
    throw new Error("Use loopback HTTP or the owned production HTTPS site");
  const checks: SurfaceCheck[] = [];
  const add = (ok: boolean, label: string, detail: string): void => {
    checks.push({ ok, label, detail });
  };
  const fetchSurface = async (route: string): Promise<{ response: Response; text: string }> => {
    const response = await fetch(new URL(route, base), {
      redirect: "manual",
      signal: AbortSignal.timeout(20_000),
    });
    return { response, text: await responseText(response) };
  };
  const [sitemap, rss, llms, robots] = await Promise.all(
    ["/sitemap.xml", "/feed/blog.xml", "/llms.txt", "/robots.txt"].map(fetchSurface),
  );
  if (!sitemap || !rss || !llms || !robots) throw new Error("Missing discovery response");
  for (const [name, surface] of [
    ["sitemap", sitemap],
    ["RSS", rss],
    ["llms", llms],
    ["robots", robots],
  ] as const)
    add(surface.response.status === 200, `${name} status`, String(surface.response.status));
  const locations = Array.from(sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]);
  add(
    locations.length === institutionalIndexablePaths.length &&
      institutionalIndexablePaths.every((route) =>
        locations.includes(`${SITE}${route === "/" ? "" : route}`),
      ),
    "sitemap exact membership",
    `${locations.length} URLs; expected ${institutionalIndexablePaths.length}`,
  );
  add(
    llms.text.startsWith("# Prestyj") && llms.text.includes("## Research"),
    "llms institutional identity",
    "Current institutional sections",
  );
  const robotsRules = robots.text
    .split(/\r?\n/)
    .map((line) => line.replace(/#.*/, "").trim())
    .join("\n");
  add(
    /^User-Agent: \*$/im.test(robotsRules) &&
      /^Allow: \/$/im.test(robotsRules) &&
      !/^Disallow: \/$/im.test(robotsRules),
    "public crawler access",
    "Public root allowed",
  );
  for (const route of ["/api/", "/admin/", "/embed/"])
    add(
      robotsRules.includes(`Disallow: ${route}`),
      `robots protects ${route}`,
      "Private/noncanonical surfaces blocked",
    );
  add(
    robots.text.includes(`${SITE}/sitemap.xml`),
    "robots sitemap",
    "Canonical sitemap advertised",
  );
  for (const route of indexableStaticRoutes) {
    const node = sitemap.text
      .split("<url>")
      .find((part) => part.includes(`<loc>${SITE}${route === "/" ? "" : route}</loc>`));
    add(
      Boolean(node) && !node?.includes("<lastmod>"),
      `${route} static lastmod`,
      "Unknown modification date omitted",
    );
  }
  const feedItems = rss.text.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  add(
    feedItems.length === researchArticles.length,
    "RSS exact article count",
    String(feedItems.length),
  );
  for (const article of researchArticles) {
    const route = `/blog/${article.slug}`;
    const expected = getArticleDates(
      parseArticle(readFileSync(`content/blog/${article.slug}.mdx`, "utf8")).metadata,
    );
    const { response, text } = await fetchSurface(route);
    add(response.status === 200, `${route} status`, String(response.status));
    const canonical = Array.from(text.matchAll(/<link\b[^>]*>/gi), (match) =>
      attributes(match[0]),
    ).find((attrs) => attrs.rel === "canonical")?.href;
    add(canonical === `${SITE}${route}`, `${route} canonical`, canonical ?? "missing");
    add(
      !/noindex/i.test(
        `${meta(text, "robots") ?? ""} ${response.headers.get("x-robots-tag") ?? ""}`,
      ),
      `${route} indexable`,
      "No noindex directive",
    );
    add(
      response.headers.get("x-frame-options") === "DENY" &&
        (response.headers.get("content-security-policy") ?? "").includes("frame-ancestors 'none'"),
      `${route} frame protection`,
      "Existing DENY and CSP retained",
    );
    checks.push(...articleDateChecks(text, expected, article.slug));
    const node = sitemap.text
      .split("<url>")
      .find((part) => part.includes(`<loc>${SITE}${route}</loc>`));
    add(
      Boolean(node?.includes(`<lastmod>${expected.modified}`)),
      `${route} sitemap date`,
      expected.modified,
    );
    const item = feedItems.find((part) => part.includes(`<link>${SITE}${route}</link>`));
    add(
      Boolean(
        item?.includes(`<pubDate>${rssArticleDate(expected.published)}</pubDate>`) &&
        item?.includes(`<atom:updated>${expected.modified}T00:00:00Z</atom:updated>`),
      ),
      `${route} RSS dates`,
      "Publication and update match source",
    );
    add(
      llms.text.includes(`${SITE}${route}`),
      `${route} llms membership`,
      "Registered article linked",
    );
  }
  const ledger = contentLedgerSchema.parse(
    JSON.parse(readFileSync("data/seo/institutional-content-backlog.json", "utf8")),
  );
  for (const item of ledger.items.filter((entry) =>
    entry.artifactPath.startsWith("content/drafts/"),
  )) {
    const url = `${SITE}/blog/${item.slug}`;
    add(
      !locations.includes(url) && !rss.text.includes(url) && !llms.text.includes(url),
      `${item.slug} draft exclusion`,
      "No discovery registration",
    );
    const result = await fetchSurface(`/blog/${item.slug}`);
    add(
      [307, 308, 404].includes(result.response.status) &&
        (result.response.status === 404 ||
          new URL(result.response.headers.get("location") ?? "", base).pathname === "/blog"),
      `${item.slug} not published`,
      String(result.response.status),
    );
  }
  for (const [route, destination] of [
    ["/data", "/research"],
    ["/stat/bva-cost-per-tested-angle", "/research"],
    ["/embed/stat/bva-cost-per-tested-angle", "/research"],
    ["/blog/branded-calling-pricing-comparison-2026", "/blog"],
  ] as const) {
    const result = await fetchSurface(route);
    const location = result.response.headers.get("location");
    add(
      [307, 308].includes(result.response.status) &&
        Boolean(location) &&
        new URL(location ?? "", base).pathname === destination,
      `${route} legacy redirect`,
      `${result.response.status} -> ${location ?? "missing"}`,
    );
    add(
      !locations.includes(`${SITE}${route}`) &&
        !rss.text.includes(`${SITE}${route}`) &&
        !llms.text.includes(`${SITE}${route}`),
      `${route} legacy exclusion`,
      "Absent from discovery",
    );
  }
  return checks;
}

async function main(): Promise<void> {
  try {
    const base = process.env.CITATION_SURFACE_BASE_URL ?? "http://127.0.0.1:4173";
    const checks = await checkCitationSurfaces(base);
    console.log(
      JSON.stringify(
        {
          base,
          evidenceKind: base.startsWith("https:")
            ? "pre-deployment production observation; not local release verification"
            : "local built-site verification",
          passed: checks.filter((check) => check.ok).length,
          total: checks.length,
          failures: checks.filter((check) => !check.ok),
        },
        null,
        2,
      ),
    );
    if (checks.some((check) => !check.ok)) process.exitCode = 1;
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Surface check failed");
    process.exitCode = 1;
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href)
  void main();
