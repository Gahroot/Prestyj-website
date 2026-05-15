"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DemoSectionProps {
  id: string;
  number: string;
  title: string;
  description: string;
  reverse?: boolean;
  children: React.ReactNode;
}

export function DemoSection({
  id,
  number,
  title,
  description,
  reverse = false,
  children,
}: DemoSectionProps) {
  return (
    <section id={id} className="flex min-h-screen items-center px-6 py-16 md:px-12 lg:px-20">
      <div
        className={cn(
          "mx-auto grid w-full max-w-7xl items-center gap-12 lg:gap-20",
          "grid-cols-1 lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="font-mono text-sm tracking-widest text-[#7058e3] uppercase">
            {number}
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold text-white group-data-[demo-light]:text-zinc-900 md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-zinc-400 group-data-[demo-light]:text-zinc-600 md:text-xl">
            {description}
          </p>
        </motion.div>

        {/* Interactive side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
