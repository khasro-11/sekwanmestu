import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="start" className="hero">
      {/* TODO: replace with the real hero photo (cleaning team in a modern
          office, landscape, high-res) — the source asset could not be
          retrieved intact from the design handoff. */}
      <div className="hero__media hero__media--placeholder" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <Reveal className="hero__col">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Einsatzbereit in ganz Nordrhein-Westfalen
          </span>
          <h1 className="hero__title">
            Sauberkeit, die Ihr
            <br />
            Unternehmen repräsentiert.
          </h1>
          <p className="hero__lead">
            B&amp;D Gebäudereinigung übernimmt die professionelle Reinigung Ihrer
            Büros, Praxen, Treppenhäuser und Gewerbeflächen – pünktlich, fachgerecht
            und nach einem Konzept, das zu Ihrem Objekt passt.
          </p>
          <div className="hero__actions">
            <a href="#angebot" className="btn btn--primary">
              Angebot anfordern
              <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </a>
            <a href="#kontakt" className="btn btn--secondary">
              Jetzt Kontakt aufnehmen
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">24 Std.</span>
              <span className="hero__stat-label">bis zu Ihrem Angebot</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">200+</span>
              <span className="hero__stat-label">zufriedene Kunden</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">100 %</span>
              <span className="hero__stat-label">geschultes Fachpersonal</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
