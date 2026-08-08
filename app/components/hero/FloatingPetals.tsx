"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
};

/**
 * Seeded pseudo-random so the server and the client generate the exact same
 * petals — random values here would cause a hydration mismatch.
 */
function seeded(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Rounded, because long floats serialize differently on the server and the
 *  client and React flags that as a hydration mismatch. */
const round = (value: number, places = 2) => Number(value.toFixed(places));

const PARTICLES: Particle[] = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: round(seeded(i, 1) * 100),
  delay: round(seeded(i, 2) * 10),
  duration: round(12 + seeded(i, 3) * 8),
  size: round(5 + seeded(i, 4) * 7, 1),
}));

export default function FloatingPetals() {
  const particles = useMemo(() => PARTICLES, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold-light shadow-[0_0_12px_rgba(243,227,172,0.75)]"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ y: -100, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [-20, 20, -15, 15, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
