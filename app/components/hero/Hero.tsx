"use client";

import Background from "./Background";
import FloatingPetals from "./FloatingPetals";
import HeroCard from "./HeroCard";
import Navbar from "../Navbar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
    >
       <Navbar />

      {/* Cinematic Background */}
      <Background />

      {/* Flower Petals */}
      <FloatingPetals />

      {/* Center Content */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
         <HeroCard />
      </div>

    </section>
  );
}