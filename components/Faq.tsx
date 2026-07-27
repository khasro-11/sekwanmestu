"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { faqItems } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: 920 }}>
        <Reveal className="section__head" as="div" >
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="section-heading">
            Was Kunden uns vor der Beauftragung fragen.
          </h2>
        </Reveal>
        <div className="faq-list">
          {faqItems.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <div key={item.q} className="faq-item">
                <button
                  type="button"
                  className="faq-item__btn"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span className="faq-item__indicator" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="faq-item__body">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
