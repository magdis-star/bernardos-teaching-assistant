# Changelog

All notable changes to the Bernardo's Teaching Assistant landing page project.

## [Current Version] - December 4, 2024

### Added
- Inter font family from Google Fonts for modern typography
- Emoji icons throughout all sections for visual interest
- Fixed navigation bar with logo placeholder
- Dark background form section (gray-900) with white card design
- Side-by-side layout for "Why This Works" and "Who We're Looking For" sections
- Hero image asset (hero-image.jpg) - senior couple using tablet
- Logo asset (logo.jpg) - ready for integration
- GitHub repository setup
- Enhanced focus indicators with emerald ring and offset
- README-CURRENT.md with up-to-date documentation

### Changed
- **Design overhaul:** Changed from sage green (#7CB5A3) to emerald green (#10B981) theme
- **Upgraded to Next.js 16** (from Next.js 14)
- **Upgraded to React 19** (from React 18)
- Lightened hero image overlay from black/40-60 to black/30-45 for better image visibility
- Hero section text positioned to the left as per mockup
- Reduced font sizes for better balance (base: 16px instead of 18px)
- Combined WhyThisWorks and WhoWeAreLookingFor into single DetailsSection component
- Updated color palette to emerald green throughout (buttons, accents, borders)
- Enhanced form styling with larger spacing and better visual hierarchy

### Technical Updates
- Updated Next.js 16 async params API (using await params)
- Downgraded Tailwind CSS from v4 to v3.4.18 for compatibility
- Configured PostCSS for Tailwind CSS v3
- Updated TypeScript configuration for Next.js 16
- Fixed module format issues (removed CommonJS type)

### Fixed
- Tailwind CSS 4 compatibility issues
- Image 404 errors (switched to local images)
- Next.js 16 async params errors
- Parse errors in component files
- Module format mismatches

## [Initial Version] - December 1, 2024

### Added
- Initial Next.js 14 project setup with TypeScript
- Bilingual routing system ([lang] parameter)
- English and Spanish language support
- All main components:
  - Hero section
  - HowItWorks section
  - WhyThisWorks section
  - WhoWeAreLookingFor section
  - WhatYouWillGet section
  - InvitationForm section
  - LanguageSwitcher component
- Content management system (lib/content.ts)
- Sage green and navy blue color scheme
- WCAG AA accessibility features
- Responsive design for all devices
- Form validation and error handling
- Project documentation (README.md, DEPLOYMENT.md, PROJECT-INFO.md)
- Design mockup reference (design-mockup.png)

---

## Change Summary

**From sage green → To emerald green**
**From Next.js 14 → To Next.js 16**
**From React 18 → To React 19**
**From no icons → To emoji icons throughout**
**From separate sections → To combined DetailsSection**
**From dark hero → To lighter hero with visible image**
