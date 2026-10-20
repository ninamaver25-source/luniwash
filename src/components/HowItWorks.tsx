"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, SectionTag, Tilt } from "./ui";

const steps = [
  {
    title: "Prinesi perilo",
    text: "Prinesi perilo in v žetonomatu zamenjaj denar za žetone (1 žeton = 1 €). Ne pozabi izprazniti žepov!",
    icon: (
      <svg viewBox="0 0 64 64" className="size-full" fill="none">
        <path d="M12 26h40l-4 28a4 4 0 0 1-4 3.5H20a4 4 0 0 1-4-3.5L12 26Z" fill="#fff" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M8 26h48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M22 26c0-8 4-14 10-14s10 6 10 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M22 36v12M32 36v12M42 36v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
  },
  {
    title: "Izberi program",
    text: "Vstavi perilo v prost stroj ter izberi program in temperaturo: 30, 40, 60 ali 90 °C.",
    icon: (
      <svg viewBox="0 0 64 64" className="size-full" fill="none">
        <rect x="10" y="6" width="44" height="52" rx="8" fill="#fff" stroke="currentColor" strokeWidth="3.5" />
        <path d="M10 18h44" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="18" cy="12" r="2.5" fill="currentColor" />
        <circle cx="32" cy="38" r="13" stroke="currentColor" strokeWidth="3.5" />
        <path d="M24 40c3-3 6 3 9 0s5-3 7 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Žetoni in START",
    text: "Vstavi žetone in pritisni START. Detergent in mehčalec stroj doda sam, po približno 40 minutah je perilo čisto.",
    icon: (
      <svg viewBox="0 0 64 64" className="size-full" fill="none">
        <path d="M14 22h36v8H14zM12 30h40v8H12zM14 38h36v8H14z" fill="#fff" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M44 10l2.5 5 5 2.5-5 2.5L44 25l-2.5-5-5-2.5 5-2.5L44 10Z" fill="currentColor" />
        <path d="M18 52h28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const boyY = useTransform(scrollYProgress, [0, 1], [120, -80]);
  const boyRotate = useTransform(scrollYProgress, [0, 1], [8, -6]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);

  return (
    <section id="kako-deluje" ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionTag>Kako deluje</SectionTag>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[0.95] tracking-tight">
              Trije koraki do <span className="text-sticker">čistega perila</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink/65">
              Brez zapletov in brez navodil na desetih straneh. Če znaš pritisniti gumb, znaš uporabljati LUNI WASH.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3 lg:pr-56">
          <motion.div
            aria-hidden
            style={{ scaleX: lineScale }}
            className="absolute left-[8%] right-[8%] top-16 hidden h-1 origin-left rounded-full bg-[repeating-linear-gradient(90deg,#e3141b_0_14px,transparent_14px_26px)] md:block lg:right-[calc(8%+14rem)]"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <Tilt className="h-full rounded-[2rem]">
                <article className="relative h-full rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(110,7,11,0.1)] ring-1 ring-brand/10">
                  <div className="flex items-center justify-between">
                    <span className="grid size-20 place-items-center rounded-3xl bg-brand-soft p-4 text-brand [transform:translateZ(40px)]">
                      {s.icon}
                    </span>
                    <span className="font-display text-7xl font-bold text-brand/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink/65">{s.text}</p>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>

      <motion.div
        style={{ y: boyY, rotate: boyRotate }}
        className="pointer-events-none absolute bottom-0 right-[-2rem] hidden w-64 lg:block xl:right-4 xl:w-72"
      >
        <Image
          src="/brand/character-boy.png"
          alt=""
          width={880}
          height={1600}
          sizes="288px"
          className="h-auto w-full drop-shadow-[0_25px_25px_rgba(110,7,11,0.2)]"
        />
      </motion.div>
    </section>
  );
}
