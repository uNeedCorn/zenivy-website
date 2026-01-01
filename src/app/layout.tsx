import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenivy｜留白，是為了讓心能靜下來",
  description: "我們相信，生活需要空間，讓節奏自然浮現。Zenivy 維持留白、減少雜訊，讓清晰與從容得以長久。",
  keywords: ["Zenivy", "留白", "減少雜訊", "清晰", "從容", "生產力", "專注"],
  authors: [{ name: "Zenivy" }],
  openGraph: {
    title: "Zenivy｜留白，是為了讓心能靜下來",
    description: "我們相信，生活需要空間，讓節奏自然浮現。Zenivy 維持留白、減少雜訊，讓清晰與從容得以長久。",
    url: "https://zenivy.app",
    siteName: "Zenivy",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenivy｜留白，是為了讓心能靜下來",
    description: "我們相信，生活需要空間，讓節奏自然浮現。Zenivy 維持留白、減少雜訊，讓清晰與從容得以長久。",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
