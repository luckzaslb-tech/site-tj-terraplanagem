import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://site-tj-terraplanagem.pages.dev";
const ogImageUrl = `${siteUrl}/images/og-image.jpg?v=3`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TJ Terraplanagem | O terreno certo para grandes projetos",
  description: "Terraplanagem, escavações e locação de equipamentos em Paraíba do Sul - RJ e região.",
  openGraph: {
    title: "TJ Terraplanagem | O terreno certo para grandes projetos",
    description: "Terraplanagem, escavações e locação de equipamentos em Paraíba do Sul - RJ e região.",
    url: siteUrl,
    siteName: "TJ Terraplanagem",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "TJ Terraplanagem - Escavadeira CAT 312D ao pôr do sol",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TJ Terraplanagem | O terreno certo para grandes projetos",
    description: "Terraplanagem, escavações e locação de equipamentos em Paraíba do Sul - RJ e região.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="TJ Terraplanagem" />
        <meta property="og:title" content="TJ Terraplanagem | O terreno certo para grandes projetos" />
        <meta property="og:description" content="Terraplanagem, escavações e locação de equipamentos em Paraíba do Sul - RJ e região." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </head>
      <body>{children}</body>
    </html>
  );
}
