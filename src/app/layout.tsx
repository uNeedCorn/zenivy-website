import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Zenivy｜留白，是為了讓心能靜下來",
  description:
    "我們相信，生活需要空間，讓節奏自然浮現。Zenivy 維持留白、減少雜訊，讓心能靜下來，也能更從容地走下去。",
  keywords: ["Zenivy", "留白", "減少雜訊", "靜下來", "節奏", "從容", "專注"],
  authors: [{ name: "Zenivy" }],
  openGraph: {
    title: "Zenivy｜留白，是為了讓心能靜下來",
    description:
      "我們相信，生活需要空間，讓節奏自然浮現。Zenivy 維持留白、減少雜訊，讓心能靜下來，也能更從容地走下去。",
    url: "https://zenivy.app",
    siteName: "Zenivy",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenivy｜留白，是為了讓心能靜下來",
    description:
      "我們相信，生活需要空間，讓節奏自然浮現。Zenivy 維持留白、減少雜訊，讓心能靜下來，也能更從容地走下去。",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="min-h-dvh bg-white text-stone-900 antialiased font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
