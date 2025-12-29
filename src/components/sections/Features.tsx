const features = [
  {
    icon: "📇",
    title: "點擊即編輯",
    description: "Notion 風格的 inline editing，不用切換模式。",
  },
  {
    icon: "🔒",
    title: "資料在你電腦",
    description: "本地 SQLite 儲存，不經過任何伺服器。",
  },
  {
    icon: "🔄",
    title: "Google 同步",
    description: "雙向同步 Google Contacts，匯入現有資料。",
  },
  {
    icon: "📊",
    title: "互動追蹤",
    description: "記錄每次互動，掌握聯絡頻率。",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            功能
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            簡單的工具，做好一件事。
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
