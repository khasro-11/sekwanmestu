"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  leistungOptions,
  objektOptions,
  frequenzOptions,
} from "@/lib/content";

type Values = {
  leistung: string[];
  kundentyp: string;
  objekt: string[];
  flaeche: string;
  frequenz: string;
  start: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  adresse: string;
  nachricht: string;
  datenschutz: boolean;
};

const initialValues: Values = {
  leistung: [],
  kundentyp: "",
  objekt: [],
  flaeche: "",
  frequenz: "",
  start: "",
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  adresse: "",
  nachricht: "",
  datenschutz: false,
};

const stepNames: Record<number, string> = {
  1: "Leistungen & Kundentyp",
  2: "Objekt & Umfang",
  3: "Ihre Kontaktdaten",
};

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function AngebotForm() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState<Values>(initialValues);
  const [invalid, setInvalid] = useState<Set<string>>(new Set());

  const progress = useMemo(() => Math.round((step / 3) * 100), [step]);

  function validateStep(): boolean {
    const bad = new Set<string>();
    if (step === 1) {
      if (values.leistung.length === 0) bad.add("leistung");
      if (!values.kundentyp) bad.add("kundentyp");
    } else if (step === 2) {
      if (values.objekt.length === 0) bad.add("objekt");
      if (!values.flaeche || Number(values.flaeche) < 1) bad.add("flaeche");
      if (!values.frequenz) bad.add("frequenz");
    } else {
      if (!values.vorname.trim()) bad.add("vorname");
      if (!values.nachname.trim()) bad.add("nachname");
      if (!values.email.trim()) bad.add("email");
      if (!values.adresse.trim()) bad.add("adresse");
      if (!values.datenschutz) bad.add("datenschutz");
    }
    setInvalid(bad);
    return bad.size === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;
    if (step < 3) {
      setStep((s) => s + 1);
      const sec = document.getElementById("angebot");
      if (sec) {
        window.scrollTo({
          top: sec.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    } else {
      // No submission backend is wired up yet — hook this up to a real
      // endpoint (e.g. a Vercel Function calling Resend/Formspree) before
      // launch, plus honeypot + rate limiting on the server side.
      setSent(true);
    }
  }

  function onBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  function onReset() {
    setSent(false);
    setStep(1);
    setValues(initialValues);
    setInvalid(new Set());
  }

  if (sent) {
    return (
      <div className="angebot-success">
        <span className="angebot-success__icon" aria-hidden="true">
          ✓
        </span>
        <h3>Vielen Dank für Ihre Anfrage!</h3>
        <p>
          Wir haben Ihre Angaben erhalten und melden uns innerhalb von 24 Stunden
          mit Ihrem individuellen Angebot. Bei dringenden Anliegen erreichen Sie
          uns unter{" "}
          <a href="tel:+4915561320685" style={{ fontWeight: 700 }}>
            +49 15561 320685
          </a>
          .
        </p>
        <button type="button" onClick={onReset}>
          Weitere Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="angebot-progress-row">
        <span className="step-label">Schritt {step} von 3</span>
        <span className="step-name">{stepNames[step]}</span>
      </div>
      <div className="angebot-progress-track">
        <div className="angebot-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <form className="angebot-form" onSubmit={onSubmit} noValidate>
        {step === 1 && (
          <div className="form-step">
            <fieldset className="form-fieldset">
              <legend>Welche Leistungen benötigen Sie?*</legend>
              <div className="check-grid">
                {leistungOptions.map((opt) => (
                  <label
                    key={opt}
                    className="check-label"
                    data-invalid={invalid.has("leistung") || undefined}
                  >
                    <input
                      type="checkbox"
                      checked={values.leistung.includes(opt)}
                      onChange={() =>
                        setValues((v) => ({ ...v, leistung: toggle(v.leistung, opt) }))
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="form-fieldset">
              <legend>Sind Sie Privatperson oder Unternehmen?*</legend>
              <div className="radio-row">
                {["Privatperson", "Unternehmen"].map((opt) => (
                  <label
                    key={opt}
                    className="check-label"
                    data-invalid={invalid.has("kundentyp") || undefined}
                  >
                    <input
                      type="radio"
                      name="kundentyp"
                      checked={values.kundentyp === opt}
                      onChange={() => setValues((v) => ({ ...v, kundentyp: opt }))}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <fieldset className="form-fieldset">
              <legend>Wo soll gereinigt werden?*</legend>
              <div className="check-grid check-grid--narrow">
                {objektOptions.map((opt) => (
                  <label
                    key={opt}
                    className="check-label"
                    data-invalid={invalid.has("objekt") || undefined}
                  >
                    <input
                      type="checkbox"
                      checked={values.objekt.includes(opt)}
                      onChange={() =>
                        setValues((v) => ({ ...v, objekt: toggle(v.objekt, opt) }))
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="field-grid">
              <label className="field-label">
                Fläche in m²*
                <input
                  type="number"
                  min={1}
                  placeholder="z. B. 350"
                  value={values.flaeche}
                  aria-invalid={invalid.has("flaeche") || undefined}
                  onChange={(e) => setValues((v) => ({ ...v, flaeche: e.target.value }))}
                />
              </label>
              <label className="field-label">
                Reinigungen pro Woche*
                <select
                  value={values.frequenz}
                  aria-invalid={invalid.has("frequenz") || undefined}
                  onChange={(e) => setValues((v) => ({ ...v, frequenz: e.target.value }))}
                >
                  <option value="">Bitte wählen</option>
                  {frequenzOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="field-label">
                Gewünschter Start
                <input
                  type="date"
                  value={values.start}
                  onChange={(e) => setValues((v) => ({ ...v, start: e.target.value }))}
                />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step" style={{ gap: 18 }}>
            <div className="field-grid">
              <label className="field-label">
                Vorname*
                <input
                  type="text"
                  autoComplete="given-name"
                  value={values.vorname}
                  aria-invalid={invalid.has("vorname") || undefined}
                  onChange={(e) => setValues((v) => ({ ...v, vorname: e.target.value }))}
                />
              </label>
              <label className="field-label">
                Nachname*
                <input
                  type="text"
                  autoComplete="family-name"
                  value={values.nachname}
                  aria-invalid={invalid.has("nachname") || undefined}
                  onChange={(e) => setValues((v) => ({ ...v, nachname: e.target.value }))}
                />
              </label>
              <label className="field-label">
                E-Mail-Adresse*
                <input
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  aria-invalid={invalid.has("email") || undefined}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                />
              </label>
              <label className="field-label">
                Telefon
                <input
                  type="tel"
                  autoComplete="tel"
                  value={values.telefon}
                  onChange={(e) => setValues((v) => ({ ...v, telefon: e.target.value }))}
                />
              </label>
            </div>
            <label className="field-label">
              Objektadresse*
              <input
                type="text"
                placeholder="Straße, PLZ, Ort"
                value={values.adresse}
                aria-invalid={invalid.has("adresse") || undefined}
                onChange={(e) => setValues((v) => ({ ...v, adresse: e.target.value }))}
              />
            </label>
            <label className="field-label">
              Ihre Nachricht (optional)
              <textarea
                rows={4}
                placeholder="Besonderheiten, Zugangszeiten, Wünsche …"
                value={values.nachricht}
                onChange={(e) => setValues((v) => ({ ...v, nachricht: e.target.value }))}
              />
            </label>
            <label className="consent-label">
              <input
                type="checkbox"
                checked={values.datenschutz}
                aria-invalid={invalid.has("datenschutz") || undefined}
                onChange={(e) =>
                  setValues((v) => ({ ...v, datenschutz: e.target.checked }))
                }
              />
              <span>
                Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen
                und stimme der Verarbeitung meiner Daten zur Angebotserstellung zu.*
              </span>
            </label>
          </div>
        )}

        {invalid.size > 0 && (
          <div className="form-error">
            Bitte füllen Sie die markierten Pflichtfelder aus.
          </div>
        )}

        <div className="form-nav">
          <button
            type="button"
            className="btn-back"
            onClick={onBack}
            style={{ visibility: step === 1 ? "hidden" : "visible" }}
          >
            Zurück
          </button>
          <button type="submit" className="btn-submit">
            {step === 3 ? "Anfrage absenden" : "Weiter"}
          </button>
        </div>
      </form>
    </div>
  );
}
