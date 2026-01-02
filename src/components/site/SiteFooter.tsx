import Link from "next/link";
import { Container } from "@/components/site/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 py-10">
      <Container size="wide" className="flex flex-col gap-6">
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-600">
          <Link className="hover:text-stone-900 transition-colors" href="/about">
            關於
          </Link>
          <Link
            className="hover:text-stone-900 transition-colors"
            href="/manifesto"
          >
            理念
          </Link>
          <Link
            className="hover:text-stone-900 transition-colors"
            href="/privacy"
          >
            隱私權政策
          </Link>
          <Link className="hover:text-stone-900 transition-colors" href="/terms">
            使用條款
          </Link>
          <a
            className="hover:text-stone-900 transition-colors"
            href="mailto:hello@zenivy.app"
          >
            hello@zenivy.app
          </a>
        </nav>

        <p className="text-sm text-stone-500">© {year} Zenivy</p>
      </Container>
    </footer>
  );
}
