"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="flex flex-col items-center">

        <p
          className="
          text-xs
          uppercase
          tracking-[6px]
          text-white/70
          "
        >
          Begin Our Story
        </p>

        <div
          className="
          mt-4
          h-14
          w-8
          rounded-full
          border
          border-white/40
          flex
          justify-center
        "
        >
          <motion.div
            animate={{
              y: [5, 28, 5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            mt-2
            h-2
            w-2
            rounded-full
            bg-yellow-300
            "
          />
        </div>

      </div>
    </motion.div>
  );
}