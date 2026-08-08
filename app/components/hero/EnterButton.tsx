"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function EnterButton() {
  const scrollNext = () => {
    document
      .getElementById("trailer")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      onClick={scrollNext}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.9, duration: 0.8 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group relative overflow-hidden rounded-full border border-gold/60 px-10 py-4 text-[0.68rem] uppercase tracking-[0.32em] text-gold-light transition-colors duration-500 hover:text-ink"
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep transition-transform duration-700 ease-out group-hover:translate-x-0"
      />

      <span className="relative z-10 flex items-center gap-3">
        Begin The Story
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <FiChevronDown />
        </motion.span>
      </span>
    </motion.button>
  );
}
