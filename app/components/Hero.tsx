"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-white flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >

        <h3 className="tracking-[10px] uppercase text-gray-500">
          Together Forever
        </h3>

        <h1 className="text-7xl font-bold mt-5">
          Vaibhav
        </h1>

        <div className="text-5xl my-5 text-pink-500">
            ❤
        </div>

        <h1 className="text-7xl font-bold">
          Aarohi
        </h1>

        <p className="mt-10 text-xl">
            November 2026
        </p>

    </motion.div>

    </section>
  );
}