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
echo "5️⃣  Automated Mobile Responsiveness Tests"
echo "----------------------------------------"
echo "Running mobile button overflow tests..."
npm run test:mobile --silent
print_status $? "Mobile responsiveness automated tests"

echo ""
echo "6️⃣  Automated Functional Tests"
echo "------------------------------"
echo "Running full functional test suite..."
npm run test:functional --silent
print_status $? "Functional automated tests"

echo ""
echo "================================================"
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL AUTOMATED CHECKS PASSED!${NC}"
    echo ""
    echo -e "${GREEN}✅ Deployment Safety Verification Complete:${NC}"
    echo "  ✅ TypeScript compilation successful"
    echo "  ✅ Code quality standards met"
    echo "  ✅ Production build working"
    echo "  ✅ Docker containers healthy"
    echo "  ✅ Mobile button overflow prevented"
    echo "  ✅ Functional tests passing"
    echo ""
    echo -e "${GREEN}🚀 READY FOR DEPLOYMENT${NC}"
else
    echo -e "${RED}💥 DEPLOYMENT BLOCKED - CRITICAL ISSUES DETECTED${NC}"
    echo ""
    echo -e "${RED}Issues must be resolved before deployment:${NC}"
    echo "- Fix all failed checks above"
    echo "- Re-run this script until all tests pass"
    echo "- Mobile button overflow protection active"
    echo ""
    echo -e "${RED}DO NOT DEPLOY WITH FAILING TESTS${NC}"
fi

echo ""
echo "Docker containers running at: http://localhost:8080"
echo "View test reports: npx playwright show-report"
echo "Stop containers: docker compose down"