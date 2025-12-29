"use client";

import { useState } from "react";

const faqs = [
  {
    question: "適合誰？",
    answer:
      "業務、顧問、創業者、自由工作者。傳統 CRM 太重，通訊錄不夠用的人。",
  },
  {
    question: "資料存在哪？",
    answer:
      "你的電腦。本地 SQLite 資料庫，不經過任何伺服器。",
  },
  {
    question: "可以匯入 Google Contacts？",
    answer:
      "可以。支援雙向同步。",
  },
  {
    question: "支援什麼系統？",
    answer:
      "macOS（Apple Silicon / Intel）。Windows 開發中。",
  },
  {
    question: "免費版有限制嗎？",
    answer:
      "沒有聯絡人數量限制。Pro 版增加雲端同步和進階分析。",
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
            有其他問題？寫信到 hello@zenivy.app
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
