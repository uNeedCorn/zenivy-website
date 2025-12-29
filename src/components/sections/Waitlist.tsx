"use client";

import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: 整合實際的 waitlist API（例如 Supabase 或其他服務）
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#E7F4F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            準備好開始了嗎？
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            立即下載免費版，或留下 Email 獲取最新消息與 Pro 版搶先體驗資格。
          </p>

          {/* Download Button */}
          <div className="mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-[10px] transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              下載 Mac 版（Apple Silicon）
            </a>
          </div>

          <div className="text-stone-400 text-sm mb-8">— 或 —</div>

          {/* Email Form */}
          {status === "success" ? (
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-200">
              <div className="text-teal-600 font-semibold mb-2">感謝您的訂閱！</div>
              <p className="text-teal-700 text-sm">我們會在有新消息時通知您。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="輸入您的 Email"
                required
                className="flex-1 px-5 py-3.5 bg-white border border-stone-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-stone-400"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white font-semibold rounded-[10px] transition-colors"
              >
                {status === "loading" ? "送出中..." : "獲取更新"}
              </button>
            </form>
          )}

          <p className="text-sm text-stone-500 mt-4">
            我們尊重您的隱私，絕不發送垃圾郵件。
          </p>
        </div>
      </div>
    </section>
  );
}
