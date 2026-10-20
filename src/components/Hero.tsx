"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Bubbles from "./Bubbles";
import { SectionTag } from "./ui";
import { site } from "@/config/site";

const line1 = ["PERILO", "SE", "NE", "BO", "OPRALO", "SAMO."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // pointer parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const girlX = useTransform(sx, (v) => v * -18);
  const girlY = useTransform(sy, (v) => v * -12);
  const boyX = useTransform(sx, (v) => v * 26);
  const boyY = useTransform(sy, (v) => v * 16);
  const blobX = useTransform(sx, (v) => v * 10);
  const sceneRotY = useTransform(sx, (v) => v * 6);
  const sceneRotX = useTransform(sy, (v) => v * -4);

  // scroll parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="domov"
      ref={ref}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
      className="relative isolate overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:min-h-[100svh] lg:pb-0"
    >
      <div className="dot-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <Bubbles count={16} seed={3} className="-z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-4">
        <motion.div style={reduce ? undefined : { y: textY, opacity: fade }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTag>Samopostrežna pralnica</SectionTag>
          </motion.div>

          <h1 className="mt-6 font-display font-bold leading-[0.92] tracking-tight [perspective:800px]">
            <span className="block text-[clamp(2.5rem,6.2vw,5.6rem)] text-ink">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  className="mr-[0.22em] inline-block origin-bottom"
                  initial={{ opacity: 0, y: 60, rotateX: -70 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="mt-3 inline-block text-[clamp(2.9rem,7.8vw,7rem)] text-sticker"
              initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 160, damping: 11, delay: 0.75 }}
            >
              <span className="inline-block animate-wobble">NO, SKORAJ.</span>
            </motion.span>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Prinesite perilo, izberite stroj in pritisnite start. Za pranje in sušenje poskrbijo naši stroji,
            vi pa medtem uživajte v prostem času.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
          >
            <a href="#kako-deluje" className="btn-3d rounded-full bg-brand px-7 py-4 font-display text-lg font-semibold text-white">
              Kako deluje?
            </a>
            <a
              href="#cenik"
              className="rounded-full border-2 border-brand/20 bg-white px-7 py-4 font-display text-lg font-semibold text-brand transition hover:border-brand hover:bg-brand-soft"
            >
              Poglej cenik
            </a>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            {[
              site.claim,
              `Vsak dan ${site.openingHours[0].hours}`,
              `${site.location.street}, ${site.location.city.replace(/^\d+\s*/, "")}`,
              "Detergent vključen v ceno",
            ].map((fact) => (
              <li
                key={fact}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                  fact === site.claim
                    ? "btn-3d bg-brand text-white"
                    : "bg-white text-ink/80 shadow-[0_6px_20px_rgba(110,7,11,0.08)] ring-1 ring-brand/10"
                }`}
              >
                <span className={`size-2.5 rounded-full ${fact === site.claim ? "bg-white" : "bg-brand"}`} />
                {fact}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* character scene */}
        <motion.div
          style={reduce ? undefined : { y: sceneY, rotateY: sceneRotY, rotateX: sceneRotX, transformPerspective: 1200 }}
          className="relative mx-auto aspect-[1/1] w-full max-w-[640px] [transform-style:preserve-3d]"
        >
          <motion.div
            style={{ x: blobX }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}
            className="absolute left-[8%] top-[10%] aspect-square w-[82%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff4a4f,#e3141b_55%,#a50d13)] shadow-[inset_-30px_-40px_80px_rgba(80,0,4,0.35),0_40px_80px_rgba(227,20,27,0.35)]"
          >
            <span className="absolute left-[18%] top-[14%] h-[16%] w-[22%] rotate-[-30deg] rounded-full bg-white/50 blur-[2px]" />
          </motion.div>

          <span className="bubble-red absolute right-[4%] top-[2%] size-16 animate-float rounded-full sm:size-20" />
          <span className="bubble-red absolute left-[2%] top-[30%] size-9 animate-float-slow rounded-full" />
          <span className="bubble-soap absolute right-[18%] top-[22%] size-12 animate-float-slow rounded-full" />

          <motion.div
            style={{ x: girlX, y: girlY }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-[-4%] w-[72%]"
          >
            <Image
              src="/brand/character-girl.png"
              alt="LUNI WASH junakinja s kozarcem v roki se naslanja na pralni stroj"
              width={1318}
              height={1600}
              priority
              sizes="(min-width: 1024px) 460px, 70vw"
              className="h-auto w-full drop-shadow-[0_30px_30px_rgba(110,7,11,0.25)]"
            />
          </motion.div>

          <motion.div
            style={{ x: boyX, y: boyY }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 right-[-2%] w-[44%]"
          >
            <Image
              src="/brand/character-boy.png"
              alt="LUNI WASH junak s kupom sveže opranih brisač"
              width={880}
              height={1600}
              priority
              sizes="(min-width: 1024px) 280px, 44vw"
              className="h-auto w-full drop-shadow-[0_30px_30px_rgba(110,7,11,0.25)]"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#kako-deluje"
        aria-label="Pomakni se navzdol"
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-brand lg:flex"
      >
        Drsi
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-brand/40 pt-1.5">
          <motion.span
            className="block h-2 w-1 rounded-full bg-brand"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </span>
      </motion.a>
    </section>
  );
}
