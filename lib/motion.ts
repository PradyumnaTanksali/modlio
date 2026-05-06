import type { Transition, Variants } from "framer-motion";

export const ease = [0.4, 0, 0.2, 1] as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const revealTransition: Transition = {
  duration: 0.6,
  ease,
};

export const stagger: Variants = {
  hidden: {},
  visible: {},
};

export const staggerTransition: Transition = {
  staggerChildren: 0.06,
  delayChildren: 0.1,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};
