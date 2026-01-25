// TODO: Replace all [bracketed placeholders] with real customer data

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  AlertTriangle,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Results & Case Studies - PRESTYJ",
  description:
    "Real results from real estate agents using PRESTYJ AI. See how top agents are improving response times and booking more appointments.",
};

// Placeholder case studies - replace with real customer data
const caseStudies = [
  {
    agentName: "[Agent Name]",
    location: "[City, State]",
    beforeMetric: "[Before metric]",
    afterMetric: "[After metric]",
    metricLabel: "[Metric type, e.g., Response Time]",
    quote: "[Add real testimonial here]",
    initials: "XX",
  },
  {
    agentName: "[Agent Name]",
    location: "[City, State]",
    beforeMetric: "[Before metric]",
    afterMetric: "[After metric]",
    metricLabel: "[Metric type, e.g., Appointments/Week]",
    quote: "[Add real testimonial here]",
    initials: "XX",
  },
  {
    agentName: "[Agent Name]",
    location: "[City, State]",
    beforeMetric: "[Before metric]",
    afterMetric: "[After metric]",
    metricLabel: "[Metric type, e.g., Lead Conversion Rate]",
    quote: "[Add real testimonial here]",
    initials: "XX",
  },
];

// Verified industry statistics with sources
const industryStats = [
  {
    stat: "4+ hours",
    description: "Average industry response time to new leads",
    source: "Industry research",
  },
  {
    stat: "78%",
    description: "Of buyers work with the first agent who responds",
    source: "NAR research",
  },
  {
    stat: "80%",
    description: "Of leads go cold due to slow follow-up",
    source: "Real estate industry data",
  },
];

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 border-primary/50 text-primary"
          >
            Case Studies
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Real Results from Real Agents
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how real estate professionals are transforming their lead
            response with PRESTYJ AI.
          </p>
        </section>

        {/* Key Metrics Section - PLACEHOLDERS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">[XX]s</p>
                <p className="text-lg font-semibold text-foreground mb-1">
                  Average Response Time
                </p>
                <p className="text-sm text-muted-foreground">
                  Update with your actual metric
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="p-4 rounded-full bg-success/10 w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
                <p className="text-4xl font-bold text-success mb-2">[X]x</p>
                <p className="text-lg font-semibold text-foreground mb-1">
                  More Appointments
                </p>
                <p className="text-sm text-muted-foreground">
                  Update with your actual metric
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="p-4 rounded-full bg-warning/10 w-fit mx-auto mb-4">
                  <Users className="w-8 h-8 text-warning" />
                </div>
                <p className="text-4xl font-bold text-warning mb-2">[XX]%</p>
                <p className="text-lg font-semibold text-foreground mb-1">
                  Lead Engagement Rate
                </p>
                <p className="text-sm text-muted-foreground">
                  Update with your actual metric
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Case Study Cards Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Agent Success Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real transformations from agents who switched to AI-powered lead
              response.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-card border-border flex flex-col h-full"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {study.initials}
                    </div>
                    <div>
                      <CardTitle className="font-heading text-foreground text-lg">
                        {study.agentName}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {study.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Before/After Metrics */}
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                      {study.metricLabel}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through">
                        {study.beforeMetric}
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-primary font-bold">
                        {study.afterMetric}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 flex items-start gap-2 mt-auto">
                    <Quote className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-foreground italic text-sm">
                      {study.quote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industry Comparison Section - Verified Stats */}
        <section className="py-16 mb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <Badge
                  variant="outline"
                  className="border-warning/50 text-warning"
                >
                  Industry Reality
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                The Cost of Slow Response
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These verified industry statistics show why speed-to-lead
                matters.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industryStats.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-5xl font-bold text-foreground mb-3">
                    {item.stat}
                  </p>
                  <p className="text-foreground font-medium mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Source: {item.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
            Learn More
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/compare/prestyj-vs-ylopo"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground mb-1">Prestyj vs Ylopo</p>
              <p className="text-sm text-muted-foreground">
                See how we compare to other AI platforms
              </p>
            </Link>
            <Link
              href="/compare/prestyj-vs-isa"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground mb-1">AI vs Human ISA</p>
              <p className="text-sm text-muted-foreground">
                Compare AI agents to traditional ISAs
              </p>
            </Link>
            <Link
              href="/blog/why-leads-go-cold"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground mb-1">Why 80% of Leads Go Cold</p>
              <p className="text-sm text-muted-foreground">
                The data behind lead response times
              </p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/10 via-background to-success/5 rounded-2xl p-8 sm:p-12 border border-border">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Become a Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join the agents who are winning more deals with instant lead
              response. See how PRESTYJ can transform your results.
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href="/book-demo">
                Book Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free demo. No credit card required.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
