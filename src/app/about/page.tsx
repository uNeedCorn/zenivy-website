import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於｜Zenivy",
  description: "Zenivy 的方向很單純：為清晰保留條件，為成長保留時間。",
};

const principles = [
  {
    title: "留白優先",
    description: "保留空間，比增加內容更重要。",
  },
  {
    title: "減少雜訊",
    description: "降低打擾與干擾，讓清晰成為可能。",
  },
  {
    title: "選擇清楚",
    description: "讓人更容易看見重點，做出自己的選擇。",
  },
  {
    title: "能持續",
    description: "改變必須能長期維持，能累積，而不靠短期衝刺。",
  },
  {
    title: "工具退場",
    description: "好的系統會退到背景，讓生活回到眼前。",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#E7F4F0] to-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            關於
          </h1>
        </div>
      </section>

      {/* Direction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            方向敘述
          </h2>
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Zenivy 的方向很單純：為清晰保留條件，為成長保留時間。
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Zen 是「能看見、能選擇」的狀態；Ivy 是「能延續、能累積」的變化。
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              我們不追求更多，而是維持留白——讓重要的事，有發生的餘地。
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-10">
            核心原則
          </h2>
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-2xl border border-stone-200"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-stone-600">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zen / Ivy Definition */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-10">
            定義
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-stone-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-teal-600 mb-2">Zen</h3>
              <p className="text-lg text-stone-600">清晰的狀態。</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-teal-600 mb-2">Ivy</h3>
              <p className="text-lg text-stone-600">持續的成長。</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
