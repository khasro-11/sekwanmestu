import { CONTACT } from "@/lib/content";

export default function FloatingCta() {
  return (
    <div className="floating-cta">
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="floating-cta__whatsapp"
      >
        ✆
      </a>
      <a href="#angebot" className="floating-cta__pill">
        Angebot anfordern
      </a>
    </div>
  );
}
