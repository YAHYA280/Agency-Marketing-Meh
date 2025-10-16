"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            let's connect!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div
              ref={(el) => {
                cardsRef.current[0] = el;
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-purple-500"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                  <FaPhone className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  +89 (0) 2354 5470091
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div
              ref={(el) => {
                cardsRef.current[1] = el;
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-red-500"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                  <FaEnvelope className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  mail@company.com
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gray-900 hover:bg-gray-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  );
}
