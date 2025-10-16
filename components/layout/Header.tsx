"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaTwitter } from 'react-icons/fa';

export function Header() {
  const t = useTranslations('navigation');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `/${locale}`, label: t('home'), hasDropdown: true },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/portfolio`, label: t('portfolio'), hasDropdown: true },
    { href: `/${locale}/blog`, label: t('blog'), hasDropdown: true },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 group">
            <div className="relative">
              <div className={`absolute inset-0 ${isScrolled ? 'bg-purple-600' : 'bg-cyan-400'} blur-md opacity-50 group-hover:opacity-75 transition-all`} />
              <div className={`relative w-10 h-10 ${isScrolled ? 'bg-purple-600' : 'bg-gradient-to-r from-purple-600 to-cyan-600'} rounded-lg flex items-center justify-center transition-all`}>
                <span className="text-white font-bold text-xl">SL</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative flex items-center gap-1 ${
                    isScrolled
                      ? isActive(item.href)
                        ? 'text-purple-600'
                        : 'text-gray-700 hover:text-purple-600'
                      : isActive(item.href)
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side - Social & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isScrolled
                    ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isScrolled
                    ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <FaTwitter size={14} />
              </a>
            </div>

            {/* Search Icon */}
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isScrolled
                  ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Contact Button */}
            <Link
              href={`/${locale}/contact`}
              className={`px-8 py-3 font-semibold rounded-full transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-purple-500/50'
                  : 'bg-white text-purple-900 hover:shadow-white/50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-xl shadow-lg">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full text-center"
              >
                {t('contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
