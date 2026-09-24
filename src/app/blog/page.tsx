import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { researchArticles } from "@/lib/institutional/research";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Field notes on AI agents for institutional real estate fund operations, diligence, investor reporting, portfolio intelligence, and brokerage operations.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage(): React.ReactElement {
  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Prestyj field notes",
          description: metadata.description,
          url: `${siteConfig.url}/blog`,
          publisher: { "@id": siteConfig.organizationId },
          blogPost: researchArticles.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            description: article.description,
            url: `${siteConfig.url}/blog/${article.slug}`,
          })),
        }}
      />
      <EditorialShell>
        <main id="main-content" className="editorial-inner">
          <section className="border-b">
            <div className="editorial-rail">
              <EditorialPageHeader title="The operating details behind institutional agents.">
                <p>
                  Source authority, exception queues, review ownership, data boundaries, and the
                  work product that comes out the other side.
                </p>
              </EditorialPageHeader>
            </div>
          </section>

          <section className="py-12 sm:py-16">
            <div className="editorial-rail">
              <ul className="border-t">
                {researchArticles.map((article) => (
                  <li key={article.slug} className="border-b">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-primary focus-visible:ring-ring grid gap-4 py-7 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:grid-cols-[10rem_1fr_auto]"
                    >
                      <span className="text-muted-foreground text-sm">{article.category}</span>
                      <span>
                        <strong className="block font-[Georgia] text-2xl font-normal">
                          {article.title}
                        </strong>
                        <span className="text-muted-foreground mt-2 block text-sm leading-6">
                          {article.description}
                        </span>
                      </span>
                      <ArrowRight aria-hidden="true" className="h-5 w-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </EditorialShell>
    </>
  );
}
