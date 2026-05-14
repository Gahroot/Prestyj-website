"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AlternativePageContent } from "@/lib/alternatives";
import { getIconSafe } from "@/lib/content-factory/constants/icons";

interface AlternativePageClientProps {
  alternative: AlternativePageContent;
}

export function AlternativePageClient({ alternative }: AlternativePageClientProps) {
  const isIntegration = alternative.type === "integration-partner";

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="text-muted-foreground flex text-sm">
          <Link href="/alternatives" className="hover:text-foreground transition-colors">
            Alternatives
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{alternative.competitor.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="from-primary/10 via-background to-success/5 absolute inset-0 bg-gradient-to-br" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="border-primary/50 text-primary mb-6">
                {alternative.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl"
            >
              {alternative.hero.headline}
              <br />
              <span className="text-primary">{alternative.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg sm:text-xl"
            >
              {alternative.hero.subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      {alternative.industryStats && (
        <section className="border-border border-y py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {alternative.industryStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-primary mb-2 text-3xl font-bold md:text-4xl">
                    {item.stat}
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              {isIntegration ? "How They Work Together" : "Pricing Comparison"}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {isIntegration
                ? "Understanding what each platform brings to the table"
                : "Understanding the true cost of each platform"}
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
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
                      <span className="text-muted-foreground text-lg font-normal">
                        {alternative.comparison.competitorPricing.period}
                      </span>
                    )}
                  </div>
                  {alternative.comparison.competitorPricing.note && (
                    <div className="text-muted-foreground font-medium">
                      {alternative.comparison.competitorPricing.note}
                    </div>
                  )}
                  <ul className="text-muted-foreground space-y-2">
                    {alternative.comparison.competitorPricing.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="text-success mt-0.5 h-5 w-5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                    {(alternative.comparison.competitorPricing.cons ?? []).map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
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
              <Card className="border-primary h-full">
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
                      <span className="text-muted-foreground text-lg font-normal">
                        {alternative.comparison.prestyjPricing.period}
                      </span>
                    )}
                  </div>
                  {alternative.comparison.prestyjPricing.note && (
                    <div className="text-success font-medium">
                      {alternative.comparison.prestyjPricing.note}
                    </div>
                  )}
                  <ul className="text-muted-foreground space-y-2">
                    {alternative.comparison.prestyjPricing.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="text-success mt-0.5 h-5 w-5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                    {(alternative.comparison.prestyjPricing.cons ?? []).map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
                        <span>{con}</span>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Feature Comparison
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
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
                <tr className="border-border border-b">
                  <th className="font-heading text-foreground px-4 py-4 text-left font-semibold">
                    Feature
                  </th>
                  <th className="font-heading text-primary px-4 py-4 text-center font-semibold">
                    Prestyj
                  </th>
                  <th className="font-heading text-muted-foreground px-4 py-4 text-center font-semibold">
                    {alternative.competitor.shortName || alternative.competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {alternative.comparison.features.map((row, index) => (
                  <tr key={index} className="border-border/50 border-b">
                    <td className="px-4 py-4">
                      <div className="text-foreground font-medium">{row.feature}</div>
                      {row.note && (
                        <div className="text-muted-foreground mt-1 text-sm">{row.note}</div>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {typeof row.prestyj === "boolean" ? (
                        row.prestyj ? (
                          <Check className="text-success mx-auto h-6 w-6" />
                        ) : (
                          <X className="text-muted-foreground mx-auto h-6 w-6" />
                        )
                      ) : (
                        <span className="text-foreground">{row.prestyj}</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {typeof row.competitor === "boolean" ? (
                        row.competitor ? (
                          <Check className="text-success mx-auto h-6 w-6" />
                        ) : (
                          <X className="text-muted-foreground mx-auto h-6 w-6" />
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              {isIntegration
                ? `Why Add Prestyj to ${alternative.competitor.name}`
                : `Why Agents Switch from ${alternative.competitor.name}`}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {isIntegration
                ? "Key benefits of combining the platforms"
                : "Key reasons real estate professionals choose Prestyj"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {alternative.whySwitch.map((item, index) => {
              const Icon = getIconSafe(item.icon);
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
                        <div className="bg-primary/10 shrink-0 rounded-lg p-3">
                          <Icon className="text-primary h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                      <li key={i} className="text-muted-foreground flex items-start gap-3">
                        <Check className="text-success mt-0.5 h-5 w-5 shrink-0" />
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
              <Card className="border-primary h-full">
                <CardHeader>
                  <CardTitle className="text-xl">When Prestyj Is Right</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {alternative.whenPrestyjFits.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-3">
                        <Check className="text-primary mt-0.5 h-5 w-5 shrink-0" />
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-foreground mb-6 text-center text-xl font-semibold">
            Related Resources
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {alternative.relatedResources.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="border-border hover:border-primary/50 rounded-lg border p-4 transition-colors"
              >
                <p className="text-foreground mb-1 font-medium">{resource.title}</p>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {alternative.cta.headline}
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              {alternative.cta.subheadline}
            </p>
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href={alternative.cta.buttonHref}>
                {alternative.cta.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {alternative.cta.footnote && (
              <p className="text-muted-foreground mt-6 text-sm">{alternative.cta.footnote}</p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
