"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUp } from "react-icons/fi";

import {
  couple,
  navLinks,
  thankYou,
  weddingDateLabel,
} from "@/app/data/site";
import { GoldDivider, Reveal, SplitText } from "./Common";

export default function ThankYou() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 0.45]);

  return (
    <footer
      ref={ref}
      id="thank-you"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink"
    >
      {/* Backdrop */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0"
      >
        <Image
          src={thankYou.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink via-black/70 to-ink" />

      {/* Rising sparks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold-light/70"
            style={{ left: `${(i * 5.5 + 4) % 100}%`, bottom: "-5%" }}
            viewport={{ once: true }}
            whileInView={{
              y: ["0vh", "-105vh"],
              opacity: [0, 0.9, 0],
              x: [0, i % 2 ? 30 : -30, 0],
            }}
            transition={{
              duration: 12 + (i % 5) * 2.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal from="down">
            <p className="text-[0.68rem] uppercase tracking-luxe text-gold md:text-xs">
              {thankYou.eyebrow}
            </p>
          </Reveal>

          <h2 className="mt-8 font-heading text-6xl text-foil md:text-8xl">
            <SplitText text={thankYou.title} delay={0.1} />
          </h2>

          <GoldDivider className="mt-10" />

          <Reveal delay={0.25}>
            <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
              {thankYou.message}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <motion.div
              whileInView={{ scale: [1, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="mt-12 text-3xl text-rose"
            >
              ❤
            </motion.div>

            <p className="mt-8 font-heading text-5xl text-white md:text-6xl">
              {thankYou.signature}
            </p>

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-gold-light/70">
              {weddingDateLabel.long}
            </p>

            <p className="mt-3 text-[0.65rem] uppercase tracking-luxe text-gold">
              {couple.hashtag}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 border-t border-gold/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between">
          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-white/35">
            © {new Date().getFullYear()} {couple.groom.name} &amp; {couple.bride.name}
          </p>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-[0.6rem] uppercase tracking-[0.22em] text-white/40 transition hover:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-ink"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
