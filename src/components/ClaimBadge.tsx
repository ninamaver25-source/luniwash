import { site } from "@/config/site";

// 24-point starburst outline, computed once.
const points = Array.from({ length: 48 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 48 - Math.PI / 2;
  const r = i % 2 === 0 ? 50 : 43;
  return `${(50 + r * Math.cos(angle)).toFixed(2)},${(50 + r * Math.sin(angle)).toFixed(2)}`;
}).join(" ");

/** Rotating sticker-style starburst carrying the price claim from the config. */
export default function ClaimBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square -rotate-12 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        className="absolute inset-0 size-full drop-shadow-[0_14px_24px_rgba(227,20,27,0.45)]"
        style={{ animation: "spin 24s linear infinite" }}
      >
        <polygon points={points} fill="#e3141b" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="0.8" strokeDasharray="2 2" />
      </svg>
      <p className="absolute inset-[18%] grid place-items-center text-center font-display font-bold uppercase leading-[0.95] text-white">
        <span className="animate-wobble text-[clamp(0.85rem,1.6vw,1.15rem)]">{site.claim}</span>
      </p>
    </div>
  );
}
