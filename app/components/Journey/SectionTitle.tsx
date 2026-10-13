"use client";

import { GoldDivider, Reveal, SplitText } from "../Common";

export default function SectionTitle() {
  return (
    <div className="mx-auto max-w-4xl px-6 text-center">
      <Reveal from="down">
        <p className="text-[0.68rem] uppercase tracking-luxe text-gold md:text-xs">
          Our Journey
        </p>
      </Reveal>

      <h2 className="mt-8 font-heading text-5xl leading-tight text-white md:text-7xl">
        <SplitText text="Every Love Story" delay={0.1} />
      </h2>

      <h2 className="mt-2 font-heading text-5xl leading-tight md:text-7xl">
        <SplitText text="Has A Beginning" delay={0.35} wordClassName="text-foil" />
      </h2>

      <GoldDivider className="mt-10" />

      <Reveal delay={0.3}>
        <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          Every smile, every long conversation, every small memory brought us one
          step closer to forever. Scroll gently — here is our story, chapter by
          chapter.
        </p>
      </Reveal>
    </div>
  );
}
