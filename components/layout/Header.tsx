"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Header() {
  const t = useTranslations('navigation');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/portfolio`, label: t('portfolio') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/faq`, label: t('faq') },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-agency-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-agency-cyan blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-10 h-10 bg-agency-cyan rounded-lg flex items-center justify-center">
                <span className="text-agency-dark font-bold text-xl">SL</span>
              </div>
            </div>
            <div>
              <span className="text-white font-bold text-xl block leading-none">Sky Limit</span>
              <span className="text-agency-cyan text-xs font-semibold">PRO AGENCY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.href)
                    ? 'text-agency-cyan'
                    : 'text-agency-light hover:text-agency-cyan'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-agency-cyan transition-all group-hover:w-full ${
                    isActive(item.href) ? 'w-full' : ''
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={`/${locale}/contact`}
              className="px-6 py-2.5 bg-agency-cyan text-agency-dark font-semibold rounded-lg hover:bg-agency-cyan/90 transition-all hover:shadow-lg hover:shadow-agency-cyan/50"
            >
              {t('contact')}
            </Link>
            <Link
              href={`/${locale === 'en' ? 'fr' : 'en'}`}
              className="px-4 py-2 border border-agency-cyan text-agency-cyan font-medium rounded-lg hover:bg-agency-cyan hover:text-agency-dark transition-all"
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-agency-light hover:text-agency-cyan transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-agency-dark/95 backdrop-blur-md rounded-b-xl">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors px-4 py-2 ${
                    isActive(item.href)
                      ? 'text-agency-cyan bg-agency-gray'
                      : 'text-agency-light hover:text-agency-cyan hover:bg-agency-gray'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-2">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-2.5 bg-agency-cyan text-agency-dark font-semibold rounded-lg text-center"
                >
                  {t('contact')}
                </Link>
                <Link
                  href={`/${locale === 'en' ? 'fr' : 'en'}`}
                  className="px-4 py-2 border border-agency-cyan text-agency-cyan font-medium rounded-lg text-center"
                >
                  {locale === 'en' ? 'FR' : 'EN'}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
