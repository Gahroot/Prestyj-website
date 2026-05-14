"use client";

import { motion } from "framer-motion";
import { FileText, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LeadMagnetBannerProps {
  variant?: "default" | "compact" | "roofing";
}

export function LeadMagnetBanner({ variant = "default" }: LeadMagnetBannerProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="from-primary/10 via-primary/5 to-background border-primary/20 border-b bg-gradient-to-r"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="text-primary h-5 w-5" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-sm font-medium">Free Guide:</span>
                <span className="text-muted-foreground text-sm">
                  The Roofer&apos;s 24/7 Lead Response Playbook
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <Link href="/lead-magnet">
                Download <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "roofing") {
    return (
      <section className="from-primary via-primary/90 to-primary/80 text-primary-foreground bg-gradient-to-br py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary-foreground/10 text-primary-foreground mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <FileText className="h-4 w-4" />
              Free Download
            </div>
            <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">
              The Roofer&apos;s 24/7 Lead Response Playbook
            </h2>
            <p className="text-primary-foreground/80 mx-auto mb-8 max-w-2xl text-lg">
              Storm hits. Phones explode. Are you capturing every lead or giving them to
              competitors? Download our complete guide to AI-powered instant response.
            </p>
            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center gap-2 text-sm">
                <Download className="h-4 w-4" />
                <span>50+ pages of actionable content</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4" />
                <span>Checklists, scripts, and ROI calculators</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary-foreground/60">Instant PDF delivery</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="px-8 text-lg" asChild>
                <Link href="/lead-magnet">
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Playbook
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-lg"
                asChild
              >
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted/30 border-border border-y py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <FileText className="h-4 w-4" />
            Free Guide
          </div>
          <h2 className="font-heading mb-3 text-2xl font-bold sm:text-3xl">
            The Roofer&apos;s 24/7 Lead Response Playbook
          </h2>
          <p className="text-muted-foreground mx-auto mb-6 max-w-xl">
            Stop missing $15,000 storm jobs. Learn the 60-second standard, emergency triage, and
            storm surge handling.
          </p>
          <Button size="lg" asChild>
            <Link href="/lead-magnet">
              <Download className="mr-2 h-4 w-4" />
              Download Free Playbook
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
