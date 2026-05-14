import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllBestForPages } from "@/lib/best-for";

export const metadata: Metadata = {
  title: "AI Agents for Marketing & Sales — by Industry",
  description:
    "See how Prestyj's AI agents work for your industry. Built for service businesses, real estate, professional services, and more.",
  keywords: [
    "AI agents for marketing",
    "AI agents for sales",
    "AI agents by industry",
    "AI for service businesses",
    "AI for real estate",
    "AI for professional services",
  ],
  alternates: {
    canonical: "https://prestyj.com/best-for",
  },
};

export default function BestForHubPage() {
  const bestForPages = getAllBestForPages();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="from-primary/10 via-background to-success/5 absolute inset-0 bg-gradient-to-br" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="outline" className="border-primary/50 text-primary mb-6">
                AI Agents by Industry
              </Badge>

              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
                AI Agents for Marketing & Sales
                <br />
                <span className="text-primary">Built for Your Industry</span>
              </h1>

              <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg sm:text-xl">
                See how Prestyj&apos;s AI agents work for your industry. Built for service
                businesses, real estate, professional services, and more — tuned to the way your
                buyers actually decide.
              </p>
            </div>
          </div>
        </section>

        {/* Best For Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                Solutions by Industry
              </h2>
              <p className="text-muted-foreground">
                Pick your industry to see how Prestyj&apos;s AI agents handle marketing and sales
                workflows for businesses like yours.
              </p>
            </div>

            {bestForPages.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bestForPages.map((page) => (
                  <Link key={page.slug} href={`/best-for/${page.slug}`}>
                    <Card className="hover:border-primary/50 h-full cursor-pointer transition-colors">
                      <CardHeader>
                        <CardTitle className="text-xl">{page.niche.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{page.niche.description}</p>
                        <div className="text-primary flex items-center font-medium">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground mb-6">
                  We&apos;re building out detailed guides for each niche. Check back soon!
                </p>
                <Button asChild>
                  <Link href="/book-demo">
                    Book a Demo to Discuss Your Needs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Why Prestyj Section */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                Why Teams Choose Prestyj
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Whatever your industry, Prestyj&apos;s AI agents plug into your stack and start
                producing pipeline — without a new headcount.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-primary mb-2 text-4xl font-bold">24/7</div>
                  <p className="text-foreground mb-1 font-medium">Always-On Coverage</p>
                  <p className="text-muted-foreground text-sm">
                    AI agents work nights, weekends, and holidays — every lead gets a response.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-primary mb-2 text-4xl font-bold">Days</div>
                  <p className="text-foreground mb-1 font-medium">Not Months to Launch</p>
                  <p className="text-muted-foreground text-sm">
                    Industry-tuned agents go live in days, not the quarter-long rollout of a hire.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-primary mb-2 text-4xl font-bold">1</div>
                  <p className="text-foreground mb-1 font-medium">Flat Monthly Fee</p>
                  <p className="text-muted-foreground text-sm">
                    No commission splits, no per-seat math — predictable cost as volume scales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-24">
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to See Prestyj in Action?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Book a personalized demo tailored to your industry. We&apos;ll show you exactly how
              Prestyj&apos;s AI agents handle marketing and sales for businesses like yours.
            </p>
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-muted-foreground mt-6 text-sm">
              No credit card required. See results in minutes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
