"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Zenivy 是什麼？",
    answer:
      "Zenivy 是精簡、專注、本地優先的關係管理工具：把互動脈絡留住，讓你更有系統地照顧重要的人。",
  },
  {
    question: "什麼時候可以用？",
    answer:
      "我們正在收斂核心體驗並準備內測。加入候補後，有內測開放或重要更新會第一時間通知你。",
  },
  {
    question: "資料存在哪裡？",
    answer:
      "我們以本地優先為設計原則，目標是讓資料更可控、更安心；若未來提供需要伺服器的功能，會清楚說明並讓你選擇。",
  },
  {
    question: "會有雲端同步嗎？",
    answer:
      "未來若推出雲端相關功能，會清楚說明資料如何處理，並提供明確的選擇權讓你決定是否啟用。",
  },
  {
    question: "加入候補後會收到什麼？",
    answer:
      "當內測開放或有重大更新時，我們會寄信通知你；平常不會打擾。",
  },
  {
    question: "支援哪些平台？",
    answer:
      "目前以 macOS 為優先；其他平台會在確認方向後再對外公告。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            常見問題
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            有其他問題？歡迎寫信到 hello@zenivy.app
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-stone-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-stone-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-stone-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
