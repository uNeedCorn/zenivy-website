import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "免費",
    description: "適合個人使用",
    features: [
      "無限聯絡人",
      "本地資料儲存",
      "Google Contacts 同步",
      "基本搜尋與篩選",
      "匯入/匯出 CSV",
    ],
    cta: "免費下載",
    featured: false,
  },
  {
    name: "Pro",
    price: "NT$199",
    period: "/月",
    description: "適合業務專業人士",
    features: [
      "Free 所有功能",
      "多裝置雲端同步",
      "進階分析報表",
      "自動備份",
      "優先客服支援",
      "即將推出...",
    ],
    cta: "即將推出",
    featured: true,
    disabled: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            簡單透明的價格
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            從免費版開始，隨時升級獲得更多功能。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl ${
                plan.featured
                  ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white ring-4 ring-teal-500/20"
                  : "bg-white border border-stone-200"
              }`}
            >
              {/* Plan Name */}
              <div className="mb-4">
                <h3 className={`text-xl font-semibold ${plan.featured ? "text-white" : "text-stone-800"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.featured ? "text-teal-100" : "text-stone-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-stone-900"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={plan.featured ? "text-teal-100" : "text-stone-500"}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.featured ? "text-teal-200" : "text-teal-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.featured ? "text-white" : "text-stone-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={plan.disabled ? "#" : "#waitlist"}
                className={`block w-full py-3 text-center font-semibold rounded-[10px] transition-colors ${
                  plan.featured
                    ? "bg-white text-teal-600 hover:bg-teal-50"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                } ${plan.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
