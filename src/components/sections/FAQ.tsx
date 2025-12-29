"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Zenivy 適合誰使用？",
    answer:
      "Zenivy 專為需要管理大量人脈的個人業務設計，例如：業務、顧問、創業者、自由工作者等。如果你覺得傳統 CRM 太重，但通訊錄又不夠用，Zenivy 就是你的最佳選擇。",
  },
  {
    question: "我的資料安全嗎？",
    answer:
      "非常安全。Zenivy 採用「本地優先」設計，你的聯絡人資料儲存在自己的電腦上，不會經過我們的伺服器。如果你選擇使用雲端同步功能（Pro 版），資料會經過端對端加密。",
  },
  {
    question: "可以從 Google Contacts 匯入嗎？",
    answer:
      "可以！Zenivy 支援與 Google Contacts 雙向同步。你可以輕鬆匯入現有的聯絡人，也可以選擇將 Zenivy 中的變更同步回 Google。",
  },
  {
    question: "支援哪些作業系統？",
    answer:
      "目前支援 macOS（Apple Silicon 和 Intel）。Windows 版本正在開發中，預計 2025 年推出。",
  },
  {
    question: "免費版有什麼限制？",
    answer:
      "免費版沒有聯絡人數量限制，包含所有基本功能。Pro 版主要增加雲端同步、多裝置支援、進階分析等功能。",
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
            有其他問題？歡迎來信 hello@zenivy.app
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
