"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      "
    >
      <div
        className="
        mx-auto
        mt-3
        flex
        w-[92%]
        max-w-7xl
        items-center
        justify-between
        rounded-full
        border
        border-white/15
        bg-black/20
        px-8
        py-3
        backdrop-blur-xl
        "
      >
        {/* Logo */}

        <h2
          className="
          text-xl
          text-white
          tracking-[3px]
          "
        >
          Aarohi ❤️ Vaibhav
        </h2>

        {/* Menu */}

        <div className="hidden md:flex gap-10">

          <a
            href="#journey"
            className="text-white/80 hover:text-yellow-300 transition"
          >
            Our Story
          </a>

          <a
            href="#events"
            className="text-white/80 hover:text-yellow-300 transition"
          >
            Events
          </a>

          <a
            href="#gallery"
            className="text-white/80 hover:text-yellow-300 transition"
          >
            Gallery
          </a>

          <a
            href="#rsvp"
            className="text-white/80 hover:text-yellow-300 transition"
          >
            RSVP
          </a>

        </div>
      </div>
    </motion.nav>
  );
}