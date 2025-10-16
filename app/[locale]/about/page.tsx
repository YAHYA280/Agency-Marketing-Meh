import { setRequestLocale } from 'next-intl/server';

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground">
          Learn more about our agency and team.
        </p>
      </div>
    </div>
  );
}
