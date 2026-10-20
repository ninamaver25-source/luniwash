"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/config/site";
import { Reveal, SectionTag, Val } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="vprasanja" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTag>Pogosta vprašanja</SectionTag>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[0.95] tracking-tight">
              Vprašaj. <span className="text-sticker">Odgovorimo.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto mt-10 max-w-[340px] sm:max-w-[400px]">
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
              className="absolute -top-2 right-0 z-10 max-w-[200px] rounded-3xl rounded-br-md bg-brand px-5 py-3 font-display text-lg font-semibold leading-tight text-white shadow-[0_6px_0_#6e070b]"
            >
              Prvič v samopostrežni pralnici? Brez skrbi!
            </motion.div>
            <div className="absolute inset-x-[10%] bottom-[4%] top-[25%] -z-0 rounded-full bg-brand-soft" />
            <Image
              src="/brand/character-girl.png"
              alt="LUNI WASH junakinja ob pralnem stroju"
              width={1318}
              height={1600}
              sizes="400px"
              className="relative h-auto w-full"
            />
          </Reveal>
        </div>

        <div className="space-y-4">
          {site.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-3xl transition-colors duration-300 ${
                    isOpen ? "bg-brand text-white shadow-[0_20px_50px_rgba(227,20,27,0.3)]" : "bg-cream text-ink hover:bg-brand-soft"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-xl font-semibold sm:px-8 sm:py-6 sm:text-2xl"
                    >
                      {item.question}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className={`grid size-10 shrink-0 place-items-center rounded-full ${isOpen ? "bg-white text-brand" : "bg-brand text-white"}`}
                      >
                        <svg viewBox="0 0 20 20" className="size-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <path d="M10 3v14M3 10h14" />
                        </svg>
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-lg leading-relaxed text-white/90 sm:px-8 sm:pb-8">
                          <Val>{item.answer}</Val>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
