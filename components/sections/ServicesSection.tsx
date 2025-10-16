"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaChartLine,
  FaDesktop,
  FaSearch,
  FaMobileAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
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

export function ServicesSection({
  title,
  subtitle,
  description,
  services,
}: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const params = useParams();
  const locale = params.locale as string;

  const servicesList: Service[] = [
    {
      icon: <FaChartLine size={32} />,
      title: "Data Analytics",
      description: services.uiux.description,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <FaDesktop size={32} />,
      title: "Website Growth",
      description: services.webdev.description,
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      icon: <FaSearch size={32} />,
      title: "Seo Ranking",
      description: services.mobileapp.description,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: <FaMobileAlt size={32} />,
      title: "App Development",
      description: services.branding.description,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaEnvelope size={32} />,
      title: "Email Marketing",
      description: services.ecommerce.description,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Affiliate Marketing",
      description: services.seo.description,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.1,
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
      {/* Wavy background decoration */}
      <div className="absolute top-0 left-0 right-0 h-48">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            we provide the best
            <br />
            digital services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {servicesList.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group text-center"
            >
              {/* Icon Box */}
              <div className="mb-6 inline-block">
                <div
                  className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center ${service.iconColor} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center text-gray-700 font-semibold hover:text-purple-600 transition-colors group/link"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wavy decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-48">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,181.3C672,171,768,181,864,202.7C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
