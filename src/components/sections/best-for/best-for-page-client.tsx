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
  Target,
  TrendingUp,
  Shield,
  MessageSquare,
  Calendar,
  BarChart3,
  Building2,
  Home,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { BestForPageContent } from "@/lib/best-for";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  DollarSign,
  Zap,
  Users,
  Target,
  TrendingUp,
  Shield,
  MessageSquare,
  Calendar,
  BarChart3,
  Building2,
  Home,
  Sparkles,
  ChevronDown,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Zap;
}

interface BestForPageClientProps {
  bestFor: BestForPageContent;
}

export function BestForPageClient({ bestFor }: BestForPageClientProps) {
  const isBatchCreativePage =
    bestFor.slug.startsWith("batch-video-ads-for-") ||
    bestFor.slug.startsWith("cost-per-tested-ad-angle-for-") ||
    bestFor.slug.startsWith("creative-testing-for-");
  const nicheLabel = bestFor.niche.shortName || bestFor.niche.name;
  const whyHeading = isBatchCreativePage
    ? `Why this creative volume model fits ${nicheLabel}`
    : `Why Prestyj is Best For ${nicheLabel}`;
  const whyDescription = isBatchCreativePage
    ? "The key reasons this niche needs structured ad variation, not another generic video."
    : "Discover the key reasons why professionals in your niche choose Prestyj";
  const painHeading = isBatchCreativePage ? "Creative Bottlenecks This Fixes" : "Your Challenges, Solved";
  const painDescription = isBatchCreativePage
    ? "See how batch production turns common paid-social constraints into testable creative lanes."
    : "See how Prestyj transforms common pain points into competitive advantages";
  const comparisonHeading = isBatchCreativePage
    ? "Batch Creative vs. the Status Quo"
    : "How Prestyj Compares";
  const comparisonDescription = isBatchCreativePage
    ? "Compare structured ad variation against the traditional ways teams source creative."
    : "See how Prestyj stacks up against traditional methods";
  const faqDescription = isBatchCreativePage
    ? `Common questions about batch video ads and creative testing for ${nicheLabel}`
    : `Common questions about using Prestyj for ${nicheLabel}`;
  const ctaHref = isBatchCreativePage ? "/batch-video-ads#pricing" : bestFor.cta.buttonHref;
  const ctaButtonText = isBatchCreativePage ? "See Batch Pricing" : bestFor.cta.buttonText;

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="text-muted-foreground flex text-sm">
          <Link href="/best-for" className="hover:text-foreground transition-colors">
            Best For
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{bestFor.niche.shortName || bestFor.niche.name}</span>
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
                {bestFor.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl"
            >
              {bestFor.hero.headline}
              <br />
              <span className="text-primary">{bestFor.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg sm:text-xl"
            >
              {bestFor.hero.subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Best For Section */}
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
              {whyHeading}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {whyDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {bestFor.whyBestFor.map((item, index) => {
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

      {/* Pain Points to Solutions Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              {painHeading}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {painDescription}
            </p>
          </motion.div>

          <div className="space-y-4">
            {bestFor.painPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <div className="bg-destructive/10 shrink-0 rounded-lg p-2">
                          <X className="text-destructive h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1 text-sm font-medium">
                            Pain Point
                          </p>
                          <p className="text-foreground">{item.problem}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success/10 shrink-0 rounded-lg p-2">
                          <Check className="text-success h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1 text-sm font-medium">
                            Prestyj Solution
                          </p>
                          <p className="text-foreground">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
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
              {comparisonHeading}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {comparisonDescription}
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
                    {bestFor.comparison.headers[0]}
                  </th>
                  <th className="font-heading text-primary px-4 py-4 text-center font-semibold">
                    {bestFor.comparison.headers[1]}
                  </th>
                  <th className="font-heading text-muted-foreground px-4 py-4 text-center font-semibold">
                    {bestFor.comparison.headers[2]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {bestFor.comparison.rows.map((row, index) => (
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
                      {typeof row.others === "boolean" ? (
                        row.others ? (
                          <Check className="text-success mx-auto h-6 w-6" />
                        ) : (
                          <X className="text-muted-foreground mx-auto h-6 w-6" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {faqDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {bestFor.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-heading text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
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
              {bestFor.cta.headline}
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              {bestFor.cta.subheadline}
            </p>
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href={ctaHref}>
                {ctaButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {bestFor.cta.footnote && (
              <p className="text-muted-foreground mt-6 text-sm">{bestFor.cta.footnote}</p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
