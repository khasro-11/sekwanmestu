import Reveal from "./Reveal";
import { vorteile } from "@/lib/content";

export default function Vorteile() {
  return (
    <section id="vorteile" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Warum B&amp;D</span>
          <h2 className="section-heading">
            Reinigung ist Vertrauenssache – wir machen sie planbar.
          </h2>
          <p className="section-lead">
            Sie bekommen kein Standardpaket, sondern ein Reinigungskonzept, das auf
            Ihr Objekt, Ihre Frequenz und Ihr Budget abgestimmt ist.
          </p>
        </Reveal>
        <div className="vorteile-grid">
          {vorteile.map((item) => (
            <Reveal key={item.title} className="vorteile-card">
              <span className="vorteile-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
