"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioSectionProps {
  title: string;
  subtitle: string;
  description: string;
  viewAll: string;
}

export function PortfolioSection({ title, subtitle, description, viewAll }: PortfolioSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const params = useParams();
  const locale = params.locale as string;

  // Mock portfolio data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.from(project, {
            scrollTrigger: {
              trigger: project,
              start: 'top 85%',
            },
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-agency-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,173,181,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,173,181,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { projectsRef.current[index] = el; }}
              className="group relative rounded-2xl overflow-hidden bg-agency-gray border border-agency-light/10 hover:border-agency-cyan/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-agency-dark to-transparent opacity-80" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-agency-cyan/20 backdrop-blur-sm border border-agency-cyan/30 rounded-full text-agency-cyan text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <Link
                    href={`/${locale}/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 text-agency-cyan font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View Project <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href={`/${locale}/portfolio`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-agency-cyan text-agency-cyan font-bold rounded-lg hover:bg-agency-cyan hover:text-agency-dark transition-all transform hover:scale-105"
          >
            {viewAll}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
