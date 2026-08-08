"use client";

import { motion } from "framer-motion";

import { couple, weddingDateLabel } from "@/app/data/site";
import { CornerFrame } from "../Common";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[500] flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Backdrop */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/78" />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,.16), transparent 68%)",
        }}
      />

      {/* Drifting motes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold-light/60"
            style={{ left: `${(i * 7.3 + 5) % 100}%`, top: `${(i * 11.7 + 8) % 100}%` }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.6, 1.4, 0.6] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mx-6 w-full max-w-lg px-8 py-16 text-center md:px-14"
      >
        <CornerFrame />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[0.6rem] uppercase tracking-luxe text-gold"
        >
          Wedding Invitation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-12 font-heading text-6xl text-white md:text-7xl"
        >
          {couple.groom.name}
        </motion.h1>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="my-5 text-2xl text-rose"
        >
          ❤
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 1 }}
          className="font-heading text-6xl text-white md:text-7xl"
        >
          {couple.bride.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-12 text-xs uppercase tracking-[0.38em] text-gold-light"
        >
          {weddingDateLabel.short}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpen}
          className="group relative mt-14 overflow-hidden rounded-full border border-gold/60 px-10 py-4 text-[0.65rem] uppercase tracking-[0.32em] text-gold-light transition-colors duration-500 hover:text-ink"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep transition-transform duration-700 ease-out group-hover:translate-x-0"
          />
          <span className="relative z-10">Open Invitation</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 text-[0.55rem] uppercase tracking-[0.28em] text-white/35"
        >
          Best experienced with sound on
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
