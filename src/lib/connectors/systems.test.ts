import { describe, expect, it } from "vitest";

import { connectorServices } from "@/lib/connectors/services";
import { connectorRoutes, connectorSystemRoutes } from "@/lib/connectors/site-map";
import { connectorSystems } from "@/lib/connectors/systems";
import { institutionalIndexablePaths } from "@/lib/institutional/site-map";

describe("connector system pages", () => {
  it("has unique slugs and titles", () => {
    const slugs = connectorSystems.map((s) => s.slug);
    const titles = [
      ...connectorSystems.map((s) => s.metaTitle),
      ...connectorServices.map((s) => s.metaTitle),
    ];
    const h1s = connectorSystems.map((s) => s.title);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(h1s).size).toBe(h1s.length);
  });

  it("keeps titles brand-free and within search result length", () => {
    for (const system of connectorSystems) {
      expect(system.metaTitle).not.toContain("Prestyj");
      expect(`${system.metaTitle} | Prestyj`.length).toBeLessThanOrEqual(65);
      expect(system.metaDescription.length).toBeLessThanOrEqual(200);
    }
  });

  it("cites at least one source and enough FAQs per system", () => {
    for (const system of connectorSystems) {
      expect(system.sources.length).toBeGreaterThan(0);
      for (const source of system.sources) expect(source.url).toMatch(/^https:\/\//);
      expect(system.faqs.length).toBeGreaterThanOrEqual(4);
      expect(system.faqs.length).toBeLessThanOrEqual(5);
    }
  });

  it("links only to service pages that exist", () => {
    const serviceSlugs = new Set(connectorServices.map((s) => s.slug));
    for (const system of connectorSystems) {
      expect(system.related.length).toBeGreaterThan(0);
      for (const slug of system.related) expect(serviceSlugs.has(slug)).toBe(true);
    }
  });

  it("publishes every system route to the sitemap and IndexNow list", () => {
    expect(connectorSystemRoutes).toHaveLength(connectorSystems.length);
    for (const route of connectorSystemRoutes) {
      expect(connectorRoutes).toContain(route);
      expect(institutionalIndexablePaths).toContain(route);
    }
  });

  it("uses no em dashes in copy", () => {
    expect(JSON.stringify(connectorSystems)).not.toContain("\u2014");
  });
});
