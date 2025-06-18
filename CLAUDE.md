# Clyvanta Project - Claude Desktop Instructions

## Project Overview
Clyvanta is a strategic small business technology partner website built with Next.js 15, TypeScript, and Tailwind CSS. The site targets small business owners (1-50 employees) with practical technology solutions and features geo-targeting for Toronto-based visitors.

## 🚨 CRITICAL INFRASTRUCTURE SETUP (June 18, 2025)

### **Environment Architecture**
- **Local Staging**: http://localhost:8080 (Docker - EXACT production replica)
- **Production**: https://clyvanta.com (DigitalOcean server: 138.197.169.120)
- **Git**: GitHub repository with automated CI/CD (DISABLED for stability)

### **SSH Access Configuration**
```bash
# Claude has SSH access with this key:
ssh -i ~/.ssh/clyvanta_deploy_new ubuntu@138.197.169.120

# NEVER ask user to manually SSH - Claude can do it directly
```

### **🚨 EMERGENCY PRODUCTION RECOVERY**
When production site goes down (502 Bad Gateway, containers stopped):

```bash
# 1. SSH into production server (Claude can do this directly)
ssh -i ~/.ssh/clyvanta_deploy_new ubuntu@138.197.169.120

# 2. Navigate to project directory
cd clyvanta-new

# 3. Check container status
docker ps -a

# 4. Restart containers with last working images
docker compose up -d

# 5. Verify site is responding
curl http://localhost:8080

# 6. Check external access
curl https://clyvanta.com
```

### **🔧 LOCAL DEVELOPMENT WORKFLOW**

**NEVER delete local Docker setup** - it's the production replica:

```bash
# Start local staging (matches production exactly)
docker compose up -d --build
# Access: http://localhost:8080

# Stop local staging  
docker compose down

# View logs
docker logs clyvanta-website
docker logs clyvanta-nginx

# Reset local to match production
git reset --hard [production-commit]
docker compose up -d --build
```

### **⚠️ DEPLOYMENT POLICY**

**CURRENT STATUS**: Automated deployments DISABLED for stability

```bash
# DO NOT push to main branch - it will trigger failed deployments
# All development stays local until user explicitly requests deployment

# Safe development:
git checkout -b feature/your-changes  # Work on feature branch
# Test locally with: docker compose up -d --build
# DO NOT merge to main without user approval
```

### **🏗️ Simple 2-Environment Setup**

**Local Staging (Port 8080)**:
- Exact production replica
- Docker containers: nginx + Next.js + postgres  
- Safe testing environment
- Command: `docker compose up -d --build`

**Production (https://clyvanta.com)**:
- DigitalOcean server: 138.197.169.120
- Same Docker setup as local
- Stable, working deployment
- SSH access: `ssh -i ~/.ssh/clyvanta_deploy_new ubuntu@138.197.169.120`

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

### 🚨 CRITICAL: Production Outage Recovery (June 16, 2025)

**INCIDENT:** Website went down with 502 Bad Gateway after failed deployment attempts

**ROOT CAUSE:** 
- Failed/cancelled deployments stopped Docker containers
- SSH connectivity issues on DigitalOcean server prevented automated deployments
- Containers never restarted automatically, leaving site down

**EMERGENCY RECOVERY PROCEDURE:**
1. **Access DigitalOcean Console** (bypasses SSH issues)
   - Login to https://cloud.digitalocean.com
   - Find droplet with IP 138.197.169.120
   - Click "Console" to access server directly

2. **Check Container Status**
   ```bash
   su - ubuntu
   cd clyvanta-new
   docker ps -a  # Check if containers are running
   ```

3. **Restart Containers** (if down)
   ```bash
   docker compose up -d  # Start with existing images (fast)
   # OR if needed:
   docker compose up -d --build  # Rebuild and start (slow)
   ```

4. **Verify Recovery**
   ```bash
   curl http://localhost:8080  # Should return HTML
   ```

**PREVENTION:** 
- SSH connectivity issues need separate investigation
- Consider automated container health monitoring
- Document this procedure for future outages

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
- **Production**: http://138.197.169.120:8080
- **Webhook API**: http://138.197.169.120:4040

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
# Local staging (production replica)
docker compose up -d --build     # Start local staging
docker compose down              # Stop local staging  
curl http://localhost:8080       # Test local staging

# Code quality
npm run build                    # Test build
npm run lint                     # Check linting
npx tsc --noEmit                # Check TypeScript

# Git workflow (feature branches only)
git checkout -b feature/name     # Create feature branch
git add . && git commit -m "..."  # Commit changes
# Test with docker compose up -d --build
# DO NOT push to main without user approval
```

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

## 🚨 Common Issues & Solutions

### **Production Site Down (502 Bad Gateway)**
```bash
# Claude has direct SSH access - use immediately:
ssh -i ~/.ssh/clyvanta_deploy_new ubuntu@138.197.169.120 "cd clyvanta-new && docker compose up -d"
```

### **Local Docker Issues**
```bash
# Container build fails:
docker compose down && docker compose up -d --build

# Port conflicts:
docker compose down && docker system prune -f

# Reset to production state:
git reset --hard [production-commit] && docker compose up -d --build
```

### **Development Issues** 
- **TypeScript errors**: Run `npx tsc --noEmit`
- **Tailwind not applying**: Restart docker containers
- **Docker build fails**: Check Node.js version compatibility

---

## 📝 Current Status & Next Steps

**✅ COMPLETED:**
- Production-identical local staging environment  
- Stable production deployment
- Git repository synchronized with production
- Emergency recovery procedures documented

**🎯 DEVELOPMENT PRIORITIES:**
1. Work on feature branches only (`git checkout -b feature/name`)
2. Test all changes locally with `docker compose up -d --build`  
3. No deployments without explicit user approval
4. Focus on mobile responsiveness and GA4 implementation (when ready)

**💡 STRATEGIC POSITION:**
Small business technology partner serving 1-50 employee companies in Toronto/Canada with "Great Ideas Deserve Great Technology" messaging.