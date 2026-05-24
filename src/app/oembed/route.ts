import { NextResponse } from "next/server";
import { findStatById } from "@/lib/statistics";
import { findEmbeddableCalculator } from "@/lib/calculator/embeddable";

/**
 * oEmbed 1.0 provider endpoint — implements https://oembed.com/
 *
 * Why: when a user pastes a /stat/<id> or /embed/calculator/<slug> URL into
 * Notion, WordPress, Substack, Ghost, Slack, Discord, Reddit, X, Discourse,
 * or any other rich-link consumer, the host queries this endpoint and gets
 * back the embed HTML with the Prestyj iframe + visible attribution link.
 *
 * Every paste of a Prestyj URL into a third-party page = a backlink.
 *
 * Schemes registered in the homepage <link rel="alternate"> tag so providers
 * auto-discover without a directory entry.
 */
export const dynamic = "force-static";

interface OEmbedRich {
  version: "1.0";
  type: "rich";
  provider_name: "Prestyj";
  provider_url: "https://prestyj.com";
  title: string;
  author_name: "Prestyj";
  author_url: "https://prestyj.com";
  html: string;
  width: number;
  height: number;
  cache_age: number;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

function isJsonFormat(searchParams: URLSearchParams): boolean {
  const format = searchParams.get("format");
  return format === null || format === "json";
}

function parseTargetUrl(target: string): { kind: "stat"; id: string } | { kind: "calculator"; slug: string } | null {
  try {
    const url = new URL(target);
    if (url.hostname !== "prestyj.com" && url.hostname !== "www.prestyj.com") return null;
    // /stat/<id>  or  /embed/stat/<id>
    let m = url.pathname.match(/^\/(?:embed\/)?stat\/([a-zA-Z0-9-]+)\/?$/);
    if (m && m[1]) return { kind: "stat", id: m[1] };
    // /embed/calculator/<slug>  or  /ai-call-handling-calculator etc.
    m = url.pathname.match(/^\/embed\/calculator\/([a-zA-Z0-9-]+)\/?$/);
    if (m && m[1]) return { kind: "calculator", slug: m[1] };
    return null;
  } catch {
    return null;
  }
}

function clamp(value: number, lo: number, hi: number): number {
  return Math.min(Math.max(value, lo), hi);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET(request: Request): Response {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get("url");

  if (!target) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }
  if (!isJsonFormat(searchParams)) {
    // We don't bother with XML — oEmbed spec allows providers to return 501
    return NextResponse.json({ error: "Only json format is supported" }, { status: 501 });
  }

  const maxWidth = clamp(Number(searchParams.get("maxwidth") ?? "640"), 240, 1200);

  const parsed = parseTargetUrl(target);
  if (!parsed) {
    return NextResponse.json({ error: "URL not supported" }, { status: 404 });
  }

  if (parsed.kind === "stat") {
    const stat = findStatById(parsed.id);
    if (!stat) return NextResponse.json({ error: "Statistic not found" }, { status: 404 });
    const height = clamp(Number(searchParams.get("maxheight") ?? "260"), 180, 420);
    const titleText = `${stat.value} — ${stat.description}`;
    const html = [
      `<iframe src="${stat.embedUrl}" width="${maxWidth}" height="${height}" `,
      `style="border:0;border-radius:12px;overflow:hidden;max-width:100%" `,
      `title="${escapeHtml(titleText)}" loading="lazy"></iframe>`,
      `<p style="font-size:12px;color:#555;margin:4px 0 0">`,
      `Source: <a href="${stat.permalink}" rel="noopener">${escapeHtml(stat.categoryTitle)} — Prestyj</a>`,
      `</p>`,
    ].join("");
    const payload: OEmbedRich = {
      version: "1.0",
      type: "rich",
      provider_name: "Prestyj",
      provider_url: "https://prestyj.com",
      title: titleText,
      author_name: "Prestyj",
      author_url: "https://prestyj.com",
      html,
      width: maxWidth,
      height,
      cache_age: 86400,
    };
    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  // Calculator embed
  const calc = findEmbeddableCalculator(parsed.slug);
  if (!calc) return NextResponse.json({ error: "Calculator not found" }, { status: 404 });
  const height = clamp(
    Number(searchParams.get("maxheight") ?? String(calc.recommendedHeight)),
    600,
    2400,
  );
  const embedUrl = `https://prestyj.com/embed/calculator/${calc.slug}`;
  const html = [
    `<iframe src="${embedUrl}" width="${maxWidth}" height="${height}" `,
    `style="border:0;max-width:100%" loading="lazy" title="${escapeHtml(calc.title)}"></iframe>`,
    `<p style="font-size:12px;color:#555;margin:4px 0 0">`,
    `Calculator: <a href="${calc.permalink}" rel="noopener">${escapeHtml(calc.title)} — Prestyj</a>`,
    `</p>`,
  ].join("");
  const payload: OEmbedRich = {
    version: "1.0",
    type: "rich",
    provider_name: "Prestyj",
    provider_url: "https://prestyj.com",
    title: calc.title,
    author_name: "Prestyj",
    author_url: "https://prestyj.com",
    html,
    width: maxWidth,
    height,
    cache_age: 86400,
  };
  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
