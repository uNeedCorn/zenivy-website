import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenivy - Personal CRM for Relationship Building",
  description: "Zenivy 是一款給個人業務的 Notion 風格聯絡人管理工具，優雅、隱私、輕量。培養如常春藤般持續生長的人際關係。",
  keywords: ["CRM", "Personal CRM", "Contact Management", "Relationship", "Notion-style"],
  authors: [{ name: "Zenivy" }],
  openGraph: {
    title: "Zenivy - Personal CRM for Relationship Building",
    description: "Zenivy 是一款給個人業務的 Notion 風格聯絡人管理工具",
    url: "https://zenivy.app",
    siteName: "Zenivy",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenivy - Personal CRM",
    description: "Zenivy 是一款給個人業務的 Notion 風格聯絡人管理工具",
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
