// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics with optimized async loading
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Only initialize after page has loaded to avoid blocking main thread
  const initializeGA = () => {
    try {
      // Initialize dataLayer early
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      // Add Google Analytics script with defer and error handling
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      
      // Error handling for GA loading failures
      script.onerror = () => {
        console.warn('Google Analytics failed to load');
      };
      
      script.onload = () => {
        // Configure GA only after script loads successfully
        window.gtag('js', new Date());
        window.gtag('config', measurementId, {
          // Optimize for performance
          send_page_view: false, // We'll handle page views manually
          transport_type: 'beacon', // Use sendBeacon for better performance
          anonymize_ip: true, // Privacy optimization
        });
      };
      
      document.head.appendChild(script);
    } catch (error) {
      console.warn('Google Analytics initialization failed:', error);
    }
  };

  // Defer GA initialization until after critical rendering
  if (document.readyState === 'complete') {
    // Page already loaded, use requestIdleCallback or setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initializeGA, { timeout: 2000 });
    } else {
      setTimeout(initializeGA, 100);
    }
  } else {
    // Wait for page load
    window.addEventListener('load', () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(initializeGA, { timeout: 2000 });
      } else {
        setTimeout(initializeGA, 100);
      }
    }, { once: true });
  }
};

// Track page views - optimized for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  // Use event tracking instead of config for better performance
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: url,
    send_to: measurementId
  });
};

// Track events - optimized with error handling
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  try {
    const eventData: any = {
      event_category: category,
      event_label: label,
    };
    
    // Only add value if it's a valid number
    if (typeof value === 'number' && !isNaN(value)) {
      eventData.value = value;
    }
    
    window.gtag('event', action, eventData);
  } catch (error) {
    console.warn('Google Analytics event tracking failed:', error);
  }
};
