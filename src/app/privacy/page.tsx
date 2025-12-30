import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "隱私權政策｜Zenivy",
  description: "Zenivy 隱私權政策與資料處理原則。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            隱私權政策
          </h1>

          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p>
              Zenivy 以「本地優先」與「最小化資料收集」為設計方向。我們會盡可能減少不必要的資料上傳，讓你對自己的資料有更高的掌控感。
            </p>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">我們可能收集的資料</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>你主動留下的 Email（例如加入候補、訂閱更新）。</li>
                <li>網站託管與安全所需的基本伺服器日誌（如請求時間、IP、瀏覽器資訊）。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">我們如何使用</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>寄送內測開放通知、版本更新與重要公告。</li>
                <li>維運網站安全、除錯與改善使用體驗。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">未來的雲端功能</h2>
              <p>
                若未來推出需要伺服器的功能（例如同步），會另外說明資料會如何處理，並以清楚的方式讓你選擇是否啟用。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2">聯絡我們</h2>
              <p>
                任何隱私相關問題，請來信{" "}
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
