import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://site-tj-terraplanagem.pages.dev";
const ogImageUrl = `${siteUrl}/images/maquina-por-do-sol.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TJ Terraplanagem | O terreno certo para grandes projetos",
  description: "Terraplanagem, escavações e locação de equipamentos em Paraíba do Sul - RJ e região.",
  openGraph: {
    title: "TJ Terraplanagem | O terreno certo para grandes projetos",
    description: "Terraplanagem, escavações e locação de equipamentos com força, cuidado e pontualidade.",
    url: siteUrl,
    siteName: "TJ Terraplanagem",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "TJ Terraplanagem - Escavadeira em operação",
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
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
