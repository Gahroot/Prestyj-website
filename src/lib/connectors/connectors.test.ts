import { describe, expect, it } from "vitest";

import { connectorGuides } from "@/lib/connectors/guides";
import { connectorServices } from "@/lib/connectors/services";
import { connectorRoutes } from "@/lib/connectors/site-map";
import { institutionalIndexablePaths } from "@/lib/institutional/site-map";

const allCopy = JSON.stringify({ connectorServices, connectorGuides });

describe("connector offer pages", () => {
  it("targets each search phrase on exactly one service page", () => {
    const keywords = connectorServices.map((service) => service.primaryKeyword.toLowerCase());
    expect(new Set(keywords).size).toBe(keywords.length);
    expect(keywords).toEqual(
      expect.arrayContaining([
        "custom claude connectors",
        "done for you claude connectors",
        "custom mcp server for businesses",
        "custom chatgpt plugins for business",
      ]),
    );
  });

  it("keeps titles unique, brand-free, and within search result length", () => {
    const titles = [
      ...connectorServices.map((s) => s.metaTitle),
      ...connectorGuides.map((g) => g.metaTitle),
    ];
    expect(new Set(titles).size).toBe(titles.length);
    for (const title of titles) {
      expect(title).not.toContain("Prestyj");
      expect(`${title} | Prestyj`.length).toBeLessThanOrEqual(65);
    }
    for (const service of connectorServices) {
      expect(service.metaDescription.length).toBeLessThanOrEqual(200);
    }
  });

  it("links only to services and guides that exist", () => {
    const serviceSlugs = new Set(connectorServices.map((s) => s.slug));
    const guideSlugs = new Set(connectorGuides.map((g) => g.slug));
    for (const service of connectorServices) {
      for (const slug of service.related) expect(serviceSlugs.has(slug)).toBe(true);
      for (const slug of service.guides) expect(guideSlugs.has(slug)).toBe(true);
    }
    for (const guide of connectorGuides) {
      expect(connectorServices.some((service) => service.guides.includes(guide.slug))).toBe(true);
      expect(guide.sources.length).toBeGreaterThan(0);
    }
  });

  it("publishes every connector route to the sitemap and IndexNow list", () => {
    for (const route of connectorRoutes) expect(institutionalIndexablePaths).toContain(route);
  });

  it("uses no em dashes in interface copy", () => {
    expect(allCopy).not.toContain("\u2014");
  });
});
