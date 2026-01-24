import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogSource } from "@/lib/source";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: "Real Estate Lead Generation Blog | PRESTYJ",
  description:
    "Expert tips on speed-to-lead response, AI sales agents, lead qualification, and closing more real estate deals. Free strategies from PRESTYJ.",
  keywords: [
    "real estate blog",
    "lead generation tips",
    "speed to lead",
    "AI sales agents",
    "real estate marketing",
    "lead conversion strategies",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/blog`,
    title: "Real Estate Lead Generation Blog | PRESTYJ",
    description:
      "Expert tips on speed-to-lead response, AI sales agents, lead qualification, and closing more real estate deals.",
    siteName: "PRESTYJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Lead Generation Blog | PRESTYJ",
    description:
      "Expert tips on speed-to-lead response, AI sales agents, and closing more real estate deals.",
    creator: "@prestyj",
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  const posts = blogSource.getPages();

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  // JSON-LD for Blog listing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PRESTYJ Blog",
    description:
      "Expert tips on speed-to-lead response, AI sales agents, lead qualification, and closing more real estate deals.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "PRESTYJ",
      url: siteUrl,
    },
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.data.title,
      description: post.data.description,
      url: `${siteUrl}${post.url}`,
      datePublished: post.data.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              Resources
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Real Estate Lead Generation Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Speed-to-lead strategies, AI insights, and tactics to close more
              deals.
            </p>
          </div>

          {sortedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {sortedPosts.map((post) => (
                <Link key={post.url} href={post.url}>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      {post.data.date && (
                        <time
                          dateTime={post.data.date}
                          className="text-sm text-muted-foreground mb-1 block"
                        >
                          {new Date(post.data.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </time>
                      )}
                      <CardTitle className="font-heading text-foreground">
                        {post.data.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {post.data.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
