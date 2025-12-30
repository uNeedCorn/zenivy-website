import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#E7F4F0] to-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-teal-700">Beta 候補開放</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 max-w-4xl leading-tight">
            把每段關係照顧好
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl leading-relaxed">
            精簡、專注、本地優先。<br className="hidden sm:block" />
            用更少摩擦記下互動脈絡，讓你在對的時候想起對的人。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#waitlist"
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-[10px] transition-all hover:scale-105 shadow-lg shadow-teal-500/25"
            >
              加入候補
            </Link>
            <Link
              href="/#features"
              className="px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-700 font-semibold rounded-[10px] transition-colors border border-stone-200"
            >
              了解核心理念
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
