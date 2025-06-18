# Clyvanta Tech Consulting Website - Product Requirements Document

## 1. Overview

### Product Name
Clyvanta - Tech Consulting Website & Lead Generation Platform

### Product Vision
Create a professional, high-converting website for Clyvanta, a Toronto-based tech consulting firm that transforms complex business challenges into clear technological solutions for SMBs and startups.

### Success Metrics
- Generate 25+ qualified leads per month
- Achieve 5% visitor-to-lead conversion rate
- Book 5+ consultations per month
- Load time under 3 seconds
- Mobile-responsive design (100% mobile compatibility)

## 2. Target Users

### Primary Users
- **SMB Decision Makers**: Age 35-55, Toronto/GTA business owners, 25-250 employees, $1M-50M revenue
- **Startup Founders**: Age 25-40, tech-savvy entrepreneurs, pre-seed to Series A stage

### Admin Users
- **Clyvanta Team**: Access to lead management dashboard, analytics, and content management

## 3. Core Features

### 3.1 Homepage
- **Hero Section**: Clear value proposition with primary CTA
- **Services Overview**: Three main services (App Dev, Web Dev, Digital Marketing)
- **Social Proof**: Client testimonials and success metrics
- **Trust Indicators**: Toronto local focus, tech expertise badges
- **Secondary CTA**: Contact form access

### 3.2 Contact & Lead Capture System
- **Multi-step Contact Form**: 
  - Step 1: Contact information (name, email, phone, company)
  - Step 2: Project details (service interest, budget range, timeline)
  - Step 3: Requirements (project description, specific needs)
- **Lead Scoring Algorithm**: Automatic scoring based on budget, timeline, and service fit
- **Email Notifications**: 
  - Client confirmation email with next steps
  - Admin notification with lead details and score

### 3.3 Service Pages
- **App Development**: Mobile app development services, technologies, pricing ranges
- **Web Development**: Website and web application development, portfolio examples
- **Digital Marketing**: SEO, PPC, social media marketing services

### 3.4 About Page
- **Company Story**: Brand philosophy, "CLY + VANTA" meaning
- **Team Section**: Professional profiles and expertise
- **Location Focus**: Toronto tech ecosystem emphasis
- **Values & Mission**: Clear competitive advantage messaging

### 3.5 Admin Dashboard
- **Lead Management**: View, filter, and manage incoming leads
- **Lead Details**: Comprehensive lead information with scoring
- **Analytics**: Basic conversion metrics and source tracking
- **Export Functionality**: CSV export for CRM integration

## 4. Technical Requirements

### 4.1 Technology Stack
- **Frontend Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Database**: PostgreSQL 16 with Prisma ORM
- **Authentication**: Next-Auth v5 (for admin access)
- **Email Service**: Resend API
- **Analytics**: PostHog + Vercel Analytics

### 4.2 Performance Requirements
- **Load Time**: < 3 seconds on 3G connection
- **Mobile First**: Responsive design for all devices
- **SEO Optimized**: Meta tags, structured data, fast loading
- **Accessibility**: WCAG 2.1 AA compliance

### 4.3 Infrastructure
- **Hosting**: DigitalOcean droplet (138.197.169.120)
- **Containerization**: Docker
- **Environments**: Production (port 5000), Development (port 5001)
- **CI/CD**: GitHub Actions with HCP Vault secrets
- **Monitoring**: Health checks and error tracking

## 5. Design Requirements

### 5.1 Brand Integration
- **Colors**: 
  - Primary Blue Light: #00D4FF
  - Primary Blue Dark: #0066FF
  - Orange Light: #FF6B35
  - Orange Dark: #F7931E
- **Typography**: Arial/Helvetica system fonts
- **Logo**: Use existing Clyvanta logo package (520+ variations)

### 5.2 UI/UX Principles
- **Professional Appearance**: Clean, modern design
- **Trust Building**: Clear pricing, transparent process
- **Local Focus**: Toronto/GTA emphasis throughout
- **Clear CTAs**: Obvious paths to contact and conversion

## 6. Content Requirements

### 6.1 Key Messaging
- **Value Proposition**: "We transform complex challenges into clear opportunities"
- **Differentiation**: Local Toronto focus, transparent pricing, proven process
- **Services Focus**: App development, web development, digital marketing
- **Target Market**: SMBs and startups in Toronto tech ecosystem

### 6.2 SEO Keywords
- Primary: "app development toronto", "web development toronto", "digital marketing toronto"
- Secondary: "tech consulting toronto", "mobile app development GTA"
- Long-tail: "toronto startup app development", "small business web development"

## 7. User Flows

### 7.1 Lead Generation Flow
1. User lands on homepage
2. Views services and value proposition
3. Clicks contact CTA
4. Completes 3-step form
5. Receives confirmation email
6. Admin receives lead notification with score

### 7.2 Admin Flow
1. Admin logs into dashboard
2. Views new leads with scores
3. Clicks lead for detailed view
4. Takes notes and updates status
5. Exports leads for CRM

## 8. Success Criteria

### 8.1 Launch Criteria
- All core pages functional
- Contact form working with email notifications
- Admin dashboard operational
- Mobile responsive design
- Performance targets met

### 8.2 Business Goals
- Generate qualified leads within 48 hours of launch
- Achieve target conversion rates within 30 days
- Support business growth to 50+ monthly leads

## 9. Timeline

### Phase 1: Foundation (Week 1)
- Development environment setup
- Core application structure
- Database and authentication
- Basic homepage

### Phase 2: Core Features (Week 2)
- Contact form and lead capture
- Admin dashboard
- Service pages
- Email notifications

### Phase 3: Polish & Launch (Week 3)
- Design refinement
- Performance optimization
- Content integration
- Testing and deployment

## 10. Assumptions & Constraints

### Assumptions
- Users prefer local Toronto tech partners
- Multi-step forms increase lead quality
- Mobile-first approach is essential
- Clear pricing increases conversions

### Constraints
- Single developer (initially)
- Limited budget for external services
- Must integrate with existing brand assets
- Timeline pressure for quick launch

## 11. Future Enhancements

### Phase 2 Features
- Blog/content management system
- Interactive tools (ROI calculator, project estimator)
- Client portal for project tracking
- Advanced analytics and reporting
- Integration with CRM systems

This PRD provides a comprehensive blueprint for building the Clyvanta website with clear scope, technical requirements, and success metrics.