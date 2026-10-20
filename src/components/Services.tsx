import Bubbles from "./Bubbles";
import WashingMachine from "./WashingMachine";
import { Reveal, SectionTag, Tilt, Val } from "./ui";

const services = [
  {
    variant: "washer" as const,
    title: "Samopostrežno pranje",
    text: "Izberi stroj, program in temperaturo, vstavi žetone in pritisni START. Detergent, mehčalec in dezinfekcijsko sredstvo stroj doda sam.",
    points: ["Stroji s kapaciteto 10 in 20 kg", "Programi pri 30, 40, 60 in 90 °C", "Detergent in mehčalec vključena v ceno"],
    label: "00:40",
  },
  {
    variant: "dryer" as const,
    title: "Samopostrežno sušenje",
    text: "Ko je pranje končano, perilo prestavi v sušilnik. Domov ga odneseš suhega in pripravljenega za omaro.",
    points: ["2 žetona = 10 minut sušenja", "Vsak dodaten žeton = +5 minut", "Nič več obešanja po stanovanju"],
    label: "00:10",
  },
];

export default function Services() {
  return (
    <section id="storitve" className="relative isolate overflow-hidden bg-brand py-24 text-white sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#ff4a4f,transparent_45%),radial-gradient(circle_at_85%_90%,#8f0a10,transparent_50%)]" />
      <Bubbles count={14} seed={11} redRatio={0} className="-z-10 opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <SectionTag light>Storitve</SectionTag>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[0.95] tracking-tight text-sticker-light">
            Pranje in sušenje. Na tvoj način.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Vse, kar potrebuješ za sveže perilo, na enem mestu. Ti prineseš perilo, stroji pa opravijo težko delo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <Tilt className="rounded-[2.5rem]" max={6}>
                <article className="grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-white p-8 text-ink shadow-[0_40px_80px_rgba(60,0,4,0.35)] sm:grid-cols-[1fr_1.1fr] sm:p-10">
                  <div className="relative mx-auto w-48 pt-8 [transform:translateZ(60px)] sm:w-full sm:max-w-[240px]">
                    <div className="absolute inset-x-6 bottom-[-6%] h-6 rounded-[50%] bg-brand-deep/20 blur-md" />
                    <WashingMachine variant={s.variant} label={s.label} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">{s.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink/65">{s.text}</p>
                    <ul className="mt-6 space-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 font-semibold">
                          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <Val>{p}</Val>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
