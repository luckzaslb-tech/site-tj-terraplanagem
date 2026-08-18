import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://site-tj-terraplanagem.pages.dev";
const ogImageUrl = `${siteUrl}/images/og-image.jpg?v=3`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TJ Terraplanagem | O terreno certo para grandes projetos em Paraíba do Sul e Região",
  description:
    "Serviços especializados de terraplanagem, escavações, aterros, nivelamento e locação de máquinas pesadas (escavadeiras, pás carregadeiras, patrol, rolo) em Paraíba do Sul - RJ, Três Rios e região.",
  keywords: [
    "terraplanagem Paraíba do Sul",
    "terraplanagem Três Rios",
    "locação de escavadeira RJ",
    "aluguel de máquinas pesadas",
    "aluguel de retroescavadeira",
    "motoniveladora patrol",
    "rolo compactador",
    "escavação de fundações",
    "limpeza de terrenos",
    "aterro e nivelamento de solo",
    "TJ Terraplanagem",
  ],
  authors: [{ name: "TJ Terraplanagem", url: siteUrl }],
  creator: "TJ Terraplanagem",
  publisher: "TJ Terraplanagem",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "TJ Terraplanagem | O terreno certo para grandes projetos",
    description:
      "Terraplanagem, escavações, nivelamento e locação de máquinas pesadas com equipe especializada em Paraíba do Sul - RJ e região.",
    url: siteUrl,
    siteName: "TJ Terraplanagem",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "TJ Terraplanagem - Escavadeira hidráulica em operação",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TJ Terraplanagem | O terreno certo para grandes projetos",
    description:
      "Terraplanagem, escavações e locação de equipamentos em Paraíba do Sul - RJ e região.",
    images: [ogImageUrl],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteUrl}/#business`,
      name: "TJ Terraplanagem",
      alternateName: "TJ Terraplanagem LTDA",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.jpg`,
      image: `${siteUrl}/images/og-image.jpg`,
      telephone: "+5524981023864",
      priceRange: "$$",
      description:
        "Empresa especializada em serviços de terraplanagem, escavações, aterros, nivelamento de solo e locação de máquinas pesadas em Paraíba do Sul, Três Rios e Centro-Sul Fluminense.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Estr. Quirino Francisco Pinheiro",
        addressLocality: "Paraíba do Sul",
        addressRegion: "RJ",
        postalCode: "25850-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -22.1583,
        longitude: -43.2925,
      },
      areaServed: [
        { "@type": "City", name: "Paraíba do Sul" },
        { "@type": "City", name: "Três Rios" },
        { "@type": "City", name: "Areal" },
        { "@type": "City", name: "Comendador Levy Gasparian" },
        { "@type": "City", name: "Petrópolis" },
        { "@type": "City", name: "Sapucaia" },
        { "@type": "AdministrativeArea", name: "Centro-Sul Fluminense" },
        { "@type": "AdministrativeArea", name: "Região Serrana RJ" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "14",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://www.instagram.com/tj_terraplanagem_/",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "07:00",
          closes: "13:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Terraplanagem e Locação de Maquinário",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Terraplanagem e Preparação de Solo",
              description: "Corte, aterro, nivelamento e compactação de solo para obras residenciais, comerciais e industriais.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Escavações e Fundações",
              description: "Escavações de valas, baldrames, piscinas e projetos especiais com escavadeiras de alta precisão.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Locação de Máquinas Pesadas com Operador",
              description: "Aluguel de escavadeira hidráulica, pá carregadeira, retroescavadeira, patrol, trator de esteira e rolo compactador.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transporte com Caminhão Basculante",
              description: "Remoção e transporte de terra, entulho, pedras e agregados em caminhões 6x4 de 15m³.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Quais regiões a TJ Terraplanagem atende?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atendemos principalmente Paraíba do Sul, Três Rios, Areal, Comendador Levy Gasparian, Petrópolis, Região Serrana e todo o Centro-Sul Fluminense.",
          },
        },
        {
          "@type": "Question",
          name: "As máquinas pesadas são alugadas com operador?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim! Disponibilizamos operadores especializados, experientes e capacitados para garantir máxima produtividade, precisão e segurança na sua obra.",
          },
        },
        {
          "@type": "Question",
          name: "Como faço para solicitar um orçamento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Você pode solicitar um orçamento de forma rápida clicando no botão do WhatsApp no site ou ligando diretamente para o número (24) 98102-3864.",
          },
        },
        {
          "@type": "Question",
          name: "Quais serviços de terraplanagem a TJ executa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Executamos corte e aterro, nivelamento e regularização de solo, escavações para fundações e piscinas, limpeza de terrenos, desassoreamento e abertura de estradas e acessos.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês realizam visita técnica no terreno?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim! Realizamos avaliação técnica no local da obra para dimensionar o volume de solo, o tipo de maquinário ideal e o tempo estimado de execução.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "TJ Terraplanagem",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      inLanguage: "pt-BR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2D05BERLR3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2D05BERLR3');
          `}
        </Script>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="TJ Terraplanagem" />
        <meta
          property="og:title"
          content="TJ Terraplanagem | O terreno certo para grandes projetos"
        />
        <meta
          property="og:description"
          content="Terraplanagem, escavações e locação de equipamentos em Paraíba do Sul - RJ e região."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
