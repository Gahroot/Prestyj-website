import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Field notes</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
              The operating details behind institutional agents.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              Source authority, exception queues, review ownership, data boundaries, and the work
              product that comes out the other side.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="border-t">
              {researchArticles.map((article) => (
                <li key={article.slug} className="border-b">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-primary focus-visible:ring-ring grid gap-4 py-7 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:grid-cols-[10rem_1fr_auto]"
                  >
                    <span className="text-muted-foreground text-sm">{article.category}</span>
                    <span>
                      <strong className="font-heading block text-xl">{article.title}</strong>
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
      <Footer />
    </>
  );
}
