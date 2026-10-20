import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Marquee from "@/components/Marquee";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Services />
        <Pricing />
        <Marquee reverse tilt={2} />
        <Location />
        <Faq />
      </main>
      <Contact />
    </>
  );
}
