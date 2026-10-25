/** Pure parsers over raw MDX source. Used for FAQ schema and CTA placement. */

export type FaqEntry = { question: string; answer: string };

function stripFrontmatter(source: string): string {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}

/** Removes fenced code so headings inside code blocks are ignored. */
function withoutCode(source: string): string {
  return source.replace(/```[\s\S]*?```/g, "");
}

export function stripInlineMarkdown(text: string): string {
  return text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractH2Headings(source: string): readonly string[] {
  return withoutCode(stripFrontmatter(source))
    .split(/\r?\n/)
    .map((line) => /^##\s+(.+?)\s*#*\s*$/.exec(line)?.[1])
    .filter((heading): heading is string => Boolean(heading))
    .map(stripInlineMarkdown);
}

/**
 * Heading before which the inline CTA renders: the second H2 (right after the answer
 * section). Null if the article has fewer than two H2s.
 */
export function inlineCtaAnchorHeading(source: string): string | null {
  return extractH2Headings(source)[1] ?? null;
}

/** Q&A pairs from a `## Frequently asked questions` section with `###` questions. */
export function extractFaq(source: string): readonly FaqEntry[] {
  const lines = withoutCode(stripFrontmatter(source)).split(/\r?\n/);
  const start = lines.findIndex((line) => /^##\s+(frequently asked questions|faqs?)\b/i.test(line));
  if (start === -1) return [];
  const entries: FaqEntry[] = [];
  let question: string | null = null;
  let answer: string[] = [];
  const flush = () => {
    const text = stripInlineMarkdown(answer.join(" "));
    if (question && text) entries.push({ question, answer: text });
    answer = [];
  };
  for (const line of lines.slice(start + 1)) {
    if (/^##\s/.test(line)) break;
    const q = /^###\s+(.+?)\s*#*\s*$/.exec(line);
    if (q?.[1]) {
      flush();
      question = stripInlineMarkdown(q[1]);
      continue;
    }
    if (question && !/^\s*(\||<\/?[A-Z])/.test(line)) answer.push(line.replace(/^\s*[-*>]\s+/, ""));
  }
  flush();
  return entries;
}
