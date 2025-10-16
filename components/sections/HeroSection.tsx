"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { AnimatedPhone } from "../3d/AnimatedPhone";

interface HeroSectionProps {
  subtitle: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export function HeroSection({
  subtitle,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content from left
      gsap.from(contentRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // Animate individual elements
      gsap.from(contentRef.current?.querySelectorAll(".animate-item") || [], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#2d1b69] via-[#1e0e4d] to-[#0f0728] pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Badge */}
            <div className="animate-item">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                {subtitle}
              </span>
            </div>

            {/* Title */}
            <div className="animate-item">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Marketing</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  strategy
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="animate-item text-lg text-gray-300 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTAs */}
            <div className="animate-item flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 transform hover:scale-105"
              >
                {ctaPrimary}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center gap-3 transform hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPlay className="text-sm ml-0.5" />
                </div>
                {ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right - 3D Phone */}
          <div className="relative lg:h-[600px] h-[500px]">
            <AnimatedPhone />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>
    </section>
  );
}
