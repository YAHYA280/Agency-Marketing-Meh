import { setRequestLocale } from 'next-intl/server';

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <p className="text-lg text-muted-foreground">
          Our services page content will be added here.
        </p>
      </div>
    </div>
  );
}
