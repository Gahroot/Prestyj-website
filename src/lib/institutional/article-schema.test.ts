import { describe, expect, it } from "vitest";

import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/institutional/article-schema";

const site = {
  url: "https://prestyj.com",
  organizationId: "https://prestyj.com/#organization",
  ogImage: "https://prestyj.com/og.png",
};

describe("article schema builders", () => {
  it("builds BlogPosting with frontmatter dates and organization publisher", () => {
    const schema = buildBlogPostingSchema({
      site,
      slug: "x",
      title: "T",
      description: undefined,
      published: "2026-08-27",
      modified: "2026-09-26",
      authorName: "Nolan Grout",
      keywords: ["a", "b"],
      section: "Fund operations",
    });
    expect(schema).toMatchObject({
      "@type": "BlogPosting",
      headline: "T",
      datePublished: "2026-08-27",
      dateModified: "2026-09-26",
      publisher: { "@id": site.organizationId },
      author: { "@type": "Person", name: "Nolan Grout" },
      mainEntityOfPage: { "@id": "https://prestyj.com/blog/x" },
      keywords: "a, b",
      articleSection: "Fund operations",
    });
    expect(schema).not.toHaveProperty("description");
  });

  it("builds a positioned BreadcrumbList", () => {
    const schema = buildBreadcrumbSchema(site.url, [
      { name: "Home", path: "/" },
      { name: "Field notes", path: "/blog" },
    ]);
    expect(schema.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: "https://prestyj.com" },
      { "@type": "ListItem", position: 2, name: "Field notes", item: "https://prestyj.com/blog" },
    ]);
  });

  it("builds FAQPage only when entries exist", () => {
    expect(buildFaqSchema([])).toBeNull();
    expect(buildFaqSchema([{ question: "Q?", answer: "A." }])).toMatchObject({
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Q?", acceptedAnswer: { "@type": "Answer", text: "A." } },
      ],
    });
  });
});
