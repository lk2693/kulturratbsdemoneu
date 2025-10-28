"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-gray-50 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/mitglied-werden" className="bg-black text-white px-3 py-1.5 sm:px-4 text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors">
              Mitglied werden
            </Link>
          </div>
          <div className="hidden sm:flex space-x-3 md:space-x-4">
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/presse" className="text-gray-600 hover:text-gray-900 hidden md:inline">Presse & Medien</Link>
            <Link href="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link>
            <Link href="/en" className="text-gray-600 hover:text-gray-900">EN</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Kulturrat BS
              <span className="hidden sm:inline"> Braunschweig</span>
            </Link>
          </div>

          {/* Accessibility Links */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <Link href="/leichte-sprache" className="text-gray-600 hover:text-gray-900">
              Leichte Sprache
            </Link>
            <Link href="/gebaerdensprache" className="text-gray-600 hover:text-gray-900">
              Gebärdensprache
            </Link>
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block border-t">
          <div className="flex space-x-6 lg:space-x-8 py-3 md:py-4">
            <Link href="/projekte" className="text-sm md:text-base text-gray-900 hover:text-blue-600 font-medium">
              Projekte
            </Link>
            <Link href="/ueber-uns" className="text-sm md:text-base text-gray-900 hover:text-blue-600 font-medium">
              Über uns
            </Link>
            <Link href="/kontakt" className="text-sm md:text-base text-gray-900 hover:text-blue-600 font-medium">
              Kontakt
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/projekte" className="block px-3 py-2 text-base text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded">
                Projekte
              </Link>
              <Link href="/ueber-uns" className="block px-3 py-2 text-base text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded">
                Über uns
              </Link>
              <Link href="/kontakt" className="block px-3 py-2 text-base text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded">
                Kontakt
              </Link>
              <div className="border-t pt-2 mt-2">
                <Link href="/leichte-sprache" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                  Leichte Sprache
                </Link>
                <Link href="/gebaerdensprache" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                  Gebärdensprache
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}