"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Thermometer,
  Home,
  Wrench,
  Sun,
  Hammer,
  Users,
  Target,
  Zap,
  BarChart3,
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
import type { LocationPageContent } from "@/lib/locations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Thermometer,
  Home,
  Wrench,
  Sun,
  Hammer,
  Users,
  Target,
  Zap,
  BarChart3,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Zap;
}

const howItWorks = [
  {
    step: 1,
    title: "Tell Us About Your Business",
    description:
      "Share your trade, service area, and goals. We handle the rest — no marketing experience needed.",
  },
  {
    step: 2,
    title: "We Build Your Campaign",
    description:
      "Our AI generates scroll-stopping video ads, writes compelling copy, and targets your ideal customers.",
  },
  {
    step: 3,
    title: "Watch the Leads Roll In",
    description:
      "Your ads run on Facebook and Instagram. You get qualified leads delivered straight to your phone.",
  },
];

interface LocationPageClientProps {
  location: LocationPageContent;
}

export function LocationPageClient({ location }: LocationPageClientProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-sm text-muted-foreground">
          <Link
            href="/locations"
            className="hover:text-foreground transition-colors"
          >
            Locations
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{location.city.displayName}</span>
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
              <Badge
                variant="outline"
                className="mb-6 border-primary/50 text-primary"
              >
                {location.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6"
            >
              {location.hero.headline}
              <br />
              <span className="text-primary">
                {location.hero.headlineAccent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              {location.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link href={location.cta.buttonHref}>
                  {location.cta.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
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
              The {location.city.displayName} Market
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {location.city.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Households",
                value: location.marketStats.households,
              },
              {
                label: "Avg Home Value",
                value: location.marketStats.avgHomeValue,
              },
              {
                label: "Key Insight",
                value: location.marketStats.keyInsight,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-8 pb-8">
                    <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Home Services We Serve in {location.city.displayName}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prestyj creates high-converting Facebook ad campaigns for every
              home service vertical
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.services.map((service, index) => {
              const Icon = getIcon(service.icon);
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
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {service.citySpecificHook}
                      </p>
                      <div className="flex flex-col gap-2">
                        <Link
                          href={service.bestForHref}
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          <Check className="h-4 w-4" />
                          Best for {service.name} ads
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                        <Link
                          href={service.freeAdsHref}
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          <Check className="h-4 w-4" />
                          Free {service.name.toLowerCase()} ads
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How Prestyj Works for {location.city.displayName} Contractors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From setup to leads in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
              Common questions about using Prestyj for home service ads in{" "}
              {location.city.displayName}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {location.faq.map((item, index) => (
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
              {location.cta.headline}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {location.cta.subheadline}
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href={location.cta.buttonHref}>
                {location.cta.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
