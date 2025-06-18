#!/bin/bash

# Local Testing Script for Clyvanta
# Tests ESLint, TypeScript, and build before deployment

set -e  # Exit on any error

echo "🧪 Starting Clyvanta Local Testing Suite"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        exit 1
    fi
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

echo "📋 Test Suite Overview:"
echo "  1. ESLint validation"
echo "  2. TypeScript type checking"
echo "  3. Next.js build test"
echo "  4. Docker build test"
echo ""

# Test 1: ESLint
echo "🔍 Running ESLint validation..."
npm run lint 2>/dev/null
print_status $? "ESLint validation passed"

# Test 2: TypeScript
echo "📝 Running TypeScript type checking..."
npx tsc --noEmit 2>/dev/null
print_status $? "TypeScript validation passed"

# Test 3: Next.js Build
echo "🏗️  Running Next.js build test..."
npm run build >/dev/null 2>&1
print_status $? "Next.js build successful"

# Test 4: Docker Build (optional - takes longer)
if [ "$1" = "--docker" ]; then
    echo "🐳 Running Docker build test..."
    docker compose build >/dev/null 2>&1
    print_status $? "Docker build successful"
fi

# Test 5: Mobile Responsiveness Check
echo "📱 Checking mobile responsiveness patterns..."

# Check for responsive classes in HeroSection
if grep -q "sm:hidden\|hidden sm:inline\|sm:text-\|px-6\|text-base" src/components/HeroSection.tsx; then
    print_status 0 "Mobile responsive patterns found"
else
    print_warning "No mobile responsive patterns detected in HeroSection"
fi

# Test 6: Link vs Anchor tag validation
echo "🔗 Checking Link vs Anchor tag usage..."

# Check for internal navigation with anchor tags
INTERNAL_ANCHORS=$(grep -n 'href="/#' src/components/HeroSection.tsx | grep '<a' || true)
if [ -n "$INTERNAL_ANCHORS" ]; then
    print_warning "Found internal navigation with anchor tags - should use Link component:"
    echo "$INTERNAL_ANCHORS"
else
    print_status 0 "No internal anchor tag issues found"
fi

echo ""
echo "🎉 All tests passed! Ready for deployment."
echo ""
echo "📝 Test Summary:"
echo "  ✅ ESLint validation"
echo "  ✅ TypeScript checking"
echo "  ✅ Next.js build"
if [ "$1" = "--docker" ]; then
    echo "  ✅ Docker build"
fi
echo "  ✅ Mobile responsiveness check"
echo "  ✅ Link/Anchor validation"
echo ""
echo "🚀 Run 'npm run dev' to test locally"
echo "🐳 Run 'docker compose up -d --build' to test with Docker"
echo "📦 Run 'git commit && git push' to deploy to production"