"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/site/FadeIn";
import { InboxlessHeroVisual } from "@/components/site/InboxlessHeroVisual";
import {
  InboxStackIcon,
  ChartBarIcon,
  TrashIcon,
  LinkSlashIcon,
  ShieldCheckIcon,
  AppleIcon,
  WindowsIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  CursorArrowRaysIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
} from "@/components/site/Icons";
import Link from "next/link";
import Image from "next/image";

// 痛點資料
const painPoints = [
  {
    icon: InboxStackIcon,
    text: "收件匣裡有上千封郵件，根本不知道從何整理起",
  },
  {
    icon: EnvelopeIcon,
    text: "每天收到大量訂閱電子報，但大多數根本沒在看",
  },
  {
    icon: CursorArrowRaysIcon,
    text: "想要退訂，卻找不到退訂連結或者流程太麻煩",
  },
  {
    icon: ChartBarIcon,
    text: "不知道哪些寄件者佔用了最多空間",
  },
];

// 功能特色
const features = [
  {
    icon: ChartBarIcon,
    title: "智慧分析",
    description: "掃描收件匣，依寄件者分組統計郵件數量，讓你一目瞭然誰寄最多。",
  },
  {
    icon: TrashIcon,
    title: "批次清理",
    description: "勾選想清理的寄件者，一鍵刪除所有相關郵件，快速釋放空間。",
  },
  {
    icon: LinkSlashIcon,
    title: "快速退訂",
    description: "自動偵測郵件中的退訂連結，一鍵取消訂閱，不再被騷擾。",
  },
  {
    icon: ShieldCheckIcon,
    title: "隱私優先",
    description: "所有分析都在你的電腦上執行，郵件內容不會上傳到任何伺服器。",
  },
];

// 運作步驟
const steps = [
  {
    number: "1",
    title: "連結 Gmail",
    description: "使用 Google 帳戶安全登入授權",
  },
  {
    number: "2",
    title: "分析收件匣",
    description: "Inboxless 在本機掃描並分類郵件",
  },
  {
    number: "3",
    title: "選擇清理",
    description: "勾選想要清理的寄件者",
  },
  {
    number: "4",
    title: "一鍵完成",
    description: "批次刪除或退訂，輕鬆搞定",
  },
];

// 隱私特點
const privacyFeatures = [
  { text: "本機處理 — 所有分析都在你的裝置上完成" },
  { text: "不上傳 — 郵件內容永遠不會傳到我們的伺服器" },
  { text: "不儲存 — 關閉應用程式後，分析資料立即清除" },
  { text: "可撤銷 — 隨時可在 Google 帳戶設定中移除存取權限" },
];

// FAQ 資料
const faqs = [
  {
    question: "Inboxless 安全嗎？",
    answer:
      "是的。Inboxless 採用 Google OAuth 安全授權，我們不會儲存你的密碼。所有郵件分析都在你的電腦上本機執行，郵件內容不會上傳到任何伺服器。",
  },
  {
    question: "為什麼需要 Gmail 存取權限？",
    answer:
      "Inboxless 需要讀取權限來分析你的收件匣結構（寄件者、郵件數量等），以及修改權限來執行刪除和退訂操作。我們只會在你明確操作時才執行這些動作。",
  },
  {
    question: "刪除的郵件可以恢復嗎？",
    answer:
      "Inboxless 刪除的郵件會移至 Gmail 垃圾桶，你可以在 30 天內從垃圾桶恢復。超過 30 天後，郵件將被永久刪除。",
  },
  {
    question: "支援哪些平台？",
    answer:
      "目前 Inboxless 支援 macOS（12.0 以上版本）。Windows 版本正在開發中，歡迎加入等候名單獲得上線通知。",
  },
  {
    question: "Inboxless 要收費嗎？",
    answer:
      "封測期間完全免費使用完整功能。正式版定價敬請期待，封測用戶將享有早鳥專屬優惠。",
  },
  {
    question: "如何移除 Inboxless 的存取權限？",
    answer:
      "你可以隨時前往 Google 帳戶的「安全性」→「第三方應用程式存取權」中移除 Inboxless 的授權。移除後，Inboxless 將無法存取你的 Gmail。",
  },
];

// FAQ 項目元件
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-teal-600"
      >
        <span className="pr-4 text-base font-medium text-stone-900 md:text-lg">
          {question}
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-stone-600 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// 截圖資料
const screenshots = [
  {
    src: "/brand/inboxless/screenshots/dashboard.png",
    alt: "Inboxless 總覽介面 - 信箱健康度分析",
    caption: "總覽介面",
  },
  {
    src: "/brand/inboxless/screenshots/onboarding.png",
    alt: "Inboxless 連接 Gmail 頁面",
    caption: "快速連接",
  },
];

// 截圖輪播元件
function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, []);

  // 自動播放
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  // 觸控滑動處理
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  };

  return (
    <section className="bg-stone-50">
      <Container size="wide" className="py-16 md:py-24">
        <FadeIn>
          <div className="group mx-auto max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-medium transition-all duration-500 hover:shadow-xl">
            {/* macOS 標題列 */}
            <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-100/80 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57] transition-opacity group-hover:opacity-80" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E] transition-opacity group-hover:opacity-80" />
                <div className="h-3 w-3 rounded-full bg-[#28C840] transition-opacity group-hover:opacity-80" />
              </div>
              <span className="ml-4 text-sm font-medium text-stone-600">
                Inboxless — {screenshots[currentIndex].caption}
              </span>
            </div>

            {/* 輪播內容 */}
            <div
              className="relative overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1920}
                      height={1200}
                      className="w-full"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* 左右箭頭 */}
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-stone-600 opacity-0 shadow-md backdrop-blur transition-all hover:bg-white hover:text-stone-900 group-hover:opacity-100"
                aria-label="上一張"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-stone-600 opacity-0 shadow-md backdrop-blur transition-all hover:bg-white hover:text-stone-900 group-hover:opacity-100"
                aria-label="下一張"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* 指示器 */}
            <div className="flex items-center justify-center gap-2 border-t border-stone-100 bg-stone-50/50 py-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-teal-500"
                      : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`切換到第 ${index + 1} 張截圖`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default function InboxlessPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-stone-50">
        {/* 動態視覺背景 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_70%_at_50%_45%,black,transparent)]">
            <InboxlessHeroVisual />
          </div>
          {/* 背景光暈 */}
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7F4F0]/60 blur-3xl" />
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-3xl" />
        </div>

        <Container
          size="wide"
          className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center"
        >
          {/* Logo */}
          <FadeIn>
            <div className="mb-8">
              <Image
                src="/brand/inboxless/logo.svg"
                alt="Inboxless"
                width={80}
                height={80}
                className="mx-auto"
                priority
              />
            </div>
          </FadeIn>

          {/* Beta 標籤 */}
          <FadeIn delay={25}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
              </span>
              封測中 — 限額 100 名
            </div>
          </FadeIn>

          <FadeIn delay={75}>
            <h1 className="text-5xl font-bold tracking-[-0.04em] text-stone-900 md:text-6xl lg:text-7xl">
              重拾收件匣的掌控權
            </h1>
          </FadeIn>

          <FadeIn delay={125}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              Inboxless 分析你的 Gmail，找出佔據空間的訂閱郵件
              <br className="hidden sm:block" />
              一鍵清理、一鍵退訂
            </p>
          </FadeIn>

          {/* CTA 區塊 */}
          <FadeIn delay={175}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              {/* 主要 CTA - macOS */}
              <button className="group inline-flex items-center gap-3 rounded-[10px] bg-stone-900 px-6 py-3.5 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-xl focus:outline-none focus:ring-[3px] focus:ring-[#E7F4F0]">
                <AppleIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span>申請 macOS Beta</span>
              </button>

              {/* 次要 CTA - Windows */}
              <button className="inline-flex items-center gap-2 rounded-[10px] border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:bg-stone-50 hover:shadow-md focus:outline-none focus:ring-[3px] focus:ring-[#E7F4F0]">
                <WindowsIcon className="h-4 w-4" />
                <span>Windows 等候名單</span>
              </button>
            </div>

            <p className="mt-4 text-sm text-stone-500">
              封測期間免費使用完整功能
            </p>
          </FadeIn>

          {/* 向下箭頭 */}
          <FadeIn delay={225}>
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

      {/* 痛點區塊 */}
      <section id="pain" className="bg-white">
        <Container size="narrow" className="py-16 md:py-24">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              你的收件匣有多亂？
            </h2>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-xl space-y-4 md:mt-16">
            {painPoints.map(({ icon: Icon, text }, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-stone-200/80 hover:bg-stone-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-stone-100 text-stone-500 transition-all duration-300 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="pt-2 text-base leading-relaxed text-stone-700">
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 過渡區塊 - 觀點 */}
      <section className="bg-stone-50">
        <Container size="narrow" className="py-16 md:py-24">
          <div className="mx-auto max-w-xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                其實，不是每封信都需要手動處理
              </h2>
            </FadeIn>
            <FadeIn delay={80}>
              <p className="mt-6 text-xl font-semibold leading-relaxed text-stone-700 md:text-2xl">
                問題不在於你太懶
                <br className="sm:hidden" />
                <span className="text-teal-600">
                  ，而是工具太難用
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                一封一封退訂、一頁一頁翻找，當然整理不動。
                <br className="hidden md:block" />
                你需要的是一個聰明的助手，幫你把雜訊批次處理掉。
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 功能區塊 */}
      <section className="bg-white">
        <Container size="wide" className="py-16 md:py-24">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Inboxless 幫你解決
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-stone-600 md:text-lg">
              簡單四步，找回乾淨的收件匣
            </p>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:mt-16 md:grid-cols-2">
            {features.map(({ icon: Icon, title, description }, index) => (
              <FadeIn key={index} delay={index * 75}>
                <div className="group rounded-2xl border border-stone-200/80 bg-stone-50/50 p-6 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-medium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-50 group-hover:text-teal-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-stone-900 md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 md:text-base">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 隱私區塊 */}
      <section className="bg-stone-50">
        <Container size="narrow" className="py-16 md:py-24">
          <FadeIn>
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-transform duration-300 hover:scale-105">
                <ShieldCheckIcon className="h-8 w-8" />
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              你的郵件，只在你的電腦上處理
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base text-stone-600 md:text-lg">
              隱私是 Inboxless 的核心設計原則
            </p>
          </FadeIn>

          <div className="mx-auto mt-10 max-w-lg md:mt-12">
            {privacyFeatures.map(({ text }, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="group flex items-center gap-3 border-b border-stone-200 py-4 transition-colors last:border-b-0 hover:bg-white">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-teal-500 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-base text-stone-700">{text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 運作方式 */}
      <section className="bg-white">
        <Container size="wide" className="py-16 md:py-24">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              四步驟，輕鬆整理
            </h2>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:mt-16 md:grid-cols-4 md:gap-4">
            {steps.map(({ number, title, description }, index) => (
              <FadeIn key={index} delay={index * 75}>
                <div className="group relative text-center">
                  {/* 連接線 (桌面版) - 漸變效果 */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+28px)] top-6 hidden h-0.5 w-[calc(100%-56px)] md:block">
                      <div className="h-full w-full bg-gradient-to-r from-teal-300 to-teal-200" />
                      {/* 動態光點效果 */}
                      <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  )}
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-lg font-bold text-white shadow-lg shadow-teal-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-teal-500/30">
                    {number}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-stone-900 md:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 截圖區塊 */}
      <ScreenshotCarousel />

      {/* 下載區塊 */}
      <section className="bg-white">
        <Container size="narrow" className="py-16 md:py-24">
          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-8 text-center md:p-12">
              {/* 裝飾光暈 */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-teal-500/20 blur-3xl transition-all duration-500 group-hover:bg-teal-500/30" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-teal-500/10 blur-3xl transition-all duration-500 group-hover:bg-teal-500/20" />

              <div className="relative">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  立即申請封測資格
                </h2>
                <p className="mt-3 text-stone-400">
                  限額 100 名，搶先體驗完整功能
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                  <button className="group/btn inline-flex items-center gap-3 rounded-[10px] bg-white px-6 py-3.5 text-base font-medium text-stone-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-50 hover:shadow-xl focus:outline-none focus:ring-[3px] focus:ring-teal-500/30">
                    <AppleIcon className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" />
                    <span>申請 macOS Beta</span>
                  </button>

                  <button className="inline-flex items-center gap-2 rounded-[10px] border border-stone-700 px-5 py-3 text-sm font-medium text-stone-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-600 hover:text-stone-300 focus:outline-none focus:ring-[3px] focus:ring-teal-500/30">
                    <WindowsIcon className="h-4 w-4" />
                    <span>Windows 等候名單</span>
                  </button>
                </div>

                <p className="mt-6 text-sm text-teal-400">
                  封測期間免費使用完整功能
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ 區塊 */}
      <section className="bg-stone-50">
        <Container size="narrow" className="py-16 md:py-24">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              常見問題
            </h2>
          </FadeIn>

          <div className="mx-auto mt-10 max-w-2xl md:mt-12">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 30}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 回到 Zenivy */}
      <section className="bg-white">
        <Container size="narrow" className="py-12 md:py-16">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm text-stone-500">
                Inboxless 是{" "}
                <Link
                  href="/"
                  className="font-medium text-teal-600 underline underline-offset-2 transition-colors hover:text-teal-700"
                >
                  Zenivy
                </Link>{" "}
                旗下產品
              </p>
              <p className="mt-2 text-sm text-stone-400">
                專注減少數位生活中的雜訊
              </p>
              <p className="mt-4 flex items-center justify-center gap-3 text-sm text-stone-400">
                <a
                  href="/legal/privacy.htm#inboxless"
                  className="underline underline-offset-2 transition-colors hover:text-stone-600"
                >
                  隱私權政策
                </a>
                <span>·</span>
                <a
                  href="/legal/terms.htm#inboxless"
                  className="underline underline-offset-2 transition-colors hover:text-stone-600"
                >
                  使用條款
                </a>
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
