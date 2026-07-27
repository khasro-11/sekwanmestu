import Reveal from "./Reveal";
import { leistungen } from "@/lib/content";

export default function Leistungen() {
  return (
    <section id="leistungen" className="section section--bordered">
      <div className="container">
        <Reveal className="leistungen-head">
          <div className="leistungen-head__text">
            <span className="eyebrow">Serviceleistungen</span>
            <h2 className="section-heading">
              Alles rund um Ihr Gebäude – aus einer Hand.
            </h2>
          </div>
          <a href="#angebot" className="leistungen-head__link">
            Leistung anfragen <span>→</span>
          </a>
        </Reveal>
        <div className="leistungen-grid">
          {leistungen.map((item, i) => (
            <Reveal key={item.title} as="article" className="leistung-card">
              <span className="leistung-card__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
        <p className="leistungen-closing">
          Lassen Sie uns die Reinigung übernehmen, damit Sie sich auf das
          Wesentliche konzentrieren können.{" "}
          <a href="#angebot">Fordern Sie noch heute Ihr individuelles Angebot an</a>{" "}
          – Sie erhalten es innerhalb von 24 Stunden.
        </p>
      </div>
    </section>
  );
}
