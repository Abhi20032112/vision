# Image Loading Optimization Plan

## Information Gathered
- Project uses React with Vite
- Images stored in public/images/ and public/logos/
- Multiple pages with image-heavy content:
  - GalleryPage: 31 images in grid layout
  - HomePage: Hero slider (3 images), gallery carousel (31 images), map image, client logos
  - ClientsPage: Client logos
  - Navbar/Footer: Logo images
  - AboutPage: Single image
- Images are loaded synchronously, causing slow page loads

## Plan
- Implement lazy loading for gallery images
- Add loading="lazy" attribute to non-critical images
- Optimize image loading in components
- Add image preloading for critical images (hero, logos)

## Dependent Files to Edit
- src/pages/GalleryPage.jsx: Add lazy loading to gallery grid
- src/pages/HomePage.jsx: Add lazy loading to gallery carousel, loading="lazy" to map
- src/pages/ClientsPage.jsx: Add lazy loading to client logos
- src/pages/AboutPage.jsx: Add loading="lazy" to about image
- src/components/Navbar.jsx: Keep logo eager (critical)
- src/components/Footer.jsx: Keep logo eager (critical)

## Followup Steps
- Test page load times
- Verify lazy loading works correctly
- Check for any broken image fallbacks
