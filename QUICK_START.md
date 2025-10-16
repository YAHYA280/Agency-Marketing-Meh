# Quick Start Guide

## 🚀 Your Next.js 14 Marketing Agency Website is Ready!

### ✅ What's Included

- **Next.js 14** with App Router and TypeScript
- **Internationalization (i18n)** - English & French support
- **Framer Motion** for smooth animations
- **Tailwind CSS** for styling
- **shadcn/ui** component system
- **Professional folder structure**
- **5-section home page** (Hero + 4 more sections ready for content)
- **3 additional pages** (Services, About, Contact)

### 🎯 Getting Started

#### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) - it will redirect to `/en`

#### 2. View Your Pages

**English:**
- Home: http://localhost:3000/en
- Services: http://localhost:3000/en/services
- About: http://localhost:3000/en/about
- Contact: http://localhost:3000/en/contact

**French:**
- Home: http://localhost:3000/fr
- Services: http://localhost:3000/fr/services
- About: http://localhost:3000/fr/about
- Contact: http://localhost:3000/fr/contact

#### 3. Switch Languages
Click the language toggle in the header (EN/FR)

### 📁 Key Files to Edit

#### Home Page Content
**File:** `app/[locale]/page.tsx`
- Section 1 (Hero) is fully styled with animations
- Sections 2-5 are placeholders - add your content here

#### Translations
**Files:**
- `messages/en.json` - English text
- `messages/fr.json` - French text

Add your content:
```json
{
  "navigation": {
    "home": "Home",
    "services": "Services"
  },
  "home": {
    "title": "Your Title Here",
    "subtitle": "Your subtitle here"
  }
}
```

#### Styling
**File:** `app/globals.css`
- Modify CSS variables for colors
- Add custom styles

**File:** `tailwind.config.ts`
- Customize theme colors
- Add custom utilities

### 🎨 Adding UI Components

Install shadcn/ui components on demand:

```bash
# Example: Add a button component
npx shadcn@latest add button

# Example: Add a card component
npx shadcn@latest add card

# Example: Add a form component
npx shadcn@latest add form
```

Then use them:
```tsx
import { Button } from "@/components/ui/button"

<Button>Click me</Button>
```

### ✨ Adding Animations

Framer Motion is already installed. Example:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your animated content
</motion.div>
```

**Scroll animations:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Appears when scrolled into view
</motion.div>
```

### 📝 Creating New Pages

1. Create file: `app/[locale]/your-page/page.tsx`

2. Add this code:
```tsx
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function YourPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale);
  const t = useTranslations('yourSection');

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1>{t('title')}</h1>
      </div>
    </div>
  );
}
```

3. Add translations to `messages/en.json` and `messages/fr.json`

4. Add navigation link to `components/layout/Header.tsx`

### 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Run production build

# Code Quality
npm run lint         # Run ESLint
```

### 🌍 Internationalization Tips

1. **Always use translations:**
```tsx
const t = useTranslations('section');
<h1>{t('title')}</h1>
```

2. **Add to both language files:**
- `messages/en.json`
- `messages/fr.json`

3. **Use locale-aware links:**
```tsx
import Link from 'next/link';
import { useParams } from 'next/navigation';

const params = useParams();
<Link href={`/${params.locale}/about`}>About</Link>
```

### 🎯 Next Steps - Fill in Your Content

#### Home Page (5 Sections)
**File:** `app/[locale]/page.tsx`

1. **Section 1 (Hero)** ✅ - Already styled with animations
2. **Section 2** - Add your services overview
3. **Section 3** - Add portfolio/work showcase
4. **Section 4** - Add testimonials or stats
5. **Section 5** - Add CTA or contact form

#### Other Pages

**Services Page** (`app/[locale]/services/page.tsx`)
- List your marketing services
- Add service cards with descriptions
- Include pricing or packages

**About Page** (`app/[locale]/about/page.tsx`)
- Company story
- Team members
- Mission and values

**Contact Page** (`app/[locale]/contact/page.tsx`)
- Contact form
- Office locations
- Social media links

### 🎨 Customizing Design

#### Colors
Edit `app/globals.css` - look for `:root` variables:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* Change these values */
}
```

#### Fonts
Edit `app/[locale]/layout.tsx`:
```tsx
import { YourFont } from "next/font/google";
const yourFont = YourFont({ subsets: ["latin"] });
```

#### Layout
- Header: `components/layout/Header.tsx`
- Footer: `components/layout/Footer.tsx`

### 📦 Project Structure Quick Reference

```
app/[locale]/        # All pages (locale-based routing)
components/          # React components
  ├── layout/        # Header, Footer
  ├── sections/      # Page sections
  └── ui/            # shadcn components
messages/            # Translations (en.json, fr.json)
lib/                 # Utility functions
```

### 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf .next
npm run build
```

**Types not working?**
```bash
npm run dev
# TypeScript will regenerate types
```

**Translations not showing?**
- Check both `messages/en.json` and `messages/fr.json`
- Restart dev server after adding translations

### 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **next-intl Docs:** https://next-intl.dev
- **shadcn/ui:** https://ui.shadcn.com
- **Framer Motion:** https://www.framer.com/motion
- **Tailwind CSS:** https://tailwindcss.com

### 🎉 You're All Set!

Your professional marketing agency website is ready to customize. Start by:
1. Running `npm run dev`
2. Opening http://localhost:3000/en
3. Editing `app/[locale]/page.tsx` to add your content
4. Updating translations in `messages/en.json` and `messages/fr.json`

Happy coding! 🚀
