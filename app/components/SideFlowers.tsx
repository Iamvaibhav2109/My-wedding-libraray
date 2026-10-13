"use client";

import { motion } from "framer-motion";

const COLORS = [
  "#ff6fa5",
  "#ffd23f",
  "#ff8c42",
  "#b388ff",
  "#ffffff",
  "#4cc9f0",
  "#7bd88f",
  "#f0a030",
];

const seeded = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const round = (v: number, p = 2) => Number(v.toFixed(p));

const STREAM = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  top: round(35 + seeded(i, 1) * 50),
  rise: round(seeded(i, 2) * 260 + 40),
  delay: round(seeded(i, 3) * 9),
  duration: round(7 + seeded(i, 4) * 6),
  size: round(14 + seeded(i, 5) * 10, 1),
  petals: i % 3 === 0 ? 5 : i % 3 === 1 ? 6 : 8,
  color: COLORS[i % COLORS.length],
}));

function Blossom({ color, petals }: { color: string; petals: number }) {
  const angle = 360 / petals;
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <g fill={color} stroke="rgba(90,30,10,.5)" strokeWidth=".8">
        {Array.from({ length: petals }).map((_, i) => (
          <ellipse key={i} cx="16" cy="8" rx="4.6" ry="8" transform={`rotate(${i * angle} 16 16)`} />
        ))}
      </g>
      <circle cx="16" cy="16" r="4" fill="#f0a030" stroke="rgba(90,30,10,.5)" strokeWidth=".8" />
    </svg>
  );
}

function Stream({ side }: { side: "left" | "right" }) {
  const dir = side === "left" ? 1 : -1;
  return (
    <>
      {STREAM.map((f) => (
        <motion.div
          key={`${side}-${f.id}`}
          className="absolute"
          style={{ [side]: 0, top: `${f.top}%`, width: f.size, height: f.size }}
          initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
          animate={{
            x: dir * 110,
            y: [0, -f.rise / 2, f.rise / 3, -f.rise],
            rotate: dir * 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "easeOut" }}
        >
          <Blossom color={f.color} petals={f.petals} />
        </motion.div>
      ))}
    </>
  );
}

/** A few colourful flowers drifting in along the screen edges only (kept clear of the text). */
export default function SideFlowers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <Stream side="left" />
      <Stream side="right" />
    </div>
  );
}
