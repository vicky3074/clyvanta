# Changelog

All notable changes to the Clyvanta website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Todo
- Complete mobile navigation menu functionality
- Create contact form with PostgreSQL integration
- Add about page
- Add service detail pages
- Implement email notifications with Resend
- Add loading states and skeleton loaders
- Implement error boundaries

## [1.2.0] - 2025-01-08

### Fixed
- Tailwind CSS v4 compatibility issues
- Backdrop blur effects now work with proper webkit prefixes
- Updated all component classes to v4 syntax (backdrop-blur-[12px], shadow-[...], etc.)
- Fixed gradient rendering issues
- Added proper postcss.config.js for v4
- Updated globals.css with @theme directive for v4
- Fixed arbitrary value classes (w-[24rem] instead of w-75)
- Added animation definitions for float, pulse, and spin

### Changed
- Migrated from Tailwind v3 to v4 syntax
- Updated all shadow utilities to use explicit values
- Replaced named blur utilities with pixel values
- Updated border radius to use rem values

## [1.1.0] - 2025-01-07

### Added
- Modern glassmorphism UI design with backdrop blur effects
- Component-based architecture for better maintainability
- Animated hero section with floating cards
- Canvas-based particle system for visual effects
- Gradient hover effects on service cards
- Interactive trust indicators section
- Smooth animations (float, pulse, fade-in, slide-up)
- TypeScript interfaces and strict type checking
- ESLint configuration for code quality
- Performance monitoring component
- Accessibility improvements (ARIA labels, keyboard navigation)

### Changed
- Complete redesign from basic layout to modern UI
- Migrated from single-file to component architecture
- Updated navigation with blur backdrop effect
- Enhanced typography using Inter font
- Improved color gradients and shadows
- Better responsive breakpoints

### Fixed
- Mobile responsive issues
- Typography hierarchy
- Component separation for better code organization
- Build optimization

## [1.0.0] - 2025-01-06

### Added
- Initial Next.js 15 setup with TypeScript
- Tailwind CSS 4.0 with Clyvanta brand system
- Basic homepage with hero and services sections
- Docker deployment configuration
- GitHub Actions CI/CD pipeline
- Webhook-based deployment system
- SEO metadata optimization
- Basic responsive design

### Infrastructure
- DigitalOcean deployment setup
- Production URL: http://138.197.169.120:8080
- Staging URL: http://138.197.169.120:8081
- Webhook API: http://138.197.169.120:4040
