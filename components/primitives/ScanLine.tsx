"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScanLine() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
    >
      <motion.div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #3b82f6 30%, #3b82f6 70%, transparent 100%)",
          width: "40%",
        }}
        initial={{ x: "-50%", opacity: 0.0 }}
        animate={{ x: "260%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
      />
    </div>
  );
}
