"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
};

export default function FloatingPetals() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 35 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 6 + Math.random() * 8,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-200 shadow-[0_0_12px_rgba(255,220,120,0.8)]"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            y: -100,
            x: 0,
            opacity: 0,
            rotate: 0,
          }}
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