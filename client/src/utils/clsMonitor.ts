// Cumulative Layout Shift (CLS) monitoring and prevention utilities
// Tracks layout shifts and provides optimization recommendations

interface LayoutShiftEntry {
  value: number;
  sources: Array<{
    node?: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }>;
  hadRecentInput: boolean;
}

export const initializeCLSMonitoring = () => {
  if ('PerformanceObserver' in window) {
    let clsValue = 0;
    let clsEntries: LayoutShiftEntry[] = [];

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry as any);
          
          // Log significant layout shifts
          if ((entry as any).value > 0.001) {
            console.warn('Layout shift detected:', {
              value: Math.round((entry as any).value * 1000) / 1000,
              timestamp: entry.startTime,
              sources: (entry as any).sources?.length || 0
            });
          }
        }
      });
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    // Report final CLS score after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        console.log('Final CLS Score:', {
          score: Math.round(clsValue * 1000) / 1000,
          rating: clsValue < 0.1 ? 'Good' : clsValue < 0.25 ? 'Needs Improvement' : 'Poor',
          totalShifts: clsEntries.length
        });
      }, 5000);
    });
  }
};

export const preventImageLayoutShifts = () => {
  // Add aspect ratio containers for images without dimensions
  const images = document.querySelectorAll('img:not([width]):not([height])');
  
  images.forEach((img: Element) => {
    const imageElement = img as HTMLImageElement;
    
    // Create aspect ratio container
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    
    // Set default aspect ratio based on image type
    if (imageElement.src.includes('hero') || imageElement.alt.includes('hero')) {
      container.style.aspectRatio = '3/2';
    } else if (imageElement.src.includes('about') || imageElement.alt.includes('about')) {
      container.style.aspectRatio = '4/3';
    } else {
      container.style.aspectRatio = '16/9';
    }
    
    // Style image
    imageElement.style.position = 'absolute';
    imageElement.style.top = '0';
    imageElement.style.left = '0';
    imageElement.style.width = '100%';
    imageElement.style.height = '100%';
    imageElement.style.objectFit = 'cover';
    
    // Wrap image in container
    if (imageElement.parentNode) {
      imageElement.parentNode.insertBefore(container, imageElement);
      container.appendChild(imageElement);
    }
  });
};

export const optimizeCallButtonPositioning = () => {
  // Ensure sticky call button has reserved space
  const stickyButton = document.querySelector('.sticky-call-button');
  if (stickyButton) {
    (stickyButton as HTMLElement).style.contain = 'layout';
    (stickyButton as HTMLElement).style.willChange = 'transform';
  }

  // Optimize emergency banner positioning
  const emergencyBanner = document.querySelector('.emergency-banner');
  if (emergencyBanner) {
    (emergencyBanner as HTMLElement).style.contain = 'layout';
    (emergencyBanner as HTMLElement).style.minHeight = '60px';
  }
};

export const addImageDimensionFallbacks = () => {
  // Add loading placeholder for images
  const style = document.createElement('style');
  style.textContent = `
    .loading-image {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading-shimmer 1.5s infinite;
    }
    
    @keyframes loading-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    /* Force dimensions for key images */
    img[src*="colburnbuild"] {
      aspect-ratio: 800/533;
      width: 100%;
      height: auto;
    }
    
    img[src*="aboutspencerroofingsolutions"] {
      aspect-ratio: 800/600;
      width: 100%;
      height: auto;
    }
    
    img[src*="unsplash"] {
      aspect-ratio: 3/2;
      width: 100%;
      height: auto;
    }
    
    /* Emergency banner button dimensions */
    .emergency-call-btn {
      min-width: 220px !important;
      min-height: 36px !important;
      box-sizing: border-box !important;
    }
    
    /* Sticky button dimensions */
    .sticky-call-container {
      width: 180px !important;
      height: 64px !important;
      position: fixed !important;
      bottom: 1.5rem !important;
      right: 1.5rem !important;
      contain: layout !important;
    }
  `;
  document.head.appendChild(style);
};

export const initializeCLSPrevention = () => {
  // Initialize all CLS prevention measures
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preventImageLayoutShifts();
      optimizeCallButtonPositioning();
      addImageDimensionFallbacks();
      initializeCLSMonitoring();
    });
  } else {
    preventImageLayoutShifts();
    optimizeCallButtonPositioning();
    addImageDimensionFallbacks();
    initializeCLSMonitoring();
  }
};

export const measureCLSImprovement = () => {
  return new Promise<{ score: number; rating: string }>((resolve) => {
    if (!('PerformanceObserver' in window)) {
      resolve({ score: 0, rating: 'Cannot measure' });
      return;
    }

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    // Measure for 5 seconds after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        observer.disconnect();
        const rating = clsValue < 0.1 ? 'Good' : clsValue < 0.25 ? 'Needs Improvement' : 'Poor';
        resolve({ 
          score: Math.round(clsValue * 1000) / 1000, 
          rating 
        });
      }, 5000);
    });
  });
};