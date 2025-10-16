import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      <HeroSection title={t('title')} subtitle={t('subtitle')} />

      {/* Placeholder for other sections */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Section 2</h2>
          <p className="text-center text-muted-foreground">Content coming soon...</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Section 3</h2>
          <p className="text-center text-muted-foreground">Content coming soon...</p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Section 4</h2>
          <p className="text-center text-muted-foreground">Content coming soon...</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Section 5</h2>
          <p className="text-center text-muted-foreground">Content coming soon...</p>
        </div>
      </section>
    </div>
  );
}
