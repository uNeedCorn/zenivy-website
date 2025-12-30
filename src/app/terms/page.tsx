import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "使用條款｜Zenivy",
  description: "Zenivy 使用條款與服務說明。",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            使用條款
          </h1>

          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p>
              Zenivy 目前可能處於 Beta 階段。我們會努力提供穩定的產品，但仍可能出現功能變動或不預期的錯誤。
            </p>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">你的責任</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>你同意合法使用 Zenivy，並遵守你所在地的相關法規。</li>
                <li>請自行妥善備份重要資料；Beta 期間我們不保證資料不會遺失。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">免責聲明</h2>
              <p>
                Zenivy 以「現況」提供。我們不對任何因使用或無法使用 Zenivy 所造成的間接損失負責。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">條款更新</h2>
              <p>
                我們可能會更新本條款。重大變更會以網站或 Email 通知（若你有留下聯絡方式）。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">聯絡我們</h2>
              <p>
                有任何問題，請來信{" "}
                <a className="text-teal-700 hover:underline" href="mailto:hello@zenivy.app">
                  hello@zenivy.app
                </a>
                。
              </p>
            </div>

            <p className="text-sm text-stone-500">
              最後更新：{new Date().toISOString().slice(0, 10)}
            </p>

            <p className="text-sm">
              <Link className="text-teal-700 hover:underline" href="/">
                回首頁
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
