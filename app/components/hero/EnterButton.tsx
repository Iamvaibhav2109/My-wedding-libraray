"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

/** A glowing, pulsing gold orb with a bouncing arrow — a swipe-up cue. */
export default function EnterButton() {
  const scrollNext = () => {
    // Land on the card itself, not the empty padding above it, so the
    // content is already in view (and revealing) when the scroll settles.
    (document.getElementById("invitation-card") ??
      document.getElementById("invitation"))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.button
      onClick={scrollNext}
      aria-label="Scroll to the invitation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.9, duration: 0.8 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-light/70 bg-gradient-to-b from-gold-light/25 to-gold-deep/40 text-2xl text-gold-light shadow-[0_0_30px_rgba(240,160,48,.55)] backdrop-blur-sm"
    >
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute inset-0 rounded-full border border-gold/60"
          animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, delay: i * 1.2, ease: "easeOut" }}
        />
      ))}
      <motion.span
        animate={{ y: [-3, 5, -3] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <FiChevronDown />
      </motion.span>
    </motion.button>
  );
}
