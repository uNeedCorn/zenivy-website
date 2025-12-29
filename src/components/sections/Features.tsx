const features = [
  {
    icon: "📇",
    title: "點擊即編輯",
    description: "像 Notion 一樣直接點擊文字編輯，不用切換模式。",
  },
  {
    icon: "🔒",
    title: "資料存在你的電腦",
    description: "本地資料庫儲存，完全不經過任何伺服器。",
  },
  {
    icon: "🔄",
    title: "Google 同步",
    description: "匯入 Google 聯絡人，雙向同步更新。",
  },
  {
    icon: "📊",
    title: "互動紀錄",
    description: "記錄每一次互動，一眼看出該聯繫誰了。",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            專注做好一件事
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            讓你記住每個重要的人。
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
