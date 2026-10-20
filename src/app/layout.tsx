import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luniwash.si"),
  title: "LUNI WASH — Samopostrežna pralnica",
  description:
    "LUNI WASH je sodobna samopostrežna pralnica. Perilo se ne bo opralo samo. No, skoraj. Samopostrežno pranje in sušenje.",
  openGraph: {
    title: "LUNI WASH — Samopostrežna pralnica",
    description: "Perilo se ne bo opralo samo. No, skoraj.",
    locale: "sl_SI",
    type: "website",
    images: ["/brand/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#e3141b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sl" className={`${fredoka.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-full">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
