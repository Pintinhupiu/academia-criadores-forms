"use client";

import { AnimatePresence, motion } from "framer-motion";

export function StepTransition({
  stepKey,
  children,
}: {
  stepKey: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepKey}
        initial={{ opacity: 0, y: 18, scale: 0.985, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, scale: 0.985, filter: "blur(4px)" }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}