# Kulturrat Braunschweig

Ein modernes Next.js Projekt mit TypeScript und Tailwind CSS für den Kulturrat Braunschweig.

## 🚀 Features

- **Next.js 14+** - Das React Framework für Produktion
- **TypeScript** - Typsicherheit für bessere Entwicklererfahrung  
- **Tailwind CSS** - Utility-first CSS Framework
- **ESLint** - Code-Linting für bessere Code-Qualität
- **App Router** - Neue Next.js App Directory Struktur

## 📁 Projektstruktur

```
kulturrat_neu/
├── src/
│   └── app/
│       ├── globals.css      # Globale Styles mit Tailwind
│       ├── layout.tsx       # Root Layout Component
│       ├── page.tsx         # Homepage Component
│       ├── projekte/        # Projekte-Seite
│       ├── ueber-uns/       # Über-uns-Seite
│       └── kontakt/         # Kontakt-Seite
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.js
└── README.md
```

## 🛠️ Entwicklung

### Installation

```bash
npm install
```

### Development Server starten

```bash
npm run dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) verfügbar.

### Build für Produktion

```bash
npm run build
npm start
```

### Code-Linting

```bash
npm run lint
```

## 🎨 Styling

Das Projekt verwendet Tailwind CSS für das Styling. Die Konfiguration befindet sich in `tailwind.config.ts` und die globalen Styles in `src/app/globals.css`.

## 📝 Entwicklungsrichtlinien

- Verwende TypeScript für alle Komponenten (`.tsx` Dateien)
- Folge React Best Practices mit Hooks
- Nutze Tailwind CSS Utility-Klassen für das Styling
- Halte Komponenten modular und wiederverwendbar
- Verwende das neue App Router System von Next.js

## 🚀 Deployment

Das Projekt kann auf verschiedenen Plattformen deployed werden:

- **Vercel** (empfohlen für Next.js)
- **Netlify**
- **Railway**
- **Docker**

## 📚 Weitere Informationen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [TypeScript Dokumentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)