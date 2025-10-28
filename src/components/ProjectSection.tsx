"use client";

import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  href: string;
  imageUrl: string;
  category: string;
}

function ProjectCard({ title, description, date, href, imageUrl, category }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
        isExpanded ? 'flex-[2]' : 'flex-[0.5]'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onTouchStart={() => setIsExpanded(!isExpanded)}
      style={{ minWidth: '120px', height: '400px' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          transform: isExpanded ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isExpanded ? 'opacity-40' : 'opacity-60'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-6 text-white">
        {/* Vertical Title (when collapsed) */}
        <div className={`absolute left-4 md:left-6 top-4 md:top-6 transition-opacity duration-300 ${
          isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <h3 className="text-xl md:text-2xl font-bold writing-vertical transform rotate-180 origin-left whitespace-nowrap">
            {title}
          </h3>
        </div>

        {/* Expanded Content */}
        <div className={`transition-all duration-500 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full mb-2 md:mb-3">
            {category}
          </span>
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 leading-tight">{title}</h3>
          <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">{date}</p>
          <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3">{description}</p>
          <Link 
            href={href}
            className="inline-flex items-center text-white font-semibold hover:gap-3 transition-all group text-sm md:text-base"
          >
            Mehr erfahren 
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const projects = [
    {
      title: "Theater der Dinge 2025",
      description: "Jährlich im Herbst richtet die Schaubude das internationale Festival für zeitgenössisches Objekt- und Figurentheater aus.",
      date: "31.10. - 05.11.25",
      href: "/projekte/theater-der-dinge-2025",
      imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&q=80",
      category: "Festival"
    },
    {
      title: "Filmfestival Braunschweig",
      description: "Unabhängige Filme und Dokumentationen aus aller Welt. Eine Plattform für aufstrebende Filmemacher*innen.",
      date: "Dezember 2025",
      href: "/projekte/filmfestival",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80",
      category: "Film"
    },
    {
      title: "Kulturprojekt Herbst 2025",
      description: "Ein neues innovatives Kulturprojekt, das Künstler*innen und Publikum zusammenbringt und neue Formen des kulturellen Austauschs ermöglicht.",
      date: "Oktober 2025",
      href: "/projekte/kulturprojekt-herbst-2025",
      imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
      category: "Kulturförderung"
    },
    {
      title: "Braunschweig Music Festival",
      description: "Ein vielfältiges Musikfestival mit lokalen und internationalen Künstler*innen verschiedener Genres.",
      date: "15.11. - 20.11.25",
      href: "/projekte/music-festival",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
      category: "Musik"
    },
    {
      title: "Literatur im Dialog",
      description: "Lesungen, Workshops und Diskussionen mit zeitgenössischen Autor*innen aus Deutschland und Europa.",
      date: "Ganzjährig",
      href: "/projekte/literatur-dialog",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
      category: "Literatur"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Aktuelle Projekte
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere vielfältigen Kulturprojekte und Initiativen, 
            die Braunschweig als lebendige Kulturstadt prägen.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex gap-1 md:gap-2 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link 
            href="/projekte"
            className="inline-block bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-base font-semibold hover:bg-gray-800 transition-colors"
          >
            Alle Projekte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}