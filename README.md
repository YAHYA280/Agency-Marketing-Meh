# Marketing Agency Website

A modern, professional marketing agency website built with Next.js 14, featuring internationalization (i18n), smooth animations, and a clean design system.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Internationalization:** next-intl (English & French)
- **UI Components:** shadcn/ui with Radix UI

## Project Structure

```
agency-mehdi/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── layout.tsx         # Root layout with i18n provider
│   │   ├── page.tsx           # Home page with 5 sections
│   │   ├── services/          # Services page
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   └── globals.css            # Global styles with Tailwind
├── components/
│   ├── layout/                # Layout components
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Footer component
│   ├── sections/              # Page sections
│   │   └── HeroSection.tsx    # Animated hero section
│   └── ui/                    # shadcn/ui components (to be added)
├── lib/
│   └── utils.ts               # Utility functions (cn helper)
├── messages/
│   ├── en.json                # English translations
│   └── fr.json                # French translations
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Next.js middleware for i18n routing
└── package.json

## Features

### Internationalization (i18n)
- Supports English and French
- Automatic language detection via URL prefix (`/en` or `/fr`)
- Language switcher in header
- Centralized translation files in `messages/` directory

### Animations
- Framer Motion for smooth, performant animations
- Scroll-based animations ready to implement
- Pre-configured hero section with fade-in animations

### Design System
- shadcn/ui components for consistent UI
- Tailwind CSS for utility-first styling
- CSS variables for theming
- Dark mode support (configured)

### Pages Structure

#### Home Page (5 Sections)
1. **Hero Section** - Animated hero with CTA buttons
2. **Section 2** - Placeholder (ready for your content)
3. **Section 3** - Placeholder (ready for your content)
4. **Section 4** - Placeholder (ready for your content)
5. **Section 5** - Placeholder (ready for your content)

#### Additional Pages
- Services
- About
- Contact

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically redirect to `/en` (English) by default.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

Install any component from shadcn/ui:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

Components will be added to `components/ui/`

## Adding Translations

Edit the JSON files in `messages/`:

**messages/en.json**
```json
{
  "navigation": {
    "home": "Home",
    "services": "Services"
  }
}
```

**messages/fr.json**
```json
{
  "navigation": {
    "home": "Accueil",
    "services": "Services"
  }
}
```

## Project Configuration

### i18n Configuration
- Default locale: English (`en`)
- Supported locales: `en`, `fr`
- Locale prefix: Always included in URL

### Tailwind Configuration
- Custom color scheme with CSS variables
- Container configuration
- shadcn/ui integration
- Animation utilities

## Next Steps

1. Customize the hero section content
2. Add content to the 5 home page sections
3. Create services, about, and contact page content
4. Add more shadcn/ui components as needed
5. Implement scroll animations with Framer Motion
6. Add SEO metadata for each page

## License

Private project
