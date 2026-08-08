"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { couple, navLinks } from "@/app/data/site";

export default function Navbar({ visible = true }: { visible?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section owns the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActive(visibleEntry.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[200]"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-gold/20 bg-black/70 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <button
              onClick={() => go("home")}
              className="font-heading text-2xl text-foil md:text-3xl"
            >
              {couple.groom.name} &amp; {couple.bride.name}
            </button>

            <ul className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className={`relative text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-300 ${
                      active === link.id
                        ? "text-gold-light"
                        : "text-white/60 hover:text-gold-light"
                    }`}
                  >
                    {link.label}
                    {active === link.id && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-2xl text-gold-light lg:hidden"
            >
              <FiMenu />
            </button>
          </nav>
        </div>

        {/* Reading progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep"
        />
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-heading text-2xl text-foil">
                {couple.groom.name} &amp; {couple.bride.name}
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-3xl text-gold-light"
              >
                <FiX />
              </button>
            </div>

            <ul className="mt-10 flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <button
                    onClick={() => go(link.id)}
                    className="font-body text-2xl uppercase tracking-[0.25em] text-white/80"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <p className="mt-14 text-center text-xs uppercase tracking-luxe text-gold">
              {couple.hashtag}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
