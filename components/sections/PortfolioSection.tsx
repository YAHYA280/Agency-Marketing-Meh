"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioSectionProps {
  title: string;
  subtitle: string;
  description: string;
  viewAll: string;
}

export function PortfolioSection({
  title,
  subtitle,
  description,
  viewAll,
}: PortfolioSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const params = useParams();
  const locale = params.locale as string;
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "ALL" },
    { id: "marketing", label: "MARKETING" },
    { id: "agency", label: "AGENCY" },
    { id: "seo", label: "SEO" },
    { id: "app", label: "APP DEVELOPMENT" },
  ];

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur ur adipisicing elit.",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      gradient: "from-purple-500 via-pink-500 to-blue-500",
    },
    {
      id: 2,
      title: "SEO Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur ur adipisicing elit.",
      category: "seo",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
      id: 3,
      title: "Mobile App Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur ur adipisicing elit.",
      category: "app",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
    {
      id: 4,
      title: "Brand Strategy",
      description:
        "Lorem ipsum dolor sit amet, consectetur ur adipisicing elit.",
      category: "agency",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
    },
    {
      id: 5,
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur ur adipisicing elit.",
      category: "agency",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
    },
    {
      id: 6,
      title: "Data Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur ur adipisicing elit.",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.from(project, {
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
            },
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all ${
                activeFilter === filter.id
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectsRef.current[index] = el;
              }}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Gradient Overlay - Hidden by default, shown on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
                />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-xs">
                    {project.description}
                  </p>
                  <Link
                    href={`/${locale}/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
                  >
                    View Project
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>

                {/* Bottom gradient for readability (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
              </div>

              {/* Category Badge (always visible on bottom) */}
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 uppercase group-hover:opacity-0 transition-opacity duration-500">
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href={`/${locale}/portfolio`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            {viewAll}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
