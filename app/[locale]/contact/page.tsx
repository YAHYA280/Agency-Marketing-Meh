import { setRequestLocale } from 'next-intl/server';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Get in touch with our team.
        </p>
      </div>
    </div>
  );
}
