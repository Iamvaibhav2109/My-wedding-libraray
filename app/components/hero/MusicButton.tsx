"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiMusic, FiPause } from "react-icons/fi";

import { music } from "@/app/data/site";

type MusicButtonProps = {
  enabled: boolean;
};

export default function MusicButton({ enabled }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);
  // No track file yet? Then there is nothing to control — hide the button.
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (!enabled || !audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = music.volume;

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [enabled]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  if (!available) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={music.src}
        loop
        preload="none"
        onError={() => setAvailable(false)}
      />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="glass fixed bottom-7 right-6 z-[180] flex h-14 w-14 items-center justify-center rounded-full text-gold-light"
      >
        {/* Soft pulse while the track plays */}
        {playing && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-gold/50"
            style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.span
            key={playing ? "pause" : "play"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10"
          >
            {playing ? <FiPause /> : <FiMusic />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
