"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MitgliedWerdenPage() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: "🎭",
      title: "Kulturevents & Premieren",
      description: "Exklusiver Zugang zu Veranstaltungen, Premieren und besonderen Kulturevents",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80"
    },
    {
      icon: "�️",
      title: "Vergünstigungen",
      description: "Ermäßigte Tickets und Sonderkonditionen bei unseren Partnern",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    },
    {
      icon: "🤝",
      title: "Netzwerk & Community",
      description: "Verbindung zu Kulturschaffenden und Gleichgesinnten in Braunschweig",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
    },
    {
      icon: "�",
      title: "Workshops & Weiterbildung",
      description: "Kostenlose Teilnahme an Workshops und kreativen Weiterbildungen",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
    },
    {
      icon: "�️",
      title: "Mitbestimmung",
      description: "Aktive Teilnahme an Entscheidungen und Projektplanung",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Animated Feature Carousel */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Mitglied werden
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Werden Sie Teil unserer Kulturgemeinschaft und gestalten Sie die 
                kulturelle Zukunft Braunschweigs mit modernsten Features und Tools!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#membership"
                  className="inline-block bg-white text-gray-900 px-8 py-4 font-bold hover:bg-gray-100 transition-all text-center"
                >
                  Mitgliedschaft wählen
                </a>
                <a 
                  href="#features"
                  className="inline-block border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-gray-900 transition-all text-center"
                >
                  Features entdecken
                </a>
              </div>
            </div>

            {/* Right: Animated Feature Showcase */}
            <div className="relative h-[400px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentFeature 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentFeature 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="h-full rounded-2xl overflow-hidden shadow-2xl relative">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-center items-center text-center text-white bg-black/40 backdrop-blur-sm">
                      <div className="text-8xl mb-6 drop-shadow-2xl">{feature.icon}</div>
                      <h3 className="text-3xl font-black mb-4 drop-shadow-2xl">{feature.title}</h3>
                      <p className="text-lg drop-shadow-xl">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Indicators */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentFeature 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Ihre Vorteile als Mitglied
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profitieren Sie von exklusiven Benefits und gestalten Sie aktiv die Kulturszene mit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kulturevents */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kulturevents & Premieren</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Exklusiver Zugang zu Premieren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>VIP-Events und Empfänge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Meet & Greet mit Künstler*innen</span>
                </li>
              </ul>
            </div>

            {/* Vergünstigungen */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <div className="text-5xl mb-4">�️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vergünstigungen</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>10-20% Ermäßigung auf Tickets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Sonderkonditionen bei Partnern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Frühbucher-Angebote</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
              <div className="text-5xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Newsletter & Updates</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Monatlicher Kultur-Newsletter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Aktuelle Fördermöglichkeiten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Behind-the-Scenes Einblicke</span>
                </li>
              </ul>
            </div>

            {/* Netzwerk */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Netzwerk & Community</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Zugang zur Kulturschaffenden-Community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Networking-Events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Kooperationsmöglichkeiten</span>
                </li>
              </ul>
            </div>

            {/* Mitbestimmung */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 transition-all">
              <div className="text-5xl mb-4">�️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mitbestimmung</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Stimmrecht bei Entscheidungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Teilnahme an Projektplanung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Mitgliederversammlungen</span>
                </li>
              </ul>
            </div>

            {/* Workshops */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 transition-all">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workshops & Weiterbildung</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Kostenlose Workshop-Teilnahme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Kreative Weiterbildungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Fachliche Expertise-Austausch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Wählen Sie Ihre Mitgliedschaft
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible Optionen für jeden Bedarf - von Basic bis Premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black text-gray-900 mb-2">Basic</h3>
                <div className="text-5xl font-black text-gray-900 mb-2">30€</div>
                <p className="text-gray-600">pro Jahr</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Newsletter & Updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">10% Ermäßigung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Netzwerkzugang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Community Events</span>
                </li>
              </ul>
              <Link 
                href="/kontakt"
                className="block w-full text-center border-2 border-gray-900 text-gray-900 px-6 py-4 font-bold hover:bg-gray-900 hover:text-white transition-all"
              >
                Jetzt beitreten
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl transform md:scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-black">
                BELIEBT
              </div>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black mb-2">Premium</h3>
                <div className="text-5xl font-black mb-2">60€</div>
                <p className="text-gray-300">pro Jahr</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span>Alle Basic-Vorteile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span>20% Ermäßigung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span>Kostenlose Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span>Premieren-Zugang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span>Priority Support</span>
                </li>
              </ul>
              <Link 
                href="/kontakt"
                className="block w-full text-center bg-white text-gray-900 px-6 py-4 font-bold hover:bg-gray-100 transition-all"
              >
                Jetzt upgraden
              </Link>
            </div>

            {/* Förderer */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black text-gray-900 mb-2">Förderer</h3>
                <div className="text-5xl font-black text-gray-900 mb-2">120€</div>
                <p className="text-gray-600">pro Jahr</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Alle Premium-Vorteile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">VIP-Events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Projektpatenschaft</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Persönliche Beratung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Logo auf Website</span>
                </li>
              </ul>
              <Link 
                href="/kontakt"
                className="block w-full text-center border-2 border-gray-900 text-gray-900 px-6 py-4 font-bold hover:bg-gray-900 hover:text-white transition-all"
              >
                Förderer werden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Bereit loszulegen?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Wir beraten Sie gerne persönlich zu unseren Mitgliedschaften und 
            finden das passende Angebot für Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="inline-block bg-white text-gray-900 px-10 py-4 font-bold hover:bg-gray-100 transition-all"
            >
              Kontakt aufnehmen
            </Link>
            <Link 
              href="/projekte"
              className="inline-block border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-gray-900 transition-all"
            >
              Projekte ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
