"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  DollarSign,
  Zap,
  Users,
  RefreshCw,
  Database,
  Handshake,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AlternativePageContent } from "@/lib/alternatives";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  DollarSign,
  Zap,
  Users,
  RefreshCw,
  Database,
  Handshake,
  Target,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Zap;
}

interface AlternativePageClientProps {
  alternative: AlternativePageContent;
}

export function AlternativePageClient({ alternative }: AlternativePageClientProps) {
  const isIntegration = alternative.type === "integration-partner";

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-sm text-muted-foreground">
          <Link href="/alternatives" className="hover:text-foreground transition-colors">
            Alternatives
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{alternative.competitor.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
                {alternative.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6"
            >
              {alternative.hero.headline}
              <br />
              <span className="text-primary">{alternative.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              {alternative.hero.subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      {alternative.industryStats && (
        <section className="py-12 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {alternative.industryStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {item.stat}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              {isIntegration ? "How They Work Together" : "Pricing Comparison"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isIntegration
                ? "Understanding what each platform brings to the table"
                : "Understanding the true cost of each platform"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Competitor Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{alternative.competitor.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold">
                    {alternative.comparison.competitorPricing.price}
                    {alternative.comparison.competitorPricing.period && (
                      <span className="text-lg font-normal text-muted-foreground">
                        {alternative.comparison.competitorPricing.period}
                      </span>
                    )}
                  </div>
                  {alternative.comparison.competitorPricing.note && (
                    <div className="text-muted-foreground font-medium">
                      {alternative.comparison.competitorPricing.note}
                    </div>
                  )}
                  <ul className="space-y-2 text-muted-foreground">
                    {alternative.comparison.competitorPricing.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                    {alternative.comparison.competitorPricing.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Prestyj Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Prestyj</CardTitle>
                    <Badge>{isIntegration ? "Add-On" : "Recommended"}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold">
                    {alternative.comparison.prestyjPricing.price}
                    {alternative.comparison.prestyjPricing.period && (
                      <span className="text-lg font-normal text-muted-foreground">
                        {alternative.comparison.prestyjPricing.period}
                      </span>
                    )}
                  </div>
                  {alternative.comparison.prestyjPricing.note && (
                    <div className="text-success font-medium">
                      {alternative.comparison.prestyjPricing.note}
                    </div>
                  )}
                  <ul className="space-y-2 text-muted-foreground">
                    {alternative.comparison.prestyjPricing.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how the platforms stack up side by side
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-primary">
                    Prestyj
                  </th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-muted-foreground">
                    {alternative.competitor.shortName || alternative.competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {alternative.comparison.features.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">{row.feature}</div>
                      {row.note && (
                        <div className="text-sm text-muted-foreground mt-1">{row.note}</div>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.prestyj === "boolean" ? (
                        row.prestyj ? (
                          <Check className="h-6 w-6 text-success mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground">{row.prestyj}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.competitor === "boolean" ? (
                        row.competitor ? (
                          <Check className="h-6 w-6 text-success mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.competitor}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              {isIntegration
                ? `Why Add Prestyj to ${alternative.competitor.name}`
                : `Why Agents Switch from ${alternative.competitor.name}`}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isIntegration
                ? "Key benefits of combining the platforms"
                : "Key reasons real estate professionals choose Prestyj"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alternative.whySwitch.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When Each Fits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* When Competitor Fits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">
                    When {alternative.competitor.name} Is Right
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {alternative.whenCompetitorFits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* When Prestyj Fits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-primary">
                <CardHeader>
                  <CardTitle className="text-xl">When Prestyj Is Right</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {alternative.whenPrestyjFits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
            Related Resources
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {alternative.relatedResources.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">{resource.title}</p>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-success/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              {alternative.cta.headline}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {alternative.cta.subheadline}
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href={alternative.cta.buttonHref}>
                {alternative.cta.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {alternative.cta.footnote && (
              <p className="text-sm text-muted-foreground mt-6">
                {alternative.cta.footnote}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
