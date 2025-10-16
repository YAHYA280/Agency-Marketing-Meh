# Project Structure Documentation

## Overview
This Next.js 14 marketing agency website is built with a modern, scalable architecture featuring internationalization, animations, and a clean component structure.

## Directory Structure

```
agency-mehdi/
│
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Locale-based routing
│   │   ├── layout.tsx           # Root layout with i18n provider & Header/Footer
│   │   ├── page.tsx             # Home page with 5 sections
│   │   ├── services/
│   │   │   └── page.tsx         # Services page
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   └── globals.css              # Global styles with Tailwind & CSS variables
│
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Sticky header with navigation & language switcher
│   │   └── Footer.tsx           # Footer with company info & links
│   ├── sections/                # Page section components
│   │   └── HeroSection.tsx      # Animated hero section with Framer Motion
│   └── ui/                      # shadcn/ui components (to be added)
│
├── lib/                         # Utility functions
│   └── utils.ts                 # cn() helper for className merging
│
├── messages/                    # Translation files
│   ├── en.json                  # English translations
│   └── fr.json                  # French translations
│
├── i18n.ts                      # Internationalization configuration
├── middleware.ts                # Next.js middleware for i18n routing
├── next.config.js               # Next.js configuration with next-intl plugin
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── components.json              # shadcn/ui configuration
└── package.json                 # Dependencies & scripts
```

## Key Files Explained

### i18n Configuration

**i18n.ts**
- Exports supported locales: `['en', 'fr']`
- Configures message loading for translations
- Sets default locale to English

**middleware.ts**
- Handles automatic locale detection
- Redirects to locale-prefixed URLs
- Matches all routes except static assets

### Layout & Pages

**app/[locale]/layout.tsx**
- Root layout for all pages
- Wraps app with `NextIntlClientProvider`
- Includes Header and Footer
- Sets request locale for static rendering
- Loads translation messages

**app/[locale]/page.tsx**
- Home page with 5 sections
- Section 1: Hero (animated with Framer Motion)
- Sections 2-5: Placeholders ready for content

### Components

**components/layout/Header.tsx**
- Sticky navigation header
- Language switcher (EN/FR)
- Navigation links: Home, Services, About, Contact
- Locale-aware routing

**components/layout/Footer.tsx**
- Company information
- Service links
- Contact details
- Copyright notice

**components/sections/HeroSection.tsx**
- Animated hero section using Framer Motion
- Gradient background
- CTA buttons
- Staggered fade-in animations

### Styling

**app/globals.css**
- Tailwind directives
- CSS custom properties for theming
- Light/dark mode color schemes
- Base styles

**tailwind.config.ts**
- Extended color palette using CSS variables
- Container configuration
- Custom animations
- shadcn/ui integration

## Tech Stack Details

### Core Framework
- **Next.js 14.2.33** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **tailwindcss-animate** - Animation utilities

### Internationalization
- **next-intl 3.26** - i18n for Next.js App Router
- Supports English (en) and French (fr)
- Static rendering enabled with `setRequestLocale`

### Animations
- **Framer Motion 12.23** - Animation library
- Supports scroll animations
- Motion components for smooth transitions

### Utilities
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes
- **class-variance-authority** - Component variants
- **lucide-react** - Icon library

## Internationalization Setup

### Adding New Translations

1. **Add to messages/en.json:**
```json
{
  "newSection": {
    "title": "New Title",
    "description": "Description here"
  }
}
```

2. **Add to messages/fr.json:**
```json
{
  "newSection": {
    "title": "Nouveau Titre",
    "description": "Description ici"
  }
}
```

3. **Use in components:**
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('newSection');
  return <h1>{t('title')}</h1>;
}
```

### Adding New Pages

1. Create page under `app/[locale]/your-page/page.tsx`
2. Import and use `setRequestLocale`:
```tsx
import { setRequestLocale } from 'next-intl/server';

export default function YourPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  // Your page content
}
```

## Animation Patterns

### Framer Motion Examples

**Fade In:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

**Slide Up:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

**Scroll-triggered (coming soon):**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## Adding shadcn/ui Components

Install any component:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

Components are added to `components/ui/` and can be imported:
```tsx
import { Button } from "@/components/ui/button"
```

## Development Workflow

### Start Development Server
```bash
npm run dev
```
Opens at http://localhost:3000

### Build for Production
```bash
npm run build
```

### Run Production Build
```bash
npm start
```

### Linting
```bash
npm run lint
```

## Routes & Navigation

### Available Routes
- `/en` - English home page
- `/fr` - French home page
- `/en/services` - English services page
- `/fr/services` - French services page
- `/en/about` - English about page
- `/fr/about` - French about page
- `/en/contact` - English contact page
- `/fr/contact` - French contact page

### Navigation Pattern
Always use locale-aware links:
```tsx
import Link from 'next/link';
import { useParams } from 'next/navigation';

const params = useParams();
const locale = params.locale;

<Link href={`/${locale}/services`}>Services</Link>
```

## Environment Variables

None currently required. Add `.env.local` for:
- API keys
- Database URLs
- Feature flags

## Best Practices

1. **Always use translations** - Even for single-language content
2. **Enable static rendering** - Use `setRequestLocale` in all pages
3. **Keep components small** - Single responsibility principle
4. **Use TypeScript** - Leverage type safety
5. **Optimize images** - Use Next.js Image component
6. **Test both locales** - Ensure all content is translated

## Next Steps

1. Fill in the 5 home page sections with actual content
2. Build out services, about, and contact pages
3. Add more shadcn/ui components as needed
4. Implement scroll animations with Framer Motion
5. Add SEO metadata for each page
6. Set up environment-specific configuration
7. Add form handling for contact page
8. Implement dark mode toggle (already configured)

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Check next-intl docs: https://next-intl.dev
- Check shadcn/ui docs: https://ui.shadcn.com
- Check Framer Motion docs: https://www.framer.com/motion
