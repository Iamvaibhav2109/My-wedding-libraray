"use client";

import { useSyncExternalStore } from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * The clock is an external system, so it's subscribed to rather than mirrored
 * into state. `getServerSnapshot` returns the target itself, which makes the
 * server render (and the first client render) show all zeros — so hydration
 * always matches, and the real values appear on the first tick.
 */
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

export function useCountdown(target: number): {
  timeLeft: TimeLeft;
  arrived: boolean;
} {
  const now = useSyncExternalStore(
    subscribe,
    // Bucket to whole seconds so the snapshot is stable between ticks.
    () => Math.floor(Date.now() / 1000) * 1000,
    () => target
  );

  const diff = target - now;

  if (diff <= 0) {
    return {
      timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      arrived: now !== target,
    };
  }

  return {
    timeLeft: {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor(diff / 3_600_000) % 24,
      minutes: Math.floor(diff / 60_000) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    },
    arrived: false,
  };
}
