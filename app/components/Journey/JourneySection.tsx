"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import type { JourneyItem } from "@/app/data/journey";
import { GoldDivider } from "../Common";

type Props = {
  item: JourneyItem;
  index: number;
  total: number;
};

export default function JourneySection({ item, index, total }: Props) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Ken Burns drift plus a fade at both ends, so chapters melt into each other.
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.04, 1.18]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <motion.div style={{ y, scale }} className="absolute -inset-y-20 inset-x-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="100vw"
          priority={index < 2}
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/62" />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,.14), transparent 68%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex h-full items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <p className="font-body text-[0.6rem] uppercase tracking-luxe text-white/40">
            Chapter {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-xs uppercase tracking-luxe text-gold md:text-sm"
          >
            {item.month}
          </motion.p>

          <GoldDivider className="my-8" />

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl text-white drop-shadow-2xl md:text-8xl"
          >
            {item.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
          >
            {item.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
