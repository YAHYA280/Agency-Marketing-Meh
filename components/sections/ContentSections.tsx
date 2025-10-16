"use client";

import { FaAngleDoubleRight } from "react-icons/fa";

interface ContentSectionsProps {
  section1Title: string;
  section1Description: string;
  section2Title: string;
  section2Description: string;
}

export function ContentSections({
  section1Title,
  section1Description,
  section2Title,
  section2Description,
}: ContentSectionsProps) {
  return (
    <>
      {/* Content Area 1 - Business Growth */}
      <section className="section content-area bg-grey ptb_100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center">
            <div className="content-inner text-center">
              {/* Section Heading */}
              <div className="section-heading text-center mb-3">
                <h2>{section1Title}</h2>
                <p className="hidden sm:block mt-4 text-[15px] leading-6 text-[#565656]">
                  {section1Description}
                </p>
                <p className="block sm:hidden mt-4 text-[15px] leading-6 text-[#565656]">
                  {section1Description.substring(0, 80)}...
                </p>
              </div>
              {/* Content List */}
              <ul className="content-list text-left">
                {/* Single Content List */}
                <li className="single-content-list flex py-2">
                  <div className="content-icon pr-4">
                    <span className="color-1">
                      <FaAngleDoubleRight />
                    </span>
                  </div>
                  <div className="content-text flex-1">
                    <span className="text-base">
                      <b>Online Presence</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                      distinctio.
                    </span>
                  </div>
                </li>
                {/* Single Content List */}
                <li className="single-content-list flex py-2">
                  <div className="content-icon pr-4">
                    <span className="color-1">
                      <FaAngleDoubleRight />
                    </span>
                  </div>
                  <div className="content-text flex-1">
                    <span className="text-base">
                      <b>Marketing Strategy</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                      distinctio.
                    </span>
                  </div>
                </li>
                {/* Single Content List */}
                <li className="single-content-list flex py-2">
                  <div className="content-icon pr-4">
                    <span className="color-1">
                      <FaAngleDoubleRight />
                    </span>
                  </div>
                  <div className="content-text flex-1">
                    <span className="text-base">
                      <b>Promote Local Sales</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                      distinctio.
                    </span>
                  </div>
                </li>
              </ul>
              <a href="#" className="btn btn-bordered mt-4">
                Learn More
              </a>
            </div>
            <div className="service-thumb mx-auto pt-4 lg:pt-0">
              <img
                src="/content_thumb.png"
                alt="Business growth illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Area 2 - Work Smarter */}
      <section className="section content-area ptb_100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center">
            <div className="profile-circle-wrapper circle-animation hidden sm:block relative h-[397px] w-[517px] mx-auto">
              {/* Profile Inner */}
              <div className="profile-inner absolute h-[397px] w-[517px] top-0 left-0 right-0 bottom-0 m-auto rounded-full z-[2]">
                {/* Placeholder for animated icons - simplified */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
              </div>
              <img
                className="folder-img relative top-[210px] left-[25px] z-[1]"
                src="/folders.png"
                alt="Folders"
              />
            </div>

            <div className="content-inner text-center pt-4 sm:pt-5 mt-5 lg:pt-0 lg:mt-0">
              {/* Section Heading */}
              <div className="section-heading text-center mb-3">
                <h2>
                  {section2Title}
                </h2>
                <p className="hidden sm:block mt-4 text-[15px] leading-6 text-[#565656]">
                  {section2Description}
                </p>
                <p className="block sm:hidden mt-4 text-[15px] leading-6 text-[#565656]">
                  {section2Description.substring(0, 80)}...
                </p>
              </div>
              {/* Content List */}
              <ul className="content-list text-left">
                {/* Single Content List */}
                <li className="single-content-list flex py-2">
                  <div className="content-icon pr-4">
                    <span className="color-2">
                      <FaAngleDoubleRight />
                    </span>
                  </div>
                  <div className="content-text flex-1">
                    <span className="text-base">
                      <b>Digital Agency & Marketing</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                      distinctio.
                    </span>
                  </div>
                </li>
                {/* Single Content List */}
                <li className="single-content-list flex py-2">
                  <div className="content-icon pr-4">
                    <span className="color-2">
                      <FaAngleDoubleRight />
                    </span>
                  </div>
                  <div className="content-text flex-1">
                    <span className="text-base">
                      <b>Planning To Startup</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                      distinctio.
                    </span>
                  </div>
                </li>
                {/* Single Content List */}
                <li className="single-content-list flex py-2">
                  <div className="content-icon pr-4">
                    <span className="color-2">
                      <FaAngleDoubleRight />
                    </span>
                  </div>
                  <div className="content-text flex-1">
                    <span className="text-base">
                      <b>Content Management</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                      distinctio.
                    </span>
                  </div>
                </li>
              </ul>
              <a href="#" className="btn btn-bordered mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
