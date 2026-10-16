"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiMapPin, FiPhone } from "react-icons/fi";

import { venue } from "@/app/data/site";
import { CornerFrame, GoldButton, Reveal, Section, SectionHeading } from "./Common";

export default function Venue() {
  return (
    <Section id="venue" tone="darker">
      <SectionHeading
        eyebrow={venue.eyebrow}
        title={venue.name}
        script
        subtitle={venue.tagline}
      />

      <div className="mx-auto mt-20 max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Hero image */}
          <Reveal from="left">
            {/* Same 3:2 shape as the hotel photo, so the whole building shows. */}
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border-gold-hairline">
              <div className="absolute inset-0">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <CornerFrame />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal from="right">
            <div>
              <h3 className="font-heading text-4xl text-foil md:text-5xl">
                {venue.name}
              </h3>

              <p className="mt-6 flex items-start gap-3 text-base text-white/65">
                <FiMapPin className="mt-1 shrink-0 text-gold" />
                {venue.address}
              </p>

              <p className="mt-6 text-base leading-relaxed text-white/60">
                {venue.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {venue.highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="glass rounded-2xl p-5"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-gold-light">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GoldButton href={venue.mapUrl}>
                  <FiExternalLink /> Open in Maps
                </GoldButton>
              </div>

              {/* Point people */}
              <div className="mt-10 space-y-3">
                <p className="text-[0.6rem] uppercase tracking-luxe text-gold">
                  Need help getting here?
                </p>
                {venue.contacts.map((contact) => (
                  <a
                    key={contact.phone}
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-white/60 transition hover:text-gold-light"
                  >
                    <FiPhone className="text-gold" />
                    <span>
                      {contact.name} — {contact.phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.15} className="mt-16">
          <div className="relative h-[22rem] overflow-hidden rounded-[2rem] border-gold-hairline md:h-[26rem]">
            <iframe
              title={`Map to ${venue.name}`}
              src={venue.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[35%] contrast-125"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
