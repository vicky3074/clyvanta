#!/bin/bash

# Clyvanta Pre-Deployment Validation Script
# Run this before any production deployment

echo "🔍 Starting Clyvanta Pre-Deployment Validation..."
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track if any checks fail
FAILED=0

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        FAILED=1
    fi
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

echo ""
echo "1️⃣  TypeScript Validation"
echo "------------------------"
npx tsc --noEmit
print_status $? "TypeScript type checking"

echo ""
echo "2️⃣  Code Quality Check"
echo "---------------------"
npm run lint
print_status $? "ESLint validation"

echo ""
echo "3️⃣  Production Build Test"
echo "------------------------"
npm run build
print_status $? "Next.js production build"

echo ""
echo "4️⃣  Docker Container Test"
echo "-------------------------"
echo "Building and starting Docker containers..."
docker compose down -q 2>/dev/null
docker compose up -d --build
if [ $? -eq 0 ]; then
    echo "Waiting for containers to start..."
    sleep 10
    
    # Test if site responds
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080)
    if [ "$HTTP_CODE" = "200" ]; then
        print_status 0 "Docker containers running and site responding"
    else
        print_status 1 "Docker site not responding (HTTP $HTTP_CODE)"
    fi
else
    print_status 1 "Docker build/start failed"
fi

echo ""
echo "5️⃣  Mobile Responsiveness Check"
echo "------------------------------"
print_warning "Manual check required:"
print_warning "→ Open http://localhost:8080 in browser"
print_warning "→ Test mobile view (CMD+SHIFT+M in Chrome)"
print_warning "→ Check button doesn't overflow screen"
print_warning "→ Test all CTA buttons work"

echo ""
echo "6️⃣  Console Error Check"
echo "-----------------------"
print_warning "Manual check required:"
print_warning "→ Open browser DevTools (F12)"
print_warning "→ Check Console tab for errors"
print_warning "→ Check Network tab for failed requests"

echo ""
echo "================================================"
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL AUTOMATED CHECKS PASSED!${NC}"
    echo ""
    echo "Manual checks remaining:"
    echo "1. Mobile responsiveness test"
    echo "2. Browser console error check"
    echo "3. Full user journey test"
    echo ""
    echo -e "${GREEN}✅ Ready for deployment consideration${NC}"
else
    echo -e "${RED}💥 DEPLOYMENT BLOCKED - FIX ERRORS ABOVE${NC}"
    echo ""
    echo "Do not deploy until all issues are resolved."
fi

echo ""
echo "Docker containers are running at: http://localhost:8080"
echo "Run 'docker compose down' to stop containers when done testing."