"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-[#024885]" : "text-white"
            }`}
          >
            Marium Trading & Contracting
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-[#024885]" : "text-white hover:text-white/80"
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-[#024885]" : "text-white hover:text-white/80"
              }`}
            >
              About
            </a>
            <a
              href="tel:+37498850187"
              className="px-6 py-2 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 flex items-center gap-2"
              style={{ backgroundColor: '#cd1e29' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#024885]" : "text-white hover:text-white/80"
                }`}
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#024885]" : "text-white hover:text-white/80"
                }`}
              >
                About
              </a>
              <a
                href="tel:+37498850187"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 text-center flex items-center justify-center gap-2"
                style={{ backgroundColor: '#cd1e29' }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}



