"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import { journeyData } from "@/app/data/journey";
import JourneySection from "./JourneySection";
import SectionTitle from "./SectionTitle";

export default function Journey() {
  const [activeSection, setActiveSection] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  // The chapter rail only belongs on screen while the journey is on screen.
  const railVisible = useInView(railRef, { amount: 0.05 });

  useEffect(() => {
    const sections = document.querySelectorAll("[data-journey]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveSection(Number(entry.target.getAttribute("data-index")));
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    document
      .querySelector(`[data-index="${index}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="journey" className="relative bg-ink">
      {/* Intro */}
      <div className="py-28 md:py-36">
        <SectionTitle />
      </div>

      <div ref={railRef}>
        {/* Chapter rail */}
        <AnimatePresence>
          {railVisible && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="fixed left-6 top-1/2 z-[150] hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
            >
              <span className="mb-2 text-[0.55rem] uppercase tracking-[0.3em] text-gold/70">
                {String(activeSection + 1).padStart(2, "0")}
              </span>

              {journeyData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goTo(index)}
                  aria-label={`Go to chapter ${index + 1}: ${item.title}`}
                  className="group relative flex items-center"
                >
                  <span
                    className={`block rounded-full transition-all duration-500 ${
                      activeSection === index
                        ? "h-3 w-3 bg-gold shadow-[0_0_14px_rgba(212,175,55,.9)]"
                        : "h-1.5 w-1.5 bg-white/30 group-hover:bg-gold/70"
                    }`}
                  />

                  <span className="pointer-events-none absolute left-7 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.2em] text-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.title}
                  </span>
                </button>
              ))}

              <span className="mt-2 text-[0.55rem] uppercase tracking-[0.3em] text-white/30">
                {String(journeyData.length).padStart(2, "0")}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chapters */}
        {journeyData.map((item, index) => (
          <div key={item.id} data-journey data-index={index}>
            <JourneySection item={item} index={index} total={journeyData.length} />
          </div>
        ))}
      </div>
    </section>
  );
}
