# Bernardo's Teaching Assistant - Landing Page

A bilingual (English/Spanish) landing page to recruit seniors (55+) for an AI-powered English conversation practice app research study.

## 🎯 Project Overview

This is a Next.js 16 application built with TypeScript and Tailwind CSS v3, featuring:
- Bilingual support (English and Spanish)
- Modern emerald green theme with emoji icons
- Senior-friendly design with large, readable typography
- WCAG AA accessibility compliance
- Responsive layout for all devices
- Contact form for participant recruitment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000/en` for English or `http://localhost:3000/es` for Spanish

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Language Support

The site supports two languages with dedicated routes:
- English: `/en`
- Spanish: `/es`

Language switching is available via the navigation bar.

## 📁 Project Structure

```
├── app/
│   ├── [lang]/              # Bilingual routing
│   │   ├── layout.tsx       # Root layout with language support
│   │   └── page.tsx         # Main landing page
│   └── globals.css          # Global styles with Tailwind + Inter font
├── components/              # React components
│   ├── Hero.tsx             # Hero section with background image
│   ├── HowItWorks.tsx       # Numbered steps section
│   ├── DetailsSection.tsx   # Side-by-side benefits and criteria
│   ├── WhatYouWillGet.tsx   # Benefits list with emoji icons
│   ├── InvitationForm.tsx   # Sign-up form
│   └── LanguageSwitcher.tsx # Fixed navigation with language toggle
├── lib/
│   └── content.ts           # Bilingual content definitions
└── public/                  # Static assets
    ├── hero-image.jpg       # Hero background image
    └── logo.jpg             # Logo file (ready for integration)

```

## 🎨 Design

**Current Color Palette:**
- Primary: Emerald green (#10B981, #059669)
- Accent: Light emerald (#D1FAE5, #6EE7B7)
- Background: Light gray (#F9FAFB) and white
- Text: Dark gray (#1F2937, #374151)
- Hero overlay: Black with 30-45% opacity (lighter for better image visibility)

**Design Features:**
- Inter font family from Google Fonts
- Emoji icons throughout sections (✅, 👂, 📱, 🧠, 💖, etc.)
- Large, readable typography optimized for seniors
- High contrast for accessibility
- Clean, modern layout with clear visual hierarchy
- Side-by-side layout for "Why This Works" and "Who We're Looking For"
- Dark background form section with white card
- Fixed navigation bar with logo placeholder
- Prominent, clear call-to-action buttons

**Design Principles:**
- Optimized for seniors (55+)
- Mobile-first responsive design
- Clear visual hierarchy
- Large touch targets for buttons
- Smooth transitions and hover effects

## ♿ Accessibility Features

- WCAG AA compliant
- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Enhanced focus indicators (emerald ring with offset)
- High contrast ratios
- Screen reader optimization
- Large, readable fonts (16px base)
- Form validation and error messages

## 📋 Form Handling

The invitation form currently simulates submission (console.log). To integrate with a real backend:

1. Update `components/InvitationForm.tsx` (line 30-36)
2. See `DEPLOYMENT.md` for integration options (Formspree, SendGrid, custom API)

**Form Fields:**
- Name (text, required)
- Email (email, required)
- Phone (tel, required)
- Age (number, min 55, required)
- Location (text, required)

## 🚢 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Code is already on GitHub: https://github.com/magdis-star/bernardos-teaching-assistant
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy (automatic configuration)

## 📄 Additional Documentation

- `PROJECT-INFO.md` - Original project requirements and content
- `DEPLOYMENT.md` - Deployment options and instructions
- `README.md` - Previous version of documentation (kept for reference)
- `design-mockup.png` - Original design reference

## 🛠 Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Inter Font** - Google Fonts typography
- **Node.js** - Runtime environment

## 📸 Assets

- `public/hero-image.jpg` - Hero section background (senior couple using tablet)
- `public/logo.jpg` - Logo file (ready for integration when finalized)

## 🎯 Key Features

### Hero Section
- Full-width background image with gradient overlay (black/30-45%)
- Large headline with emerald accent text
- Prominent CTA button
- Tagline and subtext for context

### How It Works
- 4-step numbered process
- Clean card design with emerald accents
- Icon numbers in emerald circles

### Benefits & Criteria
- Side-by-side layout (desktop) / stacked (mobile)
- Emoji icons for visual interest
- Clear bullet points with large text

### Form Section
- Dark background (gray-900) for contrast
- White card with shadow
- Grid layout for age/location fields
- Real-time validation
- Success/error messaging

## 📝 TODO

- [ ] Integrate form submission endpoint
- [ ] Finalize and integrate logo design
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Configure email notifications for form submissions
- [ ] Consider adding testimonials section (future enhancement)

## 🔄 Recent Updates (Latest Version)

- ✅ Updated to Next.js 16 and React 19
- ✅ Changed theme from sage green to emerald green
- ✅ Added emoji icons throughout all sections
- ✅ Implemented side-by-side layout for benefits/criteria
- ✅ Lightened hero image overlay for better visibility
- ✅ Added Inter font family
- ✅ Created fixed navigation bar
- ✅ Implemented dark form section with white card
- ✅ Added hero image and logo assets
- ✅ Optimized for WCAG AA accessibility
- ✅ Set up GitHub repository

---

**Client:** Bernardo (PhD Research Study)
**GitHub:** https://github.com/magdis-star/bernardos-teaching-assistant
**Created:** December 2024
**Last Updated:** December 4, 2024
**Status:** Development Complete - Ready for Deployment
