/**
 * Content half of the growth engine.
 *   npm run growth:content -- cycle [--dry-run] [--fake-llm]
 *   npm run growth:content -- research
 *   npm run growth:content -- check <slug>
 */
import { config as loadEnv } from "dotenv";
import { loadContentConfig } from "./config";
import { allowedInternalPaths, readArticle } from "./site";
import { runContentGates } from "./gates";
import { runContentCycle } from "./index";
import { createAnthropicLlm, MeteredLlm } from "./llm";
import { mergeOpportunities, researchTopics, seedFromPrompts } from "./research-queue";
import { readOpportunities, writeOpportunities } from "./store";
import { createFakeLlm, fakeFetcher, passingRepoGates } from "./fake";

loadEnv({ path: ".env.local", quiet: true });
loadEnv({ quiet: true });

async function main(): Promise<number> {
  const [command, ...rest] = process.argv.slice(2);
  const root = process.cwd();
  const flags = new Set(rest.filter((arg) => arg.startsWith("--")));
  if (command === "cycle") {
    const fake = flags.has("--fake-llm");
    const result = await runContentCycle(
      { root, dryRun: flags.has("--dry-run") || fake },
      {
        onProgress: (line) => console.log(`[content] ${line}`),
        ...(fake
          ? { llm: createFakeLlm(), fetcher: fakeFetcher, repoGates: passingRepoGates }
          : {}),
      },
    );
    console.log(JSON.stringify(result, null, 2));
    return 0;
  }
  if (command === "research") {
    const config = loadContentConfig();
    const key = process.env.ANTHROPIC_API_KEY?.trim();
    if (!key) {
      console.error("ANTHROPIC_API_KEY is not set");
      return 1;
    }
    const now = new Date();
    const llm = new MeteredLlm(createAnthropicLlm(key, config), config);
    const research = await researchTopics(root, llm, config, now);
    const merged = mergeOpportunities(
      mergeOpportunities(readOpportunities(root), seedFromPrompts(root, config, now)),
      research.items,
    );
    writeOpportunities(root, merged);
    console.log(
      JSON.stringify(
        { added: research.items.map((i) => i.queries[0]), costUsd: research.costUsd },
        null,
        2,
      ),
    );
    return 0;
  }
  if (command === "check" && rest[0]) {
    const slug = rest[0];
    const article = readArticle(root, slug);
    if (!article) {
      console.error(`content/blog/${slug}.mdx not found`);
      return 1;
    }
    const gates = runContentGates(
      {
        root,
        slug,
        title: String(article.metadata.title ?? ""),
        description: String(article.metadata.description ?? ""),
        body: article.body,
        mode: "refresh",
        allowed: allowedInternalPaths(root),
        previous: { body: article.body, title: String(article.metadata.title ?? "") },
      },
      loadContentConfig(),
    );
    console.log(JSON.stringify(gates, null, 2));
    return gates.every((gate) => gate.passed) ? 0 : 1;
  }
  console.error("Usage: growth:content cycle [--dry-run] [--fake-llm] | research | check <slug>");
  return 1;
}

main().then(
  (code) => {
    process.exitCode = code;
  },
  (error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  },
);
