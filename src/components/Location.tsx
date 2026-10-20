import { isPlaceholder, site } from "@/config/site";
import { Reveal, SectionTag, Tilt, Val } from "./ui";

export default function Location() {
  const { street, city, mapQuery, parking } = site.location;
  const hasMap = mapQuery.trim().length > 0;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <section id="lokacija" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTag>Lokacija</SectionTag>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[0.95] tracking-tight">
            Kje nas <span className="text-sticker">najdeš?</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-6">
            <Tilt className="rounded-[2rem]" max={6}>
              <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(110,7,11,0.1)] ring-1 ring-brand/10">
                <div className="flex items-start gap-4">
                  <PinIcon />
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand">Naslov</h3>
                    <p className="mt-2 font-display text-2xl font-bold leading-snug">
                      <Val>{street}</Val>
                      <br />
                      <Val>{city}</Val>
                    </p>
                    <p className="mt-3 text-ink/60">
                      <Val>{parking}</Val>
                    </p>
                  </div>
                </div>
                {hasMap && (
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d mt-6 inline-flex rounded-full bg-brand px-6 py-3 font-display font-semibold text-white"
                  >
                    Odpri v Google Maps
                  </a>
                )}
              </div>
            </Tilt>

            <Tilt className="rounded-[2rem]" max={6}>
              <div className="rounded-[2rem] bg-ink p-8 text-white shadow-[0_20px_60px_rgba(26,11,12,0.25)]">
                <div className="flex items-center gap-4">
                  <ClockIcon />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6a6f]">Delovni čas</h3>
                </div>
                <dl className="mt-6 divide-y divide-white/10">
                  {site.openingHours.map((h) => (
                    <div key={h.days} className="flex items-center justify-between gap-4 py-3.5">
                      <dt className="text-white/75">{h.days}</dt>
                      <dd className="font-display text-xl font-semibold">
                        <Val>{h.hours}</Val>
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm text-white/60">{site.openingHoursNote}</p>
              </div>
            </Tilt>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(110,7,11,0.15)] ring-1 ring-brand/10">
              {hasMap ? (
                <iframe
                  title="LUNI WASH na Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                  className="absolute inset-0 size-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="dot-grid absolute inset-0 grid place-items-center p-8 text-center">
                  <div>
                    <div className="relative mx-auto w-fit">
                      <span className="absolute left-1/2 top-full size-6 -translate-x-1/2 -translate-y-2 animate-ping rounded-full bg-brand/30" />
                      <div className="animate-float">
                        <PinIcon large />
                      </div>
                    </div>
                    <p className="mt-6 font-display text-2xl font-bold">Zemljevid prihaja kmalu</p>
                    <p className="mx-auto mt-2 max-w-xs text-ink/60">
                      {isPlaceholder(street)
                        ? "Zemljevid Google Maps se prikaže, ko v nastavitvah dodate naslov (mapQuery)."
                        : "Za prikaz zemljevida v nastavitvah izpolnite polje mapQuery."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PinIcon({ large = false }: { large?: boolean }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-[0_8px_0_#6e070b] ${large ? "size-20" : "size-12"}`}>
      <svg viewBox="0 0 24 24" className={large ? "size-10" : "size-6"} fill="currentColor">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
    </span>
  );
}

function ClockIcon() {
  return (
    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    </span>
  );
}
