import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Kulturrat Braunschweig</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Förderung und Entwicklung von Kulturprojekten in Braunschweig.
              Wir unterstützen innovative kulturelle Initiativen und schaffen
              Räume für künstlerischen Austausch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projekte" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Projekte
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/presse" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Presse & Medien
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Kontakt</h4>
            <div className="text-gray-300 space-y-1 md:space-y-2 text-sm md:text-base">
              <p>Kulturrat Braunschweig</p>
              <p>Löwenwall 16</p>
              <p>38100 Braunschweig</p>
              <p>Tel: +49 531 12345678</p>
              <p className="break-all">info@kulturrat-braunschweig.de</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6">
              <Link href="/impressum" className="text-gray-300 hover:text-white text-xs sm:text-sm">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-300 hover:text-white text-xs sm:text-sm">
                Datenschutz
              </Link>
              <Link href="/leichte-sprache" className="text-gray-300 hover:text-white text-xs sm:text-sm">
                Leichte Sprache
              </Link>
              <Link href="/gebaerdensprache" className="text-gray-300 hover:text-white text-xs sm:text-sm">
                Gebärdensprache
              </Link>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-right">
              © 2025 Kulturrat Braunschweig. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}