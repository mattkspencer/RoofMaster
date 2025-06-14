import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Enhanced compression for maximum performance
app.use(compression({
  level: 9, // Maximum compression for production
  threshold: 512, // Compress smaller files too
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    
    // Compress text-based resources including JS, CSS, HTML, JSON, XML
    const contentType = res.getHeader('Content-Type');
    if (typeof contentType === 'string') {
      return /text|javascript|json|xml|css|html/.test(contentType);
    }
    
    return compression.filter(req, res);
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Performance and security headers
app.use((req, res, next) => {
  // Cache control for static assets
  if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff2|woff|ttf|eot)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year
  } else if (req.url.match(/\.(html|htm)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour for HTML
  } else {
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes for API
  }

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Content Security Policy
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: http:",
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'"
  ].join('; '));

  // Performance headers
  res.setHeader('Vary', 'Accept-Encoding');
  
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    // Serve static files from public folder in development
    app.use(express.static('public'));
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
