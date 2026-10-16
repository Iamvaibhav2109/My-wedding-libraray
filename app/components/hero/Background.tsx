"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{
          scale: 1,
          x: 0,
          y: 0,
        }}
        animate={{ scale: [1.04, 1.1, 1.04] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Phones: the wide hands photo across the top, then the portrait
            couple-in-the-arch photo filling the rest of the tall screen, so
            neither photo is cropped down to a sliver. The top padding keeps
            the hands photo clear of the fixed menu bar. */}
        <div className="flex h-full w-full flex-col bg-[#140804] pt-20 md:hidden">
          <div
            className="relative aspect-[2000/735] w-full shrink-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/couple-hands.jpg')" }}
          >
            {/* Soft fade into the photo below */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#2a1208]" />
          </div>
          <div
            className="relative flex-1 bg-cover bg-[position:50%_40%]"
            style={{ backgroundImage: "url('/images/couple-arch.jpg')" }}
          >
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#2a1208] to-transparent" />
          </div>
        </div>

        {/* Wider screens: the hands photo full-bleed. */}
        <div
          className="hidden h-full w-full bg-cover bg-[position:54%_55%] md:block"
          style={{ backgroundImage: "url('/images/couple-hands.jpg')" }}
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
        hidden md:block
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
        hidden md:block
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
      <div className="absolute inset-0 hidden overflow-hidden opacity-20 md:block">
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
