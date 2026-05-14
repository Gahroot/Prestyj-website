import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAlternativesByType } from "@/lib/alternatives";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

export const metadata: Metadata = {
  title: "Prestyj Alternatives — AI Agents for Marketing & Sales",
  description:
    "Compare Prestyj to other AI sales agents, marketing automation tools, and lead-response platforms.",
  keywords: [
    "AI sales agent alternative",
    "AI marketing agent alternative",
    "lead response platform comparison",
    "marketing automation alternative",
    "AI agent comparison",
    "sales automation alternative",
  ],
  alternates: {
    canonical: "https://prestyj.com/alternatives",
  },
};

export default function AlternativesHubPage() {
  const directCompetitors = getAlternativesByType("direct-competitor");
  const integrationPartners = getAlternativesByType("integration-partner");
  const allAlternatives = [...directCompetitors, ...integrationPartners];
  const siteUrl = "https://prestyj.com";

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Alternatives", url: `${siteUrl}/alternatives` },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Prestyj Alternatives — AI Agents for Marketing & Sales",
    description:
      "Compare Prestyj to other AI sales agents, marketing automation tools, and lead-response platforms.",
    numberOfItems: allAlternatives.length,
    itemListElement: allAlternatives.map((alt, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Prestyj vs ${alt.competitor.name}`,
      url: `${siteUrl}/alternatives/${alt.slug}`,
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={itemListSchema} />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="from-primary/10 via-background to-success/5 absolute inset-0 bg-gradient-to-br" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="outline" className="border-primary/50 text-primary mb-6">
                Alternatives Hub
              </Badge>

              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
                Prestyj Alternatives —
                <br />
                <span className="text-primary">AI Agents for Marketing &amp; Sales</span>
              </h1>

              <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg sm:text-xl">
                Compare Prestyj to other AI sales agents, marketing automation tools, and
                lead-response platforms. Honest, side-by-side breakdowns to help you choose.
              </p>
            </div>
          </div>
        </section>

        {/* Direct Competitors */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                AI Platforms & Human Sales Rep Alternatives
              </h2>
              <p className="text-muted-foreground">
                Looking to switch from another AI platform or replace a human inside sales rep? See
                how Prestyj compares.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {directCompetitors.map((alt) => (
                <Link key={alt.slug} href={`/alternatives/${alt.slug}`}>
                  <Card className="hover:border-primary/50 h-full cursor-pointer transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Prestyj vs {alt.competitor.name}</CardTitle>
                        <Badge variant="secondary">{alt.competitor.pricing}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{alt.competitor.description}</p>
                      <div className="text-primary flex items-center font-medium">
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
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                CRM & Platform Integrations
              </h2>
              <p className="text-muted-foreground">
                Love your current CRM? Prestyj can enhance it with instant AI response and lead
                reactivation—no migration required.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {integrationPartners.map((alt) => (
                <Link key={alt.slug} href={`/alternatives/${alt.slug}`}>
                  <Card className="hover:border-primary/50 h-full cursor-pointer transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Prestyj + {alt.competitor.name}</CardTitle>
                        <Badge variant="outline">Integration</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{alt.competitor.description}</p>
                      <div className="text-primary flex items-center font-medium">
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
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                Why Teams Choose Prestyj
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Whether you&apos;re switching platforms or adding to your stack, here&apos;s what
                sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-foreground mb-2 font-medium">
                    Built for marketing &amp; sales
                  </p>
                  <p className="text-muted-foreground text-sm">
                    AI agents that capture, qualify, and follow up with leads across every channel
                    you already run.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-foreground mb-2 font-medium">Works with your stack</p>
                  <p className="text-muted-foreground text-sm">
                    Plug into your CRM, ad platforms, and inbox — no rip-and-replace, no long
                    migrations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-foreground mb-2 font-medium">Outcome-focused pricing</p>
                  <p className="text-muted-foreground text-sm">
                    Flat, predictable cost — no per-seat fees, no commission splits, no surprise
                    overages.
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
              Book a personalized demo to see how Prestyj handles lead response and reactivation.
              We&apos;ll show you exactly how it compares to your current setup.
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
