"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";

import { events, type WeddingEvent } from "@/app/data/site";
import { CornerFrame, Reveal, Section, SectionHeading } from "./Common";

function EventCard({ item, index }: { item: WeddingEvent; index: number }) {
  // `open` is driven by hover on pointer devices and by tap on touch devices,
  // so the details are never unreachable.
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      className="group relative h-[30rem] cursor-pointer overflow-hidden rounded-[1.75rem] border-gold-hairline"
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

      <CornerFrame />

      <div className="absolute inset-x-0 bottom-0 p-7">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.icon}</span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
            {item.day}
          </span>
        </div>

        <h3 className="mt-3 font-heading text-4xl text-white">{item.name}</h3>

        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold-light/80">
          {item.date}
        </p>

        {/* Details expand on hover, or on tap where hover doesn't exist. */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="pt-4 text-sm leading-relaxed text-white/70">
            {item.description}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-white/65">
            <li className="flex items-center gap-3">
              <FiClock className="shrink-0 text-gold" /> {item.time}
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-1 shrink-0 text-gold" />
              <span>
                {item.venue}
                <br />
                <span className="text-white/40">{item.address}</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiTag className="shrink-0 text-gold" /> {item.dress}
            </li>
          </ul>
        </motion.div>

        {!open && (
          <p className="pt-4 text-[0.6rem] uppercase tracking-[0.3em] text-white/35">
            Tap or hover for details
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function Events() {
  return (
    <Section id="events">
      <SectionHeading
        eyebrow="Wedding Events"
        title="Six Days of Celebration"
        script
        subtitle="Every ritual, every colour, every late night — here is where you'll find us, and when."
      />

      <div className="mx-auto mt-20 grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
        {events.map((item, index) => (
          <EventCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Timeline rail */}
      <Reveal delay={0.2} className="mx-auto mt-24 max-w-5xl px-6">
        <div className="relative">
          <div className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

          <ol className="relative grid grid-cols-3 gap-y-10 md:grid-cols-6">
            {events.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <span className="h-2 w-2 rounded-full bg-gold ring-4 ring-gold/15" />
                <span className="mt-4 text-[0.6rem] uppercase tracking-[0.25em] text-white/45">
                  {item.date.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="mt-1 font-heading text-xl text-gold-light">
                  {item.name}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
