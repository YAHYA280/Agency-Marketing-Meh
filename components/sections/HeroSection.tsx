"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

interface HeroSectionProps {
  subtitle: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export function HeroSection({ subtitle, title, description, ctaPrimary, ctaSecondary }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated shapes
      gsap.from(shapeRefs.current, {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

      // Text animations
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(titleRef.current?.children || [], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3
      });

      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8
      });

      gsap.from(ctaRef.current?.children || [], {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        delay: 1.1
      });

      // Floating animation for shapes
      shapeRefs.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            y: "+=30",
            rotation: "+=180",
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-agency-dark via-agency-gray to-agency-dark pt-20"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={(el) => { shapeRefs.current[0] = el; }}
          className="absolute top-20 left-10 w-72 h-72 bg-agency-cyan/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => { shapeRefs.current[1] = el; }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-agency-cyan/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => { shapeRefs.current[2] = el; }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-agency-cyan/5 rounded-full blur-2xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,173,181,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,173,181,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <div ref={subtitleRef} className="inline-block mb-6">
            <span className="px-4 py-2 bg-agency-cyan/10 border border-agency-cyan/30 rounded-full text-agency-cyan text-sm font-semibold backdrop-blur-sm">
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">{title.split(' ')[0]}</span>
            <span className="block text-white">{title.split(' ')[1]}</span>
            <span className="block bg-gradient-to-r from-agency-cyan to-agency-light bg-clip-text text-transparent">
              {title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          {/* Description */}
          <p ref={descRef} className="text-lg md:text-xl text-agency-light/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${locale}/contact`}
              className="group px-8 py-4 bg-agency-cyan text-agency-dark font-bold rounded-lg hover:bg-agency-cyan/90 transition-all hover:shadow-lg hover:shadow-agency-cyan/50 flex items-center gap-2 transform hover:scale-105"
            >
              {ctaPrimary}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="group px-8 py-4 bg-transparent border-2 border-agency-cyan text-agency-cyan font-bold rounded-lg hover:bg-agency-cyan hover:text-agency-dark transition-all flex items-center gap-2 transform hover:scale-105"
            >
              <FaPlay className="text-sm" />
              {ctaSecondary}
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex flex-col items-center gap-2 opacity-60 animate-bounce">
            <div className="w-6 h-10 border-2 border-agency-cyan rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-agency-cyan rounded-full"></div>
            </div>
            <span className="text-agency-light text-xs">Scroll Down</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-agency-dark to-transparent" />
    </section>
  );
}
