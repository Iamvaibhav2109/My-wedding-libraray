"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import { weddingDate } from "@/app/data/site";
import { useCountdown } from "@/app/hooks/useCountdown";

export default function Countdown() {
  const target = useMemo(() => new Date(weddingDate).getTime(), []);
  const { timeLeft } = useCountdown(target);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.9 }}
      className="mx-auto grid max-w-sm grid-cols-4 gap-2 md:flex md:max-w-none md:flex-wrap md:justify-center md:gap-5"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="glass rounded-2xl px-1 py-3 md:w-24 md:px-3 md:py-5"
        >
          <div className="font-body text-2xl font-light tabular-nums text-gold-light md:text-3xl">
            {String(item.value).padStart(2, "0")}
          </div>

          <div className="mt-1.5 text-[0.5rem] uppercase tracking-[0.1em] md:mt-2 md:tracking-[0.24em] text-white/50 md:text-[0.58rem]">
            {item.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
