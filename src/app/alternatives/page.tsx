import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAlternativesByType } from "@/lib/alternatives";

export const metadata: Metadata = {
  title: "Real Estate AI Alternatives | Compare Prestyj to Top Platforms",
  description:
    "Compare Prestyj to top real estate AI platforms, CRMs, and ISA services. Find the best alternative for your lead response and reactivation needs.",
  keywords: [
    "ylopo alternative",
    "structurely alternative",
    "CINC alternative",
    "human ISA alternative",
    "real estate AI comparison",
    "follow up boss AI",
    "real geeks AI",
  ],
  alternates: {
    canonical: "https://prestyj.com/alternatives",
  },
};

export default function AlternativesHubPage() {
  const directCompetitors = getAlternativesByType("direct-competitor");
  const integrationPartners = getAlternativesByType("integration-partner");

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
                Alternatives Hub
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Find Your Perfect
                <br />
                <span className="text-primary">AI Sales Agent Solution</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Honest comparisons to help you choose the right platform. Whether you&apos;re
                looking to switch or enhance your existing tools, we&apos;ll help you decide.
              </p>
            </div>
          </div>
        </section>

        {/* Direct Competitors */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                AI Platforms & ISA Alternatives
              </h2>
              <p className="text-muted-foreground">
                Looking to switch from another AI platform or replace your human ISA? See how
                Prestyj compares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {directCompetitors.map((alt) => (
                <Link key={alt.slug} href={`/alternatives/${alt.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                          Prestyj vs {alt.competitor.name}
                        </CardTitle>
                        <Badge variant="secondary">{alt.competitor.pricing}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {alt.competitor.description}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Compare now <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                CRM & Platform Integrations
              </h2>
              <p className="text-muted-foreground">
                Love your current CRM? Prestyj can enhance it with instant AI response and lead
                reactivation—no migration required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationPartners.map((alt) => (
                <Link key={alt.slug} href={`/alternatives/${alt.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                          Prestyj + {alt.competitor.name}
                        </CardTitle>
                        <Badge variant="outline">Integration</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {alt.competitor.description}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
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
                Whether you&apos;re switching platforms or adding to your stack, here&apos;s what
                sets us apart.
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
              Book a personalized demo to see how Prestyj handles lead response and reactivation.
              We&apos;ll show you exactly how it compares to your current setup.
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
