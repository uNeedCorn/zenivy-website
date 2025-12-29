# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication Language

**請使用繁體中文與使用者對話。** (Please communicate with the user in Traditional Chinese.)

---

## Project Overview

**Zenivy Website** — Zenivy 產品官網與 Landing Page

> **Zenivy** = Zen（禪/專注平衡）+ ivy（常春藤/關係生長）

---

## Tech Stack

| 技術 | 版本 | 用途 |
|------|------|------|
| Next.js | 16+ | React 框架 |
| TypeScript | 5+ | 型別安全 |
| Tailwind CSS | 4+ | 樣式 |
| Cloudflare Pages | - | 部署平台 |

---

## Commands

```bash
npm run dev      # 開發伺服器 (http://localhost:3000)
npm run build    # 生產建置
npm run start    # 預覽生產版本
npm run lint     # ESLint 檢查
```

---

## Project Structure

```
zenivy-website/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 根 Layout
│   │   ├── page.tsx      # 首頁 Landing Page
│   │   └── globals.css   # 全域樣式
│   └── components/       # 共用元件
│       ├── ui/           # 基礎 UI 元件
│       └── sections/     # 頁面區塊
├── public/
│   ├── brand/            # 品牌資源（logo, icon）
│   └── fonts/            # 字體檔案
└── doc/
    └── design-tokens.md  # 設計規範
```

---

## Brand Resources

### Logo 檔案

| 檔案 | 路徑 | 用途 |
|------|------|------|
| 填充版 | `public/brand/logo/logo.svg` | 淺色背景 |
| 描邊版 | `public/brand/logo/logo-outline.svg` | 深色背景 |
| Icon | `public/brand/icon/icon-1024.png` | App Icon |

### 品牌色彩

| 名稱 | Hex | 用途 |
|------|-----|------|
| **Teal 500** | `#14B8A6` | 主要品牌色 |
| Teal 400 | `#2DD4BF` | Dark Mode 強調 |
| Amber 500 | `#F59E0B` | CTA 點綴色 |
| Stone 50 | `#FAFAF9` | 頁面背景 |
| Stone 900 | `#1C1917` | 深色文字 |

### 字體

```css
font-family: 'Nunito', 'Noto Sans TC', sans-serif;
```

- **Nunito**：英文/數字
- **Noto Sans TC**：中文

---

## Landing Page Sections

本 Landing Page 包含以下區塊：

### 1. Hero Section
- 品牌標語
- 產品一句話介紹
- CTA 按鈕（下載/Waitlist）
- 產品截圖或動畫

### 2. Features Section
- 3-4 個核心功能
- 圖示 + 標題 + 簡短說明

### 3. Pricing Section
- 定價方案（Free / Pro）
- 功能比較表

### 4. Waitlist / CTA Section
- Email 收集表單
- 提前註冊獎勵

### 5. FAQ Section
- 常見問題折疊區塊

### 6. Footer
- 版權資訊
- 社群連結
- 法律連結

---

## Design Guidelines

### 圓角

| 元素 | 圓角 | Tailwind |
|------|------|----------|
| 卡片/區塊 | 16px | `rounded-2xl` |
| 按鈕 | 10px | `rounded-[10px]` |
| 輸入框 | 10px | `rounded-[10px]` |
| Badge | 8px | `rounded-lg` |

### 陰影

| 名稱 | CSS | 用途 |
|------|-----|------|
| subtle | `0 2px 8px rgba(0,0,0,0.04)` | 卡片 |
| medium | `0 4px 16px rgba(0,0,0,0.08)` | Modal |

### 間距

- 基於 4px grid
- 區塊間距：`py-16` 或 `py-24`
- 內容最大寬度：`max-w-6xl mx-auto`

---

## Cloudflare Pages Deployment

### 設定

```bash
# Build command
npm run build

# Output directory
.next
```

### 自訂網域

- 主網域：`zenivy.app`
- DNS：Cloudflare 管理

---

## Related Resources

- [主產品專案](../Project_Contact/) — Zenivy Desktop App
- [Brand Guidelines](./public/brand/guidelines.md)
- [Design Tokens](./doc/design-tokens.md)
