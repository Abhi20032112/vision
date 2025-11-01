# Homepage Revamp Plan - Hero Section Update

## Information Gathered
- HomePage.jsx includes HeroSection component with existing sections (Quick Services, About Us, Call to Action).
- HeroSection.jsx currently uses Swiper slider with images, overlays, and animations.
- User requested to remove images from hero section and change it to a static design.
- Approved plan: Make HeroSection static with animated gradient background, keep centered box layout, text overlays, and CTA button.

## Plan
- [x] Update src/components/HeroSection.jsx:
  - Remove Swiper slider and image-related code.
  - Change to static design with animated gradient background.
  - Retain centered box container (80-90% width, rounded-2xl, shadow-2xl).
  - Keep text overlays (heading, tagline) and CTA button.
  - Add subtle background animations for engagement.
  - Ensure responsive design.

## Dependent Files to be edited
- src/components/HeroSection.jsx (major update to remove images and slider)

## Followup steps
- [ ] Test responsiveness on different screen sizes.
- [ ] Verify animations work smoothly.
- [ ] Run development server to preview changes.
- [ ] Check if further home page revamps are needed (e.g., add Stats or Testimonials sections).
