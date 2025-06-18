# Clyvanta - AI-Powered Business Transformation (DNS UPDATE TEST)

🚀 **Transform your business with cutting-edge AI consulting, custom software development, and intelligent automation solutions.**

🔄 **CI/CD Status**: Fully operational with automated deployments via GitHub Actions!

## 🌟 Overview

Clyvanta is a modern, professional business website showcasing AI-powered transformation services including:

- **AI Consulting** - Strategic implementation roadmaps and custom AI architecture
- **Custom Development** - Full-stack web applications and enterprise software
- **Process Automation** - Intelligent workflow optimization and data pipelines

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4.0 with custom brand system
- **UI Design**: Modern glassmorphism with animations
- **Font**: Inter (Google Fonts)
- **Database**: PostgreSQL with Prisma ORM (planned)
- **Authentication**: Next-Auth v5 (planned)
- **Email**: Resend API (planned)
- **Deployment**: Docker + DigitalOcean
- **CI/CD**: GitHub Actions with webhook deployments

## 🎨 Design System

Modern UI featuring:
- **Glassmorphism**: Backdrop blur effects on cards and navigation
- **Animations**: Floating cards, particle effects, smooth transitions
- **Gradients**: Blue (#00D4FF to #0066FF) and Orange (#FF6B35 to #F7931E)
- **Typography**: Inter font with responsive sizing
- **Components**: Modular architecture with reusable components

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build application
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Docker Deployment

```bash
# Production
docker-compose up -d --build
```

## 📁 Project Structure

```
clyvanta/
├── src/
│   ├── app/              # Next.js 15 App Router pages
│   ├── components/       # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── types/            # TypeScript interfaces
├── docs/                 # Project documentation
├── .github/workflows/    # CI/CD GitHub Actions
├── docker-compose.yml    # Production deployment
├── tailwind.config.ts    # Custom Tailwind configuration
└── CLAUDE.md            # AI assistant context
```

## 🎯 Current Status

✅ **Completed**:
- Modern homepage with glassmorphism design
- Animated hero section with floating cards
- Canvas particle system for visual effects
- Responsive navigation with blur backdrop
- Service cards with gradient hover effects
- Interactive trust indicators
- Gradient CTA section
- Complete component architecture
- TypeScript interfaces and strict mode
- ESLint configuration
- SEO optimization with metadata
- GitHub Actions CI/CD pipeline
- Webhook-based deployment system

🚧 **In Progress**:
- Contact form with lead capture system
- Database setup with PostgreSQL
- Email notification integration

📋 **Next Steps**:
- About page with team information
- Service detail pages
- Admin dashboard for lead management
- Blog/content management system
- Analytics integration
- Performance monitoring

## 🌐 Live Deployment

- **Production**: http://138.197.169.120:8080
- **Webhook API**: http://138.197.169.120:4040

## 🚀 CI/CD Pipeline

The project uses GitHub Actions for continuous deployment:

1. **Push to main** → Triggers workflow
2. **Test** → Run linting and type checking
3. **Security** → Dependency scanning
4. **Build** → Create Docker images
5. **Deploy** → Production deployment via webhooks

Manual deployment:
```bash
# Deploy to production
curl "http://138.197.169.120:4040/deploy?token=clyvanta-deploy-2025"
```

## 🚨 Emergency Recovery

If the website goes down (502 Bad Gateway), follow the [Production Outage Recovery Guide](docs/PRODUCTION_OUTAGE_RECOVERY.md):

1. **Access DigitalOcean Console** (when SSH fails)
2. **Check container status**: `docker ps -a`  
3. **Restart containers**: `docker compose up -d`
4. **Verify recovery**: `curl http://localhost:8080`

**Quick Recovery Commands:**
```bash
su - ubuntu && cd clyvanta-new
docker compose up -d
```

## 📊 Development Roadmap

See [docs/tasks/tasks-clyvanta-website.md](docs/tasks/tasks-clyvanta-website.md) for detailed implementation plan.

## 🎨 Design Features

- **Floating Animation**: Cards that gently float up and down
- **Particle System**: Canvas-based animated background particles
- **Glassmorphism**: Modern blur effects with transparency
- **Gradient Effects**: Smooth color transitions on text and backgrounds
- **Hover States**: Interactive elements with smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints

## 🤝 Contributing

This is a private repository for Clyvanta development. For questions or access, contact the development team.

---

**Built with ❤️ using modern web technologies and AI-assisted development**