"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{
          scale: 1,
          x: 0,
          y: 0,
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 20, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-pg.jpg')",
          }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Top Golden Light */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-yellow-200/10
        via-transparent
        to-transparent
      "
      />

      {/* Bottom Shadow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/60
        via-transparent
        to-transparent
      "
      />

      {/* Vignette */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,.85)_100%)]
      "
      />
    </div>
  );
}