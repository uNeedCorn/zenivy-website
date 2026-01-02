import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { Prose } from "@/components/site/Prose";

export const metadata: Metadata = {
  title: "理念｜Zenivy",
  description: "留白，是為了讓心能靜下來。我們相信，生活需要空間，讓節奏自然浮現。",
};

export default function ManifestoPage() {
  return (
    <main>
      <Container className="py-16">
        <Prose>
          <h1>理念</h1>

          <h2>為什麼</h2>
          <p>
            <strong>留白，是為了讓心能靜下來。</strong>
          </p>

          <h2>核心信念</h2>
          <p>
            我們相信，生活需要空間，讓節奏自然浮現。當一切被填滿，就很難靜下來。
          </p>
          <p>
            Zenivy 的存在，是為了把留白留住：減少雜訊，讓心能靜下來，也能更從容地走下去。
          </p>

          <h2>方向敘述</h2>
          <p>
            Zenivy 的方向很單純：留出讓心能靜下來的條件，也留出讓成長發生的時間。
          </p>
          <p>
            Zen 是「能看見、能選擇」的狀態；Ivy 是「能延續、能累積」的變化。
          </p>
          <p>我們不追求更多，而是維持留白——讓重要的事，有發生的餘地。</p>

          <h2>雜訊的定義</h2>
          <p>
            雜訊不是資訊，而是那些佔據心思、打斷節奏、讓重要的事變得模糊的東西。
          </p>
          <p>
            Zenivy 追求的不是隔絕世界，而是減少雜訊，讓進來的訊息有邊界、有節奏、能好好消化。
          </p>

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

          <h2>使命與願景</h2>
          <p>
            <strong>使命</strong>
            <br />
            用能走得長久的方式維持留白，減少雜訊，讓心能靜下來，也能更從容地走下去。
          </p>
          <p>
            <strong>願景</strong>
            <br />
            讓更多人的日常，能自然找到節奏，讓重要的事有發生的餘地。
          </p>

          <h2>我們做什麼、也不做什麼</h2>
          <p>
            <strong>我們做</strong>
            <br />
            建立能維持留白的系統，讓日常更容易靜下來，讓成長能延續。
          </p>
          <p>
            <strong>我們不做</strong>
            <br />
            不追求更多刺激、不追求填滿、不追求讓人永遠在線。
          </p>
        </Prose>
      </Container>
    </main>
  );
}
