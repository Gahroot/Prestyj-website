"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { RelatedResource } from "@/lib/compare/types";

interface CompareRelatedResourcesProps {
  resources: RelatedResource[];
}

export function CompareRelatedResources({ resources }: CompareRelatedResourcesProps) {
  return (
    <section className="border-b py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Related Resources
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="rounded-lg border bg-card p-6"
                {...fadeInUp}
                transition={transitions.staggered(index)}
                viewport={viewport}
              >
                <h3 className="mb-3 text-lg font-bold">{resource.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {resource.linkText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
