export default function MitgliedWerdenPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mitglied werden
          </h1>
          <p className="text-xl text-gray-600">
            Werden Sie Teil unserer Kulturgemeinschaft und gestalten Sie die 
            kulturelle Zukunft Braunschweigs mit!
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ihre Vorteile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border-2 border-gray-200 hover:border-gray-900 transition-colors">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kulturevents</h3>
              <p className="text-gray-700">
                Exklusiver Zugang zu Veranstaltungen, Premieren und besonderen Kulturevents
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-200 hover:border-gray-900 transition-colors">
              <div className="text-3xl mb-3">🎟️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vergünstigungen</h3>
              <p className="text-gray-700">
                Ermäßigte Tickets und Sonderkonditionen bei unseren Partnern
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-200 hover:border-gray-900 transition-colors">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-gray-700">
                Regelmäßige Updates über Kulturprojekte und Fördermöglichkeiten
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-200 hover:border-gray-900 transition-colors">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Netzwerk</h3>
              <p className="text-gray-700">
                Verbindung zu Kulturschaffenden und Gleichgesinnten in Braunschweig
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-200 hover:border-gray-900 transition-colors">
              <div className="text-3xl mb-3">🗳️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mitbestimmung</h3>
              <p className="text-gray-700">
                Aktive Teilnahme an Entscheidungen und Projektplanung
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-200 hover:border-gray-900 transition-colors">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Workshops</h3>
              <p className="text-gray-700">
                Kostenlose Teilnahme an Workshops und Weiterbildungen
              </p>
            </div>
          </div>
        </section>

        {/* Membership Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mitgliedschaften</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic */}
            <div className="bg-white border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basis</h3>
              <div className="text-4xl font-black mb-4">30€</div>
              <p className="text-gray-600 mb-6">pro Jahr</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Newsletter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">10% Ermäßigung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Netzwerkzugang</span>
                </li>
              </ul>
              <button className="w-full border-2 border-black text-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-all">
                Auswählen
              </button>
            </div>

            {/* Premium */}
            <div className="bg-gray-900 text-white border-2 border-gray-900 p-8 transform md:scale-105 shadow-lg">
              <div className="text-xs font-bold text-yellow-400 mb-2">BELIEBT</div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-black mb-4">60€</div>
              <p className="text-gray-300 mb-6">pro Jahr</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Alle Basis-Vorteile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>20% Ermäßigung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Kostenlose Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Premieren-Zugang</span>
                </li>
              </ul>
              <button className="w-full bg-white text-gray-900 px-6 py-3 font-bold hover:bg-gray-100 transition-all">
                Auswählen
              </button>
            </div>

            {/* Supporter */}
            <div className="bg-white border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Förderer</h3>
              <div className="text-4xl font-black mb-4">120€</div>
              <p className="text-gray-600 mb-6">pro Jahr</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Alle Premium-Vorteile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">VIP-Events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Projektpatenschaft</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Persönliche Beratung</span>
                </li>
              </ul>
              <button className="w-full border-2 border-black text-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-all">
                Auswählen
              </button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Haben Sie Fragen?
          </h2>
          <p className="text-gray-600 mb-6">
            Wir beraten Sie gerne persönlich zu unseren Mitgliedschaften und 
            finden das passende Angebot für Sie.
          </p>
          <a 
            href="/kontakt"
            className="inline-block bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </section>
      </div>
    </div>
  );
}