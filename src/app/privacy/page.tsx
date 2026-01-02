import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Prose } from "@/components/site/Prose";

export const metadata: Metadata = {
  title: "隱私權政策｜Zenivy",
  description: "Zenivy 隱私權政策與資料處理原則。",
};

const LAST_UPDATED = "2026-01-02";

export default function PrivacyPage() {
  return (
    <main>
      <Container className="py-16">
        <Prose>
          <h1>隱私權政策</h1>

          <p>
            Zenivy（由 Nextora 開發）致力於保護你的隱私。本政策說明我們如何收集、使用和保護你的資料。
          </p>

          <h2>服務說明</h2>
          <p>
            Inboxless 是一款 Email 分析與收件匣清理工具，協助你整理和管理 Gmail 信件。
          </p>

          <h2>我們收集的資料</h2>
          <p>當你使用我們的服務時，我們可能會收集以下資料：</p>
          <ul>
            <li>
              <strong>Google 帳號資訊</strong>：你的 Email 地址、名稱和頭像（用於身份識別）。
            </li>
            <li>
              <strong>Gmail 信件 Metadata</strong>：寄件人、主旨、日期等資訊（用於分析）。
            </li>
          </ul>

          <h3>重要說明</h3>
          <ul>
            <li>我們<strong>不會</strong>在伺服器上儲存你的信件內容。</li>
            <li>所有資料分析均在你的裝置（用戶端）完成。</li>
            <li>關閉應用程式後，本地資料即清除。</li>
          </ul>

          <h2>OAuth 權限說明</h2>
          <p>我們的應用程式會請求以下 Google OAuth 權限：</p>
          <ul>
            <li>
              <strong>gmail.readonly</strong>：讀取你的信件，用於分析收件匣狀況。
            </li>
            <li>
              <strong>gmail.modify</strong>：刪除或封存信件（僅在你主動操作時執行）。
            </li>
          </ul>

          <h2>第三方服務</h2>
          <p>我們使用以下第三方服務：</p>
          <ul>
            <li>
              <strong>Google OAuth</strong>：用於安全的身份驗證。
            </li>
            <li>
              <strong>Supabase</strong>：用於用戶身份管理。
            </li>
          </ul>

          <h2>資料保留</h2>
          <p>
            我們遵循最小化資料保留原則。分析用的信件資料僅存於你的裝置，關閉應用程式後即清除。帳號相關資料會在你刪除帳號後移除。
          </p>

          <h2>資料安全</h2>
          <p>
            我們採用業界標準的安全措施保護你的資料，包括加密傳輸（HTTPS）和安全的身份驗證機制。
          </p>

          <h2>你的權利</h2>
          <p>你有權：</p>
          <ul>
            <li>隨時撤銷應用程式的 Google 帳號存取權限。</li>
            <li>要求刪除你的帳號和相關資料。</li>
            <li>詢問我們如何處理你的資料。</li>
          </ul>

          <h2>政策更新</h2>
          <p>
            我們可能會更新本政策。重大變更會在網站公告或透過 Email 通知（若你有留下聯絡方式）。
          </p>

          <h2>聯絡我們</h2>
          <p>
            任何隱私相關問題，請來信{" "}
            <a href="mailto:ralph@nextora.io">ralph@nextora.io</a>。
          </p>

          <p className="not-prose text-sm text-stone-500">
            最後更新：{LAST_UPDATED}
          </p>
          <p className="not-prose text-sm">
            <Link href="/">← 回首頁</Link>
          </p>
        </Prose>
      </Container>
    </main>
  );
}
