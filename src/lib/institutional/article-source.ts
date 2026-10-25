import { readFileSync } from "node:fs";
import { join } from "node:path";

/** Raw MDX for a registered article (server/build only). Empty string if missing. */
export function readArticleSource(slug: string): string {
  if (!/^[a-z0-9-]+$/.test(slug)) return "";
  try {
    return readFileSync(join(process.cwd(), "content", "blog", `${slug}.mdx`), "utf8");
  } catch {
    return "";
  }
}
