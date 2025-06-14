// CSS optimization utilities for performance
// Handles unused CSS removal and async loading optimization

export const removeUnusedCSS = () => {
  // Remove unused CSS classes after component mount
  const unusedSelectors = [
    // Form-related unused classes
    '.form-error', '.form-success', '.form-loading',
    // Animation classes not used above fold
    '.animate-bounce', '.animate-spin', '.animate-ping',
    // Unused color variants
    '.text-red-600', '.text-green-600', '.text-yellow-600',
    '.bg-red-100', '.bg-green-100', '.bg-yellow-100',
    // Unused spacing variants
    '.p-1', '.p-2', '.p-3', '.p-5', '.p-7', '.p-8', '.p-9', '.p-10',
    '.m-1', '.m-2', '.m-3', '.m-5', '.m-7', '.m-8', '.m-9', '.m-10',
    // Unused responsive variants for uncommon breakpoints
    '.xl\\:text-8xl', '.xl\\:text-9xl', '.2xl\\:text-8xl',
    // Unused grid variants
    '.grid-cols-3', '.grid-cols-4', '.grid-cols-5', '.grid-cols-6',
    '.grid-cols-7', '.grid-cols-8', '.grid-cols-9', '.grid-cols-10',
    '.grid-cols-11', '.grid-cols-12',
    // Unused flexbox variants
    '.flex-wrap', '.flex-nowrap', '.flex-wrap-reverse',
    // Unused positioning
    '.top-1', '.top-2', '.top-3', '.bottom-1', '.bottom-2', '.bottom-3',
    '.left-1', '.left-2', '.left-3', '.right-1', '.right-2', '.right-3',
    // Unused transforms
    '.transform', '.rotate-1', '.rotate-2', '.rotate-3', '.rotate-6',
    '.rotate-12', '.rotate-45', '.rotate-90', '.rotate-180',
    '.scale-50', '.scale-75', '.scale-90', '.scale-95', '.scale-105',
    '.scale-110', '.scale-125', '.scale-150',
    // Unused filters
    '.blur-sm', '.blur', '.blur-md', '.blur-lg', '.blur-xl', '.blur-2xl',
    '.brightness-0', '.brightness-50', '.brightness-75', '.brightness-90',
    '.brightness-95', '.brightness-105', '.brightness-110', '.brightness-125',
    '.brightness-150', '.brightness-200',
    // Unused text decorations
    '.underline', '.overline', '.line-through', '.no-underline'
  ];

  // Remove unused CSS rules from stylesheets
  requestIdleCallback(() => {
    try {
      const stylesheets = Array.from(document.styleSheets);
      stylesheets.forEach(stylesheet => {
        if (stylesheet.href && stylesheet.href.includes('index.css')) {
          try {
            const rules = Array.from(stylesheet.cssRules || []);
            rules.forEach((rule, index) => {
              if (rule instanceof CSSStyleRule) {
                const selector = rule.selectorText;
                if (unusedSelectors.some(unused => selector.includes(unused))) {
                  stylesheet.deleteRule(index);
                }
              }
            });
          } catch (e) {
            // Silently handle cross-origin stylesheet access issues
          }
        }
      });
    } catch (error) {
      console.warn('CSS optimization failed:', error);
    }
  }, { timeout: 3000 });
};

export const loadNonCriticalCSS = () => {
  // Load non-critical CSS after page load
  const nonCriticalStyles = [
    // Animation styles
    '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }',
    '@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }',
    '@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }',
    
    // Below-the-fold styles
    '.below-fold { animation: fadeIn 0.5s ease-in-out; }',
    '.slide-up { animation: slideUp 0.6s ease-out; }',
    '.fade-in { animation: fadeIn 0.4s ease-in-out; }',
    
    // Form styles (not critical for homepage)
    '.form-input { padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; }',
    '.form-textarea { padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; min-height: 120px; }',
    '.form-select { padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; background-color: white; }',
    
    // Modal styles
    '.modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 50; }',
    '.modal-content { position: relative; background: white; border-radius: 0.5rem; padding: 1.5rem; }',
    
    // Utility classes for below-the-fold content
    '.text-center { text-align: center; }',
    '.space-y-6 > * + * { margin-top: 1.5rem; }',
    '.space-y-8 > * + * { margin-top: 2rem; }'
  ];

  const style = document.createElement('style');
  style.textContent = nonCriticalStyles.join('\n');
  document.head.appendChild(style);
};

export const optimizeFontLoading = () => {
  // Optimize font loading with font-display: swap
  const fontOptimizations = `
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyjfZhrib2Bg-4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `;

  const style = document.createElement('style');
  style.textContent = fontOptimizations;
  document.head.appendChild(style);
};

export const initializeCSSOptimization = () => {
  // Initialize all CSS optimizations
  if (document.readyState === 'complete') {
    removeUnusedCSS();
    loadNonCriticalCSS();
    optimizeFontLoading();
  } else {
    window.addEventListener('load', () => {
      removeUnusedCSS();
      loadNonCriticalCSS();
      optimizeFontLoading();
    }, { once: true });
  }
};

export const measureCSSPerformance = () => {
  // Measure CSS loading performance
  if ('performance' in window) {
    const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const cssEntries = entries.filter(entry => 
      entry.name.includes('.css') || entry.name.includes('fonts.googleapis.com')
    );
    
    const resourceEntries = cssEntries as PerformanceResourceTiming[];
    
    console.log('CSS Performance Metrics:', {
      totalCSSFiles: resourceEntries.length,
      totalCSSSize: resourceEntries.reduce((sum, entry) => sum + (entry.transferSize || 0), 0),
      largestCSS: resourceEntries.reduce((max, entry) => 
        (entry.transferSize || 0) > (max.transferSize || 0) ? entry : max, resourceEntries[0]
      )
    });
  }
};