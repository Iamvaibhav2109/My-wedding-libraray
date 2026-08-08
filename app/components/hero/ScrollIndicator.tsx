"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 1 }}
      className="pointer-events-none absolute bottom-7 left-1/2 z-30 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-[0.5rem] uppercase tracking-luxe text-white/40">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-white/25">
          <motion.span
            animate={{ y: [5, 24, 5], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </div>
    </motion.div>
  );
}
