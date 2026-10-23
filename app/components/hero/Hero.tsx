"use client";

import Background from "./Background";
import HeroContent from "./HeroContent";
import FloatingPetals from "./FloatingPetals";
import MusicButton from "./MusicButton";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <Background />

      <FloatingPetals />

      <MusicButton />

      <HeroContent />

    </section>
  );
}
