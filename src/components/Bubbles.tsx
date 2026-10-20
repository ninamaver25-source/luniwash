import type { CSSProperties } from "react";

type Bubble = { left: number; size: number; delay: number; duration: number; drift: number; red: boolean };

// Deterministic pseudo-random so server and client render identical markup.
function makeBubbles(count: number, seed: number, redRatio: number): Bubble[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    left: rand() * 100,
    size: 14 + rand() * 46,
    delay: rand() * -18,
    duration: 12 + rand() * 12,
    drift: (rand() - 0.5) * 80,
    red: rand() < redRatio,
  }));
}

export default function Bubbles({
  count = 18,
  seed = 7,
  redRatio = 0.3,
  className = "",
}: {
  count?: number;
  seed?: number;
  redRatio?: number;
  className?: string;
}) {
  const bubbles = makeBubbles(count, seed, redRatio);
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className={`absolute -bottom-20 rounded-full ${b.red ? "bubble-red" : "bubble-soap"}`}
          style={
            {
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              animation: `bubble-rise ${b.duration}s linear ${b.delay}s infinite`,
              "--drift": `${b.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
