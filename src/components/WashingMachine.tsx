import type { CSSProperties } from "react";

const clothes = [
  { color: "#e3141b", w: 38, h: 22, top: 18, left: 22, r: 20 },
  { color: "#f4f4f6", w: 34, h: 26, top: 50, left: 52, r: -15 },
  { color: "#7fb2e5", w: 30, h: 20, top: 30, left: 58, r: 35 },
  { color: "#ff8c8f", w: 26, h: 18, top: 58, left: 20, r: -30 },
  { color: "#ffffff", w: 22, h: 16, top: 12, left: 50, r: 60 },
];

/**
 * Pure-CSS animated washing machine / dryer. Scales with its container width.
 */
export default function WashingMachine({
  variant = "washer",
  className = "",
  label = "00:42",
}: {
  variant?: "washer" | "dryer";
  className?: string;
  label?: string;
}) {
  const dryer = variant === "dryer";

  return (
    <div aria-hidden className={`@container relative aspect-[5/6] ${className}`}>
      <div
        className="absolute inset-0 rounded-[9cqw] bg-gradient-to-br from-white via-[#f6f6f8] to-[#dcdde3] shadow-[0_3cqw_0_#c3c4cc,0_8cqw_14cqw_rgba(110,7,11,0.22)] ring-1 ring-black/5"
        style={{ animation: "shake 0.35s linear infinite" }}
      >
        {/* control panel */}
        <div className="absolute inset-x-[6%] top-[4.5%] flex h-[14%] items-center justify-between rounded-[4cqw] bg-gradient-to-b from-[#f1f1f4] to-[#e1e2e8] px-[5%] shadow-inner">
          <div className="flex items-center gap-[3cqw]">
            <span className="block size-[9cqw] rounded-full bg-gradient-to-br from-white to-[#c9cad2] shadow-[0_1cqw_2cqw_rgba(0,0,0,0.2)] ring-[0.8cqw] ring-[#d8d9df]">
              <span className="mx-auto mt-[1.2cqw] block h-[3cqw] w-[1cqw] rounded-full bg-brand" />
            </span>
            <span className="flex gap-[1.5cqw]">
              <span className="size-[2.6cqw] rounded-full bg-brand animate-blink" />
              <span className="size-[2.6cqw] rounded-full bg-[#c9cad2]" />
              <span className="size-[2.6cqw] rounded-full bg-[#c9cad2]" />
            </span>
          </div>
          <span className="rounded-[2cqw] bg-ink px-[3cqw] py-[1cqw] font-mono text-[6cqw] font-bold tracking-wider text-[#ff5a5f] shadow-inner">
            {label}
          </span>
        </div>

        {/* door */}
        <div className="absolute left-1/2 top-[57%] aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_200deg,#fafafa,#b9bac2,#ffffff,#9fa0a8,#f2f2f4,#b9bac2,#fafafa)] p-[5%] shadow-[0_2cqw_5cqw_rgba(0,0,0,0.25)]">
          <div className="relative size-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_40%,#2d3e57,#121a29_75%)] shadow-[inset_0_0_6cqw_rgba(0,0,0,0.7)]">
            {/* rotating drum with tumbling clothes */}
            <div className="absolute inset-[4%] animate-spin-drum rounded-full" style={{ animationDuration: dryer ? "3.2s" : "2.4s" }}>
              {clothes.map((c, i) => (
                <span
                  key={i}
                  className="absolute rounded-[40%]"
                  style={{
                    background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)`,
                    width: `${c.w}%`,
                    height: `${c.h}%`,
                    top: `${c.top}%`,
                    left: `${c.left}%`,
                    transform: `rotate(${c.r}deg)`,
                    boxShadow: "inset -2px -3px 6px rgba(0,0,0,0.25)",
                  }}
                />
              ))}
            </div>

            {dryer ? (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,140,60,0.45),transparent_60%)]" />
            ) : (
              <>
                {/* sloshing water */}
                <div
                  className="absolute -inset-x-[20%] bottom-[-8%] h-[50%] rounded-[45%] bg-gradient-to-b from-[#9fd3ffcc] to-[#4f8fd8cc]"
                  style={{ animation: "slosh 2.4s ease-in-out infinite" }}
                />
                {/* suds */}
                {[
                  [18, 48, 16],
                  [36, 44, 12],
                  [56, 47, 18],
                  [74, 45, 11],
                ].map(([l, t, s], i) => (
                  <span
                    key={i}
                    className="bubble-soap absolute rounded-full"
                    style={{
                      left: `${l}%`,
                      top: `${t}%`,
                      width: `${s}%`,
                      height: `${s}%`,
                      animation: `float ${2 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                    } as CSSProperties}
                  />
                ))}
              </>
            )}

            {/* glass reflection */}
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.05)_35%,transparent_60%)]" />
          </div>
          {/* door handle */}
          <span className="absolute right-[-3%] top-1/2 h-[22%] w-[7%] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#e9e9ee] to-[#a9aab2] shadow" />
        </div>

        {/* feet */}
        <span className="absolute -bottom-[2.5%] left-[10%] h-[3%] w-[12%] rounded-b-[2cqw] bg-[#8d8e96]" />
        <span className="absolute -bottom-[2.5%] right-[10%] h-[3%] w-[12%] rounded-b-[2cqw] bg-[#8d8e96]" />
      </div>

      {dryer && (
        <div className="absolute -top-[14%] left-1/2 flex -translate-x-1/2 gap-[6cqw]">
          {[0, 0.5, 1].map((d) => (
            <span
              key={d}
              className="block h-[16cqw] w-[3cqw] rounded-full bg-gradient-to-t from-brand/0 via-brand/60 to-[#ff9a5a]/0"
              style={{ animation: `heat 1.8s ease-out ${d}s infinite` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
