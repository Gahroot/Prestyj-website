import { writeFile } from "fs/promises";
import * as path from "path";
import { z } from "zod";
import type { ShippedItem, TaskExecutionResult } from "../types";
import {
  appendShippedItem,
  callProviderWithValidation,
  composeUserPrompt,
  ensureSlugUnique,
  ShipTaskInput,
  validateTitleDescription,
} from "./_shared";

/**
 * Blog post MDX schema: we validate the structured output the LLM returns
 * and then render the MDX ourselves to guarantee clean frontmatter. This
 * avoids LLM-flavored YAML quoting bugs.
 */
const BlogPostOutputSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().min(1),
  author: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string().min(1)).optional(),
  keywords: z.array(z.string().min(1)).optional(),
  image: z.string().optional(),
  body: z.string().min(1),
});

type BlogPostShape = z.infer<typeof BlogPostOutputSchema>;

interface BlogPayload {
  slug?: unknown;
  workingTitle?: unknown;
  targetKeyword?: unknown;
}

export async function writeBlogPost(
  input: ShipTaskInput
): Promise<TaskExecutionResult> {
  const {
    config,
    provider,
    model,
    systemPrompt,
    taskPrompt,
    payload,
    dedupContext,
    researchBrief,
  } = input;

  const blogPayload: BlogPayload = payload;
  const slug = String(blogPayload.slug ?? "").trim();
  if (!slug) {
    return {
      task: "blogPost",
      success: false,
      error: "payload.slug is required",
      costUSD: 0,
      latencyMs: 0,
    };
  }

  const dupErr = ensureSlugUnique(slug, dedupContext);
  if (dupErr) {
    return {
      task: "blogPost",
      success: false,
      error: dupErr,
      costUSD: 0,
      latencyMs: 0,
    };
  }

  const userPrompt = composeUserPrompt(
    taskPrompt,
    payload,
    dedupContext,
    researchBrief
  );

  const result = await callProviderWithValidation({
    provider,
    model,
    systemPrompt,
    userPrompt,
    schema: BlogPostOutputSchema,
    responseFormat: "json",
  });

  if (!result.ok) {
    return {
      task: "blogPost",
      success: false,
      error: result.error,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const content: BlogPostShape = result.data;

  const tdErr = validateTitleDescription(content.title, content.description);
  if (tdErr) {
    return {
      task: "blogPost",
      success: false,
      error: tdErr,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const body = content.body.trim();

  // Guard against LLM accidentally including H1 in body — H1 is rendered
  // from frontmatter title by Fumadocs.
  const bodyWithoutH1 = stripLeadingH1(body);

  const wordCount = countWords(bodyWithoutH1);
  if (wordCount < 1500) {
    return {
      task: "blogPost",
      success: false,
      error: `body word count ${wordCount} is below minimum 1500`,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  if (!/^##\s+/m.test(bodyWithoutH1)) {
    return {
      task: "blogPost",
      success: false,
      error: "body must contain at least one H2 section (lines starting with `## `)",
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  // Date: prefer what the model gave us, fall back to today if invalid/empty.
  const date = /^\d{4}-\d{2}-\d{2}$/.test(content.date)
    ? content.date
    : new Date().toISOString().slice(0, 10);

  const mdx = renderMdx({
    title: content.title,
    description: content.description,
    date,
    author: content.author,
    category: content.category,
    tags: content.tags,
    keywords: content.keywords,
    image: content.image,
    body: bodyWithoutH1,
  });

  const filePath = path.join(
    process.cwd(),
    config.baseDirs.blog,
    `${slug}.mdx`
  );
  await writeFile(filePath, mdx, "utf8");

  const shipped: ShippedItem = {
    slug,
    type: "blog-post",
    title: content.title,
    description: content.description,
    filePath,
    shippedAt: new Date().toISOString(),
    provider: provider.name,
    model,
    costUSD: result.totalCostUSD,
  };
  await appendShippedItem(config, shipped);

  return {
    task: "blogPost",
    success: true,
    shipped,
    costUSD: result.totalCostUSD,
    latencyMs: result.totalLatencyMs,
  };
}

function stripLeadingH1(body: string): string {
  // If the first non-empty line begins with "# ", drop it.
  const lines = body.split("\n");
  let idx = 0;
  while (idx < lines.length && lines[idx].trim() === "") idx++;
  if (idx < lines.length && /^#\s+/.test(lines[idx])) {
    return lines.slice(idx + 1).join("\n").replace(/^\s*\n+/, "");
  }
  return body;
}

function countWords(text: string): number {
  // Strip code fences and markdown tokens that don't count as words.
  const stripped = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/[#*_>\-\[\]()]/g, " ");
  const words = stripped.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

interface MdxInput {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  tags?: string[];
  keywords?: string[];
  image?: string;
  body: string;
}

function renderMdx(input: MdxInput): string {
  const fm: string[] = ["---"];
  fm.push(`title: ${yamlString(input.title)}`);
  fm.push(`description: ${yamlString(input.description)}`);
  fm.push(`date: ${yamlString(input.date)}`);
  if (input.author) fm.push(`author: ${yamlString(input.author)}`);
  if (input.category) fm.push(`category: ${yamlString(input.category)}`);
  if (input.tags && input.tags.length > 0) {
    fm.push("tags:");
    for (const t of input.tags) fm.push(`  - ${yamlString(t)}`);
  }
  if (input.keywords && input.keywords.length > 0) {
    fm.push("keywords:");
    for (const k of input.keywords) fm.push(`  - ${yamlString(k)}`);
  }
  if (input.image) fm.push(`image: ${yamlString(input.image)}`);
  fm.push("---");
  fm.push("");
  return `${fm.join("\n")}\n${input.body.trim()}\n`;
}

function yamlString(s: string): string {
  // Always double-quote for safety; escape backslashes and double quotes.
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
