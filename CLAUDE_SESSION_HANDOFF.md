# 🚀 Claude Session Handoff Document

**Last Updated:** December 13, 2025  
**Session Type:** Development & Infrastructure Management

## 📋 Quick Start Template

Copy this template for new Claude sessions:

```
## 🚀 Clyvanta Project Handoff - Continue from Session [DATE]

**Quick Context:**
- Clyvanta: Strategic small business tech partner website (Next.js 15, TypeScript, Tailwind)
- Local: Running on port 8080 (no conflicts with Canadian Cash Homes on 3001)
- Admin: Login working with password `clyvanta2025!` (display removed from page)

**Current Status:**
- ✅ **Local Development**: Fixed and running at http://localhost:8080
- ✅ **Admin System**: Login functional, password hidden from UI
- 🟡 **Oracle Migration**: Infrastructure ready, instance creation blocked by Always Free quota
- 🟡 **DigitalOcean**: SSH access via GitHub Actions TaskFlow, production at 192.18.156.63

**Key Files to Reference:**
- `/Users/vicky/Desktop/Vicky/Ventures/clyvanta/CLAUDE.md` - Complete project documentation
- `.github/workflows/ci-cd.yml` - SSH deployment pipeline  
- Admin login: http://localhost:8080/admin/login

**Current Priorities:**
1. [YOUR SPECIFIC TASK HERE]

**Admin Access Available:**
- Oracle Cloud: Full CLI access with networking ready
- GitHub Actions: SSH deployment to production server
- Local Docker: Full container management

Please continue from here and reference the CLAUDE.md file for complete context.
```

## 🎯 Current Project State

### ✅ Completed Recently
- **Admin Login Fixed**: Password authentication working, UI cleaned up
- **Local Environment**: Clyvanta running on port 8080, no conflicts
- **Oracle Infrastructure**: VCN, security lists, networking all configured
- **Unit Tests**: Jest testing framework added for login verification

### 🟡 In Progress
- **Oracle Cloud Migration**: Instance creation blocked by Always Free quota limits
- **Documentation**: Comprehensive CLAUDE.md maintained and updated

### 🔧 Technical Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Node.js API routes, PostgreSQL
- **Infrastructure**: Docker, GitHub Actions CI/CD
- **Cloud**: Oracle Cloud (target), DigitalOcean (current production)

## 🌐 URLs & Access Points

### Local Development
- **Main App**: http://localhost:8080
- **Admin Login**: http://localhost:8080/admin/login
- **Admin Dashboard**: http://localhost:8080/admin
- **Canadian Cash Homes**: http://localhost:3001 (separate project)

### Production (Current)
- **Live Site**: http://192.18.156.63:8080
- **Webhook API**: http://192.18.156.63:4040
- **Admin Panel**: http://192.18.156.63:8080/admin

### Development Commands
```bash
# Start local development
npm run dev                    # Development server (port 3000)
docker-compose up -d          # Full stack with database (port 8080)

# Testing
npm test                      # Run unit tests
npm run lint                  # Code linting
npm run build                 # Production build

# Docker management
docker-compose ps             # Check container status
docker logs clyvanta-website  # Check app logs
docker restart clyvanta-website # Restart app container
```

## 🔐 Credentials & Authentication

### Admin Access
- **Password**: `clyvanta2025!` (not displayed in UI)
- **Rate Limiting**: 5 attempts per 15 minutes
- **Session**: 8-hour duration with secure cookies

### Cloud Access
- **Oracle Cloud**: CLI configured with full admin access
- **GitHub Actions**: SSH deployment via secrets
- **Docker**: Local container management available

## 📁 Critical Files Reference

### Project Documentation
- `CLAUDE.md` - **Master documentation** (most important)
- `CLAUDE_SESSION_HANDOFF.md` - This handoff document
- `README.md` - Project overview and setup instructions

### Configuration Files
- `docker-compose.yml` - Local development stack
- `next.config.js` - Next.js configuration with standalone output
- `package.json` - Dependencies and scripts
- `jest.config.js` - Testing configuration

### Source Code Key Files
- `src/app/admin/login/page.tsx` - Admin login UI (password display removed)
- `src/app/api/admin/login/route.ts` - Login API (simplified auth)
- `src/middleware.ts` - Geo-targeting and admin authentication
- `src/lib/security.ts` - Rate limiting and security utilities

### Deployment & CI/CD
- `.github/workflows/ci-cd.yml` - **TaskFlow SSH deployment pipeline**
- `Dockerfile` - Container build configuration
- `scripts/` - Deployment automation scripts

## 🚨 Known Issues & Solutions

### Common Problems
1. **Rate Limiting**: Admin login blocked after 5 failed attempts
   - **Solution**: Restart container or wait 15 minutes

2. **Port Conflicts**: Clyvanta vs Canadian Cash Homes
   - **Solution**: Clyvanta on 8080, CCH on 3001 (resolved)

3. **Oracle Instance Creation**: Always Free quota blocked
   - **Current**: Terminated instance holding quota
   - **Next**: Wait for quota release or try different region

4. **Docker Build Issues**: Standalone output required
   - **Solution**: Next.js config updated with `output: 'standalone'`

### Emergency Commands
```bash
# Fix rate limiting
docker restart clyvanta-website

# Check services
docker-compose ps
curl http://localhost:8080/admin/login

# Oracle Cloud check
oci compute instance list --all

# Production deployment trigger
# (via GitHub Actions webhook or SSH)
```

## 🎯 Next Session Priorities

Update this section based on current needs:

### High Priority
- [ ] Complete Oracle Cloud instance creation
- [ ] Migrate DNS from DigitalOcean to Oracle
- [ ] Test full deployment pipeline

### Medium Priority
- [ ] Add proper bcrypt password hashing
- [ ] Implement email notifications
- [ ] Add loading states and error boundaries

### Low Priority
- [ ] Mobile navigation improvements
- [ ] Image optimization
- [ ] Analytics integration

## 📝 Session Notes Template

Use this for tracking progress within sessions:

```markdown
## Session [DATE] - [MAIN TASK]

### Completed
- [ ] Task 1
- [ ] Task 2

### Issues Encountered
- Issue description and resolution

### Next Steps
- [ ] Immediate next action
- [ ] Follow-up tasks

### Code Changes
- Files modified: list here
- Key updates: brief description
```

---

## 🚀 Quick Restart Commands

If starting fresh or troubleshooting:

```bash
# Full restart sequence
docker-compose down
docker-compose up -d --build
sleep 10
curl http://localhost:8080

# Check everything is working
docker-compose ps
curl http://localhost:8080/admin/login
```

## 🎯 Contact & Context

- **Project Owner**: Vicky
- **Current Focus**: Oracle Cloud migration to save $72/year
- **Business Context**: Small business technology partner website
- **Geographic Focus**: Toronto-based with Canadian reach

---

**Usage:** Reference this document at the start of every session. Update the "Next Session Priorities" and "Session Notes" as needed. Always check CLAUDE.md for the most comprehensive project documentation.