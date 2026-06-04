#!/usr/bin/env npx tsx
/**
 * Assign named human authors to every blog post's frontmatter.
 *
 * Replaces the generic `author: "Prestyj Team"` byline (a weak E-E-A-T signal)
 * with a real, topically-matched author per post. The author is chosen by the
 * post's category (derived from its slug), mirroring the runtime mapping in
 * src/lib/blog/authors.ts so frontmatter, byline, and JSON-LD stay in sync.
 *
 * Run: npx tsx scripts/assign-blog-authors.ts [--dry-run]
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { categorizeSlug } from "../src/lib/blog/categories";
import { getAuthorForCategory } from "../src/lib/blog/authors";

const BLOG_DIR = join(process.cwd(), "content/blog");
const DRY_RUN = process.argv.includes("--dry-run");

async function main(): Promise<void> {
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".mdx"));
  let changed = 0;
  const tally = new Map<string, number>();

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const path = join(BLOG_DIR, file);
    const raw = await readFile(path, "utf-8");

    const fmMatch = /^---\n([\s\S]*?)\n---/.exec(raw);
    if (!fmMatch) {
      console.warn(`skip (no frontmatter): ${file}`);
      continue;
    }

    const category = categorizeSlug(slug);
    const author = getAuthorForCategory(category);
    tally.set(author.name, (tally.get(author.name) ?? 0) + 1);

    const frontmatter = fmMatch[1] ?? "";
    const authorLine = `author: "${author.name}"`;
    let nextFrontmatter: string;

    if (/^author:\s*.*$/m.test(frontmatter)) {
      nextFrontmatter = frontmatter.replace(/^author:\s*.*$/m, authorLine);
    } else {
      // Insert author right after the date line if present, else after description.
      if (/^date:\s*.*$/m.test(frontmatter)) {
        nextFrontmatter = frontmatter.replace(/^(date:\s*.*)$/m, `$1\n${authorLine}`);
      } else if (/^description:\s*.*$/m.test(frontmatter)) {
        nextFrontmatter = frontmatter.replace(/^(description:\s*.*)$/m, `$1\n${authorLine}`);
      } else {
        nextFrontmatter = `${frontmatter}\n${authorLine}`;
      }
    }

    if (nextFrontmatter === frontmatter) continue;

    const next = raw.replace(fmMatch[0], `---\n${nextFrontmatter}\n---`);
    if (next !== raw) {
      changed += 1;
      if (!DRY_RUN) await writeFile(path, next, "utf-8");
    }
  }

  console.log(`\n${DRY_RUN ? "[dry-run] would update" : "updated"} ${changed} files`);
  console.log("author distribution:");
  for (const [name, count] of [...tally.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${name}: ${count}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
