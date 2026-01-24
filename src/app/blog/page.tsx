import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogSource } from "@/lib/source";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog - PRESTYJ",
  description: "Tips, strategies, and insights for real estate agents on lead response, AI automation, and closing more deals.",
};

export default function BlogPage() {
  const posts = blogSource.getPages();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Resources
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              The PRESTYJ Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Speed-to-lead strategies, AI insights, and tactics to close more deals.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Link key={post.url} href={post.url}>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
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
