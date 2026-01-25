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
  title: "Best AI Sales Agent for Your Niche | Prestyj",
  description:
    "Discover why Prestyj is the best AI sales agent for your specific real estate niche. Find tailored solutions for solo agents, teams, luxury markets, and more.",
  keywords: [
    "best AI for real estate agents",
    "AI sales agent for realtors",
    "real estate AI by niche",
    "AI for solo agents",
    "AI for real estate teams",
    "luxury real estate AI",
  ],
};

export default function BestForHubPage() {
  const bestForPages = getAllBestForPages();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
                Best For Your Niche
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Find the Perfect AI Solution
                <br />
                <span className="text-primary">For Your Business</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Every real estate professional has unique needs. Explore how Prestyj adapts to your
                specific niche, whether you&apos;re a solo agent, leading a team, or specializing in
                luxury properties.
              </p>
            </div>
          </div>
        </section>

        {/* Best For Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Solutions by Niche
              </h2>
              <p className="text-muted-foreground">
                Select your niche to see how Prestyj can help you succeed with AI-powered lead
                management tailored to your specific needs.
              </p>
            </div>

            {bestForPages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bestForPages.map((page) => (
                  <Link key={page.slug} href={`/best-for/${page.slug}`}>
                    <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-xl">{page.niche.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{page.niche.description}</p>
                        <div className="flex items-center text-primary font-medium">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Why Agents Choose Prestyj
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Regardless of your niche, Prestyj delivers consistent results that help you close
                more deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">47 sec</div>
                  <p className="font-medium text-foreground mb-1">Average Response Time</p>
                  <p className="text-sm text-muted-foreground">
                    AI responds to every lead instantly, 24/7/365
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">23%</div>
                  <p className="font-medium text-foreground mb-1">Dead Leads Reactivated</p>
                  <p className="text-sm text-muted-foreground">
                    Revive the leads you already paid for
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0%</div>
                  <p className="font-medium text-foreground mb-1">Commission Split</p>
                  <p className="text-sm text-muted-foreground">
                    Keep 100% of your commission, unlike human ISAs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to See Prestyj in Action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a personalized demo tailored to your specific niche. We&apos;ll show you exactly
              how Prestyj can transform your lead management and help you close more deals.
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href="/book-demo">
                Book Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. See results in minutes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
