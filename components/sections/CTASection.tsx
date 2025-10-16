"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useParams } from "next/navigation";

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
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-[#2d1b69] via-[#3d2a7a] to-[#1e0e4d] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            looking for the best digital
            <br />
            agency & marketing solution?
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-12 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105 hover:shadow-xl"
          >
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}
