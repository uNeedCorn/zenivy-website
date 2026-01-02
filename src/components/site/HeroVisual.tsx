const teal = "#14B8A6";
const tealSoft = "rgba(20, 184, 166, 0.28)";
const amberSoft = "rgba(245, 158, 11, 0.22)";
const line = "rgba(28, 25, 23, 0.14)";
const lineTeal = "rgba(20, 184, 166, 0.28)";

function Node({
  x,
  y,
  r = 8,
  fill = "white",
  stroke = line,
}: {
  x: number;
  y: number;
  r?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 6} fill="rgba(255,255,255,0.75)" />
      <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth={1} />
      <circle cx={x} cy={y} r={Math.max(2, r - 5)} fill={teal} opacity={0.85} />
    </g>
  );
}

export function HeroVisual({
  variant = "framed",
}: {
  variant?: "framed" | "hero" | "background";
}) {
  if (variant === "hero") {
    return (
      <div className="relative overflow-hidden rounded-3xl">
        <HeroVisual variant="background" />
      </div>
    );
  }

  if (variant === "background") {
    return (
      <svg
        viewBox="0 0 900 560"
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="rgba(0,0,0,0.10)"
            />
          </filter>
          <filter id="blurBlob" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        <g filter="url(#blurBlob)" opacity="0.95">
          <path
            d="M140 150 C 220 70, 350 90, 430 160 C 510 230, 450 320, 330 320 C 210 320, 70 250, 140 150 Z"
            fill={tealSoft}
          />
          <path
            d="M620 120 C 740 60, 850 110, 820 220 C 790 330, 650 320, 590 250 C 530 180, 540 160, 620 120 Z"
            fill={amberSoft}
          />
          <path
            d="M260 360 C 330 300, 450 320, 500 400 C 550 480, 470 520, 360 500 C 250 480, 200 420, 260 360 Z"
            fill="rgba(231,244,240,0.9)"
          />
        </g>

        <path
          d="M170 140 C 270 80, 360 120, 450 190"
          fill="none"
          stroke={lineTeal}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M450 190 C 520 250, 610 260, 700 210"
          fill="none"
          stroke={line}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M450 190 C 460 290, 380 340, 290 360"
          fill="none"
          stroke={line}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M290 360 C 430 420, 560 420, 690 350"
          fill="none"
          stroke={line}
          strokeWidth="2"
          strokeLinecap="round"
        />

        <Node x={170} y={140} r={10} />
        <Node x={320} y={128} r={9} />
        <Node x={450} y={190} r={12} />
        <Node x={610} y={252} r={9} />
        <Node x={700} y={210} r={11} />
        <Node x={290} y={360} r={11} />
        <Node x={520} y={420} r={9} />
        <Node x={690} y={350} r={10} />

        <g filter="url(#softShadow)">
          <rect
            x="505"
            y="88"
            width="310"
            height="168"
            rx="18"
            fill="white"
            stroke="rgba(28,25,23,0.14)"
          />
          <rect
            x="528"
            y="64"
            width="260"
            height="120"
            rx="18"
            fill="rgba(255,255,255,0.85)"
            stroke="rgba(28,25,23,0.10)"
          />
          <rect
            x="532"
            y="116"
            width="140"
            height="12"
            rx="6"
            fill="rgba(28,25,23,0.08)"
          />
          <rect
            x="532"
            y="136"
            width="210"
            height="12"
            rx="6"
            fill="rgba(28,25,23,0.06)"
          />
          <rect
            x="532"
            y="156"
            width="190"
            height="12"
            rx="6"
            fill="rgba(28,25,23,0.06)"
          />
        </g>
      </svg>
    );
  }

  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
      }
    >
      <div className="absolute -top-28 -right-32 h-[520px] w-[520px] rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -bottom-40 left-[-120px] h-[620px] w-[620px] rounded-full bg-amber-500/15 blur-3xl" />
      <div className="absolute left-[28%] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#E7F4F0] blur-3xl" />

      <div className="relative h-[360px] w-full md:h-[420px]">
        <HeroVisual variant="background" />
      </div>

      {variant === "framed" ? (
        <div className="relative border-t border-stone-200/70 bg-white px-5 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-semibold text-stone-900">
              一張「狀態地圖」
            </div>
            <div className="text-xs text-stone-500">關係 · 節奏 · 邊界</div>
          </div>
          <div className="mt-1 text-sm leading-relaxed text-stone-600">
            不是資訊拼貼，而是把注意力重新排成更剛好的形狀。
          </div>
        </div>
      ) : null}
    </div>
  );
}
