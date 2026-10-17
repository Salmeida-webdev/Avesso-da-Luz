import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Avesso da Luz — Estúdio de Beleza", template: "%s | Avesso da Luz" },
  description: "Um espaço para se reconhecer. Conheça o universo de beleza, cuidado e expressão do Avesso da Luz.",
  applicationName: "Avesso da Luz",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://avessodaluz.example"),
  openGraph: {
    title: "Avesso da Luz — Um espaço para se reconhecer",
    description: "Beleza como gesto, presença e expressão pessoal.",
    siteName: "Avesso da Luz",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
