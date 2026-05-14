import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogSource } from "@/lib/source";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: "AI Lead Generation & Sales Automation Blog | Prestyj",
  description:
    "Expert tips on speed-to-lead response, AI sales agents, lead qualification, and closing more deals for service businesses. Free strategies from Prestyj.",
  keywords: [
    "lead generation blog",
    "AI sales agents",
    "speed to lead",
    "service business marketing",
    "lead conversion strategies",
    "sales automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/blog`,
    title: "AI Lead Generation & Sales Automation Blog | Prestyj",
    description:
      "Expert tips on speed-to-lead response, AI sales agents, lead qualification, and closing more deals for service businesses.",
    siteName: "PRESTYJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Generation & Sales Automation Blog | Prestyj",
    description:
      "Expert tips on speed-to-lead response, AI sales agents, and closing more deals for service businesses.",
    creator: "@prestyj_",
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
      "Expert tips on speed-to-lead response, AI sales agents, lead qualification, and closing more deals for service businesses.",
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
      <SafeJsonLd data={jsonLd} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              Resources
            </Badge>
            <h1 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              AI Sales & Lead Generation Blog
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Speed-to-lead strategies, AI insights, and tactics to close more deals.
            </p>
          </div>

          {sortedPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {sortedPosts.map((post) => (
                <Link key={post.url} href={post.url}>
                  <Card className="bg-card border-border hover:border-primary/50 overflow-hidden transition-colors">
                    {post.data.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.data.image}
                          alt={`${post.data.title} — Prestyj`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                    )}
                    <CardHeader>
                      {post.data.date && (
                        <time
                          dateTime={post.data.date}
                          className="text-muted-foreground mb-1 block text-sm"
                        >
                          {new Date(post.data.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      )}
                      <CardTitle className="font-heading text-foreground">
                        {post.data.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.data.description}</p>
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
