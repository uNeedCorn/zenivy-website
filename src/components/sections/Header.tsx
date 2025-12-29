"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/logo/logo.svg"
              alt="Zenivy"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-stone-800">Zenivy</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-stone-600 hover:text-stone-800 transition-colors">
              功能
            </Link>
            <Link href="#pricing" className="text-stone-600 hover:text-stone-800 transition-colors">
              方案
            </Link>
            <Link href="#faq" className="text-stone-600 hover:text-stone-800 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#waitlist"
              className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-[10px] transition-colors"
            >
              立即下載
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col gap-4">
              <Link href="#features" className="text-stone-600 hover:text-stone-800 transition-colors">
                功能
              </Link>
              <Link href="#pricing" className="text-stone-600 hover:text-stone-800 transition-colors">
                方案
              </Link>
              <Link href="#faq" className="text-stone-600 hover:text-stone-800 transition-colors">
                FAQ
              </Link>
              <Link
                href="#waitlist"
                className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-[10px] transition-colors text-center"
              >
                立即下載
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
