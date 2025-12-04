# Bernardo's Teaching Assistant - Landing Page

A bilingual (English/Spanish) landing page to recruit seniors (55+) for an AI-powered English conversation practice app research study.

## 🎯 Project Overview

This is a Next.js 14 application built with TypeScript and Tailwind CSS, featuring:
- Bilingual support (English and Spanish)
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

Visit `http://localhost:3000` - it will automatically redirect to `/en` (English version)

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
│   ├── [lang]/          # Bilingual routing
│   │   ├── layout.tsx   # Root layout with language support
│   │   └── page.tsx     # Main landing page
│   └── globals.css      # Global styles with Tailwind
├── components/          # React components
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── WhyThisWorks.tsx
│   ├── WhoWeAreLookingFor.tsx
│   ├── WhatYouWillGet.tsx
│   ├── InvitationForm.tsx
│   └── LanguageSwitcher.tsx
├── lib/
│   └── content.ts       # Bilingual content definitions
└── public/              # Static assets

```

## 🎨 Design

**Color Palette:**
- Primary: Soft sage green (#7CB5A3)
- Background: White
- Text: Navy blue (#1E3A5F)
- Accent: Blue for CTAs

**Design Principles:**
- Large, readable typography (18px+ base)
- High contrast for accessibility
- Clean, uncluttered layout
- Prominent, clear call-to-action buttons
- Optimized for seniors (55+)

## ♿ Accessibility Features

- WCAG AA compliant
- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Focus indicators
- High contrast ratios
- Screen reader optimization
- Large, readable fonts

## 📋 Form Handling

The invitation form currently logs submissions to the console. To integrate with a real backend:

1. Update `components/InvitationForm.tsx`
2. See `DEPLOYMENT.md` for integration options (Formspree, SendGrid, custom API)

## 🚢 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy (automatic configuration)

## 📄 Additional Documentation

- `PROJECT-INFO.md` - Complete project requirements and content
- `DEPLOYMENT.md` - Deployment options and instructions
- `design-mockup.png` - Original design reference

## 🛠 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Node.js

## 📝 TODO

- [ ] Integrate form submission endpoint
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Add logo when provided by client
- [ ] Configure email notifications for form submissions

---

**Client:** Bernardo (PhD Research Study)
**Developer:** Dadada Design
**Created:** December 2025
**Status:** Development Complete - Ready for Deployment
