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
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-sm text-muted-foreground">
          <Link href="/best-for" className="hover:text-foreground transition-colors">
            Best For
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{bestFor.niche.shortName || bestFor.niche.name}</span>
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
                {bestFor.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6"
            >
              {bestFor.hero.headline}
              <br />
              <span className="text-primary">{bestFor.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              {bestFor.hero.subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Best For Section */}
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
              Why Prestyj is Best For {bestFor.niche.shortName || bestFor.niche.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the key reasons why professionals in your niche choose Prestyj
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Pain Points to Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Your Challenges, Solved
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Prestyj transforms common pain points into competitive advantages
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-destructive/10 rounded-lg shrink-0">
                          <X className="h-5 w-5 text-destructive" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            Pain Point
                          </p>
                          <p className="text-foreground">{item.problem}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-success/10 rounded-lg shrink-0">
                          <Check className="h-5 w-5 text-success" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              How Prestyj Compares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Prestyj stacks up against traditional methods
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
                    {bestFor.comparison.headers[0]}
                  </th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-primary">
                    {bestFor.comparison.headers[1]}
                  </th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-muted-foreground">
                    {bestFor.comparison.headers[2]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {bestFor.comparison.rows.map((row, index) => (
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
                      {typeof row.others === "boolean" ? (
                        row.others ? (
                          <Check className="h-6 w-6 text-success mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-muted-foreground mx-auto" />
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about using Prestyj for {bestFor.niche.shortName || bestFor.niche.name}
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
                  <AccordionTrigger className="text-left font-heading font-semibold">
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
      <section className="py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              {bestFor.cta.headline}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {bestFor.cta.subheadline}
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href={bestFor.cta.buttonHref}>
                {bestFor.cta.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {bestFor.cta.footnote && (
              <p className="text-sm text-muted-foreground mt-6">{bestFor.cta.footnote}</p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
