"use client";

import { motion } from "framer-motion";

type Flower = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  sway: number;
  spin: number;
  kind: "petal" | "marigold" | "rose";
  color: string;
};

type Variant = "marigold" | "rose";

/** Seeded so server and client render identical flowers (no hydration mismatch). */
function seeded(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const round = (value: number, places = 2) => Number(value.toFixed(places));

const COLORS = ["#f0a030", "#ee7b4d", "#ffe0a8", "#ff9f6b", "#ffc15a"];

const ROSE_COLORS = ["#c1121f", "#9d0208", "#e5383b", "#d00000", "#a4161a"];

const build = (variant: Variant): Flower[] =>
  Array.from({ length: variant === "rose" ? 7 : 22 }, (_, i) => ({
  id: i,
  left: round(seeded(i, 1) * 100),
  delay: round(seeded(i, 2) * (variant === "rose" ? 24 : 12)),
  duration: round(variant === "rose" ? 26 + seeded(i, 3) * 14 : 11 + seeded(i, 3) * 8),
  size: round((variant === "rose" ? 14 : 16) + seeded(i, 4) * (variant === "rose" ? 10 : 16), 1),
  sway: round(20 + seeded(i, 5) * 40, 1),
  spin: Math.round(180 + seeded(i, 6) * 360),
  kind: variant === "rose" ? "rose" : i % 3 === 0 ? "marigold" : "petal",
  color: (variant === "rose" ? ROSE_COLORS : COLORS)[i % COLORS.length],
}));

const FLOWERS = { marigold: build("marigold"), rose: build("rose") };

/** A rose seen from above: layered, overlapping petals from a dark heart outwards. */
function Rose({ color }: { color: string }) {
  const layer = (n: number, rx: number, ry: number, cy: number, fill: string, offset = 0) =>
    Array.from({ length: n }).map((_, i) => (
      <ellipse
        key={`${fill}-${i}`}
        cx="24"
        cy={cy}
        rx={rx}
        ry={ry}
        fill={fill}
        stroke="#3a0006"
        strokeWidth=".7"
        transform={`rotate(${offset + (i * 360) / n} 24 24)`}
      />
    ));
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full">
      {/* sepals peeking out */}
      <g fill="#2d6a3a">
        {[0, 72, 144, 216, 288].map((a) => (
          <path key={a} d="M24 1 L28 10 L20 10 Z" transform={`rotate(${a + 20} 24 24)`} />
        ))}
      </g>
      {layer(7, 10, 13, 12, "#a4161a", 10)}
      {layer(6, 8.5, 11, 14, color, 25)}
      {layer(5, 7, 9, 16, "#e5383b", 5)}
      {layer(4, 5.5, 7, 18, "#c1121f", 40)}
      {layer(3, 4, 5, 20, "#8f0014", 15)}
      <circle cx="24" cy="24" r="2.4" fill="#5c0010" />
      <path d="M13 13C16 9 21 7 26 8" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Petal({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 32" className="h-full w-full">
      <path
        d="M12 1C20 8 22 20 12 31C2 20 4 8 12 1Z"
        fill={color}
        stroke="rgba(184,80,26,.55)"
        strokeWidth="1"
      />
      <path d="M12 6V26" stroke="rgba(255,255,255,.4)" strokeWidth="1" />
    </svg>
  );
}

function Marigold({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <g fill={color} stroke="rgba(184,80,26,.6)" strokeWidth=".8">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="16"
            cy="8"
            rx="4.5"
            ry="8"
            transform={`rotate(${i * 45} 16 16)`}
          />
        ))}
      </g>
      <circle cx="16" cy="16" r="4" fill="#b8501a" />
    </svg>
  );
}

/** Flower petals and marigolds drifting down the screen. */
export default function FallingFlowers({
  fixed = false,
  variant = "marigold",
  className = "",
}: {
  fixed?: boolean;
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} inset-0 overflow-hidden ${className}`}
    >
      {FLOWERS[variant].map((f) => (
        <motion.div
          key={f.id}
          className="absolute top-0 drop-shadow-[0_2px_6px_rgba(0,0,0,.35)]"
          style={{ left: `${f.left}%`, width: f.size, height: f.size * (f.kind === "petal" ? 1.3 : 1) }}
          initial={{ y: -60, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [0, f.sway, -f.sway, f.sway / 2, 0],
            rotate: [0, f.spin],
            opacity: [0, 1, 1, 0.9, 0],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {f.kind === "petal" ? (
            <Petal color={f.color} />
          ) : f.kind === "rose" ? (
            <Rose color={f.color} />
          ) : (
            <Marigold color={f.color} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
