import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogSource } from "@/lib/source";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  if (!page) {
    return {
      title: "Post Not Found - PRESTYJ",
    };
  }

  return {
    title: `${page.data.title} - PRESTYJ Blog`,
    description: page.data.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              {page.data.title}
            </h1>
            {page.data.description && (
              <p className="text-xl text-muted-foreground">
                {page.data.description}
              </p>
            )}
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary">
            <MDXContent />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
