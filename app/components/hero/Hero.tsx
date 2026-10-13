"use client";

import Background from "./Background";
import HeroContent from "./HeroContent";
import FloatingPetals from "./FloatingPetals";
import MusicButton from "./MusicButton";

type HeroProps = {
  musicEnabled: boolean;
};

export default function Hero({ musicEnabled }: HeroProps) {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <Background />

      <FloatingPetals />

      <MusicButton enabled={musicEnabled} />

      <HeroContent />

    </section>
  );
}
