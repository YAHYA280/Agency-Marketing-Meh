"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  title: string;
  description: string;
  button: string;
}

export function CTASection({ title, description, button }: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-agency-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-agency-cyan/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,173,181,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,173,181,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div
          ref={contentRef}
          className="relative max-w-5xl mx-auto bg-gradient-to-br from-agency-gray to-agency-dark rounded-3xl p-12 lg:p-16 border-2 border-agency-cyan/30 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-agency-cyan/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-agency-cyan/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

          {/* Content */}
          <div className="relative text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-agency-cyan/10 rounded-full mb-6">
              <FaRocket className="text-agency-cyan text-2xl animate-bounce" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-agency-light/70 mb-10 max-w-2xl mx-auto">
              {description}
            </p>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-agency-cyan text-agency-dark font-bold text-lg rounded-lg hover:bg-agency-cyan/90 transition-all hover:shadow-2xl hover:shadow-agency-cyan/50 transform hover:scale-105"
            >
              {button}
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>

            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-agency-cyan/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-agency-cyan/30 rounded-br-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
