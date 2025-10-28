export default function KontaktPage() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600">
            Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Nachricht
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Schreiben Sie uns
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vorname" className="block text-sm font-medium text-gray-700 mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="vorname"
                    name="vorname"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="nachname" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="nachname"
                    name="nachname"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="betreff" className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff *
                </label>
                <select
                  id="betreff"
                  name="betreff"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="projektfoerderung">Projektförderung</option>
                  <option value="beratung">Beratung</option>
                  <option value="kooperation">Kooperation</option>
                  <option value="presse">Presse</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={6}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Beschreiben Sie hier Ihr Anliegen..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="datenschutz"
                  name="datenschutz"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="datenschutz" className="ml-2 block text-sm text-gray-700">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="text-blue-600 hover:text-blue-800">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und akzeptiert. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adresse</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Kulturrat Braunschweig</p>
                <p>Löwenwall 16</p>
                <p>38100 Braunschweig</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kontaktdaten</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+49 531 12345678</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">info@kulturrat-braunschweig.de</span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Öffnungszeiten</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Montag - Donnerstag:</span>
                  <span>9:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Freitag:</span>
                  <span>9:00 - 16:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Wochenende:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>

            {/* Public Transport */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Anfahrt</h3>
              <div className="space-y-2 text-blue-800">
                <p><strong>Straßenbahn:</strong> Linie 1, 2, 5 (Schloss)</p>
                <p><strong>Bus:</strong> 411, 420, 461</p>
                <p><strong>Auto:</strong> Parkplätze am Schlossplatz</p>
                <p><strong>Fußweg:</strong> 5 Min. vom Hauptbahnhof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}