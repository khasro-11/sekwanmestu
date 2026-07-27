import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | B&D Gebäudereinigung",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="legal">
        <p
          style={{
            background: "var(--tint)",
            border: "1px solid var(--tint-border)",
            borderRadius: 12,
            padding: "14px 18px",
            fontSize: 14,
            color: "var(--text-secondary)",
          }}
        >
          Platzhaltertext — vor Veröffentlichung von einem Rechtsanwalt oder
          Steuerberater prüfen und um die gesetzlich vorgeschriebenen Angaben
          (Handelsregister, USt-IdNr., Aufsichtsbehörde etc.) ergänzen lassen.
        </p>
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          B&amp;D Gebäudereinigung
          <br />
          Kurfürstenstraße 36
          <br />
          42655 Solingen
        </p>
        <h2>Vertreten durch</h2>
        <p>Sakwan Musto (Geschäftsführung)</p>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4915561320685">+49 15561 320685</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@bd-gebäudereinigung.com">
            info@bd-gebäudereinigung.com
          </a>
        </p>
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und
          nicht bereit, an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </main>
      <Footer />
    </div>
  );
}
