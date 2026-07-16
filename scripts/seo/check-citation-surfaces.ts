import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const SITE_URL = "https://prestyj.com";
const LOCAL_URL = "http://127.0.0.1:4173";
const PORT = "4173";

const INDEXABLE_PRIORITY_URLS = [
  "/data",
  "/statistics",
  "/batch-video-ads",
  "/ai-sales-agents",
  "/ai-voice-agents",
  "/ai-marketing-agents",
  "/done-for-you-ai-agents",
  "/ai-receptionist",
  "/youtube-media-testing-services",
  "/video-ad-testing-pricing",
  "/blog/video-ad-testing-pricing-2026",
];

const LLMS_ONLY_PRIORITY_URLS = ["/stat/bva-cost-per-tested-angle"];

const LLMS_PRIORITY_URLS = [...INDEXABLE_PRIORITY_URLS, ...LLMS_ONLY_PRIORITY_URLS];

interface HeaderSnapshot {
  csp: string | null;
  xFrameOptions: string | null;
}

interface CheckResult {
  ok: boolean;
  label: string;
  detail: string;
}

function pass(label: string, detail: string): CheckResult {
  return { ok: true, label, detail };
}

function fail(label: string, detail: string): CheckResult {
  return { ok: false, label, detail };
}

async function fetchText(baseUrl: string, path: string): Promise<string> {
  const response = await fetch(new URL(path, baseUrl));
  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }
  return response.text();
}

async function fetchHeaders(baseUrl: string, path: string): Promise<HeaderSnapshot> {
  const response = await fetch(new URL(path, baseUrl));
  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  return {
    csp: response.headers.get("content-security-policy"),
    xFrameOptions: response.headers.get("x-frame-options"),
  };
}

async function waitForServer(baseUrl: string): Promise<void> {
  const deadline = Date.now() + 60_000;
  let lastError: unknown;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(new URL("/", baseUrl));
      if (response.ok) {
        return;
      }
      lastError = new Error(`server returned ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await delay(1_000);
  }

  throw new Error(`Timed out waiting for ${baseUrl}: ${String(lastError)}`);
}

async function withNextServer<T>(run: (baseUrl: string) => Promise<T>): Promise<T> {
  if (process.env.CITATION_SURFACE_BASE_URL) {
    return run(process.env.CITATION_SURFACE_BASE_URL);
  }

  const child = spawn("npm", ["run", "start", "--", "-p", PORT, "-H", "127.0.0.1"], {
    env: { ...process.env, PORT },
    stdio: ["ignore", "pipe", "pipe"],
  });

  const output: string[] = [];
  child.stdout.on("data", (chunk: Buffer) => output.push(chunk.toString("utf8")));
  child.stderr.on("data", (chunk: Buffer) => output.push(chunk.toString("utf8")));

  try {
    await waitForServer(LOCAL_URL);
    return await run(LOCAL_URL);
  } catch (error) {
    const tail = output.join("").split("\n").slice(-40).join("\n");
    throw new Error(`${String(error)}\n\nNext server output:\n${tail}`);
  } finally {
    child.kill("SIGTERM");
  }
}

function checkEmbedHeaders(headers: HeaderSnapshot): CheckResult[] {
  const csp = headers.csp ?? "";
  return [
    headers.xFrameOptions === null
      ? pass("embed x-frame-options", "No X-Frame-Options header on /embed/stat/bva-cost-per-tested-angle")
      : fail("embed x-frame-options", `Expected no X-Frame-Options header; received ${headers.xFrameOptions}`),
    !csp.includes("frame-ancestors 'none'")
      ? pass("embed frame-ancestors", "No blocking frame-ancestors directive on embed route")
      : fail("embed frame-ancestors", "Embed CSP still contains frame-ancestors 'none'"),
  ];
}

function checkNormalPageHeaders(headers: HeaderSnapshot): CheckResult[] {
  const csp = headers.csp ?? "";
  return [
    headers.xFrameOptions === "DENY"
      ? pass("page x-frame-options", "Normal page keeps X-Frame-Options: DENY")
      : fail("page x-frame-options", `Expected DENY; received ${headers.xFrameOptions ?? "<missing>"}`),
    csp.includes("frame-ancestors 'none'")
      ? pass("page frame-ancestors", "Normal page keeps frame-ancestors 'none'")
      : fail("page frame-ancestors", "Normal page CSP is missing frame-ancestors 'none'"),
  ];
}

function includesPath(content: string, path: string): boolean {
  return content.includes(`${SITE_URL}${path}`) || content.includes(path);
}

function checkPriorityUrls(
  paths: string[],
  surface: string,
  label: string,
  content: string,
): CheckResult[] {
  return paths.map((path) =>
    includesPath(content, path)
      ? pass(`${surface} includes ${path}`, `${label} exposes ${path}`)
      : fail(`${surface} includes ${path}`, `${label} is missing ${path}`),
  );
}

function checkExcludedUrls(
  paths: string[],
  surface: string,
  label: string,
  content: string,
): CheckResult[] {
  return paths.map((path) =>
    !includesPath(content, path)
      ? pass(`${surface} excludes ${path}`, `${label} intentionally omits ${path}`)
      : fail(`${surface} excludes ${path}`, `${label} unexpectedly exposes ${path}`),
  );
}

async function runChecks(baseUrl: string): Promise<CheckResult[]> {
  const [embedHeaders, pageHeaders, llmsText, sitemapXml] = await Promise.all([
    fetchHeaders(baseUrl, "/embed/stat/bva-cost-per-tested-angle"),
    fetchHeaders(baseUrl, "/data"),
    fetchText(baseUrl, "/llms.txt"),
    fetchText(baseUrl, "/sitemap.xml"),
  ]);

  return [
    ...checkEmbedHeaders(embedHeaders),
    ...checkNormalPageHeaders(pageHeaders),
    llmsText.startsWith("# Prestyj AI Citation Map")
      ? pass("llms reachable", "/llms.txt returned the expected citation map")
      : fail("llms reachable", "/llms.txt did not return the expected citation map heading"),
    ...checkPriorityUrls(LLMS_PRIORITY_URLS, "llms", "/llms.txt", llmsText),
    ...checkPriorityUrls(INDEXABLE_PRIORITY_URLS, "sitemap", "/sitemap.xml", sitemapXml),
    ...checkExcludedUrls(LLMS_ONLY_PRIORITY_URLS, "sitemap", "/sitemap.xml", sitemapXml),
  ];
}

async function main(): Promise<void> {
  const results = await withNextServer(runChecks);

  for (const result of results) {
    const marker = result.ok ? "PASS" : "FAIL";
    console.log(`${marker} ${result.label}: ${result.detail}`);
  }

  const failures = results.filter((result) => !result.ok);
  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
