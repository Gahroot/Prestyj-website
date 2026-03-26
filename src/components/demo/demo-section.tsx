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
    <section
      id={id}
      className="min-h-screen flex items-center py-16 px-6 md:px-12 lg:px-20"
    >
      <div
        className={cn(
          "w-full max-w-7xl mx-auto grid gap-12 lg:gap-20 items-center",
          "grid-cols-1 lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2"
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
          <span className="text-sm font-mono tracking-widest text-[#7058e3] uppercase">
            {number}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg">
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
