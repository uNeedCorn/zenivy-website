import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#E7F4F0] to-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-teal-700">Beta 測試中</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 max-w-4xl leading-tight">
            你的人脈，
            <br className="hidden md:block" />
            <span className="text-teal-500">一目瞭然</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl">
            Notion 風格的聯絡人管理。本地儲存，隱私優先。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#waitlist"
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-[10px] transition-all hover:scale-105 shadow-lg shadow-teal-500/25"
            >
              免費下載 Mac 版
            </Link>
            <Link
              href="#features"
              className="px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-700 font-semibold rounded-[10px] transition-colors border border-stone-200"
            >
              了解更多
            </Link>
          </div>

          {/* Hero Image / Screenshot */}
          <div className="relative w-full max-w-4xl">
            <div className="aspect-video bg-white rounded-2xl shadow-2xl shadow-stone-900/10 overflow-hidden border border-stone-200">
              {/* Placeholder for app screenshot */}
              <div className="w-full h-full bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <Image
                      src="/brand/logo/logo.svg"
                      alt="Zenivy"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-stone-400 text-sm">產品截圖區域</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-teal-200/20 via-transparent to-amber-200/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
