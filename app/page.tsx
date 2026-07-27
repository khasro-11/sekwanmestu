import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Vorteile from "@/components/Vorteile";
import Leistungen from "@/components/Leistungen";
import UeberUns from "@/components/UeberUns";
import Ablauf from "@/components/Ablauf";
import Referenzen from "@/components/Referenzen";
import Angebot from "@/components/Angebot";
import Faq from "@/components/Faq";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Vorteile />
        <Leistungen />
        <UeberUns />
        <Ablauf />
        <Referenzen />
        <Angebot />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
