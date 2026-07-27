"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/content";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#galerie", label: "Referenzen" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#start" className="header__brand">
          <span className="header__logo">B&amp;D</span>
          <span className="header__brand-text">
            <span className="header__brand-name">B&amp;D Gebäudereinigung</span>
            <span className="header__brand-sub">Solingen · NRW</span>
          </span>
        </a>

        <nav className="header__nav" data-open={open}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={CONTACT.phoneHref} className="header__phone">
            {CONTACT.phone}
          </a>
          <a href="#angebot" className="header__cta" onClick={() => setOpen(false)}>
            Angebot anfordern
          </a>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
