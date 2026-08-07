import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TJ Terraplanagem | Soluções para sua obra",
  description: "Terraplanagem, escavação e locação de equipamentos em Paraíba do Sul e região.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
