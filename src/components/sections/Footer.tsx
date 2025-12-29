import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/logo/logo-outline.svg"
                alt="Zenivy"
                width={28}
                height={28}
              />
              <span className="text-lg font-bold text-stone-100">Zenivy</span>
            </Link>
            <p className="text-sm">
              &copy; {currentYear} Zenivy. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#features" className="hover:text-stone-100 transition-colors">
              功能
            </Link>
            <Link href="#pricing" className="hover:text-stone-100 transition-colors">
              方案
            </Link>
            <Link href="#faq" className="hover:text-stone-100 transition-colors">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-stone-100 transition-colors">
              隱私政策
            </Link>
            <Link href="/terms" className="hover:text-stone-100 transition-colors">
              使用條款
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://twitter.com/zenivyapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-stone-800 rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="mailto:hello@zenivy.app"
              className="p-2 hover:bg-stone-800 rounded-lg transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
