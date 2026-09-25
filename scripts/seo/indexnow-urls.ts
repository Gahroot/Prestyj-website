import { getAllUrls } from "../../src/lib/indexnow";

export const INDEXNOW_BASE_URL = "https://prestyj.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/** Use the same explicit institutional allowlist as the public sitemap. */
export function getIndexNowUrls(): string[] {
  return getAllUrls();
}

export function isIndexNowUrl(url: string): boolean {
  return getIndexNowUrls().includes(url);
}

export function isIndexableHtml(url: string, html: string, robotsHeader: string): boolean {
  if (!isIndexNowUrl(url)) return false;
  // Ignore comments and text-only elements: their contents are not metadata tags.
  const markup = html.replace(
    /<!--[\s\S]*?-->|<(script|style|textarea|title|xmp|iframe|noembed|noframes)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,
    "",
  );
  const tags = (name: string): Record<string, string>[] =>
    Array.from(markup.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi")), (match) =>
      Object.fromEntries(
        Array.from(
          match[0].matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g),
          (attribute) => [
            (attribute[1] ?? "").toLowerCase(),
            attribute[2] ?? attribute[3] ?? attribute[4] ?? "",
          ],
        ),
      ),
    );
  const robots = [
    robotsHeader,
    ...tags("meta")
      .filter((tag) => /^(robots|googlebot|bingbot)$/i.test(tag.name ?? ""))
      .map((tag) => tag.content ?? ""),
  ].join(",");
  if (/\b(noindex|none)\b/i.test(robots)) return false;
  const canonicals = tags("link").filter((tag) => tag.rel?.toLowerCase() === "canonical");
  if (canonicals.length !== 1) return false;
  return canonicals[0]?.href?.replace(/\/$/, "") === url.replace(/\/$/, "");
}

/** No redirects: a retired URL must never be mistaken for its live destination. */
export async function verifyIndexNowUrls(
  urls: readonly string[],
  signal: AbortSignal,
): Promise<boolean> {
  if (urls.length === 0 || urls.some((url) => !isIndexNowUrl(url))) return false;
  for (const url of urls) {
    const startedAt = Date.now();
    const response = await fetch(url, {
      redirect: "error",
      signal,
      headers: { "User-Agent": "Prestyj-IndexNow-Verification/1.0" },
    });
    const ok =
      response.status === 200 &&
      (response.headers.get("content-type") ?? "").includes("text/html") &&
      isIndexableHtml(url, await response.text(), response.headers.get("x-robots-tag") ?? "");
    console.log(
      JSON.stringify({
        event: "indexnow_verify",
        url,
        status: response.status,
        ok,
        elapsedMs: Date.now() - startedAt,
      }),
    );
    if (!ok) return false;
  }
  return true;
}

/** Verify live pages and hosted ownership before any submission; never log the key. */
export async function submitIndexNowUrls(
  urls: readonly string[],
  key: string,
  signal: AbortSignal,
): Promise<boolean> {
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) return false;
  if (!(await verifyIndexNowUrls(urls, signal))) return false;
  const keyLocation = `${INDEXNOW_BASE_URL}/${key}.txt`;
  const ownership = await fetch(keyLocation, { redirect: "error", signal });
  if (ownership.status !== 200 || (await ownership.text()).trim() !== key) {
    console.error("IndexNow ownership verification failed; nothing submitted.");
    return false;
  }
  const startedAt = Date.now();
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    redirect: "error",
    signal,
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: "prestyj.com", key, keyLocation, urlList: urls }),
  });
  console.log(
    JSON.stringify({
      event: "indexnow_submit",
      endpoint: INDEXNOW_ENDPOINT,
      urlCount: urls.length,
      status: response.status,
      elapsedMs: Date.now() - startedAt,
    }),
  );
  return response.status === 200 || response.status === 202;
}
