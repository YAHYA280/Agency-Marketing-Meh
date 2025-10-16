"use client";

interface PricingSectionProps {
  title: string;
  description: string;
}

export function PricingSection({ title, description }: PricingSectionProps) {
  return (
    <section id="pricing" className="section price-plan-area overflow-hidden ptb_100">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-7/12">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>Our Price Plans</h2>
              <p className="hidden sm:block mt-4 text-[15px] leading-6 text-[#565656]">
                {description}
              </p>
              <p className="block sm:hidden mt-4 text-[15px] leading-6 text-[#565656]">
                {description.substring(0, 100)}...
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 price-plan-wrapper">
              {/* Basic Plan */}
              <div className="single-price-plan color-1 bg-hover hover-top text-center p-8 bg-white shadow-[0_0.313rem_0.875rem_rgba(45,49,54,0.09)] rounded-2xl transition-all duration-300 overflow-hidden">
                {/* Plan Title */}
                <div className="plan-title mb-3">
                  <h3 className="mb-2 text-[30px] tracking-[-1.6px]">Basic</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nemo.</p>
                </div>
                {/* Plan Price */}
                <div className="plan-price pb-3">
                  <span className="text-[#45108a] font-bold text-[34px]">$</span>
                  <span className="text-5xl font-bold">49</span>
                  <sub className="text-muted font-medium text-2xl">/mo</sub>
                </div>
                {/* Plan Description */}
                <div className="plan-description">
                  <ul className="plan-features">
                    <li className="py-2 text-[#333]">5GB Linux Web Space</li>
                    <li className="py-2 text-[#333]">5 MySQL Databases</li>
                    <li className="py-2 text-muted">24/7 Tech Support</li>
                    <li className="py-2 text-muted">Daily Backups</li>
                  </ul>
                </div>
                {/* Plan Button */}
                <div className="plan-button">
                  <a href="#" className="btn btn-bordered mt-3">
                    Get Started
                  </a>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="single-price-plan color-2 bg-hover active hover-top text-center p-8 bg-white shadow-[0_0.313rem_0.875rem_rgba(45,49,54,0.09)] rounded-2xl transition-all duration-300 overflow-hidden mt-0 md:mt-0">
                {/* Plan Title */}
                <div className="plan-title mb-3">
                  <h3 className="mb-2 text-[30px] tracking-[-1.6px]">
                    Pro{" "}
                    <sup>
                      <span className="badge badge-pill badge-warning ml-2 bg-yellow-500 text-white px-3 py-1 text-xs rounded-full">
                        Recommended
                      </span>
                    </sup>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nemo.</p>
                </div>
                {/* Plan Price */}
                <div className="plan-price pb-3">
                  <span className="text-[#45108a] font-bold text-[34px]">$</span>
                  <span className="text-5xl font-bold">129</span>
                  <sub className="text-muted font-medium text-2xl">/mo</sub>
                </div>
                {/* Plan Description */}
                <div className="plan-description">
                  <ul className="plan-features">
                    <li className="py-2 text-[#333]">10GB Linux Web Space</li>
                    <li className="py-2 text-[#333]">50 MySQL Databases</li>
                    <li className="py-2 text-[#333]">Unlimited Email</li>
                    <li className="py-2 text-[#333]">Daily Backups</li>
                  </ul>
                </div>
                {/* Plan Button */}
                <div className="plan-button">
                  <a href="#" className="btn btn-bordered active mt-3">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-5">
          <p className="pt-4 font-medium">
            Not sure what to choose?{" "}
            <a className="service-btn" href="#">
              <strong>Contact Us</strong>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
