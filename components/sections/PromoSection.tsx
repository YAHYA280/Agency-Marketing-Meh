"use client";

interface PromoSectionProps {
  heading1: string;
  description1: string;
  heading2: string;
  description2: string;
  heading3: string;
  description3: string;
}

export function PromoSection({
  heading1,
  description1,
  heading2,
  description2,
  heading3,
  description3,
}: PromoSectionProps) {
  return (
    <section className="section promo-area ptb_100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Single Promo 1 */}
          <div className="single-promo grad-hover text-center p-8 bg-white">
            <div className="promo-wrapper">
              <h3 className="mb-3 text-[38px] font-bold lowercase leading-[0.9em] tracking-[-1.6px]">
                {heading1}
              </h3>
              <p className="text-[#565656] leading-6">
                {description1}
              </p>
            </div>
          </div>

          {/* Single Promo 2 - Active/Middle */}
          <div className="single-promo grad-hover active text-center p-8 bg-white">
            <div className="promo-wrapper">
              <h3 className="mb-3 text-[38px] font-bold lowercase leading-[0.9em] tracking-[-1.6px]">
                {heading2}
              </h3>
              <p className="text-[#565656] leading-6">
                {description2}
              </p>
            </div>
          </div>

          {/* Single Promo 3 */}
          <div className="single-promo grad-hover text-center p-8 bg-white">
            <div className="promo-wrapper">
              <h3 className="mb-3 text-[38px] font-bold lowercase leading-[0.9em] tracking-[-1.6px]">
                {heading3}
              </h3>
              <p className="text-[#565656] leading-6">
                {description3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
