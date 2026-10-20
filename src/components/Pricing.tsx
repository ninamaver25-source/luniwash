import { site } from "@/config/site";
import ClaimBadge from "./ClaimBadge";
import WashingMachine from "./WashingMachine";
import { Reveal, SectionTag, Tilt, Val } from "./ui";

export default function Pricing() {
  const { items, note, paymentMethods, tokenValue } = site.pricing;

  return (
    <section id="cenik" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="dot-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      <span className="bubble-red absolute -left-10 top-24 hidden size-40 sm:block animate-float-slow rounded-full opacity-90" aria-hidden />
      <span className="bubble-soap absolute right-[8%] top-16 size-24 animate-float rounded-full" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionTag>Cenik</SectionTag>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[0.95] tracking-tight">
              Preprosto. <span className="text-sticker">Pregledno.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink/65">
              Vse cene za pranje in sušenje na enem mestu, da veš, pri čem si, še preden zaženeš stroj.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex items-end gap-6">
            <ClaimBadge className="w-40 sm:w-48" />
            <div className="hidden w-36 lg:block">
              <WashingMachine label="START" />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <Tilt className="h-full rounded-[2rem]" max={8}>
                <article
                  className={`relative flex h-full flex-col rounded-[2rem] p-8 sm:p-10 ${
                    item.highlight
                      ? "bg-brand text-white shadow-[0_30px_70px_rgba(227,20,27,0.45)]"
                      : "bg-white text-ink shadow-[0_20px_60px_rgba(110,7,11,0.1)] ring-1 ring-brand/10"
                  }`}
                >
                  {item.badge && (
                    <span className="absolute -top-4 right-8 rotate-3 rounded-full bg-ink px-4 py-1.5 font-display text-sm font-semibold uppercase tracking-wider text-white">
                      {item.badge}
                    </span>
                  )}
                  <h3 className={`font-display text-3xl font-bold ${item.highlight ? "" : "text-brand"}`}>{item.title}</h3>
                  <Val className={`mt-2 block ${item.highlight ? "text-white/80" : "text-ink/60"}`}>{item.description}</Val>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-10 [transform:translateZ(50px)]">
                    <div>
                      <Val className="font-display text-6xl font-bold leading-none">{item.price}</Val>
                      <Val className={`mt-2 block text-sm font-semibold uppercase tracking-wider ${item.highlight ? "text-white/70" : "text-ink/50"}`}>
                        {item.unit}
                      </Val>
                    </div>
                    <span
                      className={`mb-1 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ${
                        item.highlight ? "bg-white/15 text-white ring-1 ring-white/30" : "bg-brand-soft text-brand"
                      }`}
                    >
                      <span className={`size-3 rounded-full ${item.highlight ? "bg-white" : "bubble-red"}`} />
                      {item.tokens}
                    </span>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-6 rounded-[2rem] bg-brand-soft p-6 text-ink/80 sm:p-8 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex items-center gap-4">
              <span className="bubble-red grid size-20 shrink-0 place-items-center rounded-full font-display text-2xl font-bold text-white">1 €</span>
              <p className="font-display text-2xl font-bold text-brand">{tokenValue}</p>
            </div>
            <div className="space-y-2 md:border-l md:border-brand/15 md:pl-8">
              <p>
                <span className="font-display font-semibold text-brand">Plačilo: </span>
                <Val>{paymentMethods}</Val>
              </p>
              <p className="font-semibold text-ink">
                <Val>{note}</Val>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
