"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import { couple, invitation, weddingDateLabel } from "@/app/data/site";
import { CornerFrame, GoldButton, GoldDivider, Reveal, Section } from "./Common";

function Person({
  person,
  side,
}: {
  person: typeof couple.groom;
  side: "left" | "right";
}) {
  return (
    <Reveal from={side} className="flex-1">
      <div className="text-center">
        <div className="group relative mx-auto h-64 w-52 overflow-hidden rounded-t-full border-gold-hairline md:h-80 md:w-64">
          <Image
            src={person.image}
            alt={person.fullName}
            fill
            sizes="(max-width: 768px) 208px, 256px"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          {/* Sheen sweep on hover */}
          <span
            aria-hidden
            className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ animation: "shimmer-sweep 1.6s ease-in-out infinite" }}
          />
        </div>

        <p className="mt-6 text-[0.62rem] uppercase tracking-luxe text-gold">
          {person.role}
        </p>

        <h3 className="mt-3 font-heading text-4xl text-white md:text-5xl">
          {person.name}
        </h3>

        <p className="mt-3 text-sm text-white/45">{person.parents}</p>

        <p className="mx-auto mt-4 max-w-xs text-sm italic leading-relaxed text-white/60">
          {person.about}
        </p>

      </div>
    </Reveal>
  );
}

export default function Invitation() {
  return (
    <Section id="invitation">
      <div id="invitation-card" className="mx-auto max-w-6xl px-6">
        {/* Invitation card */}
        <Reveal from="none">
          <motion.div
            initial={{ rotateX: 18, opacity: 0, y: 60 }}
            whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
            className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16 md:py-20"
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 glass rounded-[2rem]" />

            <CornerFrame />

            <div className="relative z-10">
              <p className="text-[0.68rem] uppercase tracking-luxe text-gold">
                {invitation.eyebrow}
              </p>

              <p className="mx-auto mt-8 max-w-md text-lg text-white/80 md:text-xl">
                {invitation.intro}
              </p>

              <div className="mt-8 flex flex-col items-center gap-2">
                <span className="font-heading text-5xl text-foil md:text-7xl">
                  {couple.bride.name}
                </span>
                <motion.span
                  whileInView={{ scale: [1, 1.12, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="font-heading text-4xl text-gold md:text-5xl"
                >
                  &amp;
                </motion.span>
                <span className="font-heading text-5xl text-foil md:text-7xl">
                  {couple.groom.name}
                </span>
              </div>

              <GoldDivider className="mt-10" />

              <div className="mx-auto mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-white/80 md:text-2xl">
                {invitation.message.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              {/* Date block */}
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:gap-10">
                <div className="sm:text-right">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light md:text-xl">
                    {weddingDateLabel.day}
                  </p>
                </div>

                <div className="border-y border-gold/30 px-8 py-3 sm:border-x sm:border-y-0 sm:px-6 sm:py-0 md:px-10">
                  <p className="font-heading text-7xl text-foil md:text-9xl">26</p>
                  <p className="mt-1 text-base font-semibold uppercase tracking-[0.25em] text-gold-light md:text-2xl">
                    November
                  </p>
                </div>

                <div className="sm:text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light md:text-xl">
                    2026
                  </p>
                </div>
              </div>

              <p className="mt-8 text-base font-semibold uppercase tracking-[0.25em] text-gold-light md:text-xl">
                {weddingDateLabel.time}
              </p>

              <p className="mt-10 font-heading text-2xl text-white/70">
                {invitation.closing}
              </p>

              {invitation.downloadUrl && (
                <div className="mt-10">
                  <GoldButton href={invitation.downloadUrl}>
                    <FiDownload /> Download Invite
                  </GoldButton>
                </div>
              )}
            </div>
          </motion.div>
        </Reveal>

        {/* Couple */}
        <div className="mt-24 flex flex-col items-center gap-16 md:flex-row md:items-start md:gap-10">
          <Person person={couple.bride} side="left" />

          <Reveal delay={0.2} className="md:pt-24">
            <div className="text-center">
              <motion.div
                whileInView={{ scale: [1, 1.15, 1], rotate: [0, 6, -6, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 5, repeat: Infinity }}
                className="font-heading text-6xl text-foil"
              >
                &amp;
              </motion.div>
              <p className="mt-4 text-[0.6rem] uppercase tracking-luxe text-gold">
                Forever
              </p>
            </div>
          </Reveal>

          <Person person={couple.groom} side="right" />
        </div>
      </div>
    </Section>
  );
}
