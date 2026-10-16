"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { FiPlay, FiX } from "react-icons/fi";

import { couple, trailer } from "@/app/data/site";
import { CornerFrame, GoldDivider, Reveal, Section, SplitText } from "./Common";

/** True in the browser, false during server render — no effect needed. */
const noopSubscribe = () => () => {};

export default function Trailer() {
  const [open, setOpen] = useState(false);
  const [missing, setMissing] = useState(false);
  // The player is portalled to <body> so it sits above the fixed navbar
  // (inside this section it would be trapped under the section's z-index).
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  return (
    <Section id="trailer" tone="darker">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal from="down">
            <p className="text-[0.68rem] uppercase tracking-luxe text-gold md:text-xs">
              {trailer.eyebrow}
            </p>
          </Reveal>

          <h2 className="mt-6 font-heading text-5xl leading-tight md:text-7xl">
            <SplitText
              text={trailer.title}
              delay={0.1}
              wordClassName="text-foil"
            />
          </h2>

          <GoldDivider className="mt-8" />

          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-base text-white/60 md:text-lg">
              {trailer.description}
            </p>
          </Reveal>
        </div>

        {/* Poster / play surface */}
        <Reveal delay={0.15} className="mt-16">
          {/* Portrait card, same 9:16 shape as the video, so nothing is cropped. */}
          <div className="group relative mx-auto aspect-[9/16] w-full max-w-[22rem] overflow-hidden rounded-[2rem] border-gold-hairline shadow-[0_40px_120px_-40px_rgba(240, 160, 48,.45)]">
            <div className="absolute inset-0">
              {/* The video's own opening frame doubles as the poster; only its
                  metadata loads until someone presses play. */}
              <video
                src={`${trailer.src}#t=0.5`}
                aria-label={`${couple.bride.name} and ${couple.groom.name} video invitation`}
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50" />

            <CornerFrame />

            {/* Play button with radiating rings */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Play video invitation"
              className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            >
              <span className="relative flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-gold-light/70" />
                <span
                  className="absolute inset-0 rounded-full border border-gold-light/60"
                  style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                />
                <span
                  className="absolute inset-0 rounded-full border border-gold-light/40"
                  style={{
                    animation: "pulse-ring 2.4s ease-out infinite 1.2s",
                  }}
                />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold-light/95 text-2xl text-ink transition-transform duration-500 group-hover:scale-110">
                  <FiPlay className="ml-1" />
                </span>
              </span>

              <span className="text-[0.65rem] uppercase tracking-luxe text-white/80">
                Watch the invite · {trailer.duration}
              </span>
            </button>
          </div>
        </Reveal>

        {/* Scrolling hashtag ribbon */}
        <div className="relative mt-16 overflow-hidden py-4">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, block) => (
              <span key={block} className="flex gap-10">
                {Array.from({ length: 6 }).map((__, i) => (
                  <span
                    key={i}
                    className="font-heading text-3xl text-gold/35 md:text-4xl"
                  >
                    {couple.hashtag} ✦
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox player */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[400] flex items-center justify-center bg-black/95 px-4 backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close video"
                  className="absolute right-6 top-6 text-3xl text-gold-light"
                >
                  <FiX />
                </button>

                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="aspect-[9/16] h-auto max-h-[88svh] w-full max-w-[min(26rem,calc(88svh*9/16))] overflow-hidden rounded-2xl border-gold-hairline bg-black"
                >
                  {/* Falls back to a friendly note if the video file is missing. */}
                  {missing ? (
                    <div className="flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
                      <span className="font-heading text-4xl text-foil md:text-5xl">
                        Our video invite is on its way
                      </span>
                      <p className="max-w-md text-sm text-white/50">
                        Add the video at{" "}
                        <code className="text-gold-light">
                          /public/video/invite.mp4
                        </code>{" "}
                        and it will play right here.
                      </p>
                    </div>
                  ) : (
                    <video
                      src={trailer.src}
                      controls
                      autoPlay
                      playsInline
                      onError={() => setMissing(true)}
                      className="h-full w-full object-contain"
                    />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </Section>
  );
}
