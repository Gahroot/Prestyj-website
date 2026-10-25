import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { LEDGER_FILE, RESEARCH_FILE, articleFile } from "./site";
import type { DraftMeta } from "./write";

/** Records every file an item touches so a failing item can be fully undone. */
export class FileTransaction {
  private readonly originals = new Map<string, string | null>();

  write(file: string, content: string): void {
    if (!this.originals.has(file))
      this.originals.set(file, existsSync(file) ? readFileSync(file, "utf8") : null);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, content);
  }

  files(): string[] {
    return [...this.originals.keys()].sort();
  }

  rollback(): void {
    for (const [file, original] of this.originals) {
      if (original === null) {
        if (existsSync(file)) unlinkSync(file);
      } else writeFileSync(file, original);
    }
    this.originals.clear();
  }
}

const q = (value: string): string => JSON.stringify(value);

export function registryEntrySource(meta: DraftMeta): string {
  return `  {
    slug: ${q(meta.slug)},
    capabilities: [${meta.capabilities.map(q).join(", ")}],
    topics: [${meta.topics.map(q).join(", ")}],
    category: ${q(meta.category)},
    title: ${q(meta.registryTitle)},
    description:
      ${q(meta.registryDescription)},
  },
`;
}

/** Appends a new entry to `researchArticles` in src/lib/institutional/research.ts. */
export function registerArticle(root: string, meta: DraftMeta, tx: FileTransaction): string {
  const file = path.join(root, RESEARCH_FILE);
  const source = readFileSync(file, "utf8");
  const marker = "\n] as const;";
  const at = source.indexOf(marker);
  if (at < 0) throw new Error("researchArticles terminator not found");
  if (source.includes(`slug: ${q(meta.slug)}`))
    throw new Error(`slug already registered: ${meta.slug}`);
  tx.write(file, `${source.slice(0, at + 1)}${registryEntrySource(meta)}${source.slice(at + 1)}`);
  return file;
}

export function writeArticle(root: string, slug: string, mdx: string, tx: FileTransaction): string {
  const file = articleFile(root, slug);
  tx.write(file, mdx);
  return file;
}

/** Keeps the human review ledger consistent when the engine revises a tracked article. */
export function syncLedgerRevision(
  root: string,
  slug: string,
  date: string,
  tx: FileTransaction,
): void {
  const file = path.join(root, LEDGER_FILE);
  if (!existsSync(file)) return;
  const source = readFileSync(file, "utf8");
  const ledger = JSON.parse(source) as { items?: { slug?: string; artifactPath?: string }[] };
  if (!ledger.items?.some((e) => e.slug === slug && e.artifactPath === `content/blog/${slug}.mdx`))
    return;
  // Targeted text edit keeps the file's existing (prettier) formatting.
  const start = source.indexOf(`"slug": ${q(slug)}`);
  const field = /"revisedOn": (?:"\d{4}-\d{2}-\d{2}"|null)/g;
  field.lastIndex = start;
  const match = field.exec(source);
  if (start < 0 || !match) return;
  tx.write(
    file,
    `${source.slice(0, match.index)}"revisedOn": ${q(date)}${source.slice(match.index + match[0].length)}`,
  );
}
