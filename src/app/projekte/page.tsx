"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function ProjektePage() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [momentum, setMomentum] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Responsive configuration based on screen size
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Configuration
  const config = {
    radius: isMobile ? 300 : 600,
    perspective: isMobile ? 800 : 1200,
    itemCount: 8,
    autoRotate: true,
    rotationSpeed: 0.2,
    hoverSlowFactor: 0.3,
    dragSensitivity: isMobile ? 0.3 : 0.5,
    momentumDamping: 0.95,
    edgeFadeWidth: 20,
    edgeFadeOpacity: 0.3
  };

  const projects = [
    {
      id: 1,
      title: "Theater der Dinge 2025",
      description: "Internationales Festival für zeitgenössisches Objekt- und Figurentheater",
      date: "31.10. - 05.11.25",
      category: "Festival",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Die VIELEN – Shield & Shine",
      description: "Initiative für Vielfalt und gegen Diskriminierung",
      date: "Laufend",
      category: "Initiative",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Kulturnacht Braunschweig",
      description: "Eine Nacht voller Musik, Kunst und Performance",
      date: "15.11.2025",
      category: "Veranstaltung",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "Kunstausstellung Modern",
      description: "Zeitgenössische Kunst aus Braunschweig",
      date: "Oktober 2025",
      category: "Ausstellung",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 5,
      title: "Literatur im Dialog",
      description: "Lesungen und Workshops mit Autor*innen",
      date: "Ganzjährig",
      category: "Literatur",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
      color: "from-yellow-600 to-orange-600"
    },
    {
      id: 6,
      title: "Musikfestival Open Air",
      description: "Lokale und internationale Bands live",
      date: "Sommer 2025",
      category: "Musik",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 7,
      title: "Dance Performance Series",
      description: "Moderner Tanz und Choreografie",
      date: "März 2025",
      category: "Tanz",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&q=80",
      color: "from-pink-600 to-rose-600"
    },
    {
      id: 8,
      title: "Filmfestival Braunschweig",
      description: "Unabhängige Filme und Dokumentationen",
      date: "Dezember 2025",
      category: "Film",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
      color: "from-red-600 to-orange-600"
    }
  ];

  // Auto rotation
  useEffect(() => {
    if (!config.autoRotate && momentum === 0) return;
    
    const interval = setInterval(() => {
      if (!isDragging) {
        if (momentum !== 0) {
          setMomentum(prev => prev * config.momentumDamping);
          setRotation(prev => prev + momentum);
        } else if (config.autoRotate) {
          const speed = isHovering 
            ? config.rotationSpeed * config.hoverSlowFactor 
            : config.rotationSpeed;
          setRotation(prev => prev + speed);
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isDragging, momentum, isHovering, config.autoRotate, config.rotationSpeed, config.hoverSlowFactor, config.momentumDamping, isMobile]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setMomentum(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = (e.clientX - startX) * config.dragSensitivity;
    setRotation(prev => prev + delta);
    setMomentum(delta);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setMomentum(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = (e.touches[0].clientX - startX) * config.dragSensitivity;
    setRotation(prev => prev + delta);
    setMomentum(delta);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Wheel handler
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setRotation(prev => prev - e.deltaY * 0.1);
  };

  return (
    <div className="py-8 md:py-12 bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            Unsere Projekte
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Entdecken Sie die vielfältigen Kulturprojekte in Braunschweig
          </p>
        </div>

        {/* 3D Carousel */}
        <div 
          ref={containerRef}
          className="relative h-[400px] sm:h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing overflow-hidden"
          style={{ 
            perspective: `${config.perspective}px`,
            perspectiveOrigin: '50% 50%'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={(e) => {
            setIsHovering(false);
            handleMouseUp();
          }}
        >
          {/* Edge Fade Left */}
          <div 
            className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
            style={{
              width: `${config.edgeFadeWidth}%`,
              background: `linear-gradient(to right, rgba(17, 24, 39, ${config.edgeFadeOpacity}), transparent)`
            }}
          />
          
          {/* Edge Fade Right */}
          <div 
            className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
            style={{
              width: `${config.edgeFadeWidth}%`,
              background: `linear-gradient(to left, rgba(17, 24, 39, ${config.edgeFadeOpacity}), transparent)`
            }}
          />

          {/* Carousel Items */}
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => {
              const angle = (360 / projects.length) * index + rotation;
              const rad = (angle * Math.PI) / 180;
              const x = Math.sin(rad) * config.radius;
              const z = Math.cos(rad) * config.radius;
              const scale = (z + config.radius) / (config.radius * 2);
              const opacity = scale;

              const cardWidth = isMobile ? 280 : 320;
              const cardHeight = isMobile ? 360 : 384;

              return (
                <div
                  key={project.id}
                  className="absolute transition-all duration-100"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: Math.floor(scale * 100)
                  }}
                >
                  <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                    {/* Image */}
                    <div className="relative h-40 sm:h-44 md:h-56 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}></div>
                      <div className="absolute top-2 left-2 md:top-4 md:left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 md:p-6">
                      <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-2">{project.date}</p>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <Link 
                        href={`/projekte/${project.id}`}
                        className="inline-flex items-center text-gray-900 font-semibold text-xs sm:text-sm md:text-base hover:gap-2 transition-all"
                      >
                        Details
                        <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 mb-12 md:mb-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">250+</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base">Geförderte Projekte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">180</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base">Veranstaltungen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">95+</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base">Künstler*innen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">50k+</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base">Besucher*innen</div>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Gestalten Sie die Kulturlandschaft mit
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed px-4">
            Der Kulturrat Braunschweig unterstützt innovative und vielfältige Kulturprojekte. 
            Ob Theater, Musik, Kunst, Literatur oder interdisziplinäre Formate – wir fördern 
            kreative Ideen, die unsere Stadt bereichern und Menschen zusammenbringen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl mb-3">💡</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Beratung</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Kostenlose Beratung zur Projektentwicklung und Antragstellung
              </p>
            </div>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl mb-3">💰</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Förderung</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Finanzielle Unterstützung für genehmigte Kulturprojekte
              </p>
            </div>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl mb-3">🤝</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Netzwerk</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Zugang zu unserem Netzwerk aus Kulturschaffenden und Partnern
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Haben Sie ein Kulturprojekt?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Wir freuen uns auf Ihre kreativen Ideen! Reichen Sie Ihr Projekt ein und werden Sie 
            Teil der lebendigen Kulturszene in Braunschweig. Unser Team unterstützt Sie bei jedem Schritt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link 
              href="/kontakt"
              className="inline-block bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 font-bold hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
              Projekt einreichen
            </Link>
            <Link 
              href="/ueber-uns"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 md:px-10 py-3 md:py-4 font-bold hover:bg-gray-900 hover:text-white transition-colors text-sm md:text-base"
            >
              Mehr über uns erfahren
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nächste Bewerbungsfrist</h3>
            <p className="text-gray-600 mb-4">
              Reichen Sie Ihr Projekt bis zum <strong>15. November 2025</strong> für die Frühjahrsförderung ein.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📄 Projektbeschreibung</span>
              <span>•</span>
              <span>💵 Kostenplan</span>
              <span>•</span>
              <span>📅 Zeitplan</span>
              <span>•</span>
              <span>👥 Team-Info</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}