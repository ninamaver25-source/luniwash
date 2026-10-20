# LUNI WASH — spletna stran

Slovenian one-page website for **LUNI WASH**, a self-service laundromat.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion and Lenis.

## Preview locally

Requires Node.js 20.9+.

```bash
cd ~/Desktop/LUNI-WASH
npm install        # only the first time
npm run dev
```

Open http://localhost:3000. The page reloads automatically as you edit files.

Production preview:

```bash
npm run build
npm run start
```

> Use an up-to-date browser (Chrome 111+, Safari 16.4+, Firefox 128+). Tailwind CSS v4 relies on
> modern CSS, so very old browser versions render gradients and colours incorrectly.

## Editing content

All business information lives in **`src/config/site.ts`**:

| What | Field |
| --- | --- |
| Prices for washing / drying | `pricing.items` |
| Payment methods, price note | `pricing.paymentMethods`, `pricing.note` |
| Address, parking | `location.street`, `location.city`, `location.parking` |
| Google Maps | `location.mapQuery`: e.g. `"Slovenska cesta 1, Ljubljana"` |
| Opening hours | `openingHours` |
| Phone, Instagram | `contact` |
| FAQ | `faq` |

Any text in square brackets, e.g. `"[Cena]"`, is a **placeholder**. It is shown on the page as a
dashed chip so missing information is easy to spot. Replace it with the real value (without brackets).
Placeholder contact details are not clickable; once real values are filled in they become links
(`tel:`, Instagram URL).

## Brand assets

`public/brand/` contains transparent cut-outs generated from the original artwork in
`~/Desktop/LUNI Wash`:

- `logo.png`: the LUNI WASH logo
- `character-girl.png`: the girl character with the washing machine
- `character-boy.png`: the boy character with towels

`src/app/icon.png` is the browser tab icon (made from the logo).

## Structure

```
src/
  app/            layout, global styles, page
  config/site.ts  ← editable content
  components/     Header, Hero, HowItWorks, Services, Pricing, Location, Faq, Contact (+ footer),
                  WashingMachine (animated CSS machine), Bubbles, Marquee, ui (Reveal, Tilt, Val)
```
