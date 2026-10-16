"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { couple, weddingDateLabel } from "@/app/data/site";
import { CornerFrame } from "../Common";
import FallingFlowers from "../FallingFlowers";
import ScratchCard from "./ScratchCard";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  const [revealed, setRevealed] = useState(false);
  const [skip, setSkip] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  // A quiet fallback for anyone who can't (or won't) scratch.
  useEffect(() => {
    const t = setTimeout(() => setShowSkip(true), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[500] flex overflow-y-auto overflow-x-hidden bg-ink"
    >
      {/* Backdrop */}
      <motion.div
        animate={{ scale: [1.35, 1.5, 1.35] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ganesh.jpg')",
          backgroundPosition: "72% 78%",
        }}
      />

      <div className="fixed inset-0 bg-[#1a0a04]/55" />

      <div
        aria-hidden
        className="fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(240,160,48,.2), transparent 68%)",
        }}
      />

      {/* Falling flowers */}
      <FallingFlowers fixed />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 m-auto w-full max-w-4xl px-5 py-6 text-center md:px-14 md:py-8"
      >
        <CornerFrame />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-2xl font-extrabold text-gold-light [text-shadow:0_2px_0_#b8501a,0_4px_24px_rgba(0,0,0,.8)] md:text-4xl"
          lang="hi"
        >
          ॐ श्री गणेशाय नमः
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-4 max-w-xl text-[0.78rem] font-semibold leading-relaxed text-champagne [text-shadow:0_2px_12px_rgba(0,0,0,.9)] md:text-sm"
          lang="hi"
        >
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-gold [text-shadow:0_2px_14px_rgba(0,0,0,.9)] md:mt-8 md:text-xl"
        >
          Wedding Invitation
        </motion.p>

        {/* Names on one line: keeps the scratch card on screen without scrolling. */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-3 flex flex-wrap items-baseline justify-center gap-x-3 font-heading text-[clamp(2.6rem,10vw,5.5rem)] leading-tight text-white [text-shadow:0_4px_40px_rgba(240,160,48,.55)] md:mt-4 md:gap-x-5"
        >
          <span>{couple.bride.name}</span>
          <span className="text-[0.6em] text-gold">&amp;</span>
          <span>{couple.groom.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-2 flex items-center justify-center gap-3"
          aria-hidden
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold md:w-24" />
          <svg
            viewBox="0 0 100 70"
            className="h-8 w-12 drop-shadow-[0_2px_10px_rgba(240,160,48,.8)] md:h-10 md:w-14"
          >
            <defs>
              <linearGradient id="lotus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffe0a8" />
                <stop offset="1" stopColor="#ee7b4d" />
              </linearGradient>
            </defs>
            <g fill="url(#lotus)" stroke="#b8501a" strokeWidth="1.5">
              <path d="M50 6 C62 20 62 44 50 58 C38 44 38 20 50 6Z" />
              <path d="M30 18 C46 26 52 44 50 58 C32 54 20 38 30 18Z" />
              <path d="M70 18 C54 26 48 44 50 58 C68 54 80 38 70 18Z" />
              <path d="M10 34 C28 36 44 46 50 58 C30 62 12 54 10 34Z" />
              <path d="M90 34 C72 36 56 46 50 58 C70 62 88 54 90 34Z" />
            </g>
            <path
              d="M22 64 H78"
              stroke="#f0a030"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold md:w-24" />
        </motion.div>

        {/* Scratch-off date: the Open Invitation button appears once it's revealed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-5 md:mt-6"
        >
          <ScratchCard onReveal={() => setRevealed(true)} forceReveal={skip}>
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-[#d9bb7f]">
              Save the Date
            </p>
            <p className="mt-0.5 font-body text-[1.3rem] font-semibold leading-tight tracking-[0.12em] [font-variant-numeric:lining-nums] text-[#f6e7c3]">
              {weddingDateLabel.short}
            </p>
            <p className="mt-0.5 text-[0.58rem] uppercase tracking-[0.3em] text-champagne/70">
              {weddingDateLabel.day}
            </p>
          </ScratchCard>
        </motion.div>

        <div className="mt-5 flex min-h-[3.75rem] items-center justify-center md:mt-6">
          <AnimatePresence initial={false}>
            {revealed ? (
              <motion.button
                key="open"
                onClick={onOpen}
                // Glides up out of the revealed card, then keeps a soft, breathing glow.
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.85,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  boxShadow: [
                    "0 8px 26px rgba(201,164,98,.35)",
                    "0 8px 44px rgba(240,200,120,.75)",
                    "0 8px 26px rgba(201,164,98,.35)",
                  ],
                }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.4 },
                  y: {
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                    delay: 0.4,
                  },
                  scale: {
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                    delay: 0.4,
                  },
                  filter: { duration: 0.7, delay: 0.4 },
                  boxShadow: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden rounded-full border border-[#f3e2b8] bg-gradient-to-r from-[#8a6430] via-[#d9bb7f] to-[#8a6430] px-10 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-[#2a0f05] md:text-xs"
              >
                {/* Shine sweeping across the button */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/50 blur-sm"
                  style={{
                    animation: "shimmer-sweep 2.6s ease-in-out infinite 1.4s",
                  }}
                />
                <span className="relative">Open Invitation</span>
              </motion.button>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-2"
              >
                <motion.p
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="font-body text-sm italic text-champagne/90"
                >
                  Scratch the golden card to begin
                </motion.p>
                {showSkip && (
                  <button
                    onClick={() => {
                      setSkip(true);
                      setRevealed(true);
                    }}
                    className="text-[0.6rem] uppercase tracking-[0.25em] text-champagne/60 underline decoration-[#c9a462]/50 underline-offset-4"
                  >
                    Reveal the date
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-6 md:mt-10 text-[0.6rem] uppercase tracking-[0.28em] text-champagne/70"
        >
          Best experienced with sound on
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
