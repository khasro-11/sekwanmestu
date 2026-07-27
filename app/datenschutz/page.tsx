import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | B&D Gebäudereinigung",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
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
          Platzhaltertext — vor Veröffentlichung von einem Datenschutzbeauftragten
          oder Rechtsanwalt prüfen lassen, insbesondere sobald ein
          Formular-Backend, Analytics oder Cookies hinzukommen.
        </p>
        <h1>Datenschutzerklärung</h1>
        <h2>Verantwortlicher</h2>
        <p>
          B&amp;D Gebäudereinigung, Kurfürstenstraße 36, 42655 Solingen,{" "}
          <a href="mailto:info@bd-gebäudereinigung.com">
            info@bd-gebäudereinigung.com
          </a>
        </p>
        <h2>Verarbeitung Ihrer Anfrage über das Angebotsformular</h2>
        <p>
          Wenn Sie über unser Angebotsformular eine Anfrage stellen, verarbeiten
          wir die von Ihnen eingegebenen Daten (u. a. Name, Kontaktdaten,
          Objektadresse, gewünschte Leistungen) ausschließlich zur Bearbeitung
          Ihrer Anfrage und Erstellung eines Angebots. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
        </p>
        <h2>Speicherdauer</h2>
        <p>
          Wir speichern Ihre Daten nur so lange, wie es zur Bearbeitung Ihrer
          Anfrage erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich
          hierzu an die oben genannte Kontaktadresse.
        </p>
      </main>
      <Footer />
    </div>
  );
}
