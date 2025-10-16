"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaProjectDiagram, FaUsers, FaAward, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface StatsSectionProps {
  stats: {
    projects: string;
    clients: string;
    awards: string;
    experience: string;
  };
}

interface Stat {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  label: string;
  color: string;
}

export function StatsSection({ stats }: StatsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const statistics: Stat[] = [
    {
      icon: <FaProjectDiagram size={40} />,
      number: 250,
      suffix: '+',
      label: stats.projects,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaUsers size={40} />,
      number: 180,
      suffix: '+',
      label: stats.clients,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaAward size={40} />,
      number: 35,
      suffix: '+',
      label: stats.awards,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaClock size={40} />,
      number: 8,
      suffix: '+',
      label: stats.experience,
      color: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stat cards
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.from(stat, {
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              onEnter: () => {
                // Animate number counting
                const targetNumber = statistics[index].number;
                const duration = 2;
                const increment = targetNumber / (duration * 60);
                let currentCount = 0;

                const counter = setInterval(() => {
                  currentCount += increment;
                  if (currentCount >= targetNumber) {
                    currentCount = targetNumber;
                    clearInterval(counter);
                  }
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(currentCount);
                    return newCounts;
                  });
                }, 1000 / 60);
              }
            },
            opacity: 0,
            scale: 0.8,
            y: 50,
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
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-agency-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-agency-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { statsRef.current[index] = el; }}
              className="group relative bg-agency-dark rounded-2xl p-8 text-center border border-agency-light/10 hover:border-agency-cyan/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className="relative mb-4 inline-block">
                <div className="absolute inset-0 bg-agency-cyan/20 blur-xl" />
                <div className="relative text-agency-cyan">
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className="relative mb-2">
                <span className="text-5xl font-bold text-white">
                  {counts[index]}
                </span>
                <span className="text-3xl font-bold text-agency-cyan">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="relative text-agency-light/70 font-medium">
                {stat.label}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-agency-cyan to-transparent group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
