import Image from "next/image";
import { isPlaceholder, navLinks, site } from "@/config/site";
import Bubbles from "./Bubbles";
import { Reveal, SectionTag, Tilt, Val } from "./ui";

const channels = [
  {
    label: "Telefon",
    value: site.contact.phone,
    href: (v: string) => `tel:${v.replace(/\s+/g, "")}`,
    icon: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z",
  },
  {
    label: "Instagram",
    value: isPlaceholder(site.contact.instagram) ? site.contact.instagram : `@${site.contact.instagram}`,
    href: (v: string) => `https://www.instagram.com/${v.replace(/^@/, "")}/`,
    icon: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.5-3.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",
  },
];

export default function Contact() {
  return (
    <footer id="kontakt" className="relative isolate overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,#ff4a4f,transparent_45%),radial-gradient(circle_at_0%_100%,#8f0a10,transparent_50%)]" />
      <Bubbles count={12} seed={23} redRatio={0} className="-z-10 opacity-60" />

      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <SectionTag light>Kontakt</SectionTag>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.92] tracking-tight text-sticker-light">
              Imaš kup perila? <br className="hidden sm:block" />
              Mi imamo stroje.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Za vprašanja, pohvale ali predloge smo ti na voljo. Ali pa se kar oglasi pri nas.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((c) => {
                const placeholder = isPlaceholder(c.value);
                const content = (
                  <>
                    <span className="grid size-11 place-items-center rounded-2xl bg-brand text-white">
                      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                        <path d={c.icon} />
                      </svg>
                    </span>
                    <span className="mt-4 block font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                      {c.label}
                    </span>
                    <Val className="mt-1 block break-words font-semibold">{c.value}</Val>
                  </>
                );
                return (
                  <Tilt key={c.label} className="rounded-3xl" max={10}>
                    {placeholder ? (
                      <div className="h-full rounded-3xl bg-white p-5 text-ink shadow-[0_8px_0_#6e070b]">{content}</div>
                    ) : (
                      <a
                        href={c.href(c.value)}
                        target={c.href(c.value).startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block h-full rounded-3xl bg-white p-5 text-ink shadow-[0_8px_0_#6e070b] transition hover:-translate-y-1"
                      >
                        {content}
                      </a>
                    )}
                  </Tilt>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/20 py-10 md:flex-row">
          <a href="#domov" className="rounded-3xl bg-white px-5 py-3 shadow-[0_8px_0_#6e070b] transition hover:-translate-y-1">
            <Image src="/brand/logo.png" alt="LUNI WASH" width={1339} height={1000} className="h-14 w-auto" />
          </a>
          <nav aria-label="Noga strani" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-display font-semibold text-white/80 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-white/70">© {site.name}. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
