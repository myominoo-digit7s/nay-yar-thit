"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
      ? "bg-white/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
      }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NAY YAR THIT Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
            <div className={`transition-colors ${scrolled || isOpen ? "text-primary-700" : "text-white"}`}>
              <span className="block text-xl font-bold tracking-tight">NAY YAR THIT</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Link href="/corporate#who-we-are" className={`text-sm font-medium transition-all relative py-2 ${scrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-primary-200"}`}>Who We Are</Link>
            <Link href="/corporate#services" className={`text-sm font-medium transition-all relative py-2 ${scrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-primary-200"}`}>Services</Link>
            <Link href="/corporate#about" className={`text-sm font-medium transition-all relative py-2 ${scrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-primary-200"}`}>Values</Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${scrolled || isOpen ? "bg-neutral-800" : "bg-white"} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${scrolled || isOpen ? "bg-neutral-800" : "bg-white"} ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${scrolled || isOpen ? "bg-neutral-800" : "bg-white"} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="py-4 space-y-1 bg-white rounded-2xl shadow-xl my-2 px-4 border border-neutral-100">
            <Link href="/corporate#who-we-are" className="block px-4 py-3 font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 rounded-xl" onClick={() => setIsOpen(false)}>Who We Are</Link>
            <Link href="/corporate#services" className="block px-4 py-3 font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 rounded-xl" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/corporate#about" className="block px-4 py-3 font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 rounded-xl" onClick={() => setIsOpen(false)}>Values</Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
