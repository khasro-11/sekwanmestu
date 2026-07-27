import { CONTACT } from "@/lib/content";

const leistungenLinks = [
  "Unterhaltsreinigung",
  "Grundreinigung",
  "Treppenhausreinigung",
  "Büro- & Praxisreinigung",
  "Glas- & Bauendreinigung",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid" style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="footer-brand">
          <span className="footer-brand__logo">
            <span>B&amp;D</span>
            <span>B&amp;D Gebäudereinigung</span>
          </span>
          <p>
            Professionelle Gebäudereinigung für Büros, Praxen, Treppenhäuser und
            Gewerbeflächen in ganz NRW.
          </p>
        </div>
        <div className="footer-col">
          <span className="footer-col__title">Leistungen</span>
          {leistungenLinks.map((label) => (
            <a key={label} href="#leistungen">
              {label}
            </a>
          ))}
        </div>
        <div className="footer-col">
          <span className="footer-col__title">Anschrift</span>
          <span className="addr">
            B&amp;D Gebäudereinigung
            <br />
            {CONTACT.address.street}
            <br />
            {CONTACT.address.city}
          </span>
          <a href="#angebot" className="footer-cta">
            Angebot anfordern →
          </a>
        </div>
        <div className="footer-col">
          <span className="footer-col__title">Rechtliches &amp; Social</span>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener">
            WhatsApp
          </a>
          <a href="#kontakt">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 B&amp;D Gebäudereinigung · Solingen</span>
        <span>Gebäudereinigung in Solingen, Wuppertal, Düsseldorf &amp; Köln</span>
      </div>
    </footer>
  );
}
