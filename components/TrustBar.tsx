const items = [
  "Angebot innerhalb von 24 Stunden",
  "Versichert & nach DIN-Standards",
  "Feste Ansprechpartner",
  "Umweltschonende Reinigungsmittel",
];

export default function TrustBar() {
  return (
    <section className="trustbar">
      <div className="container trustbar__inner">
        {items.map((item) => (
          <span key={item} className="trustbar__item">
            <span className="check">✓</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
