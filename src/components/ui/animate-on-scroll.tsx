"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

const motionComponents = {
  div: motion.div,
  section: motion.section,
};

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  as = "div",
}: AnimateOnScrollProps) {
  const MotionTag = motionComponents[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
