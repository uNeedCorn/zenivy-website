# Design Tokens 設計基元

> Zenivy 網站的設計變數：色彩、字型、間距、圓角、陰影

---

## 色彩系統

### 主色 — Teal

| 名稱 | 色碼 | CSS Variable | 用途 |
|------|------|--------------|------|
| Teal 50 | `#F0FDFA` | `--teal-50` | 極淺背景 |
| Teal 100 | `#CCFBF1` | `--teal-100` | 淺色 Badge |
| Teal 400 | `#2DD4BF` | `--teal-400` | Dark Mode |
| **Teal 500** | `#14B8A6` | `--teal-500` | **主品牌色** |
| Teal 600 | `#0D9488` | `--teal-600` | Hover |
| Teal 700 | `#0F766E` | `--teal-700` | 深色文字 |

### 中性色 — Stone

| 名稱 | 色碼 | CSS Variable | 用途 |
|------|------|--------------|------|
| Stone 50 | `#FAFAF9` | `--stone-50` | 頁面背景 |
| Stone 100 | `#F5F5F4` | `--stone-100` | 卡片背景 |
| Stone 200 | `#E7E5E4` | `--stone-200` | 邊框 |
| Stone 500 | `#78716C` | `--stone-500` | 次要文字 |
| Stone 800 | `#292524` | `--stone-800` | 標題 |
| Stone 900 | `#1C1917` | `--stone-900` | 最深文字 |

### 點綴色 — Amber

| 名稱 | 色碼 | CSS Variable | 用途 |
|------|------|--------------|------|
| Amber 400 | `#FBBF24` | `--amber-400` | 淺強調 |
| **Amber 500** | `#F59E0B` | `--amber-500` | **CTA 點綴** |
| Amber 600 | `#D97706` | `--amber-600` | Hover |

---

## 字型

### 字體家族

```css
--font-sans: 'Nunito', 'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 字級

| 用途 | 大小 | Tailwind | 字重 |
|------|------|----------|------|
| Hero 標題 | 48-64px | `text-5xl md:text-6xl` | 700 |
| Section 標題 | 32-40px | `text-3xl md:text-4xl` | 700 |
| 小標題 | 20-24px | `text-xl md:text-2xl` | 600 |
| 正文 | 16-18px | `text-base md:text-lg` | 400 |
| 小字 | 14px | `text-sm` | 400 |

---

## 圓角

| 元素 | 圓角 | Tailwind |
|------|------|----------|
| Hero 區塊 | 24px | `rounded-3xl` |
| 卡片 | 16px | `rounded-2xl` |
| 按鈕 | 10px | `rounded-[10px]` |
| 輸入框 | 10px | `rounded-[10px]` |
| Badge | 8px | `rounded-lg` |

---

## 陰影

```css
--shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-card: 0 1px 3px rgba(0, 0, 0, 0.08);
--shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
```

---

## 間距

### 區塊間距

| 裝置 | 間距 | Tailwind |
|------|------|----------|
| Mobile | 64px | `py-16` |
| Desktop | 96px | `py-24` |

### 容器

```css
max-width: 1152px;  /* max-w-6xl */
padding: 0 24px;    /* px-6 */
```

---

## 動畫

### 過渡效果

```css
--transition-fast: 150ms ease-out;
--transition-base: 200ms ease-out;
--transition-slow: 300ms ease-out;
```

### Tailwind

```jsx
className="transition-all duration-200 ease-out"
className="hover:scale-105 transition-transform"
```

---

## Tailwind 配置

```js
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        zenivy: {
          light: '#E7F4F0',
        },
      },
      borderRadius: {
        '10': '10px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0,0,0,0.04)',
        'medium': '0 4px 16px rgba(0,0,0,0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        sans: ['Nunito', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
}
```
