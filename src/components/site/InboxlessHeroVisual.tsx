const teal = "#14B8A6";
const tealSoft = "rgba(20, 184, 166, 0.25)";
const tealMedium = "rgba(20, 184, 166, 0.40)";
const line = "rgba(28, 25, 23, 0.12)";
const lineTeal = "rgba(20, 184, 166, 0.35)";

// 郵件信封圖示
function EnvelopeShape({
  x,
  y,
  scale = 1,
  opacity = 0.15,
}: {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <g
      transform={`translate(${x}, ${y}) scale(${scale})`}
      opacity={opacity}
    >
      <rect
        x="-24"
        y="-16"
        width="48"
        height="32"
        rx="4"
        fill="none"
        stroke={teal}
        strokeWidth="1.5"
      />
      <path
        d="M-24 -16 L0 4 L24 -16"
        fill="none"
        stroke={teal}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </g>
  );
}

// 節點元件
function Node({
  x,
  y,
  r = 6,
  fill = "white",
  stroke = line,
  highlight = false,
}: {
  x: number;
  y: number;
  r?: number;
  fill?: string;
  stroke?: string;
  highlight?: boolean;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 4} fill="rgba(255,255,255,0.7)" />
      <circle
        cx={x}
        cy={y}
        r={r}
        fill={fill}
        stroke={highlight ? teal : stroke}
        strokeWidth={highlight ? 1.5 : 1}
      />
      <circle
        cx={x}
        cy={y}
        r={Math.max(2, r - 3)}
        fill={teal}
        opacity={highlight ? 0.9 : 0.7}
      />
    </g>
  );
}

// 浮動郵件卡片
function FloatingEmailCard({
  x,
  y,
  width = 180,
  isRead = false,
}: {
  x: number;
  y: number;
  width?: number;
  isRead?: boolean;
}) {
  return (
    <g filter="url(#cardShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={72}
        rx="12"
        fill="white"
        stroke="rgba(28,25,23,0.10)"
      />
      {/* 未讀指示點 */}
      {!isRead && (
        <circle cx={x + 16} cy={y + 20} r={4} fill={teal} />
      )}
      {/* 寄件者行 */}
      <rect
        x={x + (isRead ? 16 : 28)}
        y={y + 16}
        width={80}
        height={8}
        rx="4"
        fill="rgba(28,25,23,0.12)"
      />
      {/* 主旨行 */}
      <rect
        x={x + 16}
        y={y + 32}
        width={width - 32}
        height={8}
        rx="4"
        fill="rgba(28,25,23,0.06)"
      />
      {/* 預覽行 */}
      <rect
        x={x + 16}
        y={y + 48}
        width={width - 48}
        height={8}
        rx="4"
        fill="rgba(28,25,23,0.04)"
      />
    </g>
  );
}

export function InboxlessHeroVisual() {
  return (
    <svg
      viewBox="0 0 900 560"
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <filter id="softBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="28" />
        </filter>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="12"
            floodColor="rgba(0,0,0,0.08)"
          />
        </filter>
        {/* 漸層 */}
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={tealSoft} />
          <stop offset="100%" stopColor="rgba(20, 184, 166, 0.08)" />
        </linearGradient>
      </defs>

      {/* 背景模糊 blob */}
      <g filter="url(#softBlur)" opacity="0.9">
        {/* 左上 teal blob */}
        <ellipse cx={200} cy={180} rx={220} ry={180} fill={tealSoft} />
        {/* 右上淺色 blob */}
        <ellipse cx={700} cy={160} rx={200} ry={160} fill="rgba(231,244,240,0.85)" />
        {/* 中下 teal blob */}
        <ellipse cx={450} cy={420} rx={250} ry={150} fill="rgba(20, 184, 166, 0.15)" />
        {/* 右下小 blob */}
        <ellipse cx={780} cy={450} rx={140} ry={100} fill={tealSoft} />
      </g>

      {/* 裝飾性郵件圖示 */}
      <EnvelopeShape x={120} y={120} scale={1.2} opacity={0.12} />
      <EnvelopeShape x={780} y={140} scale={0.9} opacity={0.08} />
      <EnvelopeShape x={180} y={420} scale={0.8} opacity={0.10} />
      <EnvelopeShape x={720} y={400} scale={1.0} opacity={0.08} />

      {/* 連接線 - 代表郵件流動 */}
      <path
        d="M150 200 Q 280 140, 400 180"
        fill="none"
        stroke={lineTeal}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />
      <path
        d="M400 180 Q 520 220, 650 180"
        fill="none"
        stroke={line}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M400 180 Q 380 300, 320 380"
        fill="none"
        stroke={line}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M320 380 Q 480 440, 640 380"
        fill="none"
        stroke={lineTeal}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />

      {/* 節點 */}
      <Node x={150} y={200} r={8} highlight />
      <Node x={280} y={160} r={6} />
      <Node x={400} y={180} r={10} highlight />
      <Node x={520} y={200} r={6} />
      <Node x={650} y={180} r={8} />
      <Node x={320} y={380} r={9} highlight />
      <Node x={480} y={410} r={6} />
      <Node x={640} y={380} r={8} />

      {/* 浮動郵件卡片 */}
      <FloatingEmailCard x={500} y={80} width={200} isRead={false} />
      <FloatingEmailCard x={540} y={170} width={180} isRead={true} />

      {/* 分析圖表示意 */}
      <g filter="url(#cardShadow)">
        <rect
          x={100}
          y={280}
          width={160}
          height={100}
          rx="12"
          fill="white"
          stroke="rgba(28,25,23,0.10)"
        />
        {/* 長條圖 */}
        <rect x={120} y={340} width={12} height={28} rx="2" fill={tealMedium} />
        <rect x={140} y={320} width={12} height={48} rx="2" fill={teal} />
        <rect x={160} y={335} width={12} height={33} rx="2" fill={tealMedium} />
        <rect x={180} y={350} width={12} height={18} rx="2" fill="rgba(20,184,166,0.25)" />
        <rect x={200} y={355} width={12} height={13} rx="2" fill="rgba(20,184,166,0.15)" />
        {/* 標題 */}
        <rect x={120} y={296} width={80} height={8} rx="4" fill="rgba(28,25,23,0.10)" />
      </g>
    </svg>
  );
}
