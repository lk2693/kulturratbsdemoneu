'use client';

import { useState } from 'react';

export default function UeberUnsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      title: 'Hot Drop',
      description: 'energy and emotion to your site.'
    },
    {
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
      title: 'Urban Spaces',
      description: 'forward with creative vision.'
    },
    {
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
      title: 'Art & Culture',
      description: 'that captivate and inspire.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
      title: 'Mobile First',
      description: 'optimized for all devices.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      title: 'Dark Mode',
      description: 'with stunning visuals.'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80" 
            alt="Kulturrat Braunschweig Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6">
              Über uns
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl font-light max-w-2xl">
              Wir sind der Kulturrat Braunschweig – Ihr Partner für lebendige Kultur
            </p>
          </div>
        </div>
      </section>

      {/* Was wir tun */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Was wir tun
              </h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Wir bringen Menschen und Ideen zusammen – vor und hinter den Kulissen. Gemeinsam 
                mit Partner*innen aus der ganzen Stadt arbeiten wir daran, möglichst viele für 
                die einzigartige Kultur und Geschichte Braunschweigs zu interessieren, zu begeistern 
                und daran zu beteiligen. Dafür schaffen wir Zugänge, informieren, initiieren, 
                entwickeln, begleiten und realisieren unterschiedlichste Projekte – inhaltlich 
                anspruchsvoll und in populären Formaten, vom ersten Konzept bis zum Aufräumen danach.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Unsere Projekte leben von Partizipation und Netzwerken: Wir kooperieren mit 
                Braunschweiger Museen, Theatern, Galerien und Kultureinrichtungen. Außerdem arbeiten 
                wir mit Bildungseinrichtungen und Vereinen, mit Wissenschaft und Stadtgesellschaft, 
                mit der freien Szene und – allen voran – mit den Menschen Braunschweigs zusammen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wer wir sind */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Wer wir sind
              </h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Der Kulturrat Braunschweig ist eine gemeinnützige Organisation. Wir arbeiten 
                inhaltlich unabhängig mit dem Ziel, die Braunschweiger Kultur zu stärken und zu 
                vernetzen. Wir finanzieren unsere Arbeit durch kommunale Förderung, Projektmittel 
                und die Einwerbung von Förder- und Drittmitteln.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Wir sind Expert*innen für verschiedenste Themen: von großen Veranstaltungen und der 
                Konzeption von Ausstellungen und Kampagnen über die Beratung Kreativer und 
                Kulturschaffender bis hin zur Entwicklung von Partizipations- und Vermittlungsformaten. 
                Unser Team vereint Expertise aus Kulturmanagement, Kommunikation, Projektentwicklung 
                und Kulturvermittlung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wofür wir stehen */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Wofür wir stehen
              </h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Wir sind uns unserer besonderen Verantwortung in der Gesellschaft bewusst. Um 
                diesem Auftrag in der Gegenwart und für zukünftige Generationen gerecht zu werden, 
                haben wir Nachhaltigkeit in seinen verschiedenen Facetten (sozial, ökologisch und 
                ökonomisch) zu einem zentralen Ziel unserer Arbeit gemacht.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Wir handeln nach einem wertebasierten Verhaltenskodex, der ein freiheitliches und 
                respektvolles Miteinander in unserem Team und bei all unseren Aktivitäten, Projekten 
                und Veranstaltungen fördern und stärken soll. Vielfalt, Teilhabe und demokratische 
                Werte sind die Grundlage unserer Arbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Werte - Visual Grid */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-800 p-6 md:p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl md:text-5xl mb-4">🌍</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Nachhaltigkeit</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Sozial, ökologisch und ökonomisch verantwortlich handeln
              </p>
            </div>
            <div className="bg-gray-800 p-6 md:p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl md:text-5xl mb-4">🤝</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Teilhabe</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Kultur für alle zugänglich machen und ermöglichen
              </p>
            </div>
            <div className="bg-gray-800 p-6 md:p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl md:text-5xl mb-4">🎨</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Vielfalt</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Unterschiedliche Perspektiven und Formate fördern
              </p>
            </div>
            <div className="bg-gray-800 p-6 md:p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl md:text-5xl mb-4">💪</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Engagement</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Mit Leidenschaft und Professionalität für Kultur arbeiten
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Projekte Teaser - VibeScroll Style */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Left Side - Title */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                DESIGN THAT<br/>MOVES BRANDS<br/>FORWARD
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">VibeScroll</h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Bold visual scroller that brings<br/>energy and emotion to your site.
                </p>
              </div>
              <div className="text-left lg:text-right">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">2025</span>
              </div>
            </div>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative">
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
              {/* Main Large Card */}
              <div className="flex-none w-[90vw] sm:w-[500px] md:w-[600px] snap-start">
                <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-orange-600 to-red-700 rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
                  {/* Background Image */}
                  <img 
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/60 to-red-700/60"></div>
                  
                  {/* Small Info Card - Top Left */}
                  <div className="absolute top-4 left-4 md:top-8 md:left-8 max-w-[160px] md:max-w-[200px]">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-xl">
                      <img 
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-24 md:h-32 object-cover rounded-md mb-2 md:mb-3"
                      />
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">{slides[currentSlide].title}</h4>
                      <p className="text-gray-600 text-[10px] md:text-xs mb-2 md:mb-3">{slides[currentSlide].description}</p>
                      <button 
                        onClick={nextSlide}
                        className="bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors w-full"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  
                  {/* Bottom Text */}
                  <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm font-medium px-4 text-center">
                    Design works for brands reaching new heights
                  </div>
                </div>
              </div>

              {/* Additional Cards */}
              <div className="flex-none w-[75vw] sm:w-[350px] md:w-[400px] snap-start">
                <div className="h-[400px] md:h-[500px] bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">
                    <h4 className="text-xl md:text-2xl font-bold mb-2">Modern Spaces</h4>
                    <p className="text-white/80 text-sm">Architecture meets innovation</p>
                  </div>
                </div>
              </div>

              <div className="flex-none w-[75vw] sm:w-[350px] md:w-[400px] snap-start">
                <div className="h-[400px] md:h-[500px] bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                    alt="Digital Innovation"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">
                    <h4 className="text-xl md:text-2xl font-bold mb-2">Digital Future</h4>
                    <p className="text-white/80 text-sm">Technology and creativity</p>
                  </div>
                </div>
              </div>

              <div className="flex-none w-[75vw] sm:w-[350px] md:w-[400px] snap-start">
                <div className="h-[400px] md:h-[500px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-5xl md:text-6xl mb-4">📱</div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2">Mobile First</h4>
                    <p className="text-white/80 text-sm">Optimized for all devices</p>
                  </div>
                </div>
              </div>

              <div className="flex-none w-[75vw] sm:w-[350px] md:w-[400px] snap-start">
                <div className="h-[400px] md:h-[500px] bg-gray-950 rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                    alt="Dark Interface"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">
                    <h4 className="text-xl md:text-2xl font-bold mb-2">Dark Mode</h4>
                    <p className="text-white/80 text-sm">Modern aesthetics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-2 md:gap-3 mt-6 md:mt-8 justify-center overflow-x-auto pb-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex-none w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentSlide === index ? 'border-orange-500 scale-110' : 'border-gray-300 opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a 
              href="/projekte"
              className="inline-block bg-gray-900 text-white px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold hover:bg-gray-800 transition-colors rounded-full"
            >
              Zur Projektübersicht →
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 md:mb-12 text-center">
            Lernen Sie uns kennen!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <span className="text-white text-5xl md:text-6xl font-bold">MS</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Dr. Maria Schmidt</h3>
              <p className="text-blue-600 font-semibold mb-3 text-sm md:text-base">Geschäftsführerin</p>
              <p className="text-gray-600 text-xs md:text-sm">
                Kulturwissenschaftlerin mit 15 Jahren Erfahrung in der Kulturförderung und Projektentwicklung
              </p>
            </div>
            <div className="text-center group">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <span className="text-white text-5xl md:text-6xl font-bold">TM</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Tom Müller</h3>
              <p className="text-blue-600 font-semibold mb-3 text-sm md:text-base">Projektleiter</p>
              <p className="text-gray-600 text-xs md:text-sm">
                Spezialist für internationale Kulturprojekte, Veranstaltungsmanagement und Netzwerkarbeit
              </p>
            </div>
            <div className="text-center group">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <span className="text-white text-5xl md:text-6xl font-bold">SW</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Sarah Weber</h3>
              <p className="text-blue-600 font-semibold mb-3 text-sm md:text-base">Koordinatorin</p>
              <p className="text-gray-600 text-xs md:text-sm">
                Expertin für Kulturvermittlung, Community-Building und partizipative Formate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unser Haus */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                Unser Haus
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                Unser Büro befindet sich im Herzen von Braunschweig am historischen Löwenwall. 
                Hier entwickeln wir gemeinsam mit unserem Team kreative Ideen und setzen 
                Kulturprojekte um, die die Stadt bewegen.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                Wir freuen uns über Besuche nach Terminvereinbarung. Kommen Sie vorbei für 
                ein persönliches Gespräch über Ihre Projektideen oder lernen Sie unser Team kennen.
              </p>
              <a 
                href="/kontakt"
                className="inline-block border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 font-bold hover:bg-gray-900 hover:text-white transition-colors text-sm md:text-base"
              >
                Kontakt aufnehmen
              </a>
            </div>
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span className="text-base md:text-lg text-center px-4">📍 Löwenwall 16, Braunschweig</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs & Praktika */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
            Jobs & Praktika
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            Werden Sie Teil unseres Teams! Wir suchen regelmäßig engagierte Menschen, 
            die mit uns die Kulturlandschaft Braunschweigs gestalten möchten.
          </p>
          <a 
            href="/jobs"
            className="inline-block bg-gray-900 text-white px-8 md:px-10 py-4 font-bold hover:bg-gray-800 transition-colors text-sm md:text-base"
          >
            Aktuelle Stellenangebote
          </a>
        </div>
      </section>
    </div>
  );
}
