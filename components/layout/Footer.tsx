"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const params = useParams();
  const locale = params.locale as string;

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' }
  ];

  const quickLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/about`, label: tNav('about') },
    { href: `/${locale}/portfolio`, label: tNav('portfolio') },
    { href: `/${locale}/blog`, label: tNav('blog') }
  ];

  const services = [
    { href: `/${locale}/services#uiux`, label: 'UI/UX Design' },
    { href: `/${locale}/services#webdev`, label: 'Web Development' },
    { href: `/${locale}/services#mobile`, label: 'Mobile Apps' },
    { href: `/${locale}/services#branding`, label: 'Branding' }
  ];

  return (
    <footer className="relative bg-agency-dark border-t border-agency-light/10">
      {/* Main Footer */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href={`/${locale}`} className="flex items-center space-x-2 group mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-agency-cyan blur-md opacity-50"></div>
                <div className="relative w-10 h-10 bg-agency-cyan rounded-lg flex items-center justify-center">
                  <span className="text-agency-dark font-bold text-xl">SL</span>
                </div>
              </div>
              <div>
                <span className="text-white font-bold text-xl block leading-none">Sky Limit</span>
                <span className="text-agency-cyan text-xs font-semibold">PRO AGENCY</span>
              </div>
            </Link>
            <p className="text-agency-light/70 mb-6 leading-relaxed">
              {t('description')}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-agency-gray border border-agency-light/10 flex items-center justify-center text-agency-light hover:bg-agency-cyan hover:text-agency-dark hover:border-agency-cyan transition-all transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-agency-light/70 hover:text-agency-cyan transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-agency-cyan mr-0 group-hover:w-4 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-agency-light/70 hover:text-agency-cyan transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-agency-cyan mr-0 group-hover:w-4 group-hover:mr-2 transition-all"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('newsletter.title')}</h3>
            <p className="text-agency-light/70 mb-4">
              {t('newsletter.description')}
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="px-4 py-3 bg-agency-gray border border-agency-light/10 rounded-lg text-white placeholder-agency-light/50 focus:outline-none focus:border-agency-cyan transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-agency-cyan text-agency-dark font-semibold rounded-lg hover:bg-agency-cyan/90 transition-all"
              >
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-agency-light/10">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-agency-light/70 text-sm text-center md:text-left">
              {t('copyright')}
            </p>
            <div className="flex space-x-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-agency-light/70 hover:text-agency-cyan text-sm transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-agency-light/70 hover:text-agency-cyan text-sm transition-colors"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-agency-cyan to-transparent"></div>
    </footer>
  );
}
