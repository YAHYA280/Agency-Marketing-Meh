"use client";

interface ReviewsSectionProps {
  title: string;
  description: string;
}

export function ReviewsSection({ title, description }: ReviewsSectionProps) {
  return (
    <section id="review" className="section review-area bg-overlay ptb_100" style={{
      background: 'url(/cta_bg.jpg) no-repeat fixed center center / cover'
    }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-center items-center">
          <div className="lg:col-span-4">
            {/* Section Heading */}
            <div className="section-heading m-0">
              <h2 className="text-white">{title}</h2>
              <p className="text-white hidden sm:block mt-4 text-[15px] leading-6">
                {description}
              </p>
              <p className="text-white block sm:hidden mt-4 text-[15px] leading-6">
                {description.substring(0, 100)}...
              </p>
              <a href="#" className="btn btn-bordered-white mt-4">
                Work with Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 lg:mt-0">
              {/* Single Review 1 */}
              <div className="single-review bg-transparent p-8 shadow-[0_10px_50px_0px_rgba(0,0,0,0.12)]">
                {/* Review Content */}
                <div className="review-content">
                  {/* Review Text */}
                  <div className="review-text">
                    <p className="text-white/50">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam est modi
                      amet error earum aperiam, fuga labore facere rem ab nemo possimus cum
                      excepturi expedita. Culpa rerum, quaerat qui non.
                    </p>
                  </div>
                  {/* Quotation Icon */}
                  <div className="quot-icon">
                    <img className="w-12 h-12" src="/quote.png" alt="Quote" />
                  </div>
                </div>
                {/* Reviewer */}
                <div className="reviewer flex mt-3 items-center">
                  {/* Reviewer Thumb */}
                  <div className="reviewer-thumb">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="/avatar-1.png"
                      alt="Junaid Hasan"
                    />
                  </div>
                  {/* Reviewer Meta */}
                  <div className="reviewer-meta ml-4">
                    <h5 className="reviewer-name text-white mb-2">Junaid Hasan</h5>
                    <h6 className="text-white/50 font-semibold">CEO, Themeland</h6>
                  </div>
                </div>
              </div>

              {/* Single Review 2 */}
              <div className="single-review bg-transparent p-8 shadow-[0_10px_50px_0px_rgba(0,0,0,0.12)]">
                {/* Review Content */}
                <div className="review-content">
                  {/* Review Text */}
                  <div className="review-text">
                    <p className="text-white/50">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam est modi
                      amet error earum aperiam, fuga labore facere rem ab nemo possimus cum
                      excepturi expedita. Culpa rerum, quaerat qui non.
                    </p>
                  </div>
                  {/* Quotation Icon */}
                  <div className="quot-icon">
                    <img className="w-12 h-12" src="/quote.png" alt="Quote" />
                  </div>
                </div>
                {/* Reviewer */}
                <div className="reviewer flex mt-3 items-center">
                  {/* Reviewer Thumb */}
                  <div className="reviewer-thumb">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="/avatar-2.png"
                      alt="Yasmin Akter"
                    />
                  </div>
                  {/* Reviewer Meta */}
                  <div className="reviewer-meta ml-4">
                    <h5 className="reviewer-name text-white mb-2">Yasmin Akter</h5>
                    <h6 className="text-white/50 font-semibold">Designer, Themeland</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
