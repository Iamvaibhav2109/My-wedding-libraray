"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function HeroCard() {
  return (
    <div className="w-full max-w-4xl px-6 text-center">

      {/* Family */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xs md:text-sm uppercase tracking-[8px] text-white/80"
      >
        Together With Our Families
      </motion.p>

      {/* Invitation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-base md:text-xl italic text-white/80"
      >
        request the honour of your presence
      </motion.p>

      {/* Divider */}
      <div className="mx-auto my-6 h-px w-40 bg-yellow-300/70" />

      {/* Couple */}
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="text-5xl md:text-7xl font-light text-white"
      >
        Aarohi
      </motion.h1>

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="my-4 flex justify-center"
      >
        <FaHeart className="text-4xl text-pink-400" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="text-5xl md:text-7xl font-light text-white"
      >
       Vaibhav
      </motion.h1>

      {/* Date */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-8 text-lg md:text-2xl tracking-[4px] text-yellow-200"
      >
        26 • November • 2026
      </motion.p>

    </div>
  );
}