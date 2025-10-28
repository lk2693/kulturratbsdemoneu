"use client";

import Link from 'next/link';
import ProjectSection from '@/components/ProjectSection';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      color: 'from-[#FFB5A7] to-[#FF9A88]',
      title: 'Theater & Bühne',
      stat: '250+',
      statLabel: 'geförderte Projekte',
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80'
    },
    {
      color: 'from-[#A7C7FF] to-[#88A9FF]',
      title: 'Musik & Konzerte',
      stat: '180+',
      statLabel: 'Veranstaltungen',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80'
    },
    {
      color: 'from-[#C7FFA7] to-[#A9FF88]',
      title: 'Kunst & Ausstellungen',
      stat: '95+',
      statLabel: 'Künstler*innen',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80'
    },
    {
      color: 'from-[#FFC7A7] to-[#FFA988]',
      title: 'Literatur & Workshops',
      stat: '120+',
      statLabel: 'Teilnehmende',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[85vh]">
            {/* Left Side - Text (3 columns) */}
            <div className="lg:col-span-3 flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-24">
              <div className="w-full">
                <div className="mb-4 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  Kulturrat Braunschweig
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-gray-900 mb-10">
                  Kultur für<br />
                  und mit<br />
                  <span className="text-[#FFB5A7]">Braunschweig</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-12 leading-relaxed">
                  Gemeinsam gestalten wir die kulturelle Vielfalt unserer Stadt. 
                  Entdecken Sie innovative Projekte und werden Sie Teil unserer Community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/projekte" 
                    className="group bg-gray-900 text-white px-10 py-4 font-semibold hover:bg-gray-800 transition-all duration-300 text-center relative overflow-hidden"
                  >
                    <span className="relative z-10">Projekte entdecken</span>
                    <div className="absolute inset-0 bg-[#FFB5A7] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                  <Link 
                    href="/kontakt" 
                    className="border-2 border-gray-900 text-gray-900 px-10 py-4 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Image Slider (2 columns) */}
            <div className="lg:col-span-2 min-h-[300px] lg:min-h-full relative overflow-hidden">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentSlide 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-75`}></div>
                    {/* Dark Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  
                  {/* Decorative Circles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-white/10"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                    <div className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-90 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                      {slide.title}
                    </div>
                    <div className="text-6xl md:text-7xl font-black mb-4 drop-shadow-lg">{slide.stat}</div>
                    <div className="text-lg md:text-xl font-medium drop-shadow-lg">{slide.statLabel}</div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
                aria-label="Vorheriges Bild"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
                aria-label="Nächstes Bild"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Zu Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Scroll Down Button */}
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="absolute bottom-8 right-8 bg-white text-gray-900 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20"
                aria-label="Nach unten scrollen"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-gray-900 text-white py-3 overflow-hidden border-b border-gray-700">
        <div className="relative flex">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center space-x-12 px-6">
              <span className="text-sm font-semibold">📅 31.10. - Theater der Dinge Festival</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold">🎭 Bewerbungsphase Herbstprojekte läuft</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold">🎨 Neue Fördermittel verfügbar</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold">🎵 Kulturnacht Braunschweig 15.11.</span>
              <span className="text-gray-400">•</span>
            </div>
            <div className="flex items-center space-x-12 px-6">
              <span className="text-sm font-semibold">📅 31.10. - Theater der Dinge Festival</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold">🎭 Bewerbungsphase Herbstprojekte läuft</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold">🎨 Neue Fördermittel verfügbar</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold">🎵 Kulturnacht Braunschweig 15.11.</span>
              <span className="text-gray-400">•</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Banner */}
     

      {/* Featured Projects Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Besondere Projekte und Veranstaltungen
            </p>
          </div>

          {/* Card 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white mb-8 overflow-hidden">
            <div className="relative h-[400px] lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&q=80"
                alt="Theater der Dinge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-16">
              <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Theater der Dinge 2025 – 31.10.-05.11.25
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Jährlich im Herbst richtet die Schaubude das internationale Festival für 
                zeitgenössisches Objekt- und Figurentheater »Theater der Dinge« aus.
              </p>
              <Link 
                href="/projekte/theater-der-dinge-2025"
                className="inline-block border-2 border-black text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 text-center max-w-xs"
              >
                ZUM PROGRAMM
              </Link>
            </div>
          </div>

          {/* Card 2 - Reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white mb-8 overflow-hidden">
            <div className="flex flex-col justify-center p-8 lg:p-16 order-2 lg:order-1">
              <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Die VIELEN – Shield & Shine
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                WIR SIND VIELE – jede*r Einzeln*e von uns. Gemeinsam gegen Rechts! 
                Eine Initiative für Vielfalt, Demokratie und kulturelle Teilhabe.
              </p>
              <Link 
                href="/projekte/die-vielen-shield-and-shine"
                className="inline-block border-2 border-black text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 text-center max-w-xs"
              >
                MEHR ERFAHREN
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80"
                alt="Die VIELEN"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white overflow-hidden">
            <div className="relative h-[400px] lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80"
                alt="Kulturnacht Braunschweig"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-16">
              <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Kulturnacht Braunschweig 2025
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Eine Nacht voller Musik, Kunst und Performance. Über 50 Locations öffnen 
                ihre Türen für ein einzigartiges Kulturerlebnis in der ganzen Stadt.
              </p>
              <Link 
                href="/projekte/kulturnacht"
                className="inline-block border-2 border-black text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 text-center max-w-xs"
              >
                PROGRAMM ANSEHEN
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <ProjectSection />

      {/* News/Press Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aktuelles & Presse
            </h2>
            <p className="text-xl text-gray-600">
              Bleiben Sie auf dem Laufenden über unsere neuesten Entwicklungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <span className="text-sm text-blue-600 font-medium">PRESSEMITTEILUNG</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                Neue Förderinitiative für Braunschweiger Kulturprojekte
              </h3>
              <p className="text-gray-700 mb-4">
                Der Kulturrat Braunschweig startet eine neue Förderinitiative zur Unterstützung 
                innovativer Kulturprojekte in der Stadt.
              </p>
              <Link href="/presse" className="text-blue-600 hover:text-blue-800 font-medium">
                Weiterlesen →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <span className="text-sm text-green-600 font-medium">AKTUELLES</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                Bewerbungsphase für Herbstprojekte eröffnet
              </h3>
              <p className="text-gray-700 mb-4">
                Kulturschaffende können sich ab sofort für die Herbstförderung 2025 bewerben. 
                Deadline ist der 15. November 2025.
              </p>
              <Link href="/projekte" className="text-blue-600 hover:text-blue-800 font-medium">
                Mehr erfahren →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}