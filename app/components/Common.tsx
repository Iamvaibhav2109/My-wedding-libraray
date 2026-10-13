"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef, type ReactNode } from "react";

/* ─────────────────────────────────────────────────────────
   Shared building blocks used by every section.
   ───────────────────────────────────────────────────────── */

type RevealProps = {
  children: ReactNode;
  /** Direction the content travels in from. */
  from?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
};

const OFFSETS = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { x: -56, y: 0 },
  right: { x: 56, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.9,
  className = "",
}: RevealProps) {
  const offset = OFFSETS[from];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Letter-by-letter entrance for short display lines. */
export function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split(" ").map((word, w, words) => {
        // Index of this word's first letter, so the stagger runs across words.
        const offset = words.slice(0, w).reduce((n, x) => n + x.length + 1, 0);
        return (
          <Fragment key={`${word}-${w}`}>
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 40, rotateX: -60 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
                transition={{
                  duration: 0.7,
                  delay: delay + (offset + i) * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {w < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </span>
  );
}

/** Gold rule with a diamond at its centre. */
export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 90 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent to-gold"
      />
      <motion.span
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="block h-2 w-2 bg-gold"
      />
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 90 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-gradient-to-l from-transparent to-gold"
      />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  script,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Renders the title in the script face instead of the serif face. */
  script?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 text-center">
      <Reveal from="down">
        <p className="text-[0.68rem] uppercase tracking-luxe text-gold md:text-xs">
          {eyebrow}
        </p>
      </Reveal>

      <h2
        className={
          script
            ? "mt-6 font-heading text-5xl leading-tight text-foil md:text-7xl"
            : "mt-6 font-body text-4xl font-light uppercase tracking-[0.18em] text-white md:text-5xl"
        }
      >
        <SplitText text={title} delay={0.15} />
      </h2>

      <GoldDivider className="mt-8" />

      {subtitle && (
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Full-bleed section shell with the house background treatment. */
export function Section({
  id,
  children,
  className = "",
  tone = "dark",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "darker";
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 md:py-32 ${
        tone === "darker" ? "bg-ink" : "bg-ink-soft"
      } ${className}`}
    >
      {/* Ambient gold bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(240, 160, 48,.09), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Pill button with a light sweep on hover. */
export function GoldButton({
  children,
  onClick,
  href,
  type = "button",
  disabled,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}) {
  const classes = `
    group relative inline-flex items-center justify-center gap-3
    overflow-hidden rounded-full border border-gold/60 px-9 py-4
    text-[0.7rem] uppercase tracking-[0.32em] text-gold-light
    transition-colors duration-500 hover:text-ink
    disabled:cursor-not-allowed disabled:opacity-50
    ${className}
  `;

  const inner = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep transition-transform duration-700 ease-out group-hover:translate-x-0"
      />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {inner}
    </button>
  );
}

/** Decorative corner filigree for framed cards. */
export function CornerFrame() {
  const corner = "absolute h-10 w-10 border-gold/50";
  return (
    <>
      <span aria-hidden className={`${corner} left-4 top-4 border-l border-t`} />
      <span aria-hidden className={`${corner} right-4 top-4 border-r border-t`} />
      <span aria-hidden className={`${corner} bottom-4 left-4 border-b border-l`} />
      <span aria-hidden className={`${corner} bottom-4 right-4 border-b border-r`} />
    </>
  );
}
