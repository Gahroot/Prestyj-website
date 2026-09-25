import { promises as fs } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { contentLedgerSchema } from "../../seo/institutional-ledger";
import { institutionalPublicPaths } from "../../../src/lib/institutional/site-map";

export const DRAFT_DIRECTORY = "scripts/seo-bot/output/drafts";
export const draftSlugSchema = z
  .string()
  .min(3)
  .max(120)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const text = z
  .string()
  .max(100_000)
  .refine(
    (value) => !/[<>{}\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value),
    "Only inert Markdown text is accepted",
  );
export const generatedDraftSchema = z
  .object({
    slug: draftSlugSchema,
    frontmatter: z
      .object({
        title: text.pipe(z.string().min(10).max(100)),
        description: text.pipe(z.string().min(30).max(240)),
        category: text.optional(),
        keywords: z.array(text).max(12).optional(),
      })
      .strict(),
    body: text
      .refine((value) => value.trim().split(/\s+/).length >= 600, "Draft needs at least 600 words")
      .refine((value) => !/^\s*(?:---|import\s|export\s)/m.test(value), "No frontmatter or modules")
      .refine(
        (value) => !/!\[|\]\[|^\s*\[[^\]]+\]:/m.test(value),
        "No embedded assets or reference links",
      ),
    internalLinks: z.array(z.string()).max(30),
    faqs: z
      .array(z.object({ question: text, answer: text }).strict())
      .max(6)
      .default([]),
  })
  .strict();
export type GeneratedDraft = z.infer<typeof generatedDraftSchema>;
export type DraftRecord = {
  slug: string;
  filePath: string;
  draftedAt: string;
  status: "awaiting-review";
};
const stampSchema = z
  .object({
    slug: draftSlugSchema,
    draftedAt: z.string().datetime(),
    status: z.literal("awaiting-review"),
  })
  .strict();

/** Reject symlinked output components before any write, including the final directory. */
export async function ensureDraftDirectory(root: string): Promise<string> {
  let current = await fs.realpath(root);
  for (const part of DRAFT_DIRECTORY.split("/")) {
    current = path.join(current, part);
    try {
      await fs.mkdir(current);
    } catch (error) {
      if (!(error instanceof Error && "code" in error && error.code === "EEXIST")) throw error;
    }
    const stat = await fs.lstat(current);
    if (stat.isSymbolicLink() || !stat.isDirectory())
      throw new Error("Draft output must be a real directory");
  }
  return current;
}

export function validateDraftLinks(draft: GeneratedDraft): void {
  const allowed = new Set<string>(institutionalPublicPaths);
  const links = [
    ...draft.internalLinks,
    ...Array.from(draft.body.matchAll(/\]\(([^\s)]+)\)/g), (match) => match[1] ?? ""),
  ];
  for (const link of links) {
    if (link.startsWith("/") && allowed.has(link)) continue;
    if (/^https:\/\//.test(link)) {
      const url = new URL(link);
      if (!url.username && !url.password && url.protocol === "https:" && !/[\s\\]/.test(link)) {
        if (!["prestyj.com", "www.prestyj.com"].includes(url.hostname)) continue;
        if (allowed.has(url.pathname) && !url.search && !url.hash) continue;
      }
    }
    throw new Error("Draft contains an unapproved link");
  }
}

export async function storeDraft(args: {
  root: string;
  draft: GeneratedDraft;
  now: Date;
  dailyCap: number;
  weeklyCap: number;
}): Promise<DraftRecord> {
  const draft = generatedDraftSchema.parse(args.draft);
  validateDraftLinks(draft);
  const ledger = contentLedgerSchema.parse(
    JSON.parse(
      await fs.readFile(
        path.join(args.root, "data/seo/institutional-content-backlog.json"),
        "utf8",
      ),
    ),
  );
  if (
    ledger.items.some((item) => item.slug === draft.slug) ||
    institutionalPublicPaths.includes(`/blog/${draft.slug}`)
  )
    throw new Error("Slug is already prepared or published");
  await rejectExistingArticle(args.root, draft.slug);
  const directory = await ensureDraftDirectory(args.root);
  const lock = path.join(directory, ".draft-lock");
  await fs.mkdir(lock); // Exclusive; concurrent writers fail closed. Never remove another writer's lock.
  try {
    const now = args.now.toISOString();
    await checkDraftCapacity(args);
    const stamp = stampSchema.parse({
      slug: draft.slug,
      draftedAt: now,
      status: "awaiting-review",
    });
    const filePath = `${DRAFT_DIRECTORY}/${draft.slug}.md`;
    const faq = draft.faqs.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n");
    const content = `<!-- draft-record: ${JSON.stringify(stamp)} -->\n# ${draft.frontmatter.title}\n\nUNRELEASED DRAFT. Human and subject-matter review pending. No publication date.\n\n${draft.frontmatter.description}\n\n${draft.body}\n${faq ? `\n## Questions\n\n${faq}\n` : ""}`;
    await fs.writeFile(path.join(directory, `${draft.slug}.md`), content, {
      flag: "wx",
      mode: 0o600,
    });
    return { ...stamp, filePath };
  } finally {
    await fs.rmdir(lock); // Only the empty lock created by this call, never drafts or user files.
  }
}

export async function rejectExistingArticle(root: string, slug: string): Promise<void> {
  draftSlugSchema.parse(slug);
  try {
    await fs.lstat(path.join(root, "content/blog", `${slug}.mdx`));
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return;
    throw error;
  }
  throw new Error("Article source already exists, including archived content");
}

export async function checkDraftCapacity(args: {
  root: string;
  now: Date;
  dailyCap: number;
  weeklyCap: number;
}): Promise<void> {
  const directory = path.join(args.root, DRAFT_DIRECTORY);
  const now = args.now.toISOString();
  const records = [];
  let names: string[];
  try {
    names = await fs.readdir(directory);
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") names = [];
    else throw error;
  }
  for (const entry of names.filter((name) => name.endsWith(".md")).sort()) {
    const file = path.join(directory, entry);
    const stat = await fs.lstat(file);
    if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 150_000)
      throw new Error("Invalid existing draft file");
    const first = (await fs.readFile(file, "utf8")).split("\n")[0] ?? "";
    records.push(
      stampSchema.parse(JSON.parse(first.replace(/^<!-- draft-record: /, "").replace(/ -->$/, ""))),
    );
  }
  if (records.some((record) => record.draftedAt > now))
    throw new Error("Draft clock precedes existing records");
  const weekStart = new Date(args.now.getTime() - 7 * 86_400_000).toISOString();
  if (
    records.filter((record) => record.draftedAt >= weekStart).length >= Math.min(2, args.weeklyCap)
  )
    throw new Error("Two-draft weekly cap reached");
  if (
    records.filter((record) => record.draftedAt.slice(0, 10) === now.slice(0, 10)).length >=
    Math.min(1, args.dailyCap)
  )
    throw new Error("Daily draft cap reached");
}
