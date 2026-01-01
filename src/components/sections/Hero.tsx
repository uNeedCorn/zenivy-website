import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#E7F4F0] to-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 max-w-4xl leading-tight">
            留白，是為了讓心能靜下來
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl leading-relaxed">
            讓生活回到清晰與從容，並能長久維持。
          </p>

          {/* Core Belief - Short */}
          <p className="text-base text-stone-500 mb-10 max-w-xl leading-relaxed">
            我們相信，生活需要空間，讓節奏自然浮現。<br className="hidden sm:block" />
            當一切被填滿，清晰就不再理所當然。
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
              href="/manifesto"
              className="px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-700 font-semibold rounded-[10px] transition-colors border border-stone-200"
            >
              了解理念
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
