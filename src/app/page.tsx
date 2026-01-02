import { Container } from "@/components/site/Container";
import { HeroVisual } from "@/components/site/HeroVisual";
import { FadeIn } from "@/components/site/FadeIn";
import {
  BellIcon,
  PauseIcon,
  ClockIcon,
  QuestionIcon,
  FilterIcon,
  VolumeOffIcon,
  ArrowRightOnRectangleIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  HeartIcon,
} from "@/components/site/Icons";

const painPoints = [
  {
    icon: BellIcon,
    text: "一天收到上百則通知，每一則都像在說「現在就要處理」",
  },
  {
    icon: PauseIcon,
    text: "想專心做一件事，卻不斷被訊息、郵件、提醒打斷",
  },
  {
    icon: ClockIcon,
    text: "滑完手機回過神來，不知道時間都去哪了",
  },
  {
    icon: QuestionIcon,
    text: "總覺得有什麼事還沒做完，但又說不上來是什麼",
  },
];

const principles = [
  {
    icon: FilterIcon,
    title: "幫你過濾不重要的",
    description:
      "我們的工具會幫你整理、過濾日常的資訊和通知，讓真正需要處理的事情浮現出來，其他的先收到一邊。",
  },
  {
    icon: VolumeOffIcon,
    title: "我們自己也不打擾你",
    description:
      "Zenivy 的產品不會沒事就跳通知、發提醒。沒有需要你處理的事，我們就安靜待在背景。",
  },
  {
    icon: ArrowRightOnRectangleIcon,
    title: "用完就可以離開",
    description:
      "我們不會設計讓你「多滑一下」的機制，不會用紅點、徽章讓你焦慮。處理完事情，就去做你想做的事。",
  },
];

const visions = [
  {
    icon: CheckCircleIcon,
    text: "你可以專心把手上的事做完，不會一直被打斷",
  },
  {
    icon: DevicePhoneMobileIcon,
    text: "不會老是想著要檢查手機，怕漏掉什麼",
  },
  {
    icon: SparklesIcon,
    text: "重要的事情會自己浮現，不用在一堆通知裡挖",
  },
  {
    icon: HeartIcon,
    text: "多出來的時間，可以拿來做真正想做的事",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero - 全幅沉浸式 */}
      <section className="relative min-h-[70vh] overflow-hidden bg-stone-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_70%_at_50%_45%,black,transparent)]">
            <HeroVisual variant="background" />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7F4F0]/60 blur-3xl" />
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-500/8 blur-3xl" />
        </div>

        <Container
          size="wide"
          className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center"
        >
          {/* Hero 標題: text-5xl md:text-6xl font-bold */}
          <FadeIn>
            <h1 className="text-5xl font-bold tracking-[-0.04em] text-stone-900 md:text-6xl lg:text-7xl">
              留白，讓心能靜下來
            </h1>
          </FadeIn>
          {/* 正文: text-base md:text-lg */}
          <FadeIn delay={100}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              我們做的工具，幫你減少日常的雜訊
              <br className="hidden sm:block" />
              把時間和注意力，留給真正重要的事
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-12 flex h-8 items-center justify-center">
              <a
                href="#pain"
                className="group rounded-full p-2 text-stone-400 transition-colors hover:text-stone-600 focus:outline-none focus:ring-[3px] focus:ring-[#E7F4F0]"
                aria-label="往下捲動"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 motion-safe:animate-bounce motion-reduce:animate-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 痛點 */}
      <section id="pain" className="bg-white">
        <Container size="narrow" className="py-16 md:py-24">
          {/* Section 標題: text-3xl md:text-4xl font-bold */}
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              我們每天都在被打斷
            </h2>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-xl space-y-4 md:mt-16">
            {painPoints.map(({ icon: Icon, text }, index) => (
              <FadeIn key={text} delay={index * 80}>
                <div className="group flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-stone-50">
                  {/* Icon 容器: 40px (h-10 w-10), Icon: 20px (h-5 w-5), rounded-[10px] */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-stone-100 text-stone-500 transition-colors group-hover:bg-teal-50 group-hover:text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  {/* 正文 */}
                  <p className="pt-2 text-base leading-relaxed text-stone-600 md:text-lg">
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 觀點 */}
      <section className="bg-stone-50">
        <Container size="narrow" className="py-16 md:py-24">
          <div className="mx-auto max-w-xl text-center">
            {/* Section 標題 */}
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                大部分的通知，其實可以晚點再看
              </h2>
            </FadeIn>
            {/* 小標題: text-xl md:text-2xl font-semibold */}
            <FadeIn delay={80}>
              <p className="mt-6 text-xl font-semibold leading-relaxed text-stone-700 md:text-2xl">
                真正緊急的事沒那麼多
                <br className="sm:hidden" />
                <span className="text-teal-600">
                  ，但我們常常被「即時」綁架
                </span>
              </p>
            </FadeIn>
            {/* 正文 */}
            <FadeIn delay={160}>
              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                不是每件事都需要馬上回應，不是每則通知都值得打斷你手上的事。
                <br className="hidden md:block" />
                問題是，我們很難自己分辨哪些重要、哪些不重要。
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 原則 */}
      <section className="bg-white">
        <Container size="wide" className="py-16 md:py-24">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              {/* Section 標題 */}
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                我們怎麼做
              </h2>
              {/* 正文 */}
              <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
                用工具幫你過濾雜訊，同時我們自己也遵守同樣的原則
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <FadeIn key={title} delay={index * 100}>
                <div className="group text-left">
                  {/* Icon 容器: 48px (h-12 w-12), Icon: 24px (h-6 w-6), rounded-2xl */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-500 transition-all duration-300 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  {/* 小標題 */}
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
                    {title}
                  </h3>
                  {/* 正文 */}
                  <p className="mt-3 text-base leading-relaxed text-stone-600">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 願景 */}
      <section className="bg-stone-50">
        <Container size="narrow" className="py-16 md:py-24">
          {/* Section 標題 */}
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              當雜訊變少
            </h2>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-xl space-y-4 md:mt-16">
            {visions.map(({ icon: Icon, text }, index) => (
              <FadeIn key={text} delay={index * 80}>
                <div className="group flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-white">
                  {/* Icon 容器: 40px, Icon: 20px */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-stone-500 transition-colors group-hover:bg-teal-50 group-hover:text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  {/* 正文 */}
                  <p className="pt-2 text-base leading-relaxed text-stone-600 md:text-lg">
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 產品 */}
      <section className="bg-white">
        <Container size="wide" className="py-16 md:py-24">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              {/* Section 標題 */}
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                我們正在做的事
              </h2>
              {/* 正文 */}
              <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
                一些幫你減少雜訊、專注重要事情的工具
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:mt-16">
              {/* 產品卡片 - rounded-2xl (16px) */}
              <div className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-6 transition-all duration-300 hover:border-stone-300 hover:shadow-subtle md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-3">
                      {/* 小標題 */}
                      <h3 className="text-xl font-semibold text-stone-900">
                        即將推出
                      </h3>
                      {/* Badge: rounded-lg (8px), text-xs */}
                      <span className="rounded-lg bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                        開發中
                      </span>
                    </div>
                    {/* 正文 */}
                    <p className="mt-3 text-base leading-relaxed text-stone-600">
                      我們正在開發第一個產品，幫你管理日常的資訊流。
                      <br className="hidden md:block" />
                      想第一時間知道的話，可以到關於頁面留下你的 Email。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Zen + Ivy 定義 */}
      <section className="bg-stone-50">
        <Container size="wide" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-center">
                {/* Section 標題 */}
                <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                  為什麼叫 Zenivy
                </h2>
                {/* 正文 */}
                <p className="mt-4 text-base leading-relaxed text-stone-500 md:text-lg">
                  Zen + Ivy，兩個我們在乎的事
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
              <FadeIn delay={80}>
                <div className="group text-center transition-transform duration-300 hover:-translate-y-1 md:text-right">
                  {/* 小字 */}
                  <div className="text-sm font-semibold tracking-wide text-teal-600">
                    Zen
                  </div>
                  {/* Section 標題 */}
                  <div className="mt-2 text-4xl font-bold text-stone-900 md:text-5xl">
                    專注
                  </div>
                  {/* 正文 */}
                  <p className="mt-4 text-base leading-relaxed text-stone-600">
                    心靜下來，才看得清楚什麼重要。
                    <br />
                    不是什麼都要做，而是選擇做什麼。
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={160}>
                <div className="group text-center transition-transform duration-300 hover:-translate-y-1 md:text-left">
                  {/* 小字 */}
                  <div className="text-sm font-semibold tracking-wide text-amber-600">
                    Ivy
                  </div>
                  {/* Section 標題 */}
                  <div className="mt-2 text-4xl font-bold text-stone-900 md:text-5xl">
                    成長
                  </div>
                  {/* 正文 */}
                  <p className="mt-4 text-base leading-relaxed text-stone-600">
                    不急，但每天都進步一點。
                    <br />
                    像常春藤一樣，慢慢長，但長得穩。
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 收尾 */}
      <section className="bg-white">
        <Container size="narrow" className="py-16 md:py-24">
          <FadeIn>
            <div className="mx-auto max-w-xl text-center">
              {/* 小標題 */}
              <p className="text-2xl font-semibold text-stone-900 md:text-3xl">
                少一點雜訊，多一點專注
              </p>
              {/* 正文 */}
              <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
                這是我們相信的事，也是我們正在做的事。
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
