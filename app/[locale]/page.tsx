import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const tHero = useTranslations("hero");
  const tServices = useTranslations("services");
  const tPortfolio = useTranslations("portfolio");
  const tStats = useTranslations("stats");
  const tCta = useTranslations("cta");

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <HeroSection
        subtitle={tHero("subtitle")}
        title={tHero("title")}
        description={tHero("description")}
        ctaPrimary={tHero("cta_primary")}
        ctaSecondary={tHero("cta_secondary")}
      />

      {/* Section 2: Services */}
      <ServicesSection
        title={tServices("title")}
        subtitle={tServices("subtitle")}
        description={tServices("description")}
        services={{
          uiux: {
            title: tServices("uiux.title"),
            description: tServices("uiux.description"),
          },
          webdev: {
            title: tServices("webdev.title"),
            description: tServices("webdev.description"),
          },
          mobileapp: {
            title: tServices("mobileapp.title"),
            description: tServices("mobileapp.description"),
          },
          branding: {
            title: tServices("branding.title"),
            description: tServices("branding.description"),
          },
          ecommerce: {
            title: tServices("ecommerce.title"),
            description: tServices("ecommerce.description"),
          },
          seo: {
            title: tServices("seo.title"),
            description: tServices("seo.description"),
          },
        }}
      />

      {/* Section 3: Portfolio */}
      <PortfolioSection
        title={tPortfolio("title")}
        subtitle={tPortfolio("subtitle")}
        description={tPortfolio("description")}
        viewAll={tPortfolio("viewAll")}
      />

      {/* Section 4: Stats */}
      <ContactSection />

      {/* Section 5: CTA */}
      <CTASection
        title={tCta("title")}
        description={tCta("description")}
        button={tCta("button")}
      />
    </div>
  );
}
