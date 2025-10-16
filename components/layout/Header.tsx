"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function Header() {
  const t = useTranslations('navigation');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span className="font-bold text-xl">Agency</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link href={`/${locale}`} className="text-sm font-medium transition-colors hover:text-primary">
            {t('home')}
          </Link>
          <Link href={`/${locale}/services`} className="text-sm font-medium transition-colors hover:text-primary">
            {t('services')}
          </Link>
          <Link href={`/${locale}/about`} className="text-sm font-medium transition-colors hover:text-primary">
            {t('about')}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm font-medium transition-colors hover:text-primary">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={`/${locale === 'en' ? 'fr' : 'en'}`}
            className="text-sm font-medium"
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </Link>
        </div>
      </div>
    </header>
  );
}
