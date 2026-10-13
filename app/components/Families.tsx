"use client";

import { motion } from "framer-motion";

import { families, type FamilySide } from "@/app/data/site";
import { CornerFrame, Reveal, Section, SectionHeading } from "./Common";

function SideColumn({
  family,
  from,
}: {
  family: FamilySide;
  from: "left" | "right";
}) {
  return (
    <Reveal from={from} className="flex-1">
      <div className="glass relative h-full overflow-hidden rounded-[2rem] px-7 py-12 text-center md:px-10">
        <CornerFrame />

        <span className="text-4xl">{family.icon}</span>

        <p className="mt-5 text-[0.6rem] uppercase tracking-luxe text-gold">
          {family.side}
        </p>

        <h3 className="mt-4 font-heading text-4xl text-foil md:text-5xl">
          {family.house}
        </h3>

        <p className="mx-auto mt-4 max-w-xs text-sm italic text-white/50">
          {family.blessing}
        </p>

        <span className="mx-auto mt-8 block h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <ul className="mt-8 space-y-5">
          {family.members.map((member, i) => (
            <motion.li
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <p className="font-body text-lg text-white/85 md:text-xl">
                {member.name}
              </p>
              <p className="mt-0.5 text-[0.58rem] uppercase tracking-[0.24em] text-gold-light/60">
                {member.relation}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Families() {
  return (
    <Section id="families">
      <SectionHeading
        eyebrow={families.eyebrow}
        title={families.title}
        script
        subtitle={families.description}
      />

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-6">
          <SideColumn family={families.bride} from="left" />

          {/* Centre ornament */}
          <Reveal delay={0.2} className="flex items-center justify-center">
            <div className="flex flex-row items-center gap-4 lg:flex-col">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold lg:h-24 lg:w-px lg:bg-gradient-to-b" />
              <motion.span
                whileInView={{ scale: [1, 1.15, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-heading text-4xl text-foil"
              >
                &amp;
              </motion.span>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold lg:h-24 lg:w-px lg:bg-gradient-to-t" />
            </div>
          </Reveal>

          <SideColumn family={families.groom} from="right" />
        </div>
      </div>
    </Section>
  );
}
