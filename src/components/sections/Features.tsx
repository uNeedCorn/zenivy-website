const features = [
  {
    icon: "📇",
    title: "Notion 風格介面",
    description: "熟悉的 inline editing 體驗，點擊即可編輯，無需切換模式。",
  },
  {
    icon: "🔒",
    title: "本地優先隱私",
    description: "資料儲存在你的電腦，不經過第三方伺服器，完全掌控你的聯絡人資料。",
  },
  {
    icon: "🔄",
    title: "Google 同步",
    description: "與 Google Contacts 雙向同步，輕鬆匯入現有聯絡人。",
  },
  {
    icon: "📊",
    title: "智慧分析",
    description: "自動分析互動頻率，提醒你關注重要的人際關係。",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            為什麼選擇 Zenivy？
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            專為個人業務設計的聯絡人管理工具，兼顧效率與隱私。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-stone-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-stone-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
