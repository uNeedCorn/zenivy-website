import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Prose } from "@/components/site/Prose";

export const metadata: Metadata = {
  title: "服務條款｜Zenivy",
  description: "Zenivy 服務條款與使用規範。",
};

const LAST_UPDATED = "2026-01-02";

export default function TermsPage() {
  return (
    <main>
      <Container className="py-16">
        <Prose>
          <h1>服務條款</h1>

          <p>
            歡迎使用 Zenivy（由 Nextora 開發）的服務。使用我們的服務即表示你同意以下條款。
          </p>

          <h2>服務說明</h2>
          <p>
            Inboxless 是一款 Email 分析與收件匣清理工具，協助你：
          </p>
          <ul>
            <li>分析 Gmail 收件匣，了解信件來源與分布。</li>
            <li>批次清理不需要的信件，釋放儲存空間。</li>
            <li>管理訂閱信件，減少收件匣雜訊。</li>
          </ul>

          <h2>帳號與授權</h2>
          <p>使用本服務需要：</p>
          <ul>
            <li>擁有有效的 Google 帳號。</li>
            <li>授權本應用程式存取你的 Gmail（透過 Google OAuth）。</li>
          </ul>
          <p>
            你可以隨時在{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google 帳號設定
            </a>{" "}
            中撤銷授權。
          </p>

          <h2>你的責任</h2>
          <ul>
            <li>你同意合法使用本服務，並遵守所在地的相關法規。</li>
            <li>你了解並同意授權本應用程式存取你的 Gmail 帳號。</li>
            <li>你負責保管自己的帳號安全。</li>
          </ul>

          <h2>重要警告：不可逆操作</h2>
          <p>
            <strong>刪除信件是不可逆的操作。</strong>一旦信件被刪除，將無法復原。請在執行刪除操作前仔細確認。我們建議：
          </p>
          <ul>
            <li>先使用「封存」功能測試。</li>
            <li>重要信件請先備份。</li>
            <li>確認選取的信件無誤後再執行刪除。</li>
          </ul>

          <h2>免責聲明</h2>
          <p>
            本服務以「現況」提供。我們盡力確保服務穩定運作，但不保證：
          </p>
          <ul>
            <li>服務不會中斷或完全無錯誤。</li>
            <li>分析結果百分之百準確。</li>
          </ul>
          <p>
            我們不對因使用或無法使用本服務所造成的任何直接或間接損失負責，包括但不限於資料遺失、業務中斷等。
          </p>

          <h2>服務限制與終止</h2>
          <ul>
            <li>我們保留隨時修改、暫停或終止服務的權利。</li>
            <li>若你違反本條款，我們可能會限制或終止你的使用權限。</li>
            <li>你可以隨時停止使用本服務並撤銷授權。</li>
          </ul>

          <h2>智慧財產權</h2>
          <p>
            本服務的所有內容、設計、程式碼均為 Nextora 所有或已獲授權使用，受著作權法保護。
          </p>

          <h2>條款更新</h2>
          <p>
            我們可能會更新本條款。重大變更會在網站公告或透過 Email 通知。繼續使用本服務即表示你同意更新後的條款。
          </p>

          <h2>適用法律</h2>
          <p>
            本條款受中華民國法律管轄。如有爭議，雙方同意以台灣台北地方法院為第一審管轄法院。
          </p>

          <h2>聯絡我們</h2>
          <p>
            有任何問題，請來信{" "}
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
