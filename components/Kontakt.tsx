import { CONTACT } from "@/lib/content";

export default function Kontakt() {
  return (
    <section id="kontakt" className="kontakt">
      <div className="container kontakt-grid">
        <div className="kontakt-text">
          <h2>Sprechen wir über Ihr Objekt.</h2>
          <p>
            Rufen Sie an oder schreiben Sie uns – Sie erreichen direkt einen
            Ansprechpartner, kein Callcenter.
          </p>
          <div className="kontakt-actions">
            <a href={CONTACT.phoneHref} className="btn-phone">
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
        <div className="kontakt-cards">
          <div className="kontakt-card">
            <span className="kontakt-card__label">Geschäftsführung</span>
            <span className="kontakt-card__name">{CONTACT.founder.name}</span>
            <a href={CONTACT.founder.phoneHref}>{CONTACT.founder.phone}</a>
            <a href={`mailto:${CONTACT.founder.email}`}>{CONTACT.founder.email}</a>
          </div>
          <div className="kontakt-card">
            <span className="kontakt-card__label">Kundenservice</span>
            <a href={CONTACT.service.phoneHref}>{CONTACT.service.phone}</a>
            <a href={`mailto:${CONTACT.service.email}`}>{CONTACT.service.email}</a>
            <a href={`mailto:${CONTACT.service.infoEmail}`}>
              {CONTACT.service.infoEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
