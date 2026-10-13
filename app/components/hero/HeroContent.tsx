"use client";

import { motion } from "framer-motion";

import { couple } from "@/app/data/site";
import Countdown from "./Countdown";
import EnterButton from "./EnterButton";

const nameShadow = "[text-shadow:0_4px_30px_rgba(0,0,0,.75),0_0_2px_rgba(0,0,0,.6)]";

export default function HeroContent() {
  return (
    // Content sits low so the couple in the background photo stays in clear view.
    <div className="relative z-20 flex min-h-svh items-end justify-center px-6 pb-16 pt-28 md:pb-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold md:w-20" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-light [text-shadow:0_2px_12px_rgba(0,0,0,.8)] md:text-base">
            Together With Our Families
          </p>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold md:w-20" />
        </motion.div>

        <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-4 md:gap-x-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className={`font-heading text-6xl leading-tight text-white md:text-8xl ${nameShadow}`}
          >
            {couple.bride.name}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className={`font-heading text-4xl text-gold md:text-6xl ${nameShadow}`}
          >
            &amp;
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`font-heading text-6xl leading-tight text-white md:text-8xl ${nameShadow}`}
          >
            {couple.groom.name}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-3 flex items-center justify-center gap-3 text-gold [text-shadow:0_2px_12px_rgba(0,0,0,.8)]"
        >
          <span aria-hidden>✦</span>
          <p className="font-heading text-3xl text-champagne md:text-5xl">
            are getting married
          </p>
          <span aria-hidden>✦</span>
        </motion.div>

        <div className="mt-10">
          <Countdown />
        </div>

        <div className="mt-10">
          <EnterButton />
        </div>
      </div>
    </div>
  );
}
