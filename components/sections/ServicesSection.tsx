"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPalette, FaCode, FaMobileAlt, FaPaintBrush, FaShoppingCart, FaSearch } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  description: string;
  services: {
    uiux: { title: string; description: string };
    webdev: { title: string; description: string };
    mobileapp: { title: string; description: string };
    branding: { title: string; description: string };
    ecommerce: { title: string; description: string };
    seo: { title: string; description: string };
  };
}

export function ServicesSection({ title, subtitle, description, services }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const servicesList: Service[] = [
    {
      icon: <FaPalette size={32} />,
      title: services.uiux.title,
      description: services.uiux.description,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaCode size={32} />,
      title: services.webdev.title,
      description: services.webdev.description,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaMobileAlt size={32} />,
      title: services.mobileapp.title,
      description: services.mobileapp.description,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaPaintBrush size={32} />,
      title: services.branding.title,
      description: services.branding.description,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaShoppingCart size={32} />,
      title: services.ecommerce.title,
      description: services.ecommerce.description,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FaSearch size={32} />,
      title: services.seo.title,
      description: services.seo.description,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            opacity: 0,
            y: 60,
            scale: 0.8,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-agency-gray overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-agency-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-agency-cyan rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-agency-cyan/10 border border-agency-cyan/30 rounded-full text-agency-cyan text-sm font-semibold mb-4">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-agency-light/70 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative bg-agency-dark rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-agency-light/10 hover:border-agency-cyan/50 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-agency-cyan/10 rounded-xl flex items-center justify-center text-agency-cyan group-hover:bg-agency-cyan group-hover:text-agency-dark transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-agency-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-agency-light/70 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-agency-cyan/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
