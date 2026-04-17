import { promises as fs } from "node:fs";
import path from "node:path";
import type { AppConfig, DedupContext, ShippedItem } from "../types";
import { ShippedManifestSchema } from "../types";

const BEST_FOR_EXCLUDED = new Set([
  "index",
  "types",
  "_geo-helpers",
  "noindex-list",
]);

async function readJSONSafe(filePath: string): Promise<unknown> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function listSlugsByExtension(
  dir: string,
  extension: string,
  excluded: Set<string> = new Set()
): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const slugs: string[] = [];
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      if (!entry.name.endsWith(extension)) continue;
      const slug = entry.name.slice(0, -extension.length);
      if (excluded.has(slug)) continue;
      if (slug.startsWith("_")) continue;
      slugs.push(slug);
    }
    return slugs;
  } catch {
    return [];
  }
}

async function loadShippedManifest(shippedFile: string): Promise<ShippedItem[]> {
  const parsed = await readJSONSafe(shippedFile);
  if (!parsed) return [];
  const result = ShippedManifestSchema.safeParse(parsed);
  if (!result.success) {
    return [];
  }
  return result.data.items;
}

function pickRecent(
  items: ShippedItem[],
  limit: number
): Array<{
  slug: string;
  title: string;
  description: string;
  shippedAt: string;
}> {
  return [...items]
    .sort((a, b) => b.shippedAt.localeCompare(a.shippedAt))
    .slice(0, limit)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      description: item.description,
      shippedAt: item.shippedAt,
    }));
}

export async function buildDedupContext(
  config: AppConfig
): Promise<DedupContext> {
  const cwd = process.cwd();
  const bestForDir = path.resolve(cwd, config.baseDirs.bestFor);
  const compareDir = path.resolve(cwd, config.baseDirs.compare);
  const blogDir = path.resolve(cwd, config.baseDirs.blog);
  const shippedFile = path.resolve(cwd, config.state.shippedFile);

  const [shippedItems, bestForSlugs, compareSlugs, blogSlugs] = await Promise.all(
    [
      loadShippedManifest(shippedFile),
      listSlugsByExtension(bestForDir, ".ts", BEST_FOR_EXCLUDED),
      listSlugsByExtension(compareDir, ".ts"),
      listSlugsByExtension(blogDir, ".mdx"),
    ]
  );

  const shippedSlugs = new Set<string>();
  for (const slug of bestForSlugs) shippedSlugs.add(slug);
  for (const slug of compareSlugs) shippedSlugs.add(slug);
  for (const slug of blogSlugs) shippedSlugs.add(slug);
  for (const item of shippedItems) shippedSlugs.add(item.slug);

  const recentlyShippedSummaries = pickRecent(shippedItems, 20);
  const shippedTitles = shippedItems.map((item) => item.title);

  return {
    shippedSlugs,
    shippedTitles,
    recentlyShippedSummaries,
  };
}

export function summarizeDedupContextForPrompt(
  context: DedupContext,
  options?: { recentLimit?: number }
): string {
  const limit = options?.recentLimit ?? 10;
  const recent = context.recentlyShippedSummaries.slice(0, limit);
  const lines: string[] = [];
  lines.push(`Existing slugs on site: ${context.shippedSlugs.size}`);
  if (recent.length > 0) {
    lines.push("");
    lines.push(`Last ${recent.length} shipped items:`);
    for (const item of recent) {
      lines.push(`- [${item.slug}] ${item.title}`);
    }
  }
  return lines.join("\n");
}
