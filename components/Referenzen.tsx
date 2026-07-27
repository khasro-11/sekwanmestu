import Reveal from "./Reveal";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { factChips } from "@/lib/content";

export default function Referenzen() {
  return (
    <section id="galerie" className="section section--bordered">
      <div className="container">
        <Reveal className="section__head" as="div">
          <span className="eyebrow">Unsere Arbeit spricht für sich</span>
          <h2 className="section-heading">
            Ergebnisse, die man sieht – und die bleiben.
          </h2>
          <p className="section-lead">
            Ein Auszug aus abgeschlossenen Objekten in Solingen, Wuppertal,
            Düsseldorf und Köln.
          </p>
        </Reveal>

        <Reveal className="ba-card">
          <BeforeAfterSlider />
          <div className="ba-copy">
            <h3>Vorher / Nachher</h3>
            <p>
              Ziehen Sie den Regler, um den Unterschied zu sehen. Gleiche Fläche,
              gleicher Blickwinkel – nach einer Grundreinigung durch unser Team.
            </p>
            <a href="#angebot">
              Ähnliches Ergebnis anfragen <span>→</span>
            </a>
          </div>
        </Reveal>

        <div className="fact-chips">
          {factChips.map((chip) => (
            <span key={chip} className="fact-chip">
              <span className="check">✓</span>
              {chip}
            </span>
          ))}
        </div>

        <div className="cta-band">
          <p>Überzeugen Sie sich selbst von unserer Qualität.</p>
          <a href="#angebot" className="btn btn--primary">
            Jetzt kostenloses Angebot anfordern
          </a>
        </div>
      </div>
    </section>
  );
}
