import { site } from "@/config/site";

const items = ["Samopostrežno pranje", site.claim, "Sušenje", "Sveže perilo", "LUNI WASH", "Pralnica"];

export default function Marquee({ reverse = false, tilt = -2 }: { reverse?: boolean; tilt?: number }) {
  const row = [...items, ...items];
  return (
    <div className="relative z-20 -mx-4 py-6" style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="overflow-hidden bg-brand py-4 shadow-[0_20px_50px_rgba(227,20,27,0.35)]">
        <div
          className="flex w-max animate-marquee items-center gap-8"
          style={reverse ? { animationDirection: "reverse" } : undefined}
        >
          {[...row, ...row].map((t, i) => (
            <span key={i} className="flex items-center gap-8 font-display text-2xl font-bold uppercase text-white sm:text-3xl">
              {t}
              <span className="bubble-soap inline-block size-6 rounded-full ring-1 ring-white/60" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
