# Spencer Roofing Solutions - Replit Project Guide

## Overview

Spencer Roofing Solutions is a professional roofing contractor website built as a full-stack web application. The project serves as a business website and lead generation platform for a roofing project manager serving the Denver metropolitan area. The application features contact form management, email automation, AI-powered roofing assistance, and comprehensive service pages.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack Query for server state, React hooks for local state
- **Analytics**: Google Analytics 4 integration
- **Performance**: Lazy loading, image optimization, mobile-first responsive design

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints under `/api` namespace
- **Email Service**: Nodemailer with Gmail SMTP integration
- **Session Management**: Express-session with memory store
- **Data Validation**: Zod schemas for type-safe validation

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Vite build + esbuild for server bundling
- **Deployment**: Replit autoscale deployment target

## Key Components

### Email System
- **Service**: Gmail SMTP with app passwords
- **Features**: Contact form notifications, customer confirmations
- **Configuration**: Environment variables for credentials
- **Templates**: HTML email templates with professional styling

### Contact Management
- **Form Handling**: Multi-step validation with React Hook Form
- **Storage**: In-memory storage with Drizzle ORM schema
- **Services**: Multiple service types (residential, commercial, repairs, insurance)
- **Consent Management**: Email and SMS consent tracking

### AI Assistant (Planned)
- **Natural Language Processing**: Natural library for intent recognition
- **Knowledge Base**: Roofing-specific Q&A system
- **Context Management**: Session-based conversation tracking
- **Integration**: Embedded chat widget

### SEO & Analytics
- **Meta Management**: Dynamic title and description updates
- **Structured Data**: Local business schema markup
- **Sitemap**: Static XML sitemap for search engines
- **Tracking**: Google Analytics event tracking

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Client-side validation using Zod schemas
3. POST request to `/api/contact` endpoint
4. Server validates and stores submission
5. Email notifications sent to business owner
6. Confirmation email sent to customer
7. Success response returned to client

### Page Navigation
1. User navigates to route using Wouter
2. Component lazy loads if not cached
3. SEO meta data updates dynamically
4. Analytics page view tracked
5. Breadcrumb navigation updates

### Email Delivery
1. Form submission triggers email service
2. Nodemailer connects to Gmail SMTP
3. Business notification email sent first
4. Customer confirmation email sent second
5. Delivery status returned to application

## External Dependencies

### Required Services
- **Gmail SMTP**: Email delivery service
- **Google Analytics**: Website analytics (optional)
- **Replit Platform**: Hosting and deployment

### Environment Variables
```
GMAIL_USER=mattkspencer@gmail.com
GMAIL_APP_PASSWORD=16_character_app_password
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX (optional)
DATABASE_URL=postgresql_connection_string (for future database integration)
```

### Third-Party Libraries
- **UI**: @radix-ui components, lucide-react icons
- **Forms**: react-hook-form, @hookform/resolvers
- **Email**: nodemailer, @sendgrid/mail
- **Validation**: zod, drizzle-zod
- **Database**: drizzle-orm, @neondatabase/serverless
- **Analytics**: Google Analytics 4

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Port**: 5000 (configured in .replit)
- **Hot Reload**: Vite HMR enabled
- **Database**: In-memory storage for development

### Production Build
1. **Frontend Build**: `vite build` creates optimized client bundle
2. **Server Build**: `esbuild` bundles server with external packages
3. **Output**: `dist/` directory with client and server assets
4. **Start Command**: `npm run start` runs production server

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Packages**: imagemagick, ffmpeg, libheif for media processing
- **Deployment**: Autoscale target with build and run commands
- **Port Mapping**: Internal 5000 → External 80

### Performance Optimizations
- **Image Optimization**: WebP format with responsive images
- **Code Splitting**: Lazy loading for non-critical pages
- **Compression**: Gzip compression for text-based assets
- **Caching**: Service worker for static asset caching
- **Mobile**: Touch-optimized UI with mobile-first design

## Changelog

- June 14, 2025: Portfolio project details functionality added
  - Created PortfolioProject.tsx component for individual project pages
  - Added /portfolio/:id route to App.tsx
  - Updated PortfolioSection to use API data instead of hardcoded data
  - Fixed broken "View Project Details" links to use database IDs
  - Added comprehensive project details page with SEO optimization
- June 14, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.