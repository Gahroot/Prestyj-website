export const SLOP_PHRASES: readonly string[] = [
  "unlock the power of",
  "in today's competitive landscape",
  "in today's fast-paced world",
  "leverage cutting-edge",
  "leverage the power of",
  "revolutionize",
  "game-changer",
  "game-changing",
  "seamless integration",
  "synergy",
  "best-in-class",
  "world-class",
  "robust solution",
  "comprehensive solution",
  "transform your business",
  "elevate your",
  "delve into",
  "in conclusion",
  "in summary",
  "as we navigate",
  "ever-evolving",
  "rapidly evolving",
  "tapestry",
  "embark on a journey",
  "at the forefront",
  "paradigm shift",
];

export type SlopSeverity = "low" | "medium" | "high";

export interface SlopDetectionResult {
  clean: boolean;
  hits: string[];
  severity: SlopSeverity;
}

function escapeRegex(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const compiledPatterns: Array<{ phrase: string; regex: RegExp }> =
  SLOP_PHRASES.map((phrase) => ({
    phrase,
    regex: new RegExp(escapeRegex(phrase), "gi"),
  }));

function scoreSeverity(count: number): SlopSeverity {
  if (count <= 2) return "low";
  if (count <= 4) return "medium";
  return "high";
}

export function detectSlop(text: string): SlopDetectionResult {
  if (typeof text !== "string" || text.length === 0) {
    return { clean: true, hits: [], severity: "low" };
  }

  const hits: string[] = [];
  for (const { phrase, regex } of compiledPatterns) {
    regex.lastIndex = 0;
    if (regex.test(text)) {
      hits.push(phrase);
    }
  }

  if (hits.length === 0) {
    return { clean: true, hits: [], severity: "low" };
  }

  return {
    clean: false,
    hits,
    severity: scoreSeverity(hits.length),
  };
}
