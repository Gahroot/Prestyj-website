// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
} as const;

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
} as const;

// Transition helpers
export const transitions = {
  default: { duration: 0.5 },
  withDelay: (delay: number) => ({ duration: 0.5, delay }),
  staggered: (index: number) => ({ duration: 0.5, delay: index * 0.1 }),
};

// Viewport configuration for whileInView
export const viewport = { once: true };
