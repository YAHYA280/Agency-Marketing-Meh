import { setRequestLocale } from 'next-intl/server';

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-agency-dark pt-32 pb-20">
      <div className="container px-4">
        <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
        <p className="text-agency-light/70 text-lg">Coming soon...</p>
      </div>
    </div>
  );
}
