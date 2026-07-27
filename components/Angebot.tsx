import Reveal from "./Reveal";
import AngebotForm from "./AngebotForm";

export default function Angebot() {
  return (
    <section id="angebot" className="section" style={{ background: "#fff", borderTop: "1px solid var(--hairline)" }}>
      <div className="container" style={{ maxWidth: 1080 }}>
        <Reveal className="section__head" as="div" >
          <span className="eyebrow">Angebotsformular</span>
          <h2 className="section-heading">
            Ihr individuelles Angebot – kostenlos und unverbindlich.
          </h2>
          <p className="section-lead">
            Drei kurze Schritte, etwa zwei Minuten. Sie erhalten Ihr
            maßgeschneidertes Angebot innerhalb von 24 Stunden.
          </p>
        </Reveal>

        <div className="angebot-card">
          <AngebotForm />
        </div>
      </div>
    </section>
  );
}
