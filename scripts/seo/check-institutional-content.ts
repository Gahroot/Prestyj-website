import { readFileSync, readdirSync, lstatSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { load, JSON_SCHEMA } from "js-yaml";
import { z } from "zod";
import { contentLedgerSchema } from "./institutional-ledger";
import { researchArticles } from "../../src/lib/institutional/research";
import {
  institutionalBlogSlugs,
  institutionalPublicPaths,
} from "../../src/lib/institutional/site-map";
import { getArticleDates } from "../../src/lib/institutional/article-metadata";

export function readBoundedText(file: string, maxBytes = 2_000_000): string {
  const stat = lstatSync(file);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.size > maxBytes)
    throw new Error(`Invalid or oversized file: ${file}`);
  return readFileSync(file, "utf8");
}
export function parseArticle(source: string): { metadata: Record<string, unknown>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(source);
  if (!match) throw new Error("Missing article frontmatter");
  return {
    metadata: z
      .record(z.string(), z.unknown())
      .parse(load(match[1] ?? "", { schema: JSON_SCHEMA })),
    body: match[2] ?? "",
  };
}
export type ContentCheck = {
  errors: string[];
  deliverables: number;
  registered: number;
  pendingReviews: number;
};

/** Read-only repository gate. Passing means structurally ready for review, not approved or live. */
export function checkInstitutionalContent(root = process.cwd()): ContentCheck {
  const errors: string[] = [];
  const ledger = contentLedgerSchema.parse(
    JSON.parse(readBoundedText(path.join(root, "data/seo/institutional-content-backlog.json"))),
  );
  const allowed = new Set(institutionalPublicPaths);
  const registered = new Set(institutionalBlogSlugs);
  if (registered.size !== researchArticles.length) errors.push("Registry contains duplicate slugs");
  const inspectLinks = (body: string, label: string): void => {
    for (const match of body.matchAll(/\]\((\/[^\s)]+)\)/g)) {
      const target = (match[1] ?? "").split("#")[0]?.split("?")[0] ?? "";
      if (!allowed.has(target)) errors.push(`${label}: unpublished or retired link ${target}`);
    }
  };
  for (const article of researchArticles) {
    try {
      const parsed = parseArticle(
        readBoundedText(path.join(root, "content/blog", `${article.slug}.mdx`)),
      );
      getArticleDates(parsed.metadata);
      inspectLinks(parsed.body, article.slug);
    } catch (error) {
      errors.push(`${article.slug}: ${error instanceof Error ? error.message : "invalid source"}`);
    }
  }
  for (const item of ledger.items) {
    try {
      const { metadata, body } = parseArticle(readBoundedText(path.join(root, item.artifactPath)));
      if (!item.artifactPath.endsWith(`/${item.slug}.mdx`))
        errors.push(`${item.id}: path/slug mismatch`);
      if (body.trim().split(/\s+/).length < 450) errors.push(`${item.id}: incomplete article`);
      if (!/## (?:Sources|Review and limitations)/.test(body))
        errors.push(`${item.id}: source/limitation note missing`);
      if (!/synthetic|fictional|illustrative/i.test(body))
        errors.push(`${item.id}: example provenance missing`);
      if (!/review/i.test(body)) errors.push(`${item.id}: review responsibilities missing`);
      inspectLinks(body, item.id);
      if (item.artifactPath.startsWith("content/drafts/")) {
        if (registered.has(item.slug)) errors.push(`${item.id}: unreleased draft is registered`);
        if ("date" in metadata || "updated" in metadata)
          errors.push(`${item.id}: draft has public date metadata`);
        if (metadata.status !== item.state || metadata.revised !== item.revisedOn)
          errors.push(`${item.id}: draft status/revision differs from ledger`);
        const requirements = z.array(z.string()).parse(metadata.review_required);
        if ([...requirements].sort().join() !== [...item.reviewRequirements].sort().join())
          errors.push(`${item.id}: review requirements differ`);
      } else {
        const dates = getArticleDates(metadata);
        if (!registered.has(item.slug)) errors.push(`${item.id}: public article not registered`);
        if (dates.modified !== item.revisedOn)
          errors.push(`${item.id}: revision differs from metadata`);
        if (
          item.action !== "expand" &&
          ["draft", "awaiting-review", "approved"].includes(item.state)
        )
          errors.push(`${item.id}: new content promoted before release preparation`);
      }
    } catch (error) {
      errors.push(`${item.id}: ${error instanceof Error ? error.message : "invalid artifact"}`);
    }
  }
  const collection = readBoundedText(path.join(root, "source.config.ts"));
  if (!collection.includes('dir: "content/blog"') || collection.includes('dir: "content/drafts'))
    errors.push("Draft collection must remain outside Fumadocs");
  for (const file of [
    "src/app/blog/page.tsx",
    "src/app/research/page.tsx",
    "src/app/feed/blog.xml/route.ts",
    "src/app/llms.txt/route.ts",
    "src/app/sitemap.ts",
  ]) {
    if (!readBoundedText(path.join(root, file)).includes("researchArticles"))
      errors.push(`${file}: discovery source differs from registry`);
  }
  for (const asset of [
    "workflow-evaluation-scorecard.csv",
    "workflow-evaluation-log.csv",
    "synthetic-workflow-evaluation.csv",
  ]) {
    if (!readBoundedText(path.join(root, "docs/seo/assets", asset)).includes(","))
      errors.push(`${asset}: invalid template`);
  }
  const draftFiles = readdirSync(path.join(root, "content/drafts/institutional")).filter((file) =>
    file.endsWith(".mdx"),
  );
  for (const file of draftFiles)
    if (!ledger.items.some((item) => item.artifactPath === `content/drafts/institutional/${file}`))
      errors.push(`Untracked draft ${file}`);
  return {
    errors,
    deliverables: ledger.items.length,
    registered: registered.size,
    pendingReviews: ledger.items.filter((item) => ["draft", "awaiting-review"].includes(item.state))
      .length,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const report = checkInstitutionalContent();
    console.log(JSON.stringify({ mode: "read-only; not approval or release", ...report }, null, 2));
    if (report.errors.length) process.exitCode = 1;
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Content validation failed");
    process.exitCode = 1;
  }
}
