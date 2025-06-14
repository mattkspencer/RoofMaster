// Mobile performance optimization utilities
// Implements device-specific optimizations for better mobile experience

export const isMobileDevice = (): boolean => {
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const getOptimalImageSize = (baseWidth: number, baseHeight: number) => {
  const isMobile = isMobileDevice();
  const devicePixelRatio = window.devicePixelRatio || 1;
  
  if (isMobile) {
    return {
      width: Math.round(baseWidth * 0.6 * devicePixelRatio),
      height: Math.round(baseHeight * 0.6 * devicePixelRatio)
    };
  }
  
  return {
    width: Math.round(baseWidth * devicePixelRatio),
    height: Math.round(baseHeight * devicePixelRatio)
  };
};

export const preloadCriticalResources = () => {
  if (isMobileDevice()) {
    // Preload only critical optimized resources
    const criticalImages = [
      '/images/colburnbuild.webp',
      '/images/aboutspencerroofingsolutionswebsitephoto.webp'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

export const deferNonCriticalAssets = () => {
  // Defer loading of non-critical assets until after initial render
  requestIdleCallback(() => {
    // Load portfolio images after initial page load
    const portfolioImages = document.querySelectorAll('img[data-defer]');
    portfolioImages.forEach(img => {
      if (img instanceof HTMLImageElement && img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-defer');
      }
    });
  });
};

export const optimizeForMobile = () => {
  if (isMobileDevice()) {
    // Reduce animations for better performance on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    
    // Optimize touch events
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
  }
};