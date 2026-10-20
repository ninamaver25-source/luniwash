"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? "bg-white/92 shadow-[0_10px_40px_rgba(110,7,11,0.12)] ring-1 ring-brand/10 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a href="#domov" className="flex items-center gap-2" aria-label="LUNI WASH — na vrh strani">
          <Image src="/brand/logo.png" alt="LUNI WASH" width={1339} height={1000} priority className="h-11 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Glavna navigacija">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 font-display text-[15px] font-semibold text-ink/80 transition hover:bg-brand-soft hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#lokacija"
            className="btn-3d hidden rounded-full bg-brand px-5 py-2.5 font-display text-[15px] font-semibold text-white sm:inline-flex"
          >
            Poišči nas
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full bg-brand text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Zapri meni" : "Odpri meni"}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl bg-white/95 p-3 shadow-[0_20px_60px_rgba(110,7,11,0.18)] ring-1 ring-brand/10 backdrop-blur-xl lg:hidden"
            aria-label="Mobilna navigacija"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-xl font-semibold text-ink transition hover:bg-brand-soft hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
