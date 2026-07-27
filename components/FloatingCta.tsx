import { CONTACT } from "@/lib/content";

export default function FloatingCta() {
  return (
    <div className="floating-cta">
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener"
        aria-label="Per WhatsApp schreiben"
        className="floating-cta__whatsapp"
      >
        <span className="floating-cta__whatsapp-icon">
          <span className="floating-cta__whatsapp-bubble">
            <span className="floating-cta__whatsapp-dot" />
            <span className="floating-cta__whatsapp-dot" />
            <span className="floating-cta__whatsapp-dot" />
          </span>
        </span>
        <span className="floating-cta__whatsapp-label">
          <span>WhatsApp</span>
          <span className="floating-cta__whatsapp-sub">Antwort in ca. 15 Min.</span>
        </span>
      </a>
      <a href="#angebot" className="floating-cta__pill">
        Angebot anfordern
      </a>
    </div>
  );
}
