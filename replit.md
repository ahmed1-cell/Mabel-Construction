# Mabel Construction Website

## Overview

This is a modern, mobile-first construction company website for Mabel Construction built with React, TypeScript, and Express.js. The application features a bold, captivating design with 3D elements and animations, following a mobile-first approach inspired by Premier Construction's aesthetic. The website showcases construction services, project portfolios, and provides client engagement through contact forms and service information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with custom design system implementing purple-black-white color palette
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Pattern**: RESTful API with modular route structure
- **Storage Interface**: Abstract storage layer with in-memory implementation (designed for easy database integration)
- **Development**: Hot module replacement and error overlay for development experience

### Design System
- **Approach**: Mobile-first responsive design with bold, captivating aesthetic
- **Colors**: Deep purple primary (#270 85% 25%), rich black (#0 0% 8%), pure white (#0 0% 98%)
- **Typography**: Inter font family with weight variations (400-900)
- **Components**: 3D enhanced icons, animated cards, gradient overlays
- **Animations**: CSS transforms for hover effects, smooth transitions, scroll-based animations

### Data Architecture
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schemas
- **Schema**: User management system with username/password authentication structure
- **Migration System**: Drizzle Kit for database schema management and migrations
- **Type Generation**: Automatic TypeScript type generation from database schemas

### Development Experience
- **Monorepo Structure**: Organized into client, server, and shared directories
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Vite development server with Express integration
- **Error Handling**: Runtime error modal and comprehensive error boundaries
- **Code Quality**: TypeScript strict mode, ESLint configuration, and consistent formatting

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support across frontend and backend
- **Build Tools**: Vite for frontend bundling, ESBuild for backend compilation

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Comprehensive set of accessible UI primitives (@radix-ui/react-*)
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe CSS class management
- **Embla Carousel**: Touch-friendly carousel component

### Backend Infrastructure
- **Express.js**: Web application framework for Node.js
- **Database**: Neon Database (PostgreSQL) with connection pooling
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL session store for user sessions

### Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting utilities

### Development Tools
- **Replit Integration**: Runtime error modal and development banner
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript Configuration**: Strict mode with path mapping and modern ES modules

### External Services Integration
- **Google Fonts**: Inter font family loaded via CDN
- **Replit Development**: Development environment integration with runtime error handling
- **Image Assets**: Stock construction images from Unsplash for portfolio showcase