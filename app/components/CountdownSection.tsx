"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import { couple, weddingDate } from "@/app/data/site";
import { useCountdown } from "@/app/hooks/useCountdown";
import { GoldDivider, Reveal, Section, SplitText } from "./Common";

/**
 * Single digit that drops in when its value changes. The old digit is removed
 * immediately (no exit animation), so two digits can never stack on top of
 * each other. It's a CSS animation keyed on the digit: if the browser pauses
 * animation (background tab, hidden preview), the digit still shows in full.
 */
function FlipDigit({ digit }: { digit: string }) {
  return (
    // Fixed width so the number doesn't shift as digits change; no clipping
    // box, so the full height of every digit always shows.
    <span className="inline-block w-[0.6em] text-center">
      <span key={digit} className="inline-block animate-digit-drop">
        {digit}
      </span>
    </span>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  const digits = String(value).padStart(2, "0").split("");

  return (
    <div className="relative">
      <div className="glass relative flex h-24 w-full flex-col items-center justify-center rounded-2xl md:h-36 md:w-32">
        <div className="flex font-body text-3xl font-light tabular-nums text-gold-light md:text-6xl">
          {digits.map((digit, i) => (
            <FlipDigit key={i} digit={digit} />
          ))}
        </div>

        <span className="mt-1.5 text-[0.5rem] uppercase tracking-[0.1em] text-white/45 md:mt-2 md:text-[0.62rem] md:tracking-[0.28em]">
          {label}
        </span>

        {/* Corner ticks */}
        <span className="absolute left-2 top-2 h-2.5 w-2.5 md:left-3 md:top-3 md:h-3 md:w-3 border-l border-t border-gold/50" />
        <span className="absolute bottom-2 right-2 h-2.5 w-2.5 md:bottom-3 md:right-3 md:h-3 md:w-3 border-b border-r border-gold/50" />
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

        <h2 className="mt-6 font-heading text-4xl leading-tight md:text-7xl">
          <SplitText
            // Non-breaking space keeps "I Do" together on one line.
            text={arrived ? "It's Today" : "Until We Say I Do"}
            delay={0.1}
            wordClassName="text-foil"
          />
        </h2>

        <GoldDivider className="mt-8" />

        <div className="mx-auto mt-14 grid max-w-md grid-cols-4 gap-2 md:flex md:max-w-none md:flex-wrap md:items-center md:justify-center md:gap-6">
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
          <p
            lang="sa"
            className="mt-14 whitespace-pre-line text-xl font-bold leading-relaxed text-gold-light md:text-3xl"
          >
            {couple.quote}
          </p>
          <p className="mt-2 italic text-white/60">{couple.quoteMeaning}</p>
        </Reveal>
      </div>
    </Section>
  );
}
