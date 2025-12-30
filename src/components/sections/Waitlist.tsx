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
            加入候補
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            留下 Email，我們會在內測開放與重要更新時通知你。
          </p>

          {/* Email Form */}
          {status === "success" ? (
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-200">
              <div className="text-teal-600 font-semibold">已加入候補</div>
              <div className="text-teal-700/80 text-sm mt-1">有新進度時會第一時間寄信給你。</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="flex-1 px-5 py-3.5 bg-white border border-stone-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-stone-400"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white font-semibold rounded-[10px] transition-colors"
              >
                {status === "loading" ? "送出中..." : "加入候補"}
              </button>
            </form>
          )}

          <p className="text-sm text-stone-500 mt-4">
            不發垃圾信，隨時可以取消訂閱。
          </p>
        </div>
      </div>
    </section>
  );
}
