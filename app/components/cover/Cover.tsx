"use client";

import { motion } from "framer-motion";

import { couple, weddingDateLabel } from "@/app/data/site";
import { CornerFrame } from "../Common";
import FallingFlowers from "../FallingFlowers";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[500] flex overflow-y-auto overflow-x-hidden bg-ink"
    >
      {/* Backdrop */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ganesh.jpg')",
          backgroundPosition: "72% center",
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
        className="relative z-20 m-auto w-full max-w-4xl px-5 py-6 md:py-14 text-center md:px-14"
      >
        <CornerFrame />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-[1.7rem] font-extrabold text-gold-light [text-shadow:0_2px_0_#b8501a,0_4px_24px_rgba(0,0,0,.8)] md:text-5xl"
          lang="hi"
        >
          ॐ श्री गणेशाय नमः
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-7 max-w-xl text-[0.82rem] font-semibold leading-loose text-champagne [text-shadow:0_2px_12px_rgba(0,0,0,.9)] md:text-base"
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
          className="mt-8 md:mt-12 text-lg font-bold uppercase tracking-[0.22em] text-gold [text-shadow:0_2px_14px_rgba(0,0,0,.9)] md:text-3xl"
        >
          Wedding Invitation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-6 md:mt-10 font-heading text-[clamp(3rem,min(19vw,8.5vh),8.5rem)] leading-[0.95] text-white [text-shadow:0_4px_40px_rgba(240,160,48,.55)]"
        >
          {couple.bride.name}
        </motion.h1>

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="my-5 md:my-7 flex items-center justify-center gap-4"
          aria-hidden
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold md:w-28" />
          <svg
            viewBox="0 0 100 70"
            className="h-14 w-20 drop-shadow-[0_2px_12px_rgba(240,160,48,.8)] md:h-16 md:w-24"
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
            <path d="M22 64 H78" stroke="#f0a030" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold md:w-28" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 1 }}
          className="font-heading text-[clamp(3rem,min(19vw,8.5vh),8.5rem)] leading-[0.95] text-white [text-shadow:0_4px_40px_rgba(240,160,48,.55)]"
        >
          {couple.groom.name}
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-8 md:mt-12 font-body text-[1.6rem] font-bold tracking-[0.12em] [font-variant-numeric:lining-nums] text-gold-light [text-shadow:0_2px_0_#b8501a,0_4px_20px_rgba(0,0,0,.85)] md:text-5xl"
        >
          {weddingDateLabel.short}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpen}
          className="mt-10 md:mt-14 rounded-full border-2 border-gold-light bg-gradient-to-r from-gold-deep via-gold to-gold-deep px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] text-ink shadow-[0_8px_30px_rgba(184,80,26,.6)] transition-shadow duration-500 hover:shadow-[0_8px_45px_rgba(240,160,48,.9)] md:text-sm"
        >
          Open Invitation
        </motion.button>

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
