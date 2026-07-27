import Image from "next/image";
import Reveal from "./Reveal";

const tiles = [
  {
    src: "/ueber-uns/sanitaerreinigung.png",
    label: "Sanitärreinigung / Waschbecken",
    offset: false,
  },
  {
    src: "/ueber-uns/bettenmachen.png",
    label: "Bettenmachen im Hotelzimmer",
    offset: true,
  },
  {
    src: "/ueber-uns/reinigungskraft-flur.png",
    label: "Reinigungskraft im Einsatz",
    offset: false,
  },
  {
    src: "/ueber-uns/arbeitsgeraete.png",
    label: "Professionelle Arbeitsgeräte",
    offset: true,
  },
];

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="section">
      <div className="container ueberuns-grid">
        <Reveal className="ueberuns-text">
          <span className="eyebrow">Über uns</span>
          <h2>Ihre zuverlässige Gebäudereinigung in NRW</h2>
          <p>
            B&amp;D Gebäudereinigung ist ein inhabergeführtes Reinigungsunternehmen
            mit Sitz in Solingen. Wir bieten maßgeschneiderte Reinigungslösungen,
            die durch Qualität und Zuverlässigkeit geprägt sind – für Büros,
            Gewerbeeinheiten, Praxen und Privathaushalte in ganz
            Nordrhein-Westfalen.
          </p>
          <p>
            Mit modernster Technik und einem geschulten Team sorgen wir für
            Sauberkeit auf höchstem Niveau. Ob regelmäßige Unterhaltsreinigung oder
            anspruchsvolle Sanitärreinigung: Wir setzen Ihre Erwartungen präzise
            um. Sauberkeit ist für uns nicht nur ein Job, sondern eine
            Leidenschaft.
          </p>
          <div className="founder-card">
            <span className="founder-card__portrait" aria-hidden="true">
              SM
            </span>
            <span className="founder-card__name">
              <strong>Sakwan Musto</strong>
              <span>Geschäftsführung · Ihr direkter Ansprechpartner</span>
            </span>
          </div>
        </Reveal>
        <Reveal className="ueberuns-tiles">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`ueberuns-tile${tile.offset ? " ueberuns-tile--offset" : ""}`}
            >
              <Image
                src={tile.src}
                alt={tile.label}
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 320px"
                className="ueberuns-tile__image"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
