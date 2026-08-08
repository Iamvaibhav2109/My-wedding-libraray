"use client";

import { motion } from "framer-motion";

import { couple, weddingDateLabel } from "@/app/data/site";
import { GoldDivider } from "../Common";
import Countdown from "./Countdown";
import EnterButton from "./EnterButton";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-screen items-center justify-center px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[0.65rem] uppercase tracking-luxe text-gold md:text-xs"
        >
          Together With Our Families
        </motion.p>

        <div className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
          <motion.h1
            initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-6xl text-white drop-shadow-2xl md:text-8xl"
          >
            {couple.groom.name}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="font-heading text-4xl text-foil md:text-6xl"
          >
            &amp;
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-6xl text-white drop-shadow-2xl md:text-8xl"
          >
            {couple.bride.name}
          </motion.h1>
        </div>

        <GoldDivider className="mt-10" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-sm uppercase tracking-[0.4em] text-gold-light md:text-lg"
        >
          {weddingDateLabel.short}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mx-auto mt-8 max-w-2xl font-heading text-2xl text-white/80 md:text-4xl"
        >
          &ldquo;{couple.quote}&rdquo;
        </motion.p>

        <div className="mt-14">
          <Countdown />
        </div>

        <div className="mt-14">
          <EnterButton />
        </div>
      </div>
    </div>
  );
}
