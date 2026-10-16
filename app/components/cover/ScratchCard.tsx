"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ScratchCardProps = {
  /** What's hidden under the foil. */
  children: ReactNode;
  /** Called once, the moment enough foil is scratched away (or the card is revealed by key/tap). */
  onReveal: () => void;
  /** Show the date without scratching, e.g. from a "skip" link (onReveal is not called). */
  forceReveal?: boolean;
};

/** Share of the foil that must be cleared before the rest dissolves on its own. */
const REVEAL_AT = 0.55;
const BRUSH = 18;

const SPARKS = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  return { id: i, x: Math.cos(angle) * 130, y: Math.sin(angle) * 70 };
});

/**
 * A gold scratch-off panel drawn on a canvas. Scratching erases the foil
 * (destination-out); once ~55% is cleared the remaining foil fades away.
 */
export default function ScratchCard({
  children,
  onReveal,
  forceReveal,
}: ScratchCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const last = useRef<{ x: number; y: number } | null>(null);
  const moves = useRef(0);
  const [scratchedOff, setScratchedOff] = useState(false);
  // Revealed by scratching, or from outside via `forceReveal` (the skip link).
  const revealed = scratchedOff || !!forceReveal;

  const done = useRef(false);

  // Runs from event handlers only, so it's safe to notify the parent here.
  const reveal = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setScratchedOff(true);
    onReveal();
  }, [onReveal]);

  // Paint the foil, and repaint it if the card changes size before it's scratched.
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const paint = () => {
      const { width, height } = wrap.getBoundingClientRect();
      if (!width || !height) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";

      // Champagne-gold foil
      const foil = ctx.createLinearGradient(0, 0, width, height);
      foil.addColorStop(0, "#a8803f");
      foil.addColorStop(0.3, "#e6cc96");
      foil.addColorStop(0.5, "#fbf2dc");
      foil.addColorStop(0.7, "#dcbc80");
      foil.addColorStop(1, "#9c7436");
      ctx.fillStyle = foil;
      ctx.fillRect(0, 0, width, height);

      // Fine brushed-metal grain
      ctx.strokeStyle = "rgba(255,255,255,.12)";
      ctx.lineWidth = 0.6;
      for (let x = -height; x < width; x += 4) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height, height);
        ctx.stroke();
      }

      // A light dusting of glitter
      for (let i = 0; i < 40; i++) {
        const x = (Math.sin(i * 91.7) * 0.5 + 0.5) * width;
        const y = (Math.sin(i * 47.3 + 1) * 0.5 + 0.5) * height;
        ctx.fillStyle = "rgba(255,255,255,.7)";
        ctx.beginPath();
        ctx.arc(x, y, i % 4 === 0 ? 1.2 : 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      // Instruction
      const family = getComputedStyle(document.body).fontFamily;
      ctx.fillStyle = "#5b1a12";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `700 11px ${family}`;
      ctx.fillText(
        "S C R A T C H   T O   R E V E A L",
        width / 2,
        height / 2 - 9,
      );
      ctx.font = `italic 500 15px ${family}`;
      ctx.fillText("the date", width / 2, height / 2 + 8);
      // Ornament under the text
      ctx.strokeStyle = "rgba(91,26,18,.55)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 40, height / 2 + 22);
      ctx.lineTo(width / 2 - 7, height / 2 + 22);
      ctx.moveTo(width / 2 + 7, height / 2 + 22);
      ctx.lineTo(width / 2 + 40, height / 2 + 22);
      ctx.stroke();
      ctx.font = `9px ${family}`;
      ctx.fillText("✦", width / 2, height / 2 + 22);
    };

    let painted = false;
    const observer = new ResizeObserver(() => {
      if (!painted || moves.current === 0) {
        paint();
        painted = true;
      }
    });
    observer.observe(wrap);
    // Repaint once the web fonts are in, so the instruction uses them.
    document.fonts?.ready.then(() => moves.current === 0 && paint());
    return () => observer.disconnect();
  }, []);

  const clearedShare = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return 0;
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    let total = 0;
    // Sample every 16th pixel — plenty accurate and cheap.
    for (let i = 3; i < data.length; i += 64) {
      total++;
      if (data[i] < 40) clear++;
    }
    return total ? clear / total : 0;
  };

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = BRUSH * 2;
    ctx.beginPath();
    const from = last.current ?? point;
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    last.current = point;

    if (++moves.current % 8 === 0 && clearedShare() >= REVEAL_AT) reveal();
  };

  return (
    <div className="relative mx-auto w-full max-w-[16rem]">
      {/* Gold gradient frame */}
      <div className="rounded-[0.9rem] bg-gradient-to-br from-[#f3e2b8] via-[#c9a462] to-[#8a6430] p-px shadow-[0_10px_35px_rgba(0,0,0,.45)]">
        <div
          ref={wrapRef}
          className="relative overflow-hidden rounded-[0.85rem] bg-[#1a0a04]/90 px-5 py-2.5"
        >
          {/* Fine inner hairline and corner diamonds, like a printed card */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-2 rounded-[0.6rem] border border-[#c9a462]/40"
          />
          {[
            "left-1.5 top-1.5",
            "right-1.5 top-1.5",
            "bottom-1.5 left-1.5",
            "bottom-1.5 right-1.5",
          ].map((pos) => (
            <span
              key={pos}
              aria-hidden
              className={`pointer-events-none absolute h-1.5 w-1.5 rotate-45 bg-[#c9a462] ${pos}`}
            />
          ))}

          <div className="relative">{children}</div>

          <canvas
            ref={canvasRef}
            role="button"
            tabIndex={revealed ? -1 : 0}
            aria-label="Scratch card hiding the wedding date. Press Enter to reveal."
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                reveal();
              }
            }}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              last.current = null;
              scratch(e);
            }}
            onPointerMove={(e) => {
              if (e.buttons || e.pointerType === "touch") scratch(e);
            }}
            onPointerUp={() => {
              last.current = null;
              if (clearedShare() >= REVEAL_AT) reveal();
            }}
            className={`absolute inset-0 h-full w-full cursor-grab touch-none rounded-[0.85rem] transition-opacity duration-700 active:cursor-grabbing ${
              revealed ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          />

          {/* Shine that sweeps across the foil to invite a scratch. */}
          {!revealed && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/40 blur-md"
              style={{ animation: "shimmer-sweep 2.8s ease-in-out infinite" }}
            />
          )}
        </div>
      </div>

      {/* Sparkle burst on reveal */}
      <AnimatePresence>
        {revealed && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            {SPARKS.map((s) => (
              <motion.span
                key={s.id}
                className="absolute text-lg text-gold-light"
                initial={{ x: 0, y: 0, scale: 0.4, opacity: 1 }}
                animate={{ x: s.x, y: s.y, scale: 1.2, opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              >
                ✦
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
