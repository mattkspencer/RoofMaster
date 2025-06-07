import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { optimizeForMobile, preloadCriticalResources } from "./utils/mobileOptimization";

// Defer non-critical CSS loading
const loadCSS = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

// Optimize for mobile devices immediately
optimizeForMobile();
preloadCriticalResources();

// Load non-critical CSS after initial render for better FCP
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  });
} else {
  // Fallback for browsers without requestIdleCallback
  setTimeout(() => {
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  }, 100);
}

// Register service worker for performance caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
