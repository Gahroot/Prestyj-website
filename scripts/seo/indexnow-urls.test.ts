import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getIndexNowUrls,
  isIndexableHtml,
  isIndexNowUrl,
  submitIndexNowUrls,
  verifyIndexNowUrls,
} from "./indexnow-urls";

const url = "https://prestyj.com/platform";
const html = `<html><head><link rel="canonical" href="${url}"></head><body>Platform</body></html>`;

afterEach(() => vi.unstubAllGlobals());

describe("institutional IndexNow discovery", () => {
  it("uses sorted canonical pages and excludes archived, private and draft surfaces", () => {
    const urls = getIndexNowUrls();
    expect(urls).toEqual([...new Set(urls)].sort());
    expect(urls).toContain("https://prestyj.com/capabilities/fund-operations");
    expect(urls).toContain("https://prestyj.com/blog/keep-the-system-of-record");
    for (const path of [
      "/free-ads",
      "/demo",
      "/stat/stl-21x",
      "/api/statistics",
      "/compare/prestyj-vs-conversica",
      "/blog/unreviewed-draft",
    ]) {
      expect(isIndexNowUrl(`https://prestyj.com${path}`)).toBe(false);
    }
    expect(isIndexNowUrl("https://example.com/platform")).toBe(false);
  });

  it("accepts a live self-canonical page", () => {
    expect(isIndexableHtml(url, html, "")).toBe(true);
    expect(isIndexableHtml(url, html.replaceAll('"', "'"), "")).toBe(true);
  });

  it.each([
    [html, "noindex"],
    [html, "bingbot: noindex"],
    [html.replace("</head>", '<meta name="ROBOTS" content="noindex, follow"></head>'), ""],
    [html.replace("</head>", "<meta name=bingbot content=none></head>"), ""],
    [html.replace(url, "https://prestyj.com/research"), ""],
    ["<html><head></head></html>", ""],
    [`${html}<link rel="canonical" href="${url}">`, ""],
    [`<!-- ${html} -->`, ""],
    [`<script>${html}</script>`, ""],
    [`<style>${html}</style>`, ""],
    [`<textarea>${html}</textarea>`, ""],
    [`<title>${html}</title>`, ""],
  ])("rejects nonindexable or ambiguous markup", (markup, robots) => {
    expect(isIndexableHtml(url, markup, robots)).toBe(false);
  });

  it("rejects arbitrary URLs before making requests", async () => {
    const fetcher = vi.fn();
    vi.stubGlobal("fetch", fetcher);
    expect(await verifyIndexNowUrls(["https://example.com"], new AbortController().signal)).toBe(
      false,
    );
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("refuses redirects instead of promoting retired destinations", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(null, { status: 308 }));
    vi.stubGlobal("fetch", fetcher);
    expect(await verifyIndexNowUrls([url], new AbortController().signal)).toBe(false);
    expect(fetcher).toHaveBeenCalledWith(url, expect.objectContaining({ redirect: "error" }));
  });

  it("checks live HTML and hosted ownership before submitting", async () => {
    const key = "test-key-12345";
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce(new Response(html, { headers: { "content-type": "text/html" } }))
      .mockResolvedValueOnce(new Response(key))
      .mockResolvedValueOnce(new Response(null, { status: 202 }));
    vi.stubGlobal("fetch", fetcher);
    expect(await submitIndexNowUrls([url], key, new AbortController().signal)).toBe(true);
    expect(fetcher).toHaveBeenNthCalledWith(
      3,
      "https://api.indexnow.org/indexnow",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          host: "prestyj.com",
          key,
          keyLocation: `https://prestyj.com/${key}.txt`,
          urlList: [url],
        }),
      }),
    );
  });

  it("does not submit when ownership verification fails", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce(new Response(html, { headers: { "content-type": "text/html" } }))
      .mockResolvedValueOnce(new Response("wrong-key"));
    vi.stubGlobal("fetch", fetcher);
    expect(await submitIndexNowUrls([url], "test-key-12345", new AbortController().signal)).toBe(
      false,
    );
    expect(fetcher).toHaveBeenCalledTimes(2);
  });
});
