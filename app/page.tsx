"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Cover from "./components/cover/Cover";
import CountdownSection from "./components/CountdownSection";
import Events from "./components/Events";
import Families from "./components/Families";
import Gallery from "./components/Gallery";
import Hero from "./components/hero/Hero";
import Invitation from "./components/Invitation";
import Journey from "./components/Journey/Journey";
import Navbar from "./components/Navbar";
import ThankYou from "./components/ThankYou";
import Trailer from "./components/Trailer";
import Venue from "./components/Venue";

export default function Home() {
  const [opened, setOpened] = useState(false);

  // Hold the page still behind the cover so the reveal always starts at the top.
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <main className="bg-ink">
      <AnimatePresence>
        {!opened && <Cover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <Navbar visible={opened} />

      <Hero musicEnabled={opened} />

      <Trailer />

      <Invitation />

      <Journey />

      <Events />

      <Venue />

      <Gallery />

      <CountdownSection />

      <Families />

      <ThankYou />
    </main>
  );
}
