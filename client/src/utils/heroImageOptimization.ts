// Hero image optimization utilities for LCP improvement
export const preloadHeroImage = () => {
  // Create high-priority image preload for immediate loading
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=75&fm=webp';
  link.setAttribute('fetchpriority', 'high');
  link.crossOrigin = 'anonymous';
  
  // Only add if not already present
  if (!document.querySelector(`link[href="${link.href}"]`)) {
    document.head.insertBefore(link, document.head.firstChild);
  }
};

// Optimized image loading with immediate decode
export const createOptimizedHeroImage = (): HTMLImageElement => {
  const img = new Image();
  img.src = 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=75&fm=webp';
  img.srcset = `
    https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=533&q=75&fm=webp 800w,
    https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=75&fm=webp 1200w,
    https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=1067&q=75&fm=webp 1600w
  `;
  img.sizes = '100vw';
  img.alt = 'Denver skyline with mountains - Spencer Roofing Solutions service area';
  img.loading = 'eager';
  img.decoding = 'async';
  (img as any).fetchpriority = 'high';
  
  return img;
};

// Initialize early image loading on DOM ready
export const initHeroImageOptimization = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadHeroImage);
  } else {
    preloadHeroImage();
  }
};