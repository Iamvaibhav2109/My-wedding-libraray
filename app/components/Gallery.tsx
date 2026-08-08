"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from "react-icons/fi";

import { gallery, galleryCategories } from "@/app/data/site";
import { Section, SectionHeading } from "./Common";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((p) => p.category === filter)),
    [filter]
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      setLightbox((current) => {
        if (current === null) return current;
        return (current + direction + photos.length) % photos.length;
      });
    },
    [photos.length]
  );

  // Keyboard control for the lightbox.
  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, step]);

  const active = lightbox === null ? null : photos[lightbox];

  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow="Memories"
        title="Moments We Kept"
        script
        subtitle="A few frames from the days that led us here — and the ones we can't wait to add after 26 November."
      />

      {/* Filters */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-3 px-6">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setFilter(category);
              setLightbox(null);
            }}
            className={`relative rounded-full px-6 py-2.5 text-[0.62rem] uppercase tracking-[0.24em] transition-colors duration-300 ${
              filter === category
                ? "text-ink"
                : "text-white/55 hover:text-gold-light"
            }`}
          >
            {filter === category && (
              <motion.span
                layoutId="gallery-pill"
                className="absolute inset-0 rounded-full bg-gold-light"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="mx-auto mt-14 max-w-7xl px-6">
        <motion.div
          layout
          className="grid auto-rows-[13rem] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {photos.map((photo, index) => (
              <motion.button
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.04 }}
                onClick={() => setLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl border-gold-hairline ${
                  photo.tall ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[0.55rem] uppercase tracking-[0.28em] text-gold">
                    {photo.category}
                  </p>
                  <p className="mt-1 font-heading text-2xl text-white">
                    {photo.caption}
                  </p>
                </div>

                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-gold-light opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                  <FiMaximize2 size={14} />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-black/96 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 z-10 text-3xl text-gold-light"
            >
              <FiX />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-xl text-gold-light transition hover:bg-gold hover:text-ink md:left-10"
            >
              <FiChevronLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-xl text-gold-light transition hover:bg-gold hover:text-ink md:right-10"
            >
              <FiChevronRight />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-16 h-[72vh] w-[86vw] max-w-5xl"
            >
              <Image
                src={active.src}
                alt={active.caption}
                fill
                sizes="86vw"
                className="rounded-xl object-contain"
              />
            </motion.div>

            <div className="absolute bottom-8 text-center">
              <p className="font-heading text-3xl text-gold-light">
                {active.caption}
              </p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-white/45">
                {(lightbox ?? 0) + 1} / {photos.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
