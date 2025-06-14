// Compression and performance monitoring utilities
// Tracks compression effectiveness and resource loading performance

interface CompressionMetrics {
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  savingsKB: number;
}

export const measureCompressionSavings = (): Promise<CompressionMetrics[]> => {
  return new Promise((resolve) => {
    if (!('performance' in window)) {
      resolve([]);
      return;
    }

    // Wait for resources to load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const compressionMetrics: CompressionMetrics[] = [];

        entries.forEach(entry => {
          if (entry.transferSize && entry.decodedBodySize) {
            const savings = entry.decodedBodySize - entry.transferSize;
            if (savings > 1024) { // Only track significant savings (>1KB)
              compressionMetrics.push({
                originalSize: entry.decodedBodySize,
                compressedSize: entry.transferSize,
                compressionRatio: (entry.transferSize / entry.decodedBodySize) * 100,
                savingsKB: savings / 1024
              });
            }
          }
        });

        resolve(compressionMetrics);
      }, 1000);
    }, { once: true });
  });
};

export const logCompressionEffectiveness = async () => {
  const metrics = await measureCompressionSavings();
  const totalSavings = metrics.reduce((sum, metric) => sum + metric.savingsKB, 0);
  
  console.log('Compression Performance Report:', {
    totalResources: metrics.length,
    totalSavingsKB: Math.round(totalSavings * 100) / 100,
    avgCompressionRatio: Math.round(
      (metrics.reduce((sum, metric) => sum + metric.compressionRatio, 0) / metrics.length) * 100
    ) / 100,
    topSavings: metrics
      .sort((a, b) => b.savingsKB - a.savingsKB)
      .slice(0, 3)
      .map(metric => ({
        savingsKB: Math.round(metric.savingsKB * 100) / 100,
        ratio: Math.round(metric.compressionRatio)
      }))
  });
};

export const optimizeResourceLoading = () => {
  // Add compression hints for better browser optimization
  const compressionMeta = document.createElement('meta');
  compressionMeta.httpEquiv = 'Content-Encoding';
  compressionMeta.content = 'gzip, br';
  document.head.appendChild(compressionMeta);

  // Add resource timing observer for performance monitoring
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Log large uncompressed resources
          if (resourceEntry.transferSize && resourceEntry.decodedBodySize) {
            const compressionRatio = resourceEntry.transferSize / resourceEntry.decodedBodySize;
            if (compressionRatio > 0.8 && resourceEntry.decodedBodySize > 5000) {
              console.warn('Poor compression detected:', {
                resource: resourceEntry.name.split('/').pop(),
                ratio: Math.round(compressionRatio * 100),
                sizeMB: Math.round(resourceEntry.transferSize / 1024)
              });
            }
          }
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }
};

export const initializeCompressionMonitoring = () => {
  // Initialize compression monitoring after page load
  if (document.readyState === 'complete') {
    optimizeResourceLoading();
    logCompressionEffectiveness();
  } else {
    window.addEventListener('load', () => {
      optimizeResourceLoading();
      logCompressionEffectiveness();
    }, { once: true });
  }
};

export const precompressResources = () => {
  // Add preload hints with compression preferences
  const criticalResources = [
    '/src/main.tsx',
    '/src/App.tsx',
    '/src/index.css'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.setAttribute('as', resource.endsWith('.css') ? 'style' : 'script');
    link.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(link);
  });
};