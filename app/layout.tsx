import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Academia de Criadores Forms",
  description: "Formulários da Academia de Criadores",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${satoshi.variable} ${inter.variable} font-sans bg-[#f7f5f3] text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}