"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import { couple, weddingDate, weddingDateLabel } from "@/app/data/site";
import { useCountdown } from "@/app/hooks/useCountdown";
import { GoldDivider, Reveal, Section, SplitText } from "./Common";

/** Single digit that flips when its value changes. */
function FlipDigit({ digit }: { digit: string }) {
  return (
    <span className="relative inline-block h-[1.1em] w-[0.62em] overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  const digits = String(value).padStart(2, "0").split("");

  return (
    <div className="relative">
      <div className="glass relative flex h-28 w-24 flex-col items-center justify-center rounded-2xl md:h-36 md:w-32">
        <div className="flex font-body text-4xl font-light tabular-nums text-gold-light md:text-6xl">
          {digits.map((digit, i) => (
            <FlipDigit key={i} digit={digit} />
          ))}
        </div>

        <span className="mt-2 text-[0.55rem] uppercase tracking-[0.28em] text-white/45 md:text-[0.62rem]">
          {label}
        </span>

        {/* Corner ticks */}
        <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/50" />
        <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/50" />
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const target = useMemo(() => new Date(weddingDate).getTime(), []);
  const { timeLeft, arrived } = useCountdown(target);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <Section id="countdown" tone="darker">
      {/* Slow drifting glow */}
      <motion.div
        aria-hidden
        whileInView={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 10, repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal from="down">
          <p className="text-[0.68rem] uppercase tracking-luxe text-gold md:text-xs">
            Counting Down
          </p>
        </Reveal>

        <h2 className="mt-6 font-heading text-5xl text-foil md:text-7xl">
          <SplitText text={arrived ? "It's Today" : "Until We Say I Do"} delay={0.1} />
        </h2>

        <GoldDivider className="mt-8" />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              <Unit value={unit.value} label={unit.label} />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 text-sm uppercase tracking-[0.3em] text-white/50">
            {weddingDateLabel.day} · {weddingDateLabel.long} · {weddingDateLabel.time}
          </p>

          <p
            lang="sa"
            className="mt-6 whitespace-pre-line text-xl font-bold leading-relaxed text-gold-light md:text-3xl"
          >
            {couple.quote}
          </p>
          <p className="mt-2 italic text-white/60">{couple.quoteMeaning}</p>
        </Reveal>
      </div>
    </Section>
  );
}
