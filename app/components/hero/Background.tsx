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
          scale: [1, 1.08, 1],
          x: [0, -20, 20, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="h-full w-full bg-cover bg-[position:50%_62%]"
          style={{
            backgroundImage: "url('/images/couple-arch.jpg')",
          }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1a0a04]/40" />

      {/* Luxury Gold Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,215,120,0.18), transparent 60%)",
        }}
      />

      {/* Top Gradient */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/30
        via-transparent
        to-black/20
      "
      />

      {/* Bottom Gradient */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/80
        via-transparent
        to-transparent
      "
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        -left-32
        top-1/3
        h-[500px]
        w-[500px]
        rounded-full
        bg-gold/10
        blur-3xl
      "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
        absolute
        -right-32
        bottom-20
        h-[450px]
        w-[450px]
        rounded-full
        bg-rose/10
        blur-3xl
      "
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, rgba(0,0,0,.6) 100%)",
        }}
      />

      {/* Decorative Light Rays */}
      <div className="absolute inset-0 overflow-hidden opacity-20">

        <motion.div
          animate={{
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
          absolute
          -top-40
          left-1/2
          h-[800px]
          w-[2px]
          bg-gradient-to-b
          from-gold-light
          to-transparent
          blur-sm
        "
        />

        <motion.div
          animate={{
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="
          absolute
          -top-32
          left-[40%]
          h-[700px]
          w-[2px]
          bg-gradient-to-b
          from-white
          to-transparent
          blur-sm
        "
        />

      </div>

    </div>
  );
}