import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.RESEND_EMAIL_DOMAIN;

type AngebotPayload = {
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
  website?: string; // honeypot
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<AngebotPayload>;

  if (body.website) {
    // Honeypot field — silently accept to not tip off bots.
    return Response.json({ ok: true });
  }

  const required: (keyof AngebotPayload)[] = [
    "leistung",
    "kundentyp",
    "objekt",
    "flaeche",
    "frequenz",
    "vorname",
    "nachname",
    "email",
    "adresse",
  ];
  for (const field of required) {
    const value = body[field];
    const missing = Array.isArray(value) ? value.length === 0 : !value;
    if (missing) {
      return Response.json({ error: `Feld "${field}" fehlt.` }, { status: 400 });
    }
  }

  const p = body as AngebotPayload;

  const rows: [string, string][] = [
    ["Leistungen", p.leistung.join(", ")],
    ["Kundentyp", p.kundentyp],
    ["Objekt", p.objekt.join(", ")],
    ["Fläche", `${p.flaeche} m²`],
    ["Reinigungen pro Woche", p.frequenz],
    ["Gewünschter Start", p.start || "–"],
    ["Name", `${p.vorname} ${p.nachname}`],
    ["E-Mail", p.email],
    ["Telefon", p.telefon || "–"],
    ["Objektadresse", p.adresse],
    ["Nachricht", p.nachricht || "–"],
  ];

  const html = `
    <h2>Neue Angebotsanfrage</h2>
    <table>
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${escapeHtml(label)}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
  `;

  const { error } = await resend.emails.send(
    {
      from: `Angebotsformular <angebot@${domain}>`,
      to: [`info@${domain}`],
      replyTo: p.email,
      subject: `Neue Angebotsanfrage von ${p.vorname} ${p.nachname}`,
      html,
    },
    { idempotencyKey: `angebot/${p.email}/${Date.now()}` }
  );

  if (error) {
    return Response.json({ error: "Versand fehlgeschlagen." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
