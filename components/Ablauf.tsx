import Reveal from "./Reveal";
import { ablaufSteps } from "@/lib/content";
// Ablauf.tsx
export default function Ablauf() {
  return (
    <section id="ablauf" className="ablauf section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">So funktioniert&apos;s</span>
          <h2 className="section-heading">
            In fünf Schritten zur sauberen Immobilie.
          </h2>
          <p className="section-lead">
            Vom ersten Kontakt bis zum ersten Reinigungseinsatz vergehen in der
            Regel nur wenige Tage.
          </p>
        </Reveal>
        <div className="ablauf-grid">
          {ablaufSteps.map((step, i) => (
            <Reveal
              key={step.title}
              className={`ablauf-step${i === ablaufSteps.length - 1 ? " ablauf-step--last" : ""}`}
            >
              <span className="ablauf-step__label">
                SCHRITT {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
