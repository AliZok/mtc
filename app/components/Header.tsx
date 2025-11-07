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
              href="#contact"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-[#024885]" : "text-white hover:text-white/80"
              }`}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#cd1e29' }}
            >
              Get Quote
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
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#024885]" : "text-white hover:text-white/80"
                }`}
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 text-center"
                style={{ backgroundColor: '#cd1e29' }}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

