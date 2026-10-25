import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { load, JSON_SCHEMA } from "js-yaml";
import { z } from "zod";
import { canonicalPublicRoutes } from "../../../src/lib/institutional/site-map";
import { capabilities } from "../../../src/lib/institutional/capabilities";

export const RESEARCH_FILE = "src/lib/institutional/research.ts";
export const LEDGER_FILE = "data/seo/institutional-content-backlog.json";
export const PROMPTS_FILE = "data/seo/institutional-buyer-prompts.json";

export const CAPABILITY_SLUGS: readonly string[] = capabilities.map((c) => c.slug);
export const TOPIC_VALUES = [
  "workflow-selection",
  "integration",
  "review-controls",
  "exceptions",
  "source-lineage",
  "access-boundaries",
  "handoff",
] as const;

export type RegistryEntry = { slug: string; title: string; category: string };

/** Reads the registry from the file under `root` (not the imported module, which may be stale). */
export function readRegistry(root: string): RegistryEntry[] {
  const source = readFileSync(path.join(root, RESEARCH_FILE), "utf8");
  const entries: RegistryEntry[] = [];
  for (const block of source.split(/\n {2}\{\n/).slice(1)) {
    const slug = /slug: "([^"]+)"/.exec(block)?.[1];
    if (!slug) continue;
    entries.push({
      slug,
      title: /title:\s*"((?:[^"\\]|\\.)*)"/.exec(block)?.[1] ?? slug,
      category: /category:\s*"((?:[^"\\]|\\.)*)"/.exec(block)?.[1] ?? "",
    });
  }
  return entries;
}

export function allowedInternalPaths(root: string): Set<string> {
  return new Set<string>([
    ...canonicalPublicRoutes,
    ...readRegistry(root).map((entry) => `/blog/${entry.slug}`),
  ]);
}

export type ParsedArticle = { metadata: Record<string, unknown>; body: string };

export function parseMdx(source: string): ParsedArticle {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(source);
  if (!match) throw new Error("Missing article frontmatter");
  return {
    metadata: z
      .record(z.string(), z.unknown())
      .parse(load(match[1] ?? "", { schema: JSON_SCHEMA })),
    body: match[2] ?? "",
  };
}

export function articleFile(root: string, slug: string): string {
  return path.join(root, "content/blog", `${slug}.mdx`);
}

export function readArticle(root: string, slug: string): ParsedArticle | null {
  const file = articleFile(root, slug);
  return existsSync(file) ? parseMdx(readFileSync(file, "utf8")) : null;
}

/** Slugs reserved by the human review ledger (drafts may not be registered by the engine). */
export function ledgerSlugs(root: string): { slug: string; topic: string }[] {
  const file = path.join(root, LEDGER_FILE);
  if (!existsSync(file)) return [];
  const parsed = z
    .object({ items: z.array(z.object({ slug: z.string(), topic: z.string() }).loose()) })
    .loose()
    .parse(JSON.parse(readFileSync(file, "utf8")));
  return parsed.items.map(({ slug, topic }) => ({ slug, topic }));
}

export function buyerPrompts(root: string): { id: string; text: string }[] {
  const file = path.join(root, PROMPTS_FILE);
  if (!existsSync(file)) return [];
  return z
    .object({ prompts: z.array(z.object({ id: z.string(), text: z.string() })) })
    .loose()
    .parse(JSON.parse(readFileSync(file, "utf8"))).prompts;
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
