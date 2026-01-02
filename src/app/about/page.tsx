import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { Prose } from "@/components/site/Prose";

export const metadata: Metadata = {
  title: "關於｜Zenivy",
  description:
    "Zenivy 的方向很單純：留出讓心能靜下來的條件，也留出讓成長發生的時間。",
};

export default function AboutPage() {
  return (
    <main>
      <Container className="py-16">
        <Prose>
          <h1>關於</h1>

          <h2>方向敘述</h2>
          <p>
            Zenivy 的方向很單純：留出讓心能靜下來的條件，也留出讓成長發生的時間。
          </p>
          <p>
            Zen 是「能看見、能選擇」的狀態；Ivy 是「能延續、能累積」的變化。
          </p>
          <p>我們不追求更多，而是維持留白——讓重要的事，有發生的餘地。</p>

          <hr />

          <h2>核心原則</h2>
          <ol>
            <li>
              <strong>留白優先</strong>：保留空間，比增加內容更重要。
            </li>
            <li>
              <strong>減少雜訊</strong>：降低打擾與干擾，讓心更容易靜下來。
            </li>
            <li>
              <strong>把選擇說清楚</strong>：讓人更容易看見重點，做出自己的選擇。
            </li>
            <li>
              <strong>走得長久</strong>：改變要能長期維持、能累積，而不是靠短期衝刺。
            </li>
            <li>
              <strong>工具退場</strong>：好的系統會退到背景，讓生活回到眼前。
            </li>
          </ol>

          <h2>定義</h2>
          <p>
            <strong>Zen</strong>：靜得下來，也看得更清楚。<br />
            <strong>Ivy</strong>：持續的成長。
          </p>
        </Prose>
      </Container>
    </main>
  );
}
