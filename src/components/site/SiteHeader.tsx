import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";

const notionFormUrl = process.env.NEXT_PUBLIC_NOTION_FORM_URL;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur">
      <Container size="wide" className="h-14 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold text-stone-900 hover:text-stone-700 transition-colors"
        >
          <Image
            src="/brand/logo/logo.svg"
            alt="Zenivy"
            width={24}
            height={24}
            priority
          />
          Zenivy
        </Link>

        <nav className="flex items-center gap-1 text-sm text-stone-600">
          <Link
            href="/manifesto"
            className="px-3 py-2 rounded-[10px] hover:bg-stone-100 hover:text-stone-900 transition-colors focus:outline-none focus:ring-[3px] focus:ring-[#E7F4F0]"
          >
            理念
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded-[10px] hover:bg-stone-100 hover:text-stone-900 transition-colors focus:outline-none focus:ring-[3px] focus:ring-[#E7F4F0]"
          >
            關於
          </Link>
          {notionFormUrl ? (
            <a
              href={notionFormUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 px-3 py-2 rounded-[10px] border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors focus:outline-none focus:ring-[3px] focus:ring-[#E7F4F0]"
            >
              回饋
            </a>
          ) : null}
        </nav>
      </Container>
    </header>
  );
}
