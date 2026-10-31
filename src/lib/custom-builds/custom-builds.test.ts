import { describe, expect, it, vi } from "vitest";

// The sitemap reads MDX through fumadocs; stub it so the test only exercises route priorities.
vi.mock("@/lib/source", () => ({ blogSource: { getPage: () => undefined } }));
vi.mock("@/lib/institutional/article-metadata", () => ({
  getArticleDates: () => ({ modified: undefined }),
}));

import sitemap from "@/app/sitemap";
import { referenceBuilds } from "@/lib/connectors/reference-builds";
import { connectorServices } from "@/lib/connectors/services";
import { customBuildJsonLd, customBuildMetadata } from "@/lib/custom-builds/metadata";
import {
  customBuildCtaHref,
  customBuildHubSlug,
  customBuildPath,
  customBuilds,
} from "@/lib/custom-builds/services";
import { buildControls, buildEngagementSteps, openSourceProof } from "@/lib/custom-builds/shared";
import { customBuildRoutes } from "@/lib/custom-builds/site-map";
import { institutionalIndexablePaths } from "@/lib/institutional/site-map";
import { siteConfig } from "@/lib/site-config";

const allCopy = JSON.stringify({
  customBuilds,
  buildControls,
  buildEngagementSteps,
  openSourceProof,
});

describe("custom AI builds lane", () => {
  it("publishes the six routes to the sitemap at priority 0.9", () => {
    expect(customBuildRoutes).toEqual([
      "/custom-ai-agents",
      "/ai-sales-agents",
      "/ai-marketing-agents",
      "/ai-operations-agents",
      "/enterprise-ai-automation",
      "/custom-software-development",
    ]);
    const entries = sitemap();
    for (const route of customBuildRoutes) {
      expect(institutionalIndexablePaths).toContain(route);
      const entry = entries.find((item) => item.url === `${siteConfig.url}${route}`);
      expect(entry?.priority).toBe(0.9);
    }
  });

  it("gives every page a unique title, description, and canonical", () => {
    const metas = customBuilds.map(customBuildMetadata);
    for (const key of ["title", "description"] as const) {
      expect(new Set(metas.map((m) => m[key])).size).toBe(customBuilds.length);
    }
    customBuilds.forEach((build, index) => {
      expect(metas[index]?.alternates?.canonical).toBe(
        `${siteConfig.url}${customBuildPath(build.slug)}`,
      );
    });
    expect(new Set(customBuilds.map((b) => b.title)).size).toBe(customBuilds.length);
  });

  it("emits Service, FAQPage, and BreadcrumbList JSON-LD", () => {
    for (const build of customBuilds) {
      const data = customBuildJsonLd(build);
      expect(data.map((item) => item["@type"])).toEqual(["Service", "FAQPage", "BreadcrumbList"]);
      expect(data[0]?.provider).toEqual({ "@id": siteConfig.organizationId });
      expect(build.faqs.length).toBeGreaterThanOrEqual(5);
      expect(build.faqs.length).toBeLessThanOrEqual(8);
    }
  });

  it("points the CTA at /book-demo with the service param", () => {
    for (const build of customBuilds) {
      expect(customBuildCtaHref(build.slug)).toBe(`/book-demo?service=${build.slug}`);
    }
  });

  it("cross-links to the hub, siblings, and real connector pages", () => {
    const slugs = new Set(customBuilds.map((b) => b.slug));
    const connectorSlugs = new Set(connectorServices.map((s) => s.slug));
    for (const build of customBuilds) {
      expect(build.related.length).toBeGreaterThanOrEqual(2);
      expect(build.related.length).toBeLessThanOrEqual(3);
      for (const slug of build.related) expect(slugs.has(slug) && slug !== build.slug).toBe(true);
      if (build.slug !== customBuildHubSlug) expect(build.related).toContain(customBuildHubSlug);
      for (const slug of build.connectors) expect(connectorSlugs.has(slug)).toBe(true);
    }
  });

  it("cites only real reference builds", () => {
    const names = new Set(referenceBuilds.map((b) => b.name));
    for (const build of customBuilds) {
      expect(build.proof.length).toBeGreaterThan(0);
      for (const name of build.proof) expect(names.has(name)).toBe(true);
    }
  });

  it("avoids prices, timelines, guarantees, and em dashes", () => {
    expect(allCopy).not.toContain("\u2014");
    expect(allCopy).not.toMatch(/\$\d|\b\d+\s*(days?|weeks?|months?)\b|guarantee/i);
  });
});
