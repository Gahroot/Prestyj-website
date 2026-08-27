import { describe, expect, it } from "vitest";

import { audiences } from "@/lib/institutional/audiences";
import { capabilities } from "@/lib/institutional/capabilities";
import { proofRecords } from "@/lib/institutional/proof";
import { researchArticles } from "@/lib/institutional/research";
import {
  bannedCanonicalCopy,
  canonicalPublicRoutes,
  institutionalBlogSlugs,
} from "@/lib/institutional/site-map";
import { positioning } from "@/lib/positioning";
import { siteConfig } from "@/lib/site-config";

const canonicalContent = JSON.stringify({
  audiences,
  capabilities,
  proofRecords,
  researchArticles,
  positioning,
  siteConfig,
}).toLowerCase();

describe("institutional public site", () => {
  it("keeps canonical routes unique", () => {
    expect(new Set(canonicalPublicRoutes).size).toBe(canonicalPublicRoutes.length);
  });

  it("keeps capability and audience slugs unique", () => {
    expect(new Set(capabilities.map((item) => item.slug)).size).toBe(capabilities.length);
    expect(new Set(audiences.map((item) => item.slug)).size).toBe(audiences.length);
  });

  it("references only defined capabilities from audience pages", () => {
    const slugs = new Set(capabilities.map((item) => item.slug));
    for (const audience of audiences) {
      for (const slug of audience.capabilities) expect(slugs.has(slug)).toBe(true);
    }
  });

  it("publishes only allowlisted research articles", () => {
    const allowed = new Set<string>(institutionalBlogSlugs);
    for (const article of researchArticles) expect(allowed.has(article.slug)).toBe(true);
  });

  it("keeps legacy positioning out of canonical content", () => {
    for (const term of bannedCanonicalCopy) {
      expect(canonicalContent).not.toContain(term.toLowerCase());
    }
  });

  it("labels non-live proof honestly", () => {
    const references = proofRecords.filter((record) => record.stage === "Reference architecture");
    expect(references.length).toBeGreaterThan(0);
    expect(references.every((record) => record.delivered.length > 0)).toBe(true);
  });
});
