# 🚀 Clyvanta Deployment Safety Checklist

## Before ANY Production Deployment

### **Automated Checks** ✅
Run the pre-deployment script:
```bash
./scripts/pre-deploy-check.sh
```

**All automated checks MUST pass before proceeding.**

### **Manual Testing Checklist** ✅

#### **Desktop Testing**
- [ ] Homepage loads completely
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] All CTA buttons work
- [ ] No JavaScript errors in console
- [ ] No 404 errors in Network tab

#### **Mobile Testing** (CRITICAL - this is what broke before)
- [ ] Open http://localhost:8080 in browser
- [ ] Switch to mobile view (CMD+SHIFT+M in Chrome)
- [ ] Test iPhone 12 Pro viewport (390x844)
- [ ] **Hero button does NOT overflow screen**
- [ ] **Button text is readable and fits properly**
- [ ] All mobile navigation works
- [ ] Contact form works on mobile

#### **Cross-Browser Testing**
- [ ] Test in Chrome
- [ ] Test in Safari  
- [ ] Test in Firefox (if available)

#### **Performance Check**
- [ ] Page loads in under 3 seconds
- [ ] No layout shift (CLS) issues
- [ ] Images load properly

### **Deployment Decision** 🎯

**GREEN LIGHT** ✅ - Safe to Deploy:
- All automated checks pass
- All manual tests pass
- Mobile responsiveness confirmed
- No console errors

**RED LIGHT** ❌ - DO NOT Deploy:
- Any automated check fails
- Mobile button overflows
- JavaScript errors present
- Performance issues detected

### **Post-Deployment Verification** 🔍

After deployment, immediately check:
1. https://clyvanta.com loads (200 status)
2. Mobile view works on live site
3. Contact form submits successfully
4. No browser console errors

**If ANY issue detected, immediately run emergency recovery:**
```bash
ssh -i ~/.ssh/clyvanta_deploy_new ubuntu@138.197.169.120 "cd clyvanta-new && docker compose up -d"
```

## Emergency Contacts & Recovery

**Claude SSH Access**: `ssh -i ~/.ssh/clyvanta_deploy_new ubuntu@138.197.169.120`

**Recovery Commands**:
```bash
# Restart containers
cd clyvanta-new && docker compose up -d

# Check status  
curl http://localhost:8080
curl https://clyvanta.com
```

**GitHub Actions**: Cancel any failed deployments immediately in GitHub Actions tab

---

**Remember**: Better to delay deployment than break production. When in doubt, don't deploy.