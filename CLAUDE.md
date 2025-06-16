# Clyvanta Project - Claude Desktop Instructions

## Project Overview
Clyvanta is a strategic small business technology partner website built with Next.js 15, TypeScript, and Tailwind CSS. The site targets small business owners (1-50 employees) with practical technology solutions and features geo-targeting for Toronto-based visitors. It includes a complete CI/CD pipeline using GitHub Actions and webhook-based deployment to DigitalOcean.

## 🎯 Strategic Positioning (January 2025)
- **Target Audience**: Small business owners with 1-50 employees
- **Value Proposition**: "Great Ideas Deserve Great Technology"
- **Geographic Focus**: Toronto-based with national Canadian reach
- **Differentiator**: Use cases over case studies, transparent pricing, local partnerships

## 🎯 Current Status & Issues to Address

### ✅ Completed - Core Infrastructure
- Next.js 15 setup with TypeScript and Tailwind CSS
- Complete Clyvanta branding and design system
- Modern glassmorphism UI with animations
- Component-based architecture
- Docker deployment configuration
- GitHub Actions CI/CD pipeline (TaskFlow pattern)
- Webhook-based deployment system
- Production deployment on DigitalOcean
- TypeScript strict mode and ESLint configuration
- Performance optimizations and accessibility
- Tailwind CSS v4 migration and compatibility fixes
- Admin panel with secure authentication and form submissions
- File-based storage fallback system

### ✅ Completed - Strategic Transformation (January 2025)
- **Strategic Repositioning**: From AI company to small business technology partner
- **New Homepage**: "Great Ideas Deserve Great Technology" with strategic messaging
- **Geo-targeting System**: Toronto-specific content via middleware and GeoText component
- **Solutions in Action Page**: Use cases replacing traditional case studies
- **Service Detail Pages**: Web development, app development, AI automation
- **Updated Navigation**: "Our Solutions" and "Solutions in Action" structure
- **About Page Overhaul**: "Why We Started Clyvanta" strategic narrative
- **Enhanced Contact Page**: Geo-targeted content and improved UX
- **Use Cases Data**: 3 detailed hypothetical examples with metrics and ROI
- **Icon System Migration**: Inline SVGs replacing Heroicons for compatibility

### 🚨 CRITICAL: Localhost Development Issues & Solutions

**PROBLEM:** The localhost development server frequently refuses connections with error "This site can't be reached localhost refused to connect"

**ROOT CAUSE:** Next.js 15 Turbopack compatibility issues with the local network stack

**SOLUTION THAT WORKS:**
1. **Remove Turbopack flag** from package.json dev script
   - BEFORE: `"dev": "next dev --turbopack"`
   - AFTER: `"dev": "next dev"`

2. **Complete restart process:**
   ```bash
   # Kill all Node.js processes
   pkill -f node
   
   # Kill anything on port 3000
   lsof -ti:3000 | xargs kill -9
   
   # Clear Next.js cache
   rm -rf .next
   
   # Reinstall dependencies (if needed)
   rm -rf node_modules package-lock.json
   npm install
   
   # Start development server
   npm run dev
   ```

3. **If still not working:**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Kill specific processes
   sudo lsof -t -i tcp:3000 | xargs kill -9
   
   # Try different port
   npm run dev -- -p 3001
   ```

**TROUBLESHOOTING CHECKLIST:**
- [ ] Remove `--turbopack` flag from dev script
- [ ] Kill all node processes: `pkill -f node`
- [ ] Clear port 3000: `lsof -ti:3000 | xargs kill -9`
- [ ] Delete .next cache: `rm -rf .next`
- [ ] Restart development server: `npm run dev`
- [ ] If persistent, try different port: `npm run dev -- -p 3001`

**IMPORTANT NOTES:**
- Turbopack in Next.js 15 has networking issues on macOS
- Always test localhost after any Next.js configuration changes
- Document any new localhost issues immediately in this file
- The solution typically requires removing Turbopack entirely

### 🐛 Known Issues to Fix
1. **Favicon conflicts**: Multiple favicon.ico errors in logs
2. **Viewport metadata warnings**: Next.js 15 viewport configuration
3. **Mobile Navigation**: Need to complete mobile menu functionality
4. **Form Validation**: Add proper form validation for contact form
5. **Loading States**: Add skeleton loaders for better UX
6. **Error Boundaries**: Implement error handling
7. **Image Optimization**: Replace emoji icons with proper SVGs/images

### 📋 Pending Tasks
- Set up PostgreSQL database with Docker (Task 1.3)
- Add service detail pages (individual service pages)
- Implement email notification system
- Add analytics integration

## 🌐 Live URLs
- **Production**: http://159.203.61.237:8080
- **Webhook API**: http://159.203.61.237:4040

## 🛠️ Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Deployment**: Docker + DigitalOcean
- **CI/CD**: GitHub Actions (TaskFlow pattern)

## 📁 Key Files & Structure

### Core Application
- `src/app/page.tsx` - Strategic homepage with "Great Ideas Deserve Great Technology"
- `src/app/layout.tsx` - Root layout with updated metadata and viewport
- `src/app/globals.css` - Global styles and Tailwind
- `tailwind.config.ts` - Clyvanta brand configuration
- `src/app/solutions-in-action/page.tsx` - Use cases showcase page
- `src/app/about/page.tsx` - "Why We Started Clyvanta" strategic narrative
- `src/app/contact/page.tsx` - Enhanced contact page with geo-targeting
- `src/app/admin/page.tsx` - Admin dashboard for form submissions
- `src/app/admin/login/page.tsx` - Admin login with authentication

### Strategic Components (January 2025)
- `src/components/GeoText.tsx` - Geo-targeting component for Toronto/Canada content
- `src/lib/useCasesData.ts` - Use cases data structure with 3 detailed examples
- `src/app/solutions/web-development/page.tsx` - Web development service details
- `src/app/solutions/app-development/page.tsx` - App development service details  
- `src/app/solutions/ai-automation/page.tsx` - AI automation service details
- `src/middleware.ts` - Updated with geo-targeting logic

### Updated Components
- `src/components/HeroSection.tsx` - "Great Ideas Deserve Great Technology" messaging
- `src/components/Navigation.tsx` - "Our Solutions" and "Solutions in Action" structure
- `src/components/ContactSection.tsx` - Toronto contact details (+1 647 936 5467)

### Deployment & CI/CD
- `.github/workflows/ci-cd.yml` - GitHub Actions workflow
- `Dockerfile` - Application container
- `docker-compose.yml` - Production deployment
- `deploy-webhook.js` - Webhook deployment server
- `scripts/deploy.sh` - Deployment automation

### Documentation
- `README.md` - Project overview and setup
- `docs/Clyvanta-Website-PRD.md` - Product requirements
- `docs/tasks/tasks-clyvanta-website.md` - Detailed task list
- `STRATEGIC_TRANSFORMATION_2025.md` - Complete transformation documentation
- `AI Coding/Learning.md` - Technical lessons learned from this project
  - Heroicons v2 compatibility issues with Next.js 15
  - Geo-targeting implementation with middleware
  - SSH deployment API endpoint confusion (HCP Vault vs HCP Vault Secrets)
  - JSON parsing for multi-line SSH keys
  - Individual step debugging for CI/CD processes

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run development server (NO TURBOPACK!)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Docker production
docker-compose up -d --build
```

## 🚀 Deployment Process

### Automatic (via GitHub Actions) - Enhanced Reliability
1. Push to `main` branch triggers CI/CD
2. Workflow runs: test → security → build → deploy
3. **Dual deployment strategy** for maximum reliability:
   - **Primary:** Webhook deployment (fast, preferred)
   - **Fallback:** SSH deployment (reliable backup)
4. Production environment updated automatically

### Deployment Strategies

#### **Primary: Webhook Deployment**
- Fast deployment via HTTP webhook
- Health check validation before deployment
- Automatic service monitoring
```bash
curl "http://159.203.61.237:4040/deploy?token=clyvanta-deploy-2025"
```

#### **Fallback: SSH Deployment** 
- Direct server access via SSH
- Full container rebuild process
- Webhook service restoration
- Used automatically when webhook fails

### Manual Deployment Options
```bash
# Health check first
curl "http://159.203.61.237:4040/health"

# Deploy via webhook (if healthy)
curl "http://159.203.61.237:4040/deploy?token=clyvanta-deploy-2025"

# Cleanup backups if needed
curl "http://159.203.61.237:4040/cleanup?token=clyvanta-deploy-2025"
```

## 📊 GitHub Actions Workflow
Enhanced deployment pipeline with high reliability:
- **Dual deployment strategy**: Webhook + SSH fallback
- **Multi-stage validation**: test → security → build → deploy
- **Health check validation**: Pre-deployment service verification
- **Automatic failover**: SSH deployment if webhook fails
- **Enhanced monitoring**: Service health and deployment verification
- **No manual approval**: Fully automated with robust error handling

## 🎨 Brand System
Clyvanta brand colors and styling in `tailwind.config.ts`:
- Primary: Blue gradient (#3B82F6 to #1E40AF)
- Secondary: Orange gradient (#F97316 to #EA580C)
- Typography: Inter font with custom sizing
- Components: Custom button styles and animations

## 🏢 Business Information (Strategic Update January 2025)
- **Location**: Toronto, ON (strong local presence)
- **Phone**: +1 647 936 5467
- **Timezone**: EST 
- **Target Market**: Small businesses with 1-50 employees (GTA focus, national reach)
- **Positioning**: Technology partner, not vendor
- **Services**: Web development, app development, AI automation
- **Unique Value**: Use cases over case studies, transparent pricing, local partnerships


## 🔐 Admin System
- **Login**: `/admin/login`
- **Dashboard**: `/admin`
- **Password**: clyvanta2025! (bcrypt hashed)
- **Security**: Rate limiting (5 attempts per 15 minutes)
- **Storage**: File-based fallback system
- **Features**: Lead management, status tracking, real-time updates

## 💡 Next Steps for Improvement
1. **Performance Optimization**: Image optimization, lazy loading
2. **User Experience**: Smooth animations, better mobile UX
3. **Content Management**: Dynamic content system
4. **Analytics**: User behavior tracking
5. **SEO Enhancement**: Better meta tags and structured data

## 🔍 Common Issues & Solutions

### SSH Deployment & Vault Integration
**CRITICAL LESSON:** Always verify correct API service when integrating with cloud providers

**Problem**: GitHub Actions SSH deployment fails with "Method Not Allowed" despite working local authentication
**Root Cause**: Using wrong service APIs - HCP Vault (dynamic secrets) vs HCP Vault Secrets (static secrets)
**Solution**: 
```yaml
# CORRECT - HCP Vault Secrets API (static secrets)
AUTH: "https://auth.idp.hashicorp.com/oauth2/token"
SECRETS: "https://api.cloud.hashicorp.com/secrets/2023-11-28/organizations/.../ssh_key:open"
```

**JSON Parsing for Multi-line Secrets**:
```python
# SSH keys break standard JSON tools - use Python
import json
ssh_key = data['secret']['static_version']['value']
ssh_key = ssh_key.replace('\\\\n', '\n')  # Handle API escaping
```

**Individual Step Debugging Strategy**:
- Break complex CI/CD into individual, testable steps
- Use `continue-on-error: true` for precise failure identification
- Implement comprehensive logging at each step

### Development - LOCALHOST CONNECTION ISSUES
**MOST COMMON PROBLEM:** "This site can't be reached localhost refused to connect"

**IMMEDIATE SOLUTION:**
1. Edit `package.json` and remove `--turbopack`:
   ```json
   "scripts": {
     "dev": "next dev"
   }
   ```
2. Kill all processes and restart:
   ```bash
   pkill -f node
   lsof -ti:3000 | xargs kill -9
   rm -rf .next
   npm run dev
   ```

**OTHER DEVELOPMENT ISSUES:**
- **Hot reload not working**: Restart dev server
- **TypeScript errors**: Check `tsconfig.json` and run `npx tsc --noEmit`
- **Tailwind not applying**: Restart dev server and check config

### Deployment
- **Docker build fails**: Check Node.js version compatibility
- **Webhook not responding**: Verify server status and tokens
- **GitHub Actions failing**: Check secrets and webhook endpoints


---

## 📝 Claude Desktop Prompt

Use this codebase to continue improving the Clyvanta website. Current state:
- Modern glassmorphism design with animations is implemented
- Component architecture is in place
- CI/CD pipeline is working
- Comprehensive services page with all details
- Admin panel with secure authentication
- File-based storage fallback system

**CRITICAL:** Always check localhost connectivity issues first. If "localhost refused to connect", immediately remove Turbopack flag and restart development server.

Next priorities:
1. Fix CI/CD deployment pipeline issues
2. Fix favicon conflicts and viewport warnings  
3. Complete mobile navigation menu
4. Add loading states and error boundaries
5. Implement email notifications

The project has a working CI/CD pipeline - any changes you commit will automatically deploy to the production environment.

---

## 📝 Strategic Transformation Summary (January 2025)

### Key Changes Made
1. **Repositioned** from AI company to small business technology partner
2. **Implemented** geo-targeting for Toronto vs. Canada messaging
3. **Created** "Solutions in Action" page with hypothetical use cases
4. **Updated** all messaging to focus on small business needs (1-50 employees)
5. **Built** individual service detail pages for web/app/AI services
6. **Redesigned** About page with "Why We Started Clyvanta" narrative
7. **Enhanced** contact page with geo-targeted content and better UX

### New Site Structure
```
Homepage: "Great Ideas Deserve Great Technology"
├── Our Solutions (service overview)
├── Solutions in Action (use cases)
│   ├── E-commerce Retailer Case
│   ├── Home Services Business Case
│   └── FinTech Startup Case
├── Individual Service Pages
│   ├── /solutions/web-development
│   ├── /solutions/app-development
│   └── /solutions/ai-automation
├── About Us ("Why We Started Clyvanta")
└── Contact (geo-targeted content)
```

### Geo-Targeting Implementation
- **Toronto Visitors**: Local business focus, coffee meetings, GTA references
- **Other Visitors**: Canadian business focus, remote collaboration

For detailed documentation of all changes, see: `STRATEGIC_TRANSFORMATION_2025.md`