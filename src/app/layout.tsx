import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenivy｜精簡、專注、本地優先",
  description: "Zenivy 以精簡、專注、本地優先為設計原則，幫你留住互動脈絡、照顧重要的人。加入候補，第一時間收到內測通知。",
  keywords: ["CRM", "Personal CRM", "Contact Management", "Relationship", "Local-first", "Privacy", "macOS"],
  authors: [{ name: "Zenivy" }],
  openGraph: {
    title: "Zenivy｜精簡、專注、本地優先",
    description: "以精簡、專注、本地優先為設計原則，幫你留住互動脈絡、照顧重要的人。加入候補，第一時間收到內測通知。",
    url: "https://zenivy.app",
    siteName: "Zenivy",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenivy｜精簡、專注、本地優先",
    description: "以精簡、專注、本地優先為設計原則，幫你留住互動脈絡、照顧重要的人。加入候補，第一時間收到內測通知。",
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
