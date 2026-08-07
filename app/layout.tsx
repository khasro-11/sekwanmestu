import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.bd-gebaeudereinigung.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gebäudereinigung NRW | B&D Gebäudereinigung Solingen – Angebot in 24 Std.",
  description:
    "Professionelle Gebäudereinigung in NRW: Unterhaltsreinigung, Grundreinigung, Treppenhaus-, Büro- und Praxisreinigung. Geschultes Fachpersonal, faire Preise, Angebot innerhalb von 24 Stunden. B&D Gebäudereinigung, Kurfürstenstraße 36, 42655 Solingen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gebäudereinigung NRW | B&D Gebäudereinigung Solingen",
    description:
      "Professionelle Gebäudereinigung in NRW – Angebot innerhalb von 24 Stunden.",
    url: siteUrl,
    siteName: "B&D Gebäudereinigung",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigung NRW | B&D Gebäudereinigung Solingen",
    description:
      "Professionelle Gebäudereinigung in NRW – Angebot innerhalb von 24 Stunden.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/HomeAndConstructionBusiness",
  name: "B&D Gebäudereinigung",
  description:
    "Professionelle Gebäudereinigung in NRW – Unterhaltsreinigung, Grundreinigung, Treppenhausreinigung, Büro- und Praxisreinigung.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kurfürstenstraße 36",
    postalCode: "42655",
    addressLocality: "Solingen",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  telephone: "+4915561320685",
  email: "info@bd-gebauedereinigung.de",
  url: siteUrl,
  areaServed: "Nordrhein-Westfalen",
  founder: { "@type": "Person", name: "Sakwan Musto" },
  openingHours: "Mo-Fr 07:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${plusJakarta.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
