// Image optimization utilities for Spencer Roofing Solutions
// Provides optimized image URLs with proper sizing and compression

export const getOptimizedImageUrl = (
  baseUrl: string,
  width: number,
  height?: number,
  quality: number = 80
): string => {
  // Handle Unsplash URLs
  if (baseUrl.includes('unsplash.com')) {
    const url = new URL(baseUrl);
    url.searchParams.set('w', width.toString());
    if (height) {
      url.searchParams.set('h', height.toString());
    }
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    return url.toString();
  }

  // Handle other image URLs - return as is for now
  return baseUrl;
};

export const getResponsiveImageSrcSet = (baseUrl: string): string => {
  const sizes = [480, 768, 1024, 1440, 1920];
  
  if (baseUrl.includes('unsplash.com')) {
    return sizes
      .map(size => `${getOptimizedImageUrl(baseUrl, size)} ${size}w`)
      .join(', ');
  }

  return baseUrl;
};

export const getImageSizes = (breakpoints: string[] = ['(max-width: 768px) 100vw', '50vw']): string => {
  return breakpoints.join(', ');
};

// Preload critical images for better LCP
export const preloadCriticalImages = () => {
  const criticalImages = [
    'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  criticalImages.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};